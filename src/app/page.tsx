import Hero from "@/components/home/Hero";
import FinderBanner from "@/components/home/FinderBanner";
import WhatYouGet from "@/components/home/WhatYouGet";
import PricingTiers from "@/components/PricingTiers";
import CategorySection from "@/components/home/CategorySection";
import BonusMaterials from "@/components/home/BonusMaterials";
import TrendingTests from "@/components/home/TrendingTests";
import GuidesPreview from "@/components/home/GuidesPreview";
import FaqSection from "@/components/home/FaqSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FinderBanner />
      <WhatYouGet />
      <PricingTiers />
      <CategorySection group="EMPLOYMENT" tone="light" />
      <CategorySection group="JAPANESE" tone="cream" />
      <CategorySection group="CHINESE" tone="light" />
      <CategorySection group="FLEX_SNULT" tone="cream" />
      <CategorySection group="STUDY_ABROAD" tone="light" />
      <CategorySection group="PROFESSIONAL" tone="cream" />
      <BonusMaterials />
      <TrendingTests />
      <GuidesPreview />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
