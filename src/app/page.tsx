import ChoiceGate from "@/components/home/ChoiceGate";

// 메인 페이지는 "문제집 구매 / 모의고사 센터" 선택만 보여줍니다 (ChoiceGate).
// 그 외 소개·설득·가격 콘텐츠는 각 경로(/all-books, /mock-test-centre)에서 보여줍니다.
export default function Home() {
  return <ChoiceGate />;
}
