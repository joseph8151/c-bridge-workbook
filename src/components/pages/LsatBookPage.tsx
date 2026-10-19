import Link from "next/link";
import Container from "@/components/Container";

const bodyLines = [
  "LSAT은 암기량이 아니라 논증 구조를 읽어내는 능력을 보는 시험입니다.",
  "Logical Reasoning, Reading Comprehension, Argumentative Writing을 각각 충분히 연습한 뒤 실전 모의고사로 연결하도록 구성합니다.",
  "유형별 문제 → 상세 해설 → 실전 모의 → Final Review 순서로 학습할 수 있도록 설계했습니다.",
];

const lrTypes = [
  "Argument Structure",
  "Main Conclusion",
  "Assumption",
  "Strengthen",
  "Weaken",
  "Flaw",
  "Inference",
  "Must Be True",
  "Principle",
  "Resolve the Paradox",
  "Method of Reasoning",
  "Parallel Reasoning",
  "Evaluate the Argument",
  "Complete the Argument",
];

const rcDomains = ["Law", "Humanities", "Social Science", "Natural Science", "Comparative Reading"];

const rcTypes = [
  "Main Idea",
  "Detail",
  "Inference",
  "Author's Attitude",
  "Function",
  "Structure",
  "Application",
  "Comparative Passage",
];

const writingIncludes = [
  "Prompt Analysis",
  "Position Selection",
  "Argument Planning",
  "Evidence Organization",
  "Counterargument Handling",
  "Timed Writing Practice",
  "Sample Structure",
  "Self-Review Checklist",
];

const lrOptions = [
  { key: "A", text: "시 의회가 예산안을 전부 승인할 것이다.", correct: false },
  { key: "B", text: "신규 공원 부지의 토양 오염도가 기준치 이하일 것이다.", correct: true },
  { key: "C", text: "주민 설문조사 참여율이 예년보다 높을 것이다.", correct: false },
  { key: "D", text: "인근 상권의 임대료가 하락할 것이다.", correct: false },
];

const explanationFields = [
  { label: "Correct Answer", desc: "정답 선택지" },
  { label: "Why It Is Correct", desc: "정답인 이유" },
  { label: "Why Other Choices Are Wrong", desc: "오답 선택지가 틀린 이유" },
  { label: "Core Reasoning Point", desc: "핵심 논증 포인트" },
  { label: "Common Trap", desc: "자주 빠지는 함정" },
  { label: "Difficulty Level", desc: "난이도" },
];

const rcExplanationFields = [
  { label: "Passage Structure", desc: "지문 구조" },
  { label: "Evidence Location", desc: "근거 위치" },
  { label: "Answer Logic", desc: "정답 논리" },
];

const finalReviewItems = [
  "Logical Reasoning 핵심 유형 체크",
  "자주 나오는 오답 패턴",
  "Reading Comprehension 접근 순서",
  "시간 관리 체크",
  "Writing 최종 체크리스트",
];

const studyPlans = [
  {
    label: "4 WEEK INTENSIVE",
    title: "4 Week Plan",
    desc: "시험 일정이 가까운 수험생을 위한 집중 플랜입니다.",
  },
  {
    label: "8 WEEK STANDARD",
    title: "8 Week Plan",
    desc: "기초부터 영역별로 충분히 연습하고 싶은 수험생을 위한 플랜입니다.",
  },
];

const recommendedFor = [
  "LSAT을 처음 준비하는 분",
  "Logical Reasoning을 집중적으로 연습하고 싶은 분",
  "Reading Comprehension에서 시간이 부족한 분",
  "영역별 문제와 실전 모의고사를 함께 원하는 분",
  "독학용 LSAT 문제집을 찾는 분",
  "시험 전 충분한 문제량이 필요한 분",
];

const overviewRows = [
  { label: "Logical Reasoning", value: "180P" },
  { label: "Reading Comprehension", value: "90P" },
  { label: "Argumentative Writing", value: "30P" },
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

export default function LsatBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL & GRADUATE EXAMS · LSAT COMPLETE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            LSAT은 암기가 아니라 논증 구조를 읽는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            법학전문대학원(Law School) 입학시험 LSAT 문제집. Logical Reasoning · Reading Comprehension ·
            Argumentative Writing 세 영역을 분리해 연습한 뒤 실전 모의고사로 연결합니다.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                LSAT COMPLETE · 300P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                290,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/pricing?test=LSAT&price=290000&label=LSAT%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase" className="btn-primary px-7 text-sm font-medium">
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=LSAT" className="btn-secondary px-7 text-sm font-medium">
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
            단순히 문제 수를 늘리는 방식이 아니라, LSAT 독학을 준비하는 분부터 170점대 이상 고득점을 목표로
            재응시를 준비하는 분까지 실전 감각을 기를 수 있도록 구성했습니다.
          </p>
        </Container>
      </section>

      {/* Logical Reasoning 180P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOGICAL REASONING · 180P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            LSAT Logical Reasoning을 가장 많은 비중으로 구성합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {lrTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            모든 문항은 공식 기출을 복제하지 않은 C-BRIDGE 자체 제작 오리지널 문제로 구성됩니다. 문제 수보다
            논리 구조와 오답 선택지의 이유를 구조적으로 학습할 수 있도록 상세 해설을 제공합니다.
          </p>
        </Container>
      </section>

      {/* Reading Comprehension 90P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">READING COMPREHENSION · 90P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            LSAT Reading Comprehension은 다양한 주제의 고난도 지문과 질문으로 구성합니다.
          </p>

          <p className="mt-6 text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
            지문 영역
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {rcDomains.map((d) => (
              <Chip key={d}>{d}</Chip>
            ))}
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
            문항 유형
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {rcTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            지문의 논리 구조와 문단 간 관계를 읽는 연습이 가능하도록 구성하며, 모든 지문은 C-BRIDGE가 자체
            제작한 오리지널 지문입니다.
          </p>
        </Container>
      </section>

      {/* Argumentative Writing 30P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">ARGUMENTATIVE WRITING · 30P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            LSAT Writing은 별도의 Writing 연습 영역으로 구성합니다.
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
            단순 템플릿 암기보다 주어진 관점과 자료를 바탕으로 논리를 구성하는 연습에 초점을 둡니다.
          </p>
        </Container>
      </section>

      {/* Look Inside — 자체 제작 예시 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              LOGICAL REASONING · STRENGTHEN (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
              &ldquo;시 당국은 폐공장 부지에 신규 공원을 조성하면 주민 건강이 개선될 것이라고 발표했다. 따라서
              시 의회는 이 계획에 예산을 배정해야 한다.&rdquo;
            </p>

            <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: 다음 중 위 논증을 가장 강화하는 것은?
            </p>

            <div className="mt-4 space-y-2.5">
              {lrOptions.map((o) => (
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
              WHY — 논증의 결론(예산 배정)은 공원 조성이 실제로 가능하다는 전제에 의존합니다. 토양 오염도가
              기준치 이하라는 사실은 이 전제를 뒷받침하므로 논증을 강화합니다. 나머지 선택지는 결론과 직접
              연결되지 않는 정보입니다.
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
            Reading Comprehension의 경우 다음을 함께 제공합니다
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {rcExplanationFields.map((f) => (
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
            LSAT 모의고사 실전 연습용 C-BRIDGE 자체 제작 모의고사 3회를 포함합니다. 실제 공식 기출문제는
            포함하지 않으며, 전 영역을 실전과 동일한 시간 배분으로 연습할 수 있도록 구성합니다.
          </p>
        </Container>
      </section>

      {/* 추가 문제 33제 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">BONUS 33 QUESTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            Logical Reasoning과 Reading Comprehension 중심의 추가 LSAT 문제 33제를 포함합니다.
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

      {/* 4주 / 8주 학습 플랜 */}
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
            LSAT Complete 300P
          </p>

          <div className="mt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
            {overviewRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto] gap-6 border-b py-3.5 text-sm"
                style={{ borderColor: "var(--color-border)" }}
              >
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
              <Link href="/pricing?test=LSAT&price=290000&label=LSAT%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase" className="btn-primary px-7 text-sm font-medium">
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=LSAT" className="btn-secondary px-7 text-sm font-medium">
                상품 문의
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Study Plan은 구매 폼에서 바로 선택하실 수 있습니다. 시험 예정일 · 현재 준비 수준 · 목표 점수 ·
            가장 어려운 영역 · 집중하고 싶은 영역(Logical Reasoning / Reading Comprehension / Writing)은
            메시지 란에 적어주시면 발송 전 반영해 드립니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            LSAT Complete 300P는 C-BRIDGE가 자체 제작한 오리지널 LSAT 교재이며, 공식 기출문제를 복제하거나
            포함하지 않습니다.
          </p>
        </Container>
      </section>
    </>
  );
}
