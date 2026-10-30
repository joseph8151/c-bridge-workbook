import type { PreviewPage } from "@/lib/lookInsidePreviews";

// The book-page "paper" shell shared by every preview, in both the abstract
// (thumbnail/carousel) and detailed (main preview/modal) tiers.
// `fixedAspect=false` lets content set its own height instead of being
// clipped to the shared 3:4 page ratio — used by the denser Passage
// Breakdown detail card, which doesn't fit the ratio at narrow widths.
function Page({
  no,
  children,
  fixedAspect = true,
  foldCorner = false,
}: {
  no: string;
  children: React.ReactNode;
  fixedAspect?: boolean;
  foldCorner?: boolean;
}) {
  return (
    <div
      className={`relative flex w-full flex-col border p-4 min-[361px]:p-5 md:p-6 ${
        fixedAspect ? "aspect-[3/4] overflow-hidden" : ""
      }`}
      style={{ borderColor: "var(--bg-line)", background: "var(--bg-surface)" }}
    >
      {foldCorner && (
        <span
          aria-hidden
          className="absolute right-0 top-0 h-8 w-8"
          style={{
            background: "linear-gradient(135deg, var(--bg-accent-soft) 50%, var(--bg-accent) 50%)",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />
      )}
      <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: "var(--bg-line)" }}>
        <span className="text-[10px] font-bold tracking-[0.14em]" style={{ color: "var(--bg-accent)" }}>
          C—BRIDGE
        </span>
        <span
          className="text-sm font-bold"
          style={{ color: "var(--bg-ink)", fontFamily: "var(--bg-font-display)" }}
        >
          {no}
        </span>
      </div>
      <div className="mt-3 flex flex-1 flex-col">{children}</div>
    </div>
  );
}

function Bar({ w, className = "" }: { w: number; className?: string }) {
  return <div className={`h-1.5 rounded-full ${className}`} style={{ width: `${w}%`, background: "rgba(30,36,28,0.12)" }} />;
}

function AbstractPractice() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div>
        <p className="text-[9px] font-bold tracking-[0.1em]" style={{ color: "var(--bg-accent)" }}>
          READING
        </p>
        <div className="mt-3 space-y-1.5">
          <Bar w={92} />
          <Bar w={100} />
          <Bar w={70} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {["A", "B", "C", "D"].map((l) => (
          <div key={l} className="flex items-center gap-1.5 border px-2 py-1.5" style={{ borderColor: "var(--bg-line)" }}>
            <span className="text-[9px] font-bold" style={{ color: "var(--bg-muted)" }}>
              {l}
            </span>
            <Bar w={55} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AbstractAnswer() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex items-center gap-2">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
          style={{ background: "var(--bg-accent)", color: "var(--bg-ink-deep)" }}
        >
          B
        </span>
        <Bar w={60} />
      </div>
      <div className="space-y-1.5">
        <p className="text-[9px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-accent)" }}>
          WHY?
        </p>
        <Bar w={95} />
        <Bar w={80} />
      </div>
      <div className="space-y-1.5">
        <p className="text-[9px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-accent)" }}>
          KEY POINT
        </p>
        <Bar w={88} />
      </div>
    </div>
  );
}

function AbstractPassage() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div>
        <p className="text-[9px] font-bold tracking-[0.1em]" style={{ color: "var(--bg-accent)" }}>
          STRUCTURE
        </p>
        <div className="mt-2 space-y-1.5">
          {["서론", "본론", "결론"].map((l) => (
            <div key={l} className="flex items-center gap-1.5">
              <span className="text-[8px] font-bold" style={{ color: "var(--bg-ink)" }}>
                {l}
              </span>
              <Bar w={60} />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        <p className="text-[9px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-accent)" }}>
          SUMMARY
        </p>
        <Bar w={95} />
        <Bar w={75} />
      </div>
    </div>
  );
}

function AbstractMock() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="space-y-1.5">
        <Bar w={100} className="!h-2" />
        <Bar w={65} />
      </div>
      <div className="grid grid-cols-2 gap-2 border-t pt-3" style={{ borderColor: "var(--bg-line)" }}>
        <div>
          <p className="text-[8px] font-bold tracking-[0.1em]" style={{ color: "var(--bg-muted)" }}>
            SECTION
          </p>
          <Bar w={80} className="mt-1.5" />
        </div>
        <div>
          <p className="text-[8px] font-bold tracking-[0.1em]" style={{ color: "var(--bg-muted)" }}>
            TIME
          </p>
          <Bar w={70} className="mt-1.5" />
        </div>
      </div>
    </div>
  );
}

function AbstractReview() {
  return (
    <div className="flex flex-1 flex-col justify-center space-y-2">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[9px] font-bold" style={{ color: "var(--bg-accent)" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <Bar w={70 - i * 6} />
        </div>
      ))}
    </div>
  );
}

function AbstractPlan() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      {["01", "02", "03", "04"].map((w) => (
        <div key={w} className="flex items-center gap-2 border-t pt-2" style={{ borderColor: "var(--bg-line)" }}>
          <span className="text-[8px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-muted)" }}>
            WEEK {w}
          </span>
          <Bar w={60} />
        </div>
      ))}
    </div>
  );
}

function DetailPractice() {
  return (
    <div className="flex flex-1 flex-col justify-between text-ink">
      <div>
        <p className="text-[10px] font-bold tracking-[0.12em]" style={{ color: "var(--bg-accent)" }}>
          PTE ACADEMIC · READING
        </p>
        <p className="mt-1 text-xs font-bold" style={{ color: "var(--bg-ink)" }}>
          Reading &amp; Writing: Fill in the Blanks
        </p>
        <p className="mt-3 text-[11px] font-bold" style={{ color: "var(--bg-muted)" }}>
          Question 01
        </p>
        <p className="mt-2 break-keep text-xs leading-relaxed" style={{ color: "var(--bg-ink)" }}>
          The committee will ______ the proposal before the end of the quarter, and each department
          must submit feedback in advance.
        </p>
      </div>
      <div className="space-y-1.5">
        {["A. relevant", "B. review", "C. determine", "D. arrange"].map((opt) => (
          <div key={opt} className="border px-2.5 py-1.5 text-[11px]" style={{ borderColor: "var(--bg-line)", color: "var(--bg-muted)" }}>
            {opt}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] font-medium tracking-[0.06em]" style={{ color: "var(--bg-accent)" }}>
        DIFFICULTY · INTERMEDIATE
      </p>
    </div>
  );
}

function DetailAnswer() {
  return (
    <div className="flex flex-1 flex-col justify-between text-ink">
      <div>
        <p className="text-[10px] font-bold tracking-[0.12em]" style={{ color: "var(--bg-accent)" }}>
          ANSWER &amp; EXPLANATION
        </p>
        <p className="mt-2 text-[11px] font-bold" style={{ color: "var(--bg-muted)" }}>
          Question 01
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
            style={{ background: "var(--bg-accent)", color: "var(--bg-ink-deep)" }}
          >
            B
          </span>
          <span className="text-xs font-bold" style={{ color: "var(--bg-ink)" }}>
            Correct Answer
          </span>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-accent)" }}>
          WHY?
        </p>
        <p className="mt-1.5 break-keep text-xs leading-relaxed" style={{ color: "var(--bg-muted)" }}>
          문맥상 위원회의 &apos;검토&apos; 행위가 필요하므로 review가 자연스럽습니다. determine은 결정의 의미로
          앞뒤 문맥과 어울리지 않습니다.
        </p>
      </div>
      <div>
        <p className="text-[10px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-accent)" }}>
          KEY POINT
        </p>
        <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--bg-muted)" }}>
          빈칸 앞뒤 동사·목적어 관계를 먼저 확인하세요.
        </p>
      </div>
      <div>
        <p className="text-[10px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-accent)" }}>
          VOCABULARY
        </p>
        <p className="mt-1.5 text-xs" style={{ color: "var(--bg-muted)" }}>
          Relevant · Context · Determine
        </p>
      </div>
    </div>
  );
}

// Small gold-tick section label shared across Passage Breakdown's blocks —
// the same leading-rule language as the site-wide `.eyebrow` utility, just
// compact enough to repeat several times inside one card.
function Tick({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.08em]" style={{ color: muted ? "var(--bg-muted)" : "var(--bg-accent)" }}>
      <span className="h-[1.5px] w-2.5 shrink-0" style={{ background: "var(--bg-accent)" }} />
      {children}
    </p>
  );
}

function DetailPassage() {
  return (
    <div className="flex flex-1 flex-col gap-3 text-ink">
      <div>
        <p className="text-[11px] font-bold tracking-[0.12em]" style={{ color: "var(--bg-accent)" }}>
          PASSAGE BREAKDOWN
        </p>
        <p className="mt-1 text-sm font-bold" style={{ color: "var(--bg-ink)" }}>
          Reading Comprehension · 지문 분석 해설
        </p>
      </div>

      <div
        className="border-l-2 py-1.5 pl-3"
        style={{ borderColor: "var(--bg-accent)", background: "var(--bg-accent-soft)" }}
      >
        <Tick muted>지문 발췌</Tick>
        <p
          className="mt-1 break-keep text-[11px] leading-relaxed"
          style={{ color: "var(--bg-ink)", fontFamily: "var(--bg-font-display)" }}
        >
          &ldquo;Many organizations assumed that physical proximity was essential for building
          trust among team members. However, recent studies on distributed teams suggest
          otherwise: structured, transparent communication can foster trust even without
          face-to-face contact. Daily check-ins, visible task boards, and clearly documented
          decisions let colleagues predict one another&apos;s behavior — and predictability, not
          proximity, is what trust actually requires.&rdquo;
        </p>
      </div>

      <div>
        <Tick muted>글의 구성</Tick>
        <div className="mt-1 space-y-1 text-[11px] leading-snug" style={{ color: "var(--bg-muted)" }}>
          <p>
            <span className="font-bold" style={{ color: "var(--bg-ink)" }}>
              서론
            </span>{" "}
            물리적 근접이 신뢰의 조건이라는 통념 제시
          </p>
          <p>
            <span className="font-bold" style={{ color: "var(--bg-ink)" }}>
              본론
            </span>{" "}
            원격 환경에서의 반박 근거와 사례 전개
          </p>
          <p>
            <span className="font-bold" style={{ color: "var(--bg-ink)" }}>
              결론
            </span>{" "}
            소통 구조의 중요성 재확인
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 border-t pt-2" style={{ borderColor: "var(--bg-line)" }}>
        <div>
          <Tick>제목</Tick>
          <p className="mt-0.5 break-keep text-[11px] leading-snug" style={{ color: "var(--bg-ink)" }}>
            Remote Work and Team Trust
          </p>
        </div>
        <div>
          <Tick>주제</Tick>
          <p className="mt-0.5 break-keep text-[11px] leading-snug" style={{ color: "var(--bg-ink)" }}>
            원격근무 시대의 신뢰 구축
          </p>
        </div>
      </div>

      <div className="border-t pt-2" style={{ borderColor: "var(--bg-line)" }}>
        <Tick>요지</Tick>
        <p className="mt-1 break-keep text-[11px] leading-relaxed" style={{ color: "var(--bg-ink)" }}>
          Transparent communication can strengthen, not weaken, trust in remote teams.
        </p>
        <p className="mt-0.5 break-keep text-[11px] leading-relaxed" style={{ color: "var(--bg-muted)" }}>
          투명한 소통 구조가 있다면 원격근무에서도 팀 신뢰는 오히려 강화될 수 있다.
        </p>
      </div>

      <div className="border-t pt-2" style={{ borderColor: "var(--bg-line)" }}>
        <Tick>요약</Tick>
        <p className="mt-1 break-keep text-[11px] leading-relaxed" style={{ color: "var(--bg-ink)" }}>
          The passage argues that visible, structured communication — not physical proximity —
          sustains trust among distributed teams.
        </p>
        <p className="mt-0.5 break-keep text-[11px] leading-relaxed" style={{ color: "var(--bg-muted)" }}>
          이 글은 물리적 근접이 아니라 투명하고 구조화된 소통이 분산된 팀의 신뢰를 유지하는 핵심이라고
          주장한다.
        </p>
      </div>

      <div className="border-t pt-2" style={{ borderColor: "var(--bg-line)" }}>
        <Tick>핵심 어휘</Tick>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {["Proximity", "Distributed", "Transparent", "Predictability", "Sustain"].map((w) => (
            <span
              key={w}
              className="border px-1.5 py-0.5 text-[9px] font-medium"
              style={{ borderColor: "var(--bg-line)", color: "var(--bg-ink)" }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t pt-2" style={{ borderColor: "var(--bg-line)" }}>
        <Tick>논리 구조</Tick>
        <p className="mt-1 break-keep text-[10px] leading-snug" style={{ color: "var(--bg-muted)" }}>
          통념 제시 → 반박 근거 제시 → 사례로 보강 → 결론 도출
        </p>
      </div>

      <div className="mt-auto p-3" style={{ background: "var(--bg-ink)" }}>
        <p className="text-[9px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-accent)" }}>
          핵심 주제
        </p>
        <p className="mt-1 break-keep text-[11px] font-semibold leading-relaxed" style={{ color: "var(--bg-paper)" }}>
          원격근무 시대에는 물리적 근접이 아니라 투명하고 구조화된 소통이 팀 신뢰의 핵심이다.
        </p>
      </div>
    </div>
  );
}

function DetailMock() {
  return (
    <div className="flex flex-1 flex-col justify-between text-ink">
      <div>
        <p className="text-[10px] font-bold tracking-[0.12em]" style={{ color: "var(--bg-accent)" }}>
          MOCK TEST
        </p>
        <p className="mt-1 text-sm font-bold" style={{ color: "var(--bg-ink)" }}>
          PTE Academic
        </p>
        <p className="text-xs" style={{ color: "var(--bg-muted)" }}>
          Practice Test 01
        </p>
      </div>
      <div className="space-y-3 border-t border-b py-3" style={{ borderColor: "var(--bg-line)" }}>
        <div>
          <p className="text-[10px] font-bold tracking-[0.1em]" style={{ color: "var(--bg-muted)" }}>
            SECTION
          </p>
          <p className="mt-1 text-xs font-semibold" style={{ color: "var(--bg-ink)" }}>
            Speaking &amp; Writing
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-[0.1em]" style={{ color: "var(--bg-muted)" }}>
            RECOMMENDED TIME
          </p>
          <p className="mt-1 text-xs font-semibold" style={{ color: "var(--bg-ink)" }}>
            Full Practice
          </p>
        </div>
      </div>
      <span
        className="inline-flex w-fit items-center justify-center border px-4 py-2 text-[11px] font-bold tracking-[0.1em]"
        style={{ borderColor: "var(--bg-accent)", color: "var(--bg-accent)" }}
      >
        START
      </span>
    </div>
  );
}

function DetailReview() {
  const items = ["자주 틀리는 유형 다시 확인", "시간 배분 체크", "핵심 표현 Review", "마지막 Mock Test 오답 확인"];
  const checks = ["Timing", "Accuracy", "Vocabulary", "Strategy"];
  return (
    <div className="flex flex-1 flex-col justify-between text-ink">
      <div>
        <p className="text-[10px] font-bold tracking-[0.12em]" style={{ color: "var(--bg-accent)" }}>
          FINAL REVIEW
        </p>
        <p className="mt-1 text-xs font-bold" style={{ color: "var(--bg-ink)" }}>
          Before the Test
        </p>
        <ul className="mt-3 space-y-2">
          {items.map((it, i) => (
            <li key={it} className="flex items-baseline gap-2 text-xs leading-snug" style={{ color: "var(--bg-muted)" }}>
              <span className="font-bold" style={{ color: "var(--bg-accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {it}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-3" style={{ borderColor: "var(--bg-line)" }}>
        <p className="text-[10px] font-bold tracking-[0.1em]" style={{ color: "var(--bg-accent)" }}>
          LAST CHECK
        </p>
        <ul className="mt-1.5 space-y-1">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-2 text-xs" style={{ color: "var(--bg-muted)" }}>
              <span className="inline-block h-3 w-3 shrink-0 border" style={{ borderColor: "var(--bg-line)" }} />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DetailPlan() {
  const weeks = [
    { w: "WEEK 01", items: "Diagnostic · Core Practice" },
    { w: "WEEK 02", items: "Weak Area Practice · Review" },
    { w: "WEEK 03", items: "Mock Test · Error Analysis" },
    { w: "WEEK 04", items: "Final Review · Full Practice" },
  ];
  return (
    <div className="flex flex-1 flex-col justify-between text-ink">
      <p className="text-[10px] font-bold tracking-[0.12em]" style={{ color: "var(--bg-accent)" }}>
        4 WEEK PLAN
      </p>
      <div className="flex flex-1 flex-col justify-between py-1">
        {weeks.map((w) => (
          <div key={w.w} className="border-t pt-2" style={{ borderColor: "var(--bg-line)" }}>
            <p className="text-[10px] font-bold tracking-[0.08em]" style={{ color: "var(--bg-muted)" }}>
              {w.w}
            </p>
            <p className="mt-1 text-xs font-semibold leading-snug" style={{ color: "var(--bg-ink)" }}>
              {w.items}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const ABSTRACT: Record<PreviewPage["variant"], () => React.JSX.Element> = {
  practice: AbstractPractice,
  answer: AbstractAnswer,
  passage: AbstractPassage,
  mock: AbstractMock,
  review: AbstractReview,
  plan: AbstractPlan,
};

const DETAIL: Record<PreviewPage["variant"], () => React.JSX.Element> = {
  practice: DetailPractice,
  answer: DetailAnswer,
  passage: DetailPassage,
  mock: DetailMock,
  review: DetailReview,
  plan: DetailPlan,
};

export default function PreviewCard({ page, detail = false }: { page: PreviewPage; detail?: boolean }) {
  const Content = (detail ? DETAIL : ABSTRACT)[page.variant];
  const isPassageDetail = detail && page.variant === "passage";
  return (
    <Page no={page.no} fixedAspect={!isPassageDetail} foldCorner={isPassageDetail}>
      <Content />
    </Page>
  );
}
