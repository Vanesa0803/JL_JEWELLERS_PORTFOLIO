"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { collections } from "@/data/collections";

export default function CollectionsSection() {
  return (
    <section id ="collections" className="bg-[#F7F3EC] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#B68A45]">
            Signature Collections
          </p>

          <h2 className="text-5xl md:text-6xl font-light text-[#231B15]">
            Crafted For Every Chapter
          </h2>
        </div>

        <div className="space-y-32">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#B68A45]">
                  Collection {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-5xl font-light text-[#231B15]">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-md text-lg leading-8 text-gray-600">
                  {item.subtitle}
                </p>

                <Link
  href={`/collections/${item.slug}`}
  className="mt-10 inline-flex border-b border-[#B68A45] pb-1 text-[#7B5A2E] transition hover:text-black"
>
  Explore Collection →
</Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}