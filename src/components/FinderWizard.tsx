"use client";

import { useState } from "react";
import Link from "next/link";
import { finderGroups } from "@/lib/finderTests";

const weakAreaOptions = ["듣기", "읽기", "쓰기", "말하기", "선택 안 함"];
const volumeOptions = ["200P", "300P"];

const questions = [
  "어떤 시험을 준비하고 있나요?",
  "목표 점수 또는 등급은?",
  "집중하고 싶은 영역은?",
  "원하는 교재 분량은?",
];

export default function FinderWizard() {
  const [step, setStep] = useState(1);
  const [testName, setTestName] = useState("");
  const [testHref, setTestHref] = useState("");
  const [goal, setGoal] = useState("");
  const [weakArea, setWeakArea] = useState("");
  const [volume, setVolume] = useState("200P");

  const totalSteps = 4;
  const done = step > totalSteps;

  function handleTestSelect(value: string) {
    const found = finderGroups.flatMap((g) => g.items).find((i) => i.name === value);
    setTestName(value);
    setTestHref(found?.href ?? "/exams");
  }

  const canGoNext = step !== 1 || testName !== "";

  if (done) {
    const consultHref = `/consultation?test=${encodeURIComponent(testName)}${
      goal ? `&goal=${encodeURIComponent(goal)}` : ""
    }${weakArea && weakArea !== "선택 안 함" ? `&weakArea=${encodeURIComponent(weakArea)}` : ""}`;

    return (
      <div className="border p-6 text-center min-[361px]:p-8 md:p-12" style={{ borderColor: "var(--color-line)" }}>
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          결과
        </p>
        <p className="mt-5 font-serif text-2xl font-bold md:text-3xl" style={{ color: "var(--color-inkstrong)" }}>
          {testName}
        </p>
        <div className="mx-auto mt-6 max-w-sm space-y-1.5 text-sm text-ink/60">
          {goal && <p>목표: {goal}</p>}
          {weakArea && weakArea !== "선택 안 함" && <p>집중 영역: {weakArea}</p>}
          <p>희망 분량: {volume}</p>
        </div>

        <div className="mt-8 flex flex-col gap-2.5 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:justify-center min-[430px]:gap-4">
          <Link href={testHref} className="btn-primary justify-center rounded-sm px-7 text-sm font-bold">
            {testName} 교재 페이지 보기
          </Link>
          <Link
            href={consultHref}
            className="inline-flex min-h-[48px] items-center justify-center border px-7 text-sm font-medium tracking-[0.06em]"
            style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
          >
            바로 상담하기
          </Link>
        </div>

        <button
          type="button"
          onClick={() => {
            setStep(1);
            setTestName("");
            setTestHref("");
            setGoal("");
            setWeakArea("");
            setVolume("200P");
          }}
          className="mt-6 text-xs font-bold text-ink/40 underline decoration-ink/20 underline-offset-4 hover:text-ink/70"
        >
          처음부터 다시 하기
        </button>
      </div>
    );
  }

  return (
    <div className="border p-5 min-[361px]:p-8 md:p-10" style={{ borderColor: "var(--color-border)" }}>
      <div className="h-[2px] w-full" style={{ background: "var(--color-border)" }}>
        <div
          className="h-full transition-[width] duration-500"
          style={{ width: `${(step / totalSteps) * 100}%`, background: "var(--color-bronze)" }}
        />
      </div>
      <p className="mt-4 text-xs font-medium tracking-[0.16em]" style={{ color: "var(--color-muted)" }}>
        STEP {String(step).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
      </p>
      <h2
        className="mt-3 break-keep font-serif text-xl font-bold leading-snug md:text-2xl"
        style={{ color: "var(--color-ink)" }}
      >
        {questions[step - 1]}
      </h2>

      <div className="mt-8">
        {step === 1 && (
          <select
            value={testName}
            onChange={(e) => handleTestSelect(e.target.value)}
            className="w-full rounded-none border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
          >
            <option value="" disabled>
              시험을 선택하세요
            </option>
            {finderGroups.map((g) => (
              <optgroup key={g.label} label={g.label}>
                {g.items.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        )}

        {step === 2 && (
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="예: PTE 65+, IELTS 6.5, CLB 9 (건너뛰어도 됩니다)"
            className="w-full rounded-none border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
          />
        )}

        {step === 3 && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {weakAreaOptions.map((w) => (
              <label
                key={w}
                className="flex cursor-pointer items-center justify-center rounded-none border border-ink/20 py-3 text-xs font-bold text-ink/70 transition-colors has-[:checked]:border-[var(--color-rust)] has-[:checked]:text-[var(--color-rust)]"
              >
                <input
                  type="radio"
                  name="weakArea"
                  value={w}
                  checked={weakArea === w}
                  onChange={() => setWeakArea(w)}
                  className="sr-only"
                />
                {w}
              </label>
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="grid grid-cols-2 gap-2">
            {volumeOptions.map((v) => (
              <label
                key={v}
                className="flex cursor-pointer items-center justify-center rounded-none border border-ink/20 py-4 text-sm font-bold text-ink/70 transition-colors has-[:checked]:border-[var(--color-rust)] has-[:checked]:text-[var(--color-rust)]"
              >
                <input
                  type="radio"
                  name="volume"
                  value={v}
                  checked={volume === v}
                  onChange={() => setVolume(v)}
                  className="sr-only"
                />
                {v}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="text-xs font-bold text-ink/40 underline decoration-ink/20 underline-offset-4 hover:text-ink/70 disabled:opacity-0"
        >
          ← 이전
        </button>
        <button
          type="button"
          onClick={() => canGoNext && setStep((s) => s + 1)}
          disabled={!canGoNext}
          className="btn-primary rounded-sm px-7 text-sm font-bold disabled:opacity-40"
        >
          {step === totalSteps ? "결과 보기" : "다음"}
        </button>
      </div>
    </div>
  );
}
