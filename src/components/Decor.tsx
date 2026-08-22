export function GradientBlob({
  color = "var(--color-lavender)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: color }}
    />
  );
}

export function DotGrid({ className = "", id = "dot-grid" }: { className?: string; id?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="var(--color-purple)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function CornerAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`pointer-events-none absolute ${className}`}
      width="64"
      height="64"
      fill="none"
    >
      <path d="M2 32V2h30" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
