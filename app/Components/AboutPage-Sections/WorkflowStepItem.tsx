"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import React from "react";

export interface StepData {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

interface WorkflowStepItemProps {
  data: StepData;
  index: number;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function WorkflowStepItem({
  data,
  index,
  isSelected = false,
  onSelect,
}: WorkflowStepItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      onClick={onSelect}
      className={`royal-card p-3.5 sm:p-7 flex flex-col justify-between relative group cursor-pointer transition-all duration-400 ${
        isSelected
          ? "border-gold-400/50 bg-brown-850/90 shadow-xl shadow-gold-500/10"
          : "hover:border-gold-400/30"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-5">
          <span className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gold-500/15 border border-gold-400/30 font-royal text-xs sm:text-sm font-bold text-gold-300 group-hover:bg-gold-500 group-hover:text-brown-950 transition-all duration-300">
            {data.step}
          </span>
          <span className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-gold-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
            <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-400" />
            {data.duration}
          </span>
        </div>

        <h3 className="font-royal text-sm sm:text-xl text-cream-50 font-normal mb-1.5 sm:mb-2.5 group-hover:text-gold-200 transition-colors line-clamp-1">
          {data.title}
        </h3>
        <p className="text-[11px] sm:text-[13px] text-cream-300 font-light leading-snug sm:leading-relaxed mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-none">
          {data.description}
        </p>

        <div className="space-y-1.5 border-t border-gold-500/10 pt-2.5 sm:pt-4">
          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-gold-400/80 block">
            Deliverables
          </span>
          <div className="flex flex-wrap gap-1">
            {data.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] text-cream-200 bg-brown-900/80 px-2 py-0.5 sm:py-1 rounded-md border border-gold-500/10 font-medium"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-gold-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 pt-2 sm:pt-3 border-t border-gold-500/10 flex items-center justify-between text-[9px] sm:text-[11px] text-cream-400/70 font-light">
        <span>Phase {data.step}</span>
        <span className="text-gold-400 group-hover:translate-x-1 transition-transform">
          Inspect &rarr;
        </span>
      </div>
    </motion.div>
  );
}
