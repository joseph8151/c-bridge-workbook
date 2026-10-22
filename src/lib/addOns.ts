// 메인 200P/300P(또는 전문시험 개별가) 상품과 별개로 판매하는 저가 진입용/영역 집중형/재응시용
// 낱개 상품(add-on) 카탈로그입니다. 기존 tests.ts의 메인 상품 데이터와 가격 구조는 전혀
// 건드리지 않고, testSlug로만 참조합니다.
export type AddOnKind =
  | "final-review"
  | "diagnostic"
  | "listening-audio"
  | "questions-booster"
  | "mock-test"
  | "speaking-drill"
  | "writing-intensive"
  | "section-booster"
  | "retake-pack";

export interface AddOn {
  // URL 세그먼트. 같은 testSlug 안에서만 고유하면 됩니다 (/books/{testSlug}/addons/{id}).
  id: string;
  testSlug: string;
  name: string;
  kind: AddOnKind;
  price: number;
  // 카드·상세페이지에 그대로 노출하는 분량 배지. 예: "80P · 100 Speaking Prompts"
  badge: string;
  // addOnKindMeta의 기본 포함 자료/추천 대상을 그대로 쓰지 않을 때만 지정합니다.
  includesOverride?: string[];
  recommendedForOverride?: string[];
  // "전문 검수 필요", "Logical Reasoning은 수요가 높은 핵심 영역이므로..." 같은 보충 설명.
  note?: string;
}

interface AddOnKindMeta {
  label: string;
  includes: string[];
  recommendedFor: string[];
}

export const addOnKindMeta: Record<AddOnKind, AddOnKindMeta> = {
  "final-review": {
    label: "Final Review Book",
    includes: ["시험 직전 핵심 정리", "빈출 개념", "실수 포인트", "최종 확인 문제"],
    recommendedFor: ["시험 직전 핵심만 빠르게 정리하고 싶은 분", "이미 본교재를 학습한 분"],
  },
  diagnostic: {
    label: "Diagnostic Test",
    includes: ["영역별 진단", "정답 및 해설", "취약 영역 확인", "학습 우선순위 안내"],
    recommendedFor: ["학습을 시작하기 전 본인의 수준을 먼저 확인하고 싶은 분", "어느 영역부터 공부해야 할지 모르는 분"],
  },
  "listening-audio": {
    label: "Listening Audio Pack",
    includes: ["Listening 실전 문제", "Script", "정답", "해설", "MP3 Audio"],
    recommendedFor: ["Listening 점수가 낮은 분", "실전 음원으로 반복 훈련이 필요한 분"],
  },
  "questions-booster": {
    label: "100 Questions Booster",
    includes: ["추가 실전 문제", "정답", "상세 해설"],
    recommendedFor: ["본교재 외 추가 문제가 필요한 분", "특정 유형을 더 많이 풀어보고 싶은 분"],
  },
  "mock-test": {
    label: "Mock Test Pack",
    includes: ["실전 모의고사", "정답 및 해설", "시간 배분 가이드"],
    recommendedFor: ["실전 감각을 끌어올리고 싶은 분", "시험 직전 실전 리허설이 필요한 분"],
  },
  "speaking-drill": {
    label: "Speaking Drill Pack",
    includes: ["유형별 Speaking Prompt", "답변 구조", "Sample Response", "Useful Expressions", "시간 제한 연습"],
    recommendedFor: ["Speaking 점수가 낮은 분", "말하기 연습량이 부족한 분", "시험 직전 집중 연습이 필요한 분"],
  },
  "writing-intensive": {
    label: "Writing Intensive Pack",
    includes: ["Writing Prompt", "답안 구성 가이드", "Sample Answer", "표현 정리", "실전 Writing"],
    recommendedFor: ["Writing 점수가 낮은 분", "답안 구조를 어떻게 잡아야 할지 막막한 분"],
  },
  "section-booster": {
    label: "Section Booster",
    includes: ["특정 섹션 집중", "상세 해설", "유형별 배치"],
    recommendedFor: ["특정 영역만 집중적으로 보완하고 싶은 분"],
  },
  "retake-pack": {
    label: "Retake Pack",
    includes: ["영역별 Drill", "Mini Test", "Mock Test"],
    recommendedFor: ["재응시를 준비하는 분", "이미 본교재를 학습했고 새로운 문제량이 필요한 분"],
  },
};

export function getIncludesForAddOn(a: AddOn): string[] {
  return a.includesOverride ?? addOnKindMeta[a.kind].includes;
}

export function getRecommendedForAddOn(a: AddOn): string[] {
  return a.recommendedForOverride ?? addOnKindMeta[a.kind].recommendedFor;
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ko-KR")}원`;
}
