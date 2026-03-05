"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import CTASection from "../Components/CTASection";

export default function HearingLossPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  // Datos para la tabla de grados de pérdida auditiva
  const gradosPerdida = t("perdida-audicion.grados.tabla", { returnObjects: true });
  
  // Datos para estadísticas por edad
  const estadisticasEdad = t("perdida-audicion.envejecimiento.estadisticas", { returnObjects: true });

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("nav.perdida-audicion")}
        subtitle="Conoce las causas, tipos y señales de alerta con el Dr. Jaime Lumbán, otorrinolaringólogo."
        src="/perdida-auditiva.jpg"
        alt="Pérdida de Audición"
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-lg text-gray-600 leading-relaxed"
        >
          {/* Frase destacada con comillas */}
          <div className="relative">
            <div className="absolute -top-6 left-0 text-6xl text-blue-200 font-serif opacity-50">
              "
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center px-8 relative z-10">
              {t("perdida-audicion.titulo")}
            </h1>
            <div className="absolute -bottom-10 right-0 text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          {/* Cita destacada */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl my-12 shadow-sm">
            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-xl md:text-2xl italic text-gray-700">
                {t("perdida-audicion.subtitulo2")}
              </p>
            </div>
          </div>

          <p>
            <span className="font-semibold text-gray-900">{t("perdida-audicion.subtitulo")}</span>
          </p>

          {/* Bloque informativo */}
          <div className="bg-blue-50 p-6 rounded-lg my-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Importancia del diagnóstico temprano
            </h2>
            <p>
              La detección precoz de la pérdida auditiva es fundamental para implementar estrategias de tratamiento efectivas y prevenir el deterioro de la comunicación y la calidad de vida.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CLASIFICACIÓN Y TIPOS DE PÉRDIDA AUDITIVA - DISEÑO PROFESIONAL */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("perdida-audicion.clasificacion.titulo")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {t("perdida-audicion.clasificacion.subtitulo")}
            </p>
          </motion.div>

          {/* Grid de tarjetas médicas con alturas naturales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Pérdida Conductiva */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Cabecera de la tarjeta */}
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900">
                  {t("perdida-audicion.tipos.conductiva.titulo")}
                </h3>
              </div>
              
              {/* Cuerpo de la tarjeta */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t("perdida-audicion.tipos.conductiva.descripcion")}
                </p>
                
                <div className="bg-blue-50/30 rounded-lg p-4 mb-4 border-l-2 border-blue-300">
                  <p className="text-gray-600 text-sm italic">
                    {t("perdida-audicion.tipos.conductiva.nota")}
                  </p>
                </div>
                
                <div className="mb-3">
                  <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                    <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                    {t("perdida-audicion.tipos.conductiva.causas")}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {t("perdida-audicion.tipos.conductiva.lista", { returnObjects: true }).map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 text-xs mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Pérdida Neurosensorial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Cabecera de la tarjeta */}
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900">
                  {t("perdida-audicion.tipos.neurosensorial.titulo")}
                </h3>
              </div>
              
              {/* Cuerpo de la tarjeta */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t("perdida-audicion.tipos.neurosensorial.descripcion")}
                </p>
                
                <div className="bg-blue-50/30 rounded-lg p-4 mb-4 border-l-2 border-blue-300">
                  <p className="text-gray-600 text-sm italic">
                    {t("perdida-audicion.tipos.neurosensorial.nota")}
                  </p>
                </div>
                
                <div className="mb-3">
                  <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                    <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                    {t("perdida-audicion.tipos.neurosensorial.causas")}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {t("perdida-audicion.tipos.neurosensorial.lista", { returnObjects: true }).map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 text-xs mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Pérdida Mixta - CON ALTURA NATURAL, sin espacio muerto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Cabecera de la tarjeta */}
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900">
                  {t("perdida-audicion.tipos.mixta.titulo")}
                </h3>
              </div>
              
              {/* Cuerpo de la tarjeta - sin elementos extras que creen espacio muerto */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t("perdida-audicion.tipos.mixta.descripcion")}
                </p>
                
                <div className="bg-blue-50/30 rounded-lg p-4 border-l-2 border-blue-300">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium text-gray-800">Ejemplo clínico:</span>{' '}
                    {t("perdida-audicion.tipos.mixta.ejemplo")}
                  </p>
                </div>
                
                {/* Sin elementos adicionales - la card termina exactamente donde termina el contenido */}
              </div>
            </motion.div>
          </div>

          {/* Nota académica adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500">
              Clasificación basada en la localización anatómica de la lesión en el sistema auditivo
            </p>
          </motion.div>
        </div>
      </section>

      {/* CAUSAS ESPECÍFICAS Y PATOLOGÍAS COMUNES */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("perdida-audicion.causas.titulo")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t("perdida-audicion.causas.intro")}
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Acumulación de cera */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t("perdida-audicion.causas.cera.titulo")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("perdida-audicion.causas.cera.descripcion")}
              </p>
            </motion.div>

            {/* Ruido */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t("perdida-audicion.causas.ruido.titulo")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {t("perdida-audicion.causas.ruido.descripcion1")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("perdida-audicion.causas.ruido.descripcion2")}
              </p>
            </motion.div>

            {/* Infecciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t("perdida-audicion.causas.infecciones.titulo")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {t("perdida-audicion.causas.infecciones.otitis")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("perdida-audicion.causas.infecciones.otosclerosis")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIGNOS DE ALARMA */}
      <section className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {t("perdida-audicion.signos.titulo")}
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10">
              {t("perdida-audicion.signos.subtitulo")}
            </p>
            <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {t("perdida-audicion.signos.lista", { returnObjects: true }).map((signo, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-2 text-gray-700 bg-white p-4 rounded-lg shadow"
                >
                  <span className="text-red-600 font-bold text-lg">!</span>
                  <span className="font-medium">{signo}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

{/* GRADOS DE PÉRDIDA AUDITIVA - TABLA PROFESIONAL */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
        {t("perdida-audicion.grados.titulo")}
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {t("perdida-audicion.grados.subtitulo")}
      </p>
    </motion.div>

    {/* Tabla de diseño formal - Tamaño ajustado */}
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Encabezado de tabla */}
          <div className="bg-blue-50 border-b border-blue-100">
            <div className="flex">
              <div className="w-1/2 px-8 py-4 text-sm font-semibold text-blue-900 uppercase tracking-wider text-center">
                Grado de pérdida
              </div>
              <div className="w-1/2 px-8 py-4 text-sm font-semibold text-blue-900 uppercase tracking-wider text-center border-l border-blue-100">
                Escala (dB HL)
              </div>
            </div>
          </div>

          {/* Cuerpo de la tabla */}
          <div className="divide-y divide-gray-100">
            {gradosPerdida.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="flex hover:bg-blue-50/30 transition-colors duration-150"
              >
                <div className="w-1/2 px-8 py-4 text-gray-800 font-medium text-center">
                  {item.grado}
                </div>
                <div className="w-1/2 px-8 py-4 text-gray-600 font-mono text-center border-l border-gray-100">
                  {item.escala}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota al pie */}
          <div className="border-t border-gray-100 bg-gray-50/50 px-8 py-3">
            <p className="text-xs text-gray-500 text-right">
              Clasificación basada en el promedio tonal puro (dB HL)
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Referencia académica */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-xs text-gray-400 text-center mt-4"
    >
      De acuerdo con los estándares de la Organización Mundial de la Salud (OMS)
    </motion.p>
  </div>
</section>

      {/* PREVENCIÓN */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("perdida-audicion.prevencion.titulo")}
            </h2>
          </motion.div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {t("perdida-audicion.prevencion.descripcion1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("perdida-audicion.prevencion.descripcion2")}
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {t("perdida-audicion.prevencion.lista", { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <p className="text-gray-700 font-medium text-center">
                {t("perdida-audicion.prevencion.regla")}
              </p>
            </div>
          </div>
        </div>
      </section>

                  <CTASection translationKey="global" />                                      

    </main>
  );
}