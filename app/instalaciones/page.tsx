// app/instalaciones/page.tsx
"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import StickyImageHero from "../Components/StickyImageHero";
import { useTranslation } from "react-i18next";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function InstalacionesPage() {
  const { t } = useTranslation();
  const installations = [
    // Las 4 últimas del array original → primeras visibles
    "/instalaciones/Dr. Jaime Lumban-instalaciones.webp",
    "/instalaciones/dr lumban recepcion.webp",
    "/instalaciones/El consultorio cuenta con todo el equipo para realizar endoscopias y procedimientos no invasivos.webp",
    "/instalaciones/Interior del consultorio donde la calidad y comodiad destacan.webp",
    // Nuevas: Lumb-0074 y Lumb-0227
    "/instalaciones/Lumb-0074.webp",
    "/instalaciones/Lumb-0227.webp",
    // img01 → luego Bienvenido en el centro (índice 7 de 15) → img02-img08
    "/instalaciones/img01-consultorio_rio_medica_dr_lumban.jpg",
    "/instalaciones/Bienvenido a tu consultorio con el experto en rinoplastia Jaime Lumban.webp",
    "/instalaciones/img02-consultorio_rio_medica_dr_lumban.jpg",
    "/instalaciones/img03-consultorio_rio_medica_dr_lumban.jpg",
    "/instalaciones/img04-consultorio_rio_medica_dr_lumban.jpg",
    "/instalaciones/img05-consultorio_rio_medica_dr_lumban.jpg",
    "/instalaciones/img06-consultorio_rio_medica_dr_lumban.jpg",
    "/instalaciones/img07-consultorio_rio_medica_dr_lumban.jpg",
    "/instalaciones/img08-consultorio_rio_medica_dr_lumban.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-white">
      <StickyImageHero
        src="/instalaciones/Exterior del consultorio ubicado en RIO MEDICA.webp"
        title={t("facilities.hero_title")}
        subtitle={t("facilities.hero_subtitle")}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Header con nuevo contenido */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t("facilities.title")}
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
              {t("facilities.subtitle1")}
            </h2>

            <h3 className="text-xl md:text-2xl text-gray-600 font-light">
              {t("facilities.subtitle2")}
            </h3>

            <a
              href="https://maps.google.com/?q=Edificio+Río+Médica+Tijuana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-gray-900 underline hover:no-underline transition-colors"
            >
              {t("facilities.google_maps")} →
            </a>
          </div>
        </motion.header>

        {/* Grid de instalaciones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {installations.map((installation, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(installation)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <motion.img
                  src={installation}
                  alt={`${t("facilities.facility_label")} ${index + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </section>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90%] max-w-[90%]"
            >
              <img
                src={selectedImage}
                alt={t("facilities.expanded_image")}
                className="w-full h-full rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label={t("facilities.close")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
