import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./Components/layout/navbar";
import Footer from "./Components/layout/footer";
import AmbientBackground from "./Components/ui/AmbientBackground";
import PageTransition from "./Components/ui/PageTransition";
import SparkleEffect from "./Components/ui/SparkleEffect";
import SmoothScroll from "./Components/SmoothScroll";
import WhatsappButton from "./Components/ui/WhatsappButton";

export const metadata: Metadata = {
  title: "Custom Boxes in Pakistan | PackagingPackers",
  description:
    "Get custom rigid, mailer, and cardboard boxes in Pakistan with custom sizes, bulk pricing, and delivery areas that fit your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-gold-500/30 selection:text-cream">
        <AmbientBackground />
        <PageTransition />
        <SparkleEffect />
        <Suspense fallback={<div className="h-20 w-full bg-brown-950/80 border-b border-border-subtle" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">
          <SmoothScroll>{children}</SmoothScroll></main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
