import BridalHero from "@/components/collections/BridalHero";
import BridalIntro from "@/components/collections/BridalIntro";
import LuxuryCollectionProducts from "@/components/collections/LuxuryCollectionProducts";

import { collectionDetails } from "@/data/collections";

export default function BridalPage() {

  const bridal = collectionDetails.bridal;

  return (
    <>

      <BridalHero />

      <BridalIntro />

      <LuxuryCollectionProducts
        title={bridal.title}
        products={bridal.products}
      />

    </>
  );
}