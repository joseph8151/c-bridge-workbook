import Link from "next/link";

export interface ExamIndexItem {
  name: string;
  subtitle: string;
  context: string;
  href: string;
}

export default function ExamIndex({ items }: { items: ExamIndexItem[] }) {
  return (
    <div className="grid border-t md:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
      {items.map((item, i) => (
        <Link
          key={item.name}
          href={item.href}
          className={`card-hover group flex items-baseline gap-6 border-b py-8 md:py-10 ${
            i % 2 === 1 ? "md:border-l md:pl-10" : "md:pr-10"
          }`}
          style={{ borderColor: "var(--color-border)" }}
        >
          <span
            className="shrink-0 font-serif text-2xl font-bold"
            style={{ color: "var(--color-bronze)" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="min-w-0 flex-1">
            <span
              className="block break-keep font-serif text-2xl font-bold tracking-[-0.01em] md:text-[28px]"
              style={{ color: "var(--color-ink)" }}
            >
              {item.name}
            </span>
            <span className="mt-1.5 block text-sm" style={{ color: "var(--color-muted)" }}>
              {item.subtitle}
            </span>
            <span className="mt-0.5 block text-xs tracking-[0.04em]" style={{ color: "var(--color-muted)", opacity: 0.75 }}>
              {item.context}
            </span>
          </span>
          <span
            className="shrink-0 text-xs font-medium tracking-[0.1em]"
            style={{ color: "var(--color-ink)" }}
          >
            Explore <span className="arrow-slide inline-block">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
