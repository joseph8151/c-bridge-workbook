import SectionHeading from "../SectionHeading";
import { CornerAccent } from "../Decor";

export default function InsideBook() {
  return (
    <section className="relative overflow-hidden bg-lavender/25 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Inside The Book"
            title="실제 출판물처럼, 구성부터 다릅니다."
            subtitle="지문, 문제, 해설을 서로 다른 층위로 편집해 실전 감각과 이해도를 동시에 잡습니다. 페이지를 넘기듯 확인해보세요."
          />

          <div className="relative mx-auto h-[420px] w-full max-w-md">
            <div className="absolute left-8 top-10 h-full w-full -rotate-3 rounded-[14px] border border-purple/10 bg-white shadow-lg" />
            <div className="absolute left-4 top-5 h-full w-full rotate-2 rounded-[14px] border border-purple/10 bg-white shadow-lg" />

            <div className="relative h-full w-full rounded-[14px] border border-purple/15 bg-white p-7 shadow-2xl">
              <CornerAccent className="right-3 top-3 rotate-90" />
              <p className="text-[10px] font-bold tracking-[0.18em] text-purple">
                TOEFL READING · PASSAGE 04
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Urban heat islands occur when cities replace natural land cover with dense
                concentrations of pavement and buildings that{" "}
                <mark className="rounded-sm bg-gold/30 px-0.5 text-ink">
                  absorb and retain heat
                </mark>
                ...
              </p>

              <div className="mt-5 border-t border-dashed border-purple/20 pt-4">
                <p className="text-[10px] font-bold tracking-[0.16em] text-purple/70">QUESTION</p>
                <p className="mt-2 text-sm font-semibold text-ink">
                  Why do cities stay warmer than rural areas in the evening?
                </p>
              </div>

              <div className="mt-5 rounded-[10px] bg-lavender/50 p-4">
                <p className="text-[10px] font-bold tracking-[0.16em] text-purple">
                  ANSWER EXPLANATION
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">
                  본문에서 건축물이 낮 동안 흡수한 열을 서서히 방출한다고 언급한 부분이 근거입니다.
                </p>
              </div>

              <div className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-plum shadow-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="m5 12.5 4.5 4.5L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
