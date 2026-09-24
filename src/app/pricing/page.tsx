import type { Metadata } from "next";
import Link from "next/link";
import { tierMeta, tierOrder } from "@/lib/products";

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

        <div className="mx-auto mt-12 max-w-sm">
          {tierOrder.map((t) => {
            const meta = tierMeta[t];
            return (
              <div
                key={t}
                className="flex items-baseline justify-between border-t py-6"
                style={{ borderColor: "var(--color-line)" }}
              >
                <span className="font-serif text-2xl font-black" style={{ color: "var(--color-inkstrong)" }}>
                  {meta.pages}페이지
                </span>
                <span className="font-serif text-2xl font-black" style={{ color: "var(--color-inkstrong)" }}>
                  {meta.price.toLocaleString()}원
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink/60">포함: 문제, 해설, 모의.</p>

        <Link
          href="/consultation"
          className="mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
          style={{ background: "var(--color-rust)" }}
        >
          구성 상담
        </Link>
      </div>
    </section>
  );
}
