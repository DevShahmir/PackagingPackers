"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export default function AmbientBackground() {
  const ambientRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ambient = ambientRef.current;
    if (!canvas || !ambient) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let lastFrame = 0;
    let pointerX = window.innerWidth * 0.5;
    let pointerY = window.innerHeight * 0.35;
    let particles: Particle[] = [];

    const createParticles = () => {
      const count = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : Math.min(8, Math.max(4, Math.floor(window.innerWidth / 180)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 0.75 + 0.25,
        alpha: Math.random() * 0.38 + 0.12,
      }));
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      ambient.style.setProperty("--pointer-x", `${(pointerX / window.innerWidth) * 100}%`);
      ambient.style.setProperty("--pointer-y", `${(pointerY / window.innerHeight) * 100}%`);
    };

    const draw = (time: number) => {
      frame = window.requestAnimationFrame(draw);
      if (time - lastFrame < 32) return;
      lastFrame = time;

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        const dx = pointerX - particle.x;
        const dy = pointerY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          particle.x -= dx * 0.0006;
          particle.y -= dy * 0.0006;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10) particle.x = window.innerWidth + 10;
        if (particle.x > window.innerWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = window.innerHeight + 10;
        if (particle.y > window.innerHeight + 10) particle.y = -10;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(213, 196, 174, ${particle.alpha})`;
        context.fill();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    if (!window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={ambientRef}
      aria-hidden="true"
      className="ambient-background"
      style={{ "--pointer-x": "50%", "--pointer-y": "35%" } as React.CSSProperties}
    >
      <canvas ref={canvasRef} className="ambient-particles" />
      <span className="ambient-line ambient-line-one" />
      <span className="ambient-line ambient-line-two" />
      <span className="ambient-orbit ambient-orbit-one" />
      <span className="ambient-orbit ambient-orbit-two" />
    </div>
  );
}
