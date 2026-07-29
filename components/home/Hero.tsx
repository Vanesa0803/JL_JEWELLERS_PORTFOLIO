"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0D0A08]">
      <Navbar/>
      {/* Background Image */}
      <Image
        src="/images/hero/family-hero.jpg"
        alt="JL Jewellers"
        fill
        priority
        className="object-cover object-right
lg:object-center"
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

      {/* Content */}
      <motion.div
  className="relative z-10 flex h-full items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
>
        <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl">
            <motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mb-5 uppercase tracking-[0.35em] text-xs text-[#C6A56B]"
>
              Timeless Beauty. Precious Memories.
            </motion.p>

            <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}className="
font-light
text-white
leading-[0.9]
tracking-[-0.03em]
text-5xl
sm:text-6xl
lg:text-7xl
xl:text-[88px]
">
              Crafting
              <br />
              Emotions,
              <br />
              <span className="text-[#D8B26E]">
                Since 1998
              </span>
            </motion.h1>

             <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.7 }} className="
mt-8
max-w-lg
text-base
leading-8
text-white/75
lg:text-lg
">
              Every handcrafted masterpiece celebrates your life's most precious
              milestones with timeless elegance.
            </motion.p>

            <motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1 }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}className="mt-10 rounded-none border border-[#B8914F] px-10 py-5 uppercase
tracking-[0.25em] text-sm tracking-wider text-[#E8D4A8] transition-all duration-500 hover:bg-[#B8914F] hover:text-black">
              Explore Collections
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}