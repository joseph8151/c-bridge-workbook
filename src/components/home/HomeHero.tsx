import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function HomeHero() {
  return (
    <section className="flex min-h-[90vh] w-full items-center bg-paper md:min-h-screen">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16 md:px-10 md:py-0">
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
          <Link
            href="/consultation"
            className="mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] transition-all duration-300 hover:brightness-90"
            style={{ background: "var(--color-rust)", color: "var(--color-paper)" }}
          >
            상담
          </Link>
          <p className="mt-4 text-sm text-ink/45">{siteConfig.weekendNotice}</p>
        </div>

        <div className="relative hidden aspect-[3/4] w-full md:block" style={{ background: "var(--color-pistachio)" }} />
      </div>
    </section>
  );
}
