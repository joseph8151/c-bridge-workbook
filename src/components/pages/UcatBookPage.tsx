import Link from "next/link";
import Container from "@/components/Container";

const bodyLines = [
  "UCAT은 지식이 아니라 빠른 판단력과 상황 대응 능력을 보는 시험입니다.",
  "Verbal Reasoning, Decision Making, Quantitative Reasoning, Situational Judgement를 각각 충분히 연습한 뒤 실전 모의고사로 연결하도록 구성합니다.",
  "유형별 문제 → 상세 해설 → 실전 모의 → Final Review 순서로 학습할 수 있도록 설계했습니다.",
];

const verbalTypes = ["Reading Speed", "Main Idea", "Detail", "Inference", "True / False / Can't Tell"];
const decisionTypes = ["Logic", "Probability", "Syllogisms", "Data Interpretation", "Venn Diagrams", "Argument Evaluation"];
const quantTypes = ["Percentages", "Ratios", "Rates", "Tables", "Charts", "Word Problems"];
const sjtTypes = ["Professional Behaviour", "Ethics", "Communication", "Teamwork", "Patient Safety", "Appropriate Response"];

const sjtOptions = [
  { key: "A", text: "상황을 함께 파악하고 남은 시간 안에 분담할 수 있는 부분을 나눈다.", rank: "가장 적절함" },
  { key: "B", text: "지도교수에게 즉시 해당 팀원의 상황을 알린다.", rank: "덜 적절함" },
  { key: "C", text: "팀원에게 알아서 해결하라고 말하고 자신의 몫만 마무리한다.", rank: "부적절함" },
  { key: "D", text: "다른 팀원들에게 알리지 않고 혼자 조용히 대신 작업해준다.", rank: "가장 부적절함" },
];

const verbalOptions = [
  { key: "A", text: "참(True)", correct: false },
  { key: "B", text: "거짓(False)", correct: false },
  { key: "C", text: "알 수 없음(Can't Tell)", correct: true },
];

const decisionOptions = [
  { key: "A", text: "민수는 간호사이다.", correct: false },
  { key: "B", text: "민수는 간호사가 아니다.", correct: true },
  { key: "C", text: "모든 야간 근무자는 간호사이다.", correct: false },
];

const explanationFields = [
  { label: "Correct Answer", desc: "정답 선택지" },
  { label: "Why It Is Correct", desc: "정답인 이유" },
  { label: "Why Other Choices Are Wrong", desc: "오답 선택지가 틀린 이유" },
  { label: "Core Reasoning Point", desc: "핵심 판단 포인트" },
  { label: "Common Trap", desc: "자주 빠지는 함정" },
  { label: "Difficulty Level", desc: "난이도" },
];

const finalReviewItems = [
  "Verbal 핵심 유형 체크",
  "Decision Making 접근 순서",
  "Quantitative 공식 체크",
  "Situational Judgement 판단 기준",
  "시간 관리 체크",
];

const studyPlans = [
  { label: "4 WEEK INTENSIVE", title: "4 Week Plan", desc: "시험 일정이 가까운 수험생을 위한 집중 플랜입니다." },
  { label: "8 WEEK STANDARD", title: "8 Week Plan", desc: "기초부터 영역별로 충분히 연습하고 싶은 수험생을 위한 플랜입니다." },
];

const recommendedFor = [
  "UCAT을 처음 준비하는 분",
  "제한 시간 안에 빠르게 판단하는 연습이 필요한 분",
  "Situational Judgement 판단 기준이 익숙하지 않은 분",
  "영역별 문제와 실전 모의고사를 함께 원하는 분",
  "독학용 UCAT 문제집을 찾는 분",
  "시험 전 충분한 문제량이 필요한 분",
];

const overviewRows = [
  { label: "Verbal Reasoning", value: "75P" },
  { label: "Decision Making", value: "75P" },
  { label: "Quantitative Reasoning", value: "75P" },
  { label: "Situational Judgement", value: "75P" },
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

export default function UcatBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL & GRADUATE EXAMS · UCAT COMPLETE</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            UCAT은 지식이 아니라 빠른 판단력을 보는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            영국 의·치학계열 입학시험 UCAT 문제집. Verbal · Decision Making · Quantitative ·
            Situational Judgement 네 영역을 분리해 연습한 뒤 실전 모의고사로 연결합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                UCAT COMPLETE · 300P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                290,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=UCAT&price=290000&label=UCAT%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=UCAT" className="btn-secondary px-7 text-sm font-medium">
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
        </Container>
      </section>

      {/* Verbal Reasoning 75P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">VERBAL REASONING · 75P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            빠른 속도로 지문을 읽고 판단하는 연습을 합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {verbalTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Decision Making 75P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">DECISION MAKING · 75P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            논리·확률·자료 해석을 통합적으로 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {decisionTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            모든 문항은 공식 기출을 복제하지 않은 C-BRIDGE 자체 제작 오리지널 문제로 구성됩니다.
          </p>
        </Container>
      </section>

      {/* Quantitative Reasoning 75P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">QUANTITATIVE REASONING · 75P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            표·그래프 자료를 빠르게 계산하고 해석하는 연습을 합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {quantTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Situational Judgement 75P */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">SITUATIONAL JUDGEMENT · 75P</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            의료·전문직 현장의 상황 판단 능력을 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {sjtTypes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Look Inside — SJT 샘플 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              SITUATIONAL JUDGEMENT · APPROPRIATE RESPONSE (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              같은 조 팀원이 마감 전날까지 과제의 핵심 부분을 완료하지 못했다고 털어놓았다. 다음 대응을
              적절한 순서대로 평가하시오.
            </p>
            <div className="mt-4 space-y-2.5">
              {sjtOptions.map((o) => (
                <div
                  key={o.key}
                  className="flex items-start gap-3 border p-3 text-sm"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
                >
                  <span className="shrink-0 font-semibold">{o.key}.</span>
                  <span className="flex-1 break-keep">{o.text}</span>
                  <span className="shrink-0 text-xs font-bold tracking-[0.04em]" style={{ color: "var(--color-bronze)" }}>
                    {o.rank}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              WHY — 문제를 투명하게 공유하고 함께 해결책을 찾는 대응이 가장 적절하며, 혼자 몰래 대신
              해결하거나 책임을 회피하는 대응일수록 전문직 윤리 기준에서 부적절하다고 평가됩니다.
            </p>
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 문제입니다.
            </p>
          </div>

          <div className="mt-6 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              VERBAL REASONING · TRUE / FALSE / CAN&apos;T TELL (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              &ldquo;최근 한 도시에서 자전거 도로를 전체 도로의 10%까지 확대하는 정책을 시행한 이후, 해당
              구간의 교통사고 건수가 감소했다는 보고가 있었다. 다만 이 보고서는 다른 지역과의 비교
              자료나 사고 유형별 세부 통계를 포함하지 않았다.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              질문: &ldquo;자전거 도로 확대가 전반적인 교통안전 개선의 유일한 원인이다&rdquo;는 위 글만으로
              참인가, 거짓인가, 알 수 없는가?
            </p>
            <div className="mt-4 space-y-2.5">
              {verbalOptions.map((o) => (
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
              WHY — 지문은 자전거 도로 확대와 사고 감소 사이의 연관성만 언급할 뿐, 다른 요인을
              배제했다는 근거는 제시하지 않습니다. 따라서 &lsquo;유일한 원인&rsquo;이라는 단정은 지문만으로
              참·거짓을 판단할 수 없습니다.
            </p>
            <p className="mt-4 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 문제입니다.
            </p>
          </div>

          <div className="mt-6 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
              DECISION MAKING · LOGIC (자체 제작 예시)
            </p>
            <p className="mt-4 break-keep font-serif text-base leading-relaxed" style={{ color: "var(--color-ink)" }}>
              다음 전제가 모두 참일 때 반드시 참인 결론을 고르시오. 전제 1: 모든 간호사는 야간 근무를
              한다. 전제 2: 민수는 야간 근무를 하지 않는다.
            </p>
            <div className="mt-4 space-y-2.5">
              {decisionOptions.map((o) => (
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
              WHY — 전제 1은 &lsquo;간호사 → 야간 근무&rsquo;라는 조건 관계입니다. 민수가 야간 근무를
              하지 않는다는 것은 이 조건의 결과가 성립하지 않는다는 뜻이므로, 대우(야간 근무를 하지
              않음 → 간호사가 아님)에 따라 민수는 간호사가 아니라고 반드시 결론 내릴 수 있습니다.
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
            UCAT 모의고사 실전 연습용 C-BRIDGE 자체 제작 모의고사 3회를 포함합니다. 실제 공식 기출문제는
            포함하지 않으며, 전 영역을 실전과 동일한 시간 배분으로 연습할 수 있도록 구성합니다.
          </p>
        </Container>
      </section>

      {/* 추가 문제 33제 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">BONUS 33 QUESTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            Decision Making과 Quantitative Reasoning 중심의 추가 UCAT 문제 33제를 포함합니다.
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
            UCAT Complete 300P
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
                href="/pricing?test=UCAT&price=290000&label=UCAT%20Complete%20300P&plans=4%20Week%20Plan,8%20Week%20Plan#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                290,000원 바로 구매
              </Link>
              <Link href="/consultation?test=UCAT" className="btn-secondary px-7 text-sm font-medium">
                상품 문의
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Study Plan은 구매 폼에서 바로 선택하실 수 있습니다. 시험 예정일 · 현재 준비 수준 · 목표 점수 ·
            가장 어려운 영역 · 집중하고 싶은 영역(Verbal / Decision Making / Quantitative / SJT)은 메시지
            란에 적어주시면 발송 전 반영해 드립니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            UCAT Complete 300P는 C-BRIDGE가 자체 제작한 오리지널 UCAT 교재이며, 공식 기출문제를 복제하거나
            포함하지 않습니다.
          </p>
        </Container>
      </section>
    </>
  );
}
