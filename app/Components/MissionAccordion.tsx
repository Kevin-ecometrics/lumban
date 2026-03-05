"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface MissionItem {
  title: string;
  content: string;
}

export default function MissionAccordion() {
  const { t } = useTranslation();
  const missions: MissionItem[] = [
    {
      title: t("valores.excelencia.nombre"),
      content: t("valores.excelencia.desc"),
    },
    {
      title: t("valores.tecnologia.nombre"),
      content: t("valores.tecnologia.desc"),
    },
    {
      title: t("valores.atencion.nombre"),
      content: t("valores.atencion.desc"),
    },
    {
      title: t("valores.disponibilidad.nombre"),
      content: t("valores.disponibilidad.desc"),
    },
    {
      title: t("valores.actualizacion.nombre"),
      content: t("valores.actualizacion.desc"),
    },
    {
      title: t("valores.experiencia.nombre"),
      content: t("valores.experiencia.desc"),
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {missions.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-gray-900 bg-white hover:bg-gray-50 transition"
            >
              {item.title}
              <span className="text-xl cursor-pointer">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}