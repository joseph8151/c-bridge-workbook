const sizeClasses = {
  sm: "w-24 h-36 md:w-28 md:h-40",
  md: "w-36 h-52 md:w-40 md:h-56",
  lg: "w-48 h-[17rem] md:w-56 md:h-80",
  hero: "w-52 h-72 md:w-64 md:h-[23rem]",
} as const;

interface BookCoverProps {
  test: string;
  skill: string;
  number?: string | number;
  tag: string;
  color: string;
  size?: keyof typeof sizeClasses;
  tilt?: number;
  className?: string;
}

export default function BookCover({
  test,
  skill,
  number,
  tag,
  color,
  size = "md",
  tilt = 0,
  className = "",
}: BookCoverProps) {
  return (
    <div
      className={`relative shrink-0 ${sizeClasses[size]} ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-[3px] bg-ink/15" />
      <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[3px] bg-ink/10" />
      <div
        className="relative h-full w-full rounded-[3px] p-3.5 md:p-4 flex flex-col justify-between text-ivory shadow-[0_18px_40px_-14px_rgba(33,26,40,0.45)] ring-1 ring-black/10"
        style={{
          background: `linear-gradient(155deg, ${color} 0%, var(--color-plum) 115%)`,
        }}
      >
        <div className="absolute inset-y-0 left-0 w-[6px] rounded-l-[3px] bg-black/25" />
        <div className="flex items-center justify-between pl-1">
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.22em]">
            C-BRIDGE
          </span>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--color-gold)" }}
          />
        </div>
        <div className="pl-1">
          <p className="font-serif text-xl md:text-2xl font-bold leading-[1.05] text-balance">
            {test}
          </p>
          <p className="mt-1.5 text-[10px] md:text-xs font-semibold tracking-[0.14em] uppercase opacity-90">
            {skill}
          </p>
        </div>
        <div className="pl-1">
          {number !== undefined && (
            <p
              className="font-serif text-3xl md:text-4xl font-black leading-none"
              style={{ color: "var(--color-gold)" }}
            >
              {number}
            </p>
          )}
          <p className="mt-1 text-[9px] md:text-[10px] tracking-[0.14em] uppercase opacity-90">
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
}
