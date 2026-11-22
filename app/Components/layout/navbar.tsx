"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import WhatsappButton from "../ui/WhatsappButton";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const startPageTransition = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("site-page-transition", { detail: { href } }));
  };

  const handleQuoteClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    setMobileOpen(false);
    if (pathname === "/contact") {
      event.preventDefault();
      const el = document.getElementById("quote-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        const input = el.querySelector("input");
        input?.focus();
      }
    } else {
      event.preventDefault();
      startPageTransition(event, "/contact#quote-form");
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gold-500/20 bg-brown-950/95 backdrop-blur-xl shadow-lg shadow-black/30"
          : "border-b border-gold-500/10 bg-brown-950/85 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => startPageTransition(e, "/")}
          className="site-logo flex shrink-0 items-center gap-3 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 shadow-md shadow-gold-500/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
            <svg
              className="h-5 w-5 text-brown-950"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-royal text-lg sm:text-xl font-normal tracking-tight text-cream-50 group-hover:text-gold-200 transition-colors">
              Packaging Packers
            </span>
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.16em] sm:tracking-[0.24em] uppercase text-gold-400 mt-1 truncate max-w-[190px] sm:max-w-none">
              Box Packaging from Pakistan • 20 Years
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-brown-900/60 border border-gold-500/15 backdrop-blur-md shadow-inner shadow-black/20">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => startPageTransition(event, link.href)}
                className={`relative px-4 xl:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "text-brown-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 shadow-sm font-bold"
                    : "text-cream-200 hover:text-gold-200 hover:bg-gold-500/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
          <Link
            href="/contact#quote-form"
            onClick={handleQuoteClick}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-4 xl:px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-brown-950 shadow-md shadow-gold-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Get Box Pricing</span>
            <span className="text-sm">→</span>
          </Link>
          <WhatsappButton
            variant="inline"
            label="WhatsApp"
            className="px-4 xl:px-5 py-2.5"
          />
        </div>

        {/* Mobile / Tablet Controls (shown below lg) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
          <Link
            href="/contact#quote-form"
            onClick={handleQuoteClick}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-3.5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brown-950 shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex flex-col items-center justify-center gap-1.5 h-11 w-11 rounded-full bg-brown-900/80 border border-gold-500/20 hover:bg-brown-850 hover:border-gold-500/40 transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-gold-300 origin-center transition-all duration-300 ease-in-out ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-gold-300 transition-all duration-200 ease-in-out ${
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-gold-300 origin-center transition-all duration-300 ease-in-out ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-gold-500/15 bg-brown-950/98 backdrop-blur-2xl animate-fade-in px-5 py-6 sm:px-8 shadow-2xl shadow-black/60"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    setMobileOpen(false);
                    startPageTransition(event, link.href);
                  }}
                  className={`px-5 py-3.5 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "text-brown-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 shadow-sm font-bold"
                      : "text-cream-200 hover:text-gold-200 hover:bg-brown-900/80"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs font-bold">●</span>}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-gold-500/10 flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/contact#quote-form"
                onClick={handleQuoteClick}
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-brown-950 shadow-md cursor-pointer hover:shadow-lg hover:shadow-gold-500/25 active:scale-[0.98]"
              >
                <span>Get Box Pricing</span>
                <span className="text-sm">→</span>
              </Link>
              <WhatsappButton
                variant="inline"
                label="WhatsApp"
                className="flex-1 px-6 py-3.5 text-center justify-center"
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
