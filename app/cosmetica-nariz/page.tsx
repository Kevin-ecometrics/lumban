"use client";

import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import Hero from "@/app/Components/StickyImageHero";
import SecondaryImage from "../Components/Image";

export default function RinoplastiaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const experienceYears = new Date().getFullYear() - 1993;

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("rhinoplasty.hero_title")}
        subtitle={t("rhinoplasty.hero_subtitle")}
        src="/rinoplastia/Trasforma tu perfil con una rinoplastia en manos de un experto en nariz con mas de 3 decadas de experiencia en Tijuana.webp"
        alt={t("rhinoplasty.hero_alt")}
      />

      {/* CONTENT - CON LOS TEXTOS ORIGINALES */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 space-y-20">
        {/* PAGE INTRO */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.page_title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("rhinoplasty.page_subtitle_prefix")} {experienceYears}{" "}
            {t("rhinoplasty.page_subtitle_suffix")}
          </p>
        </div>

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

        <SecondaryImage src="/rinoplastia/Haz tu cita para rinoplastia con especialistas en nariz con gran experiencia como el Dr. Lumban.webp" />

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

        {/* CTA FINAL ORIGINAL */}
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

      {/* PERFIL */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("rhinoplasty.about_doctor")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("rhinoplasty.about_doctor_text_prefix")} {experienceYears}{" "}
              {t("rhinoplasty.about_doctor_text_suffix")}
            </p>
          </div>
          <a
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("rhinoplasty.view_full_profile")}
          </a>
        </div>
      </section>
    </main>
  );
}
