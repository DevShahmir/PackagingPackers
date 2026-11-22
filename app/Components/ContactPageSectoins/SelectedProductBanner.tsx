import { BoxProduct } from "@/app/Data/types";

interface SelectedProductBannerProps {
  product: BoxProduct | null | undefined;
  onClear?: () => void;
}

export default function SelectedProductBanner({
  product,
  onClear,
}: SelectedProductBannerProps) {
  if (!product) return null;

  return (
    <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-between gap-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-brown-950 flex items-center justify-center text-gold-300 border border-gold-500/20 shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold block">
            Selected Box Option {product.id}
          </span>
          <h4 className="text-sm font-semibold text-cream-50">{product.name}</h4>
        </div>
      </div>

      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className="text-cream-400/70 hover:text-gold-300 p-1.5 rounded-lg hover:bg-gold-500/10 transition cursor-pointer"
          title="Clear product selection"
          aria-label="Clear product selection"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
