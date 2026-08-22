import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookCover from "@/components/BookCover";
import ProductCard from "@/components/ProductCard";
import LevelBadge from "@/components/LevelBadge";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import { getProductDetail } from "@/lib/productDetail";
import { testMeta } from "@/lib/testMeta";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.title} | C-BRIDGE TEST PREP`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const meta = testMeta[product.test];
  const detail = getProductDetail(product);
  const related = getRelatedProducts(product);

  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <BookCover
              test={meta.name.split(" ")[0]}
              skill={product.skill}
              number={product.type === "Package" ? undefined : product.questions}
              tag={product.type === "Package" ? "Complete Package" : "Practice Questions"}
              color={meta.color}
              size="hero"
            />
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-purple">
              {meta.name} · {product.skill}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-black leading-tight text-ink md:text-5xl text-balance">
              {product.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <LevelBadge level={product.level} />
              <span className="text-sm text-ink/60">{product.type}</span>
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
              {product.description}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-bold tracking-[0.1em] text-ink/40">QUESTIONS</dt>
                <dd className="mt-1 font-serif text-lg font-bold text-ink">
                  {product.questions.toLocaleString()}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold tracking-[0.1em] text-ink/40">PAGES</dt>
                <dd className="mt-1 font-serif text-lg font-bold text-ink">{product.pages}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold tracking-[0.1em] text-ink/40">FORMAT</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{product.format}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <p className="font-serif text-3xl font-black text-ink">
                ₩{product.price.toLocaleString()}
              </p>
              <Link
                href={`/consultation?product=${product.slug}`}
                className="rounded-sm bg-purple px-8 py-3.5 text-sm font-bold tracking-[0.08em] text-ivory transition-colors hover:bg-plum"
              >
                PURCHASE INQUIRY
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink">PRODUCT OVERVIEW</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              {product.title}은(는) {meta.name} {product.skill} 영역의 핵심 유형을{" "}
              {product.questions.toLocaleString()}문항을 통해 집중적으로 반복 훈련하는 C-BRIDGE
              공식 문제집입니다. 이해 중심의 강의가 아니라, 실전에서 빠르게 답하는 감각을
              기르는 데 초점을 맞췄습니다.
            </p>

            <h3 className="mt-10 font-serif text-xl font-bold text-ink">WHO THIS BOOK IS FOR</h3>
            <ul className="mt-4 space-y-3">
              {detail.whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink">WHAT YOU WILL PRACTICE</h2>
            <ul className="mt-4 space-y-3">
              {detail.whatYouPractice.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-serif text-xl font-bold text-ink">TABLE OF CONTENTS</h3>
            <ol className="mt-4 space-y-2.5">
              {detail.toc.map((item) => (
                <li
                  key={item}
                  className="border-b border-dashed border-purple/15 pb-2.5 text-sm text-ink/70"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h2 className="font-serif text-2xl font-bold text-ink">SAMPLE QUESTION</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-sm border border-purple/15 bg-ivory p-7">
              <p className="text-[10px] font-bold tracking-[0.16em] text-purple">
                {meta.name} · {product.skill.toUpperCase()}
              </p>
              <p className="mt-4 text-sm italic leading-relaxed text-ink/75">
                {detail.sample.passage}
              </p>
              <p className="mt-5 text-sm font-semibold text-ink">{detail.sample.question}</p>
              <ul className="mt-4 space-y-2">
                {detail.sample.choices.map((choice, i) => (
                  <li
                    key={choice}
                    className={`rounded-sm border px-4 py-2.5 text-sm ${
                      i === detail.sample.answerIndex
                        ? "border-purple/40 bg-lavender/40 font-semibold text-ink"
                        : "border-purple/10 text-ink/70"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}. {choice}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm bg-plum p-7">
              <p className="text-[10px] font-bold tracking-[0.16em] text-gold">
                ANSWER EXPLANATION
              </p>
              <p className="mt-4 text-sm leading-relaxed text-lavender/90">
                {detail.sample.explanation}
              </p>

              <p className="mt-8 text-[10px] font-bold tracking-[0.16em] text-gold">STUDY PLAN</p>
              <div className="mt-4 space-y-3">
                {detail.studyPlan.map((s) => (
                  <div key={s.week} className="flex items-baseline gap-3">
                    <span className="w-16 shrink-0 text-xs font-bold text-gold">{s.week}</span>
                    <span className="text-sm text-lavender/85">{s.focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-ivory py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <h2 className="font-serif text-2xl font-bold text-ink">RELATED BOOKS</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-plum py-14 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-bold text-ivory md:text-3xl">
            Ready to start practicing?
          </p>
          <Link
            href={`/consultation?product=${product.slug}`}
            className="rounded-sm bg-gold px-8 py-3.5 text-sm font-bold tracking-[0.08em] text-plum transition-transform hover:-translate-y-0.5"
          >
            PURCHASE INQUIRY
          </Link>
        </div>
      </section>
    </>
  );
}
