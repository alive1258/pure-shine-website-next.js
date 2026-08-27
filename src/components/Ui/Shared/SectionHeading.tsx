interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignClass}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
          light ? "bg-white/10 text-gold-400" : "bg-brand-50 text-brand-600"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed ${
            light ? "text-white/70" : "text-brand-900/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
