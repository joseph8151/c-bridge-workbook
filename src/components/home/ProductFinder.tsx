"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import ProductCard from "../ProductCard";
import { products } from "@/lib/products";
import { Level, TestId } from "@/lib/testMeta";

const testOptions: { id: TestId; label: string }[] = [
  { id: "TOEFL", label: "TOEFL" },
  { id: "IELTS", label: "IELTS" },
  { id: "PTE", label: "PTE" },
  { id: "DET", label: "DET" },
];

const skillOptions = ["Reading", "Listening", "Speaking", "Writing"];

const levelOptions: { id: Level; label: string }[] = [
  { id: "FOUNDATION", label: "Foundation" },
  { id: "TARGET", label: "Target" },
  { id: "ADVANCED", label: "Advanced" },
];

export default function ProductFinder() {
  const [test, setTest] = useState<TestId | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const [level, setLevel] = useState<Level | null>(null);

  const step = !test ? 1 : !skill ? 2 : !level ? 3 : 4;

  const recommendations = useMemo(() => {
    if (!test || !skill || !level) return [];
    const bySkill = (p: (typeof products)[number]) =>
      p.skill.toLowerCase().includes(skill.toLowerCase());

    const exact = products.filter((p) => p.test === test && bySkill(p) && p.level === level);
    if (exact.length) return exact.slice(0, 3);

    const sameSkill = products.filter((p) => p.test === test && bySkill(p));
    if (sameSkill.length) return sameSkill.slice(0, 3);

    return products.filter((p) => p.test === test).slice(0, 3);
  }, [test, skill, level]);

  function reset() {
    setTest(null);
    setSkill(null);
    setLevel(null);
  }

  return (
    <section className="bg-lavender/30 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Product Finder"
          title="WHAT ARE YOU PREPARING FOR?"
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-sm border border-purple/10 bg-ivory p-6 md:p-10">
          {step < 4 ? (
            <div className="animate-fade-up">
              <p className="text-xs font-bold tracking-[0.14em] text-purple/60">
                STEP {step} OF 3
              </p>
              {step === 1 && (
                <>
                  <p className="mt-3 font-serif text-2xl font-bold text-ink">
                    What are you preparing for?
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {testOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setTest(opt.id)}
                        className="rounded-sm border border-purple/20 bg-lavender/20 py-4 text-sm font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <p className="mt-3 font-serif text-2xl font-bold text-ink">
                    Which skill is hardest?
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {skillOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSkill(opt)}
                        className="rounded-sm border border-purple/20 bg-lavender/20 py-4 text-sm font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <p className="mt-3 font-serif text-2xl font-bold text-ink">What&apos;s your level?</p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {levelOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setLevel(opt.id)}
                        className="rounded-sm border border-purple/20 bg-lavender/20 py-4 text-sm font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-serif text-2xl font-bold text-ink">Recommended for you</p>
                <button
                  onClick={reset}
                  className="text-xs font-bold tracking-[0.08em] text-purple hover:underline"
                >
                  START OVER
                </button>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
              {recommendations.length === 0 && (
                <div className="mt-6 rounded-sm border border-purple/15 bg-lavender/20 p-8 text-center">
                  <p className="text-sm text-ink/60">
                    딱 맞는 문제집을 찾지 못했어요. 상담을 통해 직접 추천받아 보세요.
                  </p>
                  <Link
                    href="/consultation"
                    className="mt-4 inline-block rounded-sm bg-purple px-6 py-3 text-xs font-bold tracking-[0.1em] text-ivory"
                  >
                    TALK TO C-BRIDGE
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
