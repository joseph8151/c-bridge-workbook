import Link from "next/link";
import BookCover from "./BookCover";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";
import { testMeta, TestId, levelInfo } from "@/lib/testMeta";
import { products } from "@/lib/products";

export default function TestLandingPage({ testId }: { testId: TestId }) {
  const meta = testMeta[testId];
  const testProducts = products.filter((p) => p.test === testId);
  const bestFirst = [...testProducts].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));

  return (
    <>
      <section className="relative overflow-hidden bg-ivory pb-16 pt-14 md:pb-24 md:pt-20">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: meta.color, opacity: 0.12 }}
        />
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-purple">{meta.eyebrow}</p>
            <h1 className="mt-4 font-serif text-5xl font-black leading-[0.98] text-ink sm:text-6xl md:text-7xl text-balance">
              {meta.name}.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold text-ink/80">{meta.tagline}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">
              {meta.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={`/all-books?test=${testId}`}
                className="rounded-sm bg-purple px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-ivory transition-colors hover:bg-plum"
              >
                EXPLORE {meta.name.split(" ")[0]}
              </Link>
              <Link
                href="/consultation"
                className="rounded-sm border border-purple/30 px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-purple transition-colors hover:bg-lavender"
              >
                GET A RECOMMENDATION
              </Link>
            </div>
          </div>

          <div className="flex justify-center gap-4 lg:justify-end">
            <BookCover
              test={meta.name.split(" ")[0]}
              skill={meta.skills[0]}
              number={testProducts[0]?.questions}
              tag="Practice Questions"
              color={meta.color}
              size="hero"
              tilt={-5}
              className="animate-float-slow"
            />
            <BookCover
              test={meta.name.split(" ")[0]}
              skill={meta.skills[1] ?? meta.skills[0]}
              tag="Practice Series"
              color={meta.color}
              size="lg"
              tilt={4}
              className="mt-10 animate-float-slow [animation-delay:0.5s]"
            />
          </div>
        </div>
      </section>

      <section className="bg-lavender/30 py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="Product Line" title="WHAT YOU CAN PRACTICE." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {meta.skills.map((skill) => (
              <Link
                key={skill}
                href={`/all-books?test=${testId}&skill=${encodeURIComponent(skill)}`}
                className="rounded-sm border border-purple/15 bg-ivory px-4 py-5 text-center text-sm font-bold text-ink/80 transition-colors hover:border-purple/30 hover:text-purple"
              >
                {skill}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Full Catalog" title={`${meta.name.split(" ")[0]} BOOKS.`} />
            <Link
              href={`/all-books?test=${testId}`}
              className="shrink-0 text-sm font-bold tracking-[0.08em] text-purple hover:underline"
            >
              VIEW ALL {meta.name.split(" ")[0]} BOOKS →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestFirst.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender/30 py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="Score Range" title="LEVELS BUILT AROUND YOUR SCORE." align="center" className="mx-auto" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(levelInfo) as (keyof typeof levelInfo)[]).map((key) => (
              <div key={key} className="rounded-sm border border-purple/15 bg-ivory p-6 text-center">
                <p className="font-serif text-xl font-bold text-purple">{levelInfo[key].label}</p>
                <p className="mt-2 text-sm text-ink/60">{levelInfo[key].ko}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
