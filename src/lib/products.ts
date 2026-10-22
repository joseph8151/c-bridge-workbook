export type Tier = "COMPLETE" | "PREMIUM";

export interface TierMeta {
  tier: Tier;
  label: string; // "200P"
  pages: number;
  price: number;
  mockTestsLabel: string; // "5회" / "8회"
  name: string; // "COMPLETE"
  shortDesc: string;
  recommendedFor: string[];
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
    price: 220000,
    mockTestsLabel: "5회",
    name: "COMPLETE",
    shortDesc: "핵심 영역 또는 취약 영역을 충분히 연습하고, 시험의 기본 흐름을 안정적으로 준비하는 표준 구성.",
    recommendedFor: [
      "처음 준비하는 경우",
      "시험일까지 4~8주",
      "특정 영역 집중 훈련",
      "기본 유형부터 실전까지 한 번에 정리하고 싶은 경우",
    ],
    ctaLabel: "200P 완성 패키지 보기",
    includes: [
      "문제집 200P",
      "상세 해설집",
      "실전 모의고사 5회",
      "시험 직전 최종 요약집",
      "추가 문제 100제",
      "4주·8주 학습 플랜",
      "오답노트",
      "시험별 고득점 자료",
      "듣기 음원 또는 Speaking 자료",
      "최신 유형 추가자료",
      "평생 소장 (다운로드 기한 없음)",
      "입금 확인 후 3~10시간 이내 발송 (영업시간 내)",
      "구매 후 카카오톡 질문 지원 1회",
      "요청 시 실물 교재 제작 발송 (국내·해외)",
    ],
  },
  PREMIUM: {
    tier: "PREMIUM",
    label: "300P",
    pages: 300,
    price: 332000,
    mockTestsLabel: "8회",
    name: "INTENSIVE",
    shortDesc: "전 영역을 폭넓게 다루고, 충분한 문제량과 반복 훈련으로 고득점·상위 레벨을 준비하는 집중 구성.",
    recommendedFor: [
      "전 영역을 함께 준비하는 경우",
      "고득점 또는 상위 레벨 목표",
      "재응시 준비",
      "시험까지 8주 이상 남은 경우",
      "충분한 문제량과 반복 연습이 필요한 경우",
    ],
    badge: "INTENSIVE",
    ctaLabel: "300P 집중 패키지 보기",
    includes: [
      "문제집 300P",
      "상세 해설집",
      "대량 실전 문제",
      "실전 모의고사 8회",
      "추가 문제 200제",
      "시험 직전 Final Book",
      "4주·8주·12주 학습 계획",
      "고득점 표현집",
      "음원 또는 말하기 자료",
      "시험별 Premium Bonus",
      "최신 유형 추가자료",
      "평생 소장 (다운로드 기한 없음)",
      "입금 확인 후 3~10시간 이내 발송 (영업시간 내)",
      "구매 후 카카오톡 질문 지원 1회",
      "요청 시 실물 교재 제작 발송 (국내·해외)",
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
  "페이지 수에 따라 구성이 달라집니다. 200페이지 220,000원, 300페이지 332,000원.";

// 카드처럼 공간이 좁은 곳에서 쓰는 축약형.
export const priceSummaryCompact = `${tierMeta.COMPLETE.price.toLocaleString()}원 · ${tierMeta.PREMIUM.price.toLocaleString()}원`;
