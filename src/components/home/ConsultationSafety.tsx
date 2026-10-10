import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function ConsultationSafety() {
  return (
    <section className="border-t py-16 md:py-24" style={{ borderColor: "var(--color-border)", background: "var(--color-paper-dark)" }} data-reveal>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="img-fade relative aspect-[4/3] w-28 shrink-0 overflow-hidden min-[430px]:w-32">
            <Image src="/images/notebook-hands.jpg" alt="" fill sizes="128px" className="object-cover" />
          </div>

          <div>
            <p className="eyebrow">CONSULTATION</p>
            <p className="mt-2 max-w-xl break-keep text-base leading-[1.7]" style={{ color: "var(--color-ink)" }}>
              가격은 위 PACKAGE & PRICE에서 먼저 확인해보세요. 어떤 구성을 골라야 할지 몰라도
              괜찮습니다 — 시험명과 목표만 알려주시면 필요한 구성을 안내해드립니다.
            </p>
            <Link
              href="/consultation"
              className="mt-4 inline-flex text-sm font-medium transition-colors hover:text-[var(--color-bronze)]"
              style={{ color: "var(--color-ink)" }}
            >
              구성 상담하기 <span className="arrow-slide ml-1.5">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
