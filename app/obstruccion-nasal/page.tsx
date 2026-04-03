"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function ObstruccionNasalPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("nasal-obstruction.hero_title")}
        subtitle={t("nasal-obstruction.hero_subtitle")}
        src="/obstruccion nasal/La obstruccion nasal puede deberse a alergias, malformaciones, tabique desviado es importante agendar tu valoracion con el Dr Lumban.webp"
        alt={t("nasal-obstruction.hero_alt")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* DESCRIPCIÓN + ANATOMÍA */}
        <div className="gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("nasal-obstruction.title_h1")}
            </h1>
            <p>{t("nasal-obstruction.intro_text")}</p>
            <h2 className="text-2xl font-bold text-gray-900">
              {t("nasal-obstruction.causes_title")}
            </h2>
            <p>{t("nasal-obstruction.causes_text")}</p>
            <p>
              <strong>{t("nasal-obstruction.adenoids_title")}</strong>{" "}
              {t("nasal-obstruction.adenoids_text")}
            </p>
            <p>
              <strong>{t("nasal-obstruction.mucosa_title")}</strong>{" "}
              {t("nasal-obstruction.mucosa_text")}
            </p>
            <p>
              <strong>{t("nasal-obstruction.deviated_septum_title")}</strong>{" "}
              {t("nasal-obstruction.deviated_septum_text")}
            </p>
            <p>
              <strong>{t("nasal-obstruction.polyps_title")}</strong>{" "}
              {t("nasal-obstruction.polyps_text")}
            </p>
            <p>
              <strong>{t("nasal-obstruction.turbinates_title")}</strong>{" "}
              {t("nasal-obstruction.turbinates_text")}
            </p>
            <p>
              <strong>{t("nasal-obstruction.nasal_valve_title")}</strong>{" "}
              {t("nasal-obstruction.nasal_valve_text")}
            </p>
            <p>
              <strong>{t("nasal-obstruction.choanal_atresia_title")}</strong>{" "}
              {t("nasal-obstruction.choanal_atresia_text")}
            </p>
          </div>
        </div>

        <SecondaryImage src="/obstruccion nasal/El DR Lumban realiza tu nariz con un endoscopio nasal para visualizar estructuras internas y explorar con precision tu nariz para un diagnostico preciso.webp" />

        {/* TRATAMIENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">
              {t("nasal-obstruction.treatment_options_title")}
            </h2>
            <p>{t("nasal-obstruction.treatment_options_text")}</p>
            <h3 className="text-xl font-medium">
              {t("nasal-obstruction.non_invasive_title")}
            </h3>
            <p className="text-gray-600">
              {t("nasal-obstruction.non_invasive_text")}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("nasal-obstruction.non_invasive_item1")}</li>
              <li>{t("nasal-obstruction.non_invasive_item2")}</li>
              <li>{t("nasal-obstruction.non_invasive_item3")}</li>
              <li>{t("nasal-obstruction.non_invasive_item4")}</li>
            </ul>
            <h3 className="text-xl font-medium">
              {t("nasal-obstruction.surgical_title")}
            </h3>
            <p className="text-gray-600">
              {t("nasal-obstruction.surgical_text")}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("nasal-obstruction.surgical_item1")}</li>
              <li>{t("nasal-obstruction.surgical_item2")}</li>
              <li>{t("nasal-obstruction.surgical_item3")}</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">
              {t("nasal-obstruction.when_to_see_title")}
            </h2>
            <p>{t("nasal-obstruction.when_to_see_text")}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("nasal-obstruction.symptom1")}</li>
              <li>{t("nasal-obstruction.symptom2")}</li>
              <li>{t("nasal-obstruction.symptom3")}</li>
              <li>{t("nasal-obstruction.symptom4")}</li>
              <li>{t("nasal-obstruction.symptom5")}</li>
            </ul>
            <p className="mt-4">{t("nasal-obstruction.final_text")}</p>
            <p className="font-semibold">{t("nasal-obstruction.cta_final")}</p>
          </div>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl font-semibold">
              {t("nasal-obstruction.cta_question")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("nasal-obstruction.cta_text")}
            </p>
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              {t("nasal-obstruction.cta_button")}
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              {t("nasal-obstruction.about_doctor")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("nasal-obstruction.about_doctor_text")}
            </p>
            <a
              href={getRouteByKey("profile", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("nasal-obstruction.view_full_profile")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
