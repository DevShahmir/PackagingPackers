import Link from "next/link";
import WhatsappButton from "../ui/WhatsappButton";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Get a Quote", href: "/contact" },
  { label: "Privacy Policy", href: "/about#privacy" },
];

const CATEGORIES = [
  { label: "Rigid Boxes", href: "/products" },
  { label: "Mailer Boxes", href: "/products" },
  { label: "Cardboard Boxes", href: "/products" },
  { label: "Custom Sizes", href: "/products" },
  { label: "Bulk Pricing", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-brown-950 text-cream-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-500/20">
                <svg
                  className="h-5 w-5 text-brown-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-royal text-xl text-cream-50 font-normal">Packaging Packers</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400 mt-1">
                  Custom Boxes for Growing Brands
                </span>
              </div>
            </Link>

            <p className="text-sm text-cream-300 font-light leading-relaxed max-w-sm">
              Choose custom rigid, mailer, cardboard, and other box styles for restaurants, bakeries, and retail brands.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 text-xs text-gold-300 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                20 Years in Box Manufacturing
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-gold-300 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {CATEGORIES.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    className="text-cream-300 hover:text-gold-300 transition-colors inline-block"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Get Box Pricing
            </h4>
            <div className="space-y-2 text-xs text-cream-300 font-light leading-relaxed">
              <p className="text-gold-300 font-medium">
                <a href="mailto:packagingpackers.100@gmail.com" className="hover:text-gold-200 transition-colors">
                  packagingpackers.100@gmail.com
                </a>
              </p>
              <p className="text-cream-200">
                <a href="tel:+923314834544" className="hover:text-gold-300 transition-colors">
                  +92 331 4834544
                </a>
              </p>
              <p className="text-cream-400 pt-1">Delivery areas across Pakistan</p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold-500/15 border border-gold-400/30 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-gold-200 hover:bg-gold-500 hover:text-brown-950 transition-all duration-300"
              >
                Get My Box Pricing
              </Link>
              <WhatsappButton variant="inline" label="WhatsApp" className="ml-2" />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-grey-400">
          <p>© 2026 Packaging Packers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about#privacy" className="hover:text-gold-300 transition">
              Privacy Policy
            </Link>
            <Link href="/about#privacy" className="hover:text-gold-300 transition">
              Custom Sizes Available
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
