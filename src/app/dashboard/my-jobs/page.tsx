"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import {
  PlusCircle,
  MapPin,
  Calendar,
  IndianRupee,
  ClipboardList,
} from "lucide-react";

const serviceEmoji: Record<string, string> = {
  Electrician: "⚡",
  Plumber: "🔧",
  Carpenter: "🪚",
  Painter: "🎨",
  Cleaner: "🧹",
  "Event Helper": "🎪",
  "AC Repair": "❄️",
};

export default function MyJobsPage() {
  const { jobs } = useAuth();

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My Jobs</h1>
          <p className="text-sm text-text-secondary mt-1">
            {jobs.length} job{jobs.length !== 1 ? "s" : ""} posted
          </p>
        </div>
        <Link
          href="/dashboard/post-job"
          className="btn-primary gap-2 text-sm px-5 py-2.5"
        >
          <PlusCircle size={16} />
          New Job
        </Link>
      </div>

      {jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-12 border border-gray-100 text-center"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-section-bg mb-5">
            <ClipboardList size={28} className="text-text-muted" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            No jobs posted yet
          </h3>
          <p className="text-sm text-text-secondary mb-6 max-w-sm mx-auto">
            Post your first service requirement and connect with workers near
            you.
          </p>
          <Link href="/dashboard/post-job" className="btn-primary gap-2 text-sm">
            <PlusCircle size={16} />
            Post Your First Job
          </Link>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-md hover:border-primary/15 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Service Icon */}
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">
                    {serviceEmoji[job.serviceType] || "🔧"}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {job.serviceType}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                      {job.description}
                    </p>
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      {job.location && (
                        <span className="flex items-center gap-1.5 text-xs text-text-muted">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      )}
                      {job.budget && (
                        <span className="flex items-center gap-1.5 text-xs text-text-muted">
                          <IndianRupee size={12} />
                          {job.budget}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar size={12} />
                        {new Date(job.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 ${
                    job.status === "pending"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : job.status === "in-progress"
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {job.status === "pending"
                    ? "Pending"
                    : job.status === "in-progress"
                    ? "In Progress"
                    : "Completed"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
