"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function CirugiaMicroscopicaLaringePage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
<Hero
        title={t("microscopic-surgery.hero_title")}
        subtitle={t("microscopic-surgery.hero_subtitle")}
        src="/cirugia microscopica/Cirugia microscopica de laringe para lesiones de cuerdas vocales con el Dr. Jaime Lumban en Tijuana.webp"
        alt={t("microscopic-surgery.hero_title")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO - SEO H1 */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">
            {t("microscopic-surgery.seo_h1")}
          </h1>
          <p>{t("microscopic-surgery.seo_intro")}</p>
        </div>

        {/* ¿QUÉ ES LA CIRUGÍA MICROSCOPICA? */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("microscopic-surgery.what_is_title")}
          </h2>
          <p>{t("microscopic-surgery.what_is_text")}</p>
        </div>

        {/* TRATAMIENTO SIN CIRUGÍA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("microscopic-surgery.non_surgical_title")}
          </h2>
          <p>{t("microscopic-surgery.non_surgical_text")}</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("microscopic-surgery.non_surgical_item1")}</li>
            <li>{t("microscopic-surgery.non_surgical_item2")}</li>
            <li>{t("microscopic-surgery.non_surgical_item3")}</li>
            <li>{t("microscopic-surgery.non_surgical_item4")}</li>
          </ul>

          <p className="font-semibold mt-4">
            {t("microscopic-surgery.surgical_treatment_title")}
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("microscopic-surgery.surgical_item1")}</li>
            <li>{t("microscopic-surgery.surgical_item2")}</li>
            <li>{t("microscopic-surgery.surgical_item3")}</li>
            <li>{t("microscopic-surgery.surgical_item4")}</li>
            <li>{t("microscopic-surgery.surgical_item5")}</li>
          </ul>
        </div>

        {/* ENFERMEDADES QUE REQUIEREN CIRUGÍA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("microscopic-surgery.diseases_title")}
          </h2>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.nodules_title")}
          </h3>
          <p>{t("microscopic-surgery.nodules_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.polyps_title")}
          </h3>
          <p>{t("microscopic-surgery.polyps_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.cysts_title")}
          </h3>
          <p>{t("microscopic-surgery.cysts_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.tumors_title")}
          </h3>
          <p>{t("microscopic-surgery.tumors_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.paralysis_title")}
          </h3>
          <p>{t("microscopic-surgery.paralysis_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.stenosis_title")}
          </h3>
          <p>{t("microscopic-surgery.stenosis_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.inflammation_title")}
          </h3>
          <p>{t("microscopic-surgery.inflammation_text")}</p>
        </div>

        <SecondaryImage src="/cirugia microscopica/La Cirugia microscopica con el Dr. Lumban de laringe es de alta precision para tratamiento de cuerdas vocales y afecciones de garganta.webp" />

        {/* PREPARACIÓN Y DIAGNÓSTICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("microscopic-surgery.preparation_title")}
          </h2>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.preoperative_title")}
          </h3>
          <p>{t("microscopic-surgery.preoperative_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("microscopic-surgery.diagnostic_tests_title")}
          </h3>
          <p>{t("microscopic-surgery.diagnostic_tests_text")}</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("microscopic-surgery.test1")}</li>
            <li>{t("microscopic-surgery.test2")}</li>
            <li>{t("microscopic-surgery.test3")}</li>
          </ul>
        </div>

        {/* CÓMO SE REALIZA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("microscopic-surgery.how_performed_title")}
          </h2>
          <p>{t("microscopic-surgery.how_performed_text")}</p>
        </div>

        {/* RECUPERACIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("microscopic-surgery.recovery_title")}
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("microscopic-surgery.recovery_item1")}</li>
            <li>{t("microscopic-surgery.recovery_item2")}</li>
            <li>{t("microscopic-surgery.recovery_item3")}</li>
            <li>{t("microscopic-surgery.recovery_item4")}</li>
          </ul>
          <p>{t("microscopic-surgery.recovery_text")}</p>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("microscopic-surgery.final_cta_title")}
          </h2>
          <p className="text-gray-700">
            {t("microscopic-surgery.final_cta_text")}
          </p>
        </div>

        {/* BOTÓN DE CONTACTO (funcional, no del SEO) */}
        <div className="text-center">
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("microscopic-surgery.cta_button")}
          </a>
        </div>
      </div>
    </main>
  );
}
