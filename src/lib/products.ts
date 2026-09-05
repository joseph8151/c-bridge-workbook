export type Tier = "STANDARD" | "COMPLETE" | "PREMIUM";

export interface TierMeta {
  tier: Tier;
  label: string; // "100P"
  pages: number;
  price: number;
  mockTestsLabel: string; // "3회" / "10회" / "15회 이상"
  name: string; // "STANDARD"
  shortDesc: string;
  badge?: string;
  ctaLabel: string;
  includes: string[];
}

export const tierMeta: Record<Tier, TierMeta> = {
  STANDARD: {
    tier: "STANDARD",
    label: "100P",
    pages: 100,
    price: 89000,
    mockTestsLabel: "3회",
    name: "STANDARD",
    shortDesc: "시험을 처음 준비하거나 특정 시험을 집중적으로 연습하고 싶은 분.",
    ctaLabel: "100P 구성 보기",
    includes: [
      "문제집 100P",
      "상세 해설집",
      "시험 직전 핵심 요약집",
      "실전 모의고사 3회",
      "4주 학습계획표",
      "오답노트",
      "시험별 추가자료",
    ],
  },
  COMPLETE: {
    tier: "COMPLETE",
    label: "200P",
    pages: 200,
    price: 149000,
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
    price: 199000,
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

export const tierOrder: Tier[] = ["STANDARD", "COMPLETE", "PREMIUM"];

// Per-test price overrides. Most tests use the standard tierMeta price;
// a test id listed here charges a different amount per tier instead
// (e.g. OET, a specialized professional-exam package).
const PROFESSIONAL_PRICE: Record<Tier, number> = {
  STANDARD: 149000,
  COMPLETE: 249000,
  PREMIUM: 329000,
};

export const priceOverrides: Partial<Record<string, Record<Tier, number>>> = {
  oet: PROFESSIONAL_PRICE,
  epta: PROFESSIONAL_PRICE,
  icao: PROFESSIONAL_PRICE,
};

export function getTierPrice(testId: string | undefined, tier: Tier): number {
  return priceOverrides[testId ?? ""]?.[tier] ?? tierMeta[tier].price;
}

export function getStartingPrice(testId?: string): number {
  return getTierPrice(testId, "STANDARD");
}

export function getTestPriceLabel(testId?: string): string {
  return `${getStartingPrice(testId).toLocaleString()}원부터`;
}

// Combined starting-price line for site-wide (non test-specific) copy,
// since general and professional exams start at different prices.
export function getSiteWidePriceLabel(): string {
  return `일반 시험 ${tierMeta.STANDARD.price.toLocaleString()}원부터 · 전문직 ${PROFESSIONAL_PRICE.STANDARD.toLocaleString()}원부터`;
}

export function getProfessionalPriceLine(): string {
  return `OET · EPTA · ICAO 등 전문직 — 100P ${PROFESSIONAL_PRICE.STANDARD.toLocaleString()} · 200P ${PROFESSIONAL_PRICE.COMPLETE.toLocaleString()} · 300P ${PROFESSIONAL_PRICE.PREMIUM.toLocaleString()}`;
}
