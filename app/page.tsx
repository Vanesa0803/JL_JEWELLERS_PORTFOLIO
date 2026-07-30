import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import StorySection from "@/components/home/StorySection";
import QuoteBanner from "@/components/home/QuoteBanner";
import CollectionsSection from "@/components/home/CollectionsSection";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TimelineSection from "@/components/home/TimelineSection";
import Footer from "@/components/layout/Footer";
import JewelleryCarousel from "@/components/home/JewelleryCarousel";

export default function Home() {
  return (
   <>
  <Navbar />
  <Hero />
  <StorySection />
  <QuoteBanner />
  <CollectionsSection />
  <CraftsmanshipSection/>
  <JewelleryCarousel/>
  <WhyChooseSection/>
  <TimelineSection/>
  <Footer/>
</>
  );
}