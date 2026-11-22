"use client";

import { BoxCategory, AnySubCategory, SUBCATEGORIES_BY_CATEGORY } from "@/app/Data/types";


export interface Filtersectionprops {
  category: "ALL" | BoxCategory;
  onCategoryChange: (cat: "ALL" | BoxCategory) => void;

  subCategory: "ALL" | AnySubCategory;
  onSubCategoryChange: (sub: "ALL" | AnySubCategory) => void;
}

const CATEGORIES: ("ALL" | BoxCategory)[] = [
  "ALL",
  "Rigid",
  "Corrugated",
  "Cardboard",
];

export default function Filtersection({
  category,
  onCategoryChange,
  subCategory,
  onSubCategoryChange,
}: Filtersectionprops) {
  return (
    <div className="py-2 space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Choose a Box Type
          </h2>
          {category !== "ALL" && (
            <button
              type="button"
              onClick={() => onCategoryChange("ALL")}
              className="text-xs text-cream-300 hover:text-gold-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>✕</span>
              <span>Clear Choices</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = category === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 font-bold shadow-md shadow-gold-500/20 scale-105"
                    : "bg-brown-900/80 text-cream-200 border border-gold-500/15 hover:bg-gold-500/10 hover:border-gold-400/35 hover:text-gold-200"
                }`}
              >
                {cat === "ALL" ? "All Box Types" : cat === "Corrugated" ? "Mailer Boxes" : `${cat} Boxes`}
              </button>
            );
          })}
        </div>
      </div>

      {category !== "ALL" && (
        <div className="royal-card p-6 sm:p-7 rounded-[2rem] border-gold-500/15 animate-fade-in">
          <div className="flex items-center justify-between mb-3.5">
            <h3 className="text-[11px] font-bold text-gold-400 uppercase tracking-[0.2em]">
              {category} Options
            </h3>
            <span className="text-[10px] text-cream-400 font-light">
              Narrow your choice
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => onSubCategoryChange("ALL")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                subCategory === "ALL"
                  ? "bg-gold-400 text-brown-950 font-bold shadow-sm"
                  : "bg-brown-950/70 text-cream-300 border border-gold-500/15 hover:bg-gold-500/10 hover:text-gold-200 hover:border-gold-400/30"
              }`}
            >
              All {category} Options
            </button>

            {SUBCATEGORIES_BY_CATEGORY[category].map((sub) => {
              const isActive = subCategory === sub;

              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => onSubCategoryChange(sub)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gold-400 text-brown-950 font-bold shadow-sm"
                      : "bg-brown-950/70 text-cream-300 border border-gold-500/15 hover:bg-gold-500/10 hover:text-gold-200 hover:border-gold-400/30"
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
