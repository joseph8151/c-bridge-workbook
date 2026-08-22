import SectionHeading from "../SectionHeading";
import {
  BookStackIcon,
  MagnifierCheckIcon,
  TimerIcon,
  MemoIcon,
  SparkGiftIcon,
  CalendarIcon,
} from "../icons/ContentIcons";

const items = [
  { title: "문제집", desc: "실제 시험 유형에 맞춘 충분한 문제량", Icon: BookStackIcon },
  { title: "상세 해설집", desc: "정답뿐 아니라 풀이 과정과 오답 이유까지", Icon: MagnifierCheckIcon },
  { title: "실전 모의고사", desc: "시험 전 충분한 실전 연습", Icon: TimerIcon },
  { title: "시험 직전 요약집", desc: "시험 전에 빠르게 다시 보는 핵심 내용", Icon: MemoIcon },
  { title: "시험별 추가자료", desc: "말하기 표현, 음원, 어휘, Writing 자료 등", Icon: SparkGiftIcon },
  { title: "학습 계획표", desc: "4주·8주 등 일정별 학습 계획", Icon: CalendarIcon },
];

export default function WhatYouGet() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="C-BRIDGE의 구성"
          title="문제집만 드리지 않습니다."
          subtitle="시험 준비에 실제로 필요한 자료를 함께 제공합니다."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[20px] border border-purple/10 bg-ivory p-7 shadow-[0_1px_2px_rgba(36,35,41,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_-18px_rgba(69,53,101,0.3)]"
            >
              <span className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-lavender/50 transition-transform duration-300 group-hover:scale-125" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-[14px] bg-lavender/60 text-purple">
                <Icon />
              </div>
              <h3 className="relative mt-5 font-serif text-lg font-bold text-ink">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
