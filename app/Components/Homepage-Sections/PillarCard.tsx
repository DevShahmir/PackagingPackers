import React, { ReactNode } from "react";

export interface PillarItem {
  icon: ReactNode;
  title: string;
  description: string;
  tagline?: string;
  subtag?: string;
}

export interface PillarCardProps {
  pillar: PillarItem;
  className?: string;
}

export default function PillarCard({ pillar, className = "" }: PillarCardProps) {
  const { icon, title, description, tagline = "Box choice", subtag = "Ask for pricing" } = pillar;

  return (
    <div
      className={`royal-card p-3.5 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-400 ${className}`}
    >
      <div>
        <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 mb-3 sm:mb-5 group-hover:bg-gold-500/20 group-hover:scale-105 group-hover:border-gold-300 transition-all duration-300">
          {icon}
        </div>

        <h3 className="font-royal text-sm sm:text-xl text-cream-50 font-normal mb-1.5 sm:mb-2.5 group-hover:text-gold-200 transition-colors">
          {title}
        </h3>

        <p className="text-[11px] sm:text-xs text-cream-300/80 font-light leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3.5 border-t border-gold-500/10 flex items-center justify-between text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-400">
        <span>{tagline}</span>
        <span className="text-cream-400/70 font-normal">{subtag}</span>
      </div>
    </div>
  );
}
