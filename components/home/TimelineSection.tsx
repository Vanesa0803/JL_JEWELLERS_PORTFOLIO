"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <section id ="legacy"className="bg-[#111111] py-32 text-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-24 text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#C8A96A]">
            Our Legacy
          </p>

          <h2 className="font-heading text-5xl md:text-6xl">
            Crafting Memories
            <br />
            Since 1998
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Every milestone reflects our dedication to craftsmanship,
            trust and generations of unforgettable celebrations.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[#C8A96A]/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative grid gap-8 md:grid-cols-2 ${
                  index % 2 === 0
                    ? ""
                    : "md:[&>*:first-child]:order-2"
                }`}
              >

                <div
                  className={`${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16"
                  }`}
                >
                  <span className="text-4xl font-heading text-[#C8A96A]">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-heading">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/70">
                    {item.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 top-4 h-4 w-4 rounded-full border-4 border-[#111111] bg-[#C8A96A] md:left-1/2 md:-translate-x-1/2" />

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}