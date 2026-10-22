import Link from "next/link";
import Container from "@/components/Container";
import type { ScienceReviewedQuestion } from "@/lib/scienceReviewSchema";

const bodyLines = [
  "GMAT은 계산 속도가 아니라 데이터를 읽고 의사결정하는 능력을 보는 시험입니다.",
  "Quantitative, Verbal, Data Insights를 각각 충분히 연습한 뒤 실전 모의고사로 연결하도록 구성합니다.",
  "유형별 문제 → 상세 해설 → 실전 모의 → Final Review 순서로 학습할 수 있도록 설계했습니다.",
];

const quantTypes = [
  "Problem Solving",
  "Arithmetic",
  "Algebra",
  "Ratios",
  "Percentages",
  "Word Problems",
  "Number Properties",
];

const verbalTypes = [
  "Reading Comprehension",
  "Critical Reasoning",
  "Inference",
  "Main Idea",
  "Assumption",
  "Strengthen / Weaken",
  "Argument Structure",
];

const dataInsightsTypes = [
  "Data Sufficiency",
  "Multi-Source Reasoning",
  "Table Analysis",
  "Graphics Interpretation",
  "Two-Part Analysis",
];

const quantSample: ScienceReviewedQuestion = {
  subject: "Quantitative Reasoning",
  topic: "Ratios · Word Problems",
  difficulty: "Medium",
  prompt: "어떤 공장에서 기계 A와 B가 함께 가동되면 6시간 만에 제품을 완성합니다. 기계 A 혼자서는 10시간이 걸릴 때, 기계 B 혼자서는 몇 시간이 걸리는가?",
  correctAnswer: "15시간",
  explanation:
    "A의 작업 속도는 1/10, 함께 일할 때 속도는 1/6입니다. B의 속도 = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15이므로, B 혼자서는 15시간이 걸립니다.",
  formulaUsed: "1/A + 1/B = 1/(함께 걸리는 시간)",
  sourceCheckRequired: true,
  validationStatus: "unverified",
};

const explanationFields = [
  { label: "Correct Answer", desc: "정답 선택지" },
  { label: "Why It Is Correct", desc: "정답인 이유" },
  { label: "Why Other Choices Are Wrong", desc: "오답 선택지가 틀린 이유" },
  { label: "Core Reasoning Point", desc: "핵심 논증 포인트" },
  { label: "Common Trap", desc: "자주 빠지는 함정" },
  { label: "Difficulty Level", desc: "난이도" },
];

const quantExplanationFields = [
  { label: "Formula Used", desc: "사용한 공식" },
  { label: "Step-by-Step Solution", desc: "풀이 과정" },
  { label: "Common Calculation Error", desc: "자주 하는 계산 실수" },
];

const verbalSampleOptions = [
  { key: "A", text: "신제품 출시 지연은 품질 검증 절차가 길어졌기 때문이다.", correct: false },
  {
    key: "B",
    text: "매출 감소의 원인이 신제품 출시 지연이 아니라 다른 요인(경쟁사 가격 인하 등)일 수 있다.",
    correct: true,
  },
  { key: "C", text: "회사는 신제품 출시를 더 서둘렀어야 한다.", correct: false },
  { key: "D", text: "품질 검증 절차는 생략할 수 없다.", correct: false },
];

const dataSufficiencyOptions = [
  { key: "A", text: "진술 (1)만으로 충분하고, (2)만으로는 불충분하다.", correct: false },
  { key: "B", text: "진술 (2)만으로 충분하고, (1)만으로는 불충분하다.", correct: false },
  { key: "C", text: "(1)과 (2)를 모두 사용해야 충분하다.", correct: true },
  { key: "D", text: "(1), (2)를 각각 따로 사용해도 충분하다.", correct: false },
];

const finalReviewItems = [
  "Quant 공식 체크리스트",
  "Verbal 핵심 유형 체크",
  "Data Insights 접근 순서",
  "시간 관리 체크",
  "자주 나오는 오답 패턴",
];

const studyPlans = [
  { label: "4 WEEK INTENSIVE", title: "4 Week Plan", desc: "시험 일정이 가까운 수험생을 위한 집중 플랜입니다." },
  { label: "8 WEEK STANDARD", title: "8 Week Plan", desc: "기초부터 영역별로 충분히 연습하고 싶은 수험생을 위한 플랜입니다." },
];

const recommendedFor = [
  "GMAT을 처음 준비하는 분",
  "Quantitative Reasoning 계산 속도가 느린 분",
  "Data Insights 자료 해석이 익숙하지 않은 분",
  "Verbal Reasoning 논증 구조를 집중 연습하고 싶은 분",
  "독학용 GMAT 문제집을 찾는 분",
  "시험 전 충분한 문제량이 필요한 분",
];

const overviewRows = [
  { label: "Quantitative Reasoning", value: "100P" },
  { label: "Verbal Reasoning", value: "100P" },
  { label: "Data Insights", value: "100P" },
  { label: "상세 해설집", value: "별도 포함" },
  { label: "Mock Tests", value: "3회" },
  { label: "Bonus Questions", value: "33제" },
  { label: "Final Review", value: "포함" },
  { label: "4 Week Plan", value: "포함" },
  { label: "8 Week Plan", value: "포함" },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
      style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
    >
      {children}
    </span>
  );
}

export default function GmatBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL & GRADUATE EXAMS · GMAT COMPLETE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            GMAT은 계산이 아니라 데이터로 의사결정하는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            경영전문대학원(MBA) 입학시험 GMAT 문제집. Quantitative · Verbal · Data Insights 세 영역을
            분리해 연습한 뒤 실전 모의고사로 연결합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                GMAT COMPLETE · 300P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                290,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=GMAT&price=290000&label=GMAT%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=GMAT" className="btn-secondary px-7 text-sm font-medium">
                상품 문의
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 상세 설명 */}
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
          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            GMAT 핵심 영역을 유형별로 연습한 뒤 실전 모의고사로 연결할 수 있도록 구성한 종합 패키지입니다.
            최신 GMAT 구조(Quant · Verbal · Data Insights)를 기준으로 구성했습니다.
          </p>
        </Container>
      </section>

      {/* Quantitative Reasoning 100P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">QUANTITATIVE REASONING · 100P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            GMAT Quant를 개념별로 분리해 계산 속도와 정확도를 함께 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {quantTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Verbal Reasoning 100P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">VERBAL REASONING · 100P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            GMAT Verbal을 독해와 논증 구조 중심으로 구성합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {verbalTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            모든 문항은 공식 기출을 복제하지 않은 C-BRIDGE 자체 제작 오리지널 문제로 구성됩니다.
          </p>
        </Container>
      </section>

      {/* Data Insights 100P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">DATA INSIGHTS · 100P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            GMAT Focus Edition에 새로 포함된 Data Insights를 표·그래프·복수 자료 해석 중심으로 구성합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {dataInsightsTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Look Inside — 자체 제작 예시 3종 (Quant · Verbal · Data Insights) */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              {quantSample.subject.toUpperCase()} · {quantSample.topic} (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              {quantSample.prompt}
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: {quantSample.correctAnswer}
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — {quantSample.explanation}
            </p>
            {quantSample.formulaUsed && (
              <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                사용 공식 — {quantSample.formulaUsed}
              </p>
            )}
          </div>

          <div className="mt-6 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              VERBAL REASONING · CRITICAL REASONING (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
              &ldquo;한 회사의 신제품 매출이 전 분기 대비 감소했다. 이 회사는 신제품 출시가 예정보다 두 달
              늦어진 것이 매출 감소의 원인이라고 결론지었다.&rdquo;
            </p>

            <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: 다음 중 위 논증을 가장 약화하는 것은?
            </p>

            <div className="mt-4 space-y-2.5">
              {verbalSampleOptions.map((o) => (
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
              WHY — 이 논증은 &ldquo;출시 지연 → 매출 감소&rdquo;라는 인과관계를 전제합니다. 매출 감소의
              원인이 경쟁사 가격 인하 등 다른 요인일 수 있다면 이 인과관계 자체가 흔들리므로, B가 논증을
              가장 약화합니다.
            </p>
          </div>

          <div className="mt-6 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              DATA INSIGHTS · DATA SUFFICIENCY (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              정수 x, y에 대해 x &gt; 5인가?
              <br />
              (1) x &gt; y
              <br />
              (2) y &gt; 5
            </p>

            <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: 위 두 조건만으로 질문에 답할 수 있는지 판단하시오.
            </p>

            <div className="mt-4 space-y-2.5">
              {dataSufficiencyOptions.map((o) => (
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
              WHY — (1)만으로는 y의 값을 알 수 없어 x가 5보다 큰지 판단할 수 없습니다. (2)만으로는 x와 y의
              대소관계를 알 수 없어 역시 판단할 수 없습니다. 그러나 (1)과 (2)를 함께 사용하면 x &gt; y &gt;
              5이므로 x &gt; 5임을 확정할 수 있습니다.
            </p>
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 문제입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 상세 해설집 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">상세 해설집 · 별도 포함</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            본교재와 별도로 상세 해설집을 제공합니다. 정답 번호만 담지 않고 아래 구조로 해설을 제공합니다.
          </p>
          <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
            {explanationFields.map((f, i) => (
              <div key={f.label}>
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {f.label}
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--color-muted)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
            Quantitative Reasoning의 경우 다음을 함께 제공합니다
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {quantExplanationFields.map((f) => (
              <Chip key={f.label}>{f.label}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* 실전 모의고사 3회 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">MOCK TESTS</p>
          <p className="mt-4 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
            C-BRIDGE Original Mock Tests · Full-Length Practice Tests × 3
          </p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            GMAT 모의고사 실전 연습용 C-BRIDGE 자체 제작 모의고사 3회를 포함합니다. 실제 공식 기출문제는
            포함하지 않으며, 전 영역을 실전과 동일한 시간 배분으로 연습할 수 있도록 구성합니다.
          </p>
        </Container>
      </section>

      {/* 추가 문제 33제 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">BONUS 33 QUESTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            Quant과 Data Insights 중심의 추가 GMAT 문제 33제를 포함합니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            페이지 수를 채우는 부록이 아니라, 본교재 학습을 마친 뒤 추가로 반복 연습할 수 있도록 구성한
            복습용 세트입니다.
          </p>
        </Container>
      </section>

      {/* Final Review */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">FINAL REVIEW</p>
          <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-5" style={{ borderColor: "var(--color-border)" }}>
            {finalReviewItems.map((item, i) => (
              <div key={item}>
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 break-keep text-sm leading-relaxed" style={{ color: "var(--color-ink)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Study Plan */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">STUDY PLAN</p>
          <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
            {studyPlans.map((p) => (
              <div key={p.label} className="border p-6 min-[361px]:p-7" style={{ borderColor: "var(--color-border)" }}>
                <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-bronze)" }}>
                  {p.label}
                </p>
                <p className="mt-2 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
                  {p.title}
                </p>
                <p className="mt-2 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
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

      {/* 상품 구성 한눈에 보기 + PRICE + CTA */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE & PRICE</p>
          <p className="mt-3 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
            GMAT Complete 300P
          </p>

          <div className="mt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
            {overviewRows.map((row) => (
              <div key={row.label} className="grid grid-cols-[1fr_auto] gap-6 border-b py-3.5 text-sm" style={{ borderColor: "var(--color-border)" }}>
                <span style={{ color: "var(--color-muted)" }}>{row.label}</span>
                <span className="font-semibold" style={{ color: "var(--color-ink)" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                PRICE
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                290,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=GMAT&price=290000&label=GMAT%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=GMAT" className="btn-secondary px-7 text-sm font-medium">
                상품 문의
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Study Plan은 구매 폼에서 바로 선택하실 수 있습니다. 시험 예정일 · 현재 준비 수준 · 목표 점수 ·
            가장 어려운 영역 · 집중하고 싶은 영역(Quant / Verbal / Data Insights)은 메시지 란에 적어주시면
            발송 전 반영해 드립니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            GMAT Complete 300P는 C-BRIDGE가 자체 제작한 오리지널 GMAT 교재이며, 공식 기출문제를 복제하거나
            포함하지 않습니다.
          </p>
        </Container>
      </section>
    </>
  );
}
