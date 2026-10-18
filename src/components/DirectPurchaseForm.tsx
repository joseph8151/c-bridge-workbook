"use client";

import { useState, FormEvent } from "react";
import { finderGroups } from "@/lib/finderTests";
import { tierMeta, tierOrder } from "@/lib/products";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "submitting" | "success" | "error";

export default function DirectPurchaseForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [tier, setTier] = useState(tierOrder[0]);

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
      <div className="border border-ink/15 bg-paper p-6 min-[361px]:p-10 text-center">
        <p className="font-serif text-2xl font-bold text-ink">입금 확인 요청이 접수되었습니다.</p>
        <p className="mt-2 text-sm text-ink/60">{siteConfig.shippingTurnaround}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="formType" value="direct_purchase" />

      <Field label="입금자명" name="depositorName" required placeholder="입금하신 분 성함" />
      <Field label="이메일 (교재 발송용)" name="email" type="email" required placeholder="교재를 받으실 이메일 주소" />

      <div>
        <label htmlFor="dp-test" className="text-xs font-bold tracking-[0.1em] text-ink/60">
          시험
        </label>
        <select
          id="dp-test"
          name="test"
          required
          defaultValue=""
          className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
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
      </div>

      <div>
        <span className="text-xs font-bold tracking-[0.1em] text-ink/60">구성</span>
        <div role="radiogroup" aria-label="구성" className="mt-3 grid grid-cols-2 gap-2">
          {tierOrder.map((t) => {
            const m = tierMeta[t];
            return (
              <label
                key={t}
                className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-none border border-ink/20 py-3 text-sm font-bold text-ink/70 transition-colors has-[:checked]:border-[var(--color-rust)] has-[:checked]:text-[var(--color-rust)]"
              >
                <input
                  type="radio"
                  name="volume"
                  value={m.label}
                  checked={tier === t}
                  onChange={() => setTier(t)}
                  className="sr-only"
                />
                <span>{m.label}</span>
                <span className="text-xs font-medium opacity-70">₩{m.price.toLocaleString()}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="dp-message" className="text-xs font-bold tracking-[0.1em] text-ink/60">
          메시지 (선택)
        </label>
        <textarea
          id="dp-message"
          name="message"
          rows={3}
          className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
          placeholder="목표, 취약 영역 등 전달하고 싶은 내용을 남겨주세요."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/60">
        <input type="checkbox" required className="mt-0.5 h-4 w-4" style={{ accentColor: "var(--color-rust)" }} />
        입금자명과 이메일 주소가 정확한지 확인했으며, 개인정보 수집 및 이용에 동의합니다. (발송
        목적으로만 사용되며, 발송 완료 후 즉시 파기됩니다.)
      </label>

      {status === "error" && (
        <p className="text-sm text-chinese">
          전송 중 문제가 발생했습니다. {siteConfig.phone}로 문자 부탁드립니다.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full rounded-sm py-4 text-sm font-bold tracking-[0.04em] disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? "보내는 중" : "입금 확인 요청"}
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
  const id = `dp-${name}`;
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
        className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
      />
    </div>
  );
}
