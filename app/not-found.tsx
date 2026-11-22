import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center bg-brown-950">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 mb-6">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>

      <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-400">
        404 — Box Option Not Found
      </span>

      <h1 className="font-royal text-4xl sm:text-5xl font-normal text-cream-50 mt-3">
        This Box Page Is Not Available
      </h1>

      <p className="mt-4 text-sm sm:text-base text-cream-300 font-light max-w-md leading-relaxed">
        That page is not available. Return home or compare the box options in our catalog.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-7 py-3 text-xs font-bold uppercase tracking-wider text-brown-950 shadow-md hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300"
        >
          Return Home
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-gold-500/30 bg-brown-900/80 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-cream-100 hover:bg-gold-500/10 hover:text-gold-200 transition-all duration-300"
        >
          Compare Box Options
        </Link>
      </div>
    </div>
  );
}
