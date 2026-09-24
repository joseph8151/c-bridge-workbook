import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-paper/95 backdrop-blur md:hidden">
      <Link
        href="/consultation"
        className="flex items-center justify-center py-4 text-sm font-bold tracking-[0.08em] text-paper"
        style={{ background: "var(--color-rust)" }}
      >
        상담
      </Link>
    </div>
  );
}
