"use client";

import SectionHeading from "../ui/SectionHeading";
import FinishCard, { FinishData } from "./FinishCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FINISHES: FinishData[] = [
  {
    title: "Branded Surface Details",
    tactile: "Make the First Look Clear",
    description:
      "Use the outer surface to make your brand easier to recognise when customers receive the box.",
    idealFor: "Brand names, marks, and product details",
    swatchGradient: "bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700",
    badge: "Brand Choice",
  },
  {
    title: "A More Considered Finish",
    tactile: "A Clearer Product Presentation",
    description:
      "Choose a finish that supports the way you want customers to see and handle the package.",
    idealFor: "Rigid boxes and retail packaging",
    swatchGradient: "bg-gradient-to-r from-stone-800 via-stone-700 to-stone-900",
    badge: "Presentation Choice",
  },
  {
    title: "Distinctive Box Details",
    tactile: "Help Your Brand Stand Out",
    description:
      "Add clear brand details when the box needs to feel different from a standard format.",
    idealFor: "Retail brands and product launches",
    swatchGradient: "bg-gradient-to-r from-brown-700 via-gold-600 to-brown-800",
    badge: "Brand Detail",
  },
  {
    title: "Contrast for Product Details",
    tactile: "Guide the Customer's Eye",
    description:
      "Use contrast to help important product or brand details stand out on the box.",
    idealFor: "Names, marks, and key product details",
    swatchGradient: "bg-gradient-to-r from-brown-900 via-stone-900 to-gold-950",
    badge: "Clear Detail",
  },
  {
    title: "Quiet Brand Marking",
    tactile: "A More Restrained Look",
    description:
      "Keep the box simple while giving your brand a defined place on the surface.",
    idealFor: "Simple names and clean brand layouts",
    swatchGradient: "bg-gradient-to-r from-neutral-800 via-stone-850 to-neutral-900",
    badge: "Simple Choice",
  },
  {
    title: "Interior Product Presentation",
    tactile: "A More Organised Unboxing",
    description:
      "Ask about an interior arrangement when the product needs a more organised presentation inside the box.",
    idealFor: "Products that need an arranged interior",
    swatchGradient: "bg-gradient-to-r from-yellow-700 via-amber-800 to-amber-950",
    badge: "Interior Choice",
  },
];

export default function FinishesShowcase() {
  return (
    <section className="py-24 bg-brown-950 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Box Presentation Options"
          title="Details That Help Customers Notice Your Brand"
          subtitle="Choose how your box should present the product, brand name, and key details."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-10 sm:mb-14">
          {FINISHES.map((finish, idx) => (
            <FinishCard key={finish.title} finish={finish} index={idx} />
          ))}
        </div>

        <div className="royal-card p-6 sm:p-8 rounded-3xl border-gold-400/25 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-brown-900/90 via-brown-850/90 to-brown-900/90">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 block mb-1">
              Custom Box Options
            </span>
            <h4 className="font-royal text-xl sm:text-2xl text-cream-50 font-normal">
              Need a box style or size that is not shown here?
            </h4>
            <p className="text-xs text-cream-300 font-light mt-1 max-w-2xl">
              Tell us what you sell, the size you need, and your order volume so we can discuss the available options.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500/15 border border-gold-400/30 text-xs font-bold uppercase tracking-wider text-gold-300 hover:bg-gold-500 hover:text-brown-950 transition-all shrink-0"
          >
            <span>Ask About Options</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
