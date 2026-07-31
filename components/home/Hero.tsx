"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Images */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {/* Desktop Image */}
        <Image
          src="/images/hero/hero-desktop.jpg"
          alt="Chepuri JL Jewellers Hero"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover"
        />

        {/* Mobile Image */}
        <Image
          src="/images/hero/hero-mobile.jpg"
          alt="Chepuri JL Jewellers Hero"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center"
        />
      </motion.div>

      {/* Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-[#C8A96A]">
            TIMELESS BEAUTY. PRECIOUS MEMORIES.
          </p>

          <h1 className="font-heading max-w-3xl text-5xl leading-tight text-white md:text-7xl lg:text-8xl">
            Crafting
            <br />
            Emotions,
            <br />
            <span className="text-[#C8A96A]">
              Since 1998
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
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