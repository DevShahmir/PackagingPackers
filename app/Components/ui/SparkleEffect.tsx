"use client";

import { useEffect, useRef } from "react";

const SPARK_COLORS = [
  "#ffd700", // Bright 24k gold
  "#fff1b8", // Champagne light
  "#ffffff", // Diamond white
  "#f0c450", // Amber glow
  "#ffdf7a", // Warm solar radiance
];

const SPARK_GLYPHS = ["✦", "◆", "★", "•"];

export default function SparkleEffect() {
  const lastTriggerTime = useRef(0);

  useEffect(() => {
    const triggerSparksAt = (x: number, y: number, interactive?: HTMLElement) => {
      // Button tactical spring bounce & gold glow
      if (interactive) {
        interactive.classList.remove("button-spark-confirm");
        void interactive.offsetWidth;
        interactive.classList.add("button-spark-confirm");
        window.setTimeout(() => interactive.classList.remove("button-spark-confirm"), 450);
      }

      // 1. Concentric gold shockwave ring
      const ring = document.createElement("span");
      ring.className = "click-spark-ring";
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      document.body.appendChild(ring);

      // Animate ring via Web Animations API for 100% reliability regardless of CSS media queries
      ring.animate(
        [
          { opacity: 1, transform: "scale(0.2)" },
          { opacity: 0.9, transform: "scale(2.5)", borderColor: "#ffd700", offset: 0.5 },
          { opacity: 0, transform: "scale(6.5)" },
        ],
        { duration: 520, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" }
      );
      window.setTimeout(() => ring.remove(), 550);

      // 2. Radiant burst of gold stars, diamonds, and particles
      const count = 22;
      for (let i = 0; i < count; i += 1) {
        const spark = document.createElement("span");
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
        const distance = 26 + Math.random() * 48;
        const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
        const isStar = Math.random() < 0.5;
        const delay = Math.random() * 50;

        spark.className = "click-spark";
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.color = color;

        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;

        if (isStar) {
          spark.textContent = SPARK_GLYPHS[Math.floor(Math.random() * SPARK_GLYPHS.length)];
          spark.style.fontSize = `${Math.floor(11 + Math.random() * 9)}px`;
          spark.style.lineHeight = "1";
          spark.style.textShadow = `0 0 10px ${color}, 0 0 18px rgba(255, 215, 0, 0.95)`;
        } else {
          const size = Math.random() < 0.3 ? 7 : Math.random() < 0.7 ? 5 : 3.5;
          spark.style.width = `${size}px`;
          spark.style.height = `${size}px`;
          spark.style.marginLeft = `-${size / 2}px`;
          spark.style.marginTop = `-${size / 2}px`;
          spark.style.borderRadius = "50%";
          spark.style.backgroundColor = color;
          spark.style.boxShadow = `0 0 10px ${color}, 0 0 20px rgba(255, 215, 0, 1)`;
        }

        document.body.appendChild(spark);

        // Web Animations API guarantees hardware-accelerated playback
        spark.animate(
          [
            { opacity: 1, transform: "translate(0, 0) scale(1.4) rotate(0deg)" },
            { opacity: 1, transform: `translate(${targetX * 0.4}px, ${targetY * 0.4}px) scale(1.3) rotate(90deg)`, offset: 0.4 },
            { opacity: 0, transform: `translate(${targetX}px, ${targetY}px) scale(0) rotate(220deg)` },
          ],
          { duration: 650, delay, easing: "cubic-bezier(0.12, 0.9, 0.28, 1)", fill: "forwards" }
        );

        window.setTimeout(() => spark.remove(), 750);
      }
    };

    const handleEvent = (event: MouseEvent | PointerEvent) => {
      const now = Date.now();
      if (now - lastTriggerTime.current < 80) return; // Debounce rapid pointerdown + click

      const target = event.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], .product-card-shell, input[type='button'], input[type='submit'], .cursor-pointer"
      ) as HTMLElement | null;
      if (!interactive || interactive.hasAttribute("disabled")) return;

      lastTriggerTime.current = now;

      const rect = interactive.getBoundingClientRect();
      const x = event.clientX || rect.left + rect.width / 2;
      const y = event.clientY || rect.top + rect.height / 2;

      triggerSparksAt(x, y, interactive);
    };

    document.addEventListener("pointerdown", handleEvent, { passive: true });
    document.addEventListener("click", handleEvent, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", handleEvent);
      document.removeEventListener("click", handleEvent);
    };
  }, []);

  return null;
}
