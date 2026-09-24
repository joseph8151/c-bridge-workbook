import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function ConsultBlock() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-5 text-center md:px-10">
        <h2
          className="break-keep font-serif text-3xl font-black leading-[1.35] md:text-4xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          목표와 남은 기간을 알려주시면,
          <br />
          맞는 구성을 안내합니다.
        </h2>
        <Link
          href="/consultation"
          className="mt-9 inline-block rounded-sm px-8 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
          style={{ background: "var(--color-rust)" }}
        >
          상담
        </Link>
        <p className="mt-3 text-xs text-ink/45">{siteConfig.weekendNotice}</p>
      </div>
    </section>
  );
}
