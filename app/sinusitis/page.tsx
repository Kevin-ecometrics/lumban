"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";
import JsonLdFaq from "../Components/JsonLdFaq";

export default function SinusitisPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      <JsonLdFaq
        questions={[
          { questionKey: "sinusitis.faq1_q", answerKey: "sinusitis.faq1_a" },
          { questionKey: "sinusitis.faq2_q", answerKey: "sinusitis.faq2_a" },
          { questionKey: "sinusitis.faq3_q", answerKey: "sinusitis.faq3_a" },
          { questionKey: "sinusitis.faq4_q", answerKey: "sinusitis.faq4_a" },
          { questionKey: "sinusitis.faq5_q", answerKey: "sinusitis.faq5_a" },
        ]}
      />
      {/* HERO */}
      <Hero
        title={t("sinusitis.hero_title")}
        subtitle={t("sinusitis.hero_subtitle")}
        src="/sinusitis/Si te congestionas con frecuencia y tienes problemas para respirar acude con el especialista en nariz Jaime Lumban.webp"
        alt={t("sinusitis.hero_alt")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO + SÍNTOMAS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("sinusitis.title_h1")}
            </h1>
            <p>{t("sinusitis.intro_text")}</p>
            <p>{t("sinusitis.intro_text2")}</p>
            <h2 className="text-2xl font-bold text-gray-900">
              {t("sinusitis.causes_title")}
            </h2>
            <p>{t("sinusitis.cause1")}</p>
            <p>{t("sinusitis.cause2")}</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("sinusitis.symptoms_title")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("sinusitis.symptom1")}</li>
              <li>{t("sinusitis.symptom2")}</li>
              <li>{t("sinusitis.symptom3")}</li>
              <li>{t("sinusitis.symptom4")}</li>
              <li>{t("sinusitis.symptom5")}</li>
            </ul>
            <p className="font-semibold mt-2">
              {t("sinusitis.other_symptoms")}
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>{t("sinusitis.other_symptom1")}</li>
              <li>{t("sinusitis.other_symptom2")}</li>
              <li>{t("sinusitis.other_symptom3")}</li>
            </ul>
          </div>
        </div>

        <SecondaryImage src="/sinusitis/Detecta a tiempo una sinusitis antes que se haga cronica con el Dr Jaime Lumban.webp" />

        {/* DIAGNÓSTICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis.diagnosis_title")}
          </h2>
          <p>{t("sinusitis.diagnosis_text")}</p>
        </div>

        {/* OPCIONES DE TRATAMIENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">
              {t("sinusitis.treatment_title")}
            </h2>
            <p>{t("sinusitis.treatment_text")}</p>
            <h3 className="text-xl font-semibold">
              {t("sinusitis.balloon_title")}
            </h3>
            <p>{t("sinusitis.balloon_text")}</p>
            <h3 className="text-xl font-semibold">
              {t("sinusitis.cens_title")}
            </h3>
            <p>{t("sinusitis.cens_text")}</p>
            <p>{t("sinusitis.cens_note")}</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <p className="text-lg font-semibold">{t("sinusitis.cta_final")}</p>
          </div>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">
              {t("sinusitis.cta_chronic_title")}
            </h2>
            <p>{t("sinusitis.cta_chronic_text")}</p>
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              {t("sinusitis.cta_button")}
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">
              {t("sinusitis.about_doctor")}
            </h2>
            <p className="text-gray-700">{t("sinusitis.about_doctor_text")}</p>
            <a
              href={getRouteByKey("profile", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("sinusitis.view_full_profile")}
            </a>
          </div>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            {t("sinusitis.other_conditions")}
          </h3>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("sinusitis.septoplasty")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("sinusitis.sinusitis")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("sinusitis.nasal_congestion")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("sinusitis.nasal_obstruction")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("sinusitis.allergies")}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
