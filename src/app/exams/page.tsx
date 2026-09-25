import type { Metadata } from "next";
import ExamsFilter, { ExamGroup } from "@/components/ExamsFilter";

export const metadata: Metadata = {
  title: "시험 찾기 | C-BRIDGE",
  description:
    "갈 나라와 직군에 맞는 시험을 찾아보세요. PTE, CELPIP, OET, CELBAN, MET, NCLEX, EPTA, ELPAC, SPA, Versant, TOLES, TOPEC.",
  alternates: { canonical: "/exams" },
};

const groups: ExamGroup[] = [
  {
    label: "이민 · 유학",
    items: [
      { name: "PTE Academic", desc: "컴퓨터 기반 학술 영어시험" },
      { name: "PTE Academic UKVI", desc: "영국 비자를 위한 PTE" },
      { name: "PTE Core", desc: "캐나다 이민을 위한 PTE" },
      { name: "CELPIP", desc: "캐나다 영주 · 시민권 영어시험" },
      {
        name: "MET (미시간영어)",
        desc: "미시간 영어시험. 호주 비자 목록에 오르는 경우가 있습니다.",
        keywords: ["MET", "미시간영어", "Michigan English Test", "MET 문제집", "MET 호주"],
      },
      { name: "IELTS General", desc: "이민 · 취업을 위한 IELTS" },
      { name: "IELTS for UKVI", desc: "영국 비자를 위한 IELTS" },
    ],
  },
  {
    label: "의료 영어",
    items: [
      { name: "OET Nursing", desc: "간호사 영어시험" },
      { name: "OET Medicine", desc: "의사 영어시험" },
      { name: "OET Pharmacy", desc: "약사 영어시험" },
      { name: "OET Physiotherapy", desc: "물리치료사 영어시험" },
      { name: "OET Dentistry", desc: "치과의사 영어시험" },
      { name: "OET Radiography", desc: "방사선사 영어시험" },
      { name: "OET Occupational Therapy", desc: "작업치료사 영어시험" },
      {
        name: "CELBAN (셀반)",
        desc: "캐나다 간호 등록용 영어입니다. OET·셀핍과 형식이 다릅니다.",
        keywords: ["CELBAN", "셀반", "캐나다 간호 영어", "CELBAN 문제집"],
      },
    ],
  },
  {
    label: "간호 면허",
    items: [{ name: "NCLEX", desc: "미국 · 캐나다 간호 면허 본시험 문항 유형 연습서" }],
  },
  {
    label: "항공",
    items: [
      { name: "EPTA", desc: "조종사 · 항공 종사자 영어평가" },
      { name: "ELPAC (항공)", desc: "유럽 관제 · 항공 교신 영어평가" },
      { name: "Aviation English (FAA)", desc: "미국 FAA 라디오 텔레포니 영어평가" },
      { name: "ICAO English", desc: "관제 · 조종 무선통신 영어능력등급" },
    ],
  },
  {
    label: "기업 말하기",
    items: [
      { name: "SPA", desc: "기업이 활용하는 말하기 평가" },
      { name: "Versant", desc: "기업 전화 · 컴퓨터 말하기 평가" },
    ],
  },
  {
    label: "법률",
    items: [{ name: "TOLES", desc: "국제 로펌 · 크로스보더 계약 영어시험" }],
  },
  {
    label: "일본 간호",
    items: [{ name: "TOPEC", desc: "일본 병동 간호 영어시험" }],
  },
];

export default function ExamsPage() {
  return (
    <>
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 min-[361px]:px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            시험 찾기
          </p>
          <h1
            className="mt-5 break-keep font-serif text-4xl font-bold leading-[1.3] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            갈 나라와 직군이 다르면 시험이 다릅니다.
          </h1>
        </div>
        <div className="mt-10 border-t" style={{ borderColor: "var(--color-line)" }} />
      </section>

      <section className="bg-ivory py-16 md:py-24" data-reveal>
        <div className="mx-auto max-w-[1200px] px-4 min-[361px]:px-5 md:px-10">
          <ExamsFilter groups={groups} />
        </div>
      </section>
    </>
  );
}
