"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

export interface GuaranteeData {
  badge: string;
  title: string;
  summary: string;
  points: string[];
  icon: React.ReactNode;
}

interface GuaranteeCardProps {
  data: GuaranteeData;
  index: number;
}

export default function GuaranteeCard({ data, index }: GuaranteeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="royal-card p-3.5 sm:p-7 flex flex-col justify-between group h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-5">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
            {data.icon}
          </div>
          <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/25">
            {data.badge}
          </span>
        </div>

        <h3 className="font-royal text-sm sm:text-2xl text-cream-50 font-normal mb-1.5 sm:mb-3 group-hover:text-gold-200 transition-colors line-clamp-1">
          {data.title}
        </h3>

        <p className="text-[11px] sm:text-[13px] text-cream-300/80 font-light leading-snug sm:leading-relaxed mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-none">
          {data.summary}
        </p>

        <div className="space-y-1.5 sm:space-y-2 border-t border-gold-500/10 pt-2.5 sm:pt-4">
          {data.points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs text-cream-200/90 font-light">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gold-500/15 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              </div>
              <span className="line-clamp-2 sm:line-clamp-none">{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
