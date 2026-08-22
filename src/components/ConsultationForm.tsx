"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { groupMeta, tests } from "@/lib/tests";
import { tierOrder, tierMeta } from "@/lib/products";

const interestOptions = ["말하기", "듣기", "Writing", "어휘", "모의고사", "전문직 자료", "잘 모르겠음"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const prefillTest = searchParams.get("test") ?? "";
  const prefillTier = searchParams.get("tier") ?? "";

  const [interests, setInterests] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<Status>("idle");

  function toggleInterest(value: string) {
    setInterests((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    interests.forEach((s) => formData.append("interests", s));

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
      <div className="rounded-[20px] border border-purple/15 bg-lavender/30 p-10 text-center">
        <p className="font-serif text-2xl font-bold text-ink">
          Your request has been received.
        </p>
        <p className="mt-2 text-ink/70">We&apos;ll contact you shortly.</p>
        <p className="mt-4 text-sm text-ink/60">
          상담 신청이 정상적으로 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {(prefillTest || prefillTier) && (
        <div className="rounded-[14px] border border-purple/15 bg-lavender/20 px-4 py-3 text-sm text-ink/70">
          문의 내용: <span className="font-semibold text-ink">{prefillTest}</span>
          {prefillTier && <span className="font-semibold text-ink"> · {prefillTier}</span>}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      <Field label="Email" name="email" type="email" required />

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">준비 중인 시험</label>
        <select
          name="test"
          required
          defaultValue={prefillTest}
          className="mt-2 w-full rounded-[14px] border border-purple/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-purple focus:outline-none"
        >
          <option value="" disabled>
            시험을 선택하세요
          </option>
          {Object.values(groupMeta).map((g) => (
            <optgroup key={g.id} label={g.navLabel}>
              {tests
                .filter((t) => t.group === g.id)
                .map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                ))}
            </optgroup>
          ))}
          <option value="기타">기타 / 아직 정하지 못함</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="현재 수준" name="currentLevel" placeholder="예: 처음 응시, IM2, N3" />
        <Field label="목표" name="goal" placeholder="예: 승진 제출용, 고득점" />
      </div>

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">관심 있는 분량</label>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {tierOrder.map((t) => (
            <label
              key={t}
              className="flex cursor-pointer flex-col items-center gap-1 rounded-[14px] border border-purple/20 py-3 text-xs font-bold text-ink/70 transition-colors has-[:checked]:border-purple has-[:checked]:bg-lavender/40 has-[:checked]:text-purple"
            >
              <input
                type="radio"
                name="tier"
                value={tierMeta[t].label}
                defaultChecked={tierMeta[t].label === prefillTier}
                className="sr-only"
              />
              {tierMeta[t].label}
            </label>
          ))}
          <label className="flex cursor-pointer flex-col items-center gap-1 rounded-[14px] border border-purple/20 py-3 text-xs font-bold text-ink/70 transition-colors has-[:checked]:border-purple has-[:checked]:bg-lavender/40 has-[:checked]:text-purple">
            <input type="radio" name="tier" value="잘 모르겠음" className="sr-only" />
            모름
          </label>
        </div>
      </div>

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">관심 있는 자료</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {interestOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleInterest(option)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                interests.has(option)
                  ? "border-purple bg-purple text-ivory"
                  : "border-purple/20 text-ink/70 hover:border-purple/40"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">메시지</label>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-[14px] border border-purple/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-purple focus:outline-none"
          placeholder="추가로 전달하고 싶은 내용을 남겨주세요."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/60">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-purple" />
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
        className="w-full rounded-[14px] bg-purple py-4 text-sm font-bold tracking-[0.04em] text-ivory transition-colors hover:bg-plum disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? "전송 중..." : "상담 신청하기"}
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold tracking-[0.1em] text-ink/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-[14px] border border-purple/20 bg-ivory px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-purple focus:outline-none"
      />
    </div>
  );
}
