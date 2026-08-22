import Link from "next/link";
import SectionHeading from "../SectionHeading";
import TestCard from "../TestCard";
import { TestGroup, groupMeta, getTestsByGroup } from "@/lib/tests";

export default function CategorySection({
  group,
  tone = "light",
}: {
  group: TestGroup;
  tone?: "light" | "cream";
}) {
  const meta = groupMeta[group];
  const groupTests = [...getTestsByGroup(group)].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <section className={tone === "cream" ? "bg-cream py-20 md:py-28" : "bg-ivory py-20 md:py-28"}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={meta.eyebrow} title={meta.headline} subtitle={meta.description} />
          <Link
            href={`/${meta.slug}`}
            className="shrink-0 text-sm font-bold tracking-[0.04em] text-purple hover:underline"
          >
            {meta.name} 전체 보기 →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groupTests.map((t) => (
            <TestCard key={t.id} test={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
