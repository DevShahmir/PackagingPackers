"use client";

import { motion } from "framer-motion";
import React from "react";

interface StatBadgeProps {
  value: string;
  label: string;
  detail: string;
  icon?: React.ReactNode;
}

export default function StatBadge({ value, label, detail, icon }: StatBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="royal-card p-3.5 sm:p-6 relative overflow-hidden group cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <span className="font-royal text-2xl sm:text-4xl text-gold-300 font-normal tracking-tight group-hover:text-gold-200 transition-colors">
          {value}
        </span>
        {icon && (
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gold-500/10 border border-gold-400/25 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
      </div>

      <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cream-100 mb-1 line-clamp-1">
        {label}
      </h4>
      <p className="text-[10px] sm:text-[11px] text-cream-300/80 font-light leading-snug sm:leading-relaxed line-clamp-2">
        {detail}
      </p>

      <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-r border-b border-gold-500/20 group-hover:border-gold-400/50 transition-colors" />
    </motion.div>
  );
}
