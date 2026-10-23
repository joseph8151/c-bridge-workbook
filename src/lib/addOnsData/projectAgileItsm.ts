import { AddOn } from "../addOns";

// CAPM · PRINCE2 Foundation · PSM I · ITIL Foundation
export const projectAgileItsmAddOns: AddOn[] = [
  // ---------------- CAPM ----------------
  {
    id: "100-questions-booster",
    testSlug: "capm",
    name: "CAPM 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "capm",
    name: "CAPM Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "capm",
    name: "CAPM Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- PRINCE2 Foundation ----------------
  {
    id: "100-questions-booster",
    testSlug: "prince2-foundation",
    name: "PRINCE2 Foundation 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "prince2-foundation",
    name: "PRINCE2 Foundation Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "prince2-foundation",
    name: "PRINCE2 Foundation Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- PSM I ----------------
  {
    id: "scenario-booster",
    testSlug: "psm-1",
    name: "PSM I Scenario Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Scenario Questions",
    includesOverride: ["Scrum 상황 기반 시나리오 문제", "정답", "상세 해설"],
  },
  {
    id: "mock-test-pack",
    testSlug: "psm-1",
    name: "PSM I Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "psm-1",
    name: "PSM I Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- ITIL Foundation ----------------
  {
    id: "100-questions-booster",
    testSlug: "itil-foundation",
    name: "ITIL Foundation 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "itil-foundation",
    name: "ITIL Foundation Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "itil-foundation",
    name: "ITIL Foundation Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },
];
