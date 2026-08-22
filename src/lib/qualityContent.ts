export const qualityPoints: string[] = [
  "실제 시험과 유사한 문제 구성",
  "시험별 최신 출제 유형 반영",
  "난이도 단계별 정교한 문제 설계",
  "반복되는 대표 기출 패턴 집중 훈련",
  "실전에서 자주 틀리는 함정 유형 반영",
  "문제와 해설의 논리적 완성도 검수",
  "불필요한 반복 문제 최소화",
  "목표 점수에 맞춘 문제 난이도 조정",
];

export interface ExamProcessStep {
  no: string;
  label: string;
  desc: string;
}

export const examProcessSteps: ExamProcessStep[] = [
  { no: "01", label: "ANALYZE", desc: "기출 및 출제 경향 분석" },
  { no: "02", label: "CLASSIFY", desc: "빈출 유형·난이도 분류" },
  { no: "03", label: "PRACTICE", desc: "유사 유형 집중 반복" },
  { no: "04", label: "APPLY", desc: "변형 문제 및 실전 적용" },
  { no: "05", label: "MASTER", desc: "시험장에서 빠르게 유형 인식" },
];

export interface GoalTier {
  label: string;
  points: string[];
}

export const toeflGoalTiers: GoalTier[] = [
  {
    label: "70점 목표",
    points: ["기본 유형 적응", "핵심 어휘", "기본 독해 구조", "빈출 문제 중심"],
  },
  {
    label: "90점 목표",
    points: ["중상 난이도 문제 확대", "시간 관리", "변형 유형 대응", "오답 유형 집중"],
  },
  {
    label: "110점+ 목표",
    points: ["고난도 추론", "까다로운 선택지 분석", "실전 시간 압박 대비", "상위권 변별 문제 집중"],
  },
];

export const otherApplicableTests = [
  "IELTS",
  "PTE",
  "Duolingo English Test",
  "TOEIC",
  "TOEIC Speaking",
  "OPIc",
  "FLEX",
  "JLPT",
  "JPT",
  "SJPT",
];

export interface FocusBuildItem {
  weak: string;
  action: string;
}

export const focusBuildItems: FocusBuildItem[] = [
  { weak: "Reading이 부족하다면", action: "Reading 비중 확대" },
  { weak: "Listening이 부족하다면", action: "Listening 집중 구성" },
  { weak: "Writing 점수가 부족하다면", action: "Writing 유형 집중" },
  { weak: "Speaking이 필요하다면", action: "Speaking 문제 확대" },
  { weak: "Vocabulary가 약하다면", action: "빈출 어휘 문제 추가" },
  { weak: "고난도 문제가 필요하다면", action: "Advanced 문제 비중 확대" },
];

export interface ReviewCriterion {
  title: string;
  desc: string;
}

export const reviewCriteria: ReviewCriterion[] = [
  { title: "Exam Relevance", desc: "실제 시험 출제 방향과 맞는가" },
  { title: "Difficulty Balance", desc: "난이도가 목표 점수에 적절한가" },
  { title: "Answer Accuracy", desc: "정답과 오답의 논리가 명확한가" },
  { title: "Distractor Quality", desc: "오답 선택지가 지나치게 단순하지 않은가" },
  { title: "Explanation Quality", desc: "해설만 읽어도 학습이 가능한가" },
  { title: "Practical Value", desc: "실제 시험 점수 향상에 도움이 되는 문제인가" },
];

export interface QualityMetric {
  word: string;
  desc: string;
}

export const qualityMetrics: QualityMetric[] = [
  { word: "TYPE", desc: "시험별 핵심 출제 유형 분석" },
  { word: "LEVEL", desc: "목표 점수별 난이도 설계" },
  { word: "FOCUS", desc: "취약 영역별 문제 집중" },
  { word: "REVIEW", desc: "문제·정답·해설 품질 검토" },
];

export interface ComparisonRow {
  general: string;
  cbridge: string;
}

export const comparisonRows: ComparisonRow[] = [
  { general: "정해진 난이도", cbridge: "목표점수별 난이도" },
  { general: "모든 영역 동일 비중", cbridge: "필요한 영역 집중 가능" },
  { general: "일반적인 예상문제", cbridge: "기출유형 기반 문제" },
  { general: "단순 반복", cbridge: "유형 → 변형 → 실전 단계" },
  { general: "동일한 구성", cbridge: "목적별 맞춤 구성" },
  { general: "문제 중심", cbridge: "문제 + 풀이 전략 + 해설" },
];
