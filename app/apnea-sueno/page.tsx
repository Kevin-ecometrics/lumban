"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function ApneaSuenoPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Acerca de la Apnea del Sueño")}
        subtitle={t("Conozca acerca de los padecimientos relacionados con la garganta")}
        src="/apnea.png"
        alt={t("Acerca de la Apnea del Sueño")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">

        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("Acerca de la Apnea del Sueño")}
          </h2>
          <p>
            {t(
              "La apnea del sueño es un trastorno común donde los pacientes tienen patrones de respiración anormal durante el sueño, incluyendo pausas respiratorias o respiración muy superficial. Estas pausas duran entre 10 y 20 segundos o más, interrumpiendo el sueño y reduciendo el nivel de oxígeno en la sangre."
            )}
          </p>
          <p>
            {t(
              "La apnea obstructiva del sueño puede aumentar con la edad y es más frecuente en hombres, personas con sobrepeso y quienes padecen enfermedades cardíacas. Si no se trata, puede provocar hipertensión, insuficiencia cardíaca, alteraciones del ritmo cardíaco, resistencia a la insulina e incluso la muerte."
            )}
          </p>
        </div>

        {/* SÍNTOMAS Y CAUSAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Síntomas y Causas")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Somnolencia diurna")}</li>
            <li>{t("Debilidad")}</li>
            <li>{t("Siestas repetidas")}</li>
            <li>{t("Falta de concentración")}</li>
            <li>{t("Dolores de cabeza")}</li>
            <li>{t("Irritación")}</li>
            <li>{t("Falta de sueño (insomnio)")}</li>
            <li>{t("Mala memoria")}</li>
            <li>{t("Ronquidos")}</li>
          </ul>
        </div>

        {/* TIPOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Tipos de Apnea del Sueño")}</h3>

          <h4 className="text-xl font-medium">{t("Apnea del Sueño Central")}</h4>
          <p>
            {t(
              "Se produce cuando las señales del cerebro hacia los músculos respiratorios se interrumpen, y no hay esfuerzo de los músculos de la respiración."
            )}
          </p>

          <h4 className="text-xl font-medium">{t("Apnea Obstructiva del Sueño")}</h4>
          <p>
            {t(
              "Es el tipo más común y ocurre por una obstrucción en la vía aérea que impide un flujo de aire adecuado. Las señales del cerebro no se interrumpen, pero los esfuerzos musculares no son suficientes."
            )}
          </p>

          <h4 className="text-xl font-medium">{t("Apnea del Sueño Mixta")}</h4>
          <p>
            {t(
              "Combinación de apnea central y obstructiva, presentando ambos mecanismos de interrupción respiratoria."
            )}
          </p>
        </div>

        {/* TRATAMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Tratamientos")}</h3>

          <h4 className="text-xl font-medium">{t("Cambios de Comportamiento")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Pérdida de peso en caso de sobrepeso")}</li>
            <li>{t("Evitar alcohol o medicamentos sedantes")}</li>
            <li>{t("Dejar de fumar")}</li>
            <li>{t("Cambiar posiciones para dormir")}</li>
          </ul>

          <h4 className="text-xl font-medium">{t("Dispositivos Dentales")}</h4>
          <p>
            {t(
              "Dispositivos que mantienen la mandíbula hacia adelante, útiles para apnea leve o en quienes no responden a cambios de comportamiento."
            )}
          </p>

          <h4 className="text-xl font-medium">
            {t("Dispositivos Nasales y Medicamentos")}
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Tiras nasales adhesivas para ampliar fosas nasales")}</li>
            <li>{t("Aerosoles nasales con esteroides")}</li>
            <li>{t("Descongestionantes nasales")}</li>
            <li>{t("Medicamentos para vigilia diurna (Provigil, Armodafinilo)")}</li>
          </ul>

          <h4 className="text-xl font-medium">
            {t("CPAP - Presión Positiva Continua")}
          </h4>
          <p>
            {t(
              "La CPAP evita el estrechamiento de la vía aérea durante la respiración, manteniendo un flujo de aire constante y presión persistente."
            )}
          </p>

          <h4 className="text-xl font-medium">{t("Cirugía")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>{t("Septoplastía")}:</strong>{" "}
              {t("Corrección de desviación del tabique nasal")}
            </li>
            <li>
              <strong>{t("Polipectomía")}:</strong> {t("Extracción de pólipos nasales")}
            </li>
            <li>
              <strong>{t("Reducción de cornetes")}:</strong>{" "}
              {t("Para mejorar flujo de aire")}
            </li>
          </ul>
        </div>

        {/* FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Factores de Riesgo")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Edad avanzada")}</li>
            <li>{t("Sexo masculino")}</li>
            <li>{t("Obesidad")}</li>
            <li>{t("Enfermedades del corazón")}</li>
            <li>{t("Antecedentes familiares")}</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("¿Sospecha que tiene Apnea del Sueño?")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "El Dr. Lumbán puede realizar una evaluación completa y recomendar el tratamiento más adecuado para su caso específico."
            )}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("SOLICITA TU CONSULTA")}
          </a>
        </div>

        {/* PERFIL */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("Conozca sobre el Dr. Lumbán")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t(
                "El Dr. Lumbán tiene años de experiencia dentro del campo de la otorrinolaringología, prestando un servicio de calidad y trato amable."
              )}
            </p>
          </div>
          <a
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("VER PERFIL COMPLETO")}
          </a>
        </div>

      </div>
    </main>
  );
}
