import React from "react";

export default function ContactInfo() {
  return (
    <div className="space-y-8 royal-card p-4 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border-gold-500/20">
      <div>
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400 block mb-2">
          Box Packaging in Pakistan
        </span>
        <h3 className="font-royal text-2xl sm:text-3xl text-cream-50 font-normal">
          Help Choosing the Right Box
        </h3>
        <p className="mt-3 text-sm text-cream-300 font-light leading-relaxed">
          Tell us what you sell and we can help you compare box styles, custom dimensions, bulk pricing, and delivery areas.
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-gold-500/10">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-cream-100">Share Your Box Size</h4>
            <p className="text-xs text-cream-400 font-light mt-0.5">
              Add the dimensions your product needs so the quote starts with a useful size.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-cream-100">Choose Your Box Type</h4>
            <p className="text-xs text-cream-400 font-light mt-0.5">
              Select rigid, mailer, cardboard, or another box style for your product.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-cream-100">Plan Bulk Pricing</h4>
            <p className="text-xs text-cream-400 font-light mt-0.5">
              Include your expected order volume so pricing can match your buying plan.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gold-500/10 space-y-3.5 text-xs text-cream-300 font-light">
        <div className="flex items-center gap-3">
          <span className="text-gold-400 font-semibold uppercase tracking-wider w-24">Email:</span>
          <a
            href="mailto:packagingpackers.100@gmail.com"
            className="text-cream-100 hover:text-gold-300 transition-colors"
          >
            packagingpackers.100@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gold-400 font-semibold uppercase tracking-wider w-24">Telephone:</span>
          <a
            href="tel:+923314834544"
            className="text-cream-100 hover:text-gold-300 transition-colors"
          >
            +92 331 4834544
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gold-400 font-semibold uppercase tracking-wider w-24">Delivery:</span>
          <span className="text-cream-100">Tell us your delivery area</span>
        </div>
      </div>
    </div>
  );
}
