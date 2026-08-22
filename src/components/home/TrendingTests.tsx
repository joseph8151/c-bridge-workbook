import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { trendingTestIds, tests, groupMeta } from "@/lib/tests";

export default function TrendingTests() {
  const trending = trendingTestIds
    .map((id) => tests.find((t) => t.id === id))
    .filter((t): t is (typeof tests)[number] => Boolean(t));

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="Trending" title="요즘 많이 찾는 시험" />

        <div className="mt-10 flex flex-wrap gap-3">
          {trending.map((t) => {
            const group = groupMeta[t.group];
            return (
              <Link
                key={t.id}
                href={`/books/${t.slug}`}
                className="rounded-full border border-purple/15 bg-ivory px-5 py-2.5 text-sm font-bold text-ink/75 transition-colors hover:border-purple/30"
              >
                <span style={{ color: group.color }}>{t.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
