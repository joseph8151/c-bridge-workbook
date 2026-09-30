import Link from "next/link";
import TestCard from "./TestCard";
import Container from "./Container";
import { TestGroup, groupMeta, getTestsByGroup } from "@/lib/tests";

export default function CategoryPageTemplate({ group }: { group: TestGroup }) {
  const meta = groupMeta[group];
  const groupTests = [...getTestsByGroup(group)].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <>
      <section className="border-b py-14 md:py-20" style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow" style={{ color: meta.color }}>
            {meta.eyebrow}
          </p>
          <h1
            className="mt-3 max-w-2xl break-keep font-serif text-4xl font-bold leading-tight md:text-5xl text-balance"
            style={{ color: "var(--color-ink)" }}
          >
            {meta.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            {meta.description}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-paper)" }}>
        <Container>
          <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
            {groupTests.map((t) => (
              <TestCard key={t.id} test={t} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t py-14 md:py-16" style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }}>
        <Container className="flex flex-col items-center gap-5 text-center">
          <p className="font-serif text-2xl font-bold md:text-3xl" style={{ color: "var(--color-ink)" }}>
            어떤 시험을 준비해야 할지 아직 모르겠다면?
          </p>
          <Link href="/recommend" className="btn-primary px-7 text-sm font-medium">
            무료 교재 추천 받기
          </Link>
        </Container>
      </section>
    </>
  );
}
