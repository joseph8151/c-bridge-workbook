export interface BookMockupItem {
  title: string;
  subtitle?: string;
}

// 표지 목업 — 단색 사각형 + 시험명 텍스트만. 기울임 · 그라디언트 · 그림자 없음.
// grid-cols-3 + 퍼센트 기반 폭이라 뷰포트가 아무리 좁아도 3장이 컨테이너 밖으로 잘리지 않음.
export default function BookMockup({ books }: { books: BookMockupItem[] }) {
  return (
    <div className="grid w-full grid-cols-3 gap-2.5 min-[430px]:gap-4" aria-hidden>
      {books.map((b) => (
        <div
          key={b.title}
          className="flex min-w-0 flex-col justify-between border p-2.5 min-[430px]:p-5 md:p-6"
          style={{
            aspectRatio: "3 / 4",
            background: "var(--color-paper)",
            borderColor: "var(--color-ink)",
          }}
        >
          <div className="h-[2px] w-6 min-[430px]:w-8" style={{ background: "var(--color-bronze)" }} />
          <div className="min-w-0">
            <p className="eyebrow text-[9px] min-[430px]:text-[11px]">C-BRIDGE</p>
            <p
              className="mt-1.5 break-keep text-sm font-bold leading-tight min-[430px]:mt-2 min-[430px]:text-lg"
              style={{ color: "var(--color-ink)" }}
            >
              {b.title}
            </p>
            {b.subtitle && (
              <p className="mt-1 break-keep text-[10px] min-[430px]:mt-1.5 min-[430px]:text-xs" style={{ color: "var(--color-muted)" }}>
                {b.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
