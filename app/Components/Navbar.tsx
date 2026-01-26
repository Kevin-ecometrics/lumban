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

const menuItems: LinkItem[] = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Acerca de",
    subItems: [
      { title: "Perfil del Dr. Lumban", href: "/perfil/" },
      { title: "Certificaciones", href: "/certificaciones/" },
      { title: "Instalaciones", href: "/instalaciones/" },
    ],
  },
  {
    title: "Padecimientos",
    subItems: [
      {
        title: "Oído",
        href: "/oido/",
        subItems: [
          { title: "Vértigo y Mareo", href: "/vertigo-mareo/" },
          { title: "Pérdida de Audición", href: "/perdida-audicion/" },
        ],
      },
      {
        title: "Nariz",
        href: "/nariz/",
        subItems: [
          { title: "Septoplastia", href: "/septoplastia/" },
          { title: "Sinusitis", href: "/sinusitis/" },
          { title: "Congestión Nasal", href: "/congestion-nasal/" },
          { title: "Obstrucción Nasal", href: "/obstruccion-nasal/" },
          { title: "Alergias", href: "/alergias/" },
        ],
      },
      {
        title: "Garganta",
        href: "/garganta/",
        subItems: [
          { title: "Problemas de la Garganta", href: "/problemas-garganta/" },
          { title: "Ronquidos", href: "/ronquidos/" },
          { title: "Apnea del Sueño", href: "/apnea-sueno/" },
          { title: "Trastornos de la Voz", href: "/trastornos-voz/" },
        ],
      },
      { title: "Otorrinopediatría", href: "/otorrinopediatria/" },
    ],
  },
  {
    title: "Procedimientos",
    subItems: [
      { title: "Endoscopia para Sinusitis", href: "/cirugia-endoscopica/" },
      { title: "Cirugía Antirronquido", href: "/cirugia-antirronquido/" },
      {
        title: "Cirugía Microscópica de Laringe",
        href: "/cirugia-microscopica/",
      },
    ],
  },
  {
    title: "Rinoplastia",
    href: "/cosmetica-nariz/",
  },
  {
    title: "Contacto",
    href: "/contacto/",
  },
];

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

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
        <Link href="/" className="flex items-center space-x-2">
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
                  <span>📍</span> Tijuana, Baja California
                </p>
                <p className="flex items-center gap-2">
                  <span>🕒</span> Lun–Vie · 9:00 – 18:00
                </p>
                <p className="flex items-center gap-2">
                  <span>☎</span> (664) 123 4567
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
              <p className="text-sm text-gray-500 mb-3">Síguenos</p>
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
            <div className="border-t px-6 py-4 bg-white">
              <Link
                href="/contacto"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Agendar cita
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
