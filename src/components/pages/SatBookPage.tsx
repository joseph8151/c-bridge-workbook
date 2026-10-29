import Link from "next/link";
import Container from "@/components/Container";

const bodyLines = [
  "SAT는 영어와 수학, 두 영역을 각각 따로 주문합니다.",
  "분량은 100P · 200P · Special 중에서 과목별로 고르실 수 있습니다.",
  "두 과목을 함께 준비하실 경우 단가의 2배이며, 과목과 분량을 상담 시 말씀해 주세요.",
];

const subjects = [
  {
    name: "SAT 영어",
    sub: "Reading and Writing",
    tiers: [
      { label: "100P", price: "₩190,000" },
      { label: "200P", price: "₩290,000" },
      { label: "Special", price: "₩390,000" },
    ],
  },
  {
    name: "SAT 수학",
    sub: "Math",
    tiers: [
      { label: "100P", price: "₩190,000" },
      { label: "200P", price: "₩290,000" },
      { label: "Special", price: "₩390,000" },
    ],
  },
];

const options = [
  { key: "A", text: "formally", correct: false },
  { key: "B", text: "formerly", correct: true },
  { key: "C", text: "former", correct: false },
  { key: "D", text: "form", correct: false },
];

const readingOptions = [
  { key: "A", text: "To criticize the committee's decision", correct: false },
  { key: "B", text: "To summarize the committee's reasoning for a proposed change", correct: true },
  { key: "C", text: "To argue against all future policy revisions", correct: false },
  { key: "D", text: "To describe an unrelated historical event", correct: false },
];

const mathOptions = [
  { key: "A", text: "x = 3", correct: false },
  { key: "B", text: "x = 4", correct: true },
  { key: "C", text: "x = 5", correct: false },
  { key: "D", text: "x = 6", correct: false },
];

export default function SatBookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">STUDY ABROAD · SAT</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            영어와 수학, 필요한 과목만 따로 준비합니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            미국 대학 진학을 위한 SAT. Reading and Writing과 Math을 과목별로 주문합니다.
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

      {/* Look Inside — 자체 제작 예시 1문항 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              SAT 영어 · WORDS IN CONTEXT (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-lg italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
              &ldquo;The policy, _____ limited to downtown businesses, now applies to the entire
              city.&rdquo;
            </p>

            <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: 빈칸에 들어갈 가장 적절한 단어를 고르시오.
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
              WHY — 정책이 과거에는 제한적으로 적용되었다가 지금은 확대되었다는 문맥이므로, 과거 시점을
              나타내는 부사 &ldquo;formerly(이전에는)&rdquo;가 들어갑니다.
            </p>

            <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                SAT 영어 · CRAFT AND STRUCTURE (자체 제작 예시)
              </p>
              <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
                &ldquo;The committee acknowledged the plan&apos;s initial success but proposed a
                revision, arguing that the original timeline no longer reflected current
                needs.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                질문: Which choice best describes the main purpose of the text?
              </p>
              <div className="mt-4 space-y-2.5">
                {readingOptions.map((o) => (
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
                WHY — 지문은 위원회가 계획을 비판하거나 모든 향후 정책을 반대하는 것이 아니라, 기존
                일정이 현재 상황에 맞지 않는다는 이유로 수정을 제안하는 과정을 요약하고 있으므로 B가
                정답입니다.
              </p>
            </div>

            <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                SAT 수학 · LINEAR EQUATIONS (자체 제작 예시)
              </p>
              <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
                2x + 5 = 3x + 1일 때, x의 값은?
              </p>
              <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                질문: 위 방정식을 만족하는 x를 고르시오.
              </p>
              <div className="mt-4 space-y-2.5">
                {mathOptions.map((o) => (
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
                WHY — 양변에서 2x와 1을 정리하면 4 = x이므로, x = 4입니다. 이항 과정에서 부호를 바꾸는
                것을 빠뜨리지 않는 것이 핵심입니다.
              </p>
            </div>

            <p className="mt-6 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 예시입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 상품 — 과목별 개별 주문, 상담 CTA만 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE & PRICE</p>

          <div className="mt-8 space-y-10 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            {subjects.map((s) => (
              <div key={s.name}>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {s.name} <span style={{ color: "var(--color-muted)" }}>· {s.sub}</span>
                </p>
                <div className="mt-4 grid gap-6 sm:grid-cols-3">
                  {s.tiers.map((t) => (
                    <div key={t.label}>
                      <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                        {t.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/consultation?test=${encodeURIComponent(s.name)}`}
                  className="btn-primary mt-5 px-7 text-sm font-medium"
                >
                  {s.name} 상담하기
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            영어·수학을 함께 주문하실 경우 단가 × 2이며, 카카오톡에 &ldquo;SAT 영어+수학&rdquo;과 과목별
            분량을 적어 주세요.
          </p>

          <p className="mt-2 text-xs" style={{ color: "var(--color-muted)" }}>
            즉시결제는 제공하지 않습니다. 상담 후 구성을 확정합니다.
          </p>
        </Container>
      </section>
    </>
  );
}
