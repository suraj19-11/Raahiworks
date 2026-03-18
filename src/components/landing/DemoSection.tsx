"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Send, 
  Bell, 
  CheckCheck,
  Wifi,
  Battery,
  Signal,
  Zap,
  CheckCircle2,
  Star,
  Home,
  ClipboardList,
  User as UserIcon,
  Check
} from "lucide-react";

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
          className="text-center mb-12 md:mb-20"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <div className="relative bg-[#1e1e20] rounded-[48px] p-[10px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] w-[320px] border-[4px] border-[#3a3a3c]">
                <div className="bg-[#f9f9fb] rounded-[38px] overflow-hidden relative h-[650px] flex flex-col">
                  {/* Status Bar */}
                  <div className="px-6 pt-3 pb-2 flex justify-between items-center z-20 relative">
                    <span className="text-xs font-semibold text-black">9:41</span>
                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[110px] h-[30px] bg-black rounded-full" />
                    <div className="flex items-center gap-1.5 text-black">
                      <Signal size={14} className="fill-current" />
                      <Wifi size={14} />
                      <Battery size={16} className="fill-current" />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 pb-24 no-scrollbar relative z-10">
                    {/* Header */}
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.2 }}
                      className="flex justify-between items-center mb-6"
                    >
                      <div>
                        <h1 className="text-[22px] font-bold tracking-tight text-gray-900 leading-tight block">Raahi</h1>
                        <p className="text-[13px] text-gray-500 font-medium">Dashboard</p>
                      </div>
                      <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Profile" className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover bg-orange-100" />
                    </motion.div>

                    {/* Orange Card */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                      className="bg-gradient-to-br from-[#ff7e36] to-[#ff9853] rounded-2xl p-5 mb-5 shadow-lg shadow-orange-500/20 text-white relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 blur-2xl" />
                      <div className="flex items-center gap-1.5 mb-2 relative z-10">
                        <Zap size={14} className="fill-white" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/95">New Job Posted</span>
                      </div>
                      <h2 className="text-[18px] font-bold mb-4 relative z-10">Electrical Wiring Repair</h2>
                      <div className="flex gap-2 relative z-10">
                        <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">₹500 Budget</span>
                        <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">Today, 3 PM</span>
                      </div>
                    </motion.div>

                    {/* Ravi Kumar Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                      className="bg-white rounded-[20px] p-4 mb-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50"
                    >
                      <span className="bg-orange-50 text-orange-500 text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 inline-block">Recommended Worker</span>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ravi" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                            <div className="absolute -bottom-0.5 -right-0.5 bg-[#349469] rounded-full p-0.5 border-2 border-white">
                              <Check size={10} className="text-white" strokeWidth={3} />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-[15px] leading-tight">Ravi Kumar</h3>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="flex text-amber-400">
                                <Star size={12} className="fill-current" /><Star size={12} className="fill-current" /><Star size={12} className="fill-current" /><Star size={12} className="fill-current" /><Star size={12} className="fill-current" />
                              </div>
                              <span className="text-[11px] text-gray-600 font-semibold ml-1">4.9 <CheckCircle2 size={11} className="inline text-[#349469] -mt-0.5 ml-0.5" /></span>
                            </div>
                            <div className="mt-1.5">
                              <span className="bg-orange-50 text-orange-500 text-[10px] font-bold px-2 py-0.5 rounded-md">₹500 Budget</span>
                            </div>
                          </div>
                        </div>
                        <button className="bg-[#469e74] hover:bg-[#3b8663] text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-colors shadow-sm shadow-[#469e74]/20 active:scale-95">Accept</button>
                      </div>
                    </motion.div>

                    {/* Amit Singh Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                      className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Amit" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                          <div>
                            <h3 className="font-bold text-gray-900 text-[15px] leading-tight">Amit Singh</h3>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="flex text-amber-400">
                                <Star size={12} className="fill-current" /><Star size={12} className="fill-current" /><Star size={12} className="fill-current" /><Star size={12} className="fill-current" /><Star size={12} className="text-gray-200 fill-current" />
                              </div>
                              <span className="text-[11px] text-gray-500 font-semibold ml-1">4.5</span>
                            </div>
                          </div>
                        </div>
                        <button className="bg-transparent border border-orange-400 text-orange-500 text-[13px] font-semibold px-5 py-2 rounded-full transition-colors hover:bg-orange-50 active:scale-95">View</button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-[10px] border-t border-gray-100/50 rounded-b-[38px] px-6 py-4 pb-[22px] flex justify-between items-center shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.05)] z-20">
                     <div className="flex flex-col items-center gap-1 group cursor-pointer hover:-translate-y-1 transition-transform">
                       <Home size={22} className="text-[#ff6b2b]" />
                       <span className="text-[10px] font-bold text-[#ff6b2b]">Home</span>
                     </div>
                     <div className="flex flex-col items-center gap-1 group cursor-pointer hover:-translate-y-1 transition-transform">
                       <div className="relative">
                         <ClipboardList size={22} className="text-[#9ca3af] group-hover:text-gray-600 transition-colors" />
                         <div className="absolute -bottom-0.5 -right-0.5 bg-[#9ca3af] rounded-full p-0.5 border border-white"><Check size={8} className="text-white" strokeWidth={4} /></div>
                       </div>
                       <span className="text-[10px] font-medium text-[#9ca3af] group-hover:text-gray-600">Jobs</span>
                     </div>
                     <div className="flex flex-col items-center gap-1 group cursor-pointer hover:-translate-y-1 transition-transform relative">
                       <Bell size={22} className="text-[#9ca3af] group-hover:text-gray-600 transition-colors" />
                       <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff6b2b] rounded-full border border-white" />
                       <span className="text-[10px] font-medium text-[#9ca3af] group-hover:text-gray-600">Alerts</span>
                     </div>
                     <div className="flex flex-col items-center gap-1 group cursor-pointer hover:-translate-y-1 transition-transform">
                       <UserIcon size={22} className="text-[#9ca3af] group-hover:text-gray-600 transition-colors" />
                       <span className="text-[10px] font-medium text-[#9ca3af] group-hover:text-gray-600">Profile</span>
                     </div>
                     {/* Home Indicator */}
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[48px] blur-3xl scale-95" />
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
