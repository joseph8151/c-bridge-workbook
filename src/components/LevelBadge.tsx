import { Level, levelInfo } from "@/lib/testMeta";

export default function LevelBadge({ level }: { level: Level }) {
  const info = levelInfo[level];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple/20 bg-lavender px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-purple">
      {info.label}
    </span>
  );
}
