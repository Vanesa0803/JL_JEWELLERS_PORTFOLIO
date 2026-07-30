"use client";

export default function StorySection() {
  return (
    <section id="story" className="bg-[#F7F3EC] py-28">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-12">

        {/* Left Content */}
        <div className="space-y-6">

          <p className="uppercase tracking-[6px] text-xs text-[#B38A44]">
            Our Stories
          </p>

          <h2 className="font-heading text-5xl text-[#221A15] leading-tight">
            Every Celebration
            <br />
            Has A Story
          </h2>

          <p className="text-gray-600 leading-8">
            Jewellery becomes meaningful when it celebrates love,
            gratitude, milestones and traditions passed from one
            generation to the next.
          </p>

          <button className="mt-6 border-b border-[#B38A44] pb-1 text-[#7B5A2E] hover:text-black transition">
            Discover Stories →
          </button>

        </div>

        {/* Cards placeholder */}
        <div className="lg:col-span-2">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Large Card */}
    <div className="relative h-[520px] overflow-hidden rounded-[32px] group">

      <img
        src="/images/stories/anniversary.jpg"
        alt="Anniversary"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-8 left-8">
        

        <h3 className="text-white text-4xl font-heading mt-3">
          Anniversary
        </h3>
      </div>

    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-6">

      {/* Birthday */}
      <div className="relative h-[245px] overflow-hidden rounded-[32px] group">

        <img
          src="/images/stories/birthday.jpg"
          alt="Birthday"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-3xl font-heading">
            Birthday
          </h3>
        </div>

      </div>

      {/* Family */}
      <div className="relative h-[245px] overflow-hidden rounded-[32px] group">

        <img
          src="/images/stories/family.jpg"
          alt="Family"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/35" />
        
         

        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-3xl font-heading">
            Family
          </h3>
        </div>

      </div>

    </div>

  </div>

  {/* Bottom Festival Card */}
  <div className="relative mt-6 h-[260px] overflow-hidden rounded-[32px] group">

    <img
      src="/images/stories/festival.jpg"
      alt="Festival"
      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent" />

    <div className="absolute bottom-8 left-8">
      

      <h3 className="text-white text-4xl font-heading mt-2">
        Festivals
      </h3>
    </div>

  </div>

</div>
      </div>
    </section>
  );
}