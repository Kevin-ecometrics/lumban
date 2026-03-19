"use client";

import React, { useState } from "react";
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
          ],
        },
      ],
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

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5">
        {/* LOGO */}
        <Link href={getRouteByKey("home", currentLang)}>
          <img src="/logo.png" className="h-12" />
        </Link>

        {/* BUTTON */}
        <button onClick={() => setOpen(true)} className="text-white text-2xl">
          <FaBars />
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

                <button
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-700 hover:rotate-90 transition"
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

              {/* LANG */}
              <div className="flex justify-center gap-4 mt-6">
                <button onClick={() => handleLanguageChange("es")}>ES</button>
                <button onClick={() => handleLanguageChange("en")}>EN</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
