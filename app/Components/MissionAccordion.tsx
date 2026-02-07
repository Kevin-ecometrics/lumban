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
      title: t("Excelencia médica"),
      content: t(
        "Exceder las expectativas del paciente proporcionando un servicio incomparable, atención al detalle y los más altos estándares de excelencia médica."
      ),
    },
    {
      title: t("Tecnología de vanguardia"),
      content: t(
        "Brindar atención de la más alta calidad utilizando tecnología médica moderna y procedimientos de diagnóstico avanzados."
      ),
    },
    {
      title: t("Atención personalizada"),
      content: t(
        "Dedicar el tiempo necesario a cada paciente para comprender plenamente sus inquietudes, objetivos y necesidades médicas."
      ),
    },
    {
      title: t("Disponibilidad inmediata"),
      content: t(
        "Estar siempre disponible para atender consultas oportunamente, valorando el tiempo y la tranquilidad del paciente."
      ),
    },
    {
      title: t("Actualización constante"),
      content: t(
        "Mantenerse actualizado con las técnicas más innovadoras y avances de vanguardia en la otorrinolaringología."
      ),
    },
    {
      title: t("Experiencia positiva"),
      content: t(
        "Asegurar que cada paciente tenga una experiencia médica agradable, humana y satisfactoria."
      ),
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
