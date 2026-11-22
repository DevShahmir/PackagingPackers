import HeroSection from "@/app/Components/Homepage-Sections/heroSection";
import FeatureStrip from "@/app/Components/Homepage-Sections/FeatureStrip";
import CategoryBanners from "@/app/Components/Homepage-Sections/CategoryBanners";
import TopSellersSection from "@/app/Components/Homepage-Sections/TopSellersSection";
import SplitCollectionSection from "@/app/Components/Homepage-Sections/SplitCollectionSection";
import ForYouSection from "@/app/Components/Homepage-Sections/ForyouSection";
import ScrollReveal from "@/app/Components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal><HeroSection /></ScrollReveal>
      <ScrollReveal delay={80}><FeatureStrip /></ScrollReveal>
      <ScrollReveal delay={120}><CategoryBanners /></ScrollReveal>
      <ScrollReveal delay={140}><TopSellersSection /></ScrollReveal>
      <ScrollReveal delay={160}><SplitCollectionSection /></ScrollReveal>
      <ScrollReveal delay={180}><ForYouSection /></ScrollReveal>
    </>
  );
}
