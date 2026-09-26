import HomeHero from "@/components/home/HomeHero";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import Philosophy from "@/components/home/Philosophy";
import ExamIndexSection from "@/components/home/ExamIndexSection";
import ValueStack from "@/components/home/ValueStack";
import BookPreview from "@/components/BookPreview";
import Method from "@/components/home/Method";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import StudyProfiles from "@/components/StudyProfiles";
import WhyCBridge from "@/components/WhyCBridge";
import BookSeries from "@/components/home/BookSeries";
import ConsultationSafety from "@/components/home/ConsultationSafety";
import FinderCTA from "@/components/home/FinderCTA";
import BusinessTeaser from "@/components/home/BusinessTeaser";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

// 홈페이지 섹션 순서는 VALUE → PROOF → PRODUCT → PRICE → ACTION 흐름을 따릅니다.
// 01 Hero · 02 Philosophy(같은 영어가 아닙니다) · 03 Credibility · 04 Specialized Exams
// 05 Value Stack(한 권의 PDF가 아닙니다) · 06 Look Inside · 07 Method · 08 How it's built
// 09 Learning Cases · 10 Why C-BRIDGE(가격 직전 설득) · 11 Package & Price
// 12 Consultation Safety · 13 Finder CTA · 14 Business · 15 FAQ · 16 Final CTA
export default function Home() {
  return (
    <>
      <HomeHero />
      <Philosophy />
      <CredibilityStrip />
      <ExamIndexSection />
      <ValueStack />
      <BookPreview />
      <Method />
      <ProcessTimeline />
      <StudyProfiles />
      <WhyCBridge />
      <BookSeries />
      <ConsultationSafety />
      <FinderCTA />
      <BusinessTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
