"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    image: "/services/electrician.png",
    title: "Electrician",
    description: "Wiring, repairs, installations & electrical safety inspections for your home.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    image: "/services/plumber.png",
    title: "Plumber",
    description: "Pipe repairs, leak fixing, bathroom fitting & drainage solutions.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    image: "/services/carpenter.png",
    title: "Carpenter",
    description: "Furniture repair, custom woodwork, door fitting & cabinet installations.",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
  },
  {
    image: "/services/painter.png",
    title: "Painter",
    description: "Interior & exterior painting, wall textures & waterproofing solutions.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
  },
  {
    image: "/services/cleaner.png",
    title: "Cleaner",
    description: "Deep cleaning, sanitization, kitchen & bathroom cleaning services.",
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
  },
  {
    image: "/services/event-helper.png",
    title: "Event Helper",
    description: "Event setup, decoration, catering assistance & venue management.",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
  },
  {
    image: "/services/ac-repair.png",
    title: "AC Repair",
    description: "AC servicing, gas refilling, installation & maintenance services.",
    color: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-50",
  },
  {
    image: "/services/tailor.png",
    title: "Tailor",
    description: "Stitching, alterations, custom clothing & fabric repair services.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
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
          className="text-center mb-10 md:mb-16"
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
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent`} />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

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
