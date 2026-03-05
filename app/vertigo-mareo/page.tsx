"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import CTASection from "@/app/Components/CTASection";

const sintomasVertigo = [
  "vertigo.sintomas.rotacion",
  "vertigo.sintomas.nauseas",
  "vertigo.sintomas.sudoracion",
  "vertigo.sintomas.inestabilidad",
  "vertigo.sintomas.nistagmo",
];

const sintomasMareo = [
  "vertigo.sintomas.inestabilidad",
  "vertigo.sintomas.cabeza-vacia",
  "vertigo.sintomas.desmayo",
  "vertigo.sintomas.palidez",
  "vertigo.sintomas.nauseas",
];

const causas = [
  "vertigo.causas.infecciones",
  "vertigo.causas.traumatismos",
  "vertigo.causas.neuronitis",
  "vertigo.causas.presion-arterial",
  "vertigo.causas.medicamentos",
  "vertigo.causas.neurologicas",
  "vertigo.causas.circulatorias",
];

const enfermedades = [
  {
    title: "vertigo.enfermedades.vppb.nombre",
    description: "vertigo.enfermedades.vppb.desc",
  },
  {
    title: "vertigo.enfermedades.laberintitis.nombre",
    description: "vertigo.enfermedades.laberintitis.desc",
  },
  {
    title: "vertigo.enfermedades.meniere.nombre",
    description: "vertigo.enfermedades.meniere.desc",
  },
  {
    title: "vertigo.enfermedades.fistula.nombre",
    description: "vertigo.enfermedades.fistula.desc",
  },
];

const signosAlarma = [
  "vertigo.alarma.dolor-cabeza",
  "vertigo.alarma.perdida-conocimiento",
  "vertigo.alarma.dificultad-habla",
  "vertigo.alarma.debilidad",
];

const autoevaluacion = [
  "vertigo.autoevaluacion.giro",
  "vertigo.autoevaluacion.equilibrio",
  "vertigo.autoevaluacion.desmayo",
  "vertigo.autoevaluacion.vision",
];

export default function VertigoPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("vertigo.titulo")}
        subtitle={t("vertigo.subtitulo")}
        src="/mareo.png"
        alt={t("nav.vertigo-mareo")}
      />

      {/* INTRODUCCIÓN */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("vertigo.titulo")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("vertigo.descripcion.intro")}
          </p>
        </motion.div>
      </section>

      {/* QUÉ ES EL VÉRTIGO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("vertigo.que-es.titulo")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t("vertigo.que-es.descripcion")}
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {t("vertigo.sintomas.titulo")}
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              {sintomasVertigo.map((sintoma, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{t(sintoma)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* TIPOS DE VÉRTIGO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("vertigo.tipos.titulo")}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {t("vertigo.tipos.periferico.nombre")}
                </h4>
                <p className="text-gray-600">
                  {t("vertigo.tipos.periferico.desc")}
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {t("vertigo.tipos.central.nombre")}
                </h4>
                <p className="text-gray-600">
                  {t("vertigo.tipos.central.desc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ ES EL MAREO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("vertigo.mareo.titulo")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {t("vertigo.mareo.descripcion")}
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("vertigo.sintomas.mareo.titulo")}
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {sintomasMareo.map((sintoma, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="text-blue-600 font-bold">•</span>
                <span>{t(sintoma)}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CÓMO FUNCIONA EL EQUILIBRIO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("vertigo.equilibrio.titulo")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t("vertigo.equilibrio.descripcion.1")}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {t("vertigo.equilibrio.sistemas.vestibular")}
                </h3>
                <p className="text-gray-600">
                  {t("vertigo.equilibrio.sistemas.vestibular.desc")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {t("vertigo.equilibrio.sistemas.visual")}
                </h3>
                <p className="text-gray-600">
                  {t("vertigo.equilibrio.sistemas.visual.desc")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {t("vertigo.equilibrio.sistemas.propioceptivo")}
                </h3>
                <p className="text-gray-600">
                  {t("vertigo.equilibrio.sistemas.propioceptivo.desc")}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
              {t("vertigo.oido-interno.titulo")}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t("vertigo.oido-interno.descripcion")}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {t("vertigo.oido-interno.conductos.titulo")}
                </h4>
                <p className="text-gray-600 mb-3">
                  {t("vertigo.oido-interno.conductos.desc")}
                </p>
                <p className="text-gray-600 italic">
                  {t("vertigo.oido-interno.conductos.proceso")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {t("vertigo.oido-interno.otolitos.titulo")}
                </h4>
                <p className="text-gray-600 mb-3">
                  {t("vertigo.oido-interno.otolitos.desc")}
                </p>
                <p className="text-gray-600">
                  {t("vertigo.oido-interno.otolitos.funcion")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAUSAS FRECUENTES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("vertigo.causas.titulo")}
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-12">
            {causas.map((causa, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="text-blue-600 font-bold">•</span>
                <span>{t(causa)}</span>
              </motion.li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t("vertigo.enfermedades.titulo")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {enfermedades.map((enfermedad, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {t(enfermedad.title)}
                </h4>
                <p className="text-gray-600">
                  {t(enfermedad.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
              {t("vertigo.alarma.titulo")}
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10">
              {t("vertigo.alarma.descripcion")}
            </p>
            <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {signosAlarma.map((signo, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-2 text-gray-700 bg-white p-4 rounded-lg shadow"
                >
                  <span className="text-red-600 font-bold text-lg">!</span>
                  <span className="font-medium">{t(signo)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* AUTOEVALUACIÓN */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {t("vertigo.autoevaluacion.titulo")}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10">
            {t("vertigo.autoevaluacion.descripcion")}
          </p>
          
          <div className="bg-gray-50 p-8 rounded-2xl">
            {autoevaluacion.map((pregunta, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="mb-4 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
              >
                <p className="text-gray-800">
                  <span className="font-bold text-blue-600 mr-2">{idx + 1}.</span>
                  {t(pregunta)}
                </p>
              </motion.div>
            ))}
            
            <div className="mt-8 p-6 text-gray-800 rounded-xl text-center">
              <p className="text-xl font-semibold mb-3">
                {t("vertigo.autoevaluacion.conclusion")}
              </p>
              <p className="text-lg">
                {t("vertigo.autoevaluacion.recomendacion")}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION - Reemplaza la sección de evaluación profesional y perfil del doctor */}
      <CTASection translationKey="global" />

      {/* Nota: El perfil del doctor ahora está incluido en el componente CTASection */}
    </main>
  );
}