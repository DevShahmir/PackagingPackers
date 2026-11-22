import CTAButton from "../ui/CTAButton";
import WhatsappButton from "../ui/WhatsappButton";

const PERKS = [
  {
    title: "Elevate Brand Value",
    metric: "Brand Growth",
    description: "Turn every unboxing into a premium impression that drives customer loyalty and social shares.",
    icon: "💎",
  },
  {
    title: "Zero Sizing Headache",
    metric: "Exact Fit",
    description: "Share your product dimensions — we engineer precision dielines so your items fit securely with zero rattle.",
    icon: "📐",
  },
  {
    title: "Low 100-pc Minimums",
    metric: "Low Risk",
    description: "Test new product launches without committing to massive 10,000-unit factory minimums.",
    icon: "📦",
  },
  {
    title: "Factory-Direct Margins",
    metric: "Bulk Savings",
    description: "Cut out middlemen and protect your profitability with transparent volume discounts.",
    icon: "🌿",
  },
];

export default function ForYouSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-brown-950/25 border-t border-gold-500/15">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-400 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/25 inline-block mb-3">
              Solving Your Packaging Challenges
            </span>
            <h2 className="font-royal text-3xl sm:text-4xl text-cream-50 font-normal">
              Packaging Made Effortless For Growing Brands
            </h2>
            <p className="text-sm text-cream-300/80 font-light mt-2">
              From exact sizing and low minimums to factory-direct bulk pricing, we make packaging easy so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PERKS.map((perk, idx) => (
              <div
                key={idx}
                className="p-5 rounded-none flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 border-t border-gold-500/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{perk.icon}</span>
                    <span className="text-[11px] font-bold text-gold-300 bg-gold-500/10 border border-gold-400/20 px-2.5 py-0.5 rounded-full">
                      {perk.metric}
                    </span>
                  </div>

                  <h3 className="font-royal text-lg text-cream-50 font-normal group-hover:text-gold-200 transition-colors mb-2">
                    {perk.title}
                  </h3>

                  <p className="text-xs text-cream-300/80 font-light leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="royal-card rounded-3xl border-gold-400/20 px-6 py-10 sm:px-12 sm:py-14 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
              Plan Your Next Order
            </span>

            <h3 className="font-royal text-3xl sm:text-4xl text-cream-50 font-normal leading-tight">
              Ready to Choose Your Box Style?
            </h3>

            <p className="text-sm sm:text-base text-cream-300/90 font-light leading-relaxed">
              Tell us what you sell, which size you need, and your order volume. We will help you choose the next step.
            </p>

            <div className="flex flex-wrap justify-center gap-3.5 pt-3">
              <CTAButton label="Get My Box Pricing" href="/contact" variant="primary" />
              <WhatsappButton variant="inline" label="WhatsApp" />
              <CTAButton label="Compare All Boxes" href="/products" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
