import type { Metadata } from "next";
import AtelierHero from "../Components/AboutPage-Sections/AtelierHero";
import AtelierInspector from "../Components/AboutPage-Sections/AtelierInspector";
import AtelierWorkflow from "../Components/AboutPage-Sections/AtelierWorkflow";
import FinishesShowcase from "../Components/AboutPage-Sections/FinishesShowcase";
import AtelierGuarantees from "../Components/AboutPage-Sections/AtelierGuarantees";
import AtelierCTA from "../Components/AboutPage-Sections/AtelierCTA";

export const metadata: Metadata = {
  title: "About PackagingPackers | Box Manufacturer in Pakistan",
  description:
    "Learn how PackagingPackers helps restaurants, bakeries, and retail brands choose custom rigid, mailer, and cardboard boxes in Pakistan.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-brown-950 overflow-hidden">
      <AtelierHero />
      <AtelierInspector />
      <AtelierWorkflow />
      <FinishesShowcase />
      <AtelierGuarantees />
      <AtelierCTA />
    </main>
  );
}
