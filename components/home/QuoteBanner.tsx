"use client";

import { motion } from "framer-motion";

export default function QuoteBanner() {
  return (
    <section className="relative h-[500px] overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/common/quote-banner.jpg')",
        }}
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle Gold Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B140D]/40 via-transparent to-[#1B140D]/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-4xl text-center"
        >
          <p className="mb-6 uppercase tracking-[8px] text-[#C8A96A] text-sm">
            Our Philosophy
          </p>

          <h2 className="font-heading text-4xl md:text-6xl leading-tight text-white">
            Every masterpiece
            <br />
            begins with a memory.
          </h2>

          <div className="mt-10 w-20 h-px bg-[#C8A96A] mx-auto" />

          <p className="mt-8 text-white/70 tracking-[4px] uppercase text-sm">
            JL Jewellers
          </p>

        </motion.div>

      </div>

    </section>
  );
}