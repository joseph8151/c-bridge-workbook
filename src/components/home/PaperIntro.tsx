import Image from "next/image";

export default function PaperIntro() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/logo-emboss.jpg"
            alt="C-BRIDGE 문제집 www.c-bridge.uk"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <h2
          className="break-keep font-serif text-3xl font-black leading-[1.35] md:text-4xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          종이에서 공부가 시작됩니다.
        </h2>
      </div>
    </section>
  );
}
