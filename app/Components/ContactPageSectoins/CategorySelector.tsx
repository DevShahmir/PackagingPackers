import { BoxCategory, BOX_CATEGORIES, SUBCATEGORIES_BY_CATEGORY } from "@/app/Data/types";

interface CategorySelectorProps {
  category: BoxCategory | "";
  subCategory: string;
  onSelectCategory: (cat: BoxCategory) => void;
  onSelectSubCategory: (sub: string) => void;
}

export default function CategorySelector({
  category,
  subCategory,
  onSelectCategory,
  onSelectSubCategory,
}: CategorySelectorProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-cream-200 block">
          1. Choose a Box Type <span className="text-gold-400">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {BOX_CATEGORIES.map((cat) => {
            const isSelected = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`py-3 px-4 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border text-center ${
                  isSelected
                    ? "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 border-gold-400 shadow-md shadow-gold-500/20 scale-[1.02]"
                    : "bg-brown-950/70 text-cream-200 border-gold-500/20 hover:border-gold-400/50 hover:bg-gold-500/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {category && (
        <div className="space-y-3 p-5 rounded-2xl bg-brown-950/60 border border-gold-500/20 animate-fade-in">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              2. Select a {category} Style <span className="text-gold-400">*</span>
            </label>
            <span className="text-[10px] text-cream-400">Choose an option</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {SUBCATEGORIES_BY_CATEGORY[category].map((sub) => {
              const isSubSelected = subCategory === sub;
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => onSelectSubCategory(sub)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                    isSubSelected
                      ? "bg-gold-400 text-brown-950 font-bold border-gold-400 shadow-sm scale-105"
                      : "bg-brown-900 text-cream-300 border-gold-500/15 hover:border-gold-400/40 hover:text-gold-200"
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
