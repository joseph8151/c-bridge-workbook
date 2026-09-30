export interface BookMockupItem {
  title: string;
  subtitle?: string;
}

// 표지 목업 — 단색 사각형 + 시험명 텍스트만. 기울임 · 그라디언트 · 그림자 없음.
export default function BookMockup({ books }: { books: BookMockupItem[] }) {
  return (
    <div className="flex gap-4" aria-hidden>
      {books.map((b) => (
        <div
          key={b.title}
          className="flex flex-col justify-between border p-5 min-[430px]:p-6"
          style={{
            width: "clamp(140px, 24vw, 180px)",
            height: "clamp(200px, 34vw, 260px)",
            background: "var(--color-paper)",
            borderColor: "var(--color-ink)",
          }}
        >
          <div className="h-[2px] w-8" style={{ background: "var(--color-bronze)" }} />
          <div>
            <p className="eyebrow">C-BRIDGE</p>
            <p className="mt-2 font-serif text-lg font-bold leading-tight" style={{ color: "var(--color-ink)" }}>
              {b.title}
            </p>
            {b.subtitle && (
              <p className="mt-1.5 text-xs" style={{ color: "var(--color-muted)" }}>
                {b.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
