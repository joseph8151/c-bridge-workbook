import { Test, groupMeta } from "./tests";

export interface WhoTakesTestInfo {
  purpose: string; // 시험 목적
  audience: string; // 주요 응시자
  usedIn: string; // 시험 활용 국가 또는 기관
  differenceFromSimilar: string; // 비슷한 시험과의 차이
  // 아래 세 필드는 공신력 있는 공개 정보로 확인된 시험에만 채웁니다.
  // 확실하지 않은 숫자는 비워 두고, Exam Overview에서 해당 행을 생략합니다.
  duration?: string;
  score?: string;
  sections?: string[];
}

// 시험별 "이 시험은 누가 준비하나요?" 데이터. 새 시험을 추가하거나 내용을 고칠 땐 이 파일만 수정하면 됩니다.
export const whoTakesTest: Record<string, WhoTakesTestInfo> = {
  "pte-academic": {
    purpose: "대학·대학원 진학을 위한 컴퓨터 기반 학술 영어 능력 평가입니다.",
    audience: "해외 대학·대학원 지원자, 학생 비자를 신청하는 유학 준비생.",
    usedIn: "목표 대학·기관이 PTE Academic 성적을 인정하는 경우에 활용됩니다. 인정 여부는 지원 기관 기준으로 확인이 필요합니다.",
    differenceFromSimilar: "IELTS·TOEFL과 달리 전 영역이 컴퓨터로 채점되어 결과가 빠르고, Speaking과 Writing이 통합 채점되는 문항이 있습니다.",
    duration: "약 2시간",
    score: "10–90점",
    sections: ["Speaking & Writing", "Reading", "Listening"],
  },
  "pte-core": {
    purpose: "캐나다 이민(Express Entry 등)을 목적으로 설계된 실생활 중심 영어시험입니다.",
    audience: "캐나다 영주권을 준비하는 이민 신청자.",
    usedIn: "캐나다 이민 프로그램에서 활용됩니다. 신청 유형별 요구 점수는 이민 프로그램 기준으로 다릅니다.",
    differenceFromSimilar: "학술 목적인 PTE Academic과 달리 이민 실무 상황 중심 문항으로 구성되어 있습니다.",
    duration: "약 2시간",
    score: "10–90점",
    sections: ["Speaking & Writing", "Reading", "Listening"],
  },
  celpip: {
    purpose: "캐나다 영주권·시민권 신청을 위한 캐나다식 영어시험입니다.",
    audience: "캐나다 영주권·시민권을 준비하는 이민 신청자.",
    usedIn: "캐나다 이민, 시민권 신청에서 활용됩니다.",
    differenceFromSimilar: "IELTS General과 달리 캐나다 실생활 상황에 특화되어 있으며, 전 영역이 컴퓨터 기반으로 진행됩니다.",
    duration: "약 3시간",
    score: "CLB(Canadian Language Benchmark) 기준",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
  },
  ielts: {
    purpose: "유학·이민을 위한 국제 공인 영어시험입니다.",
    audience: "해외 대학 진학, 이민을 준비하는 지원자.",
    usedIn: "Academic은 대학·대학원 진학, General Training은 이민·취업 목적으로 활용됩니다. 인정 여부는 지원 기관 기준으로 확인이 필요합니다.",
    differenceFromSimilar: "PTE·TOEFL과 달리 Speaking이 대면 인터뷰 방식으로 진행됩니다.",
    duration: "약 2시간 45분(Speaking 별도)",
    score: "0–9.0 밴드",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
  },
  toefl: {
    purpose: "해외 대학·대학원 진학을 위한 학술 영어시험입니다.",
    audience: "미국을 포함한 해외 대학·대학원 지원자.",
    usedIn: "다수 해외 대학의 입학 요건으로 활용됩니다. 인정 여부는 지원 대학 기준으로 확인이 필요합니다.",
    differenceFromSimilar: "IELTS와 달리 전 영역이 컴퓨터로 진행되며, Speaking도 마이크에 녹음하는 방식입니다.",
    duration: "약 2시간",
    score: "0–120점",
    sections: ["Reading", "Listening", "Speaking", "Writing"],
  },
  oet: {
    purpose: "의료전문직을 위한 직군별 영어시험입니다.",
    audience: "해외 취업·등록을 준비하는 간호사, 의사, 약사 등 의료전문직 종사자.",
    usedIn: "영국·호주·뉴질랜드 등 의료기관 및 면허 등록 기관에서 활용됩니다. 인정 여부는 등록 기관 기준으로 확인이 필요합니다.",
    differenceFromSimilar: "일반 영어시험과 달리 Writing·Speaking이 직군별 임상 상황(case notes, 환자 응대)으로 출제됩니다.",
    duration: "약 3시간",
    score: "A–E 등급(직군별 서브테스트)",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
  },
  epta: {
    purpose: "조종사 등 항공 종사자의 항공 영어 구사 능력을 평가하는 시험입니다.",
    audience: "조종사, 관제사 등 무선통신을 사용하는 항공 종사자.",
    usedIn: "항공사·항공 당국의 자격 요건으로 활용됩니다.",
    differenceFromSimilar: "일반 회화 시험과 달리 관제·운항 교신 상황 중심의 Speaking Scenario로 구성됩니다.",
  },
  icao: {
    purpose: "ICAO(국제민간항공기구) 기준의 항공 영어 말하기·이해 능력 평가입니다.",
    audience: "국제선 운항·관제 업무를 수행하는 항공 종사자.",
    usedIn: "각국 항공 당국의 ICAO Language Proficiency 등급 기준으로 활용됩니다.",
    differenceFromSimilar: "EPTA·FAA 교신 평가와 목적은 비슷하지만, 채점 기준(ICAO 6단계 등급 체계)과 시행 기관이 다릅니다.",
  },
  toles: {
    purpose: "국제 로펌, 크로스보더 계약 업무를 위한 법률 영어시험입니다.",
    audience: "국제 업무를 다루는 변호사, 법무팀, 로스쿨 재학생.",
    usedIn: "국제 로펌 채용, 법률 영어 자격 증빙으로 활용됩니다.",
    differenceFromSimilar: "일반 비즈니스 영어시험과 달리 계약서 독해, 법률 문서 작성 중심으로 출제됩니다.",
  },
  topec: {
    purpose: "일본 병동에서 근무하는 간호 인력을 위한 실무 일본어 시험입니다.",
    audience: "일본 병원 취업을 준비하는 간호 인력.",
    usedIn: "일본 의료기관 채용 과정에서 활용됩니다.",
    differenceFromSimilar: "OET와 달리 일본어 기반이며, 병동 환자 응대·인수인계 상황에 특화되어 있습니다.",
  },
  nclex: {
    purpose: "미국·캐나다 간호 면허를 취득하기 위한 본시험입니다.",
    audience: "미국·캐나다에서 간호사로 등록하려는 응시자.",
    usedIn: "미국·캐나다 각 주(州)의 간호 면허 등록 기관에서 활용됩니다.",
    differenceFromSimilar: "영어시험이 아니라 임상 판단력을 평가하는 면허시험으로, OET·CELBAN 등 영어시험과는 목적이 다릅니다.",
  },
  elpac: {
    purpose: "유럽 지역 관제·항공 교신을 위한 영어평가입니다.",
    audience: "유럽 관제 업무를 수행하는 항공 종사자.",
    usedIn: "유럽 항공 당국의 자격 요건으로 활용됩니다.",
    differenceFromSimilar: "미국 FAA 교신평가, EPTA와 목적은 비슷하지만 시행 지역과 채점 기관이 다릅니다.",
  },
  "faa-english": {
    purpose: "미국 FAA 기준의 라디오 텔레포니(무선교신) 영어평가입니다.",
    audience: "미국 영공에서 교신하는 조종사·관제사.",
    usedIn: "미국 FAA 관련 자격 요건으로 활용됩니다.",
    differenceFromSimilar: "ICAO English, EPTA와 목적은 비슷하지만 미국 FAA 기준으로 채점됩니다.",
  },
  sjpt: {
    purpose: "일본어 말하기 능력을 레벨로 평가하는 시험입니다.",
    audience: "취업·승진, 일본계 기업 평가를 준비하는 응시자.",
    usedIn: "일본계 기업 채용·승진 평가 기준으로 활용됩니다.",
    differenceFromSimilar: "필기 중심 JPT와 달리 말하기 능력만 평가합니다.",
  },
  versant: {
    purpose: "전화·컴퓨터 기반으로 진행되는 영어 말하기 자동 채점 시험입니다.",
    audience: "기업 채용·평가에서 말하기 능력을 확인해야 하는 직장인.",
    usedIn: "기업의 채용·내부 평가 과정에서 활용됩니다.",
    differenceFromSimilar: "SPA 등 대면 인터뷰 방식과 달리 짧은 시간 안에 정해진 문항에 답하는 자동 채점 방식입니다.",
  },
  spa: {
    purpose: "기업이 활용하는 영어 인터뷰형 말하기 평가입니다.",
    audience: "채용·승진 과정에서 영어 인터뷰를 준비하는 직장인.",
    usedIn: "국내 기업의 채용·승진 평가에서 활용됩니다.",
    differenceFromSimilar: "Versant의 자동 채점 방식과 달리 비즈니스 상황, 의견 제시 등 인터뷰형 문항으로 구성됩니다.",
  },
  toeic: {
    purpose: "취업과 승진에 활용되는 영어 Listening·Reading 시험입니다.",
    audience: "취업 준비생, 승진 평가를 준비하는 직장인.",
    usedIn: "국내 기업의 채용·승진 기준으로 널리 활용됩니다.",
    differenceFromSimilar: "말하기를 평가하는 TOEIC Speaking과 달리 Listening·Reading만 평가합니다.",
    duration: "약 2시간",
    score: "10–990점",
    sections: ["Listening", "Reading"],
  },
  "toeic-speaking": {
    purpose: "TOEIC의 말하기 영역을 별도로 평가하는 시험입니다.",
    audience: "채용·승진에서 말하기 평가가 필요한 직장인.",
    usedIn: "기업 채용·승진 평가에서 활용됩니다.",
    differenceFromSimilar: "Listening·Reading 중심의 TOEIC과 달리 말하기 문항으로만 구성됩니다.",
    duration: "약 20분",
    score: "0–200점",
    sections: ["Speaking"],
  },
  duolingo: {
    purpose: "온라인으로 응시하는 컴퓨터 기반 영어시험입니다.",
    audience: "해외 대학 지원자 중 빠른 결과와 온라인 응시를 원하는 지원자.",
    usedIn: "일부 해외 대학의 입학 요건으로 활용됩니다. 인정 여부는 지원 대학 기준으로 확인이 필요합니다.",
    differenceFromSimilar: "지정 고사장에서 치르는 IELTS·TOEFL과 달리 온라인에서 자유롭게 응시합니다.",
  },
  "g-telp": {
    purpose: "취업·편입에 활용되는 영어능력시험입니다.",
    audience: "취업 준비생, 편입을 준비하는 대학생.",
    usedIn: "일부 기업 채용, 대학 편입 기준으로 활용됩니다.",
    differenceFromSimilar: "TOEIC과 달리 문법 영역이 별도로 포함되어 있습니다.",
  },
  teps: {
    purpose: "서울대학교 언어교육원이 개발한 영어능력시험입니다.",
    audience: "채용·편입을 준비하는 취업 준비생, 대학생.",
    usedIn: "일부 기업 채용, 대학 편입 기준으로 활용됩니다.",
    differenceFromSimilar: "TOEIC과 달리 문법·어휘 난이도가 높은 편이며 자료가 상대적으로 적습니다.",
  },
};

export function getWhoTakesTestInfo(test: Test): WhoTakesTestInfo {
  const curated = whoTakesTest[test.slug];
  if (curated) return curated;

  const group = groupMeta[test.group];
  return {
    purpose: test.description,
    audience: test.tagline,
    usedIn: "시험을 요구하는 기업·학교·기관의 기준에 따라 활용 범위가 다릅니다.",
    differenceFromSimilar: `${group.name} 내 다른 시험과 평가 영역·목적이 다릅니다. 정확한 차이는 상담에서 확인할 수 있습니다.`,
  };
}
