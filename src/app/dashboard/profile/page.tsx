"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Save,
  CheckCircle2,
} from "lucide-react";

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
      });
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">
          Profile Settings
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          Update your personal information
        </p>
      </div>

      {/* Avatar Section */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-5">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div>
            <p className="text-lg font-semibold text-text-primary">
              {user?.name || "User"}
            </p>
            <p className="text-sm text-text-muted">{user?.email || ""}</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <User size={16} className="text-primary" />
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="input-field"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <Mail size={16} className="text-primary" />
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="input-field"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <Phone size={16} className="text-primary" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="input-field"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <MapPin size={16} className="text-primary" />
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              className="input-field"
              placeholder="Area, City"
            />
          </div>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className={`mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all ${
            saved
              ? "bg-emerald-500 text-white"
              : "bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
          }`}
        >
          {saved ? (
            <>
              <CheckCircle2 size={18} />
              Saved!
            </>
          ) : (
            <>
              <Save size={18} />
              Save Changes
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
