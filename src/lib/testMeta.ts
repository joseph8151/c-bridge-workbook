export type TestId = "TOEFL" | "IELTS" | "PTE" | "DET" | "JUNIOR";

export interface TestMeta {
  id: TestId;
  name: string;
  fullName: string;
  slug: string;
  tagline: string;
  description: string;
  color: string;
  skills: string[];
  eyebrow: string;
}

export const testMeta: Record<TestId, TestMeta> = {
  TOEFL: {
    id: "TOEFL",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    slug: "toefl",
    tagline: "Academic English for Global University Admission",
    description:
      "해외 대학 진학을 위한 학술 영어 시험. Reading, Listening, Speaking, Writing 네 영역을 유형별로 집중 훈련합니다.",
    color: "var(--color-toefl)",
    skills: ["Reading", "Listening", "Speaking", "Writing", "Vocabulary", "Full Mock Tests"],
    eyebrow: "GLOBAL UNIVERSITY ADMISSION",
  },
  IELTS: {
    id: "IELTS",
    name: "IELTS",
    fullName: "International English Language Testing System",
    slug: "ielts",
    tagline: "Academic English for Study, Work & Global Mobility",
    description:
      "유학, 취업, 이민을 위한 국제 공인 영어 시험. Academic 모듈 기준 4개 영역 문제집과 실전 모의고사를 제공합니다.",
    color: "var(--color-ielts)",
    skills: [
      "Academic Reading",
      "Listening",
      "Writing Task 1",
      "Writing Task 2",
      "Speaking",
      "Full Mock Tests",
    ],
    eyebrow: "STUDY, WORK & GLOBAL MOBILITY",
  },
  PTE: {
    id: "PTE",
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    slug: "pte",
    tagline: "Fast, Computer-Based Academic English Assessment",
    description:
      "AI 채점 기반의 컴퓨터 시험. Integrated Skills 유형에 강한 실전 감각을 기르는 문제집 시리즈입니다.",
    color: "var(--color-pte)",
    skills: [
      "Speaking",
      "Writing",
      "Reading",
      "Listening",
      "Integrated Skills",
      "Full Mock Tests",
    ],
    eyebrow: "COMPUTER-BASED ACADEMIC ENGLISH",
  },
  DET: {
    id: "DET",
    name: "DUOLINGO ENGLISH TEST",
    fullName: "Duolingo English Test",
    slug: "duolingo",
    tagline: "Adaptive Online English Assessment for Global Admission",
    description:
      "짧은 시간, 어디서나 응시 가능한 적응형 온라인 시험. Interactive 유형까지 포함한 전 문항 유형을 연습합니다.",
    color: "var(--color-det)",
    skills: [
      "Reading",
      "Interactive Reading",
      "Interactive Listening",
      "Speaking",
      "Writing",
      "Adaptive Practice",
      "Full Mock Tests",
    ],
    eyebrow: "ADAPTIVE ONLINE ENGLISH TEST",
  },
  JUNIOR: {
    id: "JUNIOR",
    name: "C-BRIDGE JUNIOR",
    fullName: "TOEFL Junior & International School English",
    slug: "junior",
    tagline: "Early Academic English for International School Students",
    description:
      "TOEFL Junior, TOEFL Primary, 국제학교 영어 커리큘럼을 위한 기초 학술 영어 훈련 시리즈입니다.",
    color: "var(--color-purple)",
    skills: [
      "TOEFL Junior",
      "TOEFL Primary",
      "International School English",
      "Academic Reading",
      "Academic Vocabulary",
    ],
    eyebrow: "INTERNATIONAL SCHOOL ENGLISH",
  },
};

export const levelInfo = {
  FOUNDATION: { label: "FOUNDATION", ko: "기본 유형 적응" },
  TARGET: { label: "TARGET", ko: "목표 점수 집중" },
  ADVANCED: { label: "ADVANCED", ko: "고득점 대비" },
  FINAL: { label: "FINAL", ko: "시험 직전" },
} as const;

export type Level = keyof typeof levelInfo;
