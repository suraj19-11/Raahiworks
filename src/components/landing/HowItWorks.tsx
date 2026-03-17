"use client";

import { motion } from "framer-motion";
import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Post Your Requirement",
    description:
      "Describe the service you need, set your budget, pick a date & time. It takes less than a minute.",
    color: "from-primary to-secondary",
    bg: "bg-orange-50",
  },
  {
    number: "02",
    icon: Users,
    title: "Workers Review",
    description:
      "Nearby verified workers see your request and express interest. Compare profiles, ratings & rates.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Get It Done",
    description:
      "Choose a worker, schedule the visit, and get quality work done at your doorstep. It's that simple.",
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">
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
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            How Raahi Works
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Three simple steps to get professional help at your doorstep
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center mb-6">
                      <div className="relative">
                        <div
                          className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon size={32} className="text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white shadow-md flex items-center justify-center">
                          <span className="text-xs font-bold text-text-primary">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
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
