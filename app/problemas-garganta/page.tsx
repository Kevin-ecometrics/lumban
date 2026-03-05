"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function PadecimientosGargantaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  // Amigdalitis síntomas - usando las claves correctas del JSON
  const amigdalitisSintomas = [
    t("garganta.amigdalitis.sintomas.dolor"),
    t("garganta.amigdalitis.sintomas.deglucion"),
    t("garganta.amigdalitis.sintomas.fiebre"),
    t("garganta.amigdalitis.sintomas.enrojecimiento"),
    t("garganta.amigdalitis.sintomas.dolor-cabeza"),
    t("garganta.amigdalitis.sintomas.nauseas"),
    t("garganta.amigdalitis.sintomas.dolor-oido")
  ];

  // Amigdalitis tratamiento médico
  const amigdalitisTratamientoMedico = [
    t("garganta.amigdalitis.tratamiento.analgesicos"),
    t("garganta.amigdalitis.tratamiento.hidratacion"),
    t("garganta.amigdalitis.tratamiento.antibioticos")
  ];

  // Faringitis síntomas
  const faringitisSintomas = [
    t("garganta.faringitis.sintomas.musculares"),
    t("garganta.faringitis.sintomas.erupciones"),
    t("garganta.faringitis.sintomas.ganglios")
  ];

  // Cáncer factores
  const cancerFactores = [
    t("garganta.cancer.factores.tabaco"),
    t("garganta.cancer.factores.alcohol"),
    t("garganta.cancer.factores.edad"),
    t("garganta.cancer.factores.vph")
  ];

  // Cáncer signos
  const cancerSignos = [
    t("garganta.cancer.signos.bulto"),
    t("garganta.cancer.signos.ronquera"),
    t("garganta.cancer.signos.dolor-oido")
  ];

  // Cáncer tratamientos
  const cancerTratamientos = [
    t("garganta.cancer.tratamiento.radioterapia"),
    t("garganta.cancer.tratamiento.cirugia"),
    t("garganta.cancer.tratamiento.combinacion")
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("garganta.titulo")}
        subtitle={t("garganta.desc")}
        src="/garganta.jpg"
        alt={t("garganta.titulo")}
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
              {t("garganta.titulo_completo")}
            </h1>
            <div className="absolute -bottom-10 right-0 text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          <p className="text-gray-700">
            {t("garganta.descripcion.1")}
          </p>

          <p className="text-gray-700">
            {t("garganta.descripcion.2")}
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-blue-500 my-4">
            <p className="text-gray-700">
              {t("garganta.descripcion.3")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* DOLOR DE GARGANTA COMÚN */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-blue-900">
                {t("garganta.dolor.titulo")}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {t("garganta.dolor.descripcion")}
              </p>
              
              <div className="bg-blue-50/30 rounded-lg p-4 mb-4 border-l-2 border-blue-300">
                <p className="text-gray-600 text-sm italic">
                  {t("garganta.dolor.nota")}
                </p>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.sintomas.titulo")}
                </p>
              </div>
              
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="text-blue-500 text-xs mt-1">●</span>
                  <span>{t("garganta.dolor.sintomas.dolor")}</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="text-blue-500 text-xs mt-1">●</span>
                  <span>{t("garganta.dolor.sintomas.deglucion")}</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="text-blue-500 text-xs mt-1">●</span>
                  <span>{t("garganta.dolor.sintomas.sequedad")}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AMIGDALITIS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-blue-900">
                {t("garganta.amigdalitis.titulo")}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {t("garganta.amigdalitis.descripcion")}
              </p>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.sintomas.titulo")}
                </p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {amigdalitisSintomas.map((sintoma, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 text-xs mt-1">●</span>
                    <span>{sintoma}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.tratamiento.medico")}
                </p>
              </div>
              <ul className="space-y-2 mb-4">
                {amigdalitisTratamientoMedico.map((item, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 text-xs mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.tratamiento.quirurgico")}
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                {t("garganta.amigdalitis.tratamiento.quirurgico")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FARINGITIS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-blue-900">
                {t("garganta.faringitis.titulo")}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {t("garganta.faringitis.descripcion")}
              </p>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.sintomas.titulo")}
                </p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {faringitisSintomas.map((sintoma, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 text-xs mt-1">●</span>
                    <span>{sintoma}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.tratamiento.titulo")}
                </p>
              </div>
              
              <p className="text-gray-600 text-sm">
                {t("garganta.faringitis.tratamiento")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CÁNCER DE GARGANTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-blue-900">
                {t("garganta.cancer.titulo")}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {t("garganta.cancer.descripcion")}
              </p>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.cancer.factores.titulo")}
                </p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {cancerFactores.map((factor, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 text-xs mt-1">●</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.cancer.signos.titulo")}
                </p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {cancerSignos.map((signo, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 text-xs mt-1">●</span>
                    <span>{signo}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.cancer.diagnostico.titulo")}
                </p>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {t("garganta.cancer.diagnostico.desc")}
              </p>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.cancer.tratamiento.titulo")}
                </p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {cancerTratamientos.map((tratamiento, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-500 text-xs mt-1">●</span>
                    <span>{tratamiento}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <p className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
                  <span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                  {t("garganta.cancer.rehabilitacion.titulo")}
                </p>
              </div>
              
              <p className="text-gray-600 text-sm">
                {t("garganta.cancer.rehabilitacion.desc")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CRUP */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-blue-900">
                {t("garganta.crup.titulo")}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                {t("garganta.crup.descripcion")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CUÁNDO IR AL ESPECIALISTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-blue-900">
                {t("garganta.consulta.titulo")}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {t("garganta.consulta.descripcion")}
              </p>
              
              <div className="bg-blue-50/30 rounded-lg p-4 border-l-2 border-blue-300">
                <p className="text-gray-700 text-sm font-medium">
                  {t("garganta.consulta.frase")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVALUACIÓN PROFESIONAL - CON IMAGEN DE FONDO */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/oficina.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t("garganta.cta.titulo")}
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              {t("garganta.cta.desc")}
            </p>
            
            <div className="border-t border-gray-500 pt-8 mt-8">
              <p className="text-2xl font-semibold mb-4">
                {t("global.cta.agenda")}
              </p>
              <p className="text-lg mb-8 text-gray-300">
                {t("global.cta.descripcion")}
              </p>
            </div>
            
            <p className="text-lg mb-6 text-gray-200">
              Llámanos para agendar tu cita:
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="text-2xl font-bold space-y-2">
                <a href="tel:+526646842364" className="hover:underline block hover:text-blue-300 transition-colors">
                  (664) 684-2364
                </a>
                <a href="tel:+526646388135" className="hover:underline block hover:text-blue-300 transition-colors">
                  (664) 638-8135
                </a>
              </div>
              
              {/* Botón a contacto */}
              <Link
                href={getRouteByKey("contact", currentLang)}
                className="mt-4 px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition font-semibold shadow-md inline-block"
              >
                Ir a formulario de contacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERFIL DEL DOCTOR - Solo botón */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="border-t pt-12 flex flex-col md:flex-row justify-end items-center gap-6">
          <Link
            href={getRouteByKey("profile", currentLang)}
            className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold"
          >
            {t("doctor.boton.perfil")}
          </Link>
        </div>
      </section>
    </main>
  );
}