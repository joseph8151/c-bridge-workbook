import Link from "next/link";
import SectionHeading from "../SectionHeading";

const items = [
  {
    problem: "Reading 시간이 부족하다",
    recommend: "TOEFL Reading 300",
    href: "/books/toefl-reading-300",
  },
  {
    problem: "Writing 아이디어가 부족하다",
    recommend: "IELTS Writing Task 2",
    href: "/books/ielts-writing-task2",
  },
  {
    problem: "Speaking이 가장 어렵다",
    recommend: "PTE Speaking Intensive",
    href: "/books/pte-speaking-intensive",
  },
  {
    problem: "시험 직전이다",
    recommend: "Full Mock Test Series",
    href: "/mock-tests",
  },
  {
    problem: "어떤 시험을 준비할지 모르겠다",
    recommend: "Talk to C-BRIDGE",
    href: "/consultation",
  },
];

export default function WhatsHoldingYouBack() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Get A Recommendation" title="WHAT'S HOLDING YOUR SCORE BACK?" />
          <Link
            href="/consultation"
            className="shrink-0 rounded-sm bg-purple px-6 py-3 text-xs font-bold tracking-[0.1em] text-ivory transition-colors hover:bg-plum"
          >
            GET A RECOMMENDATION
          </Link>
        </div>

        <div className="mt-12 divide-y divide-purple/10 border-y border-purple/10">
          {items.map((item) => (
            <Link
              key={item.problem}
              href={item.href}
              className="group flex flex-col gap-2 py-6 transition-colors hover:bg-lavender/30 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-4"
            >
              <p className="text-lg font-semibold text-ink md:text-xl">{item.problem}</p>
              <span className="flex items-center gap-2 text-sm font-bold tracking-[0.06em] text-purple">
                {item.recommend}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
