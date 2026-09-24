import Image from "next/image";

export default function LookInside() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/workbook-open.jpg"
            alt="C-BRIDGE 문제집 www.c-bridge.uk"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div>
          <p
            className="text-xs font-bold tracking-[0.24em]"
            style={{ color: "var(--color-rust)" }}
          >
            LOOK INSIDE
          </p>
          <h2
            className="mt-4 break-keep font-serif text-2xl font-black leading-snug md:text-3xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            구매 전, 실제 구성을 먼저 확인하세요.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
            각 시험 상세페이지에서 표지, 목차, 실제 문제와 해설 일부를 미리 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
