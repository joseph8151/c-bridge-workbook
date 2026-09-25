"use client";

import { useState } from "react";

export default function RecommendTestSelect({
  groups,
}: {
  groups: { label: string; items: string[] }[];
}) {
  const [test, setTest] = useState("");

  return (
    <div>
      <label className="text-xs font-bold tracking-[0.1em] text-ink/60">시험</label>
      <select
        name="test"
        required
        value={test}
        onChange={(e) => setTest(e.target.value)}
        className="mt-2 w-full rounded-none border border-ink/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
      >
        <option value="" disabled>
          시험을 선택하세요
        </option>
        {groups.map((g) => (
          <optgroup key={g.label} label={g.label}>
            {g.items.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {test === "NCLEX" && (
        <p className="mt-2 text-xs leading-relaxed text-ink/50">
          영어시험이 아닙니다. 유형 연습서입니다.
        </p>
      )}
    </div>
  );
}
