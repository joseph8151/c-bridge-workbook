export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      {title && (
        <h2
          className="mt-4 break-keep font-serif text-[32px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[44px]"
          style={{ color: "var(--color-ink)" }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-4 max-w-[650px] break-keep text-base leading-relaxed md:text-lg ${align === "center" ? "mx-auto" : ""}`}
          style={{ color: "var(--color-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
