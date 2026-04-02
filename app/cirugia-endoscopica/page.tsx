"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CirugiaEndoscopicaSinusitisPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
      <Hero
        title={t("Cirugía endoscópica para sinusitis")}
        subtitle={t(
          "Conozca las diferentes cirugías que el Dr. Lumbán puede realizar",
        )}
        src="/sinusitis.jpg"
        alt={t("Cirugía endoscópica para sinusitis")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO - SEO H1 + ¿Qué es la sinusitis? */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">
            {t("endoscopic-surgery.seo_h1")}
          </h1>
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.what_is_sinusitis_title")}
          </h2>
          <p>{t("endoscopic-surgery.what_is_sinusitis_text")}</p>
        </div>

        {/* TIPOS DE SINUSITIS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.sinusitis_types_title")}
          </h2>
          <p>{t("endoscopic-surgery.sinusitis_types_text")}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("endoscopic-surgery.acute")}</li>
            <li>{t("endoscopic-surgery.chronic")}</li>
          </ul>
          <p>{t("endoscopic-surgery.chronic_criteria")}</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("endoscopic-surgery.chronic_symptom1")}</li>
            <li>{t("endoscopic-surgery.chronic_symptom2")}</li>
            <li>{t("endoscopic-surgery.chronic_symptom3")}</li>
            <li>{t("endoscopic-surgery.chronic_symptom4")}</li>
          </ul>
          <p>{t("endoscopic-surgery.chronic_note")}</p>
        </div>

        {/* SÍNTOMAS FRECUENTES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.common_symptoms_title")}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("endoscopic-surgery.symptom1")}</li>
            <li>{t("endoscopic-surgery.symptom2")}</li>
            <li>{t("endoscopic-surgery.symptom3")}</li>
            <li>{t("endoscopic-surgery.symptom4")}</li>
            <li>{t("endoscopic-surgery.symptom5")}</li>
          </ul>
        </div>

        {/* TRATAMIENTO NO INVASIVO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.non_surgical_treatment_title")}
          </h2>
          <p>{t("endoscopic-surgery.non_surgical_treatment_text")}</p>
        </div>

        {/* ¿CUÁNDO ESTÁ INDICADA LA CIRUGÍA? */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.surgery_indication_title")}
          </h2>
          <p>{t("endoscopic-surgery.surgery_indication_text")}</p>
        </div>

        {/* LA INTERVENCIÓN QUIRÚRGICA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.surgical_procedure_title")}
          </h2>
          <p>{t("endoscopic-surgery.surgical_procedure_text")}</p>
          <p>{t("endoscopic-surgery.duration")}</p>
          <p>{t("endoscopic-surgery.technique")}</p>
          <p className="font-semibold">
            {t("endoscopic-surgery.advantages_title")}
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("endoscopic-surgery.advantage1")}</li>
            <li>{t("endoscopic-surgery.advantage2")}</li>
            <li>{t("endoscopic-surgery.advantage3")}</li>
          </ul>
        </div>

        {/* RECOMENDACIONES POSTOPERATORIAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.post_op_title")}
          </h2>
          <p>{t("endoscopic-surgery.rest")}</p>
          <p>{t("endoscopic-surgery.restrictions")}</p>
          <p>{t("endoscopic-surgery.diet")}</p>
          <p>{t("endoscopic-surgery.hygiene")}</p>
        </div>

        {/* EVOLUCIÓN Y SEGUIMIENTO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("endoscopic-surgery.follow_up_title")}
          </h2>
          <p>{t("endoscopic-surgery.medications")}</p>
          <p>{t("endoscopic-surgery.packing_removal")}</p>
          <p>{t("endoscopic-surgery.nasal_washes")}</p>
          <p>{t("endoscopic-surgery.return_activity")}</p>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("endoscopic-surgery.final_cta_title")}
          </h2>
          <p className="text-gray-700">
            {t("endoscopic-surgery.final_cta_text")}
          </p>
        </div>

        {/* BOTÓN DE CONTACTO (funcional, no del SEO) */}
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
