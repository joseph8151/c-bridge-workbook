import { AddOn } from "../addOns";

// MCAT · DAT · OAT
export const graduate2AddOns: AddOn[] = [
  // ---------------- MCAT ----------------
  {
    id: "cars-booster",
    testSlug: "mcat",
    name: "MCAT CARS Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "90P · 40 Passages + Questions",
    includesOverride: ["Critical Analysis and Reasoning Skills 지문", "질문", "정답 및 상세 해설"],
  },
  {
    id: "mock-test-pack",
    testSlug: "mcat",
    name: "MCAT Mock Test Pack",
    kind: "mock-test",
    price: 79000,
    badge: "120P · 3 Full Practice Tests",
    note: "전문 검수 필요",
  },
  {
    id: "final-review",
    testSlug: "mcat",
    name: "MCAT Final Review",
    kind: "final-review",
    price: 49000,
    badge: "50P · 60 Final Review Questions",
  },

  // ---------------- DAT ----------------
  {
    id: "pat-booster",
    testSlug: "dat",
    name: "DAT PAT Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 PAT Questions",
    includesOverride: ["Perceptual Ability Test 추가 문제", "SVG/Vector 방식 도형 시각자료", "정답 및 상세 해설"],
    note: "SVG / Vector Visuals 사용",
  },
  {
    id: "mock-test-pack",
    testSlug: "dat",
    name: "DAT Mock Test Pack",
    kind: "mock-test",
    price: 79000,
    badge: "110P · 3 Full Practice Tests",
  },

  // ---------------- OAT ----------------
  {
    id: "physics-booster",
    testSlug: "oat",
    name: "OAT Physics Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "oat",
    name: "OAT Mock Test Pack",
    kind: "mock-test",
    price: 79000,
    badge: "110P · 3 Full Practice Tests",
  },
];
