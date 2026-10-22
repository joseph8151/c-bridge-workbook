import Link from "next/link";
import Container from "@/components/Container";
import type { ScienceReviewedQuestion } from "@/lib/scienceReviewSchema";

const bodyLines = [
  "MCAT은 단일 과목이 아니라 네 영역의 통합적 사고를 함께 보는 시험입니다.",
  "Chemical and Physical Foundations, CARS, Biological and Biochemical Foundations, Psychological·Social·Biological Foundations를 각각 분리해 연습한 뒤 실전형 문제로 연결합니다.",
  "유형별 문제 → 상세 해설 → 실전 모의 → Final Review 순서로 학습할 수 있도록 설계했습니다.",
];

const sections = [
  {
    label: "CHEMICAL & PHYSICAL FOUNDATIONS · 100P",
    title: "Chemical and Physical Foundations of Biological Systems",
    desc: "General Chemistry, Organic Chemistry, Physics, Biochemistry의 기초 원리를 생물학적 맥락에서 연습합니다.",
    topics: ["General Chemistry", "Organic Chemistry", "Physics", "Biochemistry"],
  },
  {
    label: "CARS · 100P",
    title: "Critical Analysis and Reasoning Skills",
    desc: "인문·사회과학 지문을 읽고 논증 구조와 저자 태도를 분석하는 연습입니다.",
    topics: ["Main Idea", "Inference", "Author's Tone", "Structure", "Application"],
  },
  {
    label: "BIOLOGICAL & BIOCHEMICAL FOUNDATIONS · 100P",
    title: "Biological and Biochemical Foundations of Living Systems",
    desc: "세포·분자생물학과 생화학 기초 개념을 통합적으로 연습합니다.",
    topics: ["Cell Biology", "Molecular Biology", "Biochemistry", "Genetics"],
  },
  {
    label: "PSYCHOLOGICAL, SOCIAL & BIOLOGICAL FOUNDATIONS · 100P",
    title: "Psychological, Social, and Biological Foundations of Behavior",
    desc: "행동의 심리·사회·생물학적 기초를 연습합니다.",
    topics: ["Psychology", "Sociology", "Biological Bases of Behavior"],
  },
];

// 과학 문항 — 추후 검수에 활용할 수 있도록 구조화된 필드로 보관합니다.
const scienceSample: ScienceReviewedQuestion = {
  subject: "Chemical and Physical Foundations (General Chemistry)",
  topic: "Solution Molarity",
  difficulty: "Easy",
  prompt: "0.50 M NaCl 수용액 200 mL를 만들려고 할 때, 필요한 NaCl의 몰수는?",
  correctAnswer: "0.10 mol",
  explanation:
    "몰농도(M) = 용질의 몰수 ÷ 용액의 부피(L). 0.50 mol/L × 0.200 L = 0.10 mol이므로, NaCl 0.10 mol이 필요합니다.",
  formulaUsed: "M = mol / L",
  sourceCheckRequired: true,
  validationStatus: "unverified",
};

const bioSample: ScienceReviewedQuestion = {
  subject: "Biological and Biochemical Foundations (Cell Biology)",
  topic: "Membrane Transport",
  difficulty: "Easy",
  prompt: "세포막을 통한 능동수송(active transport)의 가장 핵심적인 특징은 무엇인가?",
  correctAnswer: "ATP 에너지를 사용해 농도 기울기(저농도→고농도)를 거슬러 물질을 이동시킨다.",
  explanation:
    "확산이나 삼투 같은 수동수송은 농도 기울기를 따라 에너지 소모 없이 일어나지만, 능동수송은 ATP를 소비해 농도 기울기를 거스르는 방향으로 물질을 이동시킨다는 점이 핵심 차이입니다.",
  sourceCheckRequired: true,
  validationStatus: "unverified",
};

const carsOptions = [
  { key: "A", text: "새로운 기술의 도입은 항상 사회 전체에 이익을 가져다준다.", correct: false },
  { key: "B", text: "기술 도입의 편익은 균등하지 않을 수 있으며 그 분배를 함께 살펴야 한다.", correct: true },
  { key: "C", text: "기술 발전은 전통 산업 종사자에게 어떤 영향도 주지 않는다.", correct: false },
  { key: "D", text: "저자는 기술 도입 자체를 반대하고 있다.", correct: false },
];

const explanationFields = [
  { label: "Concept Tested", desc: "출제 개념" },
  { label: "Correct Answer", desc: "정답" },
  { label: "Why Correct", desc: "정답인 이유" },
  { label: "Why Other Choices Are Wrong", desc: "오답 선택지가 틀린 이유" },
  { label: "Key Science Concept", desc: "핵심 과학 개념" },
  { label: "Difficulty", desc: "난이도" },
];

const finalReviewItems = [
  "C/P 핵심 공식 체크",
  "CARS 접근 순서",
  "B/B 핵심 개념 체크",
  "P/S 핵심 개념 체크",
  "시간 관리 체크",
];

const studyPlans = [
  { label: "6 WEEK INTENSIVE", title: "6 Week Plan", desc: "시험 일정이 가까운 수험생을 위한 집중 플랜입니다." },
  { label: "12 WEEK STANDARD", title: "12 Week Plan", desc: "네 영역을 기초부터 충분히 연습하고 싶은 수험생을 위한 플랜입니다." },
];

const recommendedFor = [
  "MCAT을 처음 준비하는 분",
  "CARS 지문 독해 속도가 느린 분",
  "과학 네 영역을 통합적으로 연습하고 싶은 분",
  "영역별 문제와 실전형 문제를 함께 원하는 분",
  "독학용 MCAT 문제집을 찾는 분",
  "시험 전 충분한 문제량이 필요한 분",
];

const overviewRows = [
  { label: "Chemical & Physical Foundations", value: "100P" },
  { label: "CARS", value: "100P" },
  { label: "Biological & Biochemical Foundations", value: "100P" },
  { label: "Psychological, Social & Biological Foundations", value: "100P" },
  { label: "상세 해설집", value: "별도 포함" },
  { label: "Mock Tests", value: "3회" },
  { label: "Bonus Questions", value: "50제" },
  { label: "Final Review", value: "포함" },
  { label: "6 Week Plan", value: "포함" },
  { label: "12 Week Plan", value: "포함" },
];

export default function McatBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL & GRADUATE EXAMS · MCAT COMPLETE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            MCAT은 암기량이 아니라 네 영역을 통합하는 능력을 보는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            의학전문대학원(Medical School) 입학시험 MCAT 문제집. C/P · CARS · B/B · P/S 네 영역을 분리해
            연습한 뒤 실전형 문제로 연결합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                MCAT COMPLETE · 400P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                390,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=MCAT&price=390000&label=MCAT%20Complete%20400P&plans=6%20Week%20Plan,12%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                390,000원 바로 구매
              </Link>
              <Link href="/consultation?test=MCAT" className="btn-secondary px-7 text-sm font-medium">
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
            MCAT의 네 핵심 영역을 각각 분리해 연습한 뒤 실전형 문제로 연결하는 종합 패키지입니다. 모든
            과학 문항과 해설은 별도 검수 구조를 거쳐 관리됩니다.
          </p>
        </Container>
      </section>

      {/* 영역별 구성 (4개 섹션) */}
      {sections.map((s) => (
        <section key={s.label} className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
          <Container>
            <p className="eyebrow">{s.label}</p>
            <p className="mt-3 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
              {s.title}
            </p>
            <p className="mt-3 max-w-2xl break-keep text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              {s.desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.topics.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* Look Inside — 과학 샘플 2개(검수 구조 적용) + CARS 1개 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              {scienceSample.subject.toUpperCase()} · {scienceSample.topic} (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              {scienceSample.prompt}
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: {scienceSample.correctAnswer}
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — {scienceSample.explanation}
            </p>
            {scienceSample.formulaUsed && (
              <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                사용 공식 — {scienceSample.formulaUsed}
              </p>
            )}

            <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                {bioSample.subject.toUpperCase()} · {bioSample.topic} (자체 제작 예시)
              </p>
              <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
                {bioSample.prompt}
              </p>
              <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                정답: {bioSample.correctAnswer}
              </p>
              <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                WHY — {bioSample.explanation}
              </p>
            </div>

            <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                CARS (자체 제작 예시)
              </p>
              <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
                지문 요지: 최근 한 논평은 새로운 자동화 기술의 도입이 생산성을 높이는 동시에, 그 혜택이
                산업 전반에 고르게 분배되지 않을 수 있다는 점을 지적하며 전환 과정에서 소외되는 집단에 대한
                지원책이 함께 논의되어야 한다고 주장한다.
              </p>
              <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                질문: 위 지문에서 저자의 입장과 가장 일치하는 것은?
              </p>
              <div className="mt-4 space-y-2.5">
                {carsOptions.map((o) => (
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
                WHY — 저자는 기술 도입 자체를 반대하지 않으며, 혜택이 고르게 분배되지 않을 수 있다는
                우려와 지원책 논의의 필요성을 함께 제시하고 있으므로 B가 저자의 입장과 가장 일치합니다.
                극단적으로 찬성·반대를 단정하는 선택지는 지문의 균형 잡힌 태도와 맞지 않습니다.
              </p>
            </div>

            <p className="mt-6 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
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
            본교재와 별도로 상세 해설집을 제공합니다. 모든 수치·정의·과학 개념은 검증 가능한 구조로
            작성하며, 각 문항은 아래 구조로 해설을 제공합니다.
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
            MCAT 모의고사 실전 연습용 C-BRIDGE 자체 제작 모의고사 3회를 포함합니다. 실제 공식 기출문제는
            포함하지 않으며, 전 영역을 실전과 동일한 시간 배분으로 연습할 수 있도록 구성합니다.
          </p>
        </Container>
      </section>

      {/* 추가 문제 50제 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">BONUS 50 QUESTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            네 영역 전체를 아우르는 추가 MCAT 문제 50제를 포함합니다.
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
            MCAT Complete 400P
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
                390,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=MCAT&price=390000&label=MCAT%20Complete%20400P&plans=6%20Week%20Plan,12%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                390,000원 바로 구매
              </Link>
              <Link href="/consultation?test=MCAT" className="btn-secondary px-7 text-sm font-medium">
                상품 문의
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Study Plan은 구매 폼에서 바로 선택하실 수 있습니다. 시험 예정일 · 현재 준비 수준 · 목표 점수 ·
            가장 어려운 영역 · 집중하고 싶은 영역(C/P / CARS / B/B / P/S)은 메시지 란에 적어주시면 발송 전
            반영해 드립니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            MCAT Complete 400P는 C-BRIDGE가 자체 제작한 오리지널 MCAT 교재이며, 공식 기출문제를 복제하거나
            포함하지 않습니다. 모든 과학 문항은 생성 이후 별도 검수 절차를 거칩니다.
          </p>
        </Container>
      </section>
    </>
  );
}
