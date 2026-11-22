"use client";

import { useState, useMemo } from "react";
import { products } from "@/app/Data/shape";
import { BoxCategory, AnySubCategory } from "@/app/Data/types";
import Filtersecction from "./Filtersecction";
import ProductSection from "./productsection";

export default function ProductsView() {
  const [category, setCategory] = useState<"ALL" | BoxCategory>("ALL");
  const [subCategory, setSubCategory] = useState<"ALL" | AnySubCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const visible = useMemo(() => {
    return products.filter((p) => {
      if (category !== "ALL" && p.category !== category) return false;

      if (subCategory !== "ALL" && p.subCategory !== subCategory) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesSub = p.subCategory.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesSub) return false;
      }

      return true;
    });
  }, [category, subCategory, searchQuery]);

  const handleCategoryChange = (newCat: "ALL" | BoxCategory) => {
    setCategory(newCat);
    setSubCategory("ALL");
  };

  return (
    <div className="w-full space-y-10">
      <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center justify-between pb-8 border-b border-gold-500/10">
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by box type or product name..."
            className="w-full pl-11 pr-8 py-3 rounded-full border border-gold-500/20 bg-brown-900/80 text-sm text-cream-100 placeholder:text-cream-400/60 focus:border-gold-400 focus:outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cream-400 hover:text-cream cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2.5 text-xs text-cream-300 self-end sm:self-auto font-light">
          <span>Available choices:</span>
          <span className="font-royal text-sm text-gold-300 font-normal px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/25">
            {visible.length} of {products.length} boxes
          </span>
        </div>
      </div>

      <Filtersecction
        category={category}
        onCategoryChange={handleCategoryChange}
        subCategory={subCategory}
        onSubCategoryChange={setSubCategory}
      />

      <ProductSection items={visible} />
    </div>
  );
}
