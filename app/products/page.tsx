import type { Metadata } from "next";
import SectionHeading from "../Components/ui/SectionHeading";
import ProductsView from "../Components/ProductpageSections/ProductView";

export const metadata: Metadata = {
  title: "Rigid, Mailer and Cardboard Boxes | PackagingPackers",
  description:
    "Compare rigid, mailer, and cardboard boxes in Pakistan, then request custom sizes and bulk pricing for your business.",
};

export default function ProductPage() {
  return (
    <div className="py-20 sm:py-28 bg-brown-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Choose Your Box Style"
          title="Find a Box That Fits Your Product"
          subtitle="Compare rigid, mailer, cardboard, and other box styles before you ask for custom sizes and bulk pricing."
        />

        <ProductsView />
      </div>
    </div>
  );
}
