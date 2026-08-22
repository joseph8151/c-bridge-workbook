import { examProcessSteps } from "@/lib/qualityContent";

export default function ExamProcess() {
  return (
    <section className="relative overflow-hidden bg-plum py-20 md:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-gold">EXAM-BASED PRACTICE</p>
          <h2 className="mt-5 break-keep font-serif text-3xl font-black leading-[1.3] text-ivory sm:text-4xl text-balance">
            기출유형을 알면, 시험이 달라집니다.
          </h2>
          <p className="mx-auto mt-6 break-keep text-base leading-relaxed text-lavender/80 md:text-lg">
            C-BRIDGE는 단순한 영어 공부용 문제집이 아니라 시험에서 실제로 반복되는 출제 패턴을
            집중적으로 연습하는 실전 대비 교재입니다.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-0">
          {examProcessSteps.map((step, i, arr) => (
            <div key={step.no} className="flex flex-1 items-center gap-3 lg:gap-0">
              <div className="flex flex-1 flex-col items-center rounded-[18px] border border-ivory/10 bg-ivory/5 px-4 py-7 text-center">
                <span className="font-serif text-2xl font-black text-gold/70">{step.no}</span>
                <p className="mt-2 text-sm font-bold tracking-[0.1em] text-ivory">{step.label}</p>
                <p className="mt-2 break-keep text-xs leading-relaxed text-lavender/75">
                  {step.desc}
                </p>
              </div>
              {i < arr.length - 1 && (
                <span className="shrink-0 px-1 font-serif text-xl text-gold lg:px-3">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h3 className="break-keep font-serif text-2xl font-black leading-[1.4] text-ivory sm:text-3xl text-balance">
            기출유형부터 변형문제까지.
            <br />
            시험에 필요한 문제만 정교하게 담았습니다.
          </h3>
          <p className="mx-auto mt-6 break-keep text-sm leading-relaxed text-lavender/75 md:text-base">
            시험장에서 처음 보는 문제처럼 느껴지지 않도록, C-BRIDGE는 반복적으로 출제되는 핵심
            구조와 문제 패턴을 체계적으로 훈련합니다.
          </p>
          <p className="mx-auto mt-4 break-keep text-sm leading-relaxed text-lavender/75 md:text-base">
            시험은 모든 문제가 새로운 것이 아니라 익숙한 유형이 다른 형태로 변형되어 출제되는
            경우가 많습니다. 단순 암기보다는 유형을 알아보고 풀이 전략을 바로 적용하는 능력이
            중요합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
