"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import CTASection from "@/app/Components/CTASection";

export default function AlergiasPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  const conditionItems = [
    t("alergias.condiciones.rinitis"),
    t("alergias.condiciones.asma"),
    t("alergias.condiciones.sinusitis"),
    t("alergias.condiciones.congestion"),
    t("alergias.condiciones.tos"),
    t("alergias.condiciones.goteo"),
    t("alergias.condiciones.inmunodeficiencia"),
    t("alergias.condiciones.alimentarias"),
    t("alergias.condiciones.ambientales"),
  ];

  const importanciaItems = [
    t("alergias.importancia.inflamacion"),
    t("alergias.importancia.congestion"),
    t("alergias.importancia.sinusitis"),
    t("alergias.importancia.respiratorios"),
    t("alergias.importancia.sueno"),
  ];

  const tratamientosItems = [
    t("alergias.tratamientos.medicamentos"),
    t("alergias.tratamientos.inmunoterapia"),
    t("alergias.tratamientos.asma"),
    t("alergias.tratamientos.inmunologicas"),
    t("alergias.tratamientos.ambiental"),
  ];

  const comparativaRows = [
    { 
      sintoma: t("alergias.comparativa.secrecion"),
      alergia: t("alergias.comparativa.secrecion.alergia"),
      resfriado: t("alergias.comparativa.secrecion.resfriado"),
      gripe: t("alergias.comparativa.secrecion.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.estornudos"),
      alergia: t("alergias.comparativa.estornudos.alergia"),
      resfriado: t("alergias.comparativa.estornudos.resfriado"),
      gripe: t("alergias.comparativa.estornudos.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.garganta"),
      alergia: t("alergias.comparativa.garganta.alergia"),
      resfriado: t("alergias.comparativa.garganta.resfriado"),
      gripe: t("alergias.comparativa.garganta.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.tos"),
      alergia: t("alergias.comparativa.tos.alergia"),
      resfriado: t("alergias.comparativa.tos.resfriado"),
      gripe: t("alergias.comparativa.tos.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.cabeza"),
      alergia: t("alergias.comparativa.cabeza.alergia"),
      resfriado: t("alergias.comparativa.cabeza.resfriado"),
      gripe: t("alergias.comparativa.cabeza.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.fiebre"),
      alergia: t("alergias.comparativa.fiebre.alergia"),
      resfriado: t("alergias.comparativa.fiebre.resfriado"),
      gripe: t("alergias.comparativa.fiebre.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.corporales"),
      alergia: t("alergias.comparativa.corporales.alergia"),
      resfriado: t("alergias.comparativa.corporales.resfriado"),
      gripe: t("alergias.comparativa.corporales.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.cansancio"),
      alergia: t("alergias.comparativa.cansancio.alergia"),
      resfriado: t("alergias.comparativa.cansancio.resfriado"),
      gripe: t("alergias.comparativa.cansancio.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.agotamiento"),
      alergia: t("alergias.comparativa.agotamiento.alergia"),
      resfriado: t("alergias.comparativa.agotamiento.resfriado"),
      gripe: t("alergias.comparativa.agotamiento.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.pecho"),
      alergia: t("alergias.comparativa.pecho.alergia"),
      resfriado: t("alergias.comparativa.pecho.resfriado"),
      gripe: t("alergias.comparativa.pecho.gripe")
    },
    { 
      sintoma: t("alergias.comparativa.duracion"),
      alergia: t("alergias.comparativa.duracion.alergia"),
      resfriado: t("alergias.comparativa.duracion.resfriado"),
      gripe: t("alergias.comparativa.duracion.gripe")
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("alergias.titulo")}
        subtitle={t("alergias.subtitulo")}
        src="/alergias.jpg"
        alt={t("alergias.titulo")}
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
              {t("alergias.titulo")}
            </h1>
            <div className="absolute -bottom-6 sm:-bottom-10 right-0 text-5xl sm:text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("alergias.descripcion.1")}
          </p>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("alergias.descripcion.2")}
          </p>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("alergias.descripcion.3")}
          </p>
        </motion.div>
      </section>

      {/* TABLA COMPARATIVA */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("alergias.importante")}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("alergias.comparativa.subtitulo")}
            </p>
          </motion.div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="p-4 border border-gray-200 font-bold text-gray-800 text-center">{t("alergias.comparativa.sintoma")}</th>
                    <th className="p-4 border border-gray-200 font-bold text-gray-800 text-center">{t("alergias.comparativa.alergia")}</th>
                    <th className="p-4 border border-gray-200 font-bold text-gray-800 text-center">{t("alergias.comparativa.resfriado")}</th>
                    <th className="p-4 border border-gray-200 font-bold text-gray-800 text-center">{t("alergias.comparativa.gripe")}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativaRows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="p-4 border border-gray-200 font-medium text-gray-700">{row.sintoma}</td>
                      <td className="p-4 border border-gray-200 text-gray-600 text-center">{row.alergia}</td>
                      <td className="p-4 border border-gray-200 text-gray-600 text-center">{row.resfriado}</td>
                      <td className="p-4 border border-gray-200 text-gray-600 text-center">{row.gripe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANCIA DE TRATAR ALERGIAS */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 flex items-center">
              <span className="w-1 h-7 bg-blue-500 rounded-full mr-3"></span>
              {t("alergias.importancia.titulo")}
            </h2>
            
            <p className="text-gray-700 text-base sm:text-base mb-4">
              {t("alergias.importancia.desc.1")}
            </p>
            
            <p className="text-gray-700 text-base sm:text-base font-medium mb-4">
              {t("alergias.importancia.desc.2")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {importanciaItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-blue-500 font-bold text-lg">•</span>
                  <span className="text-gray-700 text-base sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 text-base sm:text-base italic">
                {t("alergias.importancia.experiencia")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONDICIONES */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 flex items-center">
              <span className="w-1 h-7 bg-blue-500 rounded-full mr-3"></span>
              {t("alergias.condiciones.titulo")}
            </h2>
            
            <p className="text-gray-600 text-base sm:text-base mb-6">
              {t("alergias.condiciones.desc")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {conditionItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-blue-500 font-bold text-lg">•</span>
                  <span className="text-gray-700 text-base sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRATAMIENTOS */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 flex items-center">
              <span className="w-1 h-7 bg-blue-500 rounded-full mr-3"></span>
              {t("alergias.tratamientos.titulo")}
            </h2>
            
            <p className="text-gray-600 text-base sm:text-base mb-6">
              {t("alergias.tratamientos.desc")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tratamientosItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                >
                  <span className="text-blue-500 font-bold text-lg">✓</span>
                  <span className="text-gray-700 text-base sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
                  <CTASection translationKey="global" />                                      
                
    </main>
  );
}