"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import CTASection from "@/app/Components/CTASection"; // Importa el nuevo componente

export default function SinusitisPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  const sintomasPrincipales = [
    "sinusitis.sintomas.congestion",
    "sinusitis.sintomas.secrecion",
    "sinusitis.sintomas.goteo",
    "sinusitis.sintomas.postnasal",
    "sinusitis.sintomas.dolor"
  ];

  const sintomasRelacionados = [
    "sinusitis.sintomas.oido",
    "sinusitis.sintomas.tos",
    "sinusitis.sintomas.halitosis",
    "sinusitis.sintomas.cansancio"
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("sinusitis.titulo")}
        subtitle={t("sinusitis.subtitulo")}
        src="/sinusitis.jpg"
        alt={t("sinusitis.titulo")}
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
              {t("sinusitis.titulo_completo")}
            </h1>
            <div className="absolute -bottom-6 sm:-bottom-10 right-0 text-5xl sm:text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          <p className="text-gray-700 text-base sm:text-base md:text-lg">
            {t("sinusitis.descripcion1")}
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-white p-4 sm:p-6 rounded-lg border-l-4 border-blue-500 my-4">
            <p className="text-gray-700 text-base sm:text-base md:text-lg">
              {t("sinusitis.descripcion2")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* PRINCIPALES CAUSAS */}
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
              {t("sinusitis.causas.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 text-base sm:text-base">{t("sinusitis.causas.infecciones")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 text-base sm:text-base">{t("sinusitis.causas.anatomicas")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SÍNTOMAS */}
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
              {t("sinusitis.sintomas.titulo")}
            </h2>
          </motion.div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                {t("sinusitis.sintomas.principales")}
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {sintomasPrincipales.map((sintoma, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-2 sm:gap-3 p-1 sm:p-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span className="text-blue-500 font-bold text-base sm:text-lg">•</span>
                    <span className="text-gray-700 text-sm sm:text-base">{t(sintoma)}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-t border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {t("sinusitis.sintomas.relacionados")}
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {sintomasRelacionados.map((sintoma, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-2 sm:gap-3 p-1 sm:p-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span className="text-blue-500 font-bold text-base sm:text-lg">•</span>
                    <span className="text-gray-700 text-sm sm:text-base">{t(sintoma)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO Y EVALUACIÓN */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
                {t("sinusitis.diagnostico.titulo")}
              </h2>
            </div>
            <div className="p-5 sm:p-8">
              <p className="text-gray-700 text-base sm:text-base leading-relaxed">
                {t("sinusitis.diagnostico.descripcion")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPCIONES DE TRATAMIENTO */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("sinusitis.tratamiento.titulo")}
            </h2>
            
            {/* Texto de tratamiento inicial - AHORA AQUÍ, debajo del título */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {t("sinusitis.tratamiento.convencional")}
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-10">
            {/* Sinuplastia con balón */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-5 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 sm:mb-4 flex items-center">
                <span className="w-1 h-5 sm:h-6 bg-blue-500 rounded-full mr-2 sm:mr-3"></span>
                {t("sinusitis.tratamiento.sinuplastia.titulo")}
              </h3>
              <p className="text-gray-600 text-base sm:text-base leading-relaxed">
                {t("sinusitis.tratamiento.sinuplastia.descripcion")}
              </p>
            </motion.div>

            {/* Cirugía Endoscópica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-5 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 sm:mb-4 flex items-center">
                <span className="w-1 h-5 sm:h-6 bg-blue-500 rounded-full mr-2 sm:mr-3"></span>
                {t("sinusitis.tratamiento.cens.titulo")}
              </h3>
              <p className="text-gray-600 text-base sm:text-base leading-relaxed mb-3 sm:mb-4">
                {t("sinusitis.tratamiento.cens.descripcion1")}
              </p>
              <p className="text-gray-600 text-base sm:text-base leading-relaxed">
                {t("sinusitis.tratamiento.cens.descripcion2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - Usando el componente reutilizable */}
      <CTASection translationKey="sinusitis" />
    </main>
  );
}