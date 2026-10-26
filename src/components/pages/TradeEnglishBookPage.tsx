import Link from "next/link";
import Container from "@/components/Container";

const bodyLines = [
  "대한상의 무역영어 1급. 한국 무역직이 본다.",
  "시나공 기본서를 다시 만들지 않는다.",
  "신용장 조건, 불일치, 클레임 서한만 판다.",
];

const includes = ["영문해석", "영작(클레임·회신)", "짧은 한국어 해설", "모의 3회"];

const prices = [
  { label: "L/C·클레임 100P", price: "₩129,000" },
  { label: "L/C·클레임 200P", price: "₩199,000" },
  { label: "L/C·클레임 300P", price: "₩279,000" },
];

const lookInsideExamples = [
  {
    label: "L/C CLAUSE · SHIPMENT DATE (자체 제작 예시)",
    quote: "“Latest date of shipment: 15 MAY 2025.\nPartial shipments are not allowed.”",
    question: "질문: 이 조건에서 선적기한을 고르시오.",
    options: [
      { key: "A", text: "2025년 5월 15일", correct: true },
      { key: "B", text: "신용장 개설일로부터 30일", correct: false },
      { key: "C", text: "선하증권 발행일로부터 21일", correct: false },
    ],
    why: "WHY — 신용장 조항에 “Latest date of shipment”가 날짜로 명시되어 있으면, 그 날짜가 곧 선적기한입니다. 개설일·선하증권일 기준 계산과 혼동하지 않아야 합니다.",
  },
  {
    label: "L/C CLAUSE · PAYMENT TERMS (자체 제작 예시)",
    quote: "“Payment: 100% by irrevocable L/C at sight, available by negotiation.”",
    question: "질문: 이 조건에서 대금 결제 방식을 고르시오.",
    options: [
      { key: "A", text: "취소불능 신용장에 의한 일람불 결제", correct: true },
      { key: "B", text: "선적 후 90일 외상 결제(D/A)", correct: false },
      { key: "C", text: "전신환 송금(T/T) 선지급", correct: false },
    ],
    why: "WHY — “irrevocable L/C at sight”는 서류 제시 즉시 결제되는 취소불능 신용장 조건을 의미합니다. 외상(D/A)이나 단순 송금(T/T)과 혼동하지 않아야 합니다.",
  },
  {
    label: "CLAIM LETTER · REQUESTED REMEDY (자체 제작 예시)",
    quote:
      "“Upon inspection, 120 units were found to be defective. We request a full replacement of the defective goods within 14 days.”",
    question: "질문: 클레임 서한에서 요청하는 조치를 고르시오.",
    options: [
      { key: "A", text: "하자 물품 14일 이내 전량 교체", correct: true },
      { key: "B", text: "대금 전액 환불", correct: false },
      { key: "C", text: "다음 선적분 할인 제공", correct: false },
    ],
    why: "WHY — 서한의 핵심 요청은 마지막 문장 “we request a full replacement... within 14 days”에 있습니다. 클레임 서한은 문제 상황보다 상대방에게 요구하는 구체적 조치를 정확히 짚어내는 것이 핵심입니다.",
  },
];

export default function TradeEnglishBookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">TRADE ENGLISH · 무역영어 1급</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            신용장이 안 읽히면 계약이 끝난 것이다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            무역영어 1급. 영문해석·영작·실무 전권이 아니라 L/C와 클레임.
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

      {/* Look Inside — L/C·클레임 서한 문항 3개, HTML 텍스트만 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            {lookInsideExamples.map((ex, i) => (
              <div key={ex.label} className={i > 0 ? "mt-6 border-t pt-6" : ""} style={i > 0 ? { borderColor: "var(--color-border)" } : undefined}>
                <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                  {ex.label}
                </p>
                <p
                  className="mt-4 break-keep font-serif text-base italic leading-relaxed"
                  style={{ color: "var(--color-ink)", whiteSpace: "pre-line" }}
                >
                  {ex.quote}
                </p>

                <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {ex.question}
                </p>

                <div className="mt-4 space-y-2.5">
                  {ex.options.map((o) => (
                    <div
                      key={o.key}
                      className="flex items-start gap-3 border p-3 text-sm"
                      style={{
                        borderColor: o.correct ? "var(--color-bronze)" : "var(--color-border)",
                        color: "var(--color-ink)",
                      }}
                    >
                      <span className="shrink-0 font-semibold">{o.key}.</span>
                      <span className="flex-1 break-keep">{o.text}</span>
                      {o.correct && (
                        <span className="shrink-0 text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-bronze)" }}>
                          정답
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {ex.why}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-xs" style={{ color: "var(--color-muted)" }}>
            고지: 공식 기출 복원이 아닙니다. 유형 예상입니다.
          </p>
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
            <Link href="/consultation?test=Trade%20English&tier=200P" className="btn-primary px-7 text-sm font-medium">
              구성 상담
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
