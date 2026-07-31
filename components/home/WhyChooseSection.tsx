"use client";

import { motion } from "framer-motion";
import { whyChoose } from "@/data/whyChoose";

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F7F3EC] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 uppercase tracking-[0.45em] text-xs text-[#B68A45]">
            Why Choose Chepuri's JL Jewellers
          </p>

          <h2 className="font-heading text-5xl md:text-6xl text-[#231B15]">
            Crafted with Trust.
            <br />
            Cherished for Generations.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Every creation reflects our commitment to authenticity,
            craftsmanship and lasting relationships.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {whyChoose.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EFE4]">

                  <Icon
                    size={30}
                    className="text-[#B68A45]"
                  />

                </div>

                <h3 className="font-heading text-2xl text-[#231B15]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {item.description}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}