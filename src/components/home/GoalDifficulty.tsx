import SectionHeading from "../SectionHeading";
import { toeflGoalTiers, otherApplicableTests } from "@/lib/qualityContent";

export default function GoalDifficulty() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Goal-Based Difficulty"
          title="같은 시험이라도 목표가 다르면, 풀어야 할 문제도 달라야 합니다."
          subtitle="예를 들어 TOEFL이라면, 목표 점수에 따라 문제 난이도와 유형 비중, 문제 구성 자체가 달라집니다."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {toeflGoalTiers.map((tier, i) => (
            <div
              key={tier.label}
              className={`rounded-[22px] p-7 ${
                i === 2
                  ? "border border-gold/30 bg-plum shadow-[0_20px_44px_-24px_rgba(69,53,101,0.5)]"
                  : "border border-purple/12 bg-ivory"
              }`}
            >
              <p
                className={`text-xs font-bold tracking-[0.14em] ${
                  i === 2 ? "text-gold" : "text-purple"
                }`}
              >
                TOEFL
              </p>
              <p
                className={`mt-2 font-serif text-2xl font-black ${
                  i === 2 ? "text-ivory" : "text-ink"
                }`}
              >
                {tier.label}
              </p>
              <ul className="mt-5 space-y-2.5">
                {tier.points.map((p) => (
                  <li
                    key={p}
                    className={`flex gap-2.5 text-sm leading-relaxed ${
                      i === 2 ? "text-lavender/85" : "text-ink/65"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        i === 2 ? "bg-gold" : "bg-purple/50"
                      }`}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-[20px] border border-purple/10 bg-ivory p-7 text-center">
          <p className="break-keep text-sm font-semibold leading-relaxed text-ink/70 md:text-base">
            같은 방식이 IELTS, PTE, Duolingo English Test, TOEIC, TOEIC Speaking, OPIc, FLEX, JLPT,
            JPT, SJPT 등 다른 시험에도 동일하게 적용됩니다.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {otherApplicableTests.map((t) => (
              <span
                key={t}
                className="rounded-full border border-purple/15 bg-lavender/40 px-3.5 py-1.5 text-xs font-bold text-purple"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
