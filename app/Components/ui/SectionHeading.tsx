interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3.5 mb-14 ${alignment}`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-400 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 backdrop-blur-sm">
          <span className="h-1 w-1 rounded-full bg-gold-400" />
          {label}
          <span className="h-1 w-1 rounded-full bg-gold-400" />
        </span>
      )}

      <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-cream-50 leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-cream-300 font-light">
          {subtitle}
        </p>
      )}

      <div className="flex items-center gap-3 mt-2 opacity-75">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
        <span className="text-[10px] text-gold-400">◆</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
      </div>
    </div>
  );
}
