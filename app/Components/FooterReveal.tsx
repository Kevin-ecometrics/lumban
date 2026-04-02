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
import { useTranslation } from "react-i18next";
import { getRouteByKey, normalizePath } from "../i18n/routeMap";

const WORD = "Dr Lumbán"; // 👈 Cambiado de "DR LUMBÁN" a "Dr Lumbán"

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/drlumban/?locale=es_LA",
  },
  { label: "Instagram", href: "https://www.instagram.com/lumbanjaime/" },
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
      className="font-black text-azul"
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
  isExternal = false,
}: {
  label: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
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
    <a
      href={href}
      className="relative inline-block"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}

      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black" />
      )}
    </a>
  </motion.li>
);

/* ======================================================
   Social Nav Item (para enlaces externos)
====================================================== */
const SocialNavItem = ({ label, href }: { label: string; href: string }) => (
  <motion.li
    className="text-base md:text-lg py-1.5 cursor-pointer transition-colors duration-300 text-gray-600 hover:text-black"
    whileHover={{ x: 4 }}
    whileTap={{ x: 2 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block"
    >
      {label}
    </a>
  </motion.li>
);

/* ======================================================
   Footer
====================================================== */
export default function FooterBase() {
  const { t, i18n } = useTranslation();
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  const MENU_ITEMS = [
    { label: t("footer.home"), href: getRouteByKey("home", currentLang) },
    { label: t("footer.profile"), href: getRouteByKey("profile", currentLang) },
    {
      label: t("footer.certifications"),
      href: getRouteByKey("certifications", currentLang),
    },
    // {
    //   label: t("Instalaciones"),
    //   href: getRouteByKey("facilities", currentLang),
    // },
    { label: t("footer.contact"), href: getRouteByKey("contact", currentLang) },
    // {
    //   label: t("Rinoplastia"),
    //   href: getRouteByKey("aesthetic-nose", currentLang),
    // },
    // {
    //   label: t("Apnea del Sueño"),
    //   href: getRouteByKey("sleep-apnea", currentLang),
    // },
    // {
    //   label: t("Otorrinopediatría"),
    //   href: getRouteByKey("pediatric-ent", currentLang),
    // },
  ] as const;

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
    [0, 1, 1, 1],
  );

  const letters = WORD.split("");
  const centerIndex = Math.floor(letters.length / 2);
  const maxDistance = Math.max(
    ...letters.map((_, i) => Math.abs(i - centerIndex)),
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
            <img src="/logo.png" alt="Dr Lumban" className="h-48" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-gray-500 text-xs uppercase mb-3 font-semibold">
                {t("footer.menu")}
              </h3>
              <ul className="space-y-2">
                {MENU_ITEMS.map((item) => (
                  <NavItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    isActive={
                      normalizePath(pathname ?? "/") ===
                      normalizePath(item.href)
                    }
                  />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-500 text-xs uppercase mb-3 font-semibold">
                {t("footer.socials")}
              </h3>
              <ul className="space-y-2">
                {SOCIAL_ITEMS.map((item) => (
                  <SocialNavItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-500 text-xs uppercase mb-3 font-semibold">
                {t("footer.contact")}
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
          <div className="text-6xl md:text-[200px] font-black tracking-tighter flex">
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
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
