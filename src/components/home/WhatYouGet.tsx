import SectionHeading from "../SectionHeading";

const items = [
  { title: "문제집", desc: "실제 시험 유형에 맞춘 충분한 문제량" },
  { title: "상세 해설집", desc: "정답뿐 아니라 풀이 과정과 오답 이유까지" },
  { title: "실전 모의고사", desc: "시험 전 충분한 실전 연습" },
  { title: "시험 직전 요약집", desc: "시험 전에 빠르게 다시 보는 핵심 내용" },
  { title: "시험별 추가자료", desc: "말하기 표현, 음원, 어휘, Writing 자료 등" },
  { title: "학습 계획표", desc: "4주·8주 등 일정별 학습 계획" },
];

export default function WhatYouGet() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="C-BRIDGE의 구성"
          title="문제집만 판매하지 않습니다."
          subtitle="C-BRIDGE는 단순히 문제를 모아놓은 PDF가 아닙니다. 시험별로 필요한 학습 자료를 하나의 패키지로 구성합니다."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[20px] border border-purple/10 bg-ivory p-7 shadow-[0_1px_2px_rgba(36,35,41,0.04)]"
            >
              <h3 className="font-serif text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
