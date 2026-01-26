// components/StickyImageHero.tsx
"use client";

import { useEffect, useState } from "react";

interface StickyImageHeroProps {
  src?: string;
  alt?: string;
  title: string;
  subtitle?: string;
}

export default function StickyImageHero({
  src,
  alt,
  title,
  subtitle,
}: StickyImageHeroProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Timing largo, pero sin retrasar demasiado el inicio
      const start = vh * 0.2;
      const end = vh * 1.6;

      const p = (scrollY - start) / (end - start);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- INTERPOLACIONES ---------------- */

  // Imagen (balance editorial)
  const scale = 0.65 + progress * 0.55; // 0.65 → 1.2
  const translateY = 100 - progress * 160; // 🔥 visible pero centrado
  const borderRadius = 28 - progress * 28; // 28px → 0

  // Texto
  const textOpacity = Math.max(0, 1 - progress * 1.2);
  const textTranslateY = progress * -50;

  return (
    <section className="relative h-[240vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl px-6">
          {/* ---------------- TEXTOS ---------------- */}
          <div
            className="absolute left-1/2 w-full text-center"
            style={{
              opacity: textOpacity,
              transform: `translate(-50%, ${textTranslateY}px)`,
            }}
          >
            <h1 className="text-black text-3xl md:text-8xl font-bold tracking-wide mb-6">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-blue-500 text-2xl md:text-4xl font-medium">
                {subtitle}
              </h2>
            )}
          </div>

          {/* ---------------- IMAGEN ---------------- */}
          <div
            className="relative mx-auto overflow-hidden shadow-2xl"
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              borderRadius: `${borderRadius}px`,
              transition: "transform 0.12s linear, border-radius 0.12s linear",
            }}
          >
            <img src={src} alt={alt} className="w-full h-[70vh] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
