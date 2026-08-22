import Hero from "@/components/home/Hero";
import FinderBanner from "@/components/home/FinderBanner";
import WhatYouGet from "@/components/home/WhatYouGet";
import PricingTiers from "@/components/PricingTiers";
import CategorySection from "@/components/home/CategorySection";
import CustomOrder from "@/components/home/CustomOrder";
import InsideBook from "@/components/home/InsideBook";
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
      <CategorySection group="JAPANESE" tone="lavender" />
      <CategorySection group="CHINESE" tone="cream" />
      <CategorySection group="FLEX_SNULT" tone="lavender" />
      <CategorySection group="STUDY_ABROAD" tone="cream" />
      <CategorySection group="PROFESSIONAL" tone="lavender" />
      <InsideBook />
      <CustomOrder />
      <BonusMaterials />
      <TrendingTests />
      <GuidesPreview />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
