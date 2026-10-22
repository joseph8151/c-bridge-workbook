import { AddOn } from "../addOns";

// AWS Cloud Practitioner · AWS Solutions Architect Associate · AZ-900 · AI-900 · CompTIA Security+ · PMP
export const cloudItPmAddOns: AddOn[] = [
  // ---------------- AWS Cloud Practitioner ----------------
  {
    id: "100-questions-booster",
    testSlug: "aws-cloud-practitioner",
    name: "AWS Cloud Practitioner 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "aws-cloud-practitioner",
    name: "AWS Cloud Practitioner Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "aws-cloud-practitioner",
    name: "AWS Cloud Practitioner Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- AWS Solutions Architect Associate ----------------
  {
    id: "architecture-scenario-booster",
    testSlug: "aws-solutions-architect-associate",
    name: "AWS SAA Architecture Scenario Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Scenario Questions",
    includesOverride: ["아키텍처 시나리오 문제", "정답", "상세 해설"],
  },
  {
    id: "mock-test-pack",
    testSlug: "aws-solutions-architect-associate",
    name: "AWS SAA Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "aws-solutions-architect-associate",
    name: "AWS SAA Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- AZ-900 ----------------
  {
    id: "100-questions-booster",
    testSlug: "az-900",
    name: "AZ-900 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "az-900",
    name: "AZ-900 Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "az-900",
    name: "AZ-900 Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- AI-900 ----------------
  {
    id: "100-questions-booster",
    testSlug: "ai-900",
    name: "AI-900 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "ai-900",
    name: "AI-900 Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "ai-900",
    name: "AI-900 Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- CompTIA Security+ ----------------
  {
    id: "100-questions-booster",
    testSlug: "comptia-security-plus",
    name: "CompTIA Security+ 100 Questions Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Questions",
  },
  {
    id: "mock-test-pack",
    testSlug: "comptia-security-plus",
    name: "CompTIA Security+ Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 5 Mock Tests",
  },
  {
    id: "final-review",
    testSlug: "comptia-security-plus",
    name: "CompTIA Security+ Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },

  // ---------------- PMP ----------------
  {
    id: "scenario-booster",
    testSlug: "pmp",
    name: "PMP Scenario Booster",
    kind: "questions-booster",
    price: 59000,
    badge: "80P · 100 Scenario Questions",
    includesOverride: ["프로세스·리더십·비즈니스 환경 시나리오 문제", "정답", "상세 해설"],
  },
  {
    id: "mock-test-pack",
    testSlug: "pmp",
    name: "PMP Mock Test Pack",
    kind: "mock-test",
    price: 79000,
    badge: "90P · 3 Mock Tests",
    note: "PMP는 시나리오 기반 문항이 많아 회차 수 대신 실전 분량을 충분히 구성했습니다.",
  },
  {
    id: "final-review",
    testSlug: "pmp",
    name: "PMP Final Review",
    kind: "final-review",
    price: 39000,
    badge: "40P · Final 50 Questions",
  },
];
