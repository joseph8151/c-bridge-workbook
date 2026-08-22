import Link from "next/link";
import BookCover from "../BookCover";
import { testMeta } from "@/lib/testMeta";

const mocks = [
  { test: "TOEFL" as const, label: "TOEFL Full Mock" },
  { test: "IELTS" as const, label: "IELTS Academic Mock" },
  { test: "PTE" as const, label: "PTE Full Mock" },
  { test: "DET" as const, label: "DET Full Mock" },
];

export default function MockTestSection() {
  return (
    <section className="relative overflow-hidden bg-plum py-20 md:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-gold">Full Mock Tests</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-[1.05] text-ivory sm:text-5xl md:text-6xl text-balance">
              PRACTICE LIKE
              <br />
              IT&apos;S TEST DAY.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-lavender/85 md:text-lg">
              시험 전에 가장 필요한 것은 새로운 이론이 아니라
              <br className="hidden sm:block" />
              실제 시험과 같은 연습입니다.
            </p>
            <Link
              href="/mock-tests"
              className="mt-9 inline-flex rounded-sm bg-gold px-8 py-4 text-sm font-bold tracking-[0.1em] text-plum transition-transform hover:-translate-y-0.5"
            >
              VIEW MOCK TESTS
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 justify-items-center sm:gap-8">
            {mocks.map((mock, i) => {
              const meta = testMeta[mock.test];
              return (
                <BookCover
                  key={mock.test}
                  test={meta.name.split(" ")[0]}
                  skill="Full Mock Test"
                  tag="Practice Series"
                  color={meta.color}
                  size="lg"
                  tilt={i % 2 === 0 ? -4 : 4}
                  className={i % 2 === 1 ? "mt-8" : ""}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
