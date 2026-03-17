"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import {
  PlusCircle,
  ClipboardList,
  Clock,
  CheckCircle2,
  Hourglass,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const { user, jobs } = useAuth();
  const pendingJobs = jobs.filter((j) => j.status === "pending").length;
  const completedJobs = jobs.filter((j) => j.status === "completed").length;
  const inProgressJobs = jobs.filter((j) => j.status === "in-progress").length;

  const stats = [
    {
      label: "Total Jobs",
      value: jobs.length,
      icon: ClipboardList,
      color: "bg-blue-50 text-blue-600",
      trend: "+12%",
    },
    {
      label: "Pending",
      value: pendingJobs,
      icon: Hourglass,
      color: "bg-amber-50 text-amber-600",
      trend: null,
    },
    {
      label: "In Progress",
      value: inProgressJobs,
      icon: Clock,
      color: "bg-purple-50 text-purple-600",
      trend: null,
    },
    {
      label: "Completed",
      value: completedJobs,
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600",
      trend: null,
    },
  ];

  return (
    <div className="max-w-5xl space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          Welcome back, {user?.name?.split(" ")[0] || "there"}! 👋
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          Here&apos;s a summary of your service activity
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`h-10 w-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <Icon size={20} />
                </div>
                {stat.trend && (
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <TrendingUp size={10} />
                    {stat.trend}
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted mt-0.5">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/dashboard/post-job">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="group bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white cursor-pointer hover:shadow-xl hover:shadow-primary/20 transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <PlusCircle size={28} className="mb-3 opacity-90" />
                  <h3 className="text-lg font-bold">Post a New Job</h3>
                  <p className="text-sm text-white/80 mt-1">
                    Describe your requirement and find workers
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.div>
          </Link>

          <Link href="/dashboard/my-jobs">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <ClipboardList size={28} className="mb-3 text-primary" />
                  <h3 className="text-lg font-bold text-text-primary">
                    View My Jobs
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Track and manage your job requests
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Recent Jobs */}
      {jobs.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">
              Recent Jobs
            </h2>
            <Link
              href="/dashboard/my-jobs"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {jobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                    {job.serviceType === "Electrician" && "⚡"}
                    {job.serviceType === "Plumber" && "🔧"}
                    {job.serviceType === "Carpenter" && "🪚"}
                    {job.serviceType === "Painter" && "🎨"}
                    {job.serviceType === "Cleaner" && "🧹"}
                    {job.serviceType === "Event Helper" && "🎪"}
                    {job.serviceType === "AC Repair" && "❄️"}
                    {!["Electrician", "Plumber", "Carpenter", "Painter", "Cleaner", "Event Helper", "AC Repair"].includes(job.serviceType) && "🔧"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {job.serviceType}
                    </p>
                    <p className="text-xs text-text-muted">
                      {new Date(job.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    job.status === "pending"
                      ? "bg-amber-50 text-amber-700"
                      : job.status === "in-progress"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
