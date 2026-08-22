import Link from "next/link";
import { DotGrid } from "../Decor";
import { tierMeta, tierOrder } from "@/lib/products";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-plum py-20 md:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <DotGrid id="final-cta-dot-grid" className="inset-0 h-full w-full opacity-[0.06]" />

      <div className="relative mx-auto max-w-[1440px] px-5 text-center md:px-10">
        <div className="mx-auto mb-7 h-px w-16 bg-gold/50" />
        <h2 className="font-serif text-3xl font-black leading-tight text-ivory sm:text-4xl md:text-5xl text-balance">
          시험이 달라도
          <br />
          좋은 준비의 기준은 같습니다.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-lavender/85 md:text-lg">
          문제집, 해설집, 실전 모의고사, 시험별 추가자료까지
          <br />
          C-BRIDGE에서 한 번에 확인하세요.
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
          {tierOrder.map((tier) => {
            const meta = tierMeta[tier];
            return (
              <div
                key={tier}
                className="rounded-[18px] border border-ivory/10 bg-ivory/5 py-5 transition-transform hover:-translate-y-1"
              >
                {meta.badge && (
                  <p className="text-[10px] font-bold tracking-[0.1em] text-gold">{meta.badge}</p>
                )}
                <p className="mt-1 font-serif text-2xl font-black text-ivory">{meta.label}</p>
                <p className="mt-1 text-sm font-semibold text-lavender/80">
                  {meta.price.toLocaleString()}원
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/all-books"
            className="rounded-[14px] bg-gold px-8 py-4 text-sm font-bold tracking-[0.04em] text-plum transition-all hover:-translate-y-0.5 hover:brightness-105"
          >
            전체 교재 보기
          </Link>
          <Link
            href="/finder"
            className="rounded-[14px] border border-ivory/30 px-8 py-4 text-sm font-bold tracking-[0.04em] text-ivory transition-colors hover:bg-ivory/10"
          >
            내 교재 찾기
          </Link>
        </div>
      </div>
    </section>
  );
}
