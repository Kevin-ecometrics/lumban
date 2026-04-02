"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

const beneficios = [
  {
    titleKey: "septoplasty.benefit1_title",
    descriptionKey: "septoplasty.benefit1_desc",
  },
  {
    titleKey: "septoplasty.benefit2_title",
    descriptionKey: "septoplasty.benefit2_desc",
  },
  {
    titleKey: "septoplasty.benefit3_title",
    descriptionKey: "septoplasty.benefit3_desc",
  },
  {
    titleKey: "septoplasty.benefit4_title",
    descriptionKey: "septoplasty.benefit4_desc",
  },
];

const procedimiento = [
  {
    step: "1",
    titleKey: "septoplasty.procedure_step1_title",
    descriptionKey: "septoplasty.procedure_step1_desc",
  },
  {
    step: "2",
    titleKey: "septoplasty.procedure_step2_title",
    descriptionKey: "septoplasty.procedure_step2_desc",
  },
  {
    step: "3",
    titleKey: "septoplasty.procedure_step3_title",
    descriptionKey: "septoplasty.procedure_step3_desc",
  },
];

export default function SeptoplastiaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const experienceYears = new Date().getFullYear() - 1993;

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("septoplasty.hero_title")}
        subtitle={t("septoplasty.hero_subtitle")}
        src="/septoplastia.jpg"
        alt={t("septoplasty.hero_alt")}
      />

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("septoplasty.title_h1")}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.intro_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.common_text")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("septoplasty.anatomy_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.anatomy_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.anatomy_note")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("septoplasty.symptoms_title")}
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>{t("septoplasty.symptom1")}</li>
            <li>{t("septoplasty.symptom2")}</li>
            <li>{t("septoplasty.symptom3")}</li>
            <li>{t("septoplasty.symptom4")}</li>
            <li>{t("septoplasty.symptom5")}</li>
          </ul>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("septoplasty.surgery_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.surgery_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.surgery_detail")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("septoplasty.procedure_title")}
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                {t("septoplasty.incision_title")}
              </h4>
              <p className="text-gray-700">{t("septoplasty.incision_desc")}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                {t("septoplasty.outpatient_title")}
              </h4>
              <p className="text-gray-700">
                {t("septoplasty.outpatient_desc")}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                {t("septoplasty.recovery_title")}
              </h4>
              <p className="text-gray-700">{t("septoplasty.recovery_desc")}</p>
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("septoplasty.advanced_technique_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.advanced_technique_text")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("septoplasty.benefits_title")}
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>{t("septoplasty.benefit1")}</li>
            <li>{t("septoplasty.benefit2")}</li>
            <li>{t("septoplasty.benefit3")}</li>
            <li>{t("septoplasty.benefit4")}</li>
          </ul>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("septoplasty.differences_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.differences_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.differences_note")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.differences_combined")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("septoplasty.recovery_evolution_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.recovery_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>{t("septoplasty.recovery_day1")}</li>
            <li>{t("septoplasty.recovery_day10")}</li>
            <li>{t("septoplasty.recovery_complete")}</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.recovery_note")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("septoplasty.cta_final")} {experienceYears}{" "}
            {t("septoplasty.cta_final_suffix")}
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            {t("septoplasty.cta_question")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("septoplasty.cta_description")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("septoplasty.cta_button")}
          </a>
        </div>

        {/* PERFIL */}
        <div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("septoplasty.about_doctor")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("septoplasty.about_doctor_text")}
            </p>
          </div>
          <Link
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("septoplasty.view_full_profile")}
          </Link>
        </div>
      </section>

      {/* OTROS PADECIMIENTOS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <h3 className="text-3xl font-bold text-gray-900">
            {t("septoplasty.other_conditions")}
          </h3>
          <p className="text-gray-700 text-lg">
            ➢ {t("septoplasty.septoplasty")}
          </p>
          <p className="text-gray-700 text-lg">
            ➢ {t("septoplasty.sinusitis")}
          </p>
          <p className="text-gray-700 text-lg">
            ➢ {t("septoplasty.nasal_congestion")}
          </p>
          <p className="text-gray-700 text-lg">
            ➢ {t("septoplasty.nasal_obstruction")}
          </p>
          <p className="text-gray-700 text-lg">
            ➢ {t("septoplasty.allergies")}
          </p>
        </div>
      </section>
    </main>
  );
}
