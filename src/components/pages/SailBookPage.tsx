import Link from "next/link";
import Container from "@/components/Container";
import AddOnSection from "@/components/AddOnSection";

// SAIL(Samsung AI Language Test)은 사내 평가 성격상 외부 공개 정보가 제한적입니다.
// 이 페이지 전체는 "실제 기출 복원"이 아니라 공개된 준비 정보와 영어 Speaking 평가
// 일반 특성을 바탕으로 한 C-BRIDGE 자체 제작 Self-Study 자료임을 전제로 작성합니다.
// 공식 삼성 문항·채점 기준·삼성과의 제휴를 암시하는 표현은 쓰지 않습니다.

const includes = [
  "Speaking Practice Book 100P",
  "예상 Speaking Prompt 100개",
  "답변 구조 가이드",
  "Sample Responses",
  "상황별 표현 자료",
  "실전 모의평가 5회",
  "4주 학습 플랜",
  "Final Review",
  "오답·답변 개선 기록표",
  "평생 소장",
];

const recommendedFor = [
  "SAIL 시험을 처음 준비하는 경우",
  "삼성 사내 영어평가를 준비하는 경우",
  "영어 Speaking 평가에 대비해야 하는 경우",
  "업무 상황을 영어로 설명하는 연습이 필요한 경우",
  "의견과 근거를 짧은 시간 안에 말하는 연습이 필요한 경우",
];

const practiceCategories = [
  {
    en: "EXPERIENCE DESCRIPTION",
    kr: "경험 설명형",
    examples: ["어려웠던 업무 경험", "최근 해결했던 문제", "기억에 남는 프로젝트"],
    framework: ["Situation", "Action", "Result", "Reflection"],
  },
  {
    en: "SITUATIONAL RESPONSE",
    kr: "상황 대응형",
    examples: ["업무상 문제가 발생한 상황", "동료와 의견이 다른 상황", "일정 변경이나 긴급 상황 대응"],
    framework: ["Situation", "Action", "Result", "Reflection"],
  },
  {
    en: "OPINION",
    kr: "의견 제시형",
    examples: ["재택근무", "업무 효율", "협업 방식", "기술 변화"],
    framework: ["Position", "Reason", "Example", "Conclusion"],
  },
  {
    en: "COMPARISON",
    kr: "비교형",
    examples: ["과거와 현재 업무환경", "온라인과 오프라인 업무", "개인 업무와 팀 업무"],
    framework: ["Point A", "Point B", "Difference", "Opinion"],
  },
  {
    en: "EXTENDED RESPONSE",
    kr: "심화 답변형",
    examples: ["사회·업무 관련 주제에 대한 입장, 근거, 예시, 결론을 갖춘 확장된 답변"],
    framework: ["Position", "Reason", "Example", "Conclusion"],
  },
];

const selfStudySteps = ["질문 이해", "답변 구조 잡기", "Speaking", "답변 다시 확인", "표현 수정", "같은 유형 재연습", "Mock"];

function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`break-keep text-xs leading-relaxed ${className}`} style={{ color: "var(--color-muted)" }}>
      고지: SAIL은 사내 평가 성격으로 인해 세부 시험 정보가 제한적으로 공개되어 있습니다. C-BRIDGE의
      SAIL 자료는 공개된 정보와 일반적인 영어 Speaking 평가 요소를 바탕으로 제작한 독자 연습자료이며,
      실제 시험 문제를 복원하거나 공식 시험문항을 제공하는 자료가 아닙니다.
    </p>
  );
}

export default function SailBookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">EMPLOYMENT · SAIL 100P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            SAIL은 삼성그룹 임직원의 영어 말하기 역량 평가에 활용되는 것으로 알려진 사내 영어평가입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            공개된 시험 정보가 제한적이기 때문에 C-BRIDGE는 실제 기출 복원이 아니라, 영어 말하기
            평가에서 요구될 수 있는 경험 설명, 상황 대응, 의견 제시, 비교·논증 등의 과제를 중심으로
            독자 연습자료를 제공합니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            AI 기반 Speaking 평가 환경을 고려해 발화의 명확성, 문장 구성, 논리적인 전개 등을 연습할 수
            있도록 구성합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                SAIL Speaking Intensive · 100P
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=SAIL&tier=100P" className="btn-primary px-7 text-sm font-medium">
                SAIL 100P 시작하기
              </Link>
              <Link
                href="/consultation?test=SAIL"
                className="inline-flex min-h-[48px] items-center justify-center border px-7 text-sm font-medium tracking-[0.06em]"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                구성 상담하기
              </Link>
            </div>
          </div>

          <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <Disclaimer />
          </div>
        </Container>
      </section>

      {/* 포함 구성 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">WHAT&apos;S INCLUDED</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            기업 영어 Speaking 평가에 필요한 질문 대응력과 논리적인 답변 구성을 집중적으로 연습하는
            100페이지 Self-Study 구성입니다.
          </p>
          <p
            className="mt-3 inline-block border px-3 py-1.5 text-xs font-semibold"
            style={{ borderColor: "var(--color-border)", color: "var(--color-bronze)" }}
          >
            100P · 100 Speaking Prompts · 5 Mock Tests
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

      {/* 연습 영역 (Practice Categories) */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PRACTICE CATEGORIES</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            영어 Speaking 평가에서 공통적으로 요구되는 과제 유형을 중심으로 연습 영역을 나눴습니다.
          </p>
          <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
            {practiceCategories.map((c) => (
              <div key={c.en} className="border p-6" style={{ borderColor: "var(--color-border)" }}>
                <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-bronze)" }}>
                  {c.en}
                </p>
                <p className="mt-1 font-serif text-lg font-semibold" style={{ color: "var(--color-ink)" }}>
                  {c.kr}
                </p>
                <ul className="mt-3 space-y-1">
                  {c.examples.map((ex) => (
                    <li key={ex} className="flex gap-2 text-sm" style={{ color: "var(--color-muted)" }}>
                      <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-border)" }} />
                      {ex}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-semibold" style={{ color: "var(--color-ink)" }}>
                  {c.framework.map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-1.5">
                      {step}
                      {i < arr.length - 1 && <span style={{ color: "var(--color-bronze)" }}>→</span>}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            위 연습 영역과 답변 구조는 SAIL의 공식 출제 유형이나 채점 기준으로 확정된 것이 아니라,
            영어 Speaking 평가에서 일반적으로 활용되는 과제 유형을 바탕으로 C-BRIDGE가 구성한
            연습용 분류입니다.
          </p>
        </Container>
      </section>

      {/* Self-Study 구조 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">SELF-STUDY</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            정답을 외우는 대신, 처음 보는 질문에도 스스로 답변을 구성할 수 있도록 연습합니다.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-t pt-6 text-sm font-semibold" style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}>
            {selfStudySteps.map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="border px-3 py-1.5" style={{ borderColor: "var(--color-border)" }}>
                  {step}
                </span>
                {i < arr.length - 1 && <span style={{ color: "var(--color-bronze)" }}>→</span>}
              </span>
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

      {/* 가격 + CTA */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE</p>
          <p className="mt-3 font-serif text-xl font-semibold tracking-[-0.01em]" style={{ color: "var(--color-ink)" }}>
            SAIL Speaking Intensive · 100P
          </p>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                PRICE
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=SAIL&tier=100P" className="btn-primary px-7 text-sm font-medium">
                SAIL 100P 시작하기
              </Link>
              <Link
                href="/consultation?test=SAIL"
                className="inline-flex min-h-[48px] items-center justify-center border px-7 text-sm font-medium tracking-[0.06em]"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                구성 상담하기
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <Disclaimer />
          </div>
        </Container>
      </section>

      <AddOnSection testSlug="sail" />
    </>
  );
}
