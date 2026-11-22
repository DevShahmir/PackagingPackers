import Link from "next/link";
import { products } from "@/app/Data/shape";
import BoxVisual from "../ui/BoxVisual";

export default function SplitCollectionSection() {
  const spotlightProducts = products.filter(
    (p) => p.name.includes("Magnetic") || p.name.includes("Mailer")
  ).slice(0, 2);

  return (
    <section className="split-section py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-6 items-stretch">
            {spotlightProducts.map((product) => (
              <article
                key={product.id}
                className="collection-preview-card min-h-[24rem] sm:min-h-[28rem] rounded-3xl border border-gold-500/20 p-4 sm:p-6 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-gold-400">
                    {product.category} / {product.subCategory}
                  </span>
                  <h3 className="font-royal mt-3 text-lg sm:text-2xl text-cream-50 group-hover:text-gold-200 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="h-44 sm:h-52 flex items-center justify-center my-4 border-y border-gold-500/10">
                  <BoxVisual
                    category={product.category}
                    subCategory={product.subCategory}
                    className="w-36 h-28 sm:w-44 sm:h-36 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="border-l border-gold-500/20 pl-3">
                    <span className="block text-[8px] uppercase tracking-[0.16em] text-gold-400/70">From</span>
                    <span className="text-xs font-semibold text-cream-100">${product.price} / unit</span>
                  </div>
                  <div className="border-l border-gold-500/20 pl-3">
                    <span className="block text-[8px] uppercase tracking-[0.16em] text-gold-400/70">Minimum</span>
                    <span className="text-xs font-semibold text-cream-100">{product.minqty} pcs</span>
                  </div>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="flex items-center justify-between border-t border-gold-500/15 pt-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gold-300"
                >
                  <span>See Box Details</span>
                  <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="split-feature-card lg:col-span-6 rounded-3xl border border-gold-500/30 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400">
                Trending Box Suite
              </span>

              <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-normal leading-[1.12]">
                Custom Mailers &{" "}
                <span className="italic font-light text-gold-300">
                  Unboxing Suites
                </span>
              </h2>

              <p className="text-sm text-cream-300/80 font-light leading-relaxed max-w-md">
                Choose a mailer size that fits the order, then ask for bulk pricing and delivery areas for your business.
              </p>

              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 text-xs font-bold uppercase tracking-wider hover:brightness-105 hover:shadow-lg hover:shadow-gold-500/25 transition-all"
                >
                  <span>Shop Mailer Boxes</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="relative mt-8 flex justify-end">
              <div className="w-48 h-36 sm:w-60 sm:h-44 transition-transform duration-500 group-hover:scale-105">
                <BoxVisual
                  category="Corrugated"
                  subCategory="mailerBox"
                  className="w-full h-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
