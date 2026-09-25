export interface CompareRow {
  label: string;
  a: string;
  b: string;
}

export interface CompareEntry {
  slug: string;
  testA: string;
  testB: string;
  summary: string;
  rows: CompareRow[];
  whenAFits: string[];
  whenBFits: string[];
  biggestDifference: string;
  howToPrepare: string;
  bookGuide: string;
  // /books/[slug] 페이지가 있는 경우에만 연결. 없으면 undefined로 두고 상담으로 안내합니다.
  ctaTestASlug?: string;
  ctaTestBSlug?: string;
}

const ROW_LABELS = [
  "시험 목적",
  "시험 방식",
  "시험 시간",
  "평가 영역",
  "점수 체계",
  "주요 활용처",
  "추천 대상",
] as const;

function rows(a: string[], b: string[]): CompareRow[] {
  return ROW_LABELS.map((label, i) => ({ label, a: a[i], b: b[i] }));
}

export const compareEntries: CompareEntry[] = [
  {
    slug: "pte-vs-ielts",
    testA: "PTE Academic",
    testB: "IELTS Academic",
    summary: "둘 다 학술 목적 영어시험이지만 채점 방식과 시험 진행 방식이 다릅니다.",
    rows: rows(
      ["대학·대학원 진학", "전 영역 컴퓨터 기반", "약 2시간", "Speaking·Writing·Reading·Listening 통합형 문항", "10~90점", "PTE Academic을 인정하는 대학·기관", "결과를 빠르게 받고 싶은 지원자"],
      ["대학·대학원 진학, 이민", "Writing·Reading은 지필 또는 컴퓨터, Speaking은 대면(또는 화상) 인터뷰", "약 2시간 45분(Speaking 별도)", "영역별 독립 문항", "0~9 밴드 점수", "IELTS를 인정하는 대학·기관, 이민 프로그램", "대면 인터뷰가 익숙한 지원자"],
    ),
    whenAFits: ["시험 결과를 빠르게 받아야 할 때", "대면 인터뷰보다 컴퓨터 응시가 편한 경우", "목표 기관이 PTE Academic을 인정하는 경우"],
    whenBFits: ["목표 기관이 IELTS만 인정하는 경우", "Speaking을 사람과의 대화로 준비하고 싶은 경우", "이민 목적으로 General Training이 필요한 경우"],
    biggestDifference: "PTE Academic은 전 영역이 컴퓨터로 진행되어 결과가 빠르지만, IELTS Academic은 Speaking이 대면(또는 화상) 인터뷰로 진행됩니다.",
    howToPrepare: "목표 기관이 두 시험을 모두 인정한다면 컴퓨터 응시 적응도와 결과 발급 속도를 기준으로 선택하는 경우가 많습니다. 목표 기관이 특정 시험만 요구한다면 해당 시험 기준으로 준비하는 것이 안전합니다.",
    bookGuide: "C-BRIDGE는 PTE Academic과 IELTS Academic 문제집을 모두 제공합니다. 목표 기관 요건에 맞는 시험으로 상담을 통해 구성을 확인할 수 있습니다.",
    ctaTestASlug: "pte-academic",
    ctaTestBSlug: "ielts",
  },
  {
    slug: "pte-academic-vs-pte-core",
    testA: "PTE Academic",
    testB: "PTE Core",
    summary: "같은 PTE 계열이지만 목적이 다른 시험입니다. Academic은 진학용, Core는 캐나다 이민용입니다.",
    rows: rows(
      ["대학·대학원 진학", "전 영역 컴퓨터 기반, 학술 문항", "약 2시간", "학술 지문·강의 중심 통합형 문항", "10~90점", "PTE Academic을 인정하는 대학·기관", "해외 대학·대학원 진학 목적"],
      ["캐나다 이민(Express Entry 등)", "전 영역 컴퓨터 기반, 실생활 문항", "약 2시간", "이민 실무 상황 중심 문항", "10~90점", "캐나다 이민 프로그램", "캐나다 영주권 신청 목적"],
    ),
    whenAFits: ["해외 대학·대학원 진학이 목적일 때", "학술 지문·강의 기반 문항에 익숙할 때"],
    whenBFits: ["캐나다 이민이 목적일 때", "실생활 상황 중심 문항이 더 편할 때"],
    biggestDifference: "시험 형식은 비슷하지만 PTE Academic은 학술 지문·강의 중심, PTE Core는 이민 실무 상황 중심으로 문항 소재가 다릅니다.",
    howToPrepare: "진학이 목적이면 Academic, 캐나다 이민이 목적이면 Core로 준비하는 것이 기본입니다. 목적을 먼저 확인한 뒤 시험을 선택하는 것이 중요합니다.",
    bookGuide: "C-BRIDGE는 PTE Academic과 PTE Core 문제집을 목적에 맞게 각각 제공합니다.",
    ctaTestASlug: "pte-academic",
    ctaTestBSlug: "pte-core",
  },
  {
    slug: "celpip-vs-ielts",
    testA: "CELPIP",
    testB: "IELTS General",
    summary: "둘 다 캐나다 이민에 활용되지만 CELPIP은 캐나다 자체 개발 시험이고, IELTS는 국제 공인 시험입니다.",
    rows: rows(
      ["캐나다 영주권·시민권", "전 영역 컴퓨터 기반", "약 3시간", "실생활 상황 중심 Listening·Speaking·Reading·Writing", "CLB(Canadian Language Benchmark) 기준 점수", "캐나다 이민 프로그램", "캐나다 실생활 상황 문항이 편한 지원자"],
      ["이민·취업(General Training)", "Writing·Reading은 지필 또는 컴퓨터, Speaking은 대면 인터뷰", "약 2시간 45분(Speaking 별도)", "영역별 독립 문항", "0~9 밴드 점수(CLB로 환산)", "캐나다 이민 프로그램, 해외 취업", "대면 인터뷰가 익숙한 지원자"],
    ),
    whenAFits: ["캐나다에서 개발한 시험 형식에 익숙하고 싶을 때", "Speaking을 컴퓨터로 녹음하는 방식이 편할 때"],
    whenBFits: ["Speaking을 대면 인터뷰로 준비하고 싶을 때", "캐나다 외 지역에서도 활용할 국제 공인 성적이 필요할 때"],
    biggestDifference: "CELPIP은 캐나다 이민만을 목적으로 개발된 시험이고, IELTS General은 여러 국가·목적에서 폭넓게 활용되는 국제 공인 시험입니다.",
    howToPrepare: "캐나다 이민만이 목적이라면 두 시험 모두 CLB로 환산되므로, 시험 방식(컴퓨터 vs 대면 인터뷰)에 대한 선호로 선택하는 경우가 많습니다.",
    bookGuide: "C-BRIDGE는 CELPIP과 IELTS 문제집을 모두 제공하며, 목표 CLB 점수에 맞춘 구성으로 상담할 수 있습니다.",
    ctaTestASlug: "celpip",
    ctaTestBSlug: "ielts",
  },
  {
    slug: "toefl-vs-ielts",
    testA: "TOEFL",
    testB: "IELTS Academic",
    summary: "둘 다 학술 목적 시험이지만 Speaking 진행 방식과 문항 구성이 다릅니다.",
    rows: rows(
      ["대학·대학원 진학", "전 영역 컴퓨터 기반", "약 2시간", "통합형(읽고 듣고 말하기/쓰기) 문항 포함", "0~120점", "TOEFL을 인정하는 대학·기관(특히 미국)", "미국 대학 위주로 지원하는 경우"],
      ["대학·대학원 진학, 이민", "Writing·Reading은 지필 또는 컴퓨터, Speaking은 대면 인터뷰", "약 2시간 45분(Speaking 별도)", "영역별 독립 문항", "0~9 밴드 점수", "IELTS를 인정하는 대학·기관(영연방 다수)", "영연방 국가 위주로 지원하는 경우"],
    ),
    whenAFits: ["미국 대학 위주로 지원할 때", "통합형 문항(읽고 듣고 답하기)이 익숙할 때"],
    whenBFits: ["영연방 국가(영국·호주·캐나다 등) 위주로 지원할 때", "Speaking을 대면 인터뷰로 준비하고 싶을 때"],
    biggestDifference: "TOEFL은 읽고 듣고 답하는 통합형 문항이 많고, IELTS는 영역별로 독립된 문항과 대면 Speaking 인터뷰로 진행됩니다.",
    howToPrepare: "지원 국가·대학이 어느 시험을 요구하는지 먼저 확인한 뒤, 통합형 문항과 대면 인터뷰 중 더 편한 방식으로 시험을 선택하는 것이 일반적입니다.",
    bookGuide: "C-BRIDGE는 TOEFL과 IELTS 문제집을 모두 제공하며, 지원 목표에 맞춘 구성을 상담에서 확인할 수 있습니다.",
    ctaTestASlug: "toefl",
    ctaTestBSlug: "ielts",
  },
  {
    slug: "oet-vs-ielts",
    testA: "OET",
    testB: "IELTS",
    summary: "OET는 의료전문직 전용 시험이고, IELTS는 범용 영어시험입니다.",
    rows: rows(
      ["의료전문직 해외 취업·등록", "Reading·Listening 공통, Writing·Speaking은 직군별 임상 상황", "약 3시간", "임상 상황(case notes, 환자 응대) 중심", "A~E 등급", "의료기관, 간호·의료 면허 등록 기관", "해외 의료기관 취업·등록을 준비하는 의료전문직"],
      ["유학·이민 등 범용 목적", "영역별 독립 문항", "약 2시간 45분(Speaking 별도)", "일반 학술·생활 주제 중심", "0~9 밴드 점수", "대학, 이민 프로그램 등 범용", "일반 유학·이민을 준비하는 지원자"],
    ),
    whenAFits: ["해외 의료기관 취업·면허 등록이 목적일 때", "임상 상황 중심 문항으로 실무 감각을 함께 익히고 싶을 때"],
    whenBFits: ["의료 외 목적(유학·이민)으로 범용 성적이 필요할 때", "목표 기관이 IELTS만 인정할 때"],
    biggestDifference: "OET는 직군별 임상 상황(case notes, 환자 응대)으로 출제되어 의료 어휘와 서식이 필요하지만, IELTS는 특정 직군에 한정되지 않는 일반 주제로 출제됩니다.",
    howToPrepare: "의료기관 등록이 목적이라면 등록 기관이 OET를 인정하는지 먼저 확인하고, 인정되지 않는다면 IELTS 기준으로 준비해야 합니다.",
    bookGuide: "C-BRIDGE는 OET(직군별)와 IELTS 문제집을 모두 제공합니다.",
    ctaTestASlug: "oet",
    ctaTestBSlug: "ielts",
  },
  {
    slug: "epta-vs-icao",
    testA: "EPTA",
    testB: "ICAO English",
    summary: "둘 다 항공 영어시험이지만 시행 기관과 채점 기준이 다릅니다.",
    rows: rows(
      ["조종사 등 항공 종사자의 항공 영어 자격", "관제·운항 교신 상황 중심 Speaking", "시행 기관에 따라 다름", "무선교신 상황 중심", "시행 기관 기준", "항공사, 항공 당국 자격 요건", "특정 항공사·기관이 요구하는 시험 응시자"],
      ["ICAO 기준 항공 영어 등급 취득", "듣기·말하기 중심 Speaking Scenario", "시행 기관에 따라 다름", "발음·구조·어휘·유창성 등 ICAO 6개 영역", "ICAO Level 1~6 등급", "각국 항공 당국의 ICAO 등급 기준", "국제 표준 ICAO 등급이 필요한 응시자"],
    ),
    whenAFits: ["특정 항공사·기관이 EPTA를 요구할 때"],
    whenBFits: ["국제 표준인 ICAO Language Proficiency 등급이 필요할 때"],
    biggestDifference: "EPTA는 특정 항공사·기관 기준으로 시행되는 반면, ICAO English는 국제민간항공기구가 정한 6단계 등급 체계를 따릅니다.",
    howToPrepare: "소속 항공사 또는 지원하는 기관이 요구하는 시험명을 먼저 확인한 뒤, 해당 시험 기준으로 준비하는 것이 안전합니다.",
    bookGuide: "C-BRIDGE는 EPTA와 ICAO English 문제집을 모두 제공하며, 관제·교신 상황 중심 Speaking Scenario로 구성됩니다.",
    ctaTestASlug: "epta",
    ctaTestBSlug: "icao",
  },
  {
    slug: "toeic-speaking-vs-opic",
    testA: "TOEIC Speaking",
    testB: "OPIc",
    summary: "둘 다 국내 기업 채용·승진에서 활용되는 말하기 평가이지만 진행 방식이 다릅니다.",
    rows: rows(
      ["채용·승진 시 말하기 능력 증빙", "정해진 문항에 순서대로 답변, 컴퓨터 녹음", "약 20분", "정해진 문항 유형(사진 묘사, 설명 등)", "0~200점", "TOEIC Speaking을 요구하는 기업", "정해진 문항 유형을 선호하는 응시자"],
      ["채용·승진 시 말하기 능력 증빙", "사전 설문(Background Survey) 기반 개인화된 문항 구성, 컴퓨터 녹음", "약 40분(오리엔테이션 포함)", "개인 설문 기반 주제(취미, 경험 등) + 롤플레이", "NL~AL 등급", "OPIc을 요구하는 기업", "익숙한 주제로 답변하고 싶은 응시자"],
    ),
    whenAFits: ["지원 기업이 TOEIC Speaking 점수를 요구할 때", "정해진 문항 유형으로 예측 가능하게 준비하고 싶을 때"],
    whenBFits: ["지원 기업이 OPIc 등급을 요구할 때", "설문 기반으로 익숙한 주제를 답변하고 싶을 때"],
    biggestDifference: "TOEIC Speaking은 모든 응시자가 동일한 문항을 받지만, OPIc은 사전 설문을 기반으로 개인화된 문항을 받는다는 점이 가장 큰 차이입니다.",
    howToPrepare: "지원하는 기업이 요구하는 시험명을 반드시 먼저 확인해야 합니다.",
    bookGuide: "C-BRIDGE는 현재 TOEIC Speaking 문제집을 제공하고 있습니다. OPIc 준비가 필요하다면 상담을 통해 방향을 안내해드립니다.",
    ctaTestASlug: "toeic-speaking",
  },
  {
    slug: "sjpt-vs-jpt",
    testA: "SJPT",
    testB: "JPT",
    summary: "SJPT는 말하기, JPT는 듣기·읽기 중심의 일본어 시험으로 평가 영역 자체가 다릅니다.",
    rows: rows(
      ["일본어 말하기 능력 평가", "정해진 질문에 답변을 녹음", "약 20~30분", "말하기(발음, 유창성, 구성력)", "Level 1~9 등급", "일본계 기업 채용·승진(말하기 평가)", "말하기 능력을 증빙해야 하는 응시자"],
      ["일본어 듣기·읽기 능력 평가", "지필 또는 컴퓨터 기반 객관식", "약 2시간", "청해·독해", "10~990점", "일본계 기업 채용·승진(필기 평가)", "듣기·읽기 능력을 증빙해야 하는 응시자"],
    ),
    whenAFits: ["지원 기업이 말하기 평가(SJPT)를 요구할 때"],
    whenBFits: ["지원 기업이 듣기·읽기 평가(JPT)를 요구할 때"],
    biggestDifference: "SJPT는 말하기만, JPT는 듣기·읽기만 평가하는 시험으로 서로 대체할 수 없습니다.",
    howToPrepare: "지원 공고에 명시된 시험명을 확인해, 말하기가 필요하면 SJPT, 듣기·읽기가 필요하면 JPT로 준비해야 합니다.",
    bookGuide: "C-BRIDGE는 SJPT 문제집을 제공합니다. JPT 관련 문의는 상담을 통해 확인할 수 있습니다.",
    ctaTestASlug: "sjpt",
  },
  {
    slug: "flex-vs-snult",
    testA: "FLEX",
    testB: "SNULT",
    summary: "둘 다 다국어 능력평가이지만 FLEX는 실용 목적, SNULT는 대학원·학술 목적입니다.",
    rows: rows(
      ["취업·기관 평가용 외국어 능력", "듣기·읽기·어휘·문법 중심", "언어·기관에 따라 다름", "실용 어휘·문법·듣기", "기관별 점수 체계", "기업·공공기관 채용 평가", "취업·기관평가를 준비하는 응시자"],
      ["대학원 진학·학술 연구용 외국어 능력", "독해·듣기 중심, 전공 관련 지문 포함 가능", "언어·기관에 따라 다름", "학술 지문 독해 중심", "기관별 점수 체계", "대학원 입학·졸업 요건", "대학원 진학·졸업을 준비하는 대학원생"],
    ),
    whenAFits: ["취업이나 기관 평가에 필요한 외국어 성적이 필요할 때"],
    whenBFits: ["대학원 입학 또는 졸업 요건으로 외국어 성적이 필요할 때"],
    biggestDifference: "FLEX는 실용 목적의 외국어 능력평가이고, SNULT는 대학원 학술 목적에 특화된 시험입니다.",
    howToPrepare: "요구 기관(기업 vs 대학원)에 따라 시험이 다르므로, 목적에 맞는 시험명을 먼저 확인해야 합니다.",
    bookGuide: "C-BRIDGE는 영어·일본어·중국어·프랑스어·독일어·스페인어·러시아어별로 FLEX와 SNULT 문제집을 모두 제공합니다.",
    ctaTestASlug: "flex-english",
    ctaTestBSlug: "snult-japanese",
  },
];

export function getCompareBySlug(slug: string): CompareEntry | undefined {
  return compareEntries.find((c) => c.slug === slug);
}
