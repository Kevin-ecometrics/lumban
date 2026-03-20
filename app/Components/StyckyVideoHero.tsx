"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  video: string;
  thumbnail: string;
  alt: string;
  title: string;
  subtitle: string;
  textClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  mediaClassName?: string;
}

export default function Hero({
  video,
  thumbnail,
  alt,
  title,
  subtitle,
  textClassName,
  titleClassName,
  subtitleClassName,
  mediaClassName,
}: HeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [showVideo, setShowVideo] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
        }
      },
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Control del video
  useEffect(() => {
    if (showVideo) {
      videoRef.current?.play();
    }
  }, [showVideo]);

  return (
    <section ref={ref} className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        {!showVideo ? (
          // 🔹 IMAGEN (TU ANIMACIÓN ORIGINAL)
          <motion.img
            key="image"
            src={thumbnail}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover ${mediaClassName}`}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        ) : (
          // 🔹 VIDEO (MISMA ANIMACIÓN)
          <motion.video
            key="video"
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover ${mediaClassName}`}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Texto */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center ${textClassName}`}
      >
        <h1 className={titleClassName}>{title}</h1>
        <p className={subtitleClassName}>{subtitle}</p>
      </div>
    </section>
  );
}
