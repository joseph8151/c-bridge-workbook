import Link from "next/link";
import Container from "@/components/Container";
import type { ScienceReviewedQuestion } from "@/lib/scienceReviewSchema";

const bodyLines = [
  "GRE는 어휘량이 아니라 글의 논리와 숫자 감각을 함께 보는 시험입니다.",
  "Verbal Reasoning, Quantitative Reasoning, Analytical Writing을 각각 충분히 연습한 뒤 실전 모의고사로 연결하도록 구성합니다.",
  "유형별 문제 → 상세 해설 → 실전 모의 → Final Review 순서로 학습할 수 있도록 설계했습니다.",
];

const verbalTypes = [
  "Text Completion",
  "Sentence Equivalence",
  "Reading Comprehension",
  "Argument Analysis",
  "Vocabulary in Context",
  "Inference",
];

const quantTypes = [
  "Arithmetic",
  "Algebra",
  "Geometry",
  "Data Analysis",
  "Quantitative Comparison",
  "Problem Solving",
];

const writingIncludes = [
  "Issue Analysis",
  "Argument Structure",
  "Essay Planning",
  "Timed Writing",
  "Sample Structure",
  "Review Checklist",
];

// Quant 샘플 문항 — 추후 과학·수학 검수에 활용할 수 있도록 구조화된 필드로 보관합니다.
const quantSample: ScienceReviewedQuestion = {
  subject: "Quantitative Reasoning",
  topic: "Algebra · Quantitative Comparison",
  difficulty: "Medium",
  prompt: "x > 0일 때, Quantity A: x² + 1, Quantity B: 2x 중 어느 쪽이 더 큰가?",
  correctAnswer: "두 수량이 같다고 단정할 수 없음 (x=1일 때만 같음, 그 외에는 A가 큼)",
  explanation:
    "x² + 1 - 2x = (x-1)² ≥ 0이므로 항상 A ≥ B이며, x=1일 때만 두 값이 같습니다. x>0 범위 전체에서 '항상 같다'고 단정할 수 없으므로, 주어진 정보만으로는 대소 관계를 하나로 확정할 수 없습니다.",
  formulaUsed: "(x-1)² = x² - 2x + 1",
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

const finalReviewItems = [
  "Verbal 핵심 유형 체크",
  "Quant 공식 체크리스트",
  "Analytical Writing 템플릿 점검",
  "시간 관리 체크",
  "자주 나오는 오답 패턴",
];

const studyPlans = [
  { label: "4 WEEK INTENSIVE", title: "4 Week Plan", desc: "시험 일정이 가까운 수험생을 위한 집중 플랜입니다." },
  { label: "8 WEEK STANDARD", title: "8 Week Plan", desc: "기초부터 영역별로 충분히 연습하고 싶은 수험생을 위한 플랜입니다." },
];

const recommendedFor = [
  "GRE를 처음 준비하는 분",
  "Verbal Reasoning 어휘·독해를 집중적으로 연습하고 싶은 분",
  "Quantitative Reasoning 계산 속도가 느린 분",
  "Analytical Writing 구조를 잡기 어려운 분",
  "독학용 GRE 문제집을 찾는 분",
  "시험 전 충분한 문제량이 필요한 분",
];

const overviewRows = [
  { label: "Verbal Reasoning", value: "120P" },
  { label: "Quantitative Reasoning", value: "120P" },
  { label: "Analytical Writing", value: "60P" },
  { label: "Detailed Explanations", value: "별도 포함" },
  { label: "Mock Tests", value: "10회" },
  { label: "Bonus Questions", value: "100제" },
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

export default function GreBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL & GRADUATE EXAMS · GRE COMPLETE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            GRE는 어휘량이 아니라 글의 논리를 읽는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            대학원 진학 공인 입학시험 GRE 문제집. Verbal · Quantitative · Analytical Writing 세 영역을
            분리해 연습한 뒤 실전 모의고사로 연결합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                GRE COMPLETE · 300P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                290,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=GRE&price=290000&label=GRE%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=GRE" className="btn-secondary px-7 text-sm font-medium">
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
            GRE 핵심 영역을 유형별로 연습한 뒤 실전 모의고사로 연결할 수 있도록 구성한 종합 패키지입니다.
            단순히 문제 수를 늘리는 방식이 아니라, GRE 독학을 준비하는 분부터 고득점을 목표로 재응시를
            준비하는 분까지 실전 감각을 기를 수 있도록 구성했습니다.
          </p>
        </Container>
      </section>

      {/* Verbal Reasoning 120P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">VERBAL REASONING · 120P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            GRE Verbal을 문맥·논증·어휘 세 축으로 구성합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {verbalTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            모든 문항은 공식 기출을 복제하지 않은 C-BRIDGE 자체 제작 오리지널 문제로 구성됩니다. 어휘
            암기보다 문맥 속에서 의미를 추론하는 연습에 초점을 둡니다.
          </p>
        </Container>
      </section>

      {/* Quantitative Reasoning 120P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">QUANTITATIVE REASONING · 120P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            GRE Quant을 개념별로 분리해 계산 속도와 정확도를 함께 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {quantTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            모든 수치와 공식은 C-BRIDGE 자체 제작 문제이며, 별도 검수 구조를 거쳐 관리됩니다.
          </p>
        </Container>
      </section>

      {/* Analytical Writing 60P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">ANALYTICAL WRITING · 60P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            GRE Writing은 별도의 Writing 연습 영역으로 구성합니다.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {writingIncludes.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            템플릿 암기보다 주어진 Issue·Argument를 바탕으로 논리를 구성하는 연습에 초점을 둡니다.
          </p>
        </Container>
      </section>

      {/* Look Inside — Quant 샘플 (과학·수학 검수 구조 적용) */}
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
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 문제입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 상세 해설집 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">DETAILED EXPLANATIONS · 별도 포함</p>
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

      {/* 실전 모의고사 10회 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">MOCK TESTS</p>
          <p className="mt-4 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
            C-BRIDGE Original Mock Tests · Full-Length Practice Tests × 10
          </p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            GRE 모의고사 실전 연습용 C-BRIDGE 자체 제작 모의고사 10회를 포함합니다. 실제 공식 기출문제는
            포함하지 않으며, 전 영역을 실전과 동일한 시간 배분으로 연습할 수 있도록 구성합니다.
          </p>
        </Container>
      </section>

      {/* 추가 문제 100제 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">BONUS 100 QUESTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            Verbal과 Quantitative 중심의 추가 GRE 문제 100제를 포함합니다.
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
            GRE Complete 300P
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
                href="/pricing?test=GRE&price=290000&label=GRE%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=GRE" className="btn-secondary px-7 text-sm font-medium">
                상품 문의
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Study Plan은 구매 폼에서 바로 선택하실 수 있습니다. 시험 예정일 · 현재 준비 수준 · 목표 점수 ·
            가장 어려운 영역 · 집중하고 싶은 영역(Verbal / Quant / Writing)은 메시지 란에 적어주시면 발송
            전 반영해 드립니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            GRE Complete 300P는 C-BRIDGE가 자체 제작한 오리지널 GRE 교재이며, 공식 기출문제를 복제하거나
            포함하지 않습니다.
          </p>
        </Container>
      </section>
    </>
  );
}
