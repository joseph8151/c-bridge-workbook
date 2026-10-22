import { AddOn } from "../addOns";

// CELPIP · PTE Academic · PTE Core · PTE Express
export const celpipPteAddOns: AddOn[] = [
  // ---------------- CELPIP ----------------
  {
    id: "speaking-drill",
    testSlug: "celpip",
    name: "CELPIP Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "80P · 100 Speaking Prompts",
    includesOverride: ["Speaking Task별 실전 문제", "답변 구조", "Sample Responses", "표현 자료"],
  },
  {
    id: "writing-intensive",
    testSlug: "celpip",
    name: "CELPIP Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "80P · 50 Writing Tasks",
    includesOverride: ["Email Writing 25문제", "Survey Response 25문제", "Sample Answer", "표현 자료"],
  },
  {
    id: "mock-test-pack",
    testSlug: "celpip",
    name: "CELPIP Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "90P · 5 Full Mock Tests",
  },
  {
    id: "retake-pack",
    testSlug: "celpip",
    name: "CELPIP Retake Pack",
    kind: "retake-pack",
    price: 79000,
    badge: "110P · 150 Practice Questions",
    includesOverride: ["취약 영역 혼합 집중 Drill", "Mini Test", "Mock Test"],
  },

  // ---------------- PTE Academic ----------------
  {
    id: "speaking-drill",
    testSlug: "pte-academic",
    name: "PTE Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "80P · 100 Speaking Tasks",
  },
  {
    id: "writing-intensive",
    testSlug: "pte-academic",
    name: "PTE Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "80P · 50 Writing Tasks",
  },
  {
    id: "mock-test-pack",
    testSlug: "pte-academic",
    name: "PTE Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "100P · 5 Full Mock Tests",
  },
  {
    id: "retake-pack",
    testSlug: "pte-academic",
    name: "PTE Retake Pack",
    kind: "retake-pack",
    price: 79000,
    badge: "110P · 150 Practice Questions",
  },

  // ---------------- PTE Core ----------------
  {
    id: "speaking-drill",
    testSlug: "pte-core",
    name: "PTE Core Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "80P · 100 Speaking Tasks",
  },
  {
    id: "writing-intensive",
    testSlug: "pte-core",
    name: "PTE Core Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "80P · 50 Writing Tasks",
  },
  {
    id: "mock-test-pack",
    testSlug: "pte-core",
    name: "PTE Core Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "90P · 5 Full Mock Tests",
  },
  {
    id: "retake-pack",
    testSlug: "pte-core",
    name: "PTE Core Retake Pack",
    kind: "retake-pack",
    price: 79000,
    badge: "110P · 150 Practice Questions",
  },

  // ---------------- PTE Express (시험 길이가 짧아 Mock 횟수를 늘림) ----------------
  {
    id: "speaking-drill",
    testSlug: "pte-express",
    name: "PTE Express Speaking Drill",
    kind: "speaking-drill",
    price: 59000,
    badge: "70P · 80 Speaking Tasks",
  },
  {
    id: "writing-intensive",
    testSlug: "pte-express",
    name: "PTE Express Writing Intensive",
    kind: "writing-intensive",
    price: 59000,
    badge: "70P · 40 Writing Tasks",
  },
  {
    id: "mock-test-pack",
    testSlug: "pte-express",
    name: "PTE Express Mock Test Pack",
    kind: "mock-test",
    price: 59000,
    badge: "80P · 10 Practice Tests",
    note: "PTE Express는 시험 길이가 짧아 Full Mock 대신 Practice Test를 더 많은 횟수로 제공합니다.",
  },
];
