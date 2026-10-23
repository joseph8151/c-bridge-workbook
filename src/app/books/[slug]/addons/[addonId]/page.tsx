import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { getTestBySlug } from "@/lib/tests";
import { allAddOns, getAddOn, getAddOnsForTest } from "@/lib/addOnsData";
import { formatPrice, getIncludesForAddOn, getRecommendedForAddOn } from "@/lib/addOns";

export function generateStaticParams() {
  return allAddOns.map((a) => ({ slug: a.testSlug, addonId: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; addonId: string }>;
}): Promise<Metadata> {
  const { slug, addonId } = await params;
  const addOn = getAddOn(slug, addonId);
  if (!addOn) return {};
  const title = `${addOn.name} | ${addOn.badge} | C-BRIDGE`;
  const description = `${addOn.name}. ${getIncludesForAddOn(addOn).join(", ")}.`;
  return {
    title,
    description,
    alternates: { canonical: `/books/${slug}/addons/${addonId}` },
  };
}

export default async function AddOnDetailPage({
  params,
}: {
  params: Promise<{ slug: string; addonId: string }>;
}) {
  const { slug, addonId } = await params;
  const test = getTestBySlug(slug);
  const addOn = getAddOn(slug, addonId);
  if (!test || !addOn) notFound();

  const badgeParts = addOn.badge.split(" · ");
  const includes = getIncludesForAddOn(addOn);
  const recommendedFor = getRecommendedForAddOn(addOn);
  const otherAddOns = getAddOnsForTest(slug).filter((a) => a.id !== addOn.id);

  const buyHref = `/pricing?test=${encodeURIComponent(addOn.name)}&price=${addOn.price}&label=${encodeURIComponent(`${addOn.name} · ${addOn.badge}`)}#direct-purchase`;
  const consultHref = `/consultation?test=${encodeURIComponent(addOn.name)}`;

  return (
    <>
      {/* Hero — 분량·문제 수·가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">
            <Link href={`/books/${slug}`} className="hover:text-[var(--color-bronze)]">
              {test.name}
            </Link>{" "}
            · ADD-ON PRODUCT
          </p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[32px] font-bold leading-tight tracking-[-0.01em] md:text-[44px]"
            style={{ color: "var(--color-ink)" }}
          >
            {addOn.name}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {badgeParts.map((part) => (
              <span
                key={part}
                className="inline-flex items-center border px-3.5 py-1.5 text-sm font-semibold"
                style={{ borderColor: "var(--color-bronze)", color: "var(--color-ink)" }}
              >
                {part}
              </span>
            ))}
            <span
              className="inline-flex items-center border px-3.5 py-1.5 text-sm font-semibold"
              style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
            >
              상세 해설 포함
            </span>
          </div>

          {addOn.note && (
            <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              {addOn.note}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <p className="font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
              {formatPrice(addOn.price)}
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link href={consultHref} className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link href={buyHref} className="btn-secondary px-7 text-sm font-medium">
                {formatPrice(addOn.price)} 바로 구매
              </Link>
            </div>
          </div>

          <p className="mt-4 max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            {test.name} 메인 교재(200P·300P 또는 개별 구성)를 대체하는 상품이 아니라, 특정 영역만
            집중하거나 가볍게 먼저 시작할 때 선택하는 보조 상품입니다.
          </p>
        </Container>
      </section>

      {/* 포함 자료 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">WHAT&apos;S INCLUDED</p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 추천 대상 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">RECOMMENDED FOR</p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {recommendedFor.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 다른 낱개 상품 + 메인 상품 링크 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">{test.name}</p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            전 영역을 충분한 문제량으로 준비하고 싶다면 {test.name} 메인 교재를 확인해보세요.
          </p>
          <Link href={`/books/${slug}`} className="btn-secondary mt-5 inline-flex px-7 text-sm font-medium">
            {test.name} 메인 교재 보기
          </Link>

          {otherAddOns.length > 0 && (
            <>
              <p className="mt-10 text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                다른 낱개 상품
              </p>
              <div className="mt-4 grid gap-x-8 gap-y-3 border-t pt-5 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
                {otherAddOns.map((a) => (
                  <Link
                    key={a.id}
                    href={`/books/${slug}/addons/${a.id}`}
                    className="flex items-baseline justify-between gap-4 text-sm hover:text-[var(--color-bronze)]"
                    style={{ color: "var(--color-ink)" }}
                  >
                    <span>{a.name}</span>
                    <span className="shrink-0 text-xs" style={{ color: "var(--color-muted)" }}>
                      {formatPrice(a.price)}
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <section className="border-t py-10 md:py-12" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="max-w-2xl break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            본 상품은 C-BRIDGE가 자체 제작한 오리지널 연습 자료(C-BRIDGE Original Practice
            Materials)이며, 공식 기출문항을 복제하거나 포함하지 않습니다.
          </p>
        </Container>
      </section>
    </>
  );
}
