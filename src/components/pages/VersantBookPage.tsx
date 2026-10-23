import Link from "next/link";
import Container from "@/components/Container";
import AddOnSection from "@/components/AddOnSection";

const includes = [
  "문제집 100P",
  "상세 해설",
  "Speaking 실전 자료",
  "Listening 음원",
  "시험 직전 요약자료",
  "학습 플랜",
  "추가 연습자료",
];

const recommendedFor = [
  "Versant를 처음 준비하는 경우",
  "기업 채용·승진·사내평가를 준비하는 경우",
  "Speaking과 Listening 반응 속도를 집중적으로 높이고 싶은 경우",
  "단기간에 시험 형식에 익숙해져야 하는 경우",
];

const lookInsideExamples = [
  {
    label: "SENTENCE REPEAT (자체 제작 예시)",
    prompt:
      "The shipment was delayed because the supplier changed the delivery schedule without notice.",
    detail:
      "들은 문장을 그대로 따라 말하는 유형입니다. 문장이 길어질수록 의미 단위(배송 지연 → 원인 → 결과)로 끊어 기억해야 정확히 반복할 수 있습니다. 짧은 간격 안에 바로 응답하는 연습이 핵심입니다.",
  },
  {
    label: "SENTENCE BUILD (자체 제작 예시)",
    prompt: "meeting / the / postponed / was / budget review",
    detail:
      "뒤섞인 단어를 듣고 올바른 어순의 문장으로 재구성해 말하는 유형입니다. 단어를 하나씩 따라가기보다 문장 전체의 의미를 먼저 떠올린 뒤 자연스러운 어순으로 배열하는 연습이 반응 속도를 높여줍니다.",
  },
  {
    label: "SHORT ANSWER QUESTION (자체 제작 예시)",
    prompt: "회의 일정이 변경되었다는 소식을 들었을 때, 동료에게 가장 먼저 확인해야 할 것은 무엇입니까?",
    detail:
      "짧은 질문에 즉각적으로 핵심만 답하는 유형입니다. 문장을 길게 구성하려 하지 말고, 질문이 요구하는 정보(언제·어디서·무엇을) 하나에 집중해 빠르게 답하는 것이 핵심입니다.",
  },
];

export default function VersantBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">EMPLOYMENT · VERSANT 100P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            Versant는 반응 속도를 보는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            Versant의 실제 평가 흐름에 맞춰 Speaking과 Listening 중심 과제를 집중적으로 연습하는
            100페이지 구성입니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            짧은 응답, 문장 이해, 반복, 듣기·말하기 반응 속도 등 Versant에서 요구하는 핵심 과제를
            충분히 연습할 수 있도록 구성합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                VERSANT · 100P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                129,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=Versant&tier=100P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link
                href="/pricing?test=Versant&price=129000&label=Versant%20%C2%B7%20100P#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                129,000원 바로 구매
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 포함 구성 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">WHAT&apos;S INCLUDED</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            필요한 유형을 충분히 반복할 수 있도록 집중형으로 구성합니다.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Look Inside — 자체 제작 예시 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            {lookInsideExamples.map((ex, i) => (
              <div key={ex.label} className={i > 0 ? "mt-6 border-t pt-6" : ""} style={i > 0 ? { borderColor: "var(--color-border)" } : undefined}>
                <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                  {ex.label}
                </p>
                <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
                  &ldquo;{ex.prompt}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  연습 포인트
                </p>
                <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {ex.detail}
                </p>
              </div>
            ))}
            <p className="mt-6 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 예시입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 이런 분께 추천 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">RECOMMENDED FOR</p>
          <h2 className="mt-3 font-serif text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            이런 분께 추천합니다
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-3 border-t pt-6 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
            {recommendedFor.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 가격 + CTA */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE & PRICE</p>
          <p className="mt-3 font-serif text-xl font-semibold tracking-[-0.01em]" style={{ color: "var(--color-ink)" }}>
            Versant · 100P
          </p>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                PRICE
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                129,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=Versant&tier=100P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link
                href="/pricing?test=Versant&price=129000&label=Versant%20%C2%B7%20100P#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                129,000원 바로 구매
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <AddOnSection testSlug="versant" />
    </>
  );
}
