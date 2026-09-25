import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { compareEntries, getCompareBySlug } from "@/lib/compareData";

export function generateStaticParams() {
  return compareEntries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompareBySlug(slug);
  if (!c) return {};
  const title = `${c.testA} vs ${c.testB} | C-BRIDGE`;
  return {
    title,
    description: c.summary,
    alternates: { canonical: `/compare/${slug}` },
    openGraph: { title, description: c.summary, url: `/compare/${slug}` },
    twitter: { card: "summary", title, description: c.summary },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompareBySlug(slug);
  if (!c) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "시험 비교", item: "https://www.c-bridge.uk/compare" },
      { "@type": "ListItem", position: 2, name: `${c.testA} vs ${c.testB}`, item: `https://www.c-bridge.uk/compare/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container className="max-w-[900px]">
          <p className="eyebrow">EXAM COMPARISON</p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="font-serif text-[42px] font-bold leading-none tracking-[-0.01em] md:text-[64px]" style={{ color: "var(--color-ink)" }}>
              {c.testA}
            </span>
            <span className="font-serif text-xl italic" style={{ color: "var(--color-bronze)" }}>
              vs
            </span>
            <span className="font-serif text-[42px] font-bold leading-none tracking-[-0.01em] md:text-[64px]" style={{ color: "var(--color-ink)" }}>
              {c.testB}
            </span>
          </div>
          <h1 className="mt-6 break-keep text-lg font-medium leading-snug md:text-xl" style={{ color: "var(--color-ink)" }}>
            어떤 시험이 나에게 맞을까요?
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
            {c.summary}
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-14 md:py-20">
        <div className="mx-auto max-w-[900px] overflow-x-auto px-5 md:px-10">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="w-[30%] border-b-2 pb-3 pr-4 text-xs font-bold tracking-[0.08em] text-ink/45" style={{ borderColor: "var(--color-line)" }} />
                <th
                  className="border-b-2 pb-3 pr-4 font-serif text-base font-bold"
                  style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
                >
                  {c.testA}
                </th>
                <th
                  className="border-b-2 pb-3 font-serif text-base font-bold"
                  style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
                >
                  {c.testB}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="border-b py-4 pr-4 align-top text-xs font-bold text-ink/50"
                    style={{ borderColor: "var(--color-line)" }}
                  >
                    {row.label}
                  </th>
                  <td className="border-b py-4 pr-4 align-top leading-relaxed text-ink/75" style={{ borderColor: "var(--color-line)" }}>
                    {row.a}
                  </td>
                  <td className="border-b py-4 align-top leading-relaxed text-ink/75" style={{ borderColor: "var(--color-line)" }}>
                    {row.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t bg-paper py-16 md:py-20" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <div
            className="grid border sm:grid-cols-2"
            style={{ borderColor: "var(--color-line)" }}
          >
            <div className="border-b p-8 sm:border-b-0 sm:border-r" style={{ borderColor: "var(--color-line)" }}>
              <p className="font-serif text-lg font-bold" style={{ color: "var(--color-inkstrong)" }}>
                {c.testA}가 적합한 경우
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.whenAFits.map((line) => (
                  <li key={line} className="text-sm leading-relaxed text-ink/70">
                    · {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <p className="font-serif text-lg font-bold" style={{ color: "var(--color-inkstrong)" }}>
                {c.testB}가 적합한 경우
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.whenBFits.map((line) => (
                  <li key={line} className="text-sm leading-relaxed text-ink/70">
                    · {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[680px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            가장 큰 차이
          </p>
          <p className="mt-4 break-keep text-base leading-relaxed" style={{ color: "var(--color-inkstrong)" }}>
            {c.biggestDifference}
          </p>

          <div className="mt-10 border-t pt-8" style={{ borderColor: "var(--color-line)" }}>
            <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
              준비 방법
            </p>
            <p className="mt-4 break-keep text-sm leading-relaxed text-ink/70">{c.howToPrepare}</p>
          </div>

          <div className="mt-10 border-t pt-8" style={{ borderColor: "var(--color-line)" }}>
            <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
              C-BRIDGE 교재 안내
            </p>
            <p className="mt-4 break-keep text-sm leading-relaxed text-ink/70">{c.bookGuide}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {c.ctaTestASlug && (
                <Link
                  href={`/books/${c.ctaTestASlug}`}
                  className="text-sm font-bold underline decoration-ink/20 underline-offset-4 hover:text-ink"
                  style={{ color: "var(--color-inkstrong)" }}
                >
                  {c.testA} 교재 보기 →
                </Link>
              )}
              {c.ctaTestBSlug && (
                <Link
                  href={`/books/${c.ctaTestBSlug}`}
                  className="text-sm font-bold underline decoration-ink/20 underline-offset-4 hover:text-ink"
                  style={{ color: "var(--color-inkstrong)" }}
                >
                  {c.testB} 교재 보기 →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-paper py-14 md:py-16" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="font-serif text-xl font-bold md:text-2xl" style={{ color: "var(--color-inkstrong)" }}>
            어떤 시험인지 정했다면, 맞는 교재로 시작하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/finder" className="btn-primary rounded-sm px-7 text-sm font-bold">
              내 시험 교재 찾기
            </Link>
            <Link
              href="/consultation"
              className="inline-flex min-h-[48px] items-center border px-7 text-sm font-medium tracking-[0.06em]"
              style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
            >
              시험 선택 상담하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
