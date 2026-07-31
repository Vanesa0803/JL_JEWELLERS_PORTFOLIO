"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const links = [
  {
    name: "Story",
    href: "/#StorySection",
  },
  {
    name: "Collections",
    href: "/#CollectionsSection",
  },
  {
    name: "Craftsmanship",
    href: "/#CraftsmanshipSection",
  },
  {
    name: "Why Chepuri's JL",
    href: "/#WhyChooseSection",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Stories", href: "/#story" },
  { name: "Collections", href: "/#collections" },
  { name: "Craftsmanship", href: "/#craftsmanship" },
  { name: "Categories", href: "/#categories" },
  { name: "Legacy", href: "/#legacy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/40 backdrop-blur-2xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}

          <Link href="/" className="text-white">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-light tracking-[0.45em]">
                Chepuri's JL
              </span>

              <span className="mt-1 text-[10px] uppercase tracking-[0.6em] opacity-80">
                JEWELLERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-xs uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-1"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}

          

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(true)}
            className="text-white lg:hidden"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            links={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
}