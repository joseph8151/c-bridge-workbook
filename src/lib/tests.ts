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
  keywords?: string[];
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
    id: "versant",
    slug: "versant",
    name: "Versant",
    group: "EMPLOYMENT",
    bonusTypes: ["SPEAKING"],
    tagline: "기업 전화·컴퓨터 말하기 평가",
    description:
      "기업이 전화·컴퓨터로 보는 말하기 평가입니다. 짧은 시간 안에 정확하게 답하는 훈련을 중심으로 대비합니다.",
    badges: ["직장인 추천", "말하기 집중"],
  },
  {
    id: "spa",
    slug: "spa",
    name: "SPA (기업 영어 면접)",
    group: "EMPLOYMENT",
    bonusTypes: ["SPEAKING"],
    tagline: "기업 영어 인터뷰 평가",
    description:
      "현대차 등 기업이 쓰는 말하기 평가입니다. 비즈니스 상황, 의견 제시, 설명형 문제를 실전 인터뷰 방식으로 연습합니다.",
    badges: ["직장인 추천", "말하기 집중"],
  },
  {
    id: "trade-english",
    slug: "trade-english",
    name: "무역영어 1급",
    group: "EMPLOYMENT",
    bonusTypes: ["VOCAB"],
    tagline: "수출입 무역 실무 영어 국가공인 자격",
    description:
      "수출입 업무에 쓰이는 무역 실무 영어 자격시험입니다. 신용장(L/C), 클레임(Claims) 등 무역 서류·용어 중심으로 대비합니다.",
    keywords: ["무역영어", "무역영어 1급", "Trade English", "L/C", "신용장"],
  },
  // ---------------- JAPANESE ----------------
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
    keywords: ["PTE Core", "피티이 코어"],
  },
  {
    id: "ielts-general",
    slug: "ielts-general",
    name: "IELTS General Training",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "이민 · 취업을 위한 IELTS",
    description:
      "이민·취업을 목적으로 한 IELTS General Training 모듈 대비 과정입니다. Academic과 Reading·Writing 문항 구성이 다릅니다.",
    keywords: ["IELTS General", "아이엘츠 제너럴", "아이엘츠 이민"],
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
    tagline: "캐나다 영주·시민권 영어시험",
    description:
      "캐나다 영주권과 시민권 신청을 위한 영어시험. General이 기본이며, 실생활 중심의 Listening·Speaking·Reading·Writing을 연습합니다.",
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
    id: "languagecert-academic",
    slug: "languagecert-academic",
    name: "LanguageCert Academic",
    group: "STUDY_ABROAD",
    bonusTypes: ["WRITING"],
    tagline: "호주 비자 목록 학술 영어시험",
    description:
      "호주 비자 목록에 오르는 학술 영어시험입니다. 인정 여부는 비자 유형과 학교마다 다르므로 지원 전 확인이 필요합니다.",
    keywords: ["LanguageCert", "랭귀지서트", "LanguageCert Academic"],
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
    id: "oet-nursing",
    slug: "oet-nursing",
    name: "OET Nursing",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "간호사 영어시험",
    description:
      "간호사 직군을 위한 OET 대비 자료입니다. Reading·Listening은 공통이며, Writing·Speaking을 간호 임상 상황(case notes, 환자 응대)에 맞춰 준비합니다.",
  },
  {
    id: "oet-medicine",
    slug: "oet-medicine",
    name: "OET Medicine",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "의사 영어시험",
    description:
      "의사 직군을 위한 OET 대비 자료입니다. Reading·Listening은 공통이며, Writing·Speaking을 진료 상황(case notes, 환자 응대)에 맞춰 준비합니다.",
  },
  {
    id: "oet-pharmacy",
    slug: "oet-pharmacy",
    name: "OET Pharmacy",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "약사 영어시험",
    description:
      "약사 직군을 위한 OET 대비 자료입니다. Reading·Listening은 공통이며, Writing·Speaking을 약국 상황(복약 지도, 환자 응대)에 맞춰 준비합니다.",
  },
  {
    id: "oet-physiotherapy",
    slug: "oet-physiotherapy",
    name: "OET Physiotherapy",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "물리치료사 영어시험",
    description:
      "물리치료사 직군을 위한 OET 대비 자료입니다. Reading·Listening은 공통이며, Writing·Speaking을 재활 상황(치료 기록, 환자 응대)에 맞춰 준비합니다.",
  },
  {
    id: "oet-dentistry",
    slug: "oet-dentistry",
    name: "OET Dentistry",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "치과의사 영어시험",
    description:
      "치과의사 직군을 위한 OET 대비 자료입니다. Reading·Listening은 공통이며, Writing·Speaking을 진료 상황(case notes, 환자 응대)에 맞춰 준비합니다.",
  },
  {
    id: "oet-radiography",
    slug: "oet-radiography",
    name: "OET Radiography",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "방사선사 영어시험",
    description:
      "방사선사 직군을 위한 OET 대비 자료입니다. Reading·Listening은 공통이며, Writing·Speaking을 검사 상황(촬영 기록, 환자 응대)에 맞춰 준비합니다.",
  },
  {
    id: "oet-occupational-therapy",
    slug: "oet-occupational-therapy",
    name: "OET Occupational Therapy",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "작업치료사 영어시험",
    description:
      "작업치료사 직군을 위한 OET 대비 자료입니다. Reading·Listening은 공통이며, Writing·Speaking을 재활 상황(치료 기록, 환자 응대)에 맞춰 준비합니다.",
  },
  {
    id: "celban",
    slug: "celban",
    name: "CELBAN (셀반)",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "캐나다 간호 등록 영어",
    description:
      "캐나다 간호사 등록을 위한 영어시험입니다. 영주용 CELPIP, OET Nursing과도 형식과 제출 대상 기관이 다릅니다.",
    keywords: ["CELBAN", "셀반", "캐나다 간호 영어"],
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "telc-pflege",
    slug: "telc-pflege",
    name: "telc B1·B2 Pflege",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "독일 간호 독일어시험",
    description:
      "독일 간호 인력 등록을 위한 독일어시험입니다. OET와는 언어와 평가 기관이 다릅니다.",
    keywords: ["telc Pflege", "텔크 간호", "독일 간호 독일어", "B2 Pflege"],
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
  {
    id: "toles",
    slug: "toles",
    name: "TOLES",
    group: "PROFESSIONAL",
    bonusTypes: ["WRITING", "PROFESSIONAL"],
    tagline: "국제 로펌 · 크로스보더 계약 영어시험",
    description:
      "국제 로펌과 크로스보더 계약 업무를 위한 법률 영어시험. 계약서 독해와 법률 문서 작성 중심으로 대비합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "marlins",
    slug: "marlins",
    name: "MARLINS",
    group: "PROFESSIONAL",
    bonusTypes: ["SPEAKING", "PROFESSIONAL"],
    tagline: "해기사 · 선원 해사영어시험",
    description:
      "선원·크루즈 승무원을 위한 해사영어시험입니다. IMO 표준 해사통신용어(SMCP) 기반의 선내 상황별 듣기·말하기를 연습합니다.",
    keywords: ["MARLINS", "말린스", "해사영어", "선원 영어시험"],
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "topec",
    slug: "topec",
    name: "TOPEC",
    group: "PROFESSIONAL",
    bonusTypes: ["PROFESSIONAL"],
    tagline: "일본 병동 간호 영어시험",
    description:
      "일본 병동에서 사용하는 간호 실무 영어시험. 환자 응대와 임상 상황 중심의 회화를 대비합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "nclex",
    slug: "nclex",
    name: "NCLEX (간호 면허)",
    group: "PROFESSIONAL",
    bonusTypes: ["PROFESSIONAL"],
    tagline: "미국 · 캐나다 간호 면허 본시험",
    description:
      "영어시험이 아닙니다. 미국·캐나다 간호 면허 본시험입니다. 시험 문항 유형에 맞춘 연습서로 임상 판단형 문제를 대비합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "elpac",
    slug: "elpac",
    name: "ELPAC (항공 관제 영어)",
    group: "PROFESSIONAL",
    bonusTypes: ["PROFESSIONAL"],
    tagline: "유럽 관제 · 항공 교신 영어평가",
    description:
      "유럽 관제·항공 교신 영어평가입니다. EPTA·Aviation English(FAA)와는 별개의 시험이며, 관제·교신 상황 중심으로 대비합니다.",
    badges: ["자료가 부족한 시험 추천"],
  },
  {
    id: "faa-english",
    slug: "faa-english",
    name: "Aviation English (FAA 교신)",
    group: "PROFESSIONAL",
    bonusTypes: ["PROFESSIONAL"],
    tagline: "미국 FAA 라디오 텔레포니 영어평가",
    description:
      "미국 FAA 라디오 텔레포니 영어평가입니다. EPTA·ICAO English와 목적이 다른 시험으로, 교신 상황 중심으로 대비합니다.",
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
  "sjpt",
  "versant",
  "spa",
  "pte-academic",
  "celpip",
  "oet",
  "bct",
];
