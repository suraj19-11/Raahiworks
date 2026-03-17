"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wrench,
  Hammer,
  Paintbrush,
  Sparkles,
  PartyPopper,
  Snowflake,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrician",
    description: "Wiring, repairs, installations & electrical safety inspections for your home.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Wrench,
    title: "Plumber",
    description: "Pipe repairs, leak fixing, bathroom fitting & drainage solutions.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Hammer,
    title: "Carpenter",
    description: "Furniture repair, custom woodwork, door fitting & cabinet installations.",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Paintbrush,
    title: "Painter",
    description: "Interior & exterior painting, wall textures & waterproofing solutions.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Sparkles,
    title: "Cleaner",
    description: "Deep cleaning, sanitization, kitchen & bathroom cleaning services.",
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: PartyPopper,
    title: "Event Helper",
    description: "Event setup, decoration, catering assistance & venue management.",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Snowflake,
    title: "AC Repair",
    description: "AC servicing, gas refilling, installation & maintenance services.",
    color: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-section-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            What We Offer
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From quick fixes to big projects, find verified professionals ready
            to help with any task.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-6 cursor-pointer border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`${service.bg} h-14 w-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient line */}
                <div
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${service.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
