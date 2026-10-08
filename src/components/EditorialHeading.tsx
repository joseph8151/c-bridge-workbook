type Size = "xl" | "lg" | "md";

const SIZE_CLASSES: Record<Size, string> = {
  xl: "text-[26px] md:text-[32px] leading-[1.2]",
  lg: "text-[24px] md:text-[30px] leading-[1.2]",
  md: "text-[22px] md:text-[26px] leading-[1.25]",
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
      className={`break-keep font-medium tracking-[-0.03em] ${SIZE_CLASSES[size]} ${className}`}
      style={{ color: color ?? "var(--color-ink)" }}
    >
      {children}
    </Tag>
  );
}
