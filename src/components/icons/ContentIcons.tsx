const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BookStackIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} className={props.className}>
      <rect x="4" y="4" width="13" height="4.2" rx="1" transform="rotate(-4 4 4)" />
      <rect x="4.5" y="9.5" width="14" height="4.2" rx="1" transform="rotate(2 4.5 9.5)" />
      <rect x="4" y="15.2" width="15" height="4.2" rx="1" />
    </svg>
  );
}

export function MagnifierCheckIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} className={props.className}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.3-4.3" />
      <path d="m7.5 10.5 2 2 3.5-3.8" />
    </svg>
  );
}

export function TimerIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} className={props.className}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.6 2" />
      <path d="M9.5 3h5" />
      <path d="M12 3v2.2" />
    </svg>
  );
}

export function MemoIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} className={props.className}>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8h7" />
      <path d="M8.5 11.5h7" />
      <path d="M8.5 15h4.5" />
    </svg>
  );
}

export function SparkGiftIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} className={props.className}>
      <rect x="4" y="10" width="16" height="9.5" rx="1.6" />
      <path d="M4 14h16" />
      <path d="M12 10v9.5" />
      <path d="M12 10c-2-3-6-2.6-6-.4C6 10.7 8.2 10.4 12 10Z" />
      <path d="M12 10c2-3 6-2.6 6-.4 0 1.1-2.2.8-6 .4Z" />
    </svg>
  );
}

export function CalendarIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} className={props.className}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16" />
      <path d="M8 3.5v3.5" />
      <path d="M16 3.5v3.5" />
      <path d="M8.5 14h2M13.5 14h2M8.5 17h2M13.5 17h2" />
    </svg>
  );
}
