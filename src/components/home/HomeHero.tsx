import Link from "next/link";
import { siteConfig } from "@/lib/config";
import BridgeMark from "@/components/BridgeMark";

export default function HomeHero() {
  return (
    <section className="flex min-h-[56vh] w-full items-center bg-paper md:min-h-[62vh]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12 md:px-10 md:py-0">
        <div>
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            C-BRIDGE
          </p>
          <h1
            className="mt-6 break-keep font-serif text-[9vw] font-black leading-[1.15] md:text-[3.4vw] lg:text-[52px]"
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
            className="mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] transition-all duration-300 hover:brightness-90"
            style={{ background: "var(--color-rust)", color: "var(--color-paper)" }}
          >
            상담
          </Link>
          <p className="mt-4 text-sm text-ink/45">{siteConfig.weekendNotice}</p>
        </div>

        <div className="hidden flex-col items-center justify-center gap-6 border-l md:flex" style={{ borderColor: "var(--color-line)" }}>
          <BridgeMark size={220} />
          <div className="max-w-[220px] text-center">
            <p className="text-[11px] font-bold tracking-[0.16em] text-ink/40">{siteConfig.tagline}</p>
            <p className="mt-3 break-keep text-sm leading-relaxed text-ink/60">{siteConfig.taglineKo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
