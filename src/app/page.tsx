import HomeHero from "@/components/home/HomeHero";
import TutoringTeaser from "@/components/home/TutoringTeaser";
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
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

// 모의고사 센터(Mock Test Centre)는 일단 비공개 — 문제집(BOOKS) 판매만 노출하는
// 홈페이지로 되돌립니다. ChoiceGate/MockTestPromo는 코드에 남아있으니, 모의고사
// 센터를 다시 열 때는 이 파일에 그 둘을 다시 넣으면 됩니다.
// 화상과외(Live Tutoring)는 문제집과 함께 메인 상품이라 Hero 바로 다음, 최상단에 노출합니다.
// 기업 문의(Business)는 수요가 없어 홈페이지 노출을 중단했습니다 (BusinessTeaser 사용 안 함,
// /business 페이지와 컴포넌트 자체는 남아있습니다).
// 01 Hero · 02 Live Tutoring · 03 Philosophy(같은 영어가 아닙니다) · 04 Credibility
// 05 Specialized Exams · 06 Value Stack(한 권의 PDF가 아닙니다) · 07 Look Inside
// 08 Method · 09 How it's built · 10 Learning Cases · 11 Why C-BRIDGE(가격 직전 설득)
// 12 Package & Price · 13 Consultation Safety · 14 Finder CTA · 15 FAQ · 16 Final CTA
export default function Home() {
  return (
    <>
      <HomeHero />
      <TutoringTeaser />
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
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
