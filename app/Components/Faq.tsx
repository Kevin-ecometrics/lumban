// components/FAQSection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

interface FAQItem {
  id: number;
  questionKey: string;
  answerKey: string;
}

const FAQSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      questionKey: "¿Cuándo debo acudir con un otorrinolaringólogo?",
      answerKey:
        "Es recomendable acudir cuando presentas:\n\nObstrucción nasal persistente\nRonquidos o apnea del sueño\nSinusitis frecuente\nDolor o infecciones recurrentes de garganta\nCambios en la voz\nMareos o pérdida auditiva\nInflamación o bolitas en cuello",
    },
    {
      id: 2,
      questionKey: "¿Cómo es una consulta otorrinolaringológica?",
      answerKey:
        "La consulta inicia con una entrevista clínica detallada, donde se evalúan:\n\nSíntomas actuales\nAntecedentes médicos y quirúrgicos\nAlergias\nHábitos (tabaquismo, uso de medicamentos etc.)\nHistoria de infecciones recurrentes o problemas respiratorios\n\nPosteriormente, se realiza una exploración física especializada de oídos, nariz y garganta.\n\nDependiendo del caso, pueden solicitarse estudios complementarios como:\n\nEstudios de imagen (radiografías o tomografía)\nPruebas de alergia\nEstudios auditivos\nCultivos o análisis específicos",
    },
    {
      id: 3,
      questionKey: "¿Cómo se lleva a cabo una valoración para rinoplastia?",
      answerKey:
        "La valoración incluye:\n\nAnálisis facial integral (proporciones, simetría y armonía del rostro)\nEvaluación funcional de la respiración nasal\nEstudio del tabique y estructuras internas\nFotografías clínicas\nExplicación detallada de expectativas reales y resultados posibles",
    },
    {
      id: 4,
      questionKey: "¿A partir de cuándo se ven los resultados?",
      answerKey:
        "El cambio es visible desde que se retira la férula (aproximadamente a los 7–10 días).\n\nSin embargo:\n\nLa inflamación disminuye progresivamente durante los primeros 3 meses.\nEl resultado más refinado puede apreciarse entre los 6 y 12 meses.\nLa paciencia es clave, ya que la nariz es una estructura que desinflama de manera gradual",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-4xl w-full mx-auto">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-12 md:mb-16"
        >
          {t("Preguntas Frecuentes Otorrinolaringología y Rinoplastia")}
        </motion.h2>

        {/* Lista de FAQs */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* FAQ Item */}
                <div
                  className={`border-t ${
                    index === faqs.length - 1 ? "border-b" : ""
                  } border-gray-200 py-6 md:py-8`}
                >
                  {/* Encabezado de la FAQ */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-start text-left group hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:rounded"
                  >
                    {/* Número y pregunta */}
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <span className="text-gray-400 font-mono text-sm md:text-base tracking-tight mt-1">
                        {faq.id < 10 ? `0${faq.id}` : faq.id}.
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif font-normal text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                        {t(faq.questionKey)}
                      </h3>
                    </div>

                    {/* Icono + o - */}
                    <motion.div
                      animate={{ rotate: isOpen ? 0 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-900 ml-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                    >
                      {isOpen ? (
                        <FiMinus className="w-6 h-6 md:w-7 md:h-7" />
                      ) : (
                        <FiPlus className="w-6 h-6 md:w-7 md:h-7" />
                      )}
                    </motion.div>
                  </button>

                  {/* Contenido de la respuesta */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 md:mt-6 ml-10 md:ml-14 pr-4">
                          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light whitespace-pre-line">
                            {t(faq.answerKey)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elementos decorativos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="h-px w-16 bg-gray-900 mb-8"></div>
          <p className="text-gray-600 text-lg font-light">
            {t("¿Tiene más preguntas o necesita más información?")}{" "}
            <a
              href={getRouteByKey("contact", currentLang)}
              className="text-gray-900 underline hover:no-underline transition-colors duration-200"
            >
              {t("Contáctenos aquí.")}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
