"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function RonquidosPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("snoring.hero_title")}
        subtitle={t("snoring.hero_subtitle")}
        src="/ronquidos/Los ronquidos frecuentes y falta de descanso es una senal para acudir con el Dr Lumban experto en garganta y ronquidos.webp"
        alt={t("snoring.hero_title")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO - SEO H1 + INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">{t("snoring.seo_h1")}</h1>
          <p>{t("snoring.seo_intro")}</p>
        </div>

        {/* ¿CUÁNDO PUEDE SER UN PROBLEMA MAYOR? */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("snoring.when_problem_title")}
          </h2>
          <p>{t("snoring.when_problem_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("snoring.symptom1")}</li>
            <li>{t("snoring.symptom2")}</li>
            <li>{t("snoring.symptom3")}</li>
            <li>{t("snoring.symptom4")}</li>
            <li>{t("snoring.symptom5")}</li>
            <li>{t("snoring.symptom6")}</li>
            <li>{t("snoring.symptom7")}</li>
            <li>{t("snoring.symptom8")}</li>
          </ul>
        </div>

        {/* FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("snoring.risk_factors_title")}
          </h2>
          <p>{t("snoring.risk_factors_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("snoring.risk1")}</li>
            <li>{t("snoring.risk2")}</li>
            <li>{t("snoring.risk3")}</li>
            <li>{t("snoring.risk4")}</li>
            <li>{t("snoring.risk5")}</li>
            <li>{t("snoring.risk6")}</li>
            <li>{t("snoring.risk7")}</li>
          </ul>
        </div>

        <SecondaryImage src="/ronquidos/El ronquido puede  bloquear parcialmente las vias respiratorias agenda con un experto en ronquido en Tijuana.webp" />

        {/* TRATAMIENTO NO QUIRÚRGICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("snoring.non_surgical_title")}
          </h2>

          <h3 className="text-2xl font-medium">{t("snoring.habits_title")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("snoring.habit1")}</li>
            <li>{t("snoring.habit2")}</li>
            <li>{t("snoring.habit3")}</li>
            <li>{t("snoring.habit4")}</li>
          </ul>

          <h3 className="text-2xl font-medium">
            {t("snoring.dental_devices_title")}
          </h3>
          <p>{t("snoring.dental_devices_text")}</p>

          <h3 className="text-2xl font-medium">{t("snoring.cpap_title")}</h3>
          <p>{t("snoring.cpap_text")}</p>
        </div>

        {/* TRATAMIENTO QUIRÚRGICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("snoring.surgical_title")}
          </h2>
          <p>{t("snoring.surgical_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("snoring.procedure1")}</li>
            <li>{t("snoring.procedure2")}</li>
            <li>{t("snoring.procedure3")}</li>
          </ul>
        </div>

        {/* CTA FINAL - RECUPERA TU DESCANSO */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("snoring.recovery_cta_title")}
          </h2>
          <p className="text-gray-700">{t("snoring.recovery_cta_text")}</p>
        </div>

        {/* BOTÓN DE CONTACTO (funcional, no del SEO) */}
        <div className="text-center">
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("snoring.cta_button")}
          </a>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            {t("snoring.other_conditions")}
          </h3>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <a
              href={getRouteByKey("voice-disorders", currentLang)}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {t("snoring.voice_disorders")}
            </a>
            <a
              href={getRouteByKey("sleep-apnea", currentLang)}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {t("snoring.sleep_apnea")}
            </a>
            <a
              href={getRouteByKey("throat-problems", currentLang)}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {t("snoring.throat_problems")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
