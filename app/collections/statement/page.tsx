import StatementHero from "@/components/collections/StatementHero";
import StatementIntro from "@/components/collections/StatementIntro";
import LuxuryCollectionProducts from "@/components/collections/LuxuryCollectionProducts";

import { collectionDetails } from "@/data/collections";

export default function StatementPage() {
  const statement = collectionDetails.statement;

  return (
    <>
      <StatementHero />

      <StatementIntro />

      <LuxuryCollectionProducts
        title={statement.title}
        products={statement.products}
      />
    </>
  );
}