import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function HomeHero() {
  return (
    <section className="flex min-h-[85vh] w-full items-center bg-paper">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12 md:px-10 md:py-0">
        <div>
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            C-BRIDGE
          </p>
          <h1
            className="hero-fade-up mt-6 break-keep font-serif text-[9vw] font-black leading-[1.15] md:text-[3.4vw] lg:text-[52px]"
            style={{ color: "var(--color-inkstrong)" }}
          >
            직군과 나라가 다르면
            <br />
            같은 영어가 아닙니다.
          </h1>
          <p className="mt-4 break-keep text-base font-semibold text-ink/60 md:text-lg">
            문제 · 해설 · 모의. 200페이지 또는 300페이지.
          </p>
          <Link
            href="/consultation"
            className="btn-primary hero-fade-up mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
            style={{ animationDelay: "80ms" }}
          >
            상담
          </Link>
          <p className="mt-4 text-sm text-ink/45">{siteConfig.weekendNotice}</p>
        </div>

        <div
          className="hero-scale-in hidden flex-col gap-5 border-l pl-10 md:flex"
          style={{ borderColor: "var(--color-line)" }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/hero-mark.jpg"
              alt="C-BRIDGE 브랜드 마크"
              fill
              sizes="(max-width: 768px) 0px, 420px"
              className="object-cover"
            />
          </div>
          <div className="max-w-[240px]">
            <p className="text-[11px] font-bold tracking-[0.16em] text-ink/40">{siteConfig.tagline}</p>
            <p className="mt-3 break-keep text-sm leading-relaxed text-ink/60">{siteConfig.taglineKo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
