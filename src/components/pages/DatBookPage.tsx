import Link from "next/link";
import Container from "@/components/Container";
import AddOnSection from "@/components/AddOnSection";

const bodyLines = [
  "DAT은 과학 지식과 함께 공간지각 능력(PAT)을 별도로 측정하는 시험입니다.",
  "Survey of Natural Sciences, Perceptual Ability Test, Reading Comprehension, Quantitative Reasoning을 각각 분리해 연습한 뒤 실전형 문제로 연결합니다.",
  "유형별 문제 → 상세 해설 → 실전 모의 → Final Review 순서로 학습할 수 있도록 설계했습니다.",
];

const naturalSciencesTopics = ["Biology", "General Chemistry", "Organic Chemistry"];

const patTypes = ["Keyholes", "Top-Front-End", "Angle Ranking", "Hole Punching", "Cube Counting", "Pattern Folding"];

// Angle Ranking 예시 — 각도는 좌표로 직접 계산해 정확성을 보장합니다 (정답: B < D < A < C).
const angleExamples = [
  { label: "A", x2: 59.55, y2: 35.84 },
  { label: "B", x2: 97.63, y2: 62.5 },
  { label: "C", x2: 31.19, y2: 38.32 },
  { label: "D", x2: 81.55, y2: 44.94 },
];

function AngleDiagram({ label, x2, y2 }: { label: string; x2: number; y2: number }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg viewBox="0 0 120 100" width="90" height="75">
        <line x1="50" y1="90" x2="105" y2="90" stroke="var(--color-ink)" strokeWidth="2" />
        <line x1="50" y1="90" x2={x2} y2={y2} stroke="var(--color-ink)" strokeWidth="2" />
        <circle cx="50" cy="90" r="2.5" fill="var(--color-bronze)" />
      </svg>
      <span className="text-xs font-bold" style={{ color: "var(--color-ink)" }}>
        {label}
      </span>
    </div>
  );
}

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
  "PAT 유형별 접근법",
  "Reading Comprehension 접근 순서",
  "Quantitative 공식 체크",
  "시간 관리 체크",
];

const studyPlans = [
  { label: "6 WEEK INTENSIVE", title: "6 Week Plan", desc: "시험 일정이 가까운 수험생을 위한 집중 플랜입니다." },
  { label: "10 WEEK STANDARD", title: "10 Week Plan", desc: "기초부터 영역별로 충분히 연습하고 싶은 수험생을 위한 플랜입니다." },
];

const recommendedFor = [
  "DAT을 처음 준비하는 분",
  "Perceptual Ability Test(PAT) 공간지각 문제가 익숙하지 않은 분",
  "Natural Sciences 세 과목을 통합적으로 연습하고 싶은 분",
  "영역별 문제와 실전형 문제를 함께 원하는 분",
  "독학용 DAT 문제집을 찾는 분",
  "시험 전 충분한 문제량이 필요한 분",
];

const overviewRows = [
  { label: "Survey of Natural Sciences", value: "140P" },
  { label: "Perceptual Ability Test", value: "90P" },
  { label: "Reading Comprehension", value: "60P" },
  { label: "Quantitative Reasoning", value: "60P" },
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

export default function DatBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL & GRADUATE EXAMS · DAT COMPLETE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            DAT은 과학 지식과 공간지각 능력을 함께 보는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            치의학전문대학원(Dental School) 입학시험 DAT 문제집. Natural Sciences · PAT · Reading ·
            Quantitative 네 영역을 분리해 연습한 뒤 실전형 문제로 연결합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                DAT COMPLETE · 350P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                340,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=DAT" className="btn-primary px-7 text-sm font-medium">
                상품 문의
              </Link>
              <Link
                href="/pricing?test=DAT&price=340000&label=DAT%20Complete%20350P&plans=6%20Week%20Plan,10%20Week%20Plan#direct-purchase"
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

      {/* Survey of Natural Sciences 140P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">SURVEY OF NATURAL SCIENCES · 140P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            생물·화학 기초 개념을 과목별로 분리해 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {naturalSciencesTopics.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              BIOLOGY · CELL STRUCTURE (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              성숙한 사람의 적혈구(RBC)에는 핵이 없습니다. 이것이 산소 운반 기능에 유리한 이유로 가장
              적절한 것은 무엇인가?
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: 핵이 차지하던 공간에 헤모글로빈을 더 많이 채울 수 있기 때문이다
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — 적혈구는 성숙 과정에서 핵을 제거해 세포 내부 공간을 넓히고, 그 공간에 산소와
              결합하는 헤모글로빈을 더 많이 채워 산소 운반 효율을 높입니다.
            </p>
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 문제입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* Perceptual Ability Test 90P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PERCEPTUAL ABILITY TEST · 90P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            PAT 시각 문제는 벡터(SVG) 기반 도형으로 제작해 인쇄와 확대에도 선이 흐려지지 않도록
            구성합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {patTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              PAT · ANGLE RANKING (자체 제작 예시 · 벡터 도형)
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-6">
              {angleExamples.map((a) => (
                <AngleDiagram key={a.label} {...a} />
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: 네 각을 작은 각도부터 순서대로 나열하시오.
            </p>
            <p className="mt-2 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: B &lt; D &lt; A &lt; C
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — 각 도형은 좌표 계산으로 정확히 생성된 각도(B 30˚ · D 55˚ · A 80˚ · C 110˚)이며, 육안
              비교가 아니라 상대적인 벌어짐 정도를 기준으로 순서를 판단합니다.
            </p>
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 벡터 기반 오리지널 도형입니다.
            </p>
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

      {/* Quantitative Reasoning 60P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">QUANTITATIVE REASONING · 60P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            대수·기하·응용 계산 문제를 유형별로 연습합니다. 모든 수치와 공식은 C-BRIDGE 자체 제작 문제이며,
            별도 검수 구조를 거쳐 관리됩니다.
          </p>

          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              QUANTITATIVE REASONING · PERCENT CHANGE (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              어떤 치과의 하루 평균 환자 수가 지난달보다 20% 증가하여 이번 달 하루 48명이 되었다. 지난달
              하루 평균 환자 수는?
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              정답: 40명
            </p>
            <p className="mt-3 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — 이번 달 수치는 지난달의 120%에 해당하므로 48 ÷ 1.2 = 40입니다. 증가율 문제는 기준이
              &lsquo;이번 달&rsquo;이 아니라 &lsquo;지난달(원래 값)&rsquo;이라는 점에 주의해야 합니다.
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
            DAT 모의고사 실전 연습용 C-BRIDGE 자체 제작 모의고사 3회를 포함합니다. 실제 공식 기출문제는
            포함하지 않으며, 전 영역을 실전과 동일한 시간 배분으로 연습할 수 있도록 구성합니다.
          </p>
        </Container>
      </section>

      {/* 추가 문제 40제 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">BONUS 40 QUESTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            Natural Sciences와 PAT 중심의 추가 DAT 문제 40제를 포함합니다.
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
            DAT Complete 350P
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
              <Link href="/consultation?test=DAT" className="btn-primary px-7 text-sm font-medium">
                상품 문의
              </Link>
              <Link
                href="/pricing?test=DAT&price=340000&label=DAT%20Complete%20350P&plans=6%20Week%20Plan,10%20Week%20Plan#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                340,000원 바로 구매
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Study Plan은 구매 폼에서 바로 선택하실 수 있습니다. 시험 예정일 · 현재 준비 수준 · 목표 점수 ·
            가장 어려운 영역 · 집중하고 싶은 영역(Natural Sciences / PAT / Reading / Quantitative)은 메시지
            란에 적어주시면 발송 전 반영해 드립니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            DAT Complete 350P는 C-BRIDGE가 자체 제작한 오리지널 DAT 교재이며, 공식 기출문제를 복제하거나
            포함하지 않습니다. 모든 과학 문항은 생성 이후 별도 검수 절차를 거칩니다.
          </p>
        </Container>
      </section>

      <AddOnSection testSlug="dat" />
    </>
  );
}
