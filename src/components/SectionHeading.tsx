interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs md:text-sm font-bold tracking-[0.28em] uppercase ${
            dark ? "text-gold" : "text-purple"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 break-keep font-serif font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.3] text-balance ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            dark ? "text-lavender" : "text-ink/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
