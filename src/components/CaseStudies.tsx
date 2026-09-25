import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudies() {
  return (
    <section className="border-t bg-ivory py-20 md:py-24" style={{ borderColor: "var(--color-line)" }} data-reveal>
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          학습 구성 사례
        </p>
        <h2
          className="mt-4 break-keep font-serif text-2xl font-bold leading-snug md:text-3xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          이런 분들이 C-BRIDGE를 선택합니다
        </h2>
        <p className="mt-3 text-sm text-ink/45">
          실제 후기가 아닌, 목표에 따라 문제집이 어떻게 구성되는지 보여주는 학습 구성 사례입니다.
        </p>

        <div
          className="mt-8 grid border-y sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--color-line)" }}
        >
          {caseStudies.map((c, i) => (
            <div
              key={c.test}
              className={`flex flex-col justify-between p-8 ${
                [
                  "",
                  "border-t sm:border-t-0 sm:border-l",
                  "border-t lg:border-t-0 lg:border-l",
                  "border-t sm:border-l lg:border-t-0",
                ][i]
              }`}
              style={{ borderColor: "var(--color-line)" }}
            >
              <div>
                <p className="font-serif text-xl font-bold" style={{ color: "var(--color-inkstrong)" }}>
                  {c.test}
                </p>
                <p className="mt-2 text-sm text-ink/60">{c.profile}</p>
                <p className="mt-4 text-sm font-semibold" style={{ color: "var(--color-rust)" }}>
                  {c.focus}
                </p>
                <p className="mt-1 text-sm text-ink/60">{c.volume}</p>
              </div>
              <Link
                href={`/consultation?test=${encodeURIComponent(c.test)}`}
                className="mt-8 inline-block text-xs font-bold tracking-[0.08em]"
                style={{ color: "var(--color-rust)" }}
              >
                비슷한 교재 구성 상담하기 →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
