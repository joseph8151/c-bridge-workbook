const R = 44;
const CIRCUMFERENCE = 2 * Math.PI * R;
const GAP_DEGREES = 34;
const GAP_LENGTH = CIRCUMFERENCE * (GAP_DEGREES / 360);

export default function BridgeMark({
  size = 40,
  color = "var(--color-inkstrong)",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
      className={className}
    >
      <circle
        cx="50"
        cy="50"
        r={R}
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeDasharray={`${CIRCUMFERENCE - GAP_LENGTH} ${GAP_LENGTH}`}
        strokeDashoffset={-GAP_LENGTH / 2}
      />
      <text
        x="50"
        y="53.5"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="11"
        letterSpacing="1.2"
        fill={color}
      >
        BRIDGE
      </text>
    </svg>
  );
}
