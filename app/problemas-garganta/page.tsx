"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function PadecimientosGargantaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const experienceYears = new Date().getFullYear() - 1993;

  return (
    <main className="bg-white text-gray-900">
      <Hero
        title={t("Padecimientos de la Garganta")}
        subtitle={t(
          "Conozca acerca de los padecimientos relacionados con la garganta",
        )}
        src="/garganta.jpg"
        alt={t("Padecimientos de la Garganta")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">{t("throat.seo_h1")}</h1>
          <p>{t("throat.seo_intro")}</p>
        </div>

        {/* DOLOR DE GARGANTA COMÚN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("throat.common_sore_throat_title")}
          </h2>
          <p>{t("throat.common_sore_throat_text")}</p>
          <h3 className="text-2xl font-medium">
            {t("throat.common_sore_throat_symptoms_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("throat.common_sore_throat_symptom1")}</li>
            <li>{t("throat.common_sore_throat_symptom2")}</li>
          </ul>
          <p className="italic">{t("throat.common_sore_throat_note")}</p>
        </div>

        {/* AMIGDALITIS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("throat.tonsillitis_seo_title")}
          </h2>
          <p>{t("throat.tonsillitis_seo_text")}</p>
          <p>{t("throat.tonsillitis_symptoms")}</p>
          <p>{t("throat.tonsillitis_treatment")}</p>
          <p>{t("throat.tonsillitis_surgical")}</p>
        </div>

        {/* FARINGITIS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("throat.pharyngitis_seo_title")}
          </h2>
          <p>{t("throat.pharyngitis_seo_text")}</p>
          <p>{t("throat.pharyngitis_symptoms")}</p>
          <p>{t("throat.pharyngitis_treatment")}</p>
        </div>

        {/* CÁNCER DE GARGANTA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("throat.throat_cancer_seo_title")}
          </h2>
          <p>{t("throat.throat_cancer_seo_text")}</p>
          <p>{t("throat.throat_cancer_warning")}</p>
          <p>{t("throat.throat_cancer_diagnosis")}</p>
          <p>{t("throat.throat_cancer_treatment")}</p>
        </div>

        {/* CRUP */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-2 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("throat.croup_seo_title")}
          </h2>
          <p>{t("throat.croup_seo_text")}</p>
        </div>

        {/* CUÁNDO IR */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-2 text-gray-700 leading-relaxed">
          <p>{t("throat.when_to_see")}</p>
        </div>

        {/* CTA DR. LUMBÁN */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">{t("throat.doctor_cta")}</h2>
          <p className="text-lg">
            {t("throat.doctor_cta_button_prefix")} {experienceYears}{" "}
            {t("throat.doctor_cta_button_suffix")}
          </p>
        </div>

        {/* BOTÓN DE CONTACTO (lo pongo aparte porque es funcional, no del SEO) */}
        <div className="text-center">
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("SOLICITA TU CONSULTA")}
          </a>
        </div>
      </div>
    </main>
  );
}
