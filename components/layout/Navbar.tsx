"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/15">
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">

        <div>
          <h2 className="text-white text-5xl font-light tracking-[12px]">
            JL
          </h2>

          <p className="text-white/70 tracking-[6px] text-xs mt-2">
            JEWELLERS
          </p>
        </div>

        <nav className="hidden lg:flex gap-10 text-white text-sm tracking-widest uppercase">
          <Link href="#">Moments</Link>
          <Link href="#">Collections</Link>
          <Link href="#">Craftsmanship</Link>
          <Link href="#">Legacy</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>

        

      </div>
    </header>
  );
}