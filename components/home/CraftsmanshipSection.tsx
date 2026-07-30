"use client";

import { motion } from "framer-motion";
import { craftsmanshipSteps } from "@/data/craftsmanship";

export default function CraftsmanshipSection() {
  return (
    <section id ="craftsmanship" className="bg-[#111111] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#C8A96A]">
            The Art of Craftsmanship
          </p>

          <h2 className="font-heading text-5xl md:text-6xl">
            From Vision to Masterpiece
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Every JL Jewellers creation follows a meticulous journey,
            combining artistry, precision and generations of expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Gold line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#C8A96A]/30 lg:block" />

          <div className="space-y-12">
            {craftsmanshipSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "lg:pr-20 lg:text-right"
                        : "lg:pl-20"
                    }`}
                  >
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A96A]/40 bg-[#1A1A1A]">
                      <Icon className="h-6 w-6 text-[#C8A96A]" />
                    </div>

                    <h3 className="text-3xl font-heading">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-white/70">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-[#C8A96A]" />
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