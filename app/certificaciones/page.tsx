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
  const experienceYears = new Date().getFullYear() - 1993;
  const certifications = [
    "/certificados/certificado_01.png",  // UABC - Médico General (~1986)
    "/certificados/certificado_02.png",  // UNAM - Especialidad ORL (1992)
    "/certificados/certificado_03.jpg",  // AAO - Corresponding Member (1997)
    "/certificados/certificado_04.png",  // CONACEM 2021-2025 (Ene 2021)
    "/certificados/certificado_05.png",  // Mérida 70° Congreso Digital (May 2021)
    "/certificados/certificado_06.png",  // AAO-HNSF Virtual Meeting (Oct 2021)
    "/certificados/certificado_07.png",  // U.S. Medical Tourism Member
    "/certificados/certificado_08.png",  // MEDIPOL University Hospital (Jul 2022)
    "/certificados/certificado_09.png",  // Multispecialty Aesthetic Conf. (Ago 2022)
    "/certificados/certificado_10.png",  // Focus on Rhinoplasty & Face (Dic 2022)
    "/certificados/certificado_11.png",  // CORPFACE - Rinoplastia (Jun 2023)
    "/certificados/certificado_12.png",  // FURLONG Rinoplastia Ultrasónica (Ago 2023)
    "/certificados/certificado_13.png",  // LXXII Congreso Cancún (2023)
    "/certificados/certificado_14.png",  // FESORIMEX Chihuahua (Oct 2023)
    "/certificados/certificado_15.png",  // CMORL y CCC (Ene 2024)
    "/certificados/certificado_16.png",  // XIX Curso Rinología (Jul 2025)
    "/certificados/certificado_17.png",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-white">
      <StickyImageHero
        src="/certificados/El doctor Jaime Lumban es un otorrino certificado por el consejo mexicano de otorrinolaringologia.jpg"
        title={t("certifications.hero_title")}
        subtitle={t("certifications.hero_subtitle")}
        imgClassName="h-[85vh] object-contain"
        noBorderRadius
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
            {t("certifications.title")}
          </h1>

          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed">
              {t("certifications.description1")} {experienceYears}{" "}
              {t("certifications.description1_suffix")}
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t("certifications.description2")}
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 inline-block border-b-2 border-gray-300 pb-2">
                {t("certifications.subtitle")}
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
                  alt={`${t("certifications.certification_label")} ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
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
                alt={t("certifications.expanded_image")}
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
