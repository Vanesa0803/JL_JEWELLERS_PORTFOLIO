"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/family.jpg')",
        }}
      />

      {/* Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-8 w-full">

          <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm mb-6">
            TIMELESS BEAUTY. PRECIOUS MEMORIES.
          </p>

          <h1 className="font-heading text-white text-6xl md:text-8xl leading-[0.92] max-w-3xl">
            Crafting
            <br />
            Emotions,
            <br />
            <span className="text-[#C8A96A]">
              Since 1998
            </span>
          </h1>

          <p className="text-white/80 text-lg leading-8 mt-8 max-w-xl">
            Every piece we create celebrates the most beautiful
            moments of your life, transforming jewellery into
            treasured family memories.
          </p>

          <div className="mt-12">
  <Button href="/#collections">
    Explore Collections →
  </Button>
</div>

        </div>

      </div>

    </section>
  );
}