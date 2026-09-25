import Link from "next/link";

const notes = [
  { text: "셀핍 듣기, 숫자와 지도", href: "/guides/celpip-listening-numbers-maps" },
  { text: "PTE Academic과 UKVI", href: "/guides/pte-academic-vs-ukvi" },
  { text: "OET는 직군마다 쓰기·말하기가 갈립니다", href: "/guides/oet-writing-speaking-by-profession" },
];

export default function ExamNotes() {
  return (
    <section className="bg-ivory py-16 md:py-20" data-reveal>
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          시험 정보
        </p>
        <div className="mt-6 border-t" style={{ borderColor: "var(--color-line)" }}>
          {notes.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b py-5 transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--color-line)" }}
            >
              <p className="break-keep text-sm leading-relaxed" style={{ color: "var(--color-inkstrong)" }}>
                {n.text}
              </p>
              <span className="shrink-0 text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-rust)" }}>
                더 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
