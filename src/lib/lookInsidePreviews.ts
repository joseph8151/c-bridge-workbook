export type PreviewVariant = "practice" | "answer" | "mock" | "review" | "plan";

export interface PreviewPage {
  no: string;
  variant: PreviewVariant;
  eyebrow: string;
  titleEn: string;
  desc: string;
}

// LOOK INSIDE 섹션에서 보여주는 5개의 교재 페이지 미리보기.
// 실제 시험 문항을 복사하지 않은 C-BRIDGE 자체 데모 콘텐츠이며,
// 검증되지 않은 시험 시간·문항 수는 사용하지 않습니다.
export const lookInsidePreviews: PreviewPage[] = [
  {
    no: "01",
    variant: "practice",
    eyebrow: "실전 유형 문제",
    titleEn: "Practice Question",
    desc: "실제 시험 유형에 맞춰 문제를 반복해서 연습합니다.",
  },
  {
    no: "02",
    variant: "answer",
    eyebrow: "정답과 해설",
    titleEn: "Answer & Explanation",
    desc: "정답뿐 아니라 풀이 포인트까지 확인합니다.",
  },
  {
    no: "03",
    variant: "mock",
    eyebrow: "실전 모의",
    titleEn: "Mock Test",
    desc: "실제 시험 흐름을 고려해 전체 과정을 연습합니다.",
  },
  {
    no: "04",
    variant: "review",
    eyebrow: "시험 직전 정리",
    titleEn: "Final Review",
    desc: "시험 전에 다시 봐야 할 핵심 내용을 정리합니다.",
  },
  {
    no: "05",
    variant: "plan",
    eyebrow: "학습 계획",
    titleEn: "Study Plan",
    desc: "준비 기간에 맞춰 학습 순서를 정리합니다.",
  },
];
