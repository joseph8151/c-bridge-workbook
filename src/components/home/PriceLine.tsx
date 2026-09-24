import Link from "next/link";
import Image from "next/image";
import { priceSummaryLine } from "@/lib/products";

export default function PriceLine() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:order-2">
          <Image
            src="/images/book-desk.jpg"
            alt="C-BRIDGE 문제집 www.c-bridge.uk"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="md:order-1">
          <p
            className="break-keep font-serif text-2xl font-black leading-relaxed md:text-3xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            {priceSummaryLine}
          </p>
          <Link
            href="/consultation"
            className="mt-8 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
        </div>
      </div>
    </section>
  );
}
