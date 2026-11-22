"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center bg-brown-950">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 mb-6">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-400">
        Packaging Notice
      </span>

      <h1 className="font-royal text-3xl sm:text-4xl font-normal text-cream-50 mt-3">
        We Could Not Load This Page
      </h1>

      <p className="mt-4 text-sm text-cream-300 font-light max-w-md leading-relaxed">
        Something interrupted this page. Try again or return to the box catalog.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-7 py-3 text-xs font-bold uppercase tracking-wider text-brown-950 shadow-md hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-full border border-gold-500/30 bg-brown-900/80 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-cream-100 hover:bg-gold-500/10 hover:text-gold-200 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
