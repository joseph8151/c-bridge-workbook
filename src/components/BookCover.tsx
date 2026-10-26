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

// sm 카드(5권 이상 세트)는 공간이 빠듯해 킥커를 줄이고 타이틀·스킬 폰트도 한 단계 낮춤.
const kickerText = {
  sm: "C—BRIDGE",
  md: "C—BRIDGE PROFESSIONAL EXAM SERIES",
  lg: "C—BRIDGE PROFESSIONAL EXAM SERIES",
  hero: "C—BRIDGE PROFESSIONAL EXAM SERIES",
} as const;

const titleSizeClasses = {
  sm: "text-sm",
  md: "text-xl",
  lg: "text-2xl",
  hero: "text-3xl",
} as const;

const skillClampClasses = {
  sm: "line-clamp-1",
  md: "line-clamp-2",
  lg: "line-clamp-2",
  hero: "line-clamp-2",
} as const;

// [BRITISH GREEN REDESIGN — Step 2] 표지 목업: 짙은 그린 배경 + 골드 테두리
// 프레임, 왼쪽 책등 스트립(과목별 color prop 유지), 골드 하단 밴드. 기울임 ·
// 그라디언트 없음 — 그림자는 globals.css의 --bg-shadow 하나만.
export default function BookCover({ test, skill, tag, color, size = "md", className = "" }: BookCoverProps) {
  return (
    <div
      className={`relative flex shrink-0 flex-col justify-between overflow-hidden border px-4 pb-0 pt-4 ${sizeClasses[size]} ${className}`}
      style={{
        background: "var(--bg-ink-deep)",
        borderColor: "var(--bg-accent)",
        color: "var(--bg-paper)",
        boxShadow: "var(--bg-shadow)",
      }}
    >
      <span aria-hidden className="absolute inset-y-0 left-0 w-1.5" style={{ background: color }} />

      <span className="text-[8px] font-bold leading-snug tracking-[0.18em]" style={{ color: "var(--bg-accent)" }}>
        {kickerText[size]}
      </span>
      <div>
        <p
          className={`break-keep font-semibold leading-[1.1] ${titleSizeClasses[size]}`}
          style={{ fontFamily: "var(--bg-font-display)" }}
        >
          {test}
        </p>
        <p className={`mt-1.5 text-[11px] leading-snug tracking-[0.04em] opacity-80 break-keep ${skillClampClasses[size]}`}>
          {skill}
        </p>
      </div>
      <span
        className="-mx-4 mt-2 px-4 py-1.5 text-[9px] font-bold tracking-[0.14em] uppercase"
        style={{ background: "var(--bg-accent)", color: "var(--bg-ink-deep)" }}
      >
        {tag}
      </span>
    </div>
  );
}
