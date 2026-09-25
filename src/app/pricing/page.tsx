import type { Metadata } from "next";
import Link from "next/link";
import { tierMeta, tierOrder, Tier } from "@/lib/products";

const tierDescriptions: Record<Tier, string> = {
  COMPLETE: "약한 영역 집중. 문제·해설·영역 세트.",
  PREMIUM: "전 영역 + 전 영역 모의 1회 + 시험 직전 16쪽 + 구성 상담 1회 수정.",
};

export const metadata: Metadata = {
  title: "가격 안내 | C-BRIDGE",
  description: "C-BRIDGE 시험 대비 패키지 200P·300P 구성과 가격을 확인하세요.",
};

export default function PricingPage() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[640px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          가격 안내
        </p>
        <h1
          className="mx-auto mt-5 break-keep font-serif text-3xl font-black leading-[1.35] md:text-4xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          직군이 달라도 페이지 가격은 같습니다.
        </h1>

        <div className="mx-auto mt-12 grid max-w-xl gap-5 sm:grid-cols-2">
          {tierOrder.map((t) => {
            const meta = tierMeta[t];
            return (
              <div key={t} className="border p-8 text-left" style={{ borderColor: "var(--color-line)" }}>
                <span className="whitespace-nowrap font-serif text-4xl font-black" style={{ color: "var(--color-inkstrong)" }}>
                  {meta.pages}페이지
                </span>
                <span className="mt-1 block font-serif text-2xl font-bold" style={{ color: "var(--color-inkstrong)" }}>
                  {meta.price.toLocaleString()}원
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{tierDescriptions[t]}</p>
                <div className="mt-5 h-[2px] w-10" style={{ background: "var(--color-pistachio)" }} />
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink/60">포함: 문제, 해설, 모의.</p>

        <div className="mx-auto mt-10 max-w-sm border p-8" style={{ borderColor: "var(--color-line)" }}>
          <p className="font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
            상담
          </p>
          <div className="mt-2 h-[2px] w-8" style={{ background: "var(--color-pistachio)" }} />
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            목표와 현재 수준에 맞춰 필요한 구성을 안내해드립니다.
          </p>
          <Link
            href="/consultation"
            className="mt-6 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
        </div>
      </div>
    </section>
  );
}
