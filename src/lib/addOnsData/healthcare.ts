import { AddOn } from "../addOns";

// OET Nursing · OET Medicine · CELBAN · MET
export const healthcareAddOns: AddOn[] = [
  // ---------------- OET Nursing ----------------
  {
    id: "writing-intensive",
    testSlug: "oet-nursing",
    name: "OET Nursing Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "80P · 40 Writing Tasks",
    includesOverride: ["Letter Writing", "Case Notes", "Sample Responses"],
  },
  {
    id: "speaking-drill",
    testSlug: "oet-nursing",
    name: "OET Nursing Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "80P · 60 Role-play Cards",
    includesOverride: ["간호 임상 상황별 Role-play Card", "답변 구조", "Sample Responses", "표현 자료"],
  },
  {
    id: "mock-test-pack",
    testSlug: "oet-nursing",
    name: "OET Nursing Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "100P · 5 Full Mock Tests",
  },
  {
    id: "retake-pack",
    testSlug: "oet-nursing",
    name: "OET Nursing Retake Pack",
    kind: "retake-pack",
    price: 79000,
    badge: "110P · 120 Questions/Tasks + 3 Mock Tests",
    includesOverride: ["영역별 Drill", "120 Questions/Tasks", "Mock Test 3회"],
  },

  // ---------------- OET Medicine ----------------
  {
    id: "writing-intensive",
    testSlug: "oet-medicine",
    name: "OET Medicine Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "80P · 40 Writing Tasks",
    includesOverride: ["Letter Writing", "Case Notes", "Sample Responses"],
  },
  {
    id: "speaking-drill",
    testSlug: "oet-medicine",
    name: "OET Medicine Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "80P · 60 Role-play Cards",
    includesOverride: ["진료 상황별 Role-play Card", "답변 구조", "Sample Responses", "표현 자료"],
  },
  {
    id: "mock-test-pack",
    testSlug: "oet-medicine",
    name: "OET Medicine Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "100P · 5 Full Mock Tests",
  },
  {
    id: "retake-pack",
    testSlug: "oet-medicine",
    name: "OET Medicine Retake Pack",
    kind: "retake-pack",
    price: 79000,
    badge: "110P · 120 Questions/Tasks + 3 Mock Tests",
    includesOverride: ["영역별 Drill", "120 Questions/Tasks", "Mock Test 3회"],
  },

  // ---------------- CELBAN ----------------
  {
    id: "speaking-drill",
    testSlug: "celban",
    name: "CELBAN Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "80P · 80 Speaking Tasks",
  },
  {
    id: "writing-intensive",
    testSlug: "celban",
    name: "CELBAN Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "80P · 50 Writing Tasks",
  },
  {
    id: "mock-test-pack",
    testSlug: "celban",
    name: "CELBAN Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "90P · 5 Full Mock Tests",
  },
  {
    id: "retake-pack",
    testSlug: "celban",
    name: "CELBAN Retake Pack",
    kind: "retake-pack",
    price: 79000,
    badge: "110P · 150 Practice Questions",
  },

  // ---------------- MET (general Michigan English Test — no distinct healthcare variant exists) ----------------
  {
    id: "speaking-drill",
    testSlug: "met",
    name: "MET Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "80P · 80 Speaking Tasks",
  },
  {
    id: "writing-intensive",
    testSlug: "met",
    name: "MET Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "80P · 50 Writing Tasks",
  },
  {
    id: "mock-test-pack",
    testSlug: "met",
    name: "MET Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "90P · 5 Full Mock Tests",
  },
];
