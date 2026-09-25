"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Hero sections animate immediately via CSS (.hero-fade-up / .hero-scale-in) and
// are never given [data-reveal] — they are "is-in" from the start by construction.

const BATCH_SIZE = 8;

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
};

function scheduleIdle(cb: () => void) {
  const w = window as IdleWindow;
  if (typeof w.requestIdleCallback === "function") {
    w.requestIdleCallback(cb, { timeout: 1000 });
  } else {
    setTimeout(cb, 200);
  }
}

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;

    function setup() {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
      );
      if (targets.length === 0) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        targets.forEach((el) => el.classList.add("is-in"));
        return;
      }

      const onReveal: IntersectionObserverCallback = (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io!.unobserve(el);
          requestAnimationFrame(() => {
            el.style.willChange = "transform, opacity";
            el.classList.add("is-in");
            const onEnd = (ev: TransitionEvent) => {
              if (ev.target !== el) return;
              el.style.willChange = "";
              el.removeEventListener("transitionend", onEnd);
            };
            el.addEventListener("transitionend", onEnd);
          });
        }
      };

      io = new IntersectionObserver(onReveal, {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      });

      // One layout read here, at setup time — never inside the observer callback —
      // to split first-screen targets (observed right away) from below-fold ones
      // (observed later, in idle-time batches of BATCH_SIZE).
      const viewportH = window.innerHeight;
      const firstScreen: HTMLElement[] = [];
      const rest: HTMLElement[] = [];
      targets.forEach((el) => {
        (el.getBoundingClientRect().top < viewportH ? firstScreen : rest).push(el);
      });

      firstScreen.forEach((el) => io!.observe(el));

      const queue = rest.slice();
      function observeNextBatch() {
        if (!io) return;
        const batch = queue.splice(0, BATCH_SIZE);
        batch.forEach((el) => io!.observe(el));
        if (queue.length > 0) scheduleIdle(observeNextBatch);
      }
      if (queue.length > 0) scheduleIdle(observeNextBatch);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setup, { once: true });
    } else {
      setup();
    }

    const onPagehide = () => io?.disconnect();
    window.addEventListener("pagehide", onPagehide);

    return () => {
      document.removeEventListener("DOMContentLoaded", setup);
      window.removeEventListener("pagehide", onPagehide);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
