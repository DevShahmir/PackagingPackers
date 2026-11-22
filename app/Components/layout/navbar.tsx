"use client";

import Link from "next/link";
import { useState } from "react";
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

  const startPageTransition = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("site-page-transition", { detail: { href } }));
  };
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-500/10 bg-brown-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3 group">
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
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-400 mt-1">
              Box Packaging from Pakistan • 20 Years
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 p-1.5 rounded-full bg-brown-900/60 border border-gold-500/15 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => startPageTransition(event, link.href)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "text-brown-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-sm font-bold"
                    : "text-cream-200 hover:text-gold-200 hover:bg-gold-500/10"
                }`}
              >
                {link.label}
              </Link>
              
            );
          })}
        </nav>

        <Link
          href="/contact#quote-form"
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            if (pathname !== "/contact") {
              e.preventDefault();
              startPageTransition(e, "/contact#quote-form");
              return;
            }
            if (pathname === "/contact") {
              e.preventDefault();
              const el = document.getElementById("quote-form");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                const input = el.querySelector("input");
                input?.focus();
              }
            }
          }}
          className="hidden xl:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-brown-950 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span>Get Box Pricing</span>
          <span className="text-sm">→</span>
        </Link>
        <WhatsappButton
          variant="inline"
          label="WhatsApp"
          className="hidden xl:inline-flex px-5 py-2.5"
        />

        <div className="flex md:hidden items-center gap-2.5">
          <Link
            href="/contact#quote-form"
            onClick={(event) => startPageTransition(event, "/contact#quote-form")}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brown-950 shadow-md cursor-pointer"
          >
            Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 h-11 w-11 rounded-full bg-brown-900/80 border border-gold-500/20 hover:bg-brown-850 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-gold-300 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-gold-300 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-gold-300 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-gold-500/10 bg-brown-950/98 backdrop-blur-2xl animate-fade-in p-6">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    setMobileOpen(false);
                    startPageTransition(event, link.href);
                  }}
                  className={`px-5 py-3.5 rounded-2xl text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-brown-950 bg-gold-400 font-bold"
                      : "text-cream-200 hover:text-gold-200 hover:bg-brown-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact#quote-form"
              onClick={(e) => {
                setMobileOpen(false);
                if (pathname === "/contact") {
                  e.preventDefault();
                  const el = document.getElementById("quote-form");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    const input = el.querySelector("input");
                    input?.focus();
                  }
                }
              }}
              className="mt-4 flex items-center justify-center rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-brown-950 shadow-md cursor-pointer"
            >
              Get Box Pricing
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
