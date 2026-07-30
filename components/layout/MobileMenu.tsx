"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({
  onClose,
  links,
}: MobileMenuProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 0.4,
      }}
      className="fixed inset-0 z-[100] bg-[#0E0E0E]/95 backdrop-blur-2xl"
    >
      {/* Header */}

      <div className="flex h-24 items-center justify-between px-6">
        <div className="flex flex-col text-white leading-none">
          <span className="text-xl tracking-[0.45em] font-light">
            JL
          </span>

          <span className="mt-1 text-[10px] uppercase tracking-[0.55em] opacity-70">
            JEWELLERS
          </span>
        </div>

        <button
          onClick={onClose}
          className="text-white"
          aria-label="Close Menu"
        >
          <X size={30} />
        </button>
      </div>

      {/* Links */}

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="mt-20 flex flex-col items-center gap-9"
      >
        {links.map((item) => (
          <motion.div
            key={item.name}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="group relative text-2xl uppercase tracking-[0.25em] text-white"
            >
              {item.name}

              <span className="absolute -bottom-3 left-0 h-px w-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}

        <Link
          href="/collections"
          onClick={onClose}
          className="mt-8 flex items-center gap-3 rounded-full border border-[#C9A45C] px-8 py-4 text-xs uppercase tracking-[0.35em] text-white transition-all duration-300 hover:bg-[#C9A45C] hover:text-black"
        >
          Discover

          <ArrowRight size={16} />
        </Link>
      </motion.div>

      {/* Footer */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40">
          Crafted With Legacy Since 1998
        </p>
      </div>
    </motion.div>
  );
}