import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
        <div>
          <p
            className="text-xs font-bold tracking-[0.24em]"
            style={{ color: "var(--color-rust)" }}
          >
            C-BRIDGE
          </p>
          <h1
            className="mt-5 break-keep font-serif text-4xl font-black leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            직군이 다른 시험은,
            <br />
            문제집도 갈라집니다.
          </h1>
          <Link
            href="/consultation"
            className="mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:aspect-[3/4]">
          <Image
            src="/images/brand.jpg"
            alt="C-BRIDGE 문제집 www.c-bridge.uk"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            priority
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
