"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import {
  Wrench,
  FileText,
  Users,
  IndianRupee,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const serviceTypes = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Cleaner",
  "Event Helper",
  "AC Repair",
];

export default function PostJobPage() {
  const { addJob } = useAuth();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    description: "",
    workerPreference: "",
    budget: "",
    location: "",
    dateTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.serviceType ||
      !formData.description ||
      !formData.location ||
      !formData.dateTime
    ) {
      return;
    }
    addJob(formData);
    setSubmitted(true);
    setTimeout(() => {
      router.push("/dashboard/my-jobs");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-24">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6"
        >
          <CheckCircle2 size={40} className="text-emerald-600" />
        </motion.div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Job Posted Successfully!
        </h2>
        <p className="text-text-secondary">
          Your requirement has been posted. Workers near you will be notified.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">
          Post a New Job
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          Fill in the details and we&apos;ll match you with the right workers
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-6">
          {/* Service Type */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <Wrench size={16} className="text-primary" />
              Service Type <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="input-field appearance-none cursor-pointer"
              required
            >
              <option value="">Select a service</option>
              {serviceTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <FileText size={16} className="text-primary" />
              Work Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the work you need done in detail..."
              rows={4}
              className="input-field resize-none"
              required
            />
          </div>

          {/* Worker Preference */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <Users size={16} className="text-primary" />
              Worker Preference
            </label>
            <select
              name="workerPreference"
              value={formData.workerPreference}
              onChange={handleChange}
              className="input-field appearance-none cursor-pointer"
            >
              <option value="">No preference</option>
              <option value="experienced">Experienced (3+ years)</option>
              <option value="top-rated">Top Rated (4.5+)</option>
              <option value="budget-friendly">Budget Friendly</option>
            </select>
          </div>

          {/* Budget & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <IndianRupee size={16} className="text-primary" />
                Budget
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="₹500 - ₹2000"
                className="input-field"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <MapPin size={16} className="text-primary" />
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Area, City"
                className="input-field"
                required
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <Calendar size={16} className="text-primary" />
              Date & Time <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="input-field cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-primary w-full gap-2 py-3.5 text-base"
        >
          Post Requirement
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
