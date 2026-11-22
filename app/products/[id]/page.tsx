import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/app/Data/shape";
import CTAButton from "@/app/Components/ui/CTAButton";
import RelatedProducts from "@/app/Components/ProductCard/ReliventCards";
import BoxVisual from "@/app/Components/ui/BoxVisual";
import WhatsappButton from "@/app/Components/ui/WhatsappButton";

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { id } = await params;
  const numId = parseInt(id, 10);
  const product = products.find((p) => p.id === numId);

  if (!product) {
    notFound();
  }

  const sizesList = Array.isArray(product.sizes)
    ? product.sizes
    : typeof product.sizes === "string"
    ? [product.sizes]
    : [];

  return (
    <div className="py-16 sm:py-24 bg-brown-950 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Royal Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-cream-400 mb-8 sm:mb-12 font-light">
          <Link href="/" className="hover:text-gold-300 transition-colors">
            Home
          </Link>
          <span className="text-gold-500/30">/</span>
          <Link href="/products" className="hover:text-gold-300 transition-colors">
            Products
          </Link>
          <span className="text-gold-500/30">/</span>
          <Link
            href="/products"
            className="text-gold-300/90 hover:text-gold-200 transition-colors font-medium"
          >
            {product.category}
          </Link>
          <span className="text-gold-500/30">/</span>
          <span className="text-cream-100 font-medium truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Curved Showcase Frame */}
          <div className="md:col-span-5 royal-card rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 flex flex-col items-center justify-center aspect-square relative border-gold-400/25 bg-gradient-to-br from-brown-850 via-brown-900 to-brown-950 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-radial from-gold-500/15 via-transparent to-transparent pointer-events-none" />
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <BoxVisual
                category={product.category}
                subCategory={product.subCategory}
                className="w-48 h-44 sm:w-56 sm:h-52 drop-shadow-2xl"
              />
            </div>

            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex flex-wrap gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-brown-950/95 text-gold-300 border border-gold-400/35 backdrop-blur-sm shadow-sm">
                {product.category}
              </span>
              <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-brown-950/85 text-cream-300 border border-gold-500/20 backdrop-blur-sm">
                {product.subCategory}
              </span>
            </div>
          </div>

          {/* Right Column: Royal Specs & Order Details */}
          <div className="md:col-span-7 space-y-6 sm:space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                Box option {product.id}
              </div>
              <h1 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-normal text-cream-50 leading-[1.14]">
                {product.name}
              </h1>
              <p className="mt-3.5 text-sm sm:text-base text-cream-300/90 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price & MOQ Box */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl sm:rounded-3xl royal-card border-gold-500/20">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-cream-400 block font-light">Starting from</span>
                <span className="font-royal text-2xl sm:text-3xl text-gold-300 font-normal mt-1 block">
                  ${product.price.toFixed(2)}
                  <span className="text-xs font-sans text-cream-400 font-light"> / unit</span>
                </span>
              </div>
              <div className="border-l border-gold-500/10 pl-4 sm:pl-6">
                <span className="text-[10px] uppercase tracking-wider text-cream-400 block font-light">Order volume</span>
                <span className="font-royal text-2xl sm:text-3xl text-cream-50 font-normal mt-1 block">
                  {product.minqty}
                  <span className="text-xs font-sans text-cream-400 font-light"> units</span>
                </span>
              </div>
            </div>

            {/* Available Formats / Sizes (Pills) */}
            {sizesList.length > 0 && (
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400 block mb-2.5">
                  Available Sizes
                </span>
                <div className="flex flex-wrap gap-2">
                  {sizesList.map((size, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3.5 py-1.5 rounded-full bg-brown-900/90 text-cream-200 border border-gold-500/20 hover:border-gold-400/40 transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3.5 sm:gap-4">
              <CTAButton
                href={`/contact?productId=${product.id}&category=${product.category}&subCategory=${product.subCategory}`}
                label="Get Box Pricing"
                variant="primary"
              />
              <WhatsappButton
                variant="inline"
                label="WhatsApp"
                message={`Hi! I would like a quote for ${product.name}.`}
              />
              <CTAButton href="/products" label="Back to Products" variant="secondary" />
            </div>

            {/* Feature Perks */}
            <div className="border-t border-gold-500/10 pt-6 grid grid-cols-3 gap-3 sm:gap-4 text-center text-xs text-cream-400 font-light">
              <div className="p-2.5 rounded-xl bg-brown-900/40 border border-gold-500/10">
                <span className="text-gold-300 font-medium block text-xs sm:text-sm">Custom sizing</span>
                <span className="text-[11px] text-cream-400/80 mt-0.5 block">Ask for your dimensions</span>
              </div>
              <div className="p-2.5 rounded-xl bg-brown-900/40 border border-gold-500/10">
                <span className="text-gold-300 font-medium block text-xs sm:text-sm">Bulk pricing</span>
                <span className="text-[11px] text-cream-400/80 mt-0.5 block">Plan your order volume</span>
              </div>
              <div className="p-2.5 rounded-xl bg-brown-900/40 border border-gold-500/10">
                <span className="text-gold-300 font-medium block text-xs sm:text-sm">Delivery areas</span>
                <span className="text-[11px] text-cream-400/80 mt-0.5 block">Tell us where you need it</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section (Properly Contained) */}
        <RelatedProducts current={product} />
      </div>
    </div>
  );
}
