import Link from "next/link";
import Container from "@/components/Container";
import AddOnSection from "@/components/AddOnSection";
import type { ScienceReviewedQuestion } from "@/lib/scienceReviewSchema";

const bodyLines = [
  "OAT은 과학 지식과 물리·수리 계산을 함께 보는 시험입니다.",
  "Survey of Natural Sciences, Reading Comprehension, Physics, Quantitative Reasoning을 각각 분리해 연습한 뒤 실전형 문제로 연결합니다.",
  "유형별 문제 → 상세 해설 → 실전 모의 → Final Review 순서로 학습할 수 있도록 설계했습니다.",
];

const naturalSciencesTopics = ["Biology", "General Chemistry", "Organic Chemistry"];
const physicsTopics = ["Mechanics", "Fluids", "Thermodynamics", "Electricity", "Magnetism", "Waves", "Optics"];

const physicsSample: ScienceReviewedQuestion = {
  subject: "Physics",
  topic: "Electricity (Ohm's Law)",
  difficulty: "Easy",
  prompt: "저항이 10 Ω인 회로에 전류 2 A가 흐를 때, 이 회로에 걸리는 전압은?",
  correctAnswer: "20 V",
  explanation: "옴의 법칙 V = IR에 따라 전압 = 전류 × 저항 = 2 A × 10 Ω = 20 V입니다.",
  formulaUsed: "V = IR",
  sourceCheckRequired: true,
  validationStatus: "unverified",
};

const explanationFields = [
  { label: "Concept Tested", desc: "출제 개념" },
  { label: "Correct Answer", desc: "정답" },
  { label: "Why Correct", desc: "정답인 이유" },
  { label: "Why Other Choices Are Wrong", desc: "오답 선택지가 틀린 이유" },
  { label: "Key Science Concept", desc: "핵심 과학 개념" },
  { label: "Difficulty", desc: "난이도" },
];

const finalReviewItems = [
  "Natural Sciences 핵심 개념 체크",
  "Physics 공식 체크리스트",
  "Reading Comprehension 접근 순서",
  "Quantitative 계산 유형 체크",
  "시간 관리 체크",
];

const studyPlans = [
  { label: "6 WEEK INTENSIVE", title: "6 Week Plan", desc: "시험 일정이 가까운 수험생을 위한 집중 플랜입니다." },
  { label: "10 WEEK STANDARD", title: "10 Week Plan", desc: "기초부터 영역별로 충분히 연습하고 싶은 수험생을 위한 플랜입니다." },
];

const recommendedFor = [
  "OAT을 처음 준비하는 분",
  "Physics 공식 적용이 익숙하지 않은 분",
  "Natural Sciences 세 과목을 통합적으로 연습하고 싶은 분",
  "영역별 문제와 실전형 문제를 함께 원하는 분",
  "독학용 OAT 문제집을 찾는 분",
  "시험 전 충분한 문제량이 필요한 분",
];

const overviewRows = [
  { label: "Survey of Natural Sciences", value: "120P" },
  { label: "Reading Comprehension", value: "60P" },
  { label: "Physics", value: "90P" },
  { label: "Quantitative Reasoning", value: "80P" },
  { label: "상세 해설집", value: "별도 포함" },
  { label: "Mock Tests", value: "3회" },
  { label: "Bonus Questions", value: "40제" },
  { label: "Final Review", value: "포함" },
  { label: "6 Week Plan", value: "포함" },
  { label: "10 Week Plan", value: "포함" },
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

export default function OatBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL & GRADUATE EXAMS · OAT COMPLETE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            OAT은 과학 지식과 물리·수리 계산을 함께 보는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            검안학전문대학원(Optometry School) 입학시험 OAT 문제집. Natural Sciences · Reading · Physics ·
            Quantitative 네 영역을 분리해 연습한 뒤 실전형 문제로 연결합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                OAT COMPLETE · 350P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                340,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=OAT" className="btn-primary px-7 text-sm font-medium">
                상품 문의
              </Link>
              <Link
                href="/pricing?test=OAT&price=340000&label=OAT%20Complete%20350P&plans=6%20Week%20Plan,10%20Week%20Plan#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                340,000원 바로 구매
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
        </Container>
      </section>

      {/* Survey of Natural Sciences 120P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">SURVEY OF NATURAL SCIENCES · 120P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            생물·화학 기초 개념을 과목별로 분리해 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {naturalSciencesTopics.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Reading Comprehension 60P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">READING COMPREHENSION · 60P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            과학 지문을 중심으로 독해 속도와 정확도를 함께 연습합니다.
          </p>
        </Container>
      </section>

      {/* Physics 90P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PHYSICS · 90P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            역학부터 전자기학까지 물리 전 영역을 개념별로 분리해 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {physicsTopics.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Quantitative Reasoning 80P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">QUANTITATIVE REASONING · 80P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            대수·기하·응용 계산 문제를 유형별로 연습합니다.
          </p>
        </Container>
      </section>

      {/* Look Inside — Physics 샘플 (과학 검수 구조 적용) */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              {physicsSample.subject.toUpperCase()} · {physicsSample.topic} (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              {physicsSample.prompt}
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: {physicsSample.correctAnswer}
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — {physicsSample.explanation}
            </p>
            {physicsSample.formulaUsed && (
              <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                사용 공식 — {physicsSample.formulaUsed}
              </p>
            )}
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 문제입니다.
            </p>
          </div>

          <div className="mt-6 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              GENERAL CHEMISTRY · pH SCALE (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              pH가 3인 용액은 pH가 5인 용액보다 수소 이온(H⁺) 농도가 몇 배 높은가?
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: 100배
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — pH는 수소 이온 농도의 로그 역수 척도이므로, pH가 1 낮아질 때마다 농도는 10배
              증가합니다. pH 3과 5는 2만큼 차이가 나므로 농도 차이는 10² = 100배입니다.
            </p>
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 문제입니다.
            </p>
          </div>

          <div className="mt-6 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              READING COMPREHENSION · DETAIL (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              다음 글을 읽고 질문에 답하시오. &ldquo;사람은 나이가 들면서 수정체의 탄력이 감소해 가까운
              물체에 초점을 맞추는 조절력이 점차 떨어진다. 이 현상을 노안이라고 하며, 근시·원시와 달리
              나이에 따라 자연스럽게 나타난다.&rdquo; 질문: 윗글에 따르면 노안이 나타나는 주된 원인은
              무엇인가?
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: 수정체의 탄력(조절력) 감소
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — 지문은 노안의 원인을 수정체 탄력 저하로 명시하고 있으며, 근시·원시와는 다른 원인으로
              구분해 설명합니다. 세부 정보를 묻는 문제는 지문에 명시된 표현을 정확히 찾아 확인하는 것이
              핵심입니다.
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
          <p className="mt-4 font-serif text-xl font-semibold tracking-[-0.01em]" style={{ color: "var(--color-ink)" }}>
            C-BRIDGE Original Mock Tests · Full-Length Practice Tests × 3
          </p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            OAT 모의고사 실전 연습용 C-BRIDGE 자체 제작 모의고사 3회를 포함합니다. 실제 공식 기출문제는
            포함하지 않으며, 전 영역을 실전과 동일한 시간 배분으로 연습할 수 있도록 구성합니다.
          </p>
        </Container>
      </section>

      {/* 추가 문제 40제 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">BONUS 40 QUESTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            Natural Sciences와 Physics 중심의 추가 OAT 문제 40제를 포함합니다.
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
                <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-bronze)" }}>
                  {p.label}
                </p>
                <p className="mt-2 font-serif text-xl font-semibold tracking-[-0.01em]" style={{ color: "var(--color-ink)" }}>
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
          <p className="mt-3 font-serif text-xl font-semibold tracking-[-0.01em]" style={{ color: "var(--color-ink)" }}>
            OAT Complete 350P
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
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                PRICE
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                340,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=OAT" className="btn-primary px-7 text-sm font-medium">
                상품 문의
              </Link>
              <Link
                href="/pricing?test=OAT&price=340000&label=OAT%20Complete%20350P&plans=6%20Week%20Plan,10%20Week%20Plan#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                340,000원 바로 구매
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Study Plan은 구매 폼에서 바로 선택하실 수 있습니다. 시험 예정일 · 현재 준비 수준 · 목표 점수 ·
            가장 어려운 영역 · 집중하고 싶은 영역(Natural Sciences / Reading / Physics / Quantitative)은
            메시지 란에 적어주시면 발송 전 반영해 드립니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            OAT Complete 350P는 C-BRIDGE가 자체 제작한 오리지널 OAT 교재이며, 공식 기출문제를 복제하거나
            포함하지 않습니다. 모든 과학 문항은 생성 이후 별도 검수 절차를 거칩니다.
          </p>
        </Container>
      </section>

      <AddOnSection testSlug="oat" />
    </>
  );
}
