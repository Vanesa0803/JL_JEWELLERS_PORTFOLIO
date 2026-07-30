"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StatementIntro() {
  return (
    <section
      id="collection"
      className="bg-[#F7F3EC] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="mb-4 uppercase tracking-[0.45em] text-[#B68A45] text-xs">
            Statement Collection
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight text-[#231B15]">
            Jewellery That Speaks Before You Do.
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#6F655E]">
            Designed for celebrations, grand occasions and unforgettable
            entrances, our Statement Collection combines artistic design,
            exceptional gemstones and master craftsmanship.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#6F655E]">
            Every piece is created to become the centre of attention while
            preserving timeless elegance and sophistication.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/images/collections/statement/hero.jpg"
              alt="Statement Collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-white p-6 shadow-xl lg:block">

            <p className="text-xs uppercase tracking-[0.4em] text-[#B68A45]">
              Signature Luxury
            </p>

            <h3 className="mt-2 text-3xl font-light text-[#231B15]">
              Bold
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#7A726C]">
              Extraordinary jewellery created for extraordinary moments.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}