"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload =
      mode === "signup"
        ? {
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name"),
          }
        : {
            email: formData.get("email"),
            password: formData.get("password"),
          };

    try {
      const res = await fetch(`/api/auth/${mode === "signup" ? "signup" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "요청 처리 중 문제가 발생했습니다.");
        setSubmitting(false);
        return;
      }
      router.push("/mock-test-centre");
      router.refresh();
    } catch {
      setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {mode === "signup" && (
        <div>
          <label htmlFor="af-name" className="text-xs font-bold tracking-[0.1em] text-ink/60">
            이름
          </label>
          <input
            id="af-name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
          />
        </div>
      )}

      <div>
        <label htmlFor="af-email" className="text-xs font-bold tracking-[0.1em] text-ink/60">
          이메일
        </label>
        <input
          id="af-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="af-password" className="text-xs font-bold tracking-[0.1em] text-ink/60">
          비밀번호
        </label>
        <input
          id="af-password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          placeholder={mode === "signup" ? "8자 이상" : undefined}
          className="mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[var(--color-rust)] focus:outline-none"
        />
      </div>

      {error && <p className="text-sm text-chinese">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full rounded-sm py-4 text-sm font-bold tracking-[0.04em] disabled:opacity-60"
      >
        {submitting ? "처리 중" : mode === "signup" ? "회원가입" : "로그인"}
      </button>
    </form>
  );
}
