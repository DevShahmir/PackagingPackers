"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface ArchetypeData {
  id: string;
  name: string;
  niche: string;
  headline: string;
  description: string;
  benefits: string[];
  specs: {
    material: string;
    closure: string;
    durability: string;
    ecoRating: string;
  };
  metric: {
    value: string;
    label: string;
  };
  accentColor: string;
}

interface InspectorDetailCardProps {
  data: ArchetypeData;
}

export default function InspectorDetailCard({ data }: InspectorDetailCardProps) {
  return (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="royal-card p-4 sm:p-8 lg:p-10 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-400/30">
              {data.niche}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-cream-300/70 font-light">
              <Sparkles className="w-3 h-3 text-gold-400" />
              Custom Size Discussion
            </span>
          </div>

          <div>
            <h3 className="font-royal text-xl sm:text-3xl text-cream-50 font-normal mb-1.5 sm:mb-3">
              {data.headline}
            </h3>
            <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
            {data.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-1.5 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-brown-900/60 border border-gold-500/10 text-[10px] sm:text-xs text-cream-200"
              >
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <span className="leading-snug">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-1 sm:pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold-300 hover:text-gold-200 group transition-colors"
            >
              <span>Ask About {data.name}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-5">
          <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brown-850 to-brown-900 border border-gold-500/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="font-royal text-3xl sm:text-5xl text-gold-300 block font-normal tracking-tight">
              {data.metric.value}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-cream-300 uppercase tracking-wider mt-1 sm:mt-2 block">
              {data.metric.label}
            </span>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-brown-900/90 border border-gold-500/15 space-y-2.5 sm:space-y-3.5">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gold-400 border-b border-gold-500/10 pb-1.5 sm:pb-2">
              Box Details
            </h4>

            <div className="space-y-2 text-[11px] sm:text-xs">
              <div className="flex justify-between items-center text-cream-300">
                <span className="font-light text-cream-400">Box format:</span>
                <span className="font-medium text-cream-100 truncate max-w-[170px] sm:max-w-none">{data.specs.material}</span>
              </div>
              <div className="flex justify-between items-center text-cream-300">
                <span className="font-light text-cream-400">Style:</span>
                <span className="font-medium text-cream-100">{data.specs.closure}</span>
              </div>
              <div className="flex justify-between items-center text-cream-300">
                <span className="font-light text-cream-400">Sizing:</span>
                <span className="font-medium text-gold-300">{data.specs.durability}</span>
              </div>
              <div className="flex justify-between items-center text-cream-300">
                <span className="font-light text-cream-400">Options:</span>
                <span className="font-medium text-emerald-400">{data.specs.ecoRating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
