"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StartTestButton({ slug, label = "응시 시작" }: { slug: string; label?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleStart() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/mock-test/${slug}/start`, { method: "POST" });
      const data = (await res.json().catch(() => ({}))) as { attemptId?: string; error?: string };
      if (!res.ok || !data.attemptId) {
        setError(data.error ?? "응시를 시작할 수 없습니다.");
        setLoading(false);
        return;
      }
      router.push(`/mock-test-centre/${slug}/attempt/${data.attemptId}`);
    } catch {
      setError("네트워크 오류가 발생했습니다.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleStart}
        disabled={loading}
        className="btn-primary rounded-sm px-6 py-3 text-sm font-bold tracking-[0.04em] disabled:opacity-60"
      >
        {loading ? "준비 중" : label}
      </button>
      {error && <p className="mt-2 text-xs text-chinese">{error}</p>}
    </div>
  );
}
