import { BoxProduct } from "@/app/Data/types";
import { memo } from "react";
import Link from "next/link";
import BoxVisual from "../ui/BoxVisual";

interface ProductCardProps {
  product: BoxProduct;
}

function ProductCard({ product }: ProductCardProps) {
  const sizesList = Array.isArray(product.sizes)
    ? product.sizes
    : typeof product.sizes === "string"
    ? [product.sizes]
    : [];

  return (
    <div className="product-card-shell royal-card p-3 sm:p-5 rounded-xl sm:rounded-[1.75rem] flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-all duration-300 relative border border-gold-500/15 hover:border-gold-400/40 hover:shadow-xl hover:shadow-gold-500/10 overflow-hidden">
      <span className="product-strike" aria-hidden="true" />
      <span className="product-hover-note" aria-hidden="true">View your options</span>
      <div>
        <Link
          href={`/products/${product.id}`}
          className="relative block aspect-[16/11] w-full rounded-lg sm:rounded-2xl overflow-hidden bg-gradient-to-b from-brown-850 via-brown-900 to-brown-950 border border-gold-500/15 p-2 sm:p-5 mb-2.5 sm:mb-3.5 group-hover:border-gold-400/35 transition-colors cursor-pointer"
        >
          <div className="absolute inset-0 bg-radial from-gold-500/15 via-transparent to-transparent pointer-events-none" />

          <div className="product-hover-float w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <BoxVisual category={product.category} subCategory={product.subCategory} className="w-24 h-20 sm:w-36 sm:h-28 drop-shadow-md" />
          </div>

          <span className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brown-950/90 text-gold-300 border border-gold-400/30 backdrop-blur-sm shadow-sm">
            {product.category}
          </span>

          <span className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 text-[8px] sm:text-[10px] font-medium px-1.5 py-0.5 sm:px-2 rounded-full bg-brown-950/85 text-cream-300 border border-gold-500/20 backdrop-blur-sm max-w-[90px] sm:max-w-none truncate">
            {product.subCategory}
          </span>
        </Link>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-royal text-sm sm:text-base lg:text-lg text-cream-50 font-normal tracking-tight group-hover:text-gold-200 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-[10px] sm:text-xs text-cream-300/80 font-light leading-relaxed line-clamp-2 mb-2 sm:mb-3">
          {product.description}
        </p>

        {sizesList.length > 0 && (
          <div className="mb-2 sm:mb-3.5 space-y-1">
            <div className="flex flex-wrap gap-1">
              {sizesList.slice(0, 1).map((size, i) => (
                <span
                  key={i}
                  className="text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-md bg-brown-950 text-cream-300 border border-gold-500/15 truncate max-w-[110px]"
                >
                  {size}
                </span>
              ))}
              {sizesList.length > 1 && (
                <span className="text-[8px] sm:text-[10px] px-1 py-0.5 rounded-md bg-brown-950 text-cream-400 border border-gold-500/15">
                  +{sizesList.length - 1}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="pt-2 sm:pt-3 border-t border-gold-500/10 space-y-2 sm:space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[8px] sm:text-[10px] text-cream-400 uppercase tracking-wider block font-light">Starting from</span>
            <span className="font-royal text-sm sm:text-xl text-gold-300 font-normal">
              ${product.price.toFixed(2)}
              <span className="text-[9px] sm:text-xs font-sans text-cream-400 font-light"> / box</span>
            </span>
          </div>

          <div className="text-right">
            <span className="text-[8px] sm:text-[10px] text-cream-400 uppercase tracking-wider block font-light">Order volume</span>
            <span className="text-[10px] sm:text-xs font-semibold text-cream-100">{product.minqty} pcs</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex items-center justify-center rounded-full border border-gold-500/30 bg-brown-900/70 py-1.5 sm:py-2 text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-cream-200 transition-all hover:bg-gold-500/15 hover:border-gold-400 hover:text-gold-200 text-center"
          >
            See details
          </Link>
          <Link
            href={`/contact?productId=${product.id}&category=${product.category}&subCategory=${product.subCategory}`}
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 py-1.5 sm:py-2 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-brown-950 transition-all hover:brightness-105 hover:shadow-md hover:shadow-gold-500/20 active:scale-[0.98] text-center"
          >
            Get it Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
