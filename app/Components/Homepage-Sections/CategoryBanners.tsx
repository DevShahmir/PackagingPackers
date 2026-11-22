import Link from "next/link";
import BoxVisual from "../ui/BoxVisual";

export default function CategoryBanners() {
  const banners = [
    {
      subtitle: "For a stronger first impression",
      title: "Rigid Boxes",
      price: "$4.25",
      category: "Rigid" as const,
      subCategory: "MagneticClosureBox" as const,
      href: "/products",
      tag: "Brand Presentation",
    },
    {
      subtitle: "For delivered orders",
      title: "Mailer Boxes",
      price: "$0.95",
      category: "Corrugated" as const,
      subCategory: "mailerBox" as const,
      href: "/products",
      tag: "Delivery Ready",
    },
    {
      subtitle: "For retail products",
      title: "Cardboard Boxes",
      price: "$0.42",
      category: "Cardboard" as const,
      subCategory: "autoLockBoxes" as const,
      href: "/products",
      tag: "Custom Sizes",
    },
    {
      subtitle: "For a considered unboxing",
      title: "Specialty Boxes",
      price: "$1.30",
      category: "Cardboard" as const,
      subCategory: "drawerBoxes" as const,
      href: "/products",
      tag: "Many Styles",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-brown-950/20 border-y border-gold-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {banners.map((b, idx) => (
            <Link
              key={idx}
              href={b.href}
              className="p-4 sm:p-5 rounded-none flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 border-t border-gold-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent group-hover:via-gold-400 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300">
                    {b.tag}
                  </span>
                  <span className="text-[10px] text-cream-400 font-light">
                    From <span className="font-semibold text-gold-300">{b.price}</span>
                  </span>
                </div>

                <h3 className="font-royal text-sm sm:text-base text-cream-50 font-normal group-hover:text-gold-200 transition-colors line-clamp-1">
                  {b.title}
                </h3>
                <p className="text-[10px] text-cream-400 font-light">
                  {b.subtitle}
                </p>

                <div className="w-full h-24 sm:h-28 rounded-xl border-y border-gold-500/15 flex items-center justify-center p-2 my-3 group-hover:border-gold-400/30 transition-colors">
                  <BoxVisual
                    category={b.category}
                    subCategory={b.subCategory}
                    className="w-20 h-16 sm:w-24 sm:h-20 drop-shadow-md transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-gold-500/10 flex items-center justify-between text-[10px] sm:text-xs">
                <span className="font-bold uppercase tracking-wider text-gold-400 group-hover:text-gold-200 transition-colors">
                  See Box Options
                </span>
                <span className="text-gold-300 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
