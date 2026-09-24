export type Tier = "COMPLETE" | "PREMIUM";

export interface TierMeta {
  tier: Tier;
  label: string; // "200P"
  pages: number;
  price: number;
  mockTestsLabel: string; // "10회" / "15회 이상"
  name: string; // "COMPLETE"
  shortDesc: string;
  badge?: string;
  ctaLabel: string;
  includes: string[];
}

// 모든 시험 동일 가격. 시험 종류에 따라 금액이 달라지지 않습니다.
export const tierMeta: Record<Tier, TierMeta> = {
  COMPLETE: {
    tier: "COMPLETE",
    label: "200P",
    pages: 200,
    price: 245000,
    mockTestsLabel: "10회",
    name: "COMPLETE",
    shortDesc: "시험을 충분히 연습하고 한 번에 제대로 준비하려는 고객을 위한 주력 상품.",
    badge: "BEST",
    ctaLabel: "200P 완성 패키지 보기",
    includes: [
      "문제집 200P",
      "상세 해설집",
      "실전 모의고사 10회",
      "시험 직전 최종 요약집",
      "추가 문제 100제",
      "4주·8주 학습 플랜",
      "오답노트",
      "시험별 고득점 자료",
      "듣기 음원 또는 Speaking 자료",
      "최신 유형 추가자료",
    ],
  },
  PREMIUM: {
    tier: "PREMIUM",
    label: "300P",
    pages: 300,
    price: 369000,
    mockTestsLabel: "15회 이상",
    name: "PREMIUM",
    shortDesc: "충분한 문제량과 고득점·상위 레벨을 목표로 하는 고객을 위한 집중 패키지.",
    badge: "PREMIUM",
    ctaLabel: "300P 집중 패키지 보기",
    includes: [
      "문제집 300P",
      "상세 해설집",
      "대량 실전 문제",
      "실전 모의고사 15회 이상",
      "추가 문제 200제",
      "시험 직전 Final Book",
      "4주·8주·12주 학습 계획",
      "고득점 표현집",
      "음원 또는 말하기 자료",
      "시험별 Premium Bonus",
      "최신 유형 추가자료",
    ],
  },
};

export const tierOrder: Tier[] = ["COMPLETE", "PREMIUM"];
export const defaultTier: Tier = "COMPLETE";

export function getTierPrice(tier: Tier): number {
  return tierMeta[tier].price;
}

// 홈·시험 페이지·상담 폼 등에서 가격을 설명할 때 쓰는 통일된 한 줄 카피.
export const priceSummaryLine =
  "페이지 수에 따라 구성이 달라집니다. 200페이지 245,000원, 300페이지 369,000원.";

// 카드처럼 공간이 좁은 곳에서 쓰는 축약형.
export const priceSummaryCompact = `${tierMeta.COMPLETE.price.toLocaleString()}원 · ${tierMeta.PREMIUM.price.toLocaleString()}원`;
