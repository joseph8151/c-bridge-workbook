import SectionHeading from "../SectionHeading";

const categories = [
  {
    label: "말하기 시험",
    exampleTests: "OPIc · TOEIC Speaking · Versant · SPA · SJPT · TSC · HSKK",
    items: ["예상 질문", "답변 구성법", "고득점 표현", "상황별 표현", "답변 예시", "실전 Speaking 모의고사"],
  },
  {
    label: "듣기 시험",
    exampleTests: "TOEIC · JLPT · JPT · HSK · FLEX 등",
    items: ["듣기 음원", "QR 연습", "추가 Listening 문제", "받아쓰기 또는 핵심 표현"],
  },
  {
    label: "Writing 시험",
    exampleTests: "TOEFL · IELTS · PTE · OET 등",
    items: ["답안 구조", "고득점 표현", "예시 답안", "자주 틀리는 표현", "채점 포인트"],
  },
  {
    label: "어휘 중심 시험",
    exampleTests: "JLPT · JPT · HSK · TOEIC · TEPS · FLEX 등",
    items: ["빈출 어휘", "시험별 핵심 표현", "단어 체크리스트", "Final Vocabulary"],
  },
];

export default function BonusMaterials() {
  return (
    <section className="bg-plum py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="시험별 추가자료"
          title="시험이 다르면 제공 자료도 달라야 합니다."
          dark
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div
              key={c.label}
              className="rounded-[20px] border border-ivory/10 bg-ivory/5 p-7"
            >
              <h3 className="font-serif text-lg font-bold text-ivory">{c.label}</h3>
              <p className="mt-2 text-xs leading-relaxed text-lavender/60">{c.exampleTests}</p>
              <ul className="mt-5 space-y-2.5">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-lavender/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
