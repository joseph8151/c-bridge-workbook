import type { Metadata } from "next";
import Link from "next/link";
import PricingTiers from "@/components/PricingTiers";

export const metadata: Metadata = {
  title: "가격 안내 | C-BRIDGE",
  description: "C-BRIDGE 시험 대비 패키지 100P·200P·300P 구성과 가격을 확인하세요.",
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-purple">가격 안내</p>
          <h1 className="mt-3 font-serif text-4xl font-black text-ink md:text-5xl">
            시험 대비 패키지, 한눈에 비교하세요.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
            시험에 따라 제공 자료와 문제 구성은 조금씩 달라지지만, 가격 구조는 어떤 시험을
            준비하든 동일합니다.
          </p>
        </div>
      </section>

      <PricingTiers eyebrow="" title="100P · 200P · 300P" subtitle="" />

      <section className="bg-cream py-14 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-bold text-ink md:text-3xl">
            아직 어떤 분량이 맞는지 모르겠다면?
          </p>
          <Link
            href="/finder"
            className="rounded-[14px] bg-purple px-8 py-3.5 text-sm font-bold tracking-[0.04em] text-ivory transition-colors hover:bg-plum"
          >
            무료 교재 추천 받기
          </Link>
        </div>
      </section>
    </>
  );
}
