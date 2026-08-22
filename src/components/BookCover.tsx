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
      {/* page-stack edge, peeking from behind */}
      <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-[7px] bg-ink/12" />
      <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[7px] bg-ink/8" />

      <div
        className="relative h-full w-full overflow-hidden rounded-[7px] p-3.5 md:p-4 flex flex-col justify-between text-ivory shadow-[0_20px_44px_-16px_rgba(33,26,40,0.5)] ring-1 ring-black/10"
        style={{
          background: `linear-gradient(155deg, ${color} 0%, var(--color-plum) 115%)`,
        }}
      >
        {/* soft top sheen for a printed-cover feel */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16)_0%,transparent_28%)]" />
        {/* spine shadow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[5px] bg-black/25" />
        {/* paper-edge sliver on the outer edge */}
        <div className="pointer-events-none absolute inset-y-[3px] right-0 w-[3px] rounded-r-[4px] bg-ivory/40" />

        <div className="relative flex items-center justify-between pl-1.5">
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.22em]">
            C-BRIDGE
          </span>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: "var(--color-gold)" }}
          />
        </div>
        <div className="relative pl-1.5">
          <p className="font-serif text-xl md:text-2xl font-bold leading-[1.05] break-keep text-balance">
            {test}
          </p>
          <p className="mt-1.5 line-clamp-2 text-[10px] md:text-xs font-semibold leading-snug tracking-[0.1em] opacity-90 break-keep">
            {skill}
          </p>
        </div>
        <div className="relative pl-1.5">
          {number !== undefined && (
            <p
              className="font-serif text-3xl md:text-4xl font-black leading-none"
              style={{ color: "var(--color-gold)" }}
            >
              {number}
            </p>
          )}
          <p className="mt-1 text-[9px] md:text-[10px] tracking-[0.14em] uppercase opacity-80">
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
}
