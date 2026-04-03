"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function CongestionNasalPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [openCauseIndex, setOpenCauseIndex] = React.useState<number | null>(
    null,
  );
  const [openTreatmentIndex, setOpenTreatmentIndex] = React.useState<
    number | null
  >(null);
  const [openPreventionIndex, setOpenPreventionIndex] = React.useState<
    number | null
  >(null);

  const causeItems = [
    {
      titleKey: "nasal-congestion.infections_title",
      textKey: "nasal-congestion.infections_text",
      extraKey: "nasal-congestion.infections_extra",
    },
    {
      titleKey: "nasal-congestion.structural_title",
      textKey: "nasal-congestion.structural_text",
      extraKey: "nasal-congestion.structural_extra",
    },
    {
      titleKey: "nasal-congestion.allergies_title",
      textKey: "nasal-congestion.allergies_text",
      extraKey: "nasal-congestion.allergies_extra",
    },
    {
      titleKey: "nasal-congestion.vasomotor_title",
      textKey: "nasal-congestion.vasomotor_text",
      extraKey: "nasal-congestion.vasomotor_extra",
    },
  ];

  const treatmentItems = [
    {
      titleKey: "nasal-congestion.treatment_medical_title",
      items: [
        "nasal-congestion.treatment_non_item1",
        "nasal-congestion.treatment_non_item2",
        "nasal-congestion.treatment_non_item3",
        "nasal-congestion.treatment_non_item4",
        "nasal-congestion.treatment_non_item5",
      ],
    },
    {
      titleKey: "nasal-congestion.treatment_surgical_section_title",
      items: [
        "nasal-congestion.treatment_surg_item1",
        "nasal-congestion.treatment_surg_item2",
        "nasal-congestion.treatment_surg_item3",
        "nasal-congestion.treatment_surg_item4",
        "nasal-congestion.treatment_surg_item5",
      ],
    },
  ];

  const preventionItems = [
    {
      titleKey: "nasal-congestion.prevention_measures_title",
      items: [
        "nasal-congestion.prevention_item1",
        "nasal-congestion.prevention_item2",
        "nasal-congestion.prevention_item3",
        "nasal-congestion.prevention_item4",
      ],
    },
    {
      titleKey: "nasal-congestion.prevention_home_title",
      items: [
        "nasal-congestion.prevention_home_item1",
        "nasal-congestion.prevention_home_item2",
        "nasal-congestion.prevention_home_item3",
        "nasal-congestion.prevention_home_item4",
      ],
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("nasal-congestion.hero_title")}
        subtitle={t("nasal-congestion.hero_subtitle")}
        src="/congestion nasal/El dr Lumban trata nariz tapada y con dificultad para respirar en su consultorio en Tijuana.webp"
        alt={t("nasal-congestion.hero_alt")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* DESCRIPCIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("nasal-congestion.title_h1")}
            </h1>
            <p>{t("nasal-congestion.intro_text")}</p>
            <p>{t("nasal-congestion.intro_text2")}</p>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-gray-600">
              <span className="font-semibold">
                {t("nasal-congestion.important_label")}
              </span>{" "}
              {t("nasal-congestion.warning_text")}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("nasal-congestion.diagnosis_section_title")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("nasal-congestion.diagnosis_item1")}</li>
              <li>{t("nasal-congestion.diagnosis_item2")}</li>
              <li>{t("nasal-congestion.diagnosis_item3")}</li>
              <li>{t("nasal-congestion.diagnosis_item4")}</li>
              <li>{t("nasal-congestion.diagnosis_item5")}</li>
              <li>{t("nasal-congestion.diagnosis_item6")}</li>
            </ul>
          </div>
        </div>

        {/* CAUSAS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            {t("nasal-congestion.causes_title")}
          </h2>
          <div className="space-y-4">
            {causeItems.map((item, index) => (
              <div
                key={item.titleKey}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenCauseIndex(openCauseIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="text-lg font-medium text-gray-900">
                      {t(item.titleKey)}
                    </span>
                  </span>
                  <span
                    className={`text-gray-400 transition ${
                      openCauseIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openCauseIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden space-y-3 text-gray-700">
                    <p>{t(item.textKey)}</p>
                    <p className="text-gray-600">{t(item.extraKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRATAMIENTO */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            {t("nasal-congestion.treatment_title")}
          </h2>
          <div className="space-y-4">
            {treatmentItems.map((item, index) => (
              <div
                key={item.titleKey}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenTreatmentIndex(
                      openTreatmentIndex === index ? null : index,
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="text-lg font-medium text-gray-900">
                      {t(item.titleKey)}
                    </span>
                  </span>
                  <span
                    className={`text-gray-400 transition ${
                      openTreatmentIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openTreatmentIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-1 text-gray-700">
                      {item.items.map((entryKey) => (
                        <li key={entryKey} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                          <span>{t(entryKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SecondaryImage src="/congestion nasal/Respira con normalidad con un tratamiento efectivo con un experto en nariz en Tijuana.webp" />

        {/* PREVENCIÓN */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            {t("nasal-congestion.prevention_title")}
          </h2>
          <div className="space-y-4">
            {preventionItems.map((item, index) => (
              <div
                key={item.titleKey}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenPreventionIndex(
                      openPreventionIndex === index ? null : index,
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="text-lg font-medium text-gray-900">
                      {t(item.titleKey)}
                    </span>
                  </span>
                  <span
                    className={`text-gray-400 transition ${
                      openPreventionIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openPreventionIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-1 text-gray-700">
                      {item.items.map((entryKey) => (
                        <li key={entryKey} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                          <span>{t(entryKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-gray-700">
            <p>{t("nasal-congestion.prevention_warning")}</p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 text-center space-y-4">
          <p className="text-gray-700 text-lg">
            {t("nasal-congestion.cta_final")}
          </p>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl font-semibold">
              {t("nasal-congestion.cta_evaluation")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("nasal-congestion.cta_evaluation_text")}
            </p>
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              {t("nasal-congestion.cta_button")}
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              {t("nasal-congestion.about_doctor")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("nasal-congestion.about_doctor_text")}
            </p>
            <a
              href={getRouteByKey("profile", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("nasal-congestion.view_full_profile")}
            </a>
          </div>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            {t("nasal-congestion.other_conditions")}
          </h3>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("nasal-congestion.septoplasty")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("nasal-congestion.sinusitis")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("nasal-congestion.nasal_congestion")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("nasal-congestion.nasal_obstruction")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("nasal-congestion.allergies")}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
