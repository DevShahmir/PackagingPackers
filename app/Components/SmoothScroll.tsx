"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import "lenis/dist/lenis.css"; // Recommended base styles for Lenis

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisOptions: LenisOptions = {
    lerp: 0.1,         // Lower = smoother/heavier delay (0.05 to 0.1 is the sweet spot)
    duration: 1.5,     // Controls the glide duration in seconds
    smoothWheel: true, // Enables smooth mouse-wheel scrolling
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
