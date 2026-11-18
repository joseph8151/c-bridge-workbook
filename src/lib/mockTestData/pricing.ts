import type { PricingTier } from "./types";

// 모든 시험 동일 가격 구조 (1회/5회/10회권). 무제한 이용권은 판매하지 않습니다.
export const DEFAULT_PRICING_TIERS: PricingTier[] = [
  { count: 1, price: 15000, label: "1회권" },
  { count: 5, price: 45000, label: "5회권" },
  { count: 10, price: 75000, label: "10회권" },
];
