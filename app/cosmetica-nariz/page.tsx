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
    <section className="bg-white text-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-gray-500 uppercase">
                <div className="w-8 h-px bg-gray-300" />
                {t("rhinoplasty.hero_title")}
              </div>

              <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                {t("rhinoplasty.seo_h1")}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {t("rhinoplasty.seo_intro_prefix")} {experienceYears}{" "}
                {t("rhinoplasty.seo_intro_suffix")}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={getRouteByKey("contact", currentLang)}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
                >
                  {t("rhinoplasty.cta_button")}
                </a>
                <a
                  href={getRouteByKey("profile", currentLang)}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-gray-300 text-sm font-medium tracking-wide hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  {t("rhinoplasty.view_full_profile")}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl -z-10" />
              <img
                src="/rinoplastia/Trasforma tu perfil con una rinoplastia en manos de un experto en nariz con mas de 3 decadas de experiencia en Tijuana.webp"
                alt={t("rhinoplasty.hero_title")}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 space-y-20">
        {/* ¿QUÉ ES LA RINOPLASTIA? */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.what_is_title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("rhinoplasty.what_is_text")}
          </p>
        </div>

        {/* CAMBIOS COMUNES */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.common_changes_title")}
          </h2>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.dorsal_hump_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.dorsal_hump_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.tip_refinement_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.tip_refinement_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.base_reduction_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.base_reduction_text")}
              </p>
            </div>
          </div>
        </div>

        {/* TIPOS DE CIRUGÍA */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.surgery_types_title")}
          </h2>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.functional_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.functional_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.aesthetic_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.aesthetic_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.revision_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.revision_text")}
              </p>
            </div>
          </div>
        </div>

        <div className="py-8">
          <SecondaryImage src="/rinoplastia/Haz tu cita para rinoplastia con especialistas en nariz con gran experiencia como el Dr. Lumban.webp" />
        </div>

        {/* TIPOS DE ABORDAJE */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.approaches_title")}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t("rhinoplasty.approaches_text")}
          </p>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.closed_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.closed_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.open_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.open_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.ultrasonic_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.ultrasonic_text")}
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-gray-50 rounded-lg p-12 text-center space-y-6 border border-gray-100">
          <h2 className="text-3xl font-light tracking-tight">
            {t("rhinoplasty.final_cta_title")}
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {t("rhinoplasty.final_cta_text")}
          </p>
          <div className="pt-4">
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              {t("rhinoplasty.cta_button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
