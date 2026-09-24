"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/config";

const testOptions = [
  "PTE",
  "CELPIP",
  "OET Nursing",
  "OET Medicine",
  "OET Pharmacy",
  "OET Physiotherapy",
  "OET Dentistry",
  "EPTA",
  "TOLES",
  "TOPEC",
  "기타",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const prefillTest = searchParams.get("test") ?? "";

  const [status, setStatus] = useState<Status>("idle");

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
      <div className="rounded-[20px] border border-ink/15 bg-paper p-10 text-center">
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
        <div className="rounded-[14px] border border-ink/15 bg-paper px-4 py-3 text-sm text-ink/70">
          문의 내용: <span className="font-semibold text-ink">{prefillTest}</span>
        </div>
      )}

      <Field label="이름" name="name" required />
      <Field label="이메일" name="email" type="email" required />

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">시험</label>
        <select
          name="test"
          required
          defaultValue={prefillTest}
          className="mt-2 w-full rounded-[14px] border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
        >
          <option value="" disabled>
            시험을 선택하세요
          </option>
          {testOptions.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <Field label="목표" name="goal" placeholder="예: 승진 제출용, 고득점" />

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">메시지</label>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-[14px] border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
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
        className="w-full rounded-[14px] py-4 text-sm font-bold tracking-[0.04em] text-paper transition-all hover:brightness-90 disabled:opacity-60 sm:w-auto sm:px-10"
        style={{ background: "var(--color-rust)" }}
      >
        {status === "submitting" ? "전송 중..." : "상담 신청"}
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
        className="mt-2 w-full rounded-[14px] border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
      />
    </div>
  );
}
