export type TestGroup =
  | "EMPLOYMENT"
  | "JAPANESE"
  | "CHINESE"
  | "FLEX_SNULT"
  | "STUDY_ABROAD"
  | "PROFESSIONAL";

export type BonusType = "SPEAKING" | "LISTENING" | "WRITING" | "VOCAB" | "PROFESSIONAL";

export interface GroupMeta {
  id: TestGroup;
  navLabel: string;
  name: string;
  slug: string;
  eyebrow: string;
  headline: string;
  description: string;
  color: string;
}

export interface Test {
  id: string;
  slug: string;
  name: string;
  group: TestGroup;
  bonusTypes: BonusType[];
  tagline: string;
  description: string;
  levelOptions?: string[];
  featured?: boolean;
  badges?: string[];
}

export const GENERIC_LEVELS = ["처음 응시", "기초", "중급", "고급"];

export const groupMeta: Record<TestGroup, GroupMeta> = {
  EMPLOYMENT: {
    id: "EMPLOYMENT",
    navLabel: "취업·승진",
    name: "취업 · 승진 시험",
    slug: "employment",
    eyebrow: "취업 · 이직 · 승진",
    headline: "취업과 승진, 자격을 증명하는 시험부터.",
    description:
      "취업 준비생과 직장인이 가장 많이 준비하는 영어 평가시험입니다. Listening·Reading 중심 시험부터 말하기 평가까지 폭넓게 대비합니다.",
    color: "var(--color-employment)",
  },
  JAPANESE: {
    id: "JAPANESE",
    navLabel: "일본어",
    name: "일본어 시험",
    slug: "japanese",
    eyebrow: "일본어 능력 평가",
    headline: "일본계 기업 취업부터 어학 자격까지.",
    description:
      "일본계 기업 취업, 승진, 사내 평가를 준비하는 분들을 위한 일본어 시험 대비 자료입니다.",
    color: "var(--color-japanese)",
  },
  CHINESE: {
    id: "CHINESE",
    navLabel: "중국어",
    name: "중국어 시험",
    slug: "chinese",
    eyebrow: "중국어 능력 평가",
    headline: "중국 관련 업무와 어학 자격을 위한 준비.",
    description:
      "중국 관련 업무, 취업, 어학 자격을 준비하는 분들을 위한 중국어 시험 대비 자료입니다.",
    color: "var(--color-chinese)",
  },
  FLEX_SNULT: {
    id: "FLEX_SNULT",
    navLabel: "FLEX·SNULT",
    name: "FLEX · SNULT",
    slug: "flex-snult",
    eyebrow: "외국어 능력 평가",
    headline: "FLEX도 C-BRIDGE에서.",
    description:
      "취업, 대학, 기업 및 외국어 능력평가를 준비하는 수험생을 위한 언어별 FLEX·SNULT 대비 자료를 제공합니다.",
    color: "var(--color-flex)",
  },
  STUDY_ABROAD: {
    id: "STUDY_ABROAD",
    navLabel: "유학·이민",
    name: "유학 · 이민 시험",
    slug: "study-abroad",
    eyebrow: "유학 · 이민",
    headline: "해외 대학과 이민, 목표에 맞는 시험으로.",
    description:
      "해외 대학·대학원 진학과 이민을 준비하는 수험생을 위한 영어 및 제2외국어 시험 대비 자료입니다.",
    color: "var(--color-studyabroad)",
  },
  PROFESSIONAL: {
    id: "PROFESSIONAL",
    navLabel: "전문직",
    name: "전문직 시험",
    slug: "professional",
    eyebrow: "전문직 시험까지",
    headline: "의료·항공 등 전문직 시험까지.",
    description:
      "일반 어학시험과 달리 전문 어휘, 직무별 상황, Case Study, Speaking Scenario 등 전문직에 특화된 자료를 제공합니다.",
    color: "var(--color-professional)",
  },
};

function flexLang(name: string, id: string) {
  return {
    id: `flex-${id}`,
    slug: `flex-${id}`,
    name: `FLEX ${name}`,
    group: "FLEX_SNULT" as TestGroup,
    bonusTypes: ["LISTENING", "VOCAB"] as BonusType[],
    tagline: "외국어 능력평가",
    description: `취업·대학·공공기관·기업평가를 위한 외국어 시험. ${name} 능력을 듣기·읽기·어휘·문법과 유형별 문제, 실전 모의고사로 대비합니다.`,
  };
}

function snultLang(name: string, id: string) {
  return {
    id: `snult-${id}`,
    slug: `snult-${id}`,
    name: `SNULT ${name}`,
    group: "FLEX_SNULT" as TestGroup,
    bonusTypes: ["LISTENING", "VOCAB"] as BonusType[],
    tagline: "대학원 · 기관 어학능력평가",
    description: `대학원, 기관, 외국어 능력평가를 준비하는 수험생을 위한 ${name} 실전 문제집과 모의고사를 제공합니다.`,
  };
}

export const tests: Test[] = [
  // ---------------- EMPLOYMENT ----------------
  {
    id: "toeic",
    slug: "toeic",
    name: "TOEIC",
    group: "EMPLOYMENT",
    bonusTypes: ["LISTENING", "VOCAB"],
    tagline: "취업과 승진의 기본 영어시험",
    description:
      "취업과 승진에 가장 널리 활용되는 영어시험. Listening과 Reading을 중심으로 파트별 문제와 실전 모의고사를 제공합니다.",
    badges: ["취준생 추천"],
  },
  {
    id: "toeic-speaking",
    slug: "toeic-speaking",
    name: "TOEIC Speaking",
    group: "EMPLOYMENT",
    bonusTypes: ["SPEAKING"],
    tagline: "기업 채용·승진의 말하기 평가",
    description:
      "기업 채용과 승진에서 많이 활용되는 영어 말하기 시험. 질문 유형별 답변법과 실전 말하기 연습을 집중적으로 제공합니다.",
    badges: ["말하기 집중", "직장인 추천"],
  },
  {
    id: "opic",
    slug: "opic",
    name: "OPIc",
    group: "EMPLOYMENT",
    bonusTypes: ["SPEAKING"],
    tagline: "취준생·직장인의 영어 말하기 시험",
    description:
      "취준생과 직장인이 많이 준비하는 영어 말하기 시험. IM2·IH·AL 목표별로 답변 구조, 돌발주제, Role Play를 연습합니다.",
    levelOptions: ["처음 응시", "IM1 이하", "IM2", "IM3", "IH", "AL 목표"],
    badges: ["취준생 추천", "말하기 집중", "가장 많이 선택"],
  },
  {
    id: "versant",
    slug: "versant",
    name: "Versant",
    group: "EMPLOYMENT",
    bonusTypes: ["SPEAKING"],
    tagline: "기업 채용·임직원 영어평가",
    description:
      "기업 채용 및 임직원 영어평가에 활용되는 시험. 말하기와 듣기를 중심으로 짧은 시간 안에 정확하게 답하는 훈련을 제공합니다.",
    badges: ["직장인 추천", "말하기 집중"],
  },
  {
    id: "spa",
    slug: "spa",
    name: "SPA",
    group: "EMPLOYMENT",
    bonusTypes: ["SPEAKING"],
    tagline: "기업 임직원 영어 인터뷰 평가",
    description:
      "기업·임직원 영어 인터뷰와 말하기 평가 대비. 비즈니스 상황, 의견 제시, 설명형 문제를 실전 인터뷰 방식으로 연습합니다.",
    badges: ["직장인 추천", "말하기 집중"],
  },
  {
    id: "g-telp",
    slug: "g-telp",
    name: "G-TELP",
    group: "EMPLOYMENT",
    bonusTypes: ["VOCAB"],
    tagline: "취업·편입 영어능력시험",
    description:
      "취업과 편입에 활용되는 영어능력시험. Listening·Grammar·Reading을 유형별로 연습합니다.",
    badges: ["취준생 추천"],
  },
  {
    id: "teps",
    slug: "teps",
    name: "TEPS",
    group: "EMPLOYMENT",
    bonusTypes: ["VOCAB"],
    tagline: "서울대 개발 영어능력시험",
    description:
      "기업 채용과 편입에 활용되는 영어시험. Listening·Grammar·Vocabulary·Reading을 연습합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },

  // ---------------- JAPANESE ----------------
  {
    id: "jlpt",
    slug: "jlpt",
    name: "JLPT",
    group: "JAPANESE",
    bonusTypes: ["LISTENING", "VOCAB"],
    tagline: "N1 · N2 · N3 · N4 · N5",
    description:
      "일본어능력시험. 어휘, 문법, 독해, 청해를 레벨별로 충분히 연습할 수 있도록 구성합니다.",
    levelOptions: ["N5", "N4", "N3", "N2", "N1"],
    badges: ["첫 시험 추천"],
  },
  {
    id: "jpt",
    slug: "jpt",
    name: "JPT",
    group: "JAPANESE",
    bonusTypes: ["LISTENING", "VOCAB"],
    tagline: "취업·직장 내 실용 일본어 시험",
    description:
      "취업과 직장 내 일본어 평가에 활용되는 실용 일본어 시험. 600점·700점·800점·900점 등 목표점수별 대비가 가능합니다.",
    badges: ["직장인 추천"],
  },
  {
    id: "sjpt",
    slug: "sjpt",
    name: "SJPT",
    group: "JAPANESE",
    bonusTypes: ["SPEAKING"],
    tagline: "SJPT 일본어 말하기",
    description:
      "취업·승진·일본계 기업 평가를 위한 일본어 Speaking 집중 대비. 예상 질문부터 답변 구성, 표현, 실전 말하기까지 준비합니다.",
    levelOptions: ["처음 응시", "초급", "Level 3~4", "Level 5~6", "Level 7 이상"],
    featured: true,
    badges: ["말하기 집중", "자료가 부족한 시험 추천"],
  },
  {
    id: "bjt",
    slug: "bjt",
    name: "BJT",
    group: "JAPANESE",
    bonusTypes: ["LISTENING", "VOCAB"],
    tagline: "비즈니스 일본어 커뮤니케이션 능력시험",
    description:
      "일본어 비즈니스 커뮤니케이션 능력시험. 실무 상황 중심의 청해·독해 문제를 연습합니다.",
    badges: ["직장인 추천"],
  },

  // ---------------- CHINESE ----------------
  {
    id: "hsk",
    slug: "hsk",
    name: "HSK",
    group: "CHINESE",
    bonusTypes: ["LISTENING", "VOCAB"],
    tagline: "1급 ~ 6급",
    description: "중국어 어휘, 독해, 듣기, 쓰기를 레벨별로 준비합니다.",
    levelOptions: ["처음 응시", "1~2급", "3~4급", "5~6급"],
    badges: ["첫 시험 추천"],
  },
  {
    id: "hskk",
    slug: "hskk",
    name: "HSKK",
    group: "CHINESE",
    bonusTypes: ["SPEAKING"],
    tagline: "중국어 말하기 시험",
    description: "중국어 말하기 시험을 초급·중급·고급으로 나누어 대비합니다.",
    badges: ["말하기 집중"],
  },
  {
    id: "tsc",
    slug: "tsc",
    name: "TSC",
    group: "CHINESE",
    bonusTypes: ["SPEAKING"],
    tagline: "TSC 중국어 말하기",
    description:
      "취업·승진을 위한 중국어 말하기 시험. 질문 응답, 사진 묘사, 상황 설명, 의견 제시 등 TSC 주요 유형을 집중적으로 연습합니다.",
    levelOptions: ["처음 응시", "Level 1~3", "Level 4~5", "Level 6 이상"],
    featured: true,
    badges: ["말하기 집중", "직장인 추천"],
  },
  {
    id: "bct",
    slug: "bct",
    name: "BCT",
    group: "CHINESE",
    bonusTypes: ["LISTENING", "VOCAB"],
    tagline: "비즈니스 중국어 능력시험",
    description: "중국어 비즈니스 커뮤니케이션 능력시험. 업무 상황 중심의 듣기·읽기 문제를 연습합니다.",
    badges: ["직장인 추천"],
  },
  {
    id: "tocfl",
    slug: "tocfl",
    name: "TOCFL",
    group: "CHINESE",
    bonusTypes: ["LISTENING", "VOCAB"],
    tagline: "대만식 중국어 능력시험",
    description: "대만에서 시행하는 중국어능력시험. 어휘, 독해, 청해를 레벨별로 준비합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },

  // ---------------- FLEX / SNULT ----------------
  flexLang("영어", "english"),
  flexLang("일본어", "japanese"),
  flexLang("중국어", "chinese"),
  flexLang("프랑스어", "french"),
  flexLang("독일어", "german"),
  flexLang("스페인어", "spanish"),
  flexLang("러시아어", "russian"),
  snultLang("일본어", "japanese"),
  snultLang("중국어", "chinese"),
  snultLang("프랑스어", "french"),
  snultLang("독일어", "german"),
  snultLang("스페인어", "spanish"),
  snultLang("러시아어", "russian"),

  // ---------------- STUDY ABROAD ----------------
  {
    id: "toefl",
    slug: "toefl",
    name: "TOEFL",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "해외 대학·대학원 진학 영어시험",
    description:
      "해외 대학과 대학원 진학을 위한 영어시험. Reading·Listening·Speaking·Writing을 영역별로 충분히 연습합니다.",
    badges: ["가장 많이 선택"],
  },
  {
    id: "ielts",
    slug: "ielts",
    name: "IELTS",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "유학 · 이민 영어시험",
    description:
      "유학과 이민을 준비하는 수험생을 위한 시험. Academic과 General 과정에 맞춰 실전 문제와 Writing·Speaking 자료를 제공합니다.",
    badges: ["가장 많이 선택"],
  },
  {
    id: "pte-academic",
    slug: "pte-academic",
    name: "PTE Academic",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "컴퓨터 기반 학술 영어시험",
    description:
      "컴퓨터 기반 영어시험을 준비하는 분들을 위한 과정입니다. Speaking, Writing, Reading, Listening을 통합적으로 연습합니다.",
  },
  {
    id: "pte-core",
    slug: "pte-core",
    name: "PTE Core",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "캐나다 이민을 위한 PTE",
    description: "캐나다 이민을 목적으로 한 PTE Core 시험 대비. 실생활 중심 문항 유형을 연습합니다.",
  },
  {
    id: "duolingo",
    slug: "duolingo",
    name: "Duolingo English Test",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "온라인 영어시험",
    description: "해외대학 지원을 준비하는 수험생을 위한 온라인 영어시험 대비 과정입니다.",
  },
  {
    id: "celpip",
    slug: "celpip",
    name: "CELPIP",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "캐나다 이민 영어시험",
    description: "캐나다 이민과 시민권 신청을 위한 영어시험. 실생활 중심의 Listening·Speaking·Reading·Writing을 연습합니다.",
  },
  {
    id: "linguaskill",
    slug: "linguaskill",
    name: "Linguaskill",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "케임브리지 컴퓨터 기반 영어시험",
    description: "대학·기업에서 활용되는 케임브리지 컴퓨터 기반 영어능력시험 대비 자료를 제공합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "languagecert",
    slug: "languagecert",
    name: "LanguageCert",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "영국식 국제 영어시험",
    description: "유학·이민에 활용되는 영국 기반 국제 영어시험. 영역별 실전 문제와 모의고사를 제공합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "tcf-canada",
    slug: "tcf-canada",
    name: "TCF Canada",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "캐나다 이민 프랑스어 시험",
    description: "캐나다 이민을 위한 프랑스어 능력시험. Listening·Reading·Writing·Speaking을 연습합니다.",
  },
  {
    id: "tef-canada",
    slug: "tef-canada",
    name: "TEF Canada",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "캐나다 이민 프랑스어 시험",
    description: "캐나다 이민 및 시민권 신청을 위한 프랑스어 시험. 실전 문제와 모의고사를 제공합니다.",
  },
  {
    id: "testdaf",
    slug: "testdaf",
    name: "TestDaF",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "독일 대학 진학 독일어 시험",
    description: "독일 대학·대학원 진학을 위한 독일어 시험. 영역별 실전 문제와 모의고사를 제공합니다.",
  },

  // ---------------- PROFESSIONAL ----------------
  {
    id: "oet",
    slug: "oet",
    name: "OET",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "의사 · 간호사 등 의료전문직 영어시험",
    description:
      "의료전문직을 위한 영어시험. 전문 어휘, 임상 상황, Case Study 중심의 Writing·Speaking 자료를 제공합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "epta",
    slug: "epta",
    name: "EPTA",
    group: "PROFESSIONAL",
    bonusTypes: ["PROFESSIONAL"],
    tagline: "조종사 · 항공 종사자 영어평가",
    description: "조종사 및 항공 종사자를 위한 영어평가. 직무 상황과 Speaking Scenario 중심으로 대비합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "icao",
    slug: "icao",
    name: "ICAO English",
    group: "PROFESSIONAL",
    bonusTypes: ["PROFESSIONAL"],
    tagline: "항공 영어 말하기 · 이해능력",
    description: "항공 영어 말하기 및 이해 능력 평가. 관제·운항 상황 중심의 Speaking Scenario를 연습합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
];

export function getTestBySlug(slug: string): Test | undefined {
  return tests.find((t) => t.slug === slug);
}

export function getTestsByGroup(group: TestGroup): Test[] {
  return tests.filter((t) => t.group === group);
}

export function getLevelOptions(test: Test): string[] {
  return test.levelOptions ?? GENERIC_LEVELS;
}

export const trendingTestIds = [
  "opic",
  "sjpt",
  "tsc",
  "versant",
  "spa",
  "pte-academic",
  "jlpt",
  "hsk",
  "flex-japanese",
];
