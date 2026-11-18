// 모의고사 센터 상단에 배치되는 장식용 그래픽. 실제 응시 화면이 아니라
// "온라인 시험 환경"을 암시하는 추상적인 목업으로, 사진 없이도 페이지를
// 고급스럽게 보이도록 SVG/CSS만으로 구성합니다.
export default function ExamPreviewGraphic() {
  return (
    <div
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-sm border p-5 shadow-[0_24px_60px_-20px_rgba(30,36,28,0.45)] min-[361px]:p-6"
      style={{ borderColor: "var(--color-border)", background: "var(--color-ink)" }}
    >
      {/* 은은한 금색 글로우 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--color-bronze)" }}
      />

      {/* 창 상단 바 */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: "rgba(246,241,232,0.25)" }} />
          <span className="h-2 w-2 rounded-full" style={{ background: "rgba(246,241,232,0.25)" }} />
          <span className="h-2 w-2 rounded-full" style={{ background: "rgba(246,241,232,0.25)" }} />
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide"
          style={{ background: "rgba(246,241,232,0.1)", color: "var(--color-paper)" }}
        >
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2.5 1.5" />
          </svg>
          18:24
        </div>
      </div>

      {/* 진행 바 */}
      <div className="relative mt-5 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(246,241,232,0.12)" }}>
        <div className="h-full w-[60%] rounded-full" style={{ background: "var(--color-bronze)" }} />
      </div>
      <p className="relative mt-2 text-[11px] font-semibold" style={{ color: "rgba(246,241,232,0.5)" }}>
        Question 6 / 10
      </p>

      {/* 문항 카드 */}
      <div className="relative mt-5 rounded-sm p-4" style={{ background: "rgba(246,241,232,0.06)" }}>
        <div className="h-2 w-5/6 rounded-full" style={{ background: "rgba(246,241,232,0.3)" }} />
        <div className="mt-2 h-2 w-3/5 rounded-full" style={{ background: "rgba(246,241,232,0.18)" }} />

        <div className="mt-4 space-y-2">
          {[true, false, false, false].map((active, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-sm px-3 py-2"
              style={{
                background: active ? "rgba(95,127,82,0.35)" : "rgba(246,241,232,0.05)",
                border: active ? "1px solid var(--color-bronze)" : "1px solid transparent",
              }}
            >
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{
                  border: active ? "2px solid var(--color-bronze)" : "2px solid rgba(246,241,232,0.3)",
                  background: active ? "var(--color-bronze)" : "transparent",
                }}
              />
              <span className="h-2 flex-1 rounded-full" style={{ background: "rgba(246,241,232,0.2)", maxWidth: `${70 - i * 10}%` }} />
            </div>
          ))}
        </div>
      </div>

      {/* 하단 상태 */}
      <div className="relative mt-5 flex items-center justify-between text-[11px] font-semibold" style={{ color: "rgba(246,241,232,0.45)" }}>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4.5h11l3 3v12H5Z" />
            <path d="M8 4.5v5h7v-5" />
          </svg>
          자동 저장됨
        </span>
        <span className="rounded-full px-3 py-1 font-bold" style={{ background: "var(--color-bronze)", color: "var(--color-ink)" }}>
          다음 문항 →
        </span>
      </div>
    </div>
  );
}
