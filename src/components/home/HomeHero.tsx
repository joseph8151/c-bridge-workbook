import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-diagonal.jpg"
        alt="C-BRIDGE 문제집 www.c-bridge.uk"
        fill
        sizes="100vw"
        priority
        className="object-cover"
        style={{ objectPosition: "center" }}
      />

      <div className="absolute inset-x-0 bottom-0 p-6 md:bottom-16 md:left-16 md:right-auto md:p-0">
        <div
          className="max-w-sm rounded-sm p-7 backdrop-blur-sm md:p-8"
          style={{ background: "rgba(239, 230, 214, 0.88)" }}
        >
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            C-BRIDGE
          </p>
          <p className="mt-1 text-[11px] font-bold tracking-[0.14em] text-ink/50">
            성인 어학시험 전문 문제집
          </p>
          <h1
            className="mt-4 break-keep font-serif text-2xl font-black leading-[1.35] md:text-[28px]"
            style={{ color: "var(--color-inkstrong)" }}
          >
            펼치면, 오늘 할 분량이 보입니다.
          </h1>
          <Link
            href="/consultation"
            className="mt-6 inline-block rounded-sm px-6 py-3 text-xs font-bold tracking-[0.1em] text-paper transition-all hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
          <p className="mt-3 text-[11px] text-ink/45">{siteConfig.weekendNotice}</p>
        </div>
      </div>
    </section>
  );
}
