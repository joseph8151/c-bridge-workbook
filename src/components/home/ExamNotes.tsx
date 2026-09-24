import Link from "next/link";

const notes = [
  { text: "PTE Academic과 UKVI는 과제가 같고 성적표가 다릅니다.", href: "/guides/pte-academic-vs-ukvi" },
  { text: "CELPIP 독학, CLB가 안 오를 때가 있습니다.", href: "/guides/celpip-self-study-clb-plateau" },
  { text: "OET는 직군마다 쓰기·말하기가 갈립니다.", href: "/guides/oet-writing-speaking-by-profession" },
];

export default function ExamNotes() {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-[800px] px-5 md:px-10">
        <div>
          {notes.map((n) => (
            <div
              key={n.href}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t py-5"
              style={{ borderColor: "rgba(28,23,18,0.15)" }}
            >
              <p className="break-keep text-sm leading-relaxed" style={{ color: "var(--color-inkstrong)" }}>
                {n.text}
              </p>
              <Link
                href={n.href}
                className="shrink-0 text-xs font-bold tracking-[0.06em]"
                style={{ color: "var(--color-rust)" }}
              >
                시험 정보 →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
