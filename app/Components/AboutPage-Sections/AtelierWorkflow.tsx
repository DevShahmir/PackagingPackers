"use client";

import { useState } from "react";
import { Compass, Box, Printer, Truck, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import WorkflowStepItem, { StepData } from "./WorkflowStepItem";

const STEPS: StepData[] = [
  {
    step: "01",
    title: "Share the Product and Size",
    duration: "Start here",
    description:
      "Tell us what you sell and the dimensions the box needs to fit. This gives the quote conversation a useful starting point.",
    deliverables: ["Product details", "Custom dimensions", "Box style options"],
    icon: <Compass className="w-5 h-5" />,
  },
  {
    step: "02",
    title: "Choose the Box Format",
    duration: "Compare options",
    description:
      "Compare rigid, mailer, cardboard, and other box styles based on the product and customer experience you want.",
    deliverables: ["Rigid boxes", "Mailer boxes", "Cardboard boxes"],
    icon: <Box className="w-5 h-5" />,
  },
  {
    step: "03",
    title: "Plan the Order Volume",
    duration: "Price the order",
    description:
      "Share the quantity your business expects to buy so bulk pricing can be part of the decision.",
    deliverables: ["Order volume", "Bulk pricing", "Clear next step"],
    icon: <Printer className="w-5 h-5" />,
  },
  {
    step: "04",
    title: "Confirm the Delivery Area",
    duration: "Plan delivery",
    description:
      "Tell us where the boxes need to go in Pakistan so delivery areas are part of the order conversation.",
    deliverables: ["Delivery area", "Order details", "Packaging plan"],
    icon: <Truck className="w-5 h-5" />,
  },
];

export default function AtelierWorkflow() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section className="py-24 bg-brown-900/40 relative border-t border-b border-gold-500/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="A Clear Buying Path"
          title="From Product Details to the Right Box"
          subtitle="Use four simple decisions to compare formats, custom sizes, bulk pricing, and delivery areas."
        />

        <div className="hidden lg:grid grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          {STEPS.map((s, idx) => {
            const isCurrent = idx === selectedStep;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setSelectedStep(idx)}
                className="flex items-center gap-3 p-3 rounded-2xl bg-brown-950/70 border border-gold-500/15 text-left transition-all hover:border-gold-400/40 cursor-pointer"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    isCurrent
                      ? "bg-gold-500 text-brown-950 shadow-md shadow-gold-500/25"
                      : "bg-gold-500/10 text-gold-300"
                  }`}
                >
                  {s.step}
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-medium text-cream-200 block truncate">
                    {s.title.split("&")[0]}
                  </span>
                  <span className="text-[10px] text-gold-400/80 font-light block">
                    {s.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {STEPS.map((step, idx) => (
            <WorkflowStepItem
              key={step.step}
              data={step}
              index={idx}
              isSelected={idx === selectedStep}
              onSelect={() => setSelectedStep(idx)}
            />
          ))}
        </div>

        <div className="mt-12 royal-card p-6 sm:p-7 rounded-2xl border-gold-400/20 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-brown-900 via-brown-850 to-brown-900">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cream-100">
                Phase {STEPS[selectedStep].step} Focus: {STEPS[selectedStep].title}
              </h4>
              <p className="text-xs text-cream-300/80 font-light">
                Next step: <span className="text-gold-300 font-medium">{STEPS[selectedStep].duration}</span> &bull; Keep your product and order details ready.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : STEPS.length - 1))}
              className="px-3.5 py-1.5 rounded-full bg-brown-950 border border-gold-500/20 text-xs text-cream-300 hover:text-gold-200 hover:border-gold-400/40 transition-colors cursor-pointer"
            >
              &larr; Previous Step
            </button>
            <button
              type="button"
              onClick={() => setSelectedStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : 0))}
              className="px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-xs text-gold-300 hover:bg-gold-500 hover:text-brown-950 transition-all cursor-pointer font-medium"
            >
              Next Step &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
