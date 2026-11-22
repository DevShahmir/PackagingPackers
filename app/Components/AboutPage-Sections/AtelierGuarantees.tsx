"use client";

import { ShieldCheck, Lock, Leaf } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GuaranteeCard, { GuaranteeData } from "./GuaranteeCard";

const GUARANTEES: (GuaranteeData & { colSpan?: string })[] = [
  {
    badge: "Clear Choices",
    title: "Choose the Box That Fits",
    summary:
      "Start with the product and the way customers receive it. Compare box styles and ask for the dimensions you need.",
    points: [
      "Rigid boxes for a stronger presentation",
      "Mailer boxes for delivered orders",
      "Cardboard boxes for retail products",
    ],
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    colSpan: "",
  },
  {
    badge: "Custom Fit",
    title: "Plan Around Your Product",
    summary:
      "Share the product size and order volume so your packaging choices stay connected to the way you sell.",
    points: [
      "Custom dimensions for your product",
      "Several box styles to compare",
      "Bulk pricing for planned orders",
    ],
    icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5" />,
    colSpan: "",
  },
  {
    badge: "Local Planning",
    title: "Delivery Areas That Fit",
    summary:
      "Tell us where your business needs delivery so the order conversation starts with the right practical detail.",
    points: [
      "Delivery areas across Pakistan",
      "Pricing tied to order volume",
      "Support for restaurants, bakeries, and retail brands",
    ],
    icon: <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />,
    colSpan: "col-span-2 md:col-span-1",
  },
];

export default function AtelierGuarantees() {
  return (
    <section className="py-20 sm:py-24 bg-brown-900/40 relative border-t border-gold-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="What You Can Plan For"
          title="A Clearer Box-Buying Conversation"
          subtitle="Bring your product, size, order volume, and delivery area. We will help you narrow the box choices."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {GUARANTEES.map((item, idx) => (
            <div key={item.title} className={item.colSpan}>
              <GuaranteeCard data={item} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
