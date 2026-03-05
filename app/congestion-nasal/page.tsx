"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import CTASection from "@/app/Components/CTASection";

export default function CongestionNasalPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  const causasItems = [
    {
      numero: "01",
      titulo: t("congestion-nasal.causas.infecciones.nombre"),
      descripcion: t("congestion-nasal.causas.infecciones.viral"),
      extra: t("congestion-nasal.causas.infecciones.bacteriana")
    },
    {
      numero: "02",
      titulo: t("congestion-nasal.causas.anomalias.nombre"),
      descripcion: t("congestion-nasal.causas.anomalias.desc"),
      extra: t("congestion-nasal.causas.anomalias.otras")
    },
    {
      numero: "03",
      titulo: t("congestion-nasal.causas.alergias.nombre"),
      descripcion: t("congestion-nasal.causas.alergias.desc"),
      extra: t("congestion-nasal.causas.alergias.histamina")
    },
    {
      numero: "04",
      titulo: t("congestion-nasal.causas.vasomotora.nombre"),
      descripcion: t("congestion-nasal.causas.vasomotora.desc"),
      extra: t("congestion-nasal.causas.vasomotora.factores")
    }
  ];

  const tratamientoItems = [
    {
      numero: "01",
      titulo: t("congestion-nasal.tratamiento.medico.titulo"),
      items: [
        t("congestion-nasal.tratamiento.medico.descongestionantes"),
        t("congestion-nasal.tratamiento.medico.antihistaminicos"),
        t("congestion-nasal.tratamiento.medico.corticoesteroides"),
        t("congestion-nasal.tratamiento.medico.antibioticos"),
        t("congestion-nasal.tratamiento.medico.inmunoterapia"),
        t("congestion-nasal.tratamiento.medico.lavados")
      ]
    },
    {
      numero: "02",
      titulo: t("congestion-nasal.tratamiento.quirurgico.titulo"),
      items: [
        t("congestion-nasal.tratamiento.quirurgico.septoplastia"),
        t("congestion-nasal.tratamiento.quirurgico.cornetes"),
        t("congestion-nasal.tratamiento.quirurgico.endoscopica"),
        t("congestion-nasal.tratamiento.quirurgico.polipos"),
        t("congestion-nasal.tratamiento.quirurgico.adenoidectomia")
      ]
    }
  ];

  const prevencionItems = [
    {
      numero: "01",
      titulo: t("congestion-nasal.prevencion.generales.titulo"),
      items: [
        t("congestion-nasal.prevencion.generales.higiene"),
        t("congestion-nasal.prevencion.generales.humidificador"),
        t("congestion-nasal.prevencion.generales.alergenos"),
        t("congestion-nasal.prevencion.generales.humo")
      ]
    },
    {
      numero: "02",
      titulo: t("congestion-nasal.prevencion.casa.titulo"),
      items: [
        t("congestion-nasal.prevencion.casa.lavados"),
        t("congestion-nasal.prevencion.casa.cabeza"),
        t("congestion-nasal.prevencion.casa.liquidos"),
        t("congestion-nasal.prevencion.casa.vapor")
      ]
    }
  ];

  const diagnosticosItems = [
    t("congestion-nasal.diagnostico.historia"),
    t("congestion-nasal.diagnostico.examen"),
    t("congestion-nasal.diagnostico.endoscopia"),
    t("congestion-nasal.diagnostico.alergias"),
    t("congestion-nasal.diagnostico.imagen"),
    t("congestion-nasal.diagnostico.sueno")
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("congestion-nasal.titulo")}
        subtitle={t("congestion-nasal.subtitulo")}
        src="/congestion-nasal.jpg"
        alt={t("congestion-nasal.titulo")}
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
              {t("congestion-nasal.titulo_completo")}
            </h1>
            <div className="absolute -bottom-6 sm:-bottom-10 right-0 text-5xl sm:text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("congestion-nasal.descripcion1")}
          </p>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("congestion-nasal.descripcion2")}
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 rounded-lg border-l-4 border-blue-500 my-4">
            <p className="text-gray-700 text-base sm:text-base md:text-lg font-medium">
              {t("congestion-nasal.descripcion3")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* DESCRIPCIÓN Y DIAGNÓSTICO - GRID 2 COLUMNAS */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm"
            >
              <p className="text-gray-700 text-base sm:text-base leading-relaxed">
                {t("congestion-nasal.desc")}
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-blue-800">{t("congestion-nasal.importante")}</span>{" "}
                <span className="text-gray-700">{t("congestion-nasal.importante.desc")}</span>
              </div>
            </motion.div>

            {/* Diagnóstico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 flex items-center">
                <span className="w-1 h-7 bg-blue-500 rounded-full mr-3"></span>
                {t("congestion-nasal.diagnostico.titulo")}
              </h2>
              <ul className="space-y-3">
                {diagnosticosItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-500 font-bold text-lg">•</span>
                    <span className="text-gray-700 text-base sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAUSAS */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("congestion-nasal.causas.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {causasItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">{item.numero}</span>
                  </div>
                  <h3 className="text-lg sm:text-lg font-semibold text-gray-800">{item.titulo}</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-sm mb-3 pl-11">
                  {item.descripcion}
                </p>
                <p className="text-gray-500 text-base sm:text-sm pl-11 border-l-2 border-blue-200 pl-3 ml-8">
                  {item.extra}
                </p>
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
              {t("sinusitis.tratamiento.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
                    <h3 className="text-lg sm:text-lg font-semibold text-blue-900">{item.titulo}</h3>
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

          {/* Nota sobre descongestionantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500"
          >
            <p className="text-gray-700 text-base sm:text-base">
              <span className="font-semibold">Nota importante:</span> {t("congestion-nasal.prevencion.nota")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PREVENCIÓN */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("congestion-nasal.prevencion.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {prevencionItems.map((item, idx) => (
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
                    <h3 className="text-lg sm:text-lg font-semibold text-blue-900">{item.titulo}</h3>
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
        </div>
      </section>
      <CTASection />
    </main>
  );
}