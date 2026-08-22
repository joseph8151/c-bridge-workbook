export interface StudyPlan {
  id: "2주" | "4주" | "8주" | "12주";
  label: string;
  weeks: { period: string; focus: string }[];
}

export const studyPlans: StudyPlan[] = [
  {
    id: "2주",
    label: "2주 완성",
    weeks: [
      { period: "1주차", focus: "시험 유형 파악 + 진단 테스트" },
      { period: "2주차", focus: "실전 모의고사 + Final Review" },
    ],
  },
  {
    id: "4주",
    label: "4주 완성",
    weeks: [
      { period: "1주차", focus: "시험 유형 이해 + 기본 문제" },
      { period: "2주차", focus: "유형별 집중 문제" },
      { period: "3주차", focus: "약점 보완" },
      { period: "4주차", focus: "실전 모의고사 + Final Review" },
    ],
  },
  {
    id: "8주",
    label: "8주 완성",
    weeks: [
      { period: "1주차", focus: "진단 테스트 + 기초 다지기" },
      { period: "2주차", focus: "핵심 유형 이해" },
      { period: "3~4주차", focus: "유형별 집중 문제 풀이" },
      { period: "5주차", focus: "약점 영역 집중 보완" },
      { period: "6주차", focus: "고난도 문제 풀이" },
      { period: "7주차", focus: "실전 모의고사 반복" },
      { period: "8주차", focus: "Final Review + 총점검" },
    ],
  },
  {
    id: "12주",
    label: "12주 완성",
    weeks: [
      { period: "1~2주차", focus: "진단 테스트 + 기초 다지기" },
      { period: "3~4주차", focus: "핵심 유형 이해" },
      { period: "5~7주차", focus: "유형별 집중 문제 풀이" },
      { period: "8~9주차", focus: "약점 영역 집중 보완" },
      { period: "10주차", focus: "고난도 문제 풀이" },
      { period: "11주차", focus: "실전 모의고사 반복" },
      { period: "12주차", focus: "Final Review + 총점검" },
    ],
  },
];
