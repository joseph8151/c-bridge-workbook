import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { GradientBlob } from "../Decor";
import { focusAreas, exampleOrders } from "@/lib/focusAreas";

export default function CustomOrder() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28">
      <GradientBlob className="left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 opacity-[0.35]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="맞춤 구성"
          title="원하는 유형만 더 많이. 목표 점수에 맞게 더 정확하게."
          subtitle="C-BRIDGE는 모든 수험생에게 같은 구성의 문제집만 제공하지 않습니다. 현재 부족한 영역, 목표 점수, 목표 레벨, 시험일까지 남은 기간에 따라 원하는 방향으로 교재 구성을 선택할 수 있습니다."
          align="center"
          className="mx-auto max-w-2xl"
        />

        {/* Flow visual */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
          {[
            { tag: "TEST", value: "TOEFL" },
            { tag: "TARGET", value: "110+" },
            { tag: "FOCUS", value: "READING" },
            { tag: "PACKAGE", value: "300P" },
          ].map((step, i, arr) => (
            <div key={step.tag} className="flex items-center gap-3 sm:gap-0">
              <div className="flex w-36 flex-col items-center rounded-[18px] border border-purple/15 bg-white/80 py-5 shadow-[0_8px_24px_-14px_rgba(69,53,101,0.3)]">
                <p className="text-[10px] font-bold tracking-[0.14em] text-purple/50">{step.tag}</p>
                <p className="mt-1.5 font-serif text-lg font-black text-ink">{step.value}</p>
              </div>
              {i < arr.length - 1 && (
                <span className="mx-2 font-serif text-xl text-gold sm:mx-3">→</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center font-serif text-lg font-bold text-purple">
          = 나만의 맞춤 교재
        </p>

        {/* Focus areas */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f) => (
            <div
              key={f.id}
              className="rounded-[20px] border border-purple/10 bg-white/70 p-6 transition-all hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_14px_28px_-16px_rgba(69,53,101,0.28)]"
            >
              <p className="font-serif text-base font-bold text-purple">{f.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Example orders */}
        <div className="mt-16">
          <p className="text-center text-sm font-bold tracking-[0.06em] text-ink/50">
            이런 식으로 주문할 수 있습니다
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exampleOrders.map((o) => (
              <div
                key={`${o.test}-${o.config}`}
                className="rounded-[20px] border border-gold/25 bg-plum/[0.03] p-6"
              >
                <p className="text-xs font-bold tracking-[0.1em] text-purple">{o.test}</p>
                <p className="mt-1 font-serif text-base font-bold text-ink">{o.config}</p>
                <ul className="mt-3 space-y-1.5">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-2 text-xs leading-relaxed text-ink/60">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2">
          <Link
            href="/finder"
            className="rounded-[14px] bg-purple px-8 py-4 text-sm font-bold tracking-[0.04em] text-ivory transition-all hover:-translate-y-0.5 hover:bg-plum"
          >
            내 목표에 맞게 구성하기
          </Link>
          <Link href="/consultation" className="text-sm font-bold text-purple hover:underline">
            맞춤 교재 문의
          </Link>
        </div>
      </div>
    </section>
  );
}
