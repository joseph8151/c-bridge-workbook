import Link from "next/link";
import Container from "@/components/Container";
import { getAddOnsForTest } from "@/lib/addOnsData";

// 메인 200P/300P(또는 전문시험 개별가) 상품 아래, 보조 상품으로만 작게 노출합니다.
// 해당 시험에 등록된 낱개 상품이 없으면 아무것도 렌더링하지 않습니다.
export default function AddOnSection({ testSlug }: { testSlug: string }) {
  const addOns = getAddOnsForTest(testSlug);
  if (addOns.length === 0) return null;

  return (
    <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
      <Container>
        <p className="eyebrow">ADD-ON PRODUCTS</p>
        <p className="mt-3 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
          낱개 상품
        </p>
        <p className="mt-2 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
          메인 교재와 별도로, 특정 영역만 집중하거나 가볍게 먼저 시작하고 싶을 때 선택하는 보조
          상품입니다. 메인 상품을 대체하지 않습니다.
        </p>
        <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
          {addOns.map((a) => (
            <Link
              key={a.id}
              href={`/books/${testSlug}/addons/${a.id}`}
              className="card-hover block border p-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p className="text-sm font-bold leading-snug" style={{ color: "var(--color-ink)" }}>
                {a.name}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.02em]" style={{ color: "var(--color-bronze)" }}>
                {a.badge}
              </p>
              <p className="mt-4 text-xs font-bold tracking-[0.08em]" style={{ color: "var(--color-rust)" }}>
                자세히 보기 →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
