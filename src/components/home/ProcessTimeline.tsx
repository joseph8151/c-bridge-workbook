import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { no: "01", title: "시험 구조 분석", desc: "시험의 영역, 문제 유형, 출제 구조를 분석합니다." },
  { no: "02", title: "문제 유형 분류", desc: "반복적으로 출제되는 유형과 핵심 영역을 분류합니다." },
  { no: "03", title: "난이도 설계", desc: "기초부터 실전까지 단계적으로 문제 난이도를 구성합니다." },
  { no: "04", title: "문제 제작", desc: "시험별 목표와 문제 유형에 맞춰 문제를 제작합니다." },
  { no: "05", title: "정답·해설 검수", desc: "정답과 풀이 과정, 설명 내용을 확인합니다." },
  { no: "06", title: "PDF 구성", desc: "문제집, 해설집, Final Review, 학습 자료를 하나의 패키지로 구성합니다." },
];

const BORDER_CLASSES = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-l-0",
  "border-t lg:border-l",
  "border-t sm:border-l",
];

export default function ProcessTimeline() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="HOW IT'S MADE" title="HOW WE BUILD THE BOOK" />

        <div className="mt-12 grid border-y sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
          {steps.map((s, i) => (
            <div key={s.no} className={`p-8 ${BORDER_CLASSES[i]}`} style={{ borderColor: "var(--color-border)" }}>
              <span className="font-serif text-3xl font-bold" style={{ color: "var(--color-bronze)" }}>
                {s.no}
              </span>
              <p className="mt-3 font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
                {s.title}
              </p>
              <p className="mt-2 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
