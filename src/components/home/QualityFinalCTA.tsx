import Link from "next/link";
import { DotGrid } from "../Decor";

export default function QualityFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-plum py-20 md:py-28">
      <DotGrid id="quality-final-dot-grid" className="inset-0 h-full w-full opacity-[0.06]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.32em] text-gold">Practice What Matters.</p>
        <p className="mx-auto mt-6 max-w-xl break-keep text-sm leading-relaxed text-lavender/80 md:text-base">
          기출유형을 분석하고, 목표 점수에 맞추고, 부족한 영역을 더 채웁니다.
        </p>

        <div className="mx-auto mb-2 mt-10 h-px w-14 bg-gold/50" />
        <h2 className="font-serif text-2xl font-black leading-snug text-ivory sm:text-3xl md:text-4xl text-balance">
          내 시험에 맞는 C-BRIDGE 교재 찾기
        </h2>
        <p className="mx-auto mt-5 max-w-xl break-keep text-sm leading-relaxed text-lavender/75 md:text-base">
          시험명, 현재 수준, 목표 점수, 집중하고 싶은 영역을 알려주세요.
          <br />
          나에게 필요한 문제 구성을 선택할 수 있습니다.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/consultation"
            className="rounded-[14px] bg-gold px-8 py-4 text-sm font-bold tracking-[0.04em] text-plum transition-all hover:-translate-y-0.5 hover:brightness-105"
          >
            맞춤 교재 상담하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
