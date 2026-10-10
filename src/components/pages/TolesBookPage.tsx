import Link from "next/link";
import Container from "@/components/Container";

const bodyLines = [
  "시험 이름만 바꾼 IELTS가 아니다.",
  "조항을 읽고, 리스크를 한 문장으로 쓴다.",
  "공식 기출 복원이 아니다. 유형 예상이다.",
];

const includes = ["계약·조항 독해", "협상 메일", "답·해설", "모의 3회", "Final Review"];

const prices = [
  { label: "TOLES Higher 200P", price: "₩220,500" },
  { label: "TOLES Higher 300P", price: "₩332,100" },
];

const options = [
  { key: "A", text: "상대방의 사전 서면 동의가 있는 경우", correct: true },
  { key: "B", text: "계약 종료 후 언제든", correct: false },
  { key: "C", text: "구두로 통지한 경우", correct: false },
];

export default function TolesBookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">LEGAL ENGLISH · TOLES HIGHER</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            계약문이 읽히지 않으면 협상이 시작되지 않습니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            TOLES Higher. 로펌·해외 파견. 일반 비즈니스 영어가 아닙니다.
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

      {/* Look Inside — 실제 문항 1개, HTML 텍스트만 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              CONTRACT CLAUSE (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-lg italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
              &ldquo;The party shall not assign this Agreement without prior written consent.&rdquo;
            </p>

            <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: 양도가 가능한 조건을 고르시오.
            </p>

            <div className="mt-4 space-y-2.5">
              {options.map((o) => (
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
              WHY — &ldquo;without prior written consent&rdquo;는 사전 서면 동의가 없는 양도를 금지한다는 의미이므로,
              반대로 해석하면 사전 서면 동의가 있는 경우에만 양도가 가능합니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 상품 — 상담 CTA만, 즉시결제 없음 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE & PRICE</p>
          <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
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
            즉시결제는 제공하지 않습니다. 상담 후 구성을 확정합니다.
          </p>

          <Link href="/consultation?test=TOLES&tier=200P" className="btn-primary mt-8 px-7 text-sm font-medium">
            구성 상담하기
          </Link>
        </Container>
      </section>
    </>
  );
}
