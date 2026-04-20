"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function CirugiaAntirronquidoPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
      <Hero
        title={t("anti-snoring-surgery.hero_title")}
        subtitle={t("anti-snoring-surgery.hero_subtitle")}
        src="/cirugia antirronquidos/Recupera tu descanso de forma permanente con una cirugia antirronquidos con el Dr. Lumban.webp"
        alt={t("anti-snoring-surgery.hero_title")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO - SEO H1 + RONQUIDO Y ABORDAJE QUIRÚRGICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">
            {t("anti-snoring-surgery.seo_h1")}
          </h1>
          <h2 className="text-3xl font-semibold">
            {t("anti-snoring-surgery.snoring_surgical_title")}
          </h2>
          <p>{t("anti-snoring-surgery.snoring_surgical_text")}</p>
          <p>{t("anti-snoring-surgery.surgery_areas_text")}</p>
        </div>

        {/* TIPOS DE CIRUGÍA PARA EL RONQUIDO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("anti-snoring-surgery.surgery_types_title")}
          </h2>
          <p>{t("anti-snoring-surgery.surgery_types_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("anti-snoring-surgery.radiofrequency_title")}
          </h3>
          <p>{t("anti-snoring-surgery.radiofrequency_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("anti-snoring-surgery.uvulopalatopharyngoplasty_title")}
          </h3>
          <p>{t("anti-snoring-surgery.uvulopalatopharyngoplasty_text")}</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("anti-snoring-surgery.upfp_item1")}</li>
            <li>{t("anti-snoring-surgery.upfp_item2")}</li>
            <li>{t("anti-snoring-surgery.upfp_item3")}</li>
          </ul>
          <p>{t("anti-snoring-surgery.upfp_recovery")}</p>

          <h3 className="text-2xl font-medium">
            {t("anti-snoring-surgery.nasal_valvuloplasty_title")}
          </h3>
          <p className="font-semibold">
            {t("anti-snoring-surgery.nasal_valve_question")}
          </p>
          <p>{t("anti-snoring-surgery.nasal_valve_text")}</p>
          <p>{t("anti-snoring-surgery.nasal_valvuloplasty_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("anti-snoring-surgery.septoplasty_title")}
          </h3>
          <p>{t("anti-snoring-surgery.septoplasty_text")}</p>
          <p>{t("anti-snoring-surgery.turbinate_reduction_text")}</p>
        </div>

        <SecondaryImage src="/cirugia antirronquidos/Acude a una valoracion para saber si eres candidato una cirugia no invasiva anti ronquido con el Dr. Lumban.webp" />

        {/* DIAGNÓSTICO Y EVALUACIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("anti-snoring-surgery.diagnosis_title")}
          </h2>
          <p>{t("anti-snoring-surgery.diagnosis_text")}</p>
          <p className="font-semibold">
            {t("anti-snoring-surgery.nasofibroscopy_title")}
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("anti-snoring-surgery.nasofibroscopy_item1")}</li>
            <li>{t("anti-snoring-surgery.nasofibroscopy_item2")}</li>
            <li>{t("anti-snoring-surgery.nasofibroscopy_item3")}</li>
            <li>{t("anti-snoring-surgery.nasofibroscopy_item4")}</li>
            <li>{t("anti-snoring-surgery.nasofibroscopy_item5")}</li>
            <li>{t("anti-snoring-surgery.nasofibroscopy_item6")}</li>
            <li>{t("anti-snoring-surgery.nasofibroscopy_item7")}</li>
          </ul>
          <p>{t("anti-snoring-surgery.polysomnography_text")}</p>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("anti-snoring-surgery.final_cta_title")}
          </h2>
          <p className="text-gray-700">
            {t("anti-snoring-surgery.final_cta_text")}
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
