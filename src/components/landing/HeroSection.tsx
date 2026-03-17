"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Clock, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-secondary/5 to-primary/5" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #222 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15"
            >
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Now Live in Your City
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
              Find Trusted{" "}
              <span className="gradient-text">Workers</span>
              <br />
              Near You
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Raahi connects you with verified local professionals — electricians,
              plumbers, carpenters, painters, and more. Get quality service at
              your doorstep in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="btn-primary gap-2 text-base px-7 py-3.5"
              >
                Post a Job
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/#services"
                className="btn-secondary gap-2 text-base px-7 py-3.5"
              >
                <Play size={16} fill="currentColor" />
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                { icon: Shield, text: "Verified Workers" },
                { icon: Clock, text: "Quick Response" },
                { icon: Star, text: "4.8 Avg Rating" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-text-secondary">
                  <Icon size={16} className="text-primary" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side — Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[320px]">
              {/* Phone Frame */}
              <div className="relative bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl">
                <div className="bg-white rounded-[32px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-primary px-6 py-3 flex items-center justify-between">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-3.5 h-2.5 rounded-sm bg-white/80" />
                      <div className="w-3 h-2.5 rounded-sm bg-white/80" />
                      <div className="w-5 h-2.5 rounded-full bg-white/80" />
                    </div>
                  </div>
                  {/* App Content */}
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-white text-lg font-bold">R</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">
                          Good Morning!
                        </p>
                        <p className="text-xs text-text-muted">
                          What do you need today?
                        </p>
                      </div>
                    </div>

                    {/* Search */}
                    <div className="bg-section-bg rounded-xl px-4 py-3 mb-5 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-text-muted" />
                      <span className="text-xs text-text-muted">
                        Search for services...
                      </span>
                    </div>

                    {/* Mini Service Grid */}
                    <p className="text-xs font-semibold text-text-primary mb-3">
                      Popular Services
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { emoji: "⚡", label: "Electrician", color: "bg-amber-50" },
                        { emoji: "🔧", label: "Plumber", color: "bg-blue-50" },
                        { emoji: "🎨", label: "Painter", color: "bg-pink-50" },
                        { emoji: "🪚", label: "Carpenter", color: "bg-orange-50" },
                        { emoji: "🧹", label: "Cleaner", color: "bg-green-50" },
                        { emoji: "❄️", label: "AC Repair", color: "bg-cyan-50" },
                      ].map(({ emoji, label, color }) => (
                        <div
                          key={label}
                          className={`${color} rounded-xl p-2.5 text-center`}
                        >
                          <div className="text-lg mb-1">{emoji}</div>
                          <p className="text-[10px] font-medium text-text-primary">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Active Job Card */}
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white">
                      <p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">
                        Active Job
                      </p>
                      <p className="text-sm font-semibold mb-2">
                        🔧 Plumbing Repair
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs opacity-90">
                          Worker arriving...
                        </span>
                        <div className="bg-white/20 rounded-full px-2.5 py-1 text-[10px] font-medium">
                          ETA: 15 min
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-16 top-20 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-lg">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-primary">
                      Job Completed
                    </p>
                    <p className="text-[10px] text-text-muted">2 min ago</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-32 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                    ⭐
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-primary">
                      4.9 Rating
                    </p>
                    <p className="text-[10px] text-text-muted">1,200+ reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
