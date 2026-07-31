"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BridalIntro() {
  return (
    <section
      id="collection"
      className="bg-[#F7F3EC] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 uppercase tracking-[0.45em] text-[#B68A45] text-xs">
            Bridal Couture
          </p>

          <h2 className="font-heading text-4xl leading-tight text-[#231B15] md:text-6xl">
            Crafted for the most unforgettable day of your life.
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#6F655E]">
            Every bridal masterpiece by Chepuri's JL Jewellers is designed to celebrate
            love, tradition and timeless elegance. From carefully selected
            diamonds to handcrafted settings, each creation reflects
            generations of craftsmanship and meticulous attention to detail.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#6F655E]">
            Whether inspired by royal heritage or modern sophistication, our
            Bridal Couture Collection transforms cherished moments into
            heirlooms that can be treasured for generations.
          </p>
        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/collections/bridal.jpg"
              alt="Bridal Jewellery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Decorative Card */}

          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-white p-6 shadow-xl lg:block">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B68A45]">
              Since
            </p>

            <h3 className="mt-2 text-3xl font-light text-[#231B15]">
              1998
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#7A726C]">
              Celebrating generations of craftsmanship and trust.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}