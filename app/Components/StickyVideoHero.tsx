"use client";

import { useEffect, useRef, useState } from "react";

/** Consideramos la animación en su máximo cuando progress ≥ este valor */
const PROGRESS_AT_MAX = 0.799;

interface StickyVideoHeroProps {
  src: string;
  /** Etiqueta accesible (equivalente a alt en imagen) */
  ariaLabel?: string;
  title: string;
  subtitle?: string;
  textClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  /** Clases del contenedor del video (mismo rol que imageClassName en StickyImageHero) */
  mediaClassName?: string;
  poster?: string;
  startTime?: number;
}

export default function StickyVideoHero({
  src,
  ariaLabel,
  title,
  subtitle,
  textClassName,
  titleClassName,
  subtitleClassName,
  mediaClassName,
  poster,
  startTime = 0,
}: StickyVideoHeroProps) {
  const resolvedLabel = ariaLabel ?? title;
  const [progress, setProgress] = useState(0);
  /** Empieza en silencio (autoplay al hacer scroll); el usuario puede activar sonido con los controles */
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const start = vh * 0.2;
      const end = vh * 1.6;

      const p = (scrollY - start) / (end - start);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (progress >= PROGRESS_AT_MAX) {
      el.currentTime = startTime;
      el.play().catch(() => {
        /* políticas del navegador; muted suele permitir play */
      });
    } else {
      el.pause();
      el.currentTime = startTime;
    }
  }, [progress]);

  /* Mismas interpolaciones que StickyImageHero */
  const scale = 0.65 + progress * 0.55;
  const translateY = 100 - progress * 160;
  const borderRadius = 28 - progress * 28;

  const textOpacity = Math.max(0, 1 - progress * 1.4);
  const textTranslateY = -40 + progress * -30;
  const textBlur = progress * 6;

  return (
    <section className="relative h-[240vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl px-6">
          <div
            className={`absolute left-1/2 top-[6%] w-full text-center z-20 ${
              textClassName ?? ""
            }`}
            style={{
              opacity: textOpacity,
              filter: `blur(${textBlur}px)`,
              transform: `translate(-50%, ${textTranslateY}px)`,
            }}
          >
            <h1
              className={`text-black text-3xl md:text-8xl font-bold tracking-wide mb-6 ${
                titleClassName ?? ""
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <h2
                className={`text-blue-500 text-2xl md:text-4xl font-medium ${
                  subtitleClassName ?? ""
                }`}
              >
                {subtitle}
              </h2>
            )}
          </div>

          <div
            className={`relative mx-auto mt-24 overflow-hidden shadow-2xl z-10 ${
              mediaClassName ?? ""
            }`}
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              borderRadius: `${borderRadius}px`,
              transition: "transform 0.12s linear, border-radius 0.12s linear",
            }}
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              className="w-full h-[70vh] object-cover block bg-black"
              controls
              controlsList="nodownload"
              onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
              playsInline
              loop
              preload="auto"
              aria-label={resolvedLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
