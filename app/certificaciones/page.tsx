// app/certificaciones/page.tsx
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

export default function CertificacionesPage() {
  const { t } = useTranslation();
  const certifications = [
    "https://drlumban.com/certificado1.png",
    "https://drlumban.com/certificado2.png",
    "https://drlumban.com/certificado3.jpg",
    "https://drlumban.com/certificado4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-white">
      <StickyImageHero
        title={t("Certificaciones")}
        subtitle={t("Especialista certificado en oídos, nariz y garganta")}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Header con nuevo contenido */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t(
              "Certificaciones y Reconocimientos: El Respaldo de una Trayectoria de Excelencia",
            )}
          </h1>

          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed">
              {t(
                "Para el Dr. Lumbán, la mejora continua es el estándar, no la excepción. Sus certificaciones y reconocimientos internacionales son el reflejo de 33 años de compromiso con la excelencia.",
              )}
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t(
                "En un campo que evoluciona constantemente, su actualización en las técnicas más avanzadas de rinoplastia y otorrinolaringología asegura resultados precisos con un solo propósito: brindar al paciente la atención de alto nivel que merecen.",
              )}
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 inline-block border-b-2 border-gray-300 pb-2">
                {t(
                  "Trayectoria y preparación avalan el trabajo del mejor otorrinolaringólogo en Tijuana",
                )}
              </h4>
            </div>
          </div>
        </motion.header>

        {/* Grid de certificaciones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16"
        >
          {certifications.map((certification, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(certification)}
            >
              <div className="flex items-center justify-center h-[340px] p-6 bg-gray-50">
                <motion.img
                  src={certification}
                  alt={`${t("Certificación")} ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  {t("Certificación")} {index + 1}
                </p>
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
                alt={t("Imagen ampliada")}
                className="w-full h-full rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
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
