"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/app/Data/shape";
import { BoxCategory } from "@/app/Data/types";
import ProductCard from "../ProductCard/ProductCard";
import SectionHeading from "../ui/SectionHeading";

type FilterTab = "ALL" | BoxCategory;

const TABS: { id: FilterTab; label: string }[] = [
  { id: "ALL", label: "All Box Styles" },
  { id: "Rigid", label: "Rigid Boxes" },
  { id: "Corrugated", label: "Mailer Boxes" },
  { id: "Cardboard", label: "Cardboard Boxes" },
];

export default function TopSellersSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");

  const displayedProducts = useMemo(() => {
    if (activeTab === "ALL") {
      const rigidPicks = products.filter((p) => p.category === "Rigid").slice(0, 2);
      const corrugPicks = products.filter((p) => p.category === "Corrugated").slice(0, 2);
      const cardPicks = products.filter((p) => p.category === "Cardboard").slice(0, 2);
      return [...rigidPicks, ...corrugPicks, ...cardPicks];
    }

    return products.filter((p) => p.category === activeTab).slice(0, 6);
  }, [activeTab]);

  return (
    <section className="bg-brown-950 py-16 sm:py-24 border-t border-gold-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="Choose Your Format"
          title="Boxes That Fit the Way You Sell"
          subtitle="Compare rigid, mailer, and cardboard boxes, then ask for the size and bulk pricing that suit your business."
        />

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 font-bold shadow-md shadow-gold-500/20 scale-105"
                    : "bg-brown-900/80 text-cream-200 border border-gold-500/20 hover:bg-gold-500/10 hover:border-gold-400/40 hover:text-gold-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {displayedProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-brown-900/60 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-cream-100 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200 transition-all shadow-md group"
          >
            <span>Compare All Boxes</span>
            <span className="text-gold-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
