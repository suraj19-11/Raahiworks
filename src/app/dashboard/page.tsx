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
  ChevronRight,
  Zap,
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
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "+12%",
    },
    {
      label: "Pending",
      value: pendingJobs,
      icon: Hourglass,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      trend: null,
    },
    {
      label: "In Progress",
      value: inProgressJobs,
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: null,
    },
    {
      label: "Completed",
      value: completedJobs,
      icon: CheckCircle2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      trend: "+5%",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-5 sm:pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            Welcome back, {user?.name?.split(" ")[0] || "there"}! 👋
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mt-1.5 font-medium">
            Here's what is happening with your service requests today.
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm text-xs sm:text-sm font-semibold text-text-secondary inline-flex self-start sm:self-auto w-fit">
          {new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`absolute -right-4 -top-4 w-20 h-20 sm:w-24 sm:h-24 ${stat.bgColor} opacity-50 rounded-full blur-2xl group-hover:scale-110 transition-transform`} />
              
              <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10 flex-wrap gap-2">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-[14px] sm:rounded-[16px] ${stat.bgColor} ${stat.color} flex items-center justify-center shadow-sm shrink-0`}>
                  <Icon size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
                </div>
                {stat.trend && (
                  <span className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    <TrendingUp size={10} className="sm:w-3 sm:h-3" strokeWidth={3} />
                    {stat.trend}
                  </span>
                )}
              </div>
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">{stat.value}</p>
                <p className="text-xs sm:text-sm font-semibold text-text-secondary mt-0.5 sm:mt-1">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4 sm:mb-5 flex items-center gap-2">
          <Zap className="text-primary" size={20} /> Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Link href="/dashboard/post-job">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative overflow-hidden bg-gradient-to-br from-[#ff6b2c] to-[#ff8f5c] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 text-white cursor-pointer shadow-[0_12px_40px_-10px_rgba(255,107,44,0.4)] transition-all flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between relative z-10 gap-4 sm:gap-0">
                <div className="pr-0 sm:pr-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 bg-white/20 backdrop-blur-md rounded-[16px] sm:rounded-[18px] flex items-center justify-center mb-4 sm:mb-6 shadow-inner">
                    <PlusCircle size={24} className="sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-1 sm:mb-2">Post a New Job</h3>
                  <p className="text-[14px] sm:text-[15px] font-medium text-white/90 leading-relaxed max-w-[280px]">
                    Describe your requirement and find the perfect reliable worker in minutes.
                  </p>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors shadow-sm shrink-0 self-end sm:self-auto mt-2 sm:mt-0">
                  <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px] group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/dashboard/my-jobs">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative overflow-hidden bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-gray-100 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between relative z-10 gap-4 sm:gap-0">
                <div className="pr-0 sm:pr-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 bg-gray-50 rounded-[16px] sm:rounded-[18px] border border-gray-100 flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                    <ClipboardList size={24} className="sm:w-7 sm:h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-text-primary tracking-tight mb-1 sm:mb-2">
                    View My Jobs
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-medium text-text-secondary leading-relaxed max-w-[280px]">
                    Track active requirements, view worker proposals, and manage your history.
                  </p>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors shadow-sm shrink-0 self-end sm:self-auto mt-2 sm:mt-0">
                  <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px] text-text-muted group-hover:text-white group-hover:translate-x-0.5 transition-all" strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Recent Jobs */}
      {jobs.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold text-text-primary">
              Recent Job Activity
            </h2>
            <Link
              href="/dashboard/my-jobs"
              className="text-[13px] sm:text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1 group"
            >
              View all <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 overflow-hidden">
            <div className="divide-y divide-gray-50">
              {jobs.slice(0, 4).map((job) => (
                <div
                  key={job.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50/50 transition-colors group cursor-pointer gap-3 sm:gap-0"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] sm:rounded-[14px] bg-primary/10 flex items-center justify-center shadow-inner group-hover:bg-primary/15 transition-colors shrink-0">
                      <span className="text-xl sm:text-2xl drop-shadow-sm">
                        {job.serviceType === "Electrician" && "⚡"}
                        {job.serviceType === "Plumber" && "🔧"}
                        {job.serviceType === "Carpenter" && "🪚"}
                        {job.serviceType === "Painter" && "🎨"}
                        {job.serviceType === "Cleaner" && "🧹"}
                        {job.serviceType === "Event Helper" && "🎪"}
                        {job.serviceType === "AC Repair" && "❄️"}
                        {!["Electrician", "Plumber", "Carpenter", "Painter", "Cleaner", "Event Helper", "AC Repair"].includes(job.serviceType) && "🔧"}
                      </span>
                    </div>
                    <div>
                      <p className="text-[15px] sm:text-base font-bold text-text-primary mb-0.5">
                        {job.serviceType}
                      </p>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-medium text-text-muted">
                        <Clock size={12} className="sm:w-[13px] sm:h-[13px]" />
                        {new Date(job.createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4 mt-1 sm:mt-0 pl-[56px] sm:pl-0">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wide px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg ${
                        job.status === "pending"
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : job.status === "in-progress"
                          ? "bg-blue-50 text-blue-600 border border-blue-100"
                          : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                      }`}
                    >
                      {job.status.replace("-", " ")}
                    </span>
                    <ChevronRight size={18} className="sm:w-5 sm:h-5 text-gray-300 group-hover:text-primary transition-colors block sm:hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
