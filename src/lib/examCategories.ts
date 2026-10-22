import { getTestBySlug, Test } from "./tests";

// 시험 탐색 구조 전용 분류 체계입니다. tests.ts의 실제 상품 데이터(가격·설명·라우팅)는
// 전혀 건드리지 않고, slug 참조로만 그룹을 구성합니다. 같은 시험이 여러 그룹/카테고리에
// 속해도 데이터가 복제되지 않습니다(예: Versant는 "직무·전문 영어"와 "기업·승진 평가" 양쪽에
// 참조되지만 실제 Test 객체는 tests.ts에 하나뿐입니다).
export type ExamCategoryId =
  | "language-exams"
  | "immigration-visa"
  | "healthcare-medical"
  | "graduate-professional"
  | "employment-aptitude"
  | "data-certification"
  | "cloud-it-certification"
  | "project-management";

export interface ExamCategoryMeta {
  id: ExamCategoryId;
  navLabel: string;
  navLabelEn: string;
  description: string;
}

export interface ExamGroupMeta {
  id: string;
  categoryId: ExamCategoryId;
  label: string;
  description: string;
  testSlugs: string[];
  // FLEX·SNULT처럼 언어별 개별 카드 대신 요약 카드 하나로 묶어 보여줄 때 사용합니다.
  summaryLink?: { href: string; label: string; desc: string };
}

export interface ComingSoonTest {
  id: string;
  name: string;
  groupId: string;
  note: string;
}

export const examCategoryOrder: ExamCategoryId[] = [
  "language-exams",
  "immigration-visa",
  "healthcare-medical",
  "graduate-professional",
  "employment-aptitude",
  "data-certification",
  "cloud-it-certification",
  "project-management",
];

export const examCategoryMeta: Record<ExamCategoryId, ExamCategoryMeta> = {
  "language-exams": {
    id: "language-exams",
    navLabel: "어학·공인영어",
    navLabelEn: "Language Exams",
    description: "유학, 이민, 취업, 대학 지원 및 영어능력 증빙을 위한 시험",
  },
  "immigration-visa": {
    id: "immigration-visa",
    navLabel: "이민·비자",
    navLabelEn: "Immigration & Visa",
    description: "캐나다, 영국, 미국 등 이민·비자·정착 과정에서 활용되는 시험",
  },
  "healthcare-medical": {
    id: "healthcare-medical",
    navLabel: "간호·의료",
    navLabelEn: "Healthcare & Medical",
    description: "간호사, 의사, 의료 전문직의 면허·진학·영어능력 시험",
  },
  "graduate-professional": {
    id: "graduate-professional",
    navLabel: "대학원·전문시험",
    navLabelEn: "Graduate & Professional",
    description: "로스쿨, 경영대학원, 의료계열 등 대학원·전문대학원 입학시험",
  },
  "employment-aptitude": {
    id: "employment-aptitude",
    navLabel: "취업·적성",
    navLabelEn: "Employment & Aptitude",
    description: "기업 채용, 승진, 공공기관, 해외취업 및 직무적성 시험",
  },
  "data-certification": {
    id: "data-certification",
    navLabel: "데이터·자격",
    navLabelEn: "Data & Certification",
    description: "데이터 분석, 데이터베이스, IT 실무 및 자격 취득을 위한 시험",
  },
  "cloud-it-certification": {
    id: "cloud-it-certification",
    navLabel: "클라우드·IT 자격",
    navLabelEn: "Cloud & IT Certification",
    description: "AWS, Microsoft Azure, CompTIA 등 클라우드·IT 실무 자격시험",
  },
  "project-management": {
    id: "project-management",
    navLabel: "프로젝트·관리 자격",
    navLabelEn: "Project Management",
    description: "PMP, CAPM, PRINCE2 등 프로젝트 관리 자격시험",
  },
};

export const examGroups: ExamGroupMeta[] = [
  // ---------------- LANGUAGE EXAMS ----------------
  {
    id: "english-proficiency",
    categoryId: "language-exams",
    label: "영어 공인시험",
    description: "유학·이민·취업 목적의 영어능력 시험",
    testSlugs: [
      "pte-academic",
      "pte-core",
      "pte-express",
      "pte-home",
      "celpip",
      "ielts",
      "ielts-life-skills",
      "toefl",
      "met",
      "languagecert",
      "languagecert-academic",
      "linguaskill",
      "duolingo",
      "oopt",
      "cambridge-c1-advanced",
      "sat",
    ],
  },
  {
    id: "professional-english",
    categoryId: "language-exams",
    label: "직무·전문 영어",
    description: "간호, 의료, 항공, 기업 평가 등 직무 목적의 영어시험",
    testSlugs: [
      "oet",
      "oet-nursing",
      "oet-medicine",
      "oet-pharmacy",
      "oet-physiotherapy",
      "oet-dentistry",
      "oet-radiography",
      "oet-occupational-therapy",
      "celban",
      "telc-pflege",
      "epta",
      "icao",
      "elpac",
      "faa-english",
      "toles",
      "marlins",
      "topec",
      "trade-english",
      "spa",
      "versant",
      "espt",
      "teps-speaking",
      "opic-english",
      "opic-chinese",
      "opic-japanese",
      "opic-spanish",
      "opic-vietnamese",
    ],
  },
  {
    id: "asian-european-languages",
    categoryId: "language-exams",
    label: "제2외국어·언어능력 시험",
    description: "일본어·중국어 및 기타 제2외국어 능력평가",
    testSlugs: ["sjpt", "bjt", "bct", "tocfl", "jft-basic", "eps-topik", "tcf-canada", "tef-canada", "testdaf"],
    summaryLink: {
      href: "/flex-snult",
      label: "FLEX · SNULT 보기",
      desc: "대학 외국어. 언어는 상담 때 고릅니다.",
    },
  },

  // ---------------- IMMIGRATION & VISA ----------------
  {
    id: "canada-immigration",
    categoryId: "immigration-visa",
    label: "캐나다 이민",
    description: "캐나다 영주권·시민권·이민 목적 시험",
    testSlugs: ["celpip", "pte-core", "ielts-general", "tef-canada", "tcf-canada"],
  },
  {
    id: "uk-visa",
    categoryId: "immigration-visa",
    label: "영국 비자·정착",
    description: "영국 비자 신청과 정착을 위한 시험",
    testSlugs: ["ielts-life-skills", "pte-home", "trinity-gese", "trinity-ise", "skills-for-english-ukvi"],
  },
  {
    id: "us-immigration",
    categoryId: "immigration-visa",
    label: "미국 이민·시민권",
    description: "미국 시민권 신청을 위한 시험",
    testSlugs: ["us-citizenship-test"],
  },
  {
    id: "brazil-immigration",
    categoryId: "immigration-visa",
    label: "브라질 이민·유학",
    description: "브라질 이민·유학을 위한 포르투갈어 시험",
    testSlugs: ["celpe-bras"],
  },

  // ---------------- HEALTHCARE & MEDICAL ----------------
  {
    id: "nursing",
    categoryId: "healthcare-medical",
    label: "간호사 시험",
    description: "간호 면허와 간호 직군 영어시험",
    testSlugs: ["nclex", "oet-nursing", "celban", "telc-pflege", "topec"],
  },
  {
    id: "medicine",
    categoryId: "healthcare-medical",
    label: "의사·의대 시험",
    description: "의사 직군 영어시험과 의학전문대학원 입학시험",
    testSlugs: ["oet-medicine", "mcat", "ucat"],
  },
  {
    id: "dental-optometry",
    categoryId: "healthcare-medical",
    label: "치대·검안대학 시험",
    description: "치의학·검안학전문대학원 입학시험",
    testSlugs: ["dat", "oat", "oet-dentistry"],
  },
  {
    id: "allied-health",
    categoryId: "healthcare-medical",
    label: "기타 의료직 영어시험",
    description: "약사·물리치료사·방사선사·작업치료사 영어시험",
    testSlugs: ["oet-pharmacy", "oet-physiotherapy", "oet-radiography", "oet-occupational-therapy"],
  },

  // ---------------- GRADUATE & PROFESSIONAL ----------------
  {
    id: "law-school",
    categoryId: "graduate-professional",
    label: "로스쿨",
    description: "법학전문대학원 입학시험",
    testSlugs: ["lsat"],
  },
  {
    id: "graduate-school",
    categoryId: "graduate-professional",
    label: "일반 대학원",
    description: "대학원 진학 공인 입학시험",
    testSlugs: ["gre"],
  },
  {
    id: "business-school",
    categoryId: "graduate-professional",
    label: "MBA·경영대학원",
    description: "경영전문대학원 입학시험",
    testSlugs: ["gmat"],
  },
  {
    id: "medical-admissions",
    categoryId: "graduate-professional",
    label: "의료계열 대학원·입학",
    description: "의학·치의학·검안학전문대학원 입학시험",
    testSlugs: ["mcat", "ucat", "dat", "oat"],
  },

  // ---------------- EMPLOYMENT & APTITUDE ----------------
  {
    id: "korea-employment",
    categoryId: "employment-aptitude",
    label: "국내 취업·공공기관",
    description: "국내 취업·공공기관·무역 실무 시험",
    testSlugs: ["eps-topik", "spa", "versant", "trade-english"],
  },
  {
    id: "japan-employment",
    categoryId: "employment-aptitude",
    label: "일본 취업",
    description: "일본 취업·특정기능 비자를 위한 일본어 시험",
    testSlugs: ["jft-basic", "bjt", "sjpt"],
  },
  {
    id: "corporate-assessment",
    categoryId: "employment-aptitude",
    label: "기업·승진 평가",
    description: "기업 채용·승진·사내 평가에 활용되는 말하기 평가",
    testSlugs: [
      "versant",
      "spa",
      "espt",
      "teps-speaking",
      "opic-english",
      "opic-chinese",
      "opic-japanese",
      "opic-spanish",
      "opic-vietnamese",
      "bct",
    ],
  },

  // ---------------- DATA & CERTIFICATION ----------------
  {
    id: "data-analysis",
    categoryId: "data-certification",
    label: "데이터 분석 자격",
    description: "데이터 이해, 분석 기획, 통계 및 데이터 분석 역량을 평가하는 자격시험",
    testSlugs: ["adsp", "big-data-analysis"],
  },
  {
    id: "database",
    categoryId: "data-certification",
    label: "데이터베이스 자격",
    description: "SQL, 데이터 모델링, 데이터베이스 활용 능력을 평가하는 자격시험",
    testSlugs: ["sqld"],
  },
  {
    id: "it-processing",
    categoryId: "data-certification",
    label: "IT·정보처리",
    description: "소프트웨어 설계·개발, 데이터베이스, 정보시스템 구축 등 IT 실무 자격시험",
    testSlugs: ["information-processing-engineer"],
  },

  // ---------------- CLOUD & IT CERTIFICATION ----------------
  {
    id: "aws",
    categoryId: "cloud-it-certification",
    label: "AWS",
    description: "AWS 클라우드 기초부터 아키텍처 설계까지 다루는 자격시험",
    testSlugs: ["aws-cloud-practitioner", "aws-solutions-architect-associate"],
  },
  {
    id: "microsoft-azure",
    categoryId: "cloud-it-certification",
    label: "Microsoft Azure",
    description: "Azure 클라우드와 AI 서비스 기초를 다루는 자격시험",
    testSlugs: ["az-900", "ai-900"],
  },
  {
    id: "comptia",
    categoryId: "cloud-it-certification",
    label: "CompTIA",
    description: "네트워크·보안·하드웨어 실무를 다루는 국제 IT 자격시험",
    testSlugs: ["comptia-security-plus"],
  },
  {
    id: "devops-kubernetes",
    categoryId: "cloud-it-certification",
    label: "DevOps · Kubernetes",
    description: "컨테이너 오케스트레이션과 인프라 자동화 자격시험",
    testSlugs: [],
  },
  {
    id: "cloud-data",
    categoryId: "cloud-it-certification",
    label: "Cloud Data",
    description: "클라우드 데이터 플랫폼 실무 자격시험",
    testSlugs: [],
  },

  // ---------------- PROJECT MANAGEMENT ----------------
  {
    id: "pmi",
    categoryId: "project-management",
    label: "PMI",
    description: "PMI(Project Management Institute) 공인 프로젝트 관리 자격시험",
    testSlugs: ["pmp"],
  },
  {
    id: "prince2",
    categoryId: "project-management",
    label: "PRINCE2",
    description: "PRINCE2 방법론 기반 프로젝트 관리 자격시험",
    testSlugs: [],
  },
];

// 아직 상품 데이터·가격이 확정되지 않아 실제 판매 카드로는 노출하지 않는 확장 후보입니다.
// 구조만 미리 준비해두고, 실제 상품이 준비되면 tests.ts에 Test를 추가한 뒤 위 testSlugs에
// slug만 추가하면 됩니다(이 배열에서는 제거).
export const comingSoonTests: ComingSoonTest[] = [
  { id: "adp", name: "ADP", groupId: "data-analysis", note: "데이터분석 전문가 자격시험 · 준비 중" },
  { id: "sqlp", name: "SQLP", groupId: "database", note: "SQL 전문가 자격시험 · 준비 중" },
  { id: "japan-spi", name: "일본 SPI", groupId: "japan-employment", note: "일본 취업 적성검사 · 준비 중" },
  { id: "ai-102", name: "AI-102", groupId: "microsoft-azure", note: "Azure AI Engineer 자격시험 · 준비 중" },
  { id: "comptia-a-plus", name: "CompTIA A+", groupId: "comptia", note: "IT 하드웨어·OS 실무 자격시험 · 준비 중" },
  { id: "comptia-network-plus", name: "CompTIA Network+", groupId: "comptia", note: "네트워크 실무 자격시험 · 준비 중" },
  { id: "cka", name: "CKA", groupId: "devops-kubernetes", note: "Kubernetes 운영 자격시험 · 준비 중" },
  { id: "terraform-associate", name: "Terraform Associate", groupId: "devops-kubernetes", note: "인프라 자동화 자격시험 · 준비 중" },
  { id: "snowpro-core", name: "SnowPro Core", groupId: "cloud-data", note: "클라우드 데이터 플랫폼 자격시험 · 준비 중" },
  { id: "capm", name: "CAPM", groupId: "pmi", note: "PMI 입문 프로젝트 관리 자격시험 · 준비 중" },
  { id: "prince2-foundation", name: "PRINCE2 Foundation", groupId: "prince2", note: "PRINCE2 기초 자격시험 · 준비 중" },
  { id: "prince2-practitioner", name: "PRINCE2 Practitioner", groupId: "prince2", note: "PRINCE2 실무 자격시험 · 준비 중" },
];

export function getGroupsForCategory(categoryId: ExamCategoryId): ExamGroupMeta[] {
  return examGroups.filter((g) => g.categoryId === categoryId);
}

export function getTestsForGroup(group: ExamGroupMeta): Test[] {
  return group.testSlugs.map((slug) => getTestBySlug(slug)).filter((t): t is Test => Boolean(t));
}

export function getComingSoonForGroup(groupId: string): ComingSoonTest[] {
  return comingSoonTests.filter((c) => c.groupId === groupId);
}
