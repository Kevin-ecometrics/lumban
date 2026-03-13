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
    "https://drlumban.com/instalacion1.jpg",
    "https://drlumban.com/instalacion2.jpg",
    "https://drlumban.com/instalacion3.jpg",
    "https://drlumban.com/instalacion4.jpg",
    "https://drlumban.com/instalacion5.jpg",
    "https://drlumban.com/instalacion6.jpg",
    "https://drlumban.com/instalacion7.jpg",
    "https://drlumban.com/instalacion8.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-white">
      <StickyImageHero
        title={t("Instalaciones")}
        subtitle={t(
          "Conoce las nuevas instalaciones del consultorio del Dr. Lumbán",
        )}
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
            {t("El consultorio de otorrinolaringología que tu salud merece.")}
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
              {t("Visita nuestras instalaciones de primer nivel en Tijuana")}
            </h2>

            <h3 className="text-xl md:text-2xl text-gray-600 font-light">
              {t(
                "Nos encuentras en el Edificio Río Médica, a solo 10 minutos del cruce fronterizo",
              )}
            </h3>

            <a
              href="https://maps.google.com/?q=Edificio+Río+Médica+Tijuana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-gray-900 underline hover:no-underline transition-colors"
            >
              {t("Ver en Google Maps")} →
            </a>

            {/* Información adicional del edificio */}
            {/* <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Edificio Río Médica</span>
                <br />
                <span className="text-gray-600">
                  {t("Consultorio 503, 5to piso")}
                  <br />
                  {t(
                    "Blvd. Sánchez Taboada #10480-5to piso, Zona Río, 22010 Tijuana, B.C.",
                  )}
                </span>
              </p>
              <a
                href="https://maps.google.com/?q=Edificio+Río+Médica+Tijuana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gray-900 underline hover:no-underline transition-colors"
              >
                {t("Ver en Google Maps")} →
              </a>
            </div> */}
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
                  alt={`${t("Instalación")} ${index + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-500 text-center">
                  {t("Instalación")} {index + 1}
                </p>
              </div>
            </motion.figure>
          ))}
        </motion.div>

        {/* Información adicional de ubicación */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 inline-block mx-auto">
            <h4 className="text-xl font-serif text-gray-900 mb-3">
              {t("Horario de atención")}
            </h4>
            <p className="text-gray-600">
              {t("Lunes a Viernes: 9:00 AM - 6:00 PM")}
              <br />
              {t("Sábados: 9:00 AM - 2:00 PM")}
            </p>
            <p className="text-gray-500 mt-4 text-sm">
              {t("Estacionamiento disponible en el edificio")}
            </p>
          </div>
        </motion.div> */}
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
                alt={t("Imagen ampliada")}
                className="w-full h-full rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label={t("Cerrar")}
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
