import SectionHeading from "../SectionHeading";

const points = [
  {
    no: "01",
    title: "TEST-SPECIFIC",
    desc: "각 시험의 유형에 맞게 구성.",
  },
  {
    no: "02",
    title: "SKILL-SPECIFIC",
    desc: "Reading, Listening, Speaking, Writing을 세분화.",
  },
  {
    no: "03",
    title: "HIGH-VOLUME PRACTICE",
    desc: "충분한 문제량을 통해 반복 학습.",
  },
  {
    no: "04",
    title: "REAL TEST MINDSET",
    desc: "실전 시간과 난이도를 고려한 훈련.",
  },
];

export default function WhyCBridge() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="Why C-Bridge" title="NOT MORE THEORY. MORE PRACTICE." align="center" className="max-w-3xl" />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-purple/10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.no} className="flex flex-col gap-4 bg-ivory p-8">
              <span className="font-serif text-4xl font-black text-lavender">{p.no}</span>
              <h3 className="font-serif text-xl font-bold text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
