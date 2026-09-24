import Link from "next/link";
import { tierMeta, tierOrder } from "@/lib/products";

export default function PriceLine() {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          가격
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
          {tierOrder.map((tier, i) => {
            const m = tierMeta[tier];
            return (
              <div key={tier} className="flex items-center gap-10 sm:gap-16">
                <div>
                  <p
                    className="font-serif text-6xl font-black leading-none md:text-7xl"
                    style={{ color: "var(--color-inkstrong)" }}
                  >
                    {m.label}
                  </p>
                  <p className="mt-3 text-lg font-bold" style={{ color: "var(--color-inkstrong)" }}>
                    {m.price.toLocaleString()}원
                  </p>
                </div>
                {i === 0 && <div className="hidden h-16 w-px sm:block" style={{ background: "var(--color-line)" }} />}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink/50">페이지 수에 따라 구성이 달라집니다.</p>

        <Link
          href="/consultation"
          className="mt-8 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all duration-300 hover:brightness-90"
          style={{ background: "var(--color-rust)" }}
        >
          상담
        </Link>
      </div>
    </section>
  );
}
