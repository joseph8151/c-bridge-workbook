import type { Metadata } from "next";
import ResourcesTabs from "@/components/ResourcesTabs";

export const metadata: Metadata = {
  title: "무료자료 | C-BRIDGE",
  description: "PTE, CELPIP, OET, EPTA 샘플 문항을 미리 확인하세요.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 min-[361px]:px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            무료자료
          </p>
          <h1
            className="mt-5 break-keep font-serif text-4xl font-bold leading-[1.35] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            본책의 호흡만 보여 드립니다.
          </h1>

          <div className="mt-10 border-t" style={{ borderColor: "var(--color-line)" }} />

          <ResourcesTabs />
        </div>
      </section>

      <section className="bg-paper py-10">
        <div className="mx-auto max-w-[1200px] px-5 text-center md:px-10">
          <p className="text-sm text-ink/50">300페이지를 고르면 직전 16쪽과 모의 1회가 붙습니다.</p>
        </div>
      </section>
    </>
  );
}
