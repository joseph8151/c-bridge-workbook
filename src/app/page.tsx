import HomeHero from "@/components/home/HomeHero";
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
import BusinessTeaser from "@/components/home/BusinessTeaser";
import TutoringTeaser from "@/components/home/TutoringTeaser";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

// 모의고사 센터(Mock Test Centre)는 일단 비공개 — 문제집(BOOKS) 판매만 노출하는
// 홈페이지로 되돌립니다. ChoiceGate/MockTestPromo는 코드에 남아있으니, 모의고사
// 센터를 다시 열 때는 이 파일에 그 둘을 다시 넣으면 됩니다.
// 01 Hero · 02 Philosophy(같은 영어가 아닙니다) · 03 Credibility · 04 Specialized Exams
// 05 Value Stack(한 권의 PDF가 아닙니다) · 06 Look Inside · 07 Method · 08 How it's built
// 09 Learning Cases · 10 Why C-BRIDGE(가격 직전 설득) · 11 Package & Price
// 12 Consultation Safety · 13 Finder CTA · 14 Business · 15 Tutoring · 16 FAQ · 17 Final CTA
export default function Home() {
  return (
    <>
      <HomeHero />
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
      <BusinessTeaser />
      <TutoringTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
