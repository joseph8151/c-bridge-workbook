import Link from "next/link";
import TestCard from "./TestCard";
import { TestGroup, groupMeta, getTestsByGroup } from "@/lib/tests";

export default function CategoryPageTemplate({ group }: { group: TestGroup }) {
  const meta = groupMeta[group];
  const groupTests = [...getTestsByGroup(group)].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.14em]" style={{ color: meta.color }}>
            {meta.eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl break-keep font-serif text-3xl font-black leading-tight text-ink md:text-4xl text-balance">
            {meta.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
            {meta.description}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {groupTests.map((t) => (
              <TestCard key={t.id} test={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plum py-14 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-bold text-ivory md:text-3xl">
            어떤 시험을 준비해야 할지 아직 모르겠다면?
          </p>
          <Link
            href="/finder"
            className="rounded-[14px] bg-gold px-8 py-3.5 text-sm font-bold tracking-[0.04em] text-plum transition-transform hover:-translate-y-0.5"
          >
            무료 교재 추천 받기
          </Link>
        </div>
      </section>
    </>
  );
}
