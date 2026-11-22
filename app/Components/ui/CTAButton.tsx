import Link from "next/link";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  label,
  href,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "playful-button inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 font-bold shadow-lg shadow-gold-500/15 hover:shadow-xl hover:shadow-gold-400/30 hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.98]"
      : "border border-gold-400/40 text-cream-100 bg-brown-900/50 backdrop-blur-sm hover:bg-gold-500/15 hover:border-gold-300 hover:text-gold-200 hover:-translate-y-0.5 active:scale-[0.98]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{label}</span>
      <span className="button-arrow" aria-hidden="true">&rarr;</span>
    </Link>
  );
}
