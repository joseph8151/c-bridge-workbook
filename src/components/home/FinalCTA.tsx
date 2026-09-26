import Link from "next/link";
import Container from "@/components/Container";

export default function FinalCTA() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }} data-reveal>
      <Container>
        <div className="flex flex-col items-start gap-8">
          <p
            className="break-keep font-serif text-3xl font-bold leading-[1.25] tracking-[-0.01em] md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            시험은 정했는데,
            <br />
            어떤 구성이 필요한지 모르겠다면.
          </p>
          <div className="flex w-full flex-col gap-2.5 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:gap-4">
            <Link href="/finder" className="btn-primary justify-center px-7 text-sm font-medium">
              내 시험 교재 찾기
            </Link>
            <Link href="/consultation" className="btn-secondary justify-center px-7 text-sm font-medium">
              구성 상담하기
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
