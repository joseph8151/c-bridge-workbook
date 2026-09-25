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
          className="mt-3 break-keep font-serif text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:mt-4 md:text-[44px]"
          style={{ color: "var(--color-ink)" }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-3 max-w-[650px] break-keep text-[15px] leading-[1.6] md:mt-4 md:text-lg md:leading-relaxed ${align === "center" ? "mx-auto" : "text-left"}`}
          style={{ color: "var(--color-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
