import Link from "next/link";
import Container from "@/components/Container";

const bodyLines = [
  "한국 간호 면허 소지자가 독일 현장에서 쓰는 독일어다.",
  "환자 대화, 인수인계, 기록. 문법 전권이 아니다.",
  "Goethe-Test PRO Pflege가 필요하면 같은 구성에서 맞춘다. 시험을 따로 팔지 않는다.",
];

const includes = ["듣기·읽기·쓰기·말하기(병동)", "한국어 해설", "모의", "Final Review"];

const prices = [
  { label: "Pflege 100P", price: "₩129,000" },
  { label: "Pflege 200P", price: "₩199,000" },
  { label: "Pflege 300P", price: "₩279,000" },
];

const lookInsideExamples = [
  {
    label: "HANDOVER (자체 제작 예시)",
    quote: "„Der Blutdruck des Patienten liegt bei 130 zu 85, der Puls bei 78 pro Minute.“",
    instruction: "지시: 위 인수인계 문장을 듣고 환자의 활력징후를 한국어로 요약하세요.",
  },
  {
    label: "MEDICATION INSTRUCTION (자체 제작 예시)",
    quote:
      "„Der Patient muss zweimal täglich zwanzig Milligramm dieses Medikaments einnehmen, morgens und abends nach dem Essen.“",
    instruction: "지시: 위 문장을 듣고 투약 시간과 용량을 한국어로 요약하세요.",
  },
  {
    label: "PATIENT COMMUNICATION (자체 제작 예시)",
    quote: "„Wir müssen jetzt Ihren Verband wechseln, das dauert nur ein paar Minuten und tut nicht weh.“",
    instruction: "지시: 위 문장을 듣고 환자에게 전달해야 할 핵심 내용을 한국어로 요약하세요.",
  },
];

export default function TelcPflegeBookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">MEDICAL GERMAN · TELC PFLEGE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            병동 독일어가 안 되면 B2가 의미가 없습니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            telc B1–B2 Pflege. 독일 간호사 인정. 일반 Goethe B2가 아닙니다.
          </p>
        </Container>
      </section>

      {/* 본문 세 줄 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <div className="space-y-5 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            {bodyLines.map((line, i) => (
              <p key={line} className="flex gap-4 break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
                <span className="shrink-0 font-serif font-bold" style={{ color: "var(--color-bronze)" }}>
                  {i + 1}
                </span>
                {line}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Look Inside — 독일어 문장 + 한국어 지시, 3개 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            {lookInsideExamples.map((ex, i) => (
              <div key={ex.label} className={i > 0 ? "mt-6 border-t pt-6" : ""} style={i > 0 ? { borderColor: "var(--color-border)" } : undefined}>
                <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                  {ex.label}
                </p>
                <p className="mt-4 break-keep font-serif text-lg italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
                  {ex.quote}
                </p>
                <p className="mt-6 break-keep text-sm leading-relaxed" style={{ color: "var(--color-ink)" }}>
                  {ex.instruction}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 상품 — 상담 CTA만 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE & PRICE</p>
          <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
            {prices.map((p) => (
              <div key={p.label}>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {p.label}
                </p>
                <p className="mt-1 font-serif text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm" style={{ color: "var(--color-muted)" }}>
            포함: {includes.join(" · ")}
          </p>

          <p className="mt-2 text-xs" style={{ color: "var(--color-muted)" }}>
            상담을 통해 필요한 구성을 확정해드립니다. 신청 후 30분 이내 연락드립니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link href="/consultation?test=TELC%20Pflege&tier=200P" className="btn-primary px-7 text-sm font-medium">
              구성 상담
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
