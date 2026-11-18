import HomeHero from "@/components/home/HomeHero";
import MainProducts from "@/components/home/MainProducts";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import Philosophy from "@/components/home/Philosophy";
import ExamIndexSection from "@/components/home/ExamIndexSection";
import ExamIndexPhotoBreak from "@/components/home/ExamIndexPhotoBreak";
import ValueStack from "@/components/home/ValueStack";
import BookPreview from "@/components/BookPreview";
import Method from "@/components/home/Method";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import StudyProfiles from "@/components/StudyProfiles";
import WhyCBridge from "@/components/WhyCBridge";
import BookSeries from "@/components/home/BookSeries";
import ConsultationSafety from "@/components/home/ConsultationSafety";
import FinderCTA from "@/components/home/FinderCTA";
import MockTestPromo from "@/components/home/MockTestPromo";
import BusinessTeaser from "@/components/home/BusinessTeaser";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

// 홈페이지 섹션 순서는 VALUE → PROOF → PRODUCT → PRICE → ACTION 흐름을 따릅니다.
// 01 Hero · 01.5 두 가지 메인 상품(문제집 / 모의고사, 투탑 노출) · 02 Philosophy(같은 영어가
// 아닙니다) · 03 Credibility · 04 Specialized Exams · 05 Value Stack(한 권의 PDF가 아닙니다)
// 06 Look Inside · 07 Method · 08 How it's built · 09 Learning Cases
// 10 Why C-BRIDGE(가격 직전 설득) · 11 Package & Price · 12 Consultation Safety
// 13 Finder CTA · 13.5 Mock Test Centre(다크 섹션, 심화 홍보) · 14 Business · 15 FAQ
// 16 Final CTA
export default function Home() {
  return (
    <>
      <HomeHero />
      <MainProducts />
      <Philosophy />
      <CredibilityStrip />
      <ExamIndexPhotoBreak />
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
      <MockTestPromo />
      <BusinessTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
