import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PackageStack from "@/components/PackageStack";

const items = [
  { no: "01", title: "MAIN WORKBOOK", desc: "시험 유형별 집중 문제." },
  { no: "02", title: "ANSWER GUIDE", desc: "정답 · 풀이 · 오답 이유." },
  { no: "03", title: "MOCK TEST", desc: "실전 시간과 구조에 맞춘 연습." },
  { no: "04", title: "FINAL REVIEW", desc: "시험 직전 핵심 정리." },
  { no: "05", title: "STUDY PLAN", desc: "분량에 맞춘 학습 계획." },
  { no: "06", title: "BONUS / EXAM MATERIAL", desc: "시험 특성에 따른 추가 자료." },
];

const BORDER_CLASSES = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-l-0",
  "border-t lg:border-l",
  "border-t sm:border-l",
];

export default function ValueStack() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="VALUE STACK"
            title="한 권의 PDF가 아닙니다."
            description="시험을 준비하는 과정에 필요한 자료를 하나의 구성으로 제공합니다."
          />

          <div className="mt-10 grid border-y sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
            {items.map((item, i) => (
              <div key={item.no} className={`p-6 min-[361px]:p-8 ${BORDER_CLASSES[i]}`} style={{ borderColor: "var(--color-border)" }}>
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  {item.no}
                </span>
                <p className="mt-3 text-sm font-bold tracking-[0.04em]" style={{ color: "var(--color-ink)" }}>
                  {item.title}
                </p>
                <p className="mt-1.5 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <PackageStack />
        </div>
      </Container>
    </section>
  );
}
