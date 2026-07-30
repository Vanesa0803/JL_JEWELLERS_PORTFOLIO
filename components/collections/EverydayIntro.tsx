"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EverydayIntro() {
  return (
    <section
      id="collection"
      className="bg-[#F7F3EC] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="mb-4 uppercase tracking-[0.45em] text-[#B68A45] text-xs">
            Everyday Elegance
          </p>

          <h2 className="text-4xl leading-tight text-[#231B15] md:text-6xl">
            Luxury, Worn Every Day.
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#6F655E]">
            Our Everyday Elegance collection celebrates understated luxury
            through refined jewellery designed for modern living.
            Every piece is handcrafted to offer comfort, sophistication,
            and timeless beauty.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#6F655E]">
            Whether you're heading to work, celebrating a special occasion,
            or enjoying everyday moments, these creations effortlessly
            complement your style with elegance.
          </p>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/images/collections/everyday/hero.jpg"
              alt="Everyday Elegance"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-white p-6 shadow-xl lg:block">

            <p className="text-xs uppercase tracking-[0.4em] text-[#B68A45]">
              Everyday Luxury
            </p>

            <h3 className="mt-2 text-3xl font-light text-[#231B15]">
              Timeless
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#7A726C]">
              Elegant jewellery crafted for life's beautiful everyday moments.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}