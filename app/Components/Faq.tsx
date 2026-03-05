// components/FAQSection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: t("faq.otorrino.cuando.titulo"),
      answer: (
        <div>
          <p className="mb-2">{t("faq.otorrino.cuando.descripcion") || "Es recomendable acudir cuando presentas:"}</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>{t("faq.sintomas.obstruccion")}</li>
            <li>{t("faq.sintomas.ronquidos")}</li>
            <li>{t("faq.sintomas.sinusitis")}</li>
            <li>{t("faq.sintomas.dolor-garganta")}</li>
            <li>{t("faq.sintomas.cambios-voz")}</li>
            <li>{t("faq.sintomas.mareos")}</li>
            <li>{t("faq.sintomas.inflamacion")}</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      question: t("faq.otorrino.consulta.titulo"),
      answer: (
        <div>
          <p className="mb-2">{t("faq.otorrino.consulta.descripcion") || "La consulta inicia con una entrevista clínica detallada, donde se evalúan:"}</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>{t("faq.consulta.sintomas")}</li>
            <li>{t("faq.consulta.antecedentes")}</li>
            <li>{t("faq.consulta.alergias")}</li>
            <li>{t("faq.consulta.habitos")}</li>
            <li>{t("faq.consulta.historia")}</li>
          </ul>
          <p className="mb-2">{t("faq.consulta.exploracion")}</p>
          <p className="mb-2">{t("faq.consulta.estudios")}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t("faq.consulta.imagen")}</li>
            <li>{t("faq.consulta.pruebas-alergia")}</li>
            <li>{t("faq.consulta.auditivos")}</li>
            <li>{t("faq.consulta.cultivos")}</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      question: t("faq.rinoplastia.valoracion.titulo"),
      answer: (
        <div>
          <p className="mb-2">{t("faq.valoracion.titulo")}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t("faq.valoracion.analisis")}</li>
            <li>{t("faq.valoracion.respiracion")}</li>
            <li>{t("faq.valoracion.tabique")}</li>
            <li>{t("faq.valoracion.fotos")}</li>
            <li>{t("faq.valoracion.explicacion")}</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      question: t("faq.rinoplastia.resultados.titulo"),
      answer: (
        <div>
          <p className="mb-2">{t("faq.resultados.visible")}</p>
          <p className="mb-2">{t("faq.resultados.sin-embargo")}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t("faq.resultados.inflamacion")}</li>
            <li>{t("faq.resultados.refinado")}</li>
            <li>{t("faq.resultados.paciencia")}</li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-4xl w-full mx-auto">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-12 md:mb-16"
        >
          {t("doctor.por-que-elegir")}
        </motion.h1>

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
                        {faq.question}
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
                          <div className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Línea divisoria especial después del tercer item */}
                {index === 2 && (
                  <div className="border-t border-gray-300 my-2"></div>
                )}
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
            {t("global.pregunta-info")}{" "}
            <a
              href={getRouteByKey("contact", currentLang)}
              className="text-gray-900 underline hover:no-underline transition-colors duration-200"
            >
              {t("global.contacto-aqui")}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;