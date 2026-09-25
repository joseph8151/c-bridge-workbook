import type { Metadata } from "next";
import Link from "next/link";
import { priceSummaryLine } from "@/lib/products";

export const metadata: Metadata = {
  title: "OET | C-BRIDGE",
  description:
    "직군별로 다른 OET Writing·Speaking을 직군에 맞춰 준비하세요. Nursing · Medicine · Pharmacy · Physiotherapy · Dentistry · Radiography · Occupational Therapy.",
};

const tracks = [
  { en: "Nursing", ko: "간호사" },
  { en: "Medicine", ko: "의사" },
  { en: "Pharmacy", ko: "약사" },
  { en: "Physiotherapy", ko: "물리치료" },
  { en: "Dentistry", ko: "치과" },
  { en: "Radiography", ko: "방사선" },
  { en: "Occupational Therapy", ko: "작업치료" },
];

export default function OetPage() {
  return (
    <>
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            OET
          </p>
          <h1
            className="mt-5 break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            같은 OET가 아닙니다.
          </h1>
          <p className="mt-6 max-w-xl break-keep text-base leading-relaxed text-ink/70">
            Reading과 Listening은 공통이지만, Writing과 Speaking은 직군마다 다릅니다.
            <br />
            쓰기와 말하기만 직군별로 갈립니다.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {tracks.map((t) => (
              <Link
                key={t.en}
                href={`/consultation?test=${encodeURIComponent(`OET ${t.en}`)}`}
                className="group flex flex-col justify-between border border-ink/10 bg-paper p-7 transition-colors hover:border-ink/25"
              >
                <div>
                  <p
                    className="font-serif text-2xl font-bold leading-tight"
                    style={{ color: "var(--color-inkstrong)" }}
                  >
                    OET
                    <br />
                    {t.en}
                  </p>
                  <p className="mt-2 text-sm text-ink/60">{t.ko}</p>
                </div>
                <span
                  className="mt-8 text-xs font-bold tracking-[0.08em]"
                  style={{ color: "var(--color-rust)" }}
                >
                  상담 →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            WRITING TASK 구조
          </p>
          <h2
            className="mt-4 break-keep font-serif text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            일반 에세이가 아니라, case notes 기반 전문 서신입니다.
          </h2>
          <p className="mt-3 max-w-xl break-keep text-sm leading-relaxed text-ink/60">
            OET Writing은 원격근무 확산 같은 일반 주제 에세이가 아닙니다. 진료 기록(case notes)을 읽고
            동료 의료진에게 보내는 서신을 작성하는 시험입니다. 아래는 구조 이해를 돕기 위한 자체 제작
            예시이며, 실제 OET 공식 문항이 아닙니다.
          </p>

          <div
            className="mt-8 grid border sm:grid-cols-2"
            style={{ borderColor: "var(--color-line)" }}
          >
            <div className="border-b p-7 sm:border-b-0 sm:border-r" style={{ borderColor: "var(--color-line)" }}>
              <p className="text-[11px] font-bold tracking-[0.16em] text-ink/45">CASE NOTES (예시)</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/70">
                <li>Patient: 68F, admitted for post-op recovery</li>
                <li>Hx: Hypertension, Type 2 diabetes</li>
                <li>Current: Stable, mobility improving, mild wound discomfort</li>
                <li>Plan: Discharge home, community nurse follow-up required</li>
              </ul>
            </div>
            <div className="p-7">
              <p className="text-[11px] font-bold tracking-[0.16em]" style={{ color: "var(--color-rust)" }}>
                WRITING TASK
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed" style={{ color: "var(--color-inkstrong)" }}>
                위 case notes를 바탕으로 지역 방문 간호사(community nurse)에게 보내는 Discharge Letter를
                작성하세요.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                입원 사유와 처치 경과를 간결히 요약하고, 현재 상태와 퇴원 후 관리에 필요한 사항을
                명확히 전달하는 구조입니다.
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-ink/40">
            Referral letter · Discharge letter · Transfer letter 등 직군별 서신 형식을 실전 문제로 연습합니다.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-14 md:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 text-center md:px-10">
          <p
            className="max-w-lg break-keep text-base font-semibold leading-relaxed md:text-lg"
            style={{ color: "var(--color-inkstrong)" }}
          >
            {priceSummaryLine}
          </p>
          <Link
            href="/consultation?test=OET"
            className="btn-primary inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
