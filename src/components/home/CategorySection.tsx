import Link from "next/link";
import SectionHeading from "../SectionHeading";
import TestCard from "../TestCard";
import GroupIcon from "../icons/GroupIcons";
import { TestGroup, groupMeta, getTestsByGroup } from "@/lib/tests";

const toneClasses = {
  light: "bg-ivory",
  cream: "bg-cream",
  lavender: "bg-lavender/25",
};

export default function CategorySection({
  group,
  tone = "light",
}: {
  group: TestGroup;
  tone?: "light" | "cream" | "lavender";
}) {
  const meta = groupMeta[group];
  const groupTests = [...getTestsByGroup(group)].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <section className={`${toneClasses[tone]} py-20 md:py-28`}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className="mt-1 hidden h-12 w-12 shrink-0 items-center justify-center rounded-[14px] sm:flex"
              style={{ background: `color-mix(in srgb, ${meta.color} 14%, transparent)`, color: meta.color }}
            >
              <GroupIcon group={group} />
            </div>
            <SectionHeading eyebrow={meta.eyebrow} title={meta.headline} subtitle={meta.description} />
          </div>
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
