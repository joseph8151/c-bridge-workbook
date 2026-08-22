"use client";

import { useState } from "react";
import { studyPlans } from "@/lib/studyPlans";

export default function StudyPlanViewer() {
  const [selected, setSelected] = useState(studyPlans[1].id);
  const plan = studyPlans.find((p) => p.id === selected)!;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {studyPlans.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${
              selected === p.id
                ? "border-purple bg-purple text-ivory"
                : "border-purple/20 text-ink/70 hover:border-purple/40"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-[20px] border border-purple/10 bg-white/60 p-8">
        <p className="font-serif text-xl font-bold text-ink">{plan.label} 학습 계획</p>
        <div className="mt-6 space-y-3">
          {plan.weeks.map((w) => (
            <div key={w.period} className="flex items-center gap-4 rounded-[14px] bg-lavender/20 px-5 py-3.5">
              <span className="shrink-0 font-serif text-sm font-bold text-purple">{w.period}</span>
              <span className="text-sm text-ink/75">{w.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
