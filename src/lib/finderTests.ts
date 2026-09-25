export interface FinderTestOption {
  name: string;
  href: string;
}

export interface FinderGroup {
  label: string;
  items: FinderTestOption[];
}

// /finder 1단계 시험 선택지. 각 항목은 실제로 존재하는 페이지로만 연결합니다.
export const finderGroups: FinderGroup[] = [
  {
    label: "이민 · 유학",
    items: [
      { name: "PTE Academic", href: "/books/pte-academic" },
      { name: "PTE Core", href: "/books/pte-core" },
      { name: "CELPIP", href: "/books/celpip" },
      { name: "MET (미시간영어)", href: "/met" },
      { name: "IELTS", href: "/books/ielts" },
      { name: "TOEFL", href: "/books/toefl" },
      { name: "Duolingo English Test", href: "/books/duolingo" },
    ],
  },
  {
    label: "의료 영어",
    items: [
      { name: "OET", href: "/oet" },
      { name: "CELBAN (셀반)", href: "/celban" },
      { name: "TOPEC", href: "/books/topec" },
    ],
  },
  {
    label: "간호 면허",
    items: [{ name: "NCLEX", href: "/books/nclex" }],
  },
  {
    label: "항공",
    items: [
      { name: "EPTA", href: "/books/epta" },
      { name: "ICAO English", href: "/books/icao" },
      { name: "ELPAC (항공)", href: "/books/elpac" },
      { name: "Aviation English (FAA)", href: "/books/faa-english" },
    ],
  },
  {
    label: "취업 · 승진",
    items: [
      { name: "TOEIC", href: "/books/toeic" },
      { name: "TOEIC Speaking", href: "/books/toeic-speaking" },
      { name: "Versant", href: "/books/versant" },
      { name: "SPA", href: "/books/spa" },
      { name: "TEPS", href: "/books/teps" },
    ],
  },
  {
    label: "법률",
    items: [{ name: "TOLES", href: "/books/toles" }],
  },
  {
    label: "일본어",
    items: [
      { name: "SJPT", href: "/books/sjpt" },
      { name: "BJT", href: "/books/bjt" },
    ],
  },
  {
    label: "기타",
    items: [{ name: "잘 모르겠어요 / 목록에 없는 시험", href: "/exams" }],
  },
];
