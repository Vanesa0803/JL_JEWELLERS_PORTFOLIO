import DiamondHero from "@/components/collections/DiamondHero";
import DiamondIntro from "@/components/collections/DiamondIntro";
import LuxuryCollectionProducts from "@/components/collections/LuxuryCollectionProducts";

import { collectionDetails } from "@/data/collections";

export default function DiamondPage() {
  const diamond = collectionDetails.diamond;

  return (
    <>
      <DiamondHero />
      <DiamondIntro />
      <LuxuryCollectionProducts
        title={diamond.title}
        products={diamond.products}
      />
    </>
  );
}