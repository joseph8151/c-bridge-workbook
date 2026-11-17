import { AddOn } from "../addOns";

// Versant · SPA · EPTA · SAIL — 100P 단일 상품(₩129,000)을 보완하는 낱개 상품.
// 200P/300P 상품이 아니므로 Final Review / Diagnostic / Writing Intensive / Retake Pack은 두지 않습니다.
export const corporateAddOns: AddOn[] = [
  // ---------------- Versant ----------------
  {
    id: "speaking-drill",
    testSlug: "versant",
    name: "Versant Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "70P · 100 Speaking Tasks",
  },
  {
    id: "listening-drill",
    testSlug: "versant",
    name: "Versant Listening Drill",
    kind: "listening-audio",
    price: 49000,
    badge: "60P · 80 Listening Questions · Audio Included",
  },
  {
    id: "mock-test-pack",
    testSlug: "versant",
    name: "Versant Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "70P · 10 Practice Tests",
  },

  // ---------------- SPA ----------------
  {
    id: "speaking-drill",
    testSlug: "spa",
    name: "SPA Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "70P · 80 Speaking Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "spa",
    name: "SPA Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "70P · 10 Practice Tests",
  },

  // ---------------- SAIL ----------------
  // 공개 정보가 제한적인 시험이므로 "실전 모의고사"가 아니라 "연습용 Mock Set"으로 표기합니다.
  {
    id: "speaking-drill",
    testSlug: "sail",
    name: "SAIL Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "70P · 80 Speaking Prompts",
  },
  {
    id: "mock-test-pack",
    testSlug: "sail",
    name: "SAIL Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Practice Mock Sets",
  },

  // ---------------- EPTA ----------------
  {
    id: "listening-drill",
    testSlug: "epta",
    name: "EPTA Listening Drill",
    kind: "listening-audio",
    price: 49000,
    badge: "60P · 80 Listening Questions · Audio Included",
  },
  {
    id: "speaking-drill",
    testSlug: "epta",
    name: "EPTA Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "70P · 80 Speaking Tasks",
  },
  {
    id: "mock-test-pack",
    testSlug: "epta",
    name: "EPTA Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 10 Practice Tests",
  },
];
