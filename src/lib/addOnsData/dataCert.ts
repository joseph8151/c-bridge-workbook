import { AddOn } from "../addOns";

// SQLD · ADsP · 빅데이터분석기사 · 정보처리기사
export const dataCertAddOns: AddOn[] = [
  // ---------------- SQLD ----------------
  {
    id: "100-questions-booster",
    testSlug: "sqld",
    name: "SQLD 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
    includesOverride: [
      "SQL 기본",
      "SELECT",
      "JOIN",
      "GROUP BY",
      "Subquery",
      "SQL 활용",
      "데이터 모델링",
      "정답 및 상세 해설",
    ],
  },
  {
    id: "mock-test-pack",
    testSlug: "sqld",
    name: "SQLD Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
    note: "총 200문제 내외",
  },
  {
    id: "final-review",
    testSlug: "sqld",
    name: "SQLD Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
    includesOverride: ["핵심 개념 정리", "Final 50 Questions", "정답 및 해설"],
  },

  // ---------------- ADsP ----------------
  {
    id: "100-questions-booster",
    testSlug: "adsp",
    name: "ADsP 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "adsp",
    name: "ADsP Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "adsp",
    name: "ADsP Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
    includesOverride: ["핵심 개념 정리", "Final 50 Questions", "정답 및 해설"],
  },

  // ---------------- 빅데이터분석기사 (필기 중심) ----------------
  {
    id: "booster",
    testSlug: "big-data-analysis",
    name: "Big Data Analysis Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "big-data-analysis",
    name: "빅데이터분석기사 Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "90P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "big-data-analysis",
    name: "빅데이터분석기사 Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- 정보처리기사 ----------------
  {
    id: "200-questions-booster",
    testSlug: "information-processing-engineer",
    name: "정보처리기사 필기 200제",
    kind: "questions-booster",
    price: 59000,
    badge: "90P · 200 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "information-processing-engineer",
    name: "정보처리기사 Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "100P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "information-processing-engineer",
    name: "정보처리기사 Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 60 Questions",
  },
];
