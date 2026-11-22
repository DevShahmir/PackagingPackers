interface ContactSuccessCardProps {
  name: string;
  category: string;
  subCategory: string;
  onReset: () => void;
}

export default function ContactSuccessCard({
  name,
  category,
  subCategory,
  onReset,
}: ContactSuccessCardProps) {
  return (
    <div className="royal-card p-10 rounded-[2.5rem] border-gold-500/25 text-center space-y-6 animate-fade-in">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 className="font-royal text-3xl text-cream-50 font-normal">
        Your Request Is Ready
      </h3>

      <p className="text-sm text-cream-300 font-light max-w-md mx-auto leading-relaxed">
        Thank you, <span className="text-gold-300 font-medium">{name}</span>. We have your request for{" "}
        <span className="text-gold-300 font-medium">
          {category || "Custom"} {subCategory ? `(${subCategory})` : ""}
        </span>{" "}
        and will use your size, volume, and delivery area to prepare the next pricing step.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brown-900 border border-gold-400/30 text-cream-100 hover:text-gold-200 transition cursor-pointer"
      >
        Start Another Request
      </button>
    </div>
  );
}
