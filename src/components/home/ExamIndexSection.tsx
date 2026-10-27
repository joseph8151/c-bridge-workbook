import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExamIndex, { ExamIndexItem } from "@/components/ExamIndex";
import { examCategoryOrder, examCategoryMeta } from "@/lib/examCategories";

// 한 페이지에 모든 시험을 나열하지 않고, 목적별 대분류 6개만 먼저 보여줍니다.
// 각 카테고리는 /all-books의 해당 Accordion 섹션으로 바로 펼쳐 이동합니다.
const items: ExamIndexItem[] = examCategoryOrder.map((id) => {
  const meta = examCategoryMeta[id];
  return {
    name: meta.navLabelEn.toUpperCase(),
    subtitle: meta.navLabel,
    context: meta.description,
    href: `/all-books#${id}`,
  };
});

export default function ExamIndexSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--bg-surface)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="EXAM INDEX" />
        <div className="mt-8">
          <ExamIndex items={items} />
        </div>
        <p className="mt-10 text-sm" style={{ color: "var(--bg-muted)" }}>
          <Link href="/all-books" className="underline decoration-[var(--bg-line)] underline-offset-4 hover:text-[var(--bg-accent)]">
            View all exams in the index
          </Link>
        </p>
      </Container>
    </section>
  );
}
