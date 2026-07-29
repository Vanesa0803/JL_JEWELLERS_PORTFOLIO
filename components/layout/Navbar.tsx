"use client";

import Link from "next/link";

const navItems = [
  { label: "Moments", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Craftsmanship", href: "#" },
  { label: "Legacy", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="text-white">
          <div className="leading-none">
            <h2 className="text-3xl font-light tracking-[0.18em]">JL</h2>
            <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-white/70">
              Jewellers
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-white/85 transition duration-300 hover:text-[#D4AF6A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button className="hidden rounded-full border border-[#B8914F]/60 px-6 py-3 text-sm text-[#E7D3A5] transition-all duration-300 hover:bg-[#B8914F] hover:text-black lg:block">
          Explore
        </button>
      </div>
    </header>
  );
}