"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import React from "react";

export interface FinishData {
  title: string;
  tactile: string;
  description: string;
  idealFor: string;
  swatchGradient: string;
  badge: string;
}

interface FinishCardProps {
  finish: FinishData;
  index: number;
}

export default function FinishCard({ finish, index }: FinishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.015 }}
      className="royal-card p-3.5 sm:p-6 relative overflow-hidden group flex flex-col justify-between"
    >
      <div>
        <div className="h-10 sm:h-16 w-full rounded-xl sm:rounded-2xl mb-3 sm:mb-5 relative overflow-hidden border border-gold-500/20 group-hover:border-gold-400/50 transition-colors shadow-inner">
          <div className={`absolute inset-0 ${finish.swatchGradient} opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`} />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-1.5 left-2 sm:bottom-2 sm:left-3 flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gold-200">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-300" />
            <span className="truncate max-w-[110px] sm:max-w-none">{finish.tactile}</span>
          </div>

          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
            <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded-full bg-brown-950/80 text-cream-200 border border-gold-500/20">
              {finish.badge}
            </span>
          </div>
        </div>

        <h3 className="font-royal text-sm sm:text-xl text-cream-50 font-normal mb-1 sm:mb-2 group-hover:text-gold-200 transition-colors line-clamp-1">
          {finish.title}
        </h3>

        <p className="text-[11px] sm:text-xs text-cream-300/80 font-light leading-snug sm:leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
          {finish.description}
        </p>
      </div>

      <div className="pt-2 sm:pt-3 border-t border-gold-500/10 flex items-center justify-between text-[10px] sm:text-[11px]">
        <span className="text-cream-400/80 font-light">For:</span>
        <span className="font-medium text-gold-300 truncate max-w-[110px] sm:max-w-[160px]">{finish.idealFor}</span>
      </div>
    </motion.div>
  );
}
