const titleSizeClasses = {
  sm: "text-[20px] md:text-[26px]",
  md: "text-[24px] md:text-[30px]",
  lg: "text-[26px] md:text-[32px]",
} as const;

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  className = "",
}: {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  size?: keyof typeof titleSizeClasses;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      {title && (
        <h2
          className={`mt-3 break-keep font-medium leading-[1.2] tracking-[-0.03em] md:mt-4 ${titleSizeClasses[size]}`}
          style={{ color: "var(--color-ink)" }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-3 max-w-[650px] break-keep text-base leading-[1.7] md:mt-4 ${align === "center" ? "mx-auto" : "text-left"}`}
          style={{ color: "var(--color-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
