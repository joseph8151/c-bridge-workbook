export interface FocusArea {
  id: string;
  label: string;
  desc: string;
}

export const focusAreas: FocusArea[] = [
  { id: "reading", label: "Reading 집중", desc: "Reading 문제 비중을 높여 구성" },
  { id: "listening", label: "Listening 집중", desc: "Listening 문제와 음원 연습을 더 많이 구성" },
  { id: "speaking", label: "Speaking 집중", desc: "예상질문, 답변 구조, 실전 Speaking 문제 중심" },
  { id: "writing", label: "Writing 집중", desc: "Writing 주제, 답안 구조, 예시 답안 중심" },
  { id: "vocabulary", label: "Vocabulary 집중", desc: "시험별 빈출 어휘와 표현 중심" },
  { id: "mock", label: "Mock Test 집중", desc: "실전 모의고사 비중을 높인 구성" },
];

export const exampleOrders = [
  {
    test: "TOEFL",
    config: "110점 목표 · Reading 집중 · 300P",
    points: ["고난도 Reading 비중 확대", "실전 지문 추가", "시간관리 문제 강화"],
  },
  {
    test: "TOEFL",
    config: "70점 목표 · Reading + Listening · 100P",
    points: ["기본 문제와 핵심 유형 중심", "Reading/Listening 비중 확대"],
  },
  {
    test: "OPIc",
    config: "AL 목표 · 200P",
    points: ["돌발주제", "Role Play", "답변 확장 · 고급 표현 중심"],
  },
  {
    test: "SJPT",
    config: "Level 7 목표 · Speaking 집중 · 200P",
    points: ["상황별 예상질문", "답변 구조", "실전 인터뷰 중심"],
  },
  {
    test: "TSC",
    config: "Level 6 목표 · 사진묘사 + 의견제시 · 200P",
    points: ["선택 유형 문제량 확대", "실전 답변 연습 강화"],
  },
  {
    test: "FLEX 일본어",
    config: "고득점 목표 · 독해 집중 · 300P",
    points: ["독해 문제 비중 확대", "어휘·문법 고난도 추가", "실전 모의고사 강화"],
  },
];

export const targetLevelExamples: Record<string, { level: string; desc: string }[]> = {
  TOEFL: [
    { level: "70점 목표", desc: "기본 유형 이해 + 핵심 문제 중심" },
    { level: "90점 목표", desc: "중급 난이도 + 실전 문제 비중 확대" },
    { level: "100점 목표", desc: "고난도 문제 + 시간관리 + 실전 Mock 강화" },
    { level: "110점+ 목표", desc: "상위 난이도 문제 + 함정 유형 + 고득점 전략 중심" },
  ],
  OPIc: [
    { level: "IM2 목표", desc: "기본 답변 구조 중심" },
    { level: "IH 목표", desc: "답변 확장 + 돌발주제 + Role Play 강화" },
    { level: "AL 목표", desc: "표현 다양성 + 자연스러운 연결 + 고난도 돌발주제 집중" },
  ],
  SJPT: [
    { level: "Level 4 목표", desc: "기본 응답과 짧은 문장" },
    { level: "Level 6 목표", desc: "상황 설명과 의견 표현 강화" },
    { level: "Level 8 목표", desc: "복합 상황, 자연스러운 답변 확장, 고급 표현 중심" },
  ],
  TSC: [
    { level: "Level 4 목표", desc: "기본 질문응답" },
    { level: "Level 6 목표", desc: "사진 묘사·상황 설명·의견 제시" },
    { level: "Level 8 목표", desc: "복합 질문·고급 표현·긴 답변 구성" },
  ],
};
