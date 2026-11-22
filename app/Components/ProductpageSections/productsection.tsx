import { BoxProduct } from "@/app/Data/types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductSectionProps {
  items: BoxProduct[];
}

export default function ProductSection({ items }: ProductSectionProps) {
  if (items.length === 0) {
    return (
      <div className="royal-card rounded-[2.5rem] p-16 text-center border-gold-500/15">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 mb-5">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="font-royal text-2xl text-cream-50 font-normal">
          No Box Styles Match That Search
        </h3>
        <p className="text-sm text-cream-300 font-light mt-2 max-w-sm mx-auto leading-relaxed">
          Try another box type or clear your choices to compare the full range.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {items.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
