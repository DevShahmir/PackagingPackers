import Link from "next/link";
import { products } from "@/app/Data/shape";
import { BoxProduct } from "@/app/Data/types";
import ProductCard from "@/app/Components/ProductCard/ProductCard";

export interface RelatedProductsProps {
  current: BoxProduct;
  limit?: number;
}

function getRelated(current: BoxProduct, limit: number): BoxProduct[] {
  const others = products.filter((p) => p.id !== current.id);

  const sameStyle = others.filter(
    (p) => p.category === current.category && p.subCategory === current.subCategory
  );
  const sameFamily = others.filter(
    (p) => p.category === current.category && p.subCategory !== current.subCategory
  );
  const differentFamily = others.filter(
    (p) => p.category !== current.category
  );

  return [...sameStyle, ...sameFamily, ...differentFamily].slice(0, limit);
}

export default function RelatedProducts({ current, limit = 4 }: RelatedProductsProps) {
  const related = getRelated(current, limit);

  if (related.length === 0) return null;

  return (
    <section className="mt-20 sm:mt-28 border-t border-gold-500/15 pt-12 sm:pt-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-400">
            <span className="h-1 w-1 rounded-full bg-gold-400" />
            More Box Options
          </span>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl text-cream-50 font-normal mt-1.5">
            Compare Another <span className="italic font-light text-gold-300">Box Style</span>
          </h2>
          <p className="text-xs sm:text-sm text-cream-300/80 font-light mt-1.5 max-w-lg leading-relaxed">
            Compare more formats and ask for custom sizing that fits your product.
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 hover:text-gold-200 transition-colors group self-start sm:self-end pb-1"
        >
          <span>Compare All Boxes</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
