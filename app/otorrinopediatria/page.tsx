"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

type AccordionItem = {
  question: string;
  answer: React.ReactNode;
};

export default function OtorrinoPediatria() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  // Acordeones basados en el SEO schema (solo lo que está en el schema)
  const items: AccordionItem[] = [
    {
      question: t("pediatric-ent.ear_infection_symptoms_title"),
      answer: (
        <>
          <p>{t("pediatric-ent.ear_infection_symptoms_text")}</p>
          <ul className="list-disc list-inside my-2">
            <li>{t("pediatric-ent.ear_symptom1")}</li>
            <li>{t("pediatric-ent.ear_symptom2")}</li>
            <li>{t("pediatric-ent.ear_symptom3")}</li>
            <li>{t("pediatric-ent.ear_symptom4")}</li>
          </ul>
        </>
      ),
    },
    {
      question: t("pediatric-ent.ventilation_tubes_title"),
      answer: (
        <>
          <p>{t("pediatric-ent.ventilation_tubes_text")}</p>
          <p>{t("pediatric-ent.tube_types")}</p>
          <p>{t("pediatric-ent.procedure_text")}</p>
        </>
      ),
    },
    {
      question: t("pediatric-ent.when_to_see_tonsils_title"),
      answer: <p>{t("pediatric-ent.when_to_see_tonsils_text")}</p>,
    },
    {
      question: t("pediatric-ent.pediatric_apnea_title"),
      answer: (
        <>
          <p>{t("pediatric-ent.pediatric_apnea_text")}</p>
          <p>
            <strong>{t("pediatric-ent.what_happens_title")}</strong>{" "}
            {t("pediatric-ent.what_happens_text")}
          </p>
          <p>
            <strong>{t("pediatric-ent.consequences_title")}</strong>{" "}
            {t("pediatric-ent.consequences_text")}
          </p>
          <p>{t("pediatric-ent.solution_text")}</p>
        </>
      ),
    },
    {
      question: t("pediatric-ent.allergic_rhinitis_title"),
      answer: <p>{t("pediatric-ent.allergic_rhinitis_text")}</p>,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-widest text-gray-600 shadow-sm">
              {t("Otorrinopediatría")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t("pediatric-ent.seo_h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t(
                "Conozca sobre diferentes enfermedades de nariz, oído y garganta en niños",
              )}
            </p>
            <p className="text-gray-600 max-w-2xl">
              {t("pediatric-ent.seo_intro")}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={getRouteByKey("contact", currentLang)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                {t("SOLICITA TU CONSULTA")}
              </a>
              <a
                href={getRouteByKey("profile", currentLang)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
              >
                {t("VER PERFIL COMPLETO")}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-4">
            <img
              src="/otorrinopediatria/El Dr Lumban brinda atencion pediatrica para infecciones de oido y otros padecimientos frecuentes en ninos en Tijuana.webp"
              alt={t("Otorrinopediatría")}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        {/* AMÍGDALAS Y ADENOIDES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("pediatric-ent.tonsils_adenoids_title")}
          </h2>
          <p>{t("pediatric-ent.tonsils_adenoids_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("pediatric-ent.tonsillitis_symptoms_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("pediatric-ent.tonsillitis_symptom1")}</li>
            <li>{t("pediatric-ent.tonsillitis_symptom2")}</li>
            <li>{t("pediatric-ent.tonsillitis_symptom3")}</li>
            <li>{t("pediatric-ent.tonsillitis_symptom4")}</li>
          </ul>
        </div>

        {/* APNEA OBSTRUCTIVA DEL SUEÑO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("pediatric-ent.pediatric_apnea_title")}
          </h2>
          <p>{t("pediatric-ent.pediatric_apnea_text")}</p>
          <p>
            <strong>{t("pediatric-ent.what_happens_title")}</strong>{" "}
            {t("pediatric-ent.what_happens_text")}
          </p>
          <p>
            <strong>{t("pediatric-ent.consequences_title")}</strong>{" "}
            {t("pediatric-ent.consequences_text")}
          </p>
          <p>{t("pediatric-ent.solution_text")}</p>
        </div>

        {/* SALUD AUDITIVA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("pediatric-ent.ear_health_title")}
          </h2>
          <p>{t("pediatric-ent.ear_health_text")}</p>
        </div>

        {/* RINITIS ALÉRGICA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("pediatric-ent.allergies_title")}
          </h2>
          <h3 className="text-2xl font-medium">
            {t("pediatric-ent.allergic_rhinitis_title")}
          </h3>
          <p>{t("pediatric-ent.allergic_rhinitis_text")}</p>
        </div>

        {/* DIFERENCIAS SINUSITIS VS RESFRIADO - TABLA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("pediatric-ent.sinusitis_vs_cold_title")}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("pediatric-ent.sinusitis_vs_cold_header1")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("pediatric-ent.sinusitis_vs_cold_header2")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("pediatric-ent.sinusitis_vs_cold_header3")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    {t("pediatric-ent.duration")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.duration_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.duration_sinusitis")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    {t("pediatric-ent.mucus")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.mucus_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.mucus_sinusitis")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    {t("pediatric-ent.fever")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.fever_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.fever_sinusitis")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    {t("pediatric-ent.pain")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.pain_cold")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("pediatric-ent.pain_sinusitis")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <SecondaryImage src="/otorrinopediatria/Si tu hijo tiene problemas para respirar dormir  dolor de garganta e infecciones en agmidalas  en dr Jaime Lumban es experto en atencion pediatrica.webp" />

        {/* RECOMENDACIONES PARA PADRES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("pediatric-ent.parent_recommendations_title")}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("pediatric-ent.recommendation1")}</li>
            <li>{t("pediatric-ent.recommendation2")}</li>
            <li>{t("pediatric-ent.recommendation3")}</li>
            <li>{t("pediatric-ent.recommendation4")}</li>
          </ul>
        </div>

        {/* ATENCIÓN ESPECIALIZADA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("pediatric-ent.specialist_care_title")}
          </h2>
          <p className="text-gray-700">
            {t("pediatric-ent.specialist_care_text")}
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center space-y-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            {t("pediatric-ent.final_cta")}
          </h3>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("SOLICITA TU CONSULTA")}
          </a>
        </div>
      </div>
    </section>
  );
}
