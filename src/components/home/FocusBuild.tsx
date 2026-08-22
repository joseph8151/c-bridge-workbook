import SectionHeading from "../SectionHeading";
import { focusBuildItems } from "@/lib/qualityContent";

export default function FocusBuild() {
  return (
    <section className="bg-lavender/20 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Build Your Own Practice"
          title="내가 부족한 영역에 문제를 더 많이."
          subtitle="모든 수험생에게 똑같은 구성의 교재가 필요한 것은 아닙니다."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusBuildItems.map((item) => (
            <div
              key={item.weak}
              className="flex items-center gap-4 rounded-[18px] border border-purple/10 bg-ivory p-6 transition-all hover:-translate-y-1 hover:shadow-[0_14px_28px_-16px_rgba(69,53,101,0.28)]"
            >
              <div className="min-w-0 flex-1">
                <p className="break-keep text-sm text-ink/55">{item.weak}</p>
                <p className="mt-1.5 break-keep font-serif text-base font-bold text-purple">
                  {item.action}
                </p>
              </div>
              <span className="shrink-0 font-serif text-xl text-gold">→</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl break-keep text-center text-sm font-semibold leading-relaxed text-ink/60 md:text-base">
          시험 + 목표점수 + 부족한 영역 + 원하는 문제량을 조합하여, 나에게 필요한 구성만 담을 수
          있습니다.
        </p>
      </div>
    </section>
  );
}
