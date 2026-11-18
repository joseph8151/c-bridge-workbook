"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Mobile-only floating consult shortcut — a corner-anchored pill (Floating
// Action Button), not a full-width bar, so it reads as a quiet system-level
// shortcut rather than a second header. See .btn-fab in globals.css for the
// shared sizing/radius/color it deliberately keeps in common with the
// header's .btn-nav-cta.
//
// Hidden on the homepage: it's book-specific copy that would float directly
// over the MOCK TEST choice card now that "/" is just the ChoiceGate.
export default function StickyMobileCTA() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <Link href="/consultation" className="btn-fab">
      교재 구성 상담하기 <span aria-hidden="true">→</span>
    </Link>
  );
}
