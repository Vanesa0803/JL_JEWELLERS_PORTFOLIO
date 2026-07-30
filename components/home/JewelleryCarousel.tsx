"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { jewelleryCategories } from "@/data/jewelleryCategories";

export default function JewelleryCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % jewelleryCategories.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + jewelleryCategories.length) %
        jewelleryCategories.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const item = jewelleryCategories[current];

  return (
    <section id="categories" className="bg-[#F7F3EC] py-32 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-xs uppercase tracking-[0.45em] text-[#B68A45]">
            Shop by Jewellery
          </p>

          <h2 className="mt-5 font-heading text-5xl md:text-6xl text-[#231B15]">
            Discover Timeless Categories
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Explore thoughtfully curated jewellery categories,
            handcrafted for every celebration and every generation.
          </p>

        </div>

        {/* Slider */}

        <div className="relative">

          {/* Previous */}

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition hover:scale-110 lg:flex"
          >
            <ChevronLeft />
          </button>

          {/* Next */}

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition hover:scale-110 lg:flex"
          >
            <ChevronRight />
          </button>

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >

              {/* Image */}

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/5] overflow-hidden rounded-[32px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}

              <div>

                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#B68A45]">
                  Category
                </p>

                <h3 className="font-heading text-5xl text-[#231B15]">
                  {item.title}
                </h3>

                <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">
                  {item.description}
                </p>

                

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Indicators */}

          <div className="mt-12 flex justify-center gap-3">

            {jewelleryCategories.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-[#B68A45]"
                    : "w-2 bg-[#D6D0C6]"
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}