import Container from "@/components/Container";
import TierSelector from "@/components/TierSelector";
import AddOnSection from "@/components/AddOnSection";
import { getTestBySlug } from "@/lib/tests";
import { tierMeta, tierOrder } from "@/lib/products";

const factRows = [
  { label: "시험 시간", value: "약 1시간" },
  { label: "응시 방식", value: "자택 온라인 응시" },
  { label: "평가 영역", value: "Speaking · Listening · Reading · Writing" },
  { label: "점수 체계", value: "Overall Score + 영역별 점수" },
  { label: "결과 제공", value: "응시 후 최대 48시간 이내" },
];

const evaluationAreas = ["Speaking", "Listening", "Reading", "Writing"];

const comparison = [
  {
    name: "PTE Express",
    points: ["미국 대학 지원 중심", "자택 온라인 응시", "약 1시간", "Reading · Writing · Listening · Speaking", "빠른 결과 제공"],
    highlight: true,
  },
  {
    name: "PTE Academic",
    points: ["여러 국가의 대학·유학·비자 등 폭넓은 활용", "별도의 시험 체계", "PTE Express와 다른 시험"],
    highlight: false,
  },
];

const preparationLines = [
  "PTE Express는 짧은 시험이지만, 네 영역을 모두 평가합니다.",
  "시험 시간이 짧다고 해서 준비 범위까지 좁은 것은 아닙니다.",
  "C-BRIDGE는 실제 시험에서 요구되는 영어 사용 방식에 맞춰 충분한 문제량을 제공합니다.",
  "한 번 이해하는 것보다 여러 형태의 문제를 반복해서 경험하는 데 초점을 둡니다.",
  "미국 대학 지원을 준비하면서 PTE Express를 선택한 수험생이 실제 시험 형식에 익숙해질 수 있도록 구성합니다.",
];

const recommendedFor = [
  "미국 대학 및 교육기관 지원을 준비하는 분",
  "PTE Express를 처음 준비하는 분",
  "자택 온라인 영어시험을 준비하는 분",
  "특정 영어 영역을 집중적으로 보완하려는 분",
  "네 영역 전체를 충분한 문제량으로 연습하고 싶은 분",
];

const lookInsideExamples = [
  {
    label: "SPEAKING · DESCRIBE IMAGE (자체 제작 예시)",
    prompt:
      "Look at the graph below. In 25 seconds, prepare to describe what the graph is showing. You will then have 40 seconds to speak about the graph.",
    detail:
      "1) 그래프의 종류와 주제를 한 문장으로 소개 → 2) 가장 두드러진 변화나 수치를 구체적으로 제시 → 3) 전체 경향을 한 문장으로 요약. 짧은 준비 시간 안에서도 구조를 미리 정해두면 침묵 없이 40초를 채울 수 있습니다.",
  },
  {
    label: "WRITING · SHORT ESSAY (자체 제작 예시)",
    prompt:
      "Some people believe online learning is as effective as traditional classroom learning. Do you agree or disagree? Support your answer with reasons and examples.",
    detail:
      "1) 서론에서 자신의 입장을 분명히 밝히고 → 2) 본론에서 구체적 근거를 예시와 함께 전개 → 3) 결론에서 입장을 한 문장으로 재정리. 양쪽 의견을 애매하게 나열하지 않고 하나의 입장을 끝까지 유지하는 것이 핵심입니다.",
  },
  {
    label: "READING · FILL IN THE BLANKS (자체 제작 예시)",
    prompt:
      "The company's new policy, _____ aimed at reducing costs, has instead increased employee turnover.",
    detail:
      "빈칸 앞뒤 문맥의 논리 관계(의도와 결과의 대조)를 먼저 파악한 뒤 빈칸에 들어갈 표현을 좁혀가는 훈련이 필요합니다. 단어 하나만 보고 고르기보다 문장 전체의 흐름을 먼저 읽는 것이 핵심입니다.",
  },
];

export default function PteExpressBookPage() {
  const test = getTestBySlug("pte-express")!;

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">STUDY ABROAD · PTE EXPRESS</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            PTE Express
          </h1>
          <p className="mt-2 text-sm font-semibold tracking-[0.02em]" style={{ color: "var(--color-bronze)" }}>
            Online English Test for U.S. Study
          </p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            미국 대학 지원을 위한 1시간 온라인 영어시험
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed md:text-base" style={{ color: "var(--color-muted)" }}>
            Reading, Writing, Listening, Speaking을 실제 시험 흐름에 맞춰 충분한 문제량으로 연습합니다.
          </p>
          <p className="mt-4 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            PTE Academic과는 목적과 시험 운영 방식이 다른 별도의 시험입니다.
          </p>
        </Container>
      </section>

      {/* PTE Express란? */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">WHAT IS PTE EXPRESS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            PTE Express는 미국 대학 및 교육기관 지원을 중심으로 활용되는 온라인 영어능력시험입니다.
            시험은 자택에서 온라인으로 응시할 수 있으며 약 1시간 동안 진행됩니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {evaluationAreas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
            {factRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 border-b py-4 sm:grid-cols-[160px_1fr] sm:gap-6"
                style={{ borderColor: "var(--color-border)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {row.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PTE Academic과의 차이 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PTE EXPRESS · PTE ACADEMIC</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            PTE Express와 PTE Academic은 같은 시험이 아닙니다. 목적과 활용처가 다른 별도의 시험으로
            이해하는 것이 정확합니다.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {comparison.map((c) => (
              <div
                key={c.name}
                className="border p-6 min-[361px]:p-7"
                style={{ borderColor: c.highlight ? "var(--color-bronze)" : "var(--color-border)" }}
              >
                <p className="font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
                  {c.name}
                </p>
                <ul className="mt-4 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 준비 방향 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">HOW WE PREPARE YOU</p>
          <div className="mt-6 max-w-2xl space-y-4">
            {preparationLines.map((line) => (
              <p key={line} className="break-keep text-sm leading-relaxed md:text-base" style={{ color: "var(--color-ink)" }}>
                {line}
              </p>
            ))}
          </div>
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
                  고득점 답변 구조 예시
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

      {/* 이런 분께 적합합니다 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">RECOMMENDED FOR</p>
          <h2 className="mt-3 font-serif text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            이런 분께 적합합니다
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

      {/* 문제집 구성 + 구매 — 기존 TierSelector 재사용 (가격은 중앙 데이터 사용) */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">WORKBOOK OPTIONS</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            {tierMeta[tierOrder[0]].label}는 한 영역 또는 취약 영역을 집중적으로, {tierMeta[tierOrder[1]].label}
            는 Reading · Writing · Listening · Speaking 전 영역을 충분한 문제량으로 준비할 수 있도록
            구성됩니다.
          </p>
          <div className="mt-10">
            <TierSelector test={test} />
          </div>
        </Container>
      </section>

      {/* 하단 고지 */}
      <section className="border-t py-10 md:py-12" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            PTE Express는 Pearson이 운영하는 공식 시험명이며, C-BRIDGE는 이 시험의 공식 제휴사가
            아닙니다. 모든 연습 문제와 자료는 C-BRIDGE가 자체 제작한 오리지널 콘텐츠이며, 공식 PTE
            Express 기출문제를 복제하거나 포함하지 않습니다.
          </p>
          <p className="mt-2 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Practice materials are independently developed by C-BRIDGE and are not reproduced from
            official PTE Express test materials.
          </p>
        </Container>
      </section>

      <AddOnSection testSlug="pte-express" />
    </>
  );
}
