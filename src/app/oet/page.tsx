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
            className="mt-5 break-keep font-serif text-4xl font-black leading-[1.25] md:text-5xl"
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
                    className="font-serif text-2xl font-black leading-tight"
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

      <section className="bg-paper py-14 md:py-16">
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
