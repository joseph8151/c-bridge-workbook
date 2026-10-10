import Link from "next/link";
import Container from "@/components/Container";

const includes = ["듣기", "문법", "어휘", "읽기", "숫자·시각", "구술 TOSE 문항", "해설(한국어)"];

const prices = [
  { label: "Marlins + TOSE 200P", price: "₩220,500" },
  { label: "Marlins + TOSE 300P", price: "₩332,100" },
];

const options = [
  { key: "A", text: "03:00", correct: true },
  { key: "B", text: "09:05", correct: false },
  { key: "C", text: "12:30", correct: false },
];

export default function MarlinsBookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">MARITIME ENGLISH · MARLINS + TOSE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            숫자가 들리지 않으면 당직이 불가능합니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            Marlins English for Seafarers + TOSE. STCW·기국·크루즈 채용.
          </p>
        </Container>
      </section>

      {/* 한 줄 구분 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="max-w-2xl break-keep border-t pt-8 text-base leading-relaxed md:text-lg" style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}>
            Marlins는 컴퓨터 객관식이다. TOSE는 말하기이다. 한 파일에 섞지 말고 세트로 판다.
          </p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            듣기·문법·어휘·읽기·숫자·시각 영역으로 구성되며, 점수는 퍼센트로 산출됩니다. 선원용(METS),
            오프쇼어, 크루즈 직원용 버전이 각각 다르며, 해당 버전은 상담에서 확인합니다.
          </p>
        </Container>
      </section>

      {/* Look Inside — 짧은 듣기 스크립트 + 숫자 문항 1개, HTML 텍스트만 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              LISTENING SCRIPT (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
              &ldquo;This is the bridge. We are altering course to zero nine five degrees. ETA at the
              pilot station is zero three hundred hours. Current speed is twelve point five knots.&rdquo;
            </p>

            <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: 선박의 예상 도착 시각(ETA)은 몇 시입니까?
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
                  <span className="flex-1">{o.text}</span>
                  {o.correct && (
                    <span className="shrink-0 text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-bronze)" }}>
                      정답
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — &ldquo;zero three hundred hours&rdquo;는 시각을 나타내는 해사 통신 표현으로, 03:00을
              의미합니다. 숫자를 자리별로 끊어 듣는 훈련이 핵심입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 상품 — 상담 CTA만 */}
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
            구성: {includes.join(" · ")}
          </p>

          <p className="mt-2 text-xs" style={{ color: "var(--color-muted)" }}>
            즉시결제는 제공하지 않습니다. 상담 후 구성을 확정합니다.
          </p>

          <Link href="/consultation?test=Marlins&tier=200P" className="btn-primary mt-8 px-7 text-sm font-medium">
            구성 상담하기
          </Link>
        </Container>
      </section>
    </>
  );
}
