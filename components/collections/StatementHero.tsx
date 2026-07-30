"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StatementHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/collections/statement/hero.jpg"
        alt="Statement Collection"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

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
              Statement Collection
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              Bold masterpieces designed for those who love jewellery that
              commands attention with timeless elegance.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="#collection"
                className="rounded-full bg-[#B68A45] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white hover:bg-[#9E7535]"
              >
                Explore Collection
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/40 px-8 py-4 text-sm uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black"
              >
                Back Home
              </Link>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}