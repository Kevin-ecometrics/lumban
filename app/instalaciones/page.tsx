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
  const certifications = [
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
        subtitle={t("Conoce las nuevas instalaciones del consultorio del Dr. Lumbán")}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t("Edificio RÍO MÉDICA")}
          </h1>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {certifications.map((certification, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(certification)}
            >
              <div className="flex items-center justify-center h-[340px] p-6 bg-gray-50">
                <motion.img
                  src={certification}
                  alt={`${t("Instalación")} ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt={t("Imagen ampliada")}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
