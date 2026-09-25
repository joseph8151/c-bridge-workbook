import type { Metadata } from "next";
import RecommendTestSelect from "@/components/RecommendTestSelect";

export const metadata: Metadata = {
  title: "교재 추천 | C-BRIDGE",
  description: "시험명보다 약한 과제에 맞춘 교재 구성 기준을 확인하고 상담으로 이어가세요.",
  alternates: { canonical: "/recommend" },
};

const testGroups: { label: string; items: string[] }[] = [
  {
    label: "이민 · 유학",
    items: ["PTE Academic", "PTE Academic UKVI", "PTE Core", "CELPIP", "MET (미시간영어)", "IELTS General", "IELTS for UKVI"],
  },
  {
    label: "의료 영어",
    items: [
      "OET Nursing",
      "OET Medicine",
      "OET Pharmacy",
      "OET Physiotherapy",
      "OET Dentistry",
      "OET Radiography",
      "OET Occupational Therapy",
      "CELBAN (셀반)",
    ],
  },
  { label: "간호 면허", items: ["NCLEX"] },
  { label: "항공", items: ["EPTA", "ELPAC (항공)", "Aviation English (FAA)", "ICAO English"] },
  { label: "기업 말하기", items: ["SPA", "Versant"] },
  { label: "법률", items: ["TOLES"] },
  { label: "일본 간호", items: ["TOPEC"] },
  { label: "기타", items: ["기타"] },
];

const weakAreaOptions = ["듣기", "읽기", "쓰기", "말하기"];

export default function RecommendPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          교재 추천
        </p>
        <h1
          className="mt-5 break-keep font-serif text-3xl font-bold leading-[1.4] md:text-4xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          교재는 시험명보다 약한 과제에 맞춥니다.
        </h1>

        <div className="mt-10 border-t" style={{ borderColor: "var(--color-line)" }} />

        <div
          className="grid border-x border-b md:grid-cols-[0.8fr_1fr]"
          style={{ borderColor: "var(--color-line)" }}
        >
          <div className="border-b p-8 md:border-b-0 md:border-r" style={{ borderColor: "var(--color-line)" }}>
            <p className="text-xs font-bold tracking-[0.1em] text-ink/50">미리보기</p>
            <p className="mt-4 break-keep text-sm leading-relaxed text-ink/70">
              시험을 고르고 약한 영역을 알려주시면, 그 시험·목표에 맞춘 구성으로 상담을 이어갑니다.
            </p>
            <div className="mt-6 space-y-2 text-sm text-ink/60">
              <p>200페이지는 한 영역 집중.</p>
              <p>300페이지는 전 영역.</p>
            </div>
          </div>

          <form action="/consultation" method="get" className="space-y-6 p-8">
            <RecommendTestSelect groups={testGroups} />

            <div>
              <label className="text-xs font-bold tracking-[0.1em] text-ink/60">목표</label>
              <input
                name="goal"
                type="text"
                placeholder="예: 점수·등급·비자"
                className="mt-2 w-full rounded-none border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold tracking-[0.1em] text-ink/60">약한 영역</label>
              <select
                name="weakArea"
                defaultValue=""
                className="mt-2 w-full rounded-none border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
              >
                <option value="">선택 안 함</option>
                {weakAreaOptions.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn-primary w-full rounded-sm py-3.5 text-sm font-bold tracking-[0.08em] sm:w-auto sm:px-8"
            >
              이 기준으로 상담
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
