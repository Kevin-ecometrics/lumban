"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function ApneaSuenoPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("sleep-apnea.hero_title")}
        subtitle={t("sleep-apnea.hero_subtitle")}
        src="/apnea del sueno/La apnea sueno es un trastono comun y serio de respiracion que requiere atencion especializada de un otorrino experimentado como el Dr Lumban.webp"
        alt={t("sleep-apnea.hero_title")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO - SEO H1 + INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">{t("sleep-apnea.seo_h1")}</h1>
          <p>{t("sleep-apnea.seo_intro")}</p>
        </div>

        {/* TIPOS DE APNEA DEL SUEÑO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sleep-apnea.types_title")}
          </h2>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.obstructive_title")}
          </h3>
          <p>{t("sleep-apnea.obstructive_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.children_title")}
          </h3>
          <p>{t("sleep-apnea.children_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.central_title")}
          </h3>
          <p>{t("sleep-apnea.central_text")}</p>
        </div>

        {/* SÍNTOMAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sleep-apnea.symptoms_title")}
          </h2>
          <p>{t("sleep-apnea.symptoms_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("sleep-apnea.symptom1")}</li>
            <li>{t("sleep-apnea.symptom2")}</li>
            <li>{t("sleep-apnea.symptom3")}</li>
            <li>{t("sleep-apnea.symptom4")}</li>
            <li>{t("sleep-apnea.symptom5")}</li>
            <li>{t("sleep-apnea.symptom6")}</li>
            <li>{t("sleep-apnea.symptom7")}</li>
            <li>{t("sleep-apnea.symptom8")}</li>
          </ul>
        </div>

        {/* FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sleep-apnea.risk_factors_title")}
          </h2>
          <p>{t("sleep-apnea.risk_factors_text")}</p>
        </div>

        <SecondaryImage src="/apnea del sueno/CPAP es un excelente Tratamiento para mantener las vias respiratorias abiertas durante el sueno recomendado por el Dr Lumban.webp" />

        {/* DIAGNÓSTICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sleep-apnea.diagnosis_title")}
          </h2>
          <p>{t("sleep-apnea.diagnosis_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("sleep-apnea.diagnosis1")}</li>
            <li>{t("sleep-apnea.diagnosis2")}</li>
            <li>{t("sleep-apnea.diagnosis3")}</li>
          </ul>
        </div>

        {/* TRATAMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sleep-apnea.treatments_title")}
          </h2>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.habits_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("sleep-apnea.habit1")}</li>
            <li>{t("sleep-apnea.habit2")}</li>
            <li>{t("sleep-apnea.habit3")}</li>
            <li>{t("sleep-apnea.habit4")}</li>
          </ul>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.dental_title")}
          </h3>
          <p>{t("sleep-apnea.dental_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.nasal_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("sleep-apnea.nasal1")}</li>
            <li>{t("sleep-apnea.nasal2")}</li>
            <li>{t("sleep-apnea.nasal3")}</li>
            <li>{t("sleep-apnea.nasal4")}</li>
          </ul>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.cpap_title")}
          </h3>
          <p>{t("sleep-apnea.cpap_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("sleep-apnea.surgery_title")}
          </h3>
          <p>{t("sleep-apnea.surgery_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("sleep-apnea.surgery1")}</li>
            <li>{t("sleep-apnea.surgery2")}</li>
            <li>{t("sleep-apnea.surgery3")}</li>
          </ul>
        </div>

        {/* RAZONES PARA TRATAR */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sleep-apnea.reasons_title")}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("sleep-apnea.reason1")}</li>
            <li>{t("sleep-apnea.reason2")}</li>
            <li>{t("sleep-apnea.reason3")}</li>
            <li>{t("sleep-apnea.reason4")}</li>
          </ul>
        </div>

        {/* SOSPECHA DE APNEA - CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("sleep-apnea.suspicion_title")}
          </h2>
          <p className="text-gray-700">{t("sleep-apnea.suspicion_text")}</p>
        </div>

        {/* BOTÓN DE CONTACTO (funcional, no del SEO) */}
        <div className="text-center">
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("sleep-apnea.cta_button")}
          </a>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            {t("sleep-apnea.other_conditions")}
          </h3>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <a
              href={getRouteByKey("voice-disorders", currentLang)}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {t("sleep-apnea.voice_disorders")}
            </a>
            <a
              href={getRouteByKey("snoring", currentLang)}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {t("sleep-apnea.snoring")}
            </a>
            <a
              href={getRouteByKey("throat-problems", currentLang)}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {t("sleep-apnea.throat_problems")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
