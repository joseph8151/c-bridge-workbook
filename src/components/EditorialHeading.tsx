type Size = "xl" | "lg" | "md";

const SIZE_CLASSES: Record<Size, string> = {
  xl: "text-[42px] md:text-[72px] lg:text-[88px] leading-[1.05]",
  lg: "text-[36px] md:text-[52px] lg:text-[64px] leading-[1.1]",
  md: "text-[28px] md:text-[36px] leading-[1.2]",
};

export default function EditorialHeading({
  as: Tag = "h2",
  size = "lg",
  children,
  className = "",
  color,
}: {
  as?: "h1" | "h2" | "h3";
  size?: Size;
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <Tag
      className={`break-keep font-serif font-bold tracking-[-0.02em] ${SIZE_CLASSES[size]} ${className}`}
      style={{ color: color ?? "var(--color-ink)" }}
    >
      {children}
    </Tag>
  );
}
