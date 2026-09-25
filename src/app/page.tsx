import HomeHero from "@/components/home/HomeHero";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import ExamIndexSection from "@/components/home/ExamIndexSection";
import Philosophy from "@/components/home/Philosophy";
import Method from "@/components/home/Method";
import BookSeries from "@/components/home/BookSeries";
import BookPreview from "@/components/BookPreview";
import WhyCBridge from "@/components/WhyCBridge";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import StudyProfiles from "@/components/StudyProfiles";
import FinderCTA from "@/components/home/FinderCTA";
import BusinessTeaser from "@/components/home/BusinessTeaser";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CredibilityStrip />
      <ExamIndexSection />
      <Philosophy />
      <Method />
      <BookSeries />
      <BookPreview />
      <WhyCBridge />
      <ProcessTimeline />
      <StudyProfiles />
      <FinderCTA />
      <BusinessTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
