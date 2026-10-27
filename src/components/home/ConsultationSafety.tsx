import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function ConsultationSafety() {
  return (
    <section className="border-t py-16 md:py-24" style={{ borderColor: "var(--bg-line)", background: "var(--bg-surface)" }} data-reveal>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="img-fade relative aspect-[4/3] w-28 shrink-0 overflow-hidden min-[430px]:w-32">
            <Image src="/images/notebook-hands.jpg" alt="" fill sizes="128px" className="object-cover" />
          </div>

          <div>
            <p className="eyebrow">CONSULTATION</p>
            <p className="mt-2 max-w-xl break-keep text-base leading-[1.7]" style={{ color: "var(--bg-ink)" }}>
              시험과 목표에 따라 필요한 범위가 다릅니다. 가격을 먼저 확인하신 후, 충분한 상담을
              통해 필요한 영역과 분량을 좁혀보세요.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <Link
                href="/pricing"
                className="inline-flex text-sm font-medium transition-colors hover:text-[var(--bg-accent)]"
                style={{ color: "var(--bg-ink)" }}
              >
                가격 먼저 확인하기 <span className="arrow-slide ml-1.5">→</span>
              </Link>
              <Link
                href="/consultation"
                className="inline-flex text-sm font-medium transition-colors hover:text-[var(--bg-accent)]"
                style={{ color: "var(--bg-ink)" }}
              >
                구성 상담하기 <span className="arrow-slide ml-1.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
