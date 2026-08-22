const sizeClasses = {
  sm: "w-24 h-36 md:w-28 md:h-40",
  md: "w-36 h-52 md:w-40 md:h-56",
  lg: "w-48 h-[17rem] md:w-56 md:h-80",
  hero: "w-52 h-72 md:w-64 md:h-[23rem]",
} as const;

const VARIANT_COUNT = 4;

function hashToVariant(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash % VARIANT_COUNT;
}

interface BookCoverProps {
  test: string;
  skill: string;
  number?: string | number;
  tag: string;
  color: string;
  size?: keyof typeof sizeClasses;
  tilt?: number;
  className?: string;
  variant?: number;
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
  variant,
}: BookCoverProps) {
  const v = variant ?? hashToVariant(test + skill);

  return (
    <div
      className={`relative shrink-0 ${sizeClasses[size]} ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* page-stack edge, peeking from behind */}
      <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-[7px] bg-ink/12" />
      <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[7px] bg-ink/8" />

      <div
        className="relative h-full w-full overflow-hidden rounded-[7px] text-ivory shadow-[0_20px_44px_-16px_rgba(33,26,40,0.5)] ring-1 ring-black/10"
        style={{ background: `linear-gradient(155deg, ${color} 0%, var(--color-plum) 115%)` }}
      >
        {/* soft top sheen for a printed-cover feel */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16)_0%,transparent_28%)]" />
        {/* paper-edge sliver on the outer edge */}
        <div className="pointer-events-none absolute inset-y-[3px] right-0 w-[3px] rounded-r-[4px] bg-ivory/40" />

        {v === 0 && <ClassicFace test={test} skill={skill} number={number} tag={tag} />}
        {v === 1 && <BandFace test={test} skill={skill} number={number} tag={tag} />}
        {v === 2 && <EmblemFace test={test} skill={skill} number={number} tag={tag} />}
        {v === 3 && <SplitFace test={test} skill={skill} number={number} tag={tag} color={color} />}
      </div>
    </div>
  );
}

interface FaceProps {
  test: string;
  skill: string;
  number?: string | number;
  tag: string;
}

/** Variant 0 — classic: wordmark top, title mid, number/tag bottom. */
function ClassicFace({ test, skill, number, tag }: FaceProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-3.5 md:p-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[5px] bg-black/25" />
      <div className="relative flex items-center justify-between pl-1.5">
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.22em]">C-BRIDGE</span>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--color-gold)" }} />
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
          <p className="font-serif text-3xl md:text-4xl font-black leading-none" style={{ color: "var(--color-gold)" }}>
            {number}
          </p>
        )}
        <p className="mt-1 text-[9px] md:text-[10px] tracking-[0.14em] uppercase opacity-80">{tag}</p>
      </div>
    </div>
  );
}

/** Variant 1 — gold rule + eyebrow, then a very large title anchored low. */
function BandFace({ test, skill, number, tag }: FaceProps) {
  return (
    <div className="relative flex h-full w-full flex-col p-3.5 md:p-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.22em] opacity-90">C-BRIDGE</span>
        {number !== undefined && (
          <span className="font-serif text-sm md:text-base font-black" style={{ color: "var(--color-gold)" }}>
            {number}
          </span>
        )}
      </div>
      <div className="mt-2.5 h-[2px] w-8" style={{ background: "var(--color-gold)" }} />
      <p className="mt-2 line-clamp-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.16em] opacity-80 break-keep">
        {skill}
      </p>
      <div className="mt-auto">
        <p className="font-serif text-2xl md:text-[1.75rem] font-black leading-[0.95] break-keep text-balance">
          {test}
        </p>
        <p className="mt-2 text-[9px] md:text-[10px] tracking-[0.14em] uppercase opacity-70">{tag}</p>
      </div>
    </div>
  );
}

/** Variant 2 — centered emblem/certificate composition. */
function EmblemFace({ test, skill, number, tag }: FaceProps) {
  const initials = test.split(" ")[0].slice(0, 4).toUpperCase();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between p-3.5 text-center md:p-4">
      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.22em] opacity-90">C-BRIDGE</span>
      <div className="flex flex-col items-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border md:h-14 md:w-14"
          style={{ borderColor: "var(--color-gold)" }}
        >
          <span className="font-serif text-base font-black md:text-lg" style={{ color: "var(--color-gold)" }}>
            {number !== undefined ? number : initials}
          </span>
        </div>
        <p className="mt-3 line-clamp-2 font-serif text-lg font-bold leading-[1.1] break-keep md:text-xl">
          {test}
        </p>
        <p className="mt-1 line-clamp-1 text-[10px] font-semibold uppercase tracking-[0.1em] opacity-80 break-keep">
          {skill}
        </p>
      </div>
      <p className="text-[9px] md:text-[10px] tracking-[0.14em] uppercase opacity-70">{tag}</p>
    </div>
  );
}

/** Variant 3 — split panel with a vertical wordmark spine. */
function SplitFace({ test, skill, number, tag, color }: FaceProps & { color: string }) {
  return (
    <div className="relative flex h-full w-full">
      <div
        className="flex w-[22%] shrink-0 items-center justify-center"
        style={{ background: "rgba(0,0,0,0.22)" }}
      >
        <span className="[writing-mode:vertical-rl] text-[9px] font-bold tracking-[0.3em] opacity-90 md:text-[10px]">
          C-BRIDGE
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-3 md:p-3.5">
        <span
          className="inline-block w-fit rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.1em] md:text-[9px]"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          Series
        </span>
        <div>
          <p className="line-clamp-2 font-serif text-lg font-bold leading-[1.1] break-keep md:text-xl">
            {test}
          </p>
          <p className="mt-1 line-clamp-2 text-[9px] font-semibold leading-snug tracking-[0.08em] opacity-90 break-keep md:text-[10px]">
            {skill}
          </p>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-[8px] tracking-[0.1em] uppercase opacity-70 md:text-[9px]">{tag}</p>
          {number !== undefined && (
            <p className="font-serif text-xl font-black leading-none md:text-2xl" style={{ color: "var(--color-gold)" }}>
              {number}
            </p>
          )}
        </div>
      </div>
      <div
        className="absolute right-0 top-0 h-full w-[3px]"
        style={{ background: `color-mix(in srgb, ${color} 40%, white)` }}
      />
    </div>
  );
}
