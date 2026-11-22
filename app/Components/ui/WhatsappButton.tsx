



interface WhatsappButtonProps {
  variant?: "fixed" | "inline";
  className?: string;
  label?: string;
  message?: string;
}

export default function WhatsappButton({
  variant = "fixed",
  className = "",
  label = "Chat on WhatsApp",
  message = "Hi! I would like to get a quote for custom boxes.",
}: WhatsappButtonProps) {
  const whatsappUrl = `https://wa.me/923314834544?text=${encodeURIComponent(message)}`;

  const fixedClasses =
    "fixed bottom-5 left-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 hover:bg-[#20BA5A] active:scale-95";

  const inlineClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#20BA5A] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20 active:scale-95";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "fixed" ? fixedClasses : inlineClasses} ${className}`}
      aria-label={variant === "fixed" ? "Chat with Packaging Packers on WhatsApp" : undefined}
      title="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={variant === "fixed" ? "h-7 w-7" : "h-5 w-5"}
        aria-hidden="true"
      >
        <path d="M12.04 2a9.84 9.84 0 0 0-8.4 15l-1.1 4.02 4.12-1.08A9.85 9.85 0 1 0 12.04 2Zm0 17.92a8 8 0 0 1-4.07-1.11l-.29-.17-2.44.64.65-2.38-.19-.3A7.96 7.96 0 1 1 12.04 19.92Zm4.38-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      {variant === "inline" && <span>{label}</span>}
    </a>
  );
}