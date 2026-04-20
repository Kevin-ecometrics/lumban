"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getLocalizedPath, getRouteByKey, Lang } from "../i18n/routeMap";

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

  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isNearBottom, setIsNearBottom] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  // Función para ordenar alfabéticamente de Z a A (inverso)
  const sortReverse = <T extends { title: string }>(items: T[]): T[] => {
    return [...items].sort((a, b) => b.title.localeCompare(a.title, currentLang === "en" ? "en" : "es"));
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

  const menuItems: LinkItem[] = sortReverse([
    {
      title: t("navbar.home"),
      href: getRouteByKey("home", currentLang),
    },
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
  ]);

  const handleLanguageChange = (lang: Lang) => {
    i18n.changeLanguage(lang);
    const nextPath = getLocalizedPath(pathname ?? "/", lang);
    if (nextPath && nextPath !== pathname) {
      router.push(nextPath);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5" aria-label="Navegación principal">
        {/* LOGO - Con animación de desaparición */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: isNearBottom ? 0 : 1,
            y: isNearBottom ? -20 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pointer-events-none"
        >
          <Link
            href={getRouteByKey("home", currentLang)}
            className="pointer-events-auto"
            aria-label="Ir a página principal - Dr. Lumbán"
          >
            <img
              src="/logo-secondary.png"
              alt="Dr. Jaime Lumbán - Otorrinolaringólogo"
              className="h-32 w-auto md:block hidden"
            />
          </Link>
        </motion.div>

        {/* BUTTON */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú de navegación"
          className="text-white text-2xl bg-gray-500 px-2 py-2 rounded-full hover:bg-gray-600 transition"
        >
          <FaBars aria-hidden="true" />
        </button>
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
              className="fixed top-6 right-6 z-[100] w-[320px] bg-[#eaeaea] rounded-[28px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs tracking-[0.2em] text-gray-500">
                  MENU
                </span>

                {/* LANGUAGE TOGGLE */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleLanguageChange("es")}
                    className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                      currentLang === "es"
                        ? "bg-gray-800 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                      currentLang === "en"
                        ? "bg-gray-800 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    EN
                  </button>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-700 hover:rotate-90 transition"
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
                          className="text-3xl font-medium text-gray-800 flex justify-between w-full"
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
                                        className="text-lg text-gray-600 flex justify-between w-full"
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
                                                className="block text-sm text-gray-500"
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
                                      className="block text-lg text-gray-600"
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
                        className="text-3xl font-medium text-gray-800"
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
