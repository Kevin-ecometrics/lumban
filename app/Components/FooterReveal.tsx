"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";

const WORD = "DR LUMBAN";

const MENU_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Perfil", href: "/perfil/" },
  { label: "Certificaciones", href: "/certificaciones/" },
  { label: "Instalaciones", href: "/instalaciones/" },
  { label: "Contacto", href: "/contacto/" },
  { label: "Rinoplastia", href: "/cosmetica-nariz/" },
  { label: "Apnea del Sueño", href: "/apnea-sueno/" },
  { label: "Otorrinopediatría", href: "/otorrinopediatria/" },
] as const;

const SOCIAL_ITEMS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;

/* ======================================================
   Animated Letter (NO TOCAR)
====================================================== */
const AnimatedLetter = React.memo(function AnimatedLetter({
  letter,
  centerDistance,
  maxDistance,
  progress,
}: {
  letter: string;
  centerDistance: number;
  maxDistance: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / (maxDistance + 1.5);
  const start = centerDistance * step;
  const end = start + step;

  const letterProgress = useTransform(progress, [start, end], [0, 1], {
    clamp: true,
  });

  const smooth = useSpring(letterProgress, {
    stiffness: 30,
    damping: 10,
    mass: 1.3,
  });

  const y = useTransform(smooth, [0, 0.45, 0.8, 1], [60, -10, 2, 0]);
  const opacity = useTransform(smooth, [0, 0.2, 1], [0, 1, 1]);
  const scale = useTransform(smooth, [0, 0.5, 1], [0.9, 1.05, 1]);

  return (
    <motion.span
      style={{ y, opacity, scale, display: "inline-block" }}
      className="font-black text-black"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
});

AnimatedLetter.displayName = "AnimatedLetter";

/* ======================================================
   Nav Item (ACTIVE LINK)
====================================================== */
const NavItem = ({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive?: boolean;
}) => (
  <motion.li
    className={`text-base md:text-lg py-1.5 cursor-pointer transition-colors duration-300
      ${
        isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"
      }`}
    whileHover={{ x: 4 }}
    whileTap={{ x: 2 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
  >
    <a href={href} className="relative inline-block">
      {label}

      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black" />
      )}
    </a>
  </motion.li>
);

/* ======================================================
   Footer
====================================================== */
export default function FooterBase() {
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start 80%", "end 90%"],
  });

  const progress = useTransform(scrollYProgress, [0.15, 1], [0, 1], {
    clamp: true,
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 1]
  );

  const letters = WORD.split("");
  const centerIndex = Math.floor(letters.length / 2);
  const maxDistance = Math.max(
    ...letters.map((_, i) => Math.abs(i - centerIndex))
  );

  return (
    <footer ref={footerRef} className="relative bg-white w-full">
      <motion.div
        className="w-full max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 
                   pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8"
        style={{ opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img src="https://drlumban.com/logo.png" alt="Dr Lumban" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-gray-500 text-xs uppercase mb-3 font-semibold">
                Menu
              </h3>
              <ul className="space-y-2">
                {MENU_ITEMS.map((item) => (
                  <NavItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    isActive={pathname === item.href}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-500 text-xs uppercase mb-3 font-semibold">
                Socials
              </h3>
              <ul className="space-y-2">
                {SOCIAL_ITEMS.map((item) => (
                  <NavItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-500 text-xs uppercase mb-3 font-semibold">
                Contacto
              </h3>

              <div className="space-y-2">
                <a
                  href="mailto:contacto@drlumban.com"
                  className="block text-base md:text-lg text-black hover:text-azul"
                >
                  contacto@drlumban.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[0.5px] bg-gray-200 my-8" />

        {/* Logo animado (INTOCABLE) */}
        <div className="w-full py-16 flex justify-center">
          <div className="text-6xl md:text-8xl font-black tracking-tighter flex">
            {letters.map((letter, index) => (
              <AnimatedLetter
                key={`${letter}-${index}`}
                letter={letter}
                centerDistance={Math.abs(index - centerIndex)}
                maxDistance={maxDistance}
                progress={progress}
              />
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            &copy; {new Date().getFullYear()} Dr. Jaime Lumbán Gutierrez.
            Especialista en Otorrinolaringología.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
