"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const TRANSITION_TIME = 820;

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLeaving, setIsLeaving] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);
  const isLeavingRef = useRef(false);

  useEffect(() => {
    let transitionTimer = 0;

    const runTransition = (href: string) => {
      if (isLeavingRef.current) return;
      isLeavingRef.current = true;
      setTransitionKey((prev) => prev + 1);
      setIsLeaving(true);

      transitionTimer = window.setTimeout(() => {
        const destination = new URL(href, window.location.href);
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
        window.setTimeout(() => {
          isLeavingRef.current = false;
          setIsLeaving(false);
        }, 240);
      }, TRANSITION_TIME);
    };

    const handleTransitionEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ href: string }>;
      if (customEvent.detail?.href) runTransition(customEvent.detail.href);
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      
      const target = event.target as HTMLElement;
      const link = target.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname && destination.search === window.location.search)
      ) {
        return;
      }

      event.preventDefault();
      window.dispatchEvent(new CustomEvent("site-page-transition", {
        detail: { href: `${destination.pathname}${destination.search}${destination.hash}` },
      }));
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("site-page-transition", handleTransitionEvent);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("site-page-transition", handleTransitionEvent);
      window.clearTimeout(transitionTimer);
    };
  }, [router, pathname]);

  return (
    <div
      className={`page-transition ${isLeaving ? "is-leaving" : ""}`}
      aria-hidden={!isLeaving}
    >
      <div className="transition-backdrop-glow" />
      {isLeaving && (
        <div key={transitionKey} className="transition-stage">
          {/* Dieline Ruler Guide Track */}
          <div className="transition-track">
            <div className="transition-track-ticks" />
            <div className="transition-track-progress" />
            <div className="transition-track-glow" />
            
            {/* Animated 3D Isometric Luxury Package that slides in real time */}
            <div className="transition-package">
              <div className="package-cube">
                <div className="package-ribbon-horizontal" />
                <div className="package-ribbon-vertical" />
                <div className="package-seal-glow" />
              </div>
              <div className="package-shadow" />
              <div className="package-comet-tail" />
            </div>
          </div>

          {/* Transition Status Label */}
          <div className="transition-meta">
            <div className="transition-badge">
              <span className="transition-badge-dot" />
              <span>PACKAGING PACKERS</span>
              <span className="transition-badge-dot" />
            </div>
            <p className="transition-status-text">
              Preparing custom box specifications...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
