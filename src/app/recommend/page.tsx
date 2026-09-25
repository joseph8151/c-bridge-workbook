import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "교재 추천 | C-BRIDGE",
  description: "시험명보다 약한 과제에 맞춘 교재 구성 기준을 확인하고 상담으로 이어가세요.",
};

const testOptions = [
  "PTE",
  "CELPIP",
  "OET Nursing",
  "OET Medicine",
  "OET Pharmacy",
  "OET Physiotherapy",
  "OET Dentistry",
  "OET Radiography",
  "OET Occupational Therapy",
  "NCLEX",
  "EPTA",
  "ELPAC",
  "Aviation English FAA",
  "SPA",
  "Versant",
  "TOLES",
  "TOPEC",
  "기타",
];

const weakAreaOptions = ["듣기", "읽기", "쓰기", "말하기"];

export default function RecommendPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[640px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          교재 추천
        </p>
        <h1
          className="mt-5 break-keep font-serif text-2xl font-black leading-[1.4] md:text-3xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          교재는 시험명보다 약한 과제에 맞춥니다.
        </h1>

        <form action="/consultation" method="get" className="mt-10 space-y-6">
          <div>
            <label className="text-xs font-bold tracking-[0.1em] text-ink/60">시험</label>
            <select
              name="test"
              required
              defaultValue=""
              className="mt-2 w-full rounded-[14px] border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
            >
              <option value="" disabled>
                시험을 선택하세요
              </option>
              {testOptions.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold tracking-[0.1em] text-ink/60">목표</label>
            <input
              name="goal"
              type="text"
              placeholder="예: 점수·등급·비자"
              className="mt-2 w-full rounded-[14px] border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-[0.1em] text-ink/60">약한 영역</label>
            <select
              name="weakArea"
              defaultValue=""
              className="mt-2 w-full rounded-[14px] border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
            >
              <option value="">선택 안 함</option>
              {weakAreaOptions.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>

          <p className="text-sm leading-relaxed text-ink/60">
            200페이지는 한 영역 집중, 300페이지는 전 영역.
          </p>

          <button
            type="submit"
            className="w-full rounded-sm py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90 sm:w-auto sm:px-8"
            style={{ background: "var(--color-rust)" }}
          >
            이 기준으로 상담
          </button>
        </form>
      </div>
    </section>
  );
}
