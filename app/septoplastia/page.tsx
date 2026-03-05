"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function SeptoplastyPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("septoplastia.titulo")}
        subtitle={t("septoplastia.hero.subtitulo")}
        src="/septoplastia.jpg"
        alt={t("septoplastia.titulo")}
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
              {t("septoplastia.titulo_completo")}
            </h1>
            <div className="absolute -bottom-6 sm:-bottom-10 right-0 text-5xl sm:text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          <p className="text-gray-700 text-lg sm:text-base md:text-lg">
            {t("septoplastia.descripcion1")}
          </p>

          <p className="text-gray-700 text-lg sm:text-base md:text-lg">
            {t("septoplastia.descripcion2")}
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-blue-500 shadow-sm my-6 sm:my-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-4 flex items-center">
              <span className="w-1 h-6 sm:h-6 bg-blue-500 rounded-full mr-3 sm:mr-3"></span>
              {t("septoplastia.anatomia.titulo")}
            </h2>
            <p className="mb-4 sm:mb-4 text-gray-700 text-base sm:text-base md:text-lg">
              {t("septoplastia.anatomia.descripcion")}
            </p>
            <div className="bg-blue-100/50 p-4 sm:p-4 rounded-lg">
              <p className="font-medium text-gray-800 text-base sm:text-base md:text-lg">
                {t("septoplastia.anatomia.nota")}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SÍNTOMAS */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-3 sm:mb-4">
              {t("septoplastia.sintomas.titulo")}
            </h2>
            <p className="text-gray-500 text-lg sm:text-lg max-w-2xl mx-auto">
              {t("septoplastia.sintomas.subtitulo")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Síntoma 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-5 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-medium text-base sm:text-sm">01</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-lg sm:text-base mb-1">{t("septoplastia.sintomas.1.titulo")}</h3>
                  <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
                    {t("septoplastia.sintomas.1.descripcion")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Síntoma 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-5 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-medium text-base sm:text-sm">02</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-lg sm:text-base mb-1">{t("septoplastia.sintomas.2.titulo")}</h3>
                  <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
                    {t("septoplastia.sintomas.2.descripcion")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Síntoma 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-5 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-medium text-base sm:text-sm">03</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-lg sm:text-base mb-1">{t("septoplastia.sintomas.3.titulo")}</h3>
                  <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
                    {t("septoplastia.sintomas.3.descripcion")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Síntoma 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-5 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-medium text-base sm:text-sm">04</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-lg sm:text-base mb-1">{t("septoplastia.sintomas.4.titulo")}</h3>
                  <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
                    {t("septoplastia.sintomas.4.descripcion")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Síntoma 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-5 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-medium text-base sm:text-sm">05</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-lg sm:text-base mb-1">{t("septoplastia.sintomas.5.titulo")}</h3>
                  <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
                    {t("septoplastia.sintomas.5.descripcion")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Síntoma 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-5 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 font-medium text-base sm:text-sm">06</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-lg sm:text-base mb-1">{t("septoplastia.sintomas.6.titulo")}</h3>
                  <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
                    {t("septoplastia.sintomas.6.descripcion")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Línea divisoria sutil */}
          <div className="border-t border-gray-200 mt-8 sm:mt-10 pt-5 sm:pt-6">
            <p className="text-sm sm:text-xs text-gray-400 text-center px-4">
              {t("septoplastia.sintomas.nota")}
            </p>
          </div>
        </div>
      </section>

      {/* CIRUGÍA - EN QUÉ CONSISTE */}
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
              {t("septoplastia.cirugia.titulo")}
            </h2>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 text-lg sm:text-base leading-relaxed mb-4 sm:mb-6">
                {t("septoplastia.cirugia.descripcion1")}
              </p>
              <div className="bg-blue-50 p-4 sm:p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-700 text-lg sm:text-base leading-relaxed">
                  {t("septoplastia.cirugia.descripcion2")}
                </p>
              </div>
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-4 sm:mb-6 text-center">
              {t("septoplastia.procedimiento.titulo")}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-2xl font-bold text-blue-600">1</span>
                    <h4 className="text-lg sm:text-lg font-semibold text-blue-900">{t("septoplastia.procedimiento.1.titulo")}</h4>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-base sm:text-sm">
                    {t("septoplastia.procedimiento.1.descripcion")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-2xl font-bold text-blue-600">2</span>
                    <h4 className="text-lg sm:text-lg font-semibold text-blue-900">{t("septoplastia.procedimiento.2.titulo")}</h4>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-base sm:text-sm">
                    {t("septoplastia.procedimiento.2.descripcion")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
              >
                <div className="bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-2xl font-bold text-blue-600">3</span>
                    <h4 className="text-lg sm:text-lg font-semibold text-blue-900">{t("septoplastia.procedimiento.3.titulo")}</h4>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-base sm:text-sm">
                    {t("septoplastia.procedimiento.3.descripcion")}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Técnica Avanzada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 sm:mt-8 p-5 sm:p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500"
            >
              <p className="text-gray-700 text-base sm:text-base">
                <span className="font-semibold">{t("septoplastia.tecnica.titulo")}:</span> {t("septoplastia.tecnica.descripcion")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
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
              {t("septoplastia.beneficios.titulo")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {[1, 2, 3, 4].map((num, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors shadow-sm border-l-4 border-blue-400"
              >
                <h3 className="text-lg sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {t(`septoplastia.beneficios.${num}.titulo`)}
                </h3>
                <p className="text-gray-600 text-base sm:text-sm">
                  {t(`septoplastia.beneficios.${num}.descripcion`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAS: SEPTOPLASTIA VS RINOPLASTIA */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-3">
              {t("septoplastia.diferencias.titulo")}
            </h2>
            <p className="text-gray-600 text-lg sm:text-base max-w-2xl mx-auto">
              {t("septoplastia.diferencias.subtitulo")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{t("septoplastia.diferencias.septoplastia")}</h3>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-700 text-base sm:text-base leading-relaxed">
                  {t("septoplastia.diferencias.septoplastia.desc")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{t("septoplastia.diferencias.rinoplastia")}</h3>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-700 text-base sm:text-base leading-relaxed">
                  {t("septoplastia.diferencias.rinoplastia.desc")}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500 text-center"
          >
            <p className="text-gray-700 text-base sm:text-base">
              <span className="font-semibold">{t("septoplastia.diferencias.nota.titulo")}:</span> {t("septoplastia.diferencias.nota.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* EVOLUCIÓN Y RESULTADOS - VERSIÓN MEJORADA PARA MÓVIL CON TEXTOS GRANDES */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-3">
              {t("septoplastia.evolucion.titulo")}
            </h2>
            <p className="text-gray-600 text-lg sm:text-lg">
              {t("septoplastia.evolucion.subtitulo")}
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {[1, 2, 3, 4].map((num, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 px-5 py-4 border-b border-blue-100">
                  <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-base font-semibold">
                    {t(`septoplastia.evolucion.${num}.periodo`)}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {t(`septoplastia.evolucion.${num}.descripcion`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}