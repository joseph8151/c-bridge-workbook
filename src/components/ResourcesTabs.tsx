"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Exercise =
  | { kind: "text"; lines: string[] }
  | { kind: "type"; prompt: string; target: string }
  | { kind: "choice"; prompt: string; options: string[]; correct: string }
  | { kind: "reveal"; prompt: string; buttonLabel: string; revealText: string };

interface ExamItem {
  title: string;
  exercise: Exercise;
  testName: string;
}

interface ExamTab {
  items: ExamItem[];
  note?: string;
}

const samplesByExam: Record<string, ExamTab> = {
  PTE: {
    items: [
      {
        title: "Repeat Sentence",
        testName: "PTE",
        exercise: {
          kind: "text",
          lines: [
            "You will hear a sentence. Repeat it exactly.",
            "“The library on Maple Street closes at four on Fridays.”",
          ],
        },
      },
      {
        title: "Write from Dictation",
        testName: "PTE",
        exercise: {
          kind: "type",
          prompt: "Listen and type the sentence.",
          target: "Please confirm the appointment before Thursday.",
        },
      },
    ],
    note: "Note: missing one content word loses the item.",
  },
  CELPIP: {
    items: [
      {
        title: "Listening",
        testName: "CELPIP",
        exercise: {
          kind: "choice",
          prompt: "A clerk gives a time, then corrects it. What is the final time?",
          options: ["3:00", "4:00"],
          correct: "4:00",
        },
      },
      {
        title: "Map",
        testName: "CELPIP",
        exercise: {
          kind: "reveal",
          prompt: "Mark the start point. When the direction is corrected, move the mark.",
          buttonLabel: "Check the last point",
          revealText: "The last point is the answer.",
        },
      },
      {
        title: "Email opening",
        testName: "CELPIP",
        exercise: {
          kind: "text",
          lines: ["I am writing to report that the heater in unit 210 has not worked since Monday."],
        },
      },
    ],
  },
  OET: {
    items: [
      {
        title: "Letter opening",
        testName: "OET",
        exercise: {
          kind: "text",
          lines: [
            "Dear Dr Collins,",
            "Thank you for seeing Ms Hale, a 67-year-old woman who presented with increasing shortness of breath.",
          ],
        },
      },
      {
        title: "Speaking cue",
        testName: "OET",
        exercise: {
          kind: "text",
          lines: ["Explain the inhaler steps to the patient. Do not add extra history."],
        },
      },
    ],
  },
  EPTA: {
    items: [
      {
        title: "Readback",
        testName: "EPTA",
        exercise: {
          kind: "type",
          prompt: "Listen and read back the instruction exactly.",
          target: "Climb and maintain flight level two three zero.",
        },
      },
      {
        title: "Instruction",
        testName: "EPTA",
        exercise: {
          kind: "type",
          prompt: "Listen and read back the instruction exactly.",
          target: "Turn left heading three one zero.",
        },
      },
    ],
    note: "Numbers must stay in the readback.",
  },
};

const exams = ["PTE", "CELPIP", "OET", "EPTA"] as const;

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,]$/, "");
}

function TypeCheck({ target }: { target: string }) {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState<boolean | null>(null);

  return (
    <div className="mt-3">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setChecked(null);
        }}
        placeholder="Type the sentence"
        className="w-full border px-3 py-2 text-sm"
        style={{ borderColor: "var(--color-line)", background: "var(--color-ivory)", color: "var(--color-inkstrong)" }}
      />
      <button
        type="button"
        onClick={() => setChecked(normalize(value) === normalize(target))}
        className="btn-primary mt-2 rounded-sm px-4 py-1.5 text-xs font-bold tracking-[0.08em]"
      >
        Check
      </button>
      {checked !== null && (
        <p className="mt-2 text-sm font-bold" style={{ color: checked ? "var(--color-rust)" : "var(--color-inkstrong)" }}>
          {checked ? "Correct" : "· You missed the correction."}
        </p>
      )}
    </div>
  );
}

function ChoiceCheck({ options, correct }: { options: string[]; correct: string }) {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <div className="mt-3">
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setPicked(opt)}
            className="rounded-full border px-4 py-1.5 text-sm font-bold transition-colors"
            style={
              picked === opt
                ? { borderColor: "var(--color-rust)", background: "var(--color-rust)", color: "var(--color-paper)" }
                : { borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }
            }
          >
            {opt}
          </button>
        ))}
      </div>
      {picked && (
        <p className="mt-2 text-sm font-bold" style={{ color: picked === correct ? "var(--color-rust)" : "var(--color-inkstrong)" }}>
          {picked === correct ? "Correct" : "· You missed the correction."}
        </p>
      )}
    </div>
  );
}

function RevealCheck({ buttonLabel, revealText }: { buttonLabel: string; revealText: string }) {
  const [shown, setShown] = useState(false);

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setShown(true)}
        className="btn-primary rounded-sm px-4 py-1.5 text-xs font-bold tracking-[0.08em]"
      >
        {buttonLabel}
      </button>
      {shown && (
        <p className="mt-2 text-sm font-bold" style={{ color: "var(--color-rust)" }}>
          {revealText}
        </p>
      )}
    </div>
  );
}

function ExerciseView({ exercise }: { exercise: Exercise }) {
  if (exercise.kind === "text") {
    return (
      <div className="space-y-1.5">
        {exercise.lines.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-ink/80">
            {line}
          </p>
        ))}
      </div>
    );
  }

  if (exercise.kind === "type") {
    return (
      <div>
        <p className="text-sm leading-relaxed text-ink/80">{exercise.prompt}</p>
        <TypeCheck target={exercise.target} />
      </div>
    );
  }

  if (exercise.kind === "choice") {
    return (
      <div>
        <p className="text-sm leading-relaxed text-ink/80">{exercise.prompt}</p>
        <ChoiceCheck options={exercise.options} correct={exercise.correct} />
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm leading-relaxed text-ink/80">{exercise.prompt}</p>
      <RevealCheck buttonLabel={exercise.buttonLabel} revealText={exercise.revealText} />
    </div>
  );
}

function SampleCard({ item }: { item: ExamItem }) {
  return (
    <div className="card-hover">
      <p className="font-serif text-lg font-bold" style={{ color: "var(--color-inkstrong)" }}>
        {item.title}
      </p>

      <div
        className="relative mt-3 max-h-64 overflow-y-auto border p-5"
        style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}
      >
        <ExerciseView exercise={item.exercise} />
        <span className="pointer-events-none absolute bottom-2 right-3 text-[10px] font-bold tracking-[0.1em] text-ink/15">
          C-BRIDGE
        </span>
      </div>

      <Link
        href={`/consultation?test=${encodeURIComponent(item.testName)}`}
        className="btn-primary mt-4 inline-block rounded-sm px-5 py-2.5 text-xs font-bold tracking-[0.08em]"
      >
        이 호흡으로 구성 상담
      </Link>
    </div>
  );
}

export default function ResourcesTabs() {
  const [active, setActive] = useState<(typeof exams)[number]>("PTE");
  const tab = samplesByExam[active];

  return (
    <div className="mt-8 border" style={{ borderColor: "var(--color-line)" }}>
      <div
        className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-b px-6 pt-6 md:px-8 md:pt-8"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {exams.map((exam) => (
            <button
              key={exam}
              onClick={() => setActive(exam)}
              className="pb-4 font-serif text-2xl font-bold transition-colors md:text-3xl"
              style={{
                color: active === exam ? "var(--color-inkstrong)" : "rgba(42,46,36,0.3)",
                borderBottom: active === exam ? "2px solid var(--color-pistachio)" : "2px solid transparent",
                marginBottom: "-1px",
              }}
            >
              {exam}
            </button>
          ))}
        </div>
        <p className="pb-4 text-sm text-ink/50">전체 파일은 올리지 않습니다.</p>
      </div>

      <div className="grid md:grid-cols-[1fr_1.4fr]">
        <div className="border-b p-6 md:border-b-0 md:border-r md:p-8" style={{ borderColor: "var(--color-line)" }}>
          <div className="img-fade relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/workbook-open.jpg"
              alt="C-BRIDGE 문제집 속지 www.c-bridge.uk"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
          <p className="mt-5 text-sm text-ink/50">
            <Link href="/consultation" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/70">
              나머지 샘플은 상담
            </Link>
          </p>
        </div>

        <div key={active} className="tab-fade space-y-10 p-6 md:p-8">
          {tab.items.map((item) => (
            <SampleCard key={item.title} item={item} />
          ))}
          {tab.note && <p className="text-xs text-ink/40">{tab.note}</p>}
        </div>
      </div>
    </div>
  );
}
