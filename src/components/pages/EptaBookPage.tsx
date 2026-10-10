import Link from "next/link";
import Container from "@/components/Container";

const configs = [
  {
    level: "EPTA Level 4",
    desc: "운항 최소",
    tier: "200P",
    price: "₩220,500",
    href: "/consultation?test=EPTA&level=4",
  },
  {
    level: "EPTA Level 5",
    desc: "재평가·승급",
    tier: "300P",
    price: "₩332,100",
    href: "/consultation?test=EPTA&level=5",
  },
];

export default function EptaBookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">AVIATION ENGLISH · EPTA</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            관제 영어는 유창함이 아니라 표준 구문이다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            ICAO Language Proficiency Requirements 대비. 관제·조종 무선통신 표준 구문 중심으로 준비합니다.
          </p>
        </Container>
      </section>

      {/* 구성 안내 한 줄 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="max-w-2xl break-keep border-t pt-8 text-base leading-relaxed md:text-lg" style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}>
            ICAO LPR, FCL.055, ELPAC 대비는 이 구성 안에서 맞춘다. 시험 이름을 따로 팔지 않는다.
          </p>
        </Container>
      </section>

      {/* 구성 — Level 4 / Level 5 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE & PRICE</p>
          <div className="mt-8 grid gap-10 border-t pt-8 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
            {configs.map((c) => (
              <div key={c.level}>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {c.level} · {c.desc}
                </p>
                <p className="mt-1 text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-muted)" }}>
                  {c.tier}
                </p>
                <p className="mt-2 font-serif text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
                  {c.price}
                </p>
                <Link href={c.href} className="btn-primary mt-6 px-7 text-sm font-medium">
                  상담하기
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs" style={{ color: "var(--color-muted)" }}>
            즉시결제는 제공하지 않습니다. 상담 후 구성을 확정합니다.
          </p>
        </Container>
      </section>
    </>
  );
}
