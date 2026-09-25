"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/config";

const testGroups: { label: string; items: string[] }[] = [
  {
    label: "이민 · 유학",
    items: ["PTE Academic", "PTE Academic UKVI", "PTE Core", "CELPIP", "MET (미시간영어)", "IELTS General", "IELTS for UKVI"],
  },
  {
    label: "의료 영어",
    items: [
      "OET Nursing",
      "OET Medicine",
      "OET Pharmacy",
      "OET Physiotherapy",
      "OET Dentistry",
      "OET Radiography",
      "OET Occupational Therapy",
      "CELBAN (셀반)",
    ],
  },
  { label: "간호 면허", items: ["NCLEX"] },
  { label: "항공", items: ["EPTA", "ELPAC (항공)", "Aviation English (FAA)", "ICAO English"] },
  { label: "기업 말하기", items: ["SPA", "Versant"] },
  { label: "법률", items: ["TOLES"] },
  { label: "일본 간호", items: ["TOPEC"] },
  { label: "기타", items: ["기타"] },
];

const weakAreaOptions = ["듣기", "읽기", "쓰기", "말하기"];
const volumeOptions = ["200P", "300P"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const prefillTest = searchParams.get("test") ?? "";
  const prefillGoal = searchParams.get("goal") ?? "";
  const prefillWeakArea = searchParams.get("weakArea") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [test, setTest] = useState(prefillTest);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);

    const isPlaceholder = siteConfig.formspreeEndpoint.includes("YOUR_FORMSPREE_ENDPOINT");

    if (isPlaceholder) {
      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink/15 bg-paper p-10 text-center">
        <p className="font-serif text-2xl font-bold text-ink">
          상담 신청이 접수되었습니다.
        </p>
        <p className="mt-2 text-sm text-ink/60">빠른 시간 내에 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {prefillTest && (
        <div className="rounded-none border border-ink/15 bg-paper px-4 py-3 text-sm text-ink/70">
          문의 내용: <span className="font-semibold text-ink">{prefillTest}</span>
        </div>
      )}

      <Field label="이름" name="name" required />
      <Field label="이메일" name="email" type="email" required />

      <div>
        <label htmlFor="cf-test" className="text-xs font-bold tracking-[0.1em] text-ink/60">
          시험
        </label>
        <select
          id="cf-test"
          name="test"
          required
          value={test}
          onChange={(e) => setTest(e.target.value)}
          className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
        >
          <option value="" disabled>
            시험을 선택하세요
          </option>
          {testGroups.map((g) => (
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

      <Field label="목표" name="goal" placeholder="예: 승진 제출용, 고득점" defaultValue={prefillGoal} />

      <div>
        <span className="text-xs font-bold tracking-[0.1em] text-ink/60">약한 영역</span>
        <div role="radiogroup" aria-label="약한 영역" className="mt-3 grid grid-cols-4 gap-2">
          {weakAreaOptions.map((w) => (
            <label
              key={w}
              className="flex cursor-pointer items-center justify-center rounded-none border border-ink/20 py-3 text-xs font-bold text-ink/70 transition-colors has-[:checked]:border-[var(--color-rust)] has-[:checked]:text-[var(--color-rust)]"
            >
              <input
                type="radio"
                name="weakArea"
                value={w}
                defaultChecked={w === prefillWeakArea}
                className="sr-only"
              />
              {w}
            </label>
          ))}
        </div>
      </div>

      <div>
        <span className="text-xs font-bold tracking-[0.1em] text-ink/60">분량</span>
        <div role="radiogroup" aria-label="분량" className="mt-3 grid grid-cols-2 gap-2">
          {volumeOptions.map((v, i) => (
            <label
              key={v}
              className="flex cursor-pointer items-center justify-center rounded-none border border-ink/20 py-3 text-xs font-bold text-ink/70 transition-colors has-[:checked]:border-[var(--color-rust)] has-[:checked]:text-[var(--color-rust)]"
            >
              <input type="radio" name="volume" value={v} defaultChecked={i === 0} className="sr-only" />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="text-xs font-bold tracking-[0.1em] text-ink/60">
          메시지
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
          placeholder="추가로 전달하고 싶은 내용을 남겨주세요."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/60">
        <input type="checkbox" required className="mt-0.5 h-4 w-4" style={{ accentColor: "var(--color-rust)" }} />
        개인정보 수집 및 이용에 동의합니다. (상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.)
      </label>

      {status === "error" && (
        <p className="text-sm text-chinese">
          전송 중 문제가 발생했습니다. {siteConfig.phone}로 전화 문의 부탁드립니다.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full rounded-sm py-4 text-sm font-bold tracking-[0.04em] disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? "보내는 중" : "상담 신청"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  const id = `cf-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold tracking-[0.1em] text-ink/60">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
      />
    </div>
  );
}
