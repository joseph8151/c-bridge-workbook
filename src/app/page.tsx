import ChoiceGate from "@/components/home/ChoiceGate";
import HomeHero from "@/components/home/HomeHero";
import MockTestPromo from "@/components/home/MockTestPromo";
import BusinessTeaser from "@/components/home/BusinessTeaser";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

// 첫 화면(스크롤 전)에는 "문제집 구매 / 모의고사 센터" 선택만 보입니다 (ChoiceGate).
// 00 Choice Gate(첫 화면, 선택만) · 01 Hero(문제집 요약) · 02 Mock Test Centre 소개(다크 섹션)
// 상세 설득/비교/가격 콘텐츠는 각 경로(/all-books, /mock-test-centre)에서 보여줍니다.
// 03 Business · 04 FAQ · 05 Final CTA
export default function Home() {
  return (
    <>
      <ChoiceGate />
      <HomeHero />
      <MockTestPromo />
      <BusinessTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
