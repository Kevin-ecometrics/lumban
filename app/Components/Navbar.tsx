"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaChevronDown,
  FaChevronRight,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  getLocalizedPath,
  getRouteByKey,
  Lang,
} from "../i18n/routeMap";

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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  const menuItems: LinkItem[] = [
    {
      title: t("Inicio"),
      href: getRouteByKey("home", currentLang),
    },
    {
      title: t("Acerca de"),
      subItems: [
        {
          title: t("Perfil del Dr. Lumban"),
          href: getRouteByKey("profile", currentLang),
        },
        {
          title: t("Certificaciones"),
          href: getRouteByKey("certifications", currentLang),
        },
        {
          title: t("Instalaciones"),
          href: getRouteByKey("facilities", currentLang),
        },
      ],
    },
    {
      title: t("Padecimientos"),
      subItems: [
        {
          title: t("Oído"),
          href: getRouteByKey("ear", currentLang),
          subItems: [
            {
              title: t("Vértigo y Mareo"),
              href: getRouteByKey("vertigo-dizziness", currentLang),
            },
            {
              title: t("Pérdida de Audición"),
              href: getRouteByKey("hearing-loss", currentLang),
            },
          ],
        },
        {
          title: t("Nariz"),
          href: getRouteByKey("nose", currentLang),
          subItems: [
            {
              title: t("Septoplastia"),
              href: getRouteByKey("septoplasty", currentLang),
            },
            {
              title: t("Sinusitis"),
              href: getRouteByKey("sinusitis", currentLang),
            },
            {
              title: t("Congestión Nasal"),
              href: getRouteByKey("nasal-congestion", currentLang),
            },
            {
              title: t("Obstrucción Nasal"),
              href: getRouteByKey("nasal-obstruction", currentLang),
            },
            { title: t("Alergias"), href: getRouteByKey("allergies", currentLang) },
          ],
        },
        {
          title: t("Garganta"),
          href: getRouteByKey("throat", currentLang),
          subItems: [
            {
              title: t("Problemas de la Garganta"),
              href: getRouteByKey("throat-problems", currentLang),
            },
            { title: t("Ronquidos"), href: getRouteByKey("snoring", currentLang) },
            {
              title: t("Apnea del Sueño"),
              href: getRouteByKey("sleep-apnea", currentLang),
            },
            {
              title: t("Trastornos de la Voz"),
              href: getRouteByKey("voice-disorders", currentLang),
            },
          ],
        },
        {
          title: t("Otorrinopediatría"),
          href: getRouteByKey("pediatric-ent", currentLang),
        },
      ],
    },
    {
      title: t("Procedimientos"),
      subItems: [
        {
          title: t("Endoscopia para Sinusitis"),
          href: getRouteByKey("endoscopic-surgery", currentLang),
        },
        {
          title: t("Cirugía Antirronquido"),
          href: getRouteByKey("anti-snoring-surgery", currentLang),
        },
        {
          title: t("Cirugía Microscópica de Laringe"),
          href: getRouteByKey("microscopic-surgery", currentLang),
        },
      ],
    },
    {
      title: t("Rinoplastia"),
      href: getRouteByKey("aesthetic-nose", currentLang),
    },
    {
      title: t("Contacto"),
      href: getRouteByKey("contact", currentLang),
    },
  ];

  const handleLanguageChange = (lang: Lang) => {
    i18n.changeLanguage(lang);
    const nextPath = getLocalizedPath(pathname ?? "/", lang);
    if (nextPath && nextPath !== pathname) {
      router.push(nextPath);
    }
  };

  const toggleMenu = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  const toggleSubMenu = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  const toggleMobileSubMenu = (title: string) => {
    setMobileSubMenu(mobileSubMenu === title ? null : title);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSubMenu(null);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={getRouteByKey("home", currentLang)} className="flex items-center space-x-2">
          <img
            src="https://drlumban.com/logo.png"
            alt="Logo Doctor Lumban"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.title} className="relative">
              {item.subItems ? (
                <button
                  onClick={() => toggleMenu(item.title)}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.title}
                  <FaChevronDown
                    className={`ml-1 transition-transform duration-200 ${
                      openMenu === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.title}
                </a>
              )}

              <AnimatePresence>
                {openMenu === item.title && item.subItems && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-visible z-10"
                  >
                    {item.subItems.map((sub) => (
                      <div key={sub.title} className="relative group">
                        {sub.subItems ? (
                          <>
                            <button
                              onClick={() => toggleSubMenu(sub.title)}
                              className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {sub.title}
                              <FaChevronRight
                                className={`transition-transform ${
                                  openSubMenu === sub.title ? "rotate-90" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {openSubMenu === sub.title && (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-visible z-20"
                                >
                                  {sub.subItems.map((s) => (
                                    <a
                                      key={s.title}
                                      href={s.href}
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                      {s.title}
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <a
                            href={sub.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {sub.title}
                          </a>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
            <button
              onClick={() => handleLanguageChange("es")}
              className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${
                currentLang === "es"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              aria-label={t("Cambiar idioma a español")}
            >
              ES
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${
                currentLang === "en"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              aria-label={t("Cambiar idioma a inglés")}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* MOBILE MENU FULLSCREEN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white md:hidden flex flex-col"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <img
                src="https://drlumban.com/logo.png"
                alt="Dr Lumban"
                className="h-12"
              />
              <button
                onClick={closeMobileMenu}
                className="text-xl text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* INFO RÁPIDA */}
            <div className="px-6 py-4 border-b bg-gray-50">
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <span>📍</span> {t("Tijuana, Baja California")}
                </p>
                <p className="flex items-center gap-2">
                  <span>🕒</span> {t("Lun–Vie · 9:00 – 18:00")}
                </p>
                <p className="flex items-center gap-2">
                  <span>☎</span> {t("(664) 123 4567")}
                </p>
              </div>
            </div>

            {/* MENU SCROLLABLE */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleMenu(item.title)}
                        className="w-full flex justify-between items-center text-[18px] font-medium text-gray-800"
                      >
                        {item.title}
                        <FaChevronDown
                          className={`transition-transform ${
                            openMenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {openMenu === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 mt-4 space-y-4"
                          >
                            {item.subItems.map((sub) => (
                              <div key={sub.title}>
                                {sub.subItems ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        toggleMobileSubMenu(sub.title)
                                      }
                                      className="w-full flex justify-between items-center text-gray-600 text-[16px]"
                                    >
                                      {sub.title}
                                      <FaChevronRight
                                        className={`transition-transform ${
                                          mobileSubMenu === sub.title
                                            ? "rotate-90"
                                            : ""
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence>
                                      {mobileSubMenu === sub.title && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="pl-4 mt-3 space-y-3"
                                        >
                                          {sub.subItems.map((s) => (
                                            <Link
                                              key={s.title}
                                              href={s.href}
                                              onClick={closeMobileMenu}
                                              className="block text-gray-500 text-[15px]"
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
                                    onClick={closeMobileMenu}
                                    className="block text-gray-600 text-[16px]"
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
                      onClick={closeMobileMenu}
                      className="block text-[18px] font-medium text-gray-800"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* REDES */}
            <div className="px-6 py-4 border-t">
              <p className="text-sm text-gray-500 mb-3">{t("Síguenos")}</p>
              <div className="flex gap-4 text-lg text-gray-600">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-blue-600"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-pink-600"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-blue-700"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            {/* CTA FIJO */}
            <div className="border-t px-6 py-4 bg-white space-y-4">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                    currentLang === "es"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  aria-label={t("Cambiar idioma a español")}
                >
                  ES
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                    currentLang === "en"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  aria-label={t("Cambiar idioma a inglés")}
                >
                  EN
                </button>
              </div>
              <Link
                href={getRouteByKey("contact", currentLang)}
                onClick={closeMobileMenu}
                className="block w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                {t("Agendar cita")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
