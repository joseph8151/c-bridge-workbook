import Link from "next/link";
import { tierMeta, tierOrder } from "@/lib/products";

export default function PriceLine() {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          가격
        </p>

        <div className="mx-auto mt-8 grid max-w-lg gap-5 sm:grid-cols-2">
          {tierOrder.map((tier) => {
            const m = tierMeta[tier];
            return (
              <div key={tier} className="border p-8" style={{ borderColor: "var(--color-line)" }}>
                <p
                  className="font-serif text-5xl font-black leading-none"
                  style={{ color: "var(--color-inkstrong)" }}
                >
                  {m.label}
                </p>
                <p className="mt-3 text-base font-bold" style={{ color: "var(--color-inkstrong)" }}>
                  {m.price.toLocaleString()}원
                </p>
                {tier === "PREMIUM" && (
                  <p className="mt-2 break-keep text-xs leading-relaxed text-ink/50">
                    전 영역 + 전 영역 모의 1회 + 시험 직전 16쪽 + 구성 상담 1회 수정.
                  </p>
                )}
                <div className="mt-5 h-[2px] w-10" style={{ background: "var(--color-pistachio)" }} />
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink/50">페이지 수에 따라 구성이 달라집니다.</p>

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
            className="mt-6 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all duration-300 hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
        </div>
      </div>
    </section>
  );
}
