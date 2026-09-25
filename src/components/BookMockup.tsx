export interface BookMockupItem {
  title: string;
  subtitle?: string;
}

// 실제 표지 이미지가 없을 때 쓰는 CSS 전용 book mockup.
// 겹쳐 쌓인 책 표지를 얇은 border · 미세한 회전 · 약한 그림자만으로 표현합니다.
export default function BookMockup({ books }: { books: BookMockupItem[] }) {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[340px]" aria-hidden>
      {books.map((b, i) => {
        const offset = i * 34;
        const rotate = (i - (books.length - 1) / 2) * 2.5;
        return (
          <div
            key={b.title}
            className="absolute flex h-[340px] w-[240px] flex-col justify-between border p-6"
            style={{
              left: `${offset}px`,
              top: `${i * 10}px`,
              background: "var(--color-paper)",
              borderColor: "var(--color-border)",
              boxShadow: "0 24px 48px -32px rgba(17,24,32,0.4)",
              transform: `rotate(${rotate}deg)`,
              zIndex: books.length - i,
            }}
          >
            <div className="h-[3px] w-10" style={{ background: "var(--color-bronze)" }} />
            <div>
              <p className="eyebrow">C-BRIDGE</p>
              <p className="mt-2 font-serif text-xl font-bold leading-tight" style={{ color: "var(--color-ink)" }}>
                {b.title}
              </p>
              {b.subtitle && (
                <p className="mt-1.5 text-xs" style={{ color: "var(--color-muted)" }}>
                  {b.subtitle}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
