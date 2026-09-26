import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

const checklist = ["시험명", "현재 수준", "목표", "시험일까지 남은 기간", "집중하고 싶은 영역"];

export default function ConsultationSafety() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <SectionHeader
          eyebrow="CONSULTATION"
          title="어떤 구성을 골라야 할지 몰라도 괜찮습니다."
          description="시험명, 현재 수준, 목표, 시험일까지 남은 기간, 집중하고 싶은 영역을 상담에서 확인하고 필요한 구성을 안내해드립니다."
        />

        <div>
          <ul className="flex flex-wrap gap-2">
            {checklist.map((c) => (
              <li
                key={c}
                className="border px-3.5 py-1.5 text-xs font-medium"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              결제 전 상담을 통해 필요한 구성으로 먼저 조정하며, 결제 후에도{" "}
              <strong style={{ color: "var(--color-ink)" }}>구성 상담 1회, 구성 수정 1회</strong>가
              제공됩니다.
            </p>
          </div>

          <Link href="/consultation" className="btn-primary mt-7 px-7 text-sm font-medium">
            구성 상담하기
          </Link>
        </div>
      </Container>
    </section>
  );
}
