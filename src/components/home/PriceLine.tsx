import Link from "next/link";
import { priceSummaryLine } from "@/lib/products";

export default function PriceLine() {
  return (
    <section className="bg-paper py-14 md:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 text-center md:px-10">
        <p
          className="max-w-lg break-keep text-base font-semibold leading-relaxed md:text-lg"
          style={{ color: "var(--color-inkstrong)" }}
        >
          {priceSummaryLine}
        </p>
        <Link
          href="/consultation"
          className="inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
          style={{ background: "var(--color-rust)" }}
        >
          상담
        </Link>
      </div>
    </section>
  );
}
