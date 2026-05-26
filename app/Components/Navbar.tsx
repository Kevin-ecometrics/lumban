"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getLocalizedPath, getRouteByKey, Lang } from "../i18n/routeMap";
import { useTheme } from "./ThemeContext";

type ThemeColor = "morado" | "azul" | "verde";

interface SubLink {
  title: string;
  href: string;
  subItems?: SubLink[];
}

interface LinkItem {
  title: string;
  href?: string;
  subItems?: SubLink[];
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isNearBottom, setIsNearBottom] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHomepage =
    pathname === "/" || pathname === "/es" || pathname === "/en";

  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  // Función para ordenar alfabéticamente de Z a A (inverso)
  const sortReverse = <T extends { title: string }>(items: T[]): T[] => {
    return [...items].sort((a, b) =>
      b.title.localeCompare(a.title, currentLang === "en" ? "en" : "es"),
    );
  };

  // Detectar cuando se acerca al final de la página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = 100; // Distancia desde el final para ocultar el logo (en píxeles)

      // Si estamos a menos de 'threshold' píxeles del final
      if (scrollPosition >= documentHeight - threshold) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Llamar una vez para establecer el estado inicial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeItem: LinkItem = {
    title: t("navbar.home"),
    href: getRouteByKey("home", currentLang),
  };

  const menuItems: LinkItem[] = [
    homeItem,
    ...sortReverse([
      {
        title: t("navbar.about"),
        subItems: sortReverse([
          {
            title: t("navbar.profile"),
            href: getRouteByKey("profile", currentLang),
          },
          {
            title: t("navbar.certifications"),
            href: getRouteByKey("certifications", currentLang),
          },
          {
            title: t("navbar.facilities"),
            href: getRouteByKey("facilities", currentLang),
          },
        ]),
      },
      {
        title: t("navbar.conditions"),
        subItems: [
          {
            title: t("navbar.ear"),
            href: getRouteByKey("ear", currentLang),
            subItems: sortReverse([
              {
                title: t("navbar.hearing_loss"),
                href: getRouteByKey("hearing-loss", currentLang),
              },
              {
                title: t("navbar.vertigo"),
                href: getRouteByKey("vertigo-dizziness", currentLang),
              },
            ]),
          },
          {
            title: t("navbar.nose"),
            href: getRouteByKey("nose", currentLang),
            subItems: sortReverse([
              {
                title: t("navbar.allergies"),
                href: getRouteByKey("allergies", currentLang),
              },
              {
                title: t("navbar.nasal_congestion"),
                href: getRouteByKey("nasal-congestion", currentLang),
              },
              {
                title: t("navbar.nasal_obstruction"),
                href: getRouteByKey("nasal-obstruction", currentLang),
              },
              {
                title: t("navbar.septoplasty"),
                href: getRouteByKey("septoplasty", currentLang),
              },
              {
                title: t("navbar.sinusitis"),
                href: getRouteByKey("sinusitis", currentLang),
              },
            ]),
          },
          {
            title: t("navbar.pediatric_ent"),
            href: getRouteByKey("pediatric-ent", currentLang),
          },
          {
            title: t("navbar.throat"),
            href: getRouteByKey("throat", currentLang),
            subItems: sortReverse([
              {
                title: t("navbar.sleep_apnea"),
                href: getRouteByKey("sleep-apnea", currentLang),
              },
              {
                title: t("navbar.snoring"),
                href: getRouteByKey("snoring", currentLang),
              },
              {
                title: t("navbar.throat_problems"),
                href: getRouteByKey("throat-problems", currentLang),
              },
              {
                title: t("navbar.voice_disorders"),
                href: getRouteByKey("voice-disorders", currentLang),
              },
            ]),
          },
        ],
      },
      {
        title: t("navbar.procedures"),
        subItems: sortReverse([
          {
            title: t("navbar.anti_snoring_surgery"),
            href: getRouteByKey("anti-snoring-surgery", currentLang),
          },
          {
            title: t("navbar.endoscopic_surgery"),
            href: getRouteByKey("endoscopic-surgery", currentLang),
          },
          {
            title: t("navbar.microscopic_surgery"),
            href: getRouteByKey("microscopic-surgery", currentLang),
          },
          {
            title: t("navbar.sinusitis_surgery"),
            href: getRouteByKey("sinusitis-surgery", currentLang),
          },
        ]),
      },
      {
        title: t("navbar.blog"),
        subItems: [
          {
            title: t("navbar.blog1"),
            href: getRouteByKey(
              "guia-completa-para-tu-primera-visita-con-el-dr-lumban",
              currentLang,
            ),
          },
        ],
      },
      {
        title: t("navbar.rhinoplasty"),
        href: getRouteByKey("aesthetic-nose", currentLang),
      },
      {
        title: t("navbar.contact"),
        href: getRouteByKey("contact", currentLang),
      },
      {
        title: t("navbar.testimonials"),
        href: getRouteByKey("testimonials", currentLang),
      },
    ]),
  ];

  const handleLanguageChange = (lang: Lang) => {
    i18n.changeLanguage(lang);
    const nextPath = getLocalizedPath(pathname ?? "/", lang);
    if (nextPath && nextPath !== pathname) {
      router.push(nextPath);
    }
  };

  const themeBg: Record<string, string> = {
    morado: "bg-morado",
    azul: "bg-azul",
    verde: "bg-verde",
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5"
        aria-label="Navegación principal"
      >
        {/* LOGO O IMÁGENES SEGÚN TEMA */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: isNearBottom ? 0 : 1,
            y: isNearBottom ? -20 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pointer-events-none"
        >
          {isHomepage ? (
            <div className="flex gap-2 pointer-events-auto">
              {[
                { src: "/Dr Jaime Lumban otorrinolaringologo certificado Tijuana.webp", color: "morado" as ThemeColor, label: "Tema morado — Dr. Jaime Lumbán" },
                { src: "/Dr Jaime Lumban especialista oido nariz garganta Tijuana.webp", color: "verde" as ThemeColor, label: "Tema verde — Dr. Jaime Lumbán" },
                { src: "/Dr Jaime Lumban cirujano rinoplastia otorrino Tijuana.webp", color: "azul" as ThemeColor, label: "Tema azul — Dr. Jaime Lumbán" },
              ].map((img) => (
                <button
                  key={img.color}
                  onClick={() => setTheme(img.color)}
                  aria-label={img.label}
                  className="w-auto h-12 md:h-16 overflow-hidden hover:scale-105 transition-transform border-2 border-transparent hover:border-white"
                >
                  <img
                    src={img.src}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          ) : (
            <Link
              href={getRouteByKey("home", currentLang)}
              className="pointer-events-auto"
              aria-label="Ir a página principal - Dr. Lumbán"
            >
              <img
                src="/logo secundario Dr Jaime Lumban otorrinolaringologia Tijuana.webp"
                alt="Dr. Jaime Lumbán - Otorrinolaringólogo en Tijuana"
                width="640"
                height="294"
                className="h-32 w-auto md:block hidden"
              />
            </Link>
          )}
        </motion.div>

        {/* BUTTON + LANGUAGE */}
        <div className="flex items-center gap-2">
          {/* LANGUAGE TOGGLE */}
          <button
            onClick={() =>
              handleLanguageChange(currentLang === "es" ? "en" : "es")
            }
            aria-label={currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
            className="w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform shadow-md border-2 border-white/30"
          >
            {currentLang === "es" ? (
              /* US Flag - shown when in Spanish to switch to English */
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="w-full h-full">
                <circle cx="30" cy="30" r="30" fill="#B22234"/>
                <rect y="6.92" width="60" height="4.62" fill="#FFFFFF"/>
                <rect y="16.15" width="60" height="4.62" fill="#FFFFFF"/>
                <rect y="25.38" width="60" height="4.62" fill="#FFFFFF"/>
                <rect y="34.62" width="60" height="4.62" fill="#FFFFFF"/>
                <rect y="43.85" width="60" height="4.62" fill="#FFFFFF"/>
                <clipPath id="circle-clip-us">
                  <circle cx="30" cy="30" r="30"/>
                </clipPath>
                <rect x="0" y="0" width="30" height="32.31" fill="#3C3B6E" clipPath="url(#circle-clip-us)"/>
                {[0,1,2,3,4,5,6,7,8].map((col) =>
                  [0,1,2,3,4].map((row) => (
                    <text
                      key={`${col}-${row}`}
                      x={3 + col * 3.2}
                      y={5 + row * 6}
                      fontSize="4"
                      fill="white"
                      clipPath="url(#circle-clip-us)"
                    >★</text>
                  ))
                )}
              </svg>
            ) : (
              /* Mexico Flag - shown when in English to switch to Spanish */
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="w-full h-full">
                <circle cx="30" cy="30" r="30" fill="#006847"/>
                <rect x="20" y="0" width="20" height="60" fill="#FFFFFF"/>
                <rect x="40" y="0" width="20" height="60" fill="#CE1126"/>
                <clipPath id="circle-clip-mx">
                  <circle cx="30" cy="30" r="30"/>
                </clipPath>
                <g clipPath="url(#circle-clip-mx)">
                  <rect x="0" y="0" width="20" height="60" fill="#006847"/>
                  <rect x="20" y="0" width="20" height="60" fill="#FFFFFF"/>
                  <rect x="40" y="0" width="20" height="60" fill="#CE1126"/>
                  <ellipse cx="30" cy="30" rx="5" ry="6" fill="#8B4513" opacity="0.7"/>
                </g>
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú de navegación"
            className="text-white text-2xl bg-gray-500 px-2 py-2 rounded-full hover:bg-gray-600 transition"
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[90]"
              onClick={() => setOpen(false)}
            />

            {/* FLOATING CARD */}
            <motion.div
              initial={{ x: 80, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed top-6 right-6 z-[100] w-[320px] ${themeBg[theme]} rounded-[28px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]`}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs tracking-[0.2em] text-white/70">
                  MENU
                </span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-xl text-white hover:rotate-90 transition"
                  aria-label="Cerrar menú"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-5">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === item.title ? null : item.title,
                            )
                          }
                          className="text-3xl font-medium text-white flex justify-between w-full"
                        >
                          {item.title}
                          <FaChevronDown
                            className={`transition ${
                              activeMenu === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* SUBMENU */}
                        <AnimatePresence>
                          {activeMenu === item.title && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="pl-3 mt-3 space-y-2"
                            >
                              {item.subItems.map((sub) => (
                                <div key={sub.title}>
                                  {sub.subItems ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          setActiveSubMenu(
                                            activeSubMenu === sub.title
                                              ? null
                                              : sub.title,
                                          )
                                        }
                                        className="text-lg text-white/90 flex justify-between w-full"
                                      >
                                        {sub.title}
                                        <FaChevronRight />
                                      </button>

                                      <AnimatePresence>
                                        {activeSubMenu === sub.title && (
                                          <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="pl-3 mt-2 space-y-1"
                                          >
                                            {sub.subItems.map((s) => (
                                              <Link
                                                key={s.title}
                                                href={s.href}
                                                onClick={() => setOpen(false)}
                                                className="block text-sm text-white/75"
                                              >
                                                {s.title}
                                              </Link>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <Link
                                      href={sub.href!}
                                      onClick={() => setOpen(false)}
                                      className="block text-lg text-white/90"
                                    >
                                      {sub.title}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={() => setOpen(false)}
                        className="text-3xl font-medium text-white"
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* FOOTER - Optional spacing */}
              <div className="mt-4" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
