"use client";

import { motion } from "framer-motion";
import { Award, Box, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import StatBadge from "./StatBadge";
import WhatsappButton from "../ui/WhatsappButton";

const STATS = [
  {
    value: "20",
    label: "Years in Business",
    detail: "Helping businesses choose box packaging",
    icon: <Award className="w-4 h-4" />,
  },
  {
    value: "Many",
    label: "Box Styles",
    detail: "Rigid, mailer, cardboard, and more",
    icon: <Box className="w-4 h-4" />,
  },
  {
    value: "Custom",
    label: "Sizes Available",
    detail: "Dimensions planned around your product",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    value: "Bulk",
    label: "Pricing Options",
    detail: "Plan pricing around your order volume",
    icon: <Sparkles className="w-4 h-4" />,
  },
];

export default function AtelierHero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-brown-950">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 text-xs font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            PackagingPackers in Pakistan
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-royal text-4xl sm:text-5xl lg:text-6xl font-normal text-cream-50 tracking-tight leading-[1.12] mb-6"
          >
            Help Your Products Make a Better First Impression{" "}
            <span className="italic bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent">
              Through the Right Box.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-cream-300 font-light leading-relaxed max-w-2xl mx-auto mb-9"
          >
            For 20 years, PackagingPackers has helped restaurants, bakeries, and retail brands choose box styles, custom sizes, bulk pricing, and delivery areas that fit the way they sell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Compare Box Styles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gold-400/40 text-cream-100 bg-brown-900/60 backdrop-blur-sm text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-gold-500/15 hover:border-gold-300 hover:text-gold-200 transition-all duration-300 active:scale-[0.98]"
            >
              Request Box Pricing
            </Link>
            <WhatsappButton variant="inline" label="WhatsApp" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {STATS.map((stat, idx) => (
            <StatBadge
              key={idx}
              value={stat.value}
              label={stat.label}
              detail={stat.detail}
              icon={stat.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
