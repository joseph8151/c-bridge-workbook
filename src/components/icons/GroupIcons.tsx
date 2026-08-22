import type { ReactElement, CSSProperties } from "react";
import { TestGroup } from "@/lib/tests";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Briefcase(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} className={props.className} style={props.style}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
      <path d="M10.5 12.5v1.6h3v-1.6" />
    </svg>
  );
}

function SpeechBubble(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} className={props.className} style={props.style}>
      <path d="M4 6h16v9H9l-4 3.5V15H4z" />
      <path d="M8 9.5h8" />
      <path d="M8 12.5h5" />
    </svg>
  );
}

function CharacterBlock(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} className={props.className} style={props.style}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13.5h8" />
      <path d="M9.5 13.5V17" />
      <path d="M14.5 13.5V17" />
    </svg>
  );
}

function Certificate(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} className={props.className} style={props.style}>
      <rect x="3.5" y="4" width="17" height="12" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 11h6" />
      <path d="M9.5 16v4l2.2-1.4L14 20v-4" />
    </svg>
  );
}

function Globe(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} className={props.className} style={props.style}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.3 4 5.2 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.2-4-8.5s1.4-6.2 4-8.5Z" />
    </svg>
  );
}

function Stethoscope(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} className={props.className} style={props.style}>
      <path d="M6 4v6a4 4 0 0 0 8 0V4" />
      <path d="M6 4H4.5M14 4h1.5" />
      <path d="M14 10v2.5a5.5 5.5 0 0 0 11 0V11" />
      <circle cx="19.5" cy="9" r="1.6" />
    </svg>
  );
}

const iconMap: Record<TestGroup, (props: { className?: string; style?: CSSProperties }) => ReactElement> = {
  EMPLOYMENT: Briefcase,
  JAPANESE: SpeechBubble,
  CHINESE: CharacterBlock,
  FLEX_SNULT: Certificate,
  STUDY_ABROAD: Globe,
  PROFESSIONAL: Stethoscope,
};

export default function GroupIcon({
  group,
  className,
  style,
}: {
  group: TestGroup;
  className?: string;
  style?: CSSProperties;
}) {
  const Icon = iconMap[group];
  return <Icon className={className} style={style} />;
}
