"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EverydayHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/collections/everyday/hero.jpg"
        alt="Everyday Elegance"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >

            <p className="mb-5 uppercase tracking-[0.45em] text-[#D7B56D]">
              Signature Collection
            </p>

            <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
              Everyday Elegance
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              Luxury isn't reserved for special occasions.
              Discover timeless jewellery crafted to elevate
              every moment of your everyday life.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="#collection"
                className="rounded-full bg-[#B68A45] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-[#9E7535]"
              >
                Explore Collection
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/40 px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
              >
                Back Home
              </Link>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-3 text-[10px] uppercase tracking-[0.4em] text-white">
            Scroll
          </span>

          <div className="h-12 w-[1px] bg-white/70" />
        </div>
      </motion.div>

    </section>
  );
}