"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import WhatsappButton from "../ui/WhatsappButton";

export default function AtelierCTA() {
  return (
    <section className="py-24 bg-brown-950 relative overflow-hidden border-t border-gold-500/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="royal-card rounded-[2.5rem] p-6 sm:p-12 lg:p-16 border-gold-400/30 bg-gradient-to-br from-brown-900 via-brown-850 to-brown-950 text-center relative overflow-hidden shadow-2xl shadow-gold-500/10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Talk Through Your Box Order</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-normal text-cream-50 max-w-3xl mx-auto leading-[1.18] mb-6">
            Ready to Choose Packaging That Fits Your Business?{" "}
            <span className="italic bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent">
              Start With the Right Box.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-cream-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Share what you sell, the size you need, your order volume, and your delivery area. We will help you choose the next step.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request Box Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsappButton variant="inline" label="WhatsApp" />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold-400/40 text-cream-100 bg-brown-900/80 backdrop-blur-sm text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-gold-500/15 hover:border-gold-300 hover:text-gold-200 transition-all duration-300 active:scale-[0.98]"
            >
              Compare Box Styles
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-cream-300/80 font-light border-t border-gold-500/10 pt-8 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              Custom sizes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              Bulk pricing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              Pakistan delivery areas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
