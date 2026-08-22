import Hero from "@/components/home/Hero";
import ChooseYourTest from "@/components/home/ChooseYourTest";
import BestSellers from "@/components/home/BestSellers";
import WhyCBridge from "@/components/home/WhyCBridge";
import TheMethod from "@/components/home/TheMethod";
import WhatsHoldingYouBack from "@/components/home/WhatsHoldingYouBack";
import MockTestSection from "@/components/home/MockTestSection";
import JuniorSection from "@/components/home/JuniorSection";
import ProductFinder from "@/components/home/ProductFinder";
import SamplePreview from "@/components/home/SamplePreview";
import TrustSection from "@/components/home/TrustSection";
import ScoreJournalPreview from "@/components/home/ScoreJournalPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ChooseYourTest />
      <BestSellers />
      <WhyCBridge />
      <TheMethod />
      <WhatsHoldingYouBack />
      <MockTestSection />
      <JuniorSection />
      <ProductFinder />
      <SamplePreview />
      <TrustSection />
      <ScoreJournalPreview />
    </>
  );
}
