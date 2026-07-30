"use client";

import Image from "next/image";

import { motion } from "framer-motion";

type Product = {
  
  name: string;
  image: string;
  metal: string;
  stone: string;
  description: string;
};

interface Props {
  title: string;
  products: Product[];
}

export default function LuxuryCollectionProducts({
  title,
  products,
}: Props) {
  return (
    <section className="bg-[#F8F5F0] py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.45em] text-xs text-[#B68A45]">
            Our Selection
          </p>

          <h2 className="mt-4 font-heading text-5xl text-[#231B15]">
            {title}
          </h2>

        </div>

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product, index) => (

            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="font-heading text-3xl text-[#231B15]">
                  {product.name}
                </h3>

                <div className="mt-5 space-y-2 text-sm uppercase tracking-widest text-[#A57A39]">

                  <p>{product.metal}</p>

                  <p>{product.stone}</p>

                </div>

                <p className="mt-6 leading-8 text-[#6B625C]">
                  {product.description}
                </p>

               
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}