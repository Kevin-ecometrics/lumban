"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import CTASection from "@/app/Components/CTASection";

export default function ObstruccionNasalPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  const causasItems = [
    {
      numero: "01",
      titulo: t("obstruccion-nasal.causas.adenoides.nombre"),
      descripcion: t("obstruccion-nasal.causas.adenoides.desc")
    },
    {
      numero: "02",
      titulo: t("obstruccion-nasal.causas.rinitis.nombre"),
      descripcion: t("obstruccion-nasal.causas.rinitis.desc")
    },
    {
      numero: "03",
      titulo: t("obstruccion-nasal.causas.tabique.nombre"),
      descripcion: t("obstruccion-nasal.causas.tabique.desc"),
      extra: t("obstruccion-nasal.causas.tabique.solucion")
    },
    {
      numero: "04",
      titulo: t("obstruccion-nasal.causas.polipos.nombre"),
      descripcion: t("obstruccion-nasal.causas.polipos.desc")
    },
    {
      numero: "05",
      titulo: t("obstruccion-nasal.causas.cornetes.nombre"),
      descripcion: t("obstruccion-nasal.causas.cornetes.desc")
    },
    {
      numero: "06",
      titulo: t("obstruccion-nasal.causas.valvula.nombre"),
      descripcion: t("obstruccion-nasal.causas.valvula.desc")
    },
    {
      numero: "07",
      titulo: t("obstruccion-nasal.causas.coanas.nombre"),
      descripcion: t("obstruccion-nasal.causas.coanas.desc")
    }
  ];

  const tratamientoItems = [
    {
      numero: "01",
      titulo: t("obstruccion-nasal.tratamiento.no-invasivo.titulo"),
      items: [
        t("congestion-nasal.tratamiento.medico.descongestionantes"),
        t("congestion-nasal.tratamiento.medico.corticoesteroides"),
        t("obstruccion-nasal.tratamiento.no-invasivo.antihistaminicos"),
        t("congestion-nasal.prevencion.casa.lavados"),
        t("obstruccion-nasal.tratamiento.no-invasivo.inmunoterapia")
      ]
    },
    {
      numero: "02",
      titulo: t("obstruccion-nasal.tratamiento.quirurgico.titulo"),
      items: [
        t("obstruccion-nasal.tratamiento.quirurgico.septoplastia"),
        t("obstruccion-nasal.tratamiento.quirurgico.turbinoplastia"),
        t("obstruccion-nasal.tratamiento.quirurgico.endoscopica")
      ]
    }
  ];

  const signosAlarma = [
    t("obstruccion-nasal.signos.respirar"),
    t("obstruccion-nasal.signos.sueno"),
    t("obstruccion-nasal.signos.ninos"),
    t("obstruccion-nasal.signos.dolor"),
    t("obstruccion-nasal.signos.vision")
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("obstruccion-nasal.titulo")}
        subtitle={t("obstruccion-nasal.subtitulo")}
        src="/obstruccion-nasal.png"
        alt={t("obstruccion-nasal.titulo")}
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-600 leading-relaxed"
        >
          {/* Frase destacada con comillas */}
          <div className="relative">
            <div className="absolute -top-4 sm:-top-6 left-0 text-5xl sm:text-6xl text-blue-200 font-serif opacity-50">
              "
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center px-4 sm:px-8 relative z-10">
              {t("obstruccion-nasal.titulo_completo")}
            </h1>
            <div className="absolute -bottom-6 sm:-bottom-10 right-0 text-5xl sm:text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("obstruccion-nasal.descripcion1")}
          </p>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("obstruccion-nasal.descripcion2")}
          </p>
        </motion.div>
      </section>

      {/* ANATOMÍA */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("obstruccion-nasal.anatomia.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tabique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{t("obstruccion-nasal.anatomia.tabique.nombre")}</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-base mb-4">
                {t("obstruccion-nasal.anatomia.tabique.desc")}
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-700 font-medium">
                  {t("obstruccion-nasal.anatomia.tabique.fijo")}
                </p>
              </div>
            </motion.div>

            {/* Cornetes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{t("obstruccion-nasal.anatomia.cornetes.nombre")}</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-base mb-4">
                {t("obstruccion-nasal.anatomia.cornetes.desc")}
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-700 font-medium">
                  {t("obstruccion-nasal.anatomia.cornetes.mejora")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAUSAS */}
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("obstruccion-nasal.causas.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {causasItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm hover:border-blue-200 transition-colors h-full flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">{item.numero}</span>
                  </div>
                  <h3 className="text-lg sm:text-lg font-semibold text-gray-800">{item.titulo}</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-sm flex-grow">
                  {item.descripcion}
                </p>
                {item.extra && (
                  <p className="text-gray-500 text-base sm:text-sm mt-3 pl-11 border-l-2 border-blue-200 pl-3 ml-8">
                    {item.extra}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRATAMIENTO */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("obstruccion-nasal.opciones.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tratamientoItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 px-5 py-4 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-600">{item.numero}</span>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{item.titulo}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {item.items.map((entry, entryIdx) => (
                      <li key={entryIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold text-sm">•</span>
                        <span className="text-gray-600 text-base sm:text-sm">{entry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota sobre cuándo acudir al especialista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500"
          >
            <p className="text-gray-700 text-base sm:text-base">
              <span className="font-semibold">{t("obstruccion-nasal.signos.titulo")}:</span> {t("obstruccion-nasal.signos.descripcion")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SIGNOS DE ALARMA */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("obstruccion-nasal.consulta.titulo")}
            </h2>
            <p className="text-gray-600 text-lg sm:text-lg max-w-2xl mx-auto">
              {t("obstruccion-nasal.consulta.descripcion")}
            </p>
          </motion.div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900">
                {t("obstruccion-nasal.signos.lista.titulo")}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {signosAlarma.map((signo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span className="text-blue-500 font-bold text-lg">•</span>
                    <span className="text-gray-700 text-base sm:text-base">{signo}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500 text-center"
          >
            <p className="text-gray-700 text-lg font-medium">
              {t("obstruccion-nasal.consulta.frase")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </main>
  );
}