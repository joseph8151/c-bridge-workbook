interface BookCoverProps {
  test: string;
  skill: string;
  tag: string;
  color: string;
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
}

const sizeClasses = {
  sm: "w-24 h-36 md:w-28 md:h-40",
  md: "w-36 h-52 md:w-40 md:h-56",
  lg: "w-48 h-[17rem] md:w-56 md:h-80",
  hero: "w-52 h-72 md:w-64 md:h-[23rem]",
} as const;

// 단색 사각형 + 시험명 텍스트만 쓰는 평면 표지. 기울임 · 그라디언트 · 그림자 없음.
export default function BookCover({ test, skill, tag, color, size = "md", className = "" }: BookCoverProps) {
  return (
    <div
      className={`flex shrink-0 flex-col justify-between border p-4 ${sizeClasses[size]} ${className}`}
      style={{ background: color, borderColor: "var(--color-ink)", color: "var(--color-paper)" }}
    >
      <span className="text-[10px] font-bold tracking-[0.2em]">C-BRIDGE</span>
      <div>
        <p className="font-serif text-xl font-bold leading-[1.1] break-keep">{test}</p>
        <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug tracking-[0.04em] opacity-85 break-keep">{skill}</p>
      </div>
      <p className="text-[9px] tracking-[0.14em] uppercase opacity-75">{tag}</p>
    </div>
  );
}
