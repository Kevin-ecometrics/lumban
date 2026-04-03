"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function RinoplastiaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const experienceYears = new Date().getFullYear() - 1993;

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-white text-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,0.12),transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-widest text-gray-600 shadow-sm">
                {t("Rinoplastía")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {t("rhinoplasty.seo_h1")}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {t("rhinoplasty.seo_intro_prefix")} {experienceYears}{" "}
                {t("rhinoplasty.seo_intro_suffix")}
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
            <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm p-4">
              <img
                src="/rinoplastia/Trasforma tu perfil con una rinoplastia en manos de un experto en nariz con mas de 3 decadas de experiencia en Tijuana.webp"
                alt={t("Rinoplastía")}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* ¿QUÉ ES LA RINOPLASTIA? */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("rhinoplasty.what_is_title")}
          </h2>
          <p>{t("rhinoplasty.what_is_text")}</p>
        </div>

        {/* CAMBIOS COMUNES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("rhinoplasty.common_changes_title")}
          </h2>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.dorsal_hump_title")}
          </h3>
          <p>{t("rhinoplasty.dorsal_hump_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.tip_refinement_title")}
          </h3>
          <p>{t("rhinoplasty.tip_refinement_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.base_reduction_title")}
          </h3>
          <p>{t("rhinoplasty.base_reduction_text")}</p>
        </div>

        {/* TIPOS DE CIRUGÍA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("rhinoplasty.surgery_types_title")}
          </h2>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.functional_title")}
          </h3>
          <p>{t("rhinoplasty.functional_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.aesthetic_title")}
          </h3>
          <p>{t("rhinoplasty.aesthetic_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.revision_title")}
          </h3>
          <p>{t("rhinoplasty.revision_text")}</p>
        </div>

        <SecondaryImage src="/rinoplastia/Haz tu cita para rinoplastia con especialistas en nariz con gran experiencia como el Dr. Lumban.webp" />

        {/* TIPOS DE ABORDAJE */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("rhinoplasty.approaches_title")}
          </h2>
          <p>{t("rhinoplasty.approaches_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.closed_title")}
          </h3>
          <p>{t("rhinoplasty.closed_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.open_title")}
          </h3>
          <p>{t("rhinoplasty.open_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("rhinoplasty.ultrasonic_title")}
          </h3>
          <p>{t("rhinoplasty.ultrasonic_text")}</p>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">
            {t("rhinoplasty.final_cta_title")}
          </h2>
          <p className="text-gray-700">{t("rhinoplasty.final_cta_text")}</p>
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
    </section>
  );
}
