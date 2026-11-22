import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import WhatsappButton from "../ui/WhatsappButton";

const STEPS = [
  {
    number: "01",
    title: "Start With the Product",
    description:
      "Choose rigid, mailer, cardboard, or another box style based on how your customers receive the product.",
    badge: "Step 1",
  },
  {
    number: "02",
    title: "Set the Size You Need",
    description:
      "Share the dimensions that fit your product so the box works for the way you sell and deliver it.",
    badge: "Step 2",
  },
  {
    number: "03",
    title: "Plan the Order",
    description:
      "Ask for bulk pricing and delivery areas that match your business before placing the order.",
    badge: "Step 3",
  },
];

export default function IntroSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-b border-gold-500/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="A Simpler Buying Process"
          title="Choose Boxes With Less Guesswork"
          subtitle="Start with the product, size, and order volume. We help you compare box styles, custom sizes, and bulk pricing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="royal-card p-5 sm:p-7 rounded-2xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative border-gold-500/20"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-royal text-3xl sm:text-4xl text-gold-300/60 font-light group-hover:text-gold-300 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300">
                    {step.badge}
                  </span>
                </div>

                <h3 className="font-royal text-xl sm:text-2xl text-cream-50 font-normal mb-3 group-hover:text-gold-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-cream-300/80 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gold-500/10 flex items-center text-xs font-semibold uppercase tracking-wider text-gold-400">
                <span>Clear next step</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-brown-950/80 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-royal text-lg text-cream-100 font-normal">
              Not sure which box will fit your product?
            </h4>
            <p className="text-xs text-cream-400 font-light mt-0.5">
              Share the product size and order volume. We will help you narrow the options.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gold-400 text-brown-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-300 transition-colors shrink-0"
          >
            Get Box Pricing
          </Link>
          <WhatsappButton variant="inline" label="WhatsApp" />
        </div>
      </div>
    </section>
  );
}
