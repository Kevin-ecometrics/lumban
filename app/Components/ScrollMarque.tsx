"use client";
import React from "react";
import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ScrollMarquee() {
  const { t } = useTranslation();
  const WORDS = [
    t("Otorrinolaringología"),
    t("Experiencia"),
    t("Excelencia"),
    t("Innovación"),
    t("Atención Médica"),
  ];
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);
  const contentWidth = useRef(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Suavizar más la velocidad para evitar saltos bruscos
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 300,
    mass: 0.5,
  });

  const direction = useRef(1);

  /* Medimos el ancho real - solo en effects, no en render */
  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        contentWidth.current = contentRef.current.offsetWidth;
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Detectar cuándo el usuario está haciendo scroll activamente
  useEffect(() => {
    const handleScroll = () => {
      isScrolling.current = true;

      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        isScrolling.current = false;
        // Resetear suavemente cuando se deja de hacer scroll
        direction.current = 0;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useAnimationFrame((_, delta) => {
    // Solo procesar si ya tenemos el ancho medido
    if (contentWidth.current === 0 && contentRef.current) {
      contentWidth.current = contentRef.current.offsetWidth;
      return;
    }

    const velocity = smoothVelocity.get();

    // Solo mover si hay scroll significativo
    if (Math.abs(velocity) > 1) {
      // Calcular dirección basada en scroll
      const currentScrollY = scrollY.get();
      if (currentScrollY > lastScrollY.current) {
        direction.current = 1; // Scroll hacia abajo
      } else if (currentScrollY < lastScrollY.current) {
        direction.current = -1; // Scroll hacia arriba
      }
      lastScrollY.current = currentScrollY;

      // Ajustar la sensibilidad del movimiento
      const move =
        direction.current * (delta * 0.15 + Math.abs(velocity) * 0.008);
      const newX = baseX.get() - move;

      // Loop suave
      if (newX <= -contentWidth.current) {
        baseX.set(0);
      } else if (newX >= 0) {
        baseX.set(-contentWidth.current);
      } else {
        baseX.set(newX);
      }
    } else if (!isScrolling.current) {
      // Animación sutil cuando no hay scroll activo
      const subtleMove = delta * 0.2;
      baseX.set(baseX.get() - subtleMove);

      // Loop sutil
      if (baseX.get() <= -contentWidth.current) {
        baseX.set(0);
      }
    }
  });

  return (
    <section className="overflow-hidden py-16 bg-white">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          style={{ x: baseX }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MarqueeText ref={contentRef} words={WORDS} />
          <MarqueeText words={WORDS} />
        </motion.div>

        {/* Gradientes para suavizar los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

/* ---------- TEXTO ---------- */

const MarqueeText = React.forwardRef<
  HTMLDivElement,
  {
    words: string[];
  }
>(({ words }, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center text-[clamp(2rem,6vw,5rem)] font-light px-10"
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block px-4 transition-all duration-300 hover:scale-105 hover:text-gray-800 cursor-default">
            {word}
          </span>
          <span className="mx-4 text-black/30 transition-opacity duration-300 hover:opacity-100">
            -
          </span>
        </React.Fragment>
      ))}
    </div>
  );
});

MarqueeText.displayName = "MarqueeText";
