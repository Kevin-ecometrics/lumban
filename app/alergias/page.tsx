"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function AlergiasPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const experienceYears = new Date().getFullYear() - 1993;
  const [openConditionIndex, setOpenConditionIndex] = React.useState<
    number | null
  >(null);

  const conditionItems = [
    {
      titleKey: "allergies.allergic_rhinitis_title",
      textKey: "allergies.allergic_rhinitis_text",
    },
    {
      titleKey: "allergies.asthma_title",
      textKey: "allergies.asthma_text",
    },
    {
      titleKey: "allergies.sinusitis_title",
      textKey: "allergies.sinusitis_text",
    },
    {
      titleKey: "allergies.cough_title",
      textKey: "allergies.cough_text",
    },
    {
      titleKey: "allergies.immunodeficiency_title",
      textKey: "allergies.immunodeficiency_text",
    },
    {
      titleKey: "allergies.postnasal_title",
      textKey: "allergies.postnasal_text",
    },
    {
      titleKey: "allergies.food_allergies_title",
      textKey: "allergies.food_allergies_text",
    },
    {
      titleKey: "allergies.environmental_allergies_title",
      textKey: "allergies.environmental_allergies_text",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("allergies.hero_title")}
        subtitle={t("allergies.hero_subtitle")}
        src="/alergias.jpg"
        alt={t("allergies.hero_alt")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* DESCRIPCIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("allergies.title_h1")}
          </h1>
          <p>{t("allergies.intro_text")}</p>
          <p>{t("allergies.intro_text2")}</p>
          <p>{t("allergies.intro_text3")}</p>

          <h2 className="text-2xl font-bold text-gray-900">
            {t("allergies.differences_title")}
          </h2>
          <p>{t("allergies.differences_text")}</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("allergies.symptom_header")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("allergies.allergy_header")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("allergies.cold_header")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("allergies.flu_header")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.nasal_discharge")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.nasal_discharge_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.nasal_discharge_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.nasal_discharge_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sneezing")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sneezing_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sneezing_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sneezing_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sore_throat")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sore_throat_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sore_throat_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.sore_throat_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.cough")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.cough_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.cough_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.cough_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.headache")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.headache_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.headache_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.headache_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fever")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fever_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fever_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fever_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.body_aches")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.body_aches_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.body_aches_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.body_aches_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fatigue")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fatigue_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fatigue_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.fatigue_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.exhaustion")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.exhaustion_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.exhaustion_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.exhaustion_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.chest_discomfort")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.chest_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.chest_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.chest_flu")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.duration")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.duration_allergy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.duration_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("allergies.duration_flu")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {t("allergies.why_important_title")}
          </h2>
          <p>{t("allergies.why_important_text")}</p>
          <p className="font-semibold">{t("allergies.allergies_can_cause")}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t("allergies.cause1")}</li>
            <li>{t("allergies.cause2")}</li>
            <li>{t("allergies.cause3")}</li>
            <li>{t("allergies.cause4")}</li>
            <li>{t("allergies.cause5")}</li>
          </ul>
          <p>
            {t("allergies.experience_text_prefix")} {experienceYears}{" "}
            {t("allergies.experience_text_suffix")}
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {t("allergies.conditions_title")}
          </h2>
          <p>{t("allergies.conditions_text")}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t("allergies.condition1")}</li>
            <li>{t("allergies.condition2")}</li>
            <li>{t("allergies.condition3")}</li>
            <li>{t("allergies.condition4")}</li>
            <li>{t("allergies.condition5")}</li>
            <li>{t("allergies.condition6")}</li>
            <li>{t("allergies.condition7")}</li>
            <li>{t("allergies.condition8")}</li>
            <li>{t("allergies.condition9")}</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            {t("allergies.treatments_title")}
          </h2>
          <p>{t("allergies.treatments_text")}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t("allergies.treatment1")}</li>
            <li>{t("allergies.treatment2")}</li>
            <li>{t("allergies.treatment3")}</li>
            <li>{t("allergies.treatment4")}</li>
            <li>{t("allergies.treatment5")}</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            {t("allergies.cta_title")}
          </h2>
          <p>{t("allergies.cta_text")}</p>
          <p>{t("allergies.cta_text2")}</p>
          <p className="font-semibold">{t("allergies.cta_button")}</p>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl font-semibold">
              {t("allergies.cta_question")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("allergies.cta_description")}
            </p>
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              {t("allergies.cta_appointment")}
            </a>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              {t("allergies.about_doctor")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("allergies.about_doctor_text")}
            </p>
            <a
              href={getRouteByKey("profile", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("allergies.view_full_profile")}
            </a>
          </div>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            {t("allergies.other_conditions")}
          </h3>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("allergies.septoplasty")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("allergies.sinusitis_condition")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("allergies.nasal_congestion")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("allergies.nasal_obstruction")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("allergies.allergies_condition")}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
