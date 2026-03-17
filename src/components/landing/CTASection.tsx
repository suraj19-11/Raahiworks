"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-12 md:p-16 text-center"
        >
          {/* Decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/20 mb-6"
            >
              <Sparkles size={28} className="text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
              Join thousands of happy customers who trust Raahi for their
              everyday service needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold text-base rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all"
              >
                Create Free Account
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold text-base rounded-xl border border-white/25 hover:bg-white/25 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
