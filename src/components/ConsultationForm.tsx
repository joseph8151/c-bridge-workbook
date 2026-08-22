"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { getProductBySlug } from "@/lib/products";

const testOptions = ["TOEFL", "IELTS", "PTE", "Duolingo English Test", "TOEFL Junior", "Other"];
const skillOptions = ["Reading", "Listening", "Speaking", "Writing", "Vocabulary", "Mock Test", "Not Sure"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");
  const product = productSlug ? getProductBySlug(productSlug) : undefined;

  const [skills, setSkills] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<Status>("idle");

  function toggleSkill(skill: string) {
    setSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) next.delete(skill);
      else next.add(skill);
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    skills.forEach((s) => formData.append("weakestSkills", s));

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
      <div className="rounded-sm border border-purple/15 bg-lavender/30 p-10 text-center">
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
      {product && (
        <div className="rounded-sm border border-purple/15 bg-lavender/20 px-4 py-3 text-sm text-ink/70">
          문의 상품: <span className="font-semibold text-ink">{product.title}</span>
          <input type="hidden" name="product" value={product.title} />
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      <Field label="Email" name="email" type="email" required />

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label className="text-xs font-bold tracking-[0.1em] text-ink/60">TEST</label>
          <select
            name="test"
            required
            defaultValue=""
            className="mt-2 w-full rounded-sm border border-purple/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-purple focus:outline-none"
          >
            <option value="" disabled>
              Select a test
            </option>
            {testOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <Field label="Target Score" name="targetScore" />
        <Field label="Current Score" name="currentScore" />
      </div>

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">WEAKEST SKILL</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {skillOptions.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSkill(skill)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                skills.has(skill)
                  ? "border-purple bg-purple text-ivory"
                  : "border-purple/20 text-ink/70 hover:border-purple/40"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/60">MESSAGE</label>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-sm border border-purple/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-purple focus:outline-none"
          placeholder="추가로 전달하고 싶은 내용을 남겨주세요."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/60">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-purple" />
        개인정보 수집 및 이용에 동의합니다. (상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.)
      </label>

      {status === "error" && (
        <p className="text-sm text-ielts">
          전송 중 문제가 발생했습니다. {siteConfig.phone}로 전화 문의 부탁드립니다.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-purple py-4 text-sm font-bold tracking-[0.1em] text-ivory transition-colors hover:bg-plum disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? "SENDING..." : "REQUEST CONSULTATION"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-bold tracking-[0.1em] text-ink/60">{label.toUpperCase()}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-purple/20 bg-ivory px-3.5 py-2.5 text-sm text-ink focus:border-purple focus:outline-none"
      />
    </div>
  );
}
