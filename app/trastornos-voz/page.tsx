"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function TrastornosVozPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Acerca de los Trastornos de la Voz")}
        subtitle={t(
          "Conozca acerca de los padecimientos relacionados con la garganta",
        )}
        src="/trastornos de voz/Los trastornos de la voz, garganta y laringe requieren un tratamiento personalizado   Acuden con tu otorrino Jaime Lumban.webp"
        alt={t("Acerca de los Trastornos de la Voz")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO - SEO H1 + INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">{t("voice-disorders.seo_h1")}</h1>
          <p>{t("voice-disorders.seo_intro")}</p>
        </div>

        {/* CLASIFICACIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.classification_title")}
          </h2>
          <p>{t("voice-disorders.classification_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.organic")}</li>
            <li>{t("voice-disorders.neurological")}</li>
            <li>{t("voice-disorders.functional")}</li>
          </ul>
        </div>

        {/* TIPOS COMUNES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.common_types_title")}
          </h2>
          <p>{t("voice-disorders.common_types_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.nodules")}</li>
            <li>{t("voice-disorders.polyps")}</li>
            <li>{t("voice-disorders.laryngitis")}</li>
            <li>{t("voice-disorders.muscle_tension")}</li>
            <li>{t("voice-disorders.spasmodic")}</li>
            <li>{t("voice-disorders.benign_lesions")}</li>
            <li>{t("voice-disorders.paralysis")}</li>
          </ul>
        </div>

        {/* CAUSAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.causes_title")}
          </h2>
          <p>{t("voice-disorders.causes_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.cause1")}</li>
            <li>{t("voice-disorders.cause2")}</li>
            <li>{t("voice-disorders.cause3")}</li>
            <li>{t("voice-disorders.cause4")}</li>
            <li>{t("voice-disorders.cause5")}</li>
            <li>{t("voice-disorders.cause6")}</li>
            <li>{t("voice-disorders.cause7")}</li>
            <li>{t("voice-disorders.cause8")}</li>
            <li>{t("voice-disorders.cause9")}</li>
          </ul>
        </div>

        <SecondaryImage src="/trastornos de voz/Recupera tu salud vocal con un diagnostico y tratamiento especializado con el Dr Lumban.webp" />

        {/* CUÁNDO ACUDIR */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.when_to_see_title")}
          </h2>
          <p>{t("voice-disorders.when_to_see_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.alert1")}</li>
            <li>{t("voice-disorders.alert2")}</li>
            <li>{t("voice-disorders.alert3")}</li>
            <li>{t("voice-disorders.alert4")}</li>
            <li>{t("voice-disorders.alert5")}</li>
            <li>{t("voice-disorders.alert6")}</li>
            <li>{t("voice-disorders.alert7")}</li>
          </ul>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.diagnosis_title")}
          </h2>
          <p>{t("voice-disorders.diagnosis_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.laryngoscopy")}</li>
            <li>{t("voice-disorders.videostroboscopy")}</li>
            <li>{t("voice-disorders.imaging")}</li>
          </ul>
        </div>

        {/* FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.risk_factors_title")}
          </h2>
          <p>{t("voice-disorders.risk_factors_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.risk1")}</li>
            <li>{t("voice-disorders.risk2")}</li>
            <li>{t("voice-disorders.risk3")}</li>
            <li>{t("voice-disorders.risk4")}</li>
            <li>{t("voice-disorders.risk5")}</li>
            <li>{t("voice-disorders.risk6")}</li>
            <li>{t("voice-disorders.risk7")}</li>
          </ul>
        </div>

        {/* PROFESIONES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.high_risk_professions_title")}
          </h2>
          <p>{t("voice-disorders.high_risk_professions_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.profession1")}</li>
            <li>{t("voice-disorders.profession2")}</li>
            <li>{t("voice-disorders.profession3")}</li>
            <li>{t("voice-disorders.profession4")}</li>
            <li>{t("voice-disorders.profession5")}</li>
          </ul>
        </div>

        {/* PREVENCIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voice-disorders.prevention_title")}
          </h2>
          <p>{t("voice-disorders.prevention_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voice-disorders.prevention1")}</li>
            <li>{t("voice-disorders.prevention2")}</li>
            <li>{t("voice-disorders.prevention3")}</li>
            <li>{t("voice-disorders.prevention4")}</li>
            <li>{t("voice-disorders.prevention5")}</li>
          </ul>
        </div>

        {/* CTA FINAL - ATENCIÓN ESPECIALIZADA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("voice-disorders.specialist_cta_title")}
          </h2>
          <p className="text-gray-700">
            {t("voice-disorders.specialist_cta_text")}
          </p>
        </div>

        {/* BOTÓN DE CONTACTO (funcional, no del SEO) */}
        <div className="text-center">
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("voice-disorders.cta_button")}
          </a>
        </div>
      </div>
    </main>
  );
}
