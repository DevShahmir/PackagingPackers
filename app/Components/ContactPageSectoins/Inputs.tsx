"use client";

import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  BoxCategory,
  BOX_CATEGORIES,
  SUBCATEGORIES_BY_CATEGORY,
} from "@/app/Data/types";
import { products } from "@/app/Data/shape";

import SelectedProductBanner from "./SelectedProductBanner";
import CategorySelector from "./CategorySelector";
import ContactFormFields from "./ContactFormFields";
import ContactSuccessCard from "./ContactSuccessCard";

function ContactFormInner() {
  const searchParams = useSearchParams();

  const queryCategory = searchParams.get("category") as BoxCategory | null;
  const querySubCategory = searchParams.get("subCategory");
  const queryProductId = searchParams.get("productId");

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<BoxCategory | "">(
    queryCategory && BOX_CATEGORIES.includes(queryCategory) ? queryCategory : ""
  );
  const [subCategory, setSubCategory] = useState<string>(querySubCategory || "");
  const [quantity, setQuantity] = useState("500");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProductDismissed, setIsProductDismissed] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const selectedProduct = useMemo(() => {
    if (isProductDismissed) return null;
    if (!category || !subCategory) return null;

    if (queryProductId) {
      const urlProduct = products.find((p) => p.id === Number(queryProductId));
      if (
        urlProduct &&
        urlProduct.category === category &&
        urlProduct.subCategory === subCategory
      ) {
        return urlProduct;
      }
    }

    return (
      products.find(
        (p) => p.category === category && p.subCategory === subCategory
      ) || null
    );
  }, [category, subCategory, queryProductId, isProductDismissed]);

  const handleCategorySelect = (selectedCat: BoxCategory) => {
    setCategory(selectedCat);
    setIsProductDismissed(false);

    const validSubs = SUBCATEGORIES_BY_CATEGORY[selectedCat] as string[];
    if (!validSubs.includes(subCategory)) {
      setSubCategory("");
    }
  };

  const handleSubCategorySelect = (selectedSub: string) => {
    setSubCategory(selectedSub);
    setIsProductDismissed(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <ContactSuccessCard
        name={name}
        category={category}
        subCategory={subCategory}
        onReset={() => setIsSubmitted(false)}
      />
    );
  }

  return (
    <div className="royal-card p-4 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border-gold-500/25 space-y-8">
      <div>
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400 block mb-1">
          Custom Box Request
        </span>
        <h3 className="font-royal text-2xl sm:text-3xl text-cream-50 font-normal">
          Request Box Pricing
        </h3>
      </div>

      <SelectedProductBanner
        product={selectedProduct}
        onClear={() => setIsProductDismissed(true)}
      />

      <CategorySelector
        category={category}
        subCategory={subCategory}
        onSelectCategory={handleCategorySelect}
        onSelectSubCategory={handleSubCategorySelect}
      />

      <ContactFormFields
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
        quantity={quantity}
        setQuantity={setQuantity}
        message={message}
        setMessage={setMessage}
        nameInputRef={nameInputRef}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default function ContactInputs() {
  return (
    <Suspense
      fallback={
        <div className="royal-card p-10 rounded-[2.5rem] border-gold-500/20 text-center text-cream-300">
          Loading quote form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
