// components/FAQSection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import { useTheme } from "./ThemeContext";

interface FAQItem {
  id: number;
  questionKey: string;
  answerKey: string;
}

const themeColorMap: Record<string, string> = {
  morado: "var(--color-morado)",
  azul: "var(--color-azul)",
  verde: "var(--color-verde)",
};

const FAQSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const themeColor = themeColorMap[theme] ?? themeColorMap.azul;
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      questionKey: "home.faq.question1",
      answerKey: "home.faq.answer1",
    },
    {
      id: 2,
      questionKey: "home.faq.question2",
      answerKey: "home.faq.answer2",
    },
    {
      id: 3,
      questionKey: "home.faq.question3",
      answerKey: "home.faq.answer3",
    },
    {
      id: 4,
      questionKey: "home.faq.question4",
      answerKey: "home.faq.answer4",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-6xl w-full mx-auto">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-12 md:mb-16"
        >
          {t("home.faq.title")}
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
                  } border-gray-200 py-6 md:py-8 px-4 rounded-xl transition-colors duration-300`}
                  style={{ backgroundColor: isOpen ? themeColor : undefined }}
                >
                  {/* Encabezado de la FAQ */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-start text-left group hover:cursor-pointer focus:outline-none"
                  >
                    {/* Número y pregunta */}
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <span
                        className="font-mono text-sm md:text-base tracking-tight mt-1 transition-colors duration-300"
                        style={{ color: isOpen ? "rgba(255,255,255,0.7)" : undefined }}
                      >
                        {faq.id < 10 ? `0${faq.id}` : faq.id}.
                      </span>
                      <h3
                        className="text-xl md:text-2xl font-serif font-normal transition-colors duration-300"
                        style={{ color: isOpen ? "#ffffff" : undefined }}
                      >
                        {t(faq.questionKey)}
                      </h3>
                    </div>

                    {/* Icono + o - */}
                    <motion.div
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                      style={{ color: isOpen ? "#ffffff" : undefined }}
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
                          <p className="text-lg md:text-xl leading-relaxed font-light whitespace-pre-line text-white/90">
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
            {t("home.faq.footer_text")}{" "}
            <a
              href={getRouteByKey("contact", currentLang)}
              className="text-gray-900 underline hover:no-underline transition-colors duration-200"
            >
              {t("home.faq.footer_link")}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
