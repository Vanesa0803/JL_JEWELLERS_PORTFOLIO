import EverydayHero from "@/components/collections/EverydayHero";
import EverydayIntro from "@/components/collections/EverydayIntro";
import LuxuryCollectionProducts from "@/components/collections/LuxuryCollectionProducts";

import { collectionDetails } from "@/data/collections";

export default function EverydayPage() {
  const everyday = collectionDetails.everyday;

  return (
    <>
      <EverydayHero />
      <EverydayIntro />
      <LuxuryCollectionProducts
        title={everyday.title}
        products={everyday.products}
      />
    </>
  );
}