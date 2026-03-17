"use client";

import { motion } from "framer-motion";
import { Smartphone, Send, Bell, CheckCheck } from "lucide-react";

const demoSteps = [
  {
    icon: Smartphone,
    title: "Open Raahi",
    desc: "Launch the platform and browse available services near your location.",
    color: "bg-primary",
  },
  {
    icon: Send,
    title: "Post a Job",
    desc: "Fill in your service requirements, budget, and preferred schedule.",
    color: "bg-blue-500",
  },
  {
    icon: Bell,
    title: "Workers Respond",
    desc: "Get notified when local professionals show interest in your job.",
    color: "bg-purple-500",
  },
  {
    icon: CheckCheck,
    title: "Job Completed",
    desc: "Your chosen worker arrives, completes the task, and you rate the experience.",
    color: "bg-emerald-500",
  },
];

export default function DemoSection() {
  return (
    <section id="demo" className="section bg-section-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            How the Platform Works
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A quick visual walkthrough of the Raahi experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-[#1a1a1a] rounded-[44px] p-3.5 shadow-2xl w-[300px]">
                <div className="bg-white rounded-[34px] overflow-hidden">
                  {/* Notch */}
                  <div className="flex justify-center pt-2">
                    <div className="w-20 h-5 bg-[#1a1a1a] rounded-full" />
                  </div>
                  
                  {/* App Screen */}
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-base font-bold text-text-primary">Raahi</p>
                        <p className="text-[10px] text-text-muted">Dashboard</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    </div>

                    {/* Job Card */}
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-4 mb-4 text-white">
                      <p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">
                        New Job Posted
                      </p>
                      <p className="text-sm font-semibold mb-3">
                        Electrical Wiring Repair
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 rounded-full px-2.5 py-0.5 text-[10px]">
                          ₹500 Budget
                        </div>
                        <div className="bg-white/20 rounded-full px-2.5 py-0.5 text-[10px]">
                          Today, 3 PM
                        </div>
                      </div>
                    </div>

                    {/* Worker Response */}
                    <div className="bg-white border border-gray-100 rounded-xl p-3 mb-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center text-sm">
                          👷
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-text-primary">
                            Ravi Kumar
                          </p>
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] text-amber-500">★★★★★</span>
                            <span className="text-[10px] text-text-muted">4.9</span>
                          </div>
                        </div>
                        <div className="bg-emerald-100 text-emerald-700 rounded-full px-2.5 py-1 text-[10px] font-medium">
                          Accept
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-sm">
                          👷
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-text-primary">
                            Amit Singh
                          </p>
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] text-amber-500">★★★★☆</span>
                            <span className="text-[10px] text-text-muted">4.5</span>
                          </div>
                        </div>
                        <div className="bg-primary/10 text-primary rounded-full px-2.5 py-1 text-[10px] font-medium">
                          View
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex items-center justify-around py-3 border-t border-gray-100">
                    {["🏠", "📋", "🔔", "👤"].map((e, i) => (
                      <div
                        key={i}
                        className={`text-sm ${i === 0 ? "opacity-100" : "opacity-40"}`}
                      >
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[48px] blur-3xl scale-95" />
            </div>
          </motion.div>

          {/* Right — Steps */}
          <div className="space-y-6">
            {demoSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  {/* Icon */}
                  <div className="relative shrink-0">
                    <div
                      className={`h-14 w-14 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} />
                    </div>
                    {i < demoSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-200" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
