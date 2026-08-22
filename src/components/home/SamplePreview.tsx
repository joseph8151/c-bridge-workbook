import SectionHeading from "../SectionHeading";

export default function SamplePreview() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Inside The Book"
            title="THIS IS WHAT PRACTICE LOOKS LIKE."
            subtitle="고객이 실제 출판물처럼 느낄 수 있도록, 모든 문제집은 지문 → 문제 → 해설의 구조로 편집됩니다."
          />

          <div className="relative mx-auto h-[380px] w-full max-w-md">
            <div className="absolute left-6 top-8 h-full w-full -rotate-3 rounded-sm border border-purple/10 bg-ivory shadow-lg" />
            <div className="absolute left-3 top-4 h-full w-full rotate-2 rounded-sm border border-purple/10 bg-ivory shadow-lg" />
            <div className="relative h-full w-full rounded-sm border border-purple/15 bg-ivory p-7 shadow-xl">
              <p className="text-[10px] font-bold tracking-[0.2em] text-purple">
                TOEFL READING · PASSAGE 04
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Urban heat islands occur when cities replace natural land cover with dense
                concentrations of pavement and buildings that absorb and retain heat...
              </p>
              <div className="mt-5 border-t border-dashed border-purple/20 pt-4">
                <p className="text-[10px] font-bold tracking-[0.16em] text-purple/70">QUESTION</p>
                <p className="mt-2 text-sm font-semibold text-ink">
                  Why do cities stay warmer than rural areas in the evening?
                </p>
              </div>
              <div className="mt-5 rounded-sm bg-lavender/40 p-4">
                <p className="text-[10px] font-bold tracking-[0.16em] text-purple">
                  ANSWER EXPLANATION
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">
                  본문에서 건축물이 낮 동안 흡수한 열을 서서히 방출한다고 언급한 부분이 근거입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
