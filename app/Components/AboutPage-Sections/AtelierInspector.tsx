"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import InspectorDetailCard, { ArchetypeData } from "./InspectorDetailCard";

const ARCHETYPES: ArchetypeData[] = [
  {
    id: "magnetic",
    name: "Magnetic Rigid Box",
    niche: "Rigid Boxes for Retail Brands",
    headline: "Give Customers a Stronger First Look.",
    description:
      "Rigid boxes give retail brands a clear, structured way to present products. Ask for the size and order volume that fit your business.",
    benefits: [
      "A structured format for a stronger product presentation",
      "Custom dimensions based on the product inside",
      "A box style suited to retail and brand presentation",
      "Bulk pricing for planned order volumes",
    ],
    specs: {
      material: "Rigid box format",
      closure: "Choose your preferred style",
      durability: "Plan around your product size",
      ecoRating: "Ask about available options",
    },
    metric: {
      value: "Custom",
      label: "Size and pricing options",
    },
    accentColor: "gold",
  },
  {
    id: "mailer",
    name: "DTC Corrugated Mailer",
    niche: "Mailer Boxes for Delivered Orders",
    headline: "Keep the Delivery Experience on Brand.",
    description:
      "Mailer boxes give restaurants, bakeries, and retail brands a practical format for sending products while keeping the presentation connected to the brand.",
    benefits: [
      "Choose a size that fits the delivered product",
      "A clear format for restaurants, bakeries, and retail brands",
      "Custom sizes for different order formats",
      "Bulk pricing for regular packaging needs",
    ],
    specs: {
      material: "Mailer box format",
      closure: "Choose your preferred style",
      durability: "Plan around your product size",
      ecoRating: "Ask about available options",
    },
    metric: {
      value: "Custom",
      label: "Sizes for delivery orders",
    },
    accentColor: "gold",
  },
  {
    id: "carton",
    name: "Folding Tuck Carton",
    niche: "Cardboard Boxes for Retail Products",
    headline: "Make Product Details Easier to Notice.",
    description:
      "Cardboard boxes give retail brands a flexible way to present products. Choose a format and size that fit the product and order volume.",
    benefits: [
      "A flexible format for retail products",
      "Custom dimensions based on the product inside",
      "A clear way to organise product presentation",
      "Bulk pricing for planned orders",
    ],
    specs: {
      material: "Cardboard box format",
      closure: "Choose your preferred style",
      durability: "Plan around your product size",
      ecoRating: "Ask about available options",
    },
    metric: {
      value: "Custom",
      label: "Format and size options",
    },
    accentColor: "gold",
  },
  {
    id: "inserts",
    name: "Velvet & Foam Insert",
    niche: "Specialty Box Options",
    headline: "Organise the Product Experience.",
    description:
      "Some products need a more considered arrangement inside the box. Share the product and size so we can discuss suitable options.",
    benefits: [
      "Custom sizing based on the product inside",
      "A more organised interior presentation",
      "Options for different product formats",
      "Bulk pricing for planned orders",
    ],
    specs: {
      material: "Interior presentation option",
      closure: "Choose your preferred style",
      durability: "Plan around your product size",
      ecoRating: "Ask about available options",
    },
    metric: {
      value: "Custom",
      label: "Interior size options",
    },
    accentColor: "gold",
  },
];

export default function AtelierInspector() {
  const [activeId, setActiveId] = useState(ARCHETYPES[0].id);

  const currentArchetype =
    ARCHETYPES.find((a) => a.id === activeId) || ARCHETYPES[0];

  return (
    <section className="py-24 bg-brown-950 relative border-t border-gold-500/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Compare Box Styles"
          title="See Which Format Fits Your Product"
          subtitle="Compare rigid, mailer, cardboard, and specialty box options before requesting custom sizes and bulk pricing."
        />

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {ARCHETYPES.map((arch) => {
            const isActive = arch.id === activeId;
            return (
              <button
                key={arch.id}
                type="button"
                onClick={() => setActiveId(arch.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-brown-950 font-bold"
                    : "text-cream-300 hover:text-gold-200 bg-brown-900/60 border border-gold-500/15 hover:border-gold-400/30"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeArchetypeTab"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 shadow-md shadow-gold-500/20"
                  />
                )}
                <span className="relative z-10">{arch.name}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <InspectorDetailCard key={currentArchetype.id} data={currentArchetype} />
        </AnimatePresence>
      </div>
    </section>
  );
}
