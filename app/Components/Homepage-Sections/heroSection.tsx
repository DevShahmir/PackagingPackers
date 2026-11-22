"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import BoxVisual from "../ui/BoxVisual";
import WhatsappButton from "../ui/WhatsappButton";
import { BoxCategory, AnySubCategory } from "@/app/Data/types";

interface HeroSlide {
  id: number;
  badge: string;
  category: BoxCategory;
  subCategory: AnySubCategory;
  categoryLabel: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  price: string;
  minQty: string;
  exploreHref: string;
  quoteHref: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Premium Unboxing",
    category: "Rigid",
    subCategory: "MagneticClosureBox",
    categoryLabel: "Rigid Magnetic",
    tagline: "Turn First Looks Into Lifelong Customers",
    titlePrefix: "Packaging Engineered to Elevate Your ",
    titleHighlight: "Brand Value.",
    description:
      "Stop losing customers to generic packaging. We craft luxury rigid boxes in custom dimensions that make your product feel premium the moment it's held — with low 100-pc minimums and direct bulk savings.",
    price: "$4.25",
    minQty: "100 pcs",
    exploreHref: "/products",
    quoteHref: "/contact?productId=2&category=Rigid&subCategory=MagneticClosureBox",
  },
  {
    id: 2,
    badge: "Heavy-Duty Shipping",
    category: "Corrugated",
    subCategory: "mailerBox",
    categoryLabel: "Corrugated Mailer",
    tagline: "Zero Damaged Deliveries",
    titlePrefix: "Protect Every Order & Deliver a Flawless ",
    titleHighlight: "Unboxing.",
    description:
      "Crushed boxes hurt your brand reputation. Our custom corrugated mailers protect your merchandise in transit while creating an unforgettable doorstep unboxing experience for bakeries, retail, and e-commerce brands.",
    price: "$0.95",
    minQty: "200 pcs",
    exploreHref: "/products",
    quoteHref: "/contact?productId=15&category=Corrugated&subCategory=mailerBox",
  },
  {
    id: 3,
    badge: "Retail Shelf Impact",
    category: "Cardboard",
    subCategory: "drawerBoxes",
    categoryLabel: "Slide Drawer Box",
    tagline: "Effortless Custom Sizing",
    titlePrefix: "Stand Out on the Shelf & Simplify Your ",
    titleHighlight: "Packaging.",
    description:
      "We take the complexity out of custom packaging. Give us your product dimensions, and we'll engineer precision slide drawers and folding cartons tailored to fit your items perfectly with no wasted space.",
    price: "$1.30",
    minQty: "250 pcs",
    exploreHref: "/products",
    quoteHref: "/contact?productId=11&category=Cardboard&subCategory=drawerBoxes",
  },
];

function SlideContent({ slide }: { slide: HeroSlide }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
      <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
        <div className="royal-card relative w-full max-w-md sm:max-w-lg aspect-[4/3] sm:aspect-square p-6 sm:p-12 flex flex-col items-center justify-center border-gold-400/25 rounded-3xl group overflow-hidden">
          <div className="absolute inset-0 bg-radial from-gold-500/20 via-transparent to-transparent pointer-events-none" />

          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex flex-wrap gap-2 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-brown-950/95 text-gold-300 border border-gold-400/35 backdrop-blur-sm shadow-sm">
              {slide.badge}
            </span>
            <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-brown-950/85 text-cream-300 border border-gold-500/20 backdrop-blur-sm">
              {slide.categoryLabel}
            </span>
          </div>

          <div className="w-56 h-48 sm:w-64 sm:h-56 lg:w-72 lg:h-64 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <BoxVisual
              category={slide.category}
              subCategory={slide.subCategory}
              className="w-full h-full drop-shadow-2xl"
            />
          </div>

          <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-brown-950/90 border border-gold-500/25 backdrop-blur-md text-xs shadow-lg z-10">
            <div>
              <span className="text-cream-400 font-light block text-[10px] uppercase tracking-wider">Starting at</span>
              <span className="font-royal text-base sm:text-lg text-gold-300 font-normal">{slide.price} / unit</span>
            </div>
            <div className="text-right">
              <span className="text-cream-400 font-light block text-[10px] uppercase tracking-wider">Minimum Order</span>
              <span className="text-cream-100 font-semibold">{slide.minQty}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
          <span className="w-8 h-[1px] bg-gold-400/60" />
          <span>{slide.tagline}</span>
          <span className="w-8 h-[1px] bg-gold-400/60" />
        </div>

        <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cream-50 font-normal tracking-tight leading-[1.12]">
          {slide.titlePrefix}
          <span className="italic font-light text-gold-300">
            {slide.titleHighlight}
          </span>
        </h2>

        <p className="text-sm sm:text-base text-cream-300/90 font-light leading-relaxed max-w-lg">
          {slide.description}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
          <Link
            href={slide.exploreHref}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-105 hover:shadow-lg hover:shadow-gold-500/25 active:scale-95 transition-all duration-300"
          >
            Shop All Boxes
          </Link>
          <Link
            href={slide.quoteHref}
            className="px-8 py-3.5 rounded-full border border-gold-400/40 bg-brown-900/50 text-cream-100 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-gold-500/10 hover:border-gold-300 hover:text-gold-200 active:scale-95 transition-all duration-300"
          >
            Get Box Pricing
          </Link>
          <WhatsappButton variant="inline" label="WhatsApp" />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      aria-label="Featured Packaging Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-brown-950/35 border-b border-gold-500/15"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full bg-gold-500/10 blur-[150px] pointer-events-none" />

      <div className="w-full relative z-10 py-10 sm:py-14">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 px-8 sm:px-14 lg:px-20"
            >
              <div className="mx-auto max-w-7xl">
                <SlideContent slide={slide} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                current === idx
                  ? "h-2.5 w-8 bg-gradient-to-r from-gold-400 to-gold-500 shadow-sm shadow-gold-500/30"
                  : "h-2.5 w-2.5 bg-gold-500/30 hover:bg-gold-400/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
