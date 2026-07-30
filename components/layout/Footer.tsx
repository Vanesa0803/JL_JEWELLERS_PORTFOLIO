export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="font-heading text-4xl tracking-wide">
            JL Jewellers
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/60">
            Crafting timeless jewellery that celebrates
            love, heritage and unforgettable moments
            for generations.
          </p>

        </div>

        <nav className="mt-16 flex flex-wrap justify-center gap-10 text-sm uppercase tracking-[0.25em] text-white/60">

          <a href="#">Home</a>

          <a href="#">Stories</a>

          <a href="#">Collections</a>

          <a href="#">Craftsmanship</a>

          <a href="#">Legacy</a>

        </nav>

        <div className="my-16 h-px bg-white/10" />

        <p className="text-center text-sm tracking-wide text-white/40">
          © 2026 JL Jewellers. Crafted with elegance.
        </p>

      </div>

    </footer>
  );
}