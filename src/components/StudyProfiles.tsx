import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { caseStudies } from "@/lib/caseStudies";

export default function StudyProfiles() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="WHO IT'S FOR" title="Sample Study Profiles" />
        <p className="mt-3 text-sm" style={{ color: "var(--color-muted)" }}>
          실제 후기가 아닌, 목표에 따라 문제집이 어떻게 구성되는지 보여주는 학습 구성 예시입니다.
        </p>

        <div className="mt-10 grid border-y sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--color-border)" }}>
          {caseStudies.map((c, i) => (
            <div
              key={c.test}
              className={`flex flex-col justify-between p-8 ${
                ["", "border-t sm:border-t-0 sm:border-l", "border-t lg:border-t-0 lg:border-l", "border-t sm:border-l lg:border-t-0"][i]
              }`}
              style={{ borderColor: "var(--color-border)" }}
            >
              <div>
                <p className="font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
                  {c.test}
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--color-muted)" }}>
                  {c.profile}
                </p>
                <p className="mt-4 text-sm font-semibold" style={{ color: "var(--color-bronze)" }}>
                  {c.focus}
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-muted)" }}>
                  {c.volume}
                </p>
              </div>
              <Link
                href={`/consultation?test=${encodeURIComponent(c.test)}`}
                className="mt-8 inline-block text-xs font-medium tracking-[0.06em]"
                style={{ color: "var(--color-ink)" }}
              >
                비슷한 교재 구성 상담하기 <span className="arrow-slide">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
