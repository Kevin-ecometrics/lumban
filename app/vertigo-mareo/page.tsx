"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

const sintomas = [
  {
    titleKey: "ear.vertigo_title",
    descriptionKey: "ear.vertigo_description",
  },
  {
    titleKey: "ear.imbalance_title",
    descriptionKey: "ear.imbalance_description",
  },
];

const causas = [
  "ear.cause_ear_infections",
  "ear.cause_allergies",
  "ear.cause_bppv",
  "ear.cause_vestibular_neuronitis",
  "ear.cause_labyrinthitis",
  "ear.cause_fluid_buildup",
  "ear.cause_neck_problems",
  "ear.cause_brain_diseases",
];

const tratamientos = [
  {
    titleKey: "ear.vestibular_rehab_title",
    descriptionKey: "ear.vestibular_rehab_description",
  },
  {
    titleKey: "ear.canal_repositioning_title",
    descriptionKey: "ear.canal_repositioning_description",
  },
  {
    titleKey: "ear.lifestyle_title",
    descriptionKey: "ear.lifestyle_description",
  },
];

export default function EarConditionsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("ear.hero_title")}
        subtitle={t("ear.hero_subtitle")}
        src="/mareo.png"
        alt={t("ear.hero_alt")}
      />

      {/* EQUILIBRIO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.title_h1")}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.intro_text")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.what_is_vertigo_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.what_is_vertigo_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            {t("ear.vertigo_symptoms_title")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.vertigo_symptom1")}</li>
            <li>{t("ear.vertigo_symptom2")}</li>
            <li>{t("ear.vertigo_symptom3")}</li>
            <li>{t("ear.vertigo_symptom4")}</li>
            <li>{t("ear.vertigo_symptom5")}</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.vertigo_cause")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("ear.vertigo_types_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.vertigo_types_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.vertigo_peripheral")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.vertigo_central")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.what_is_dizziness_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.what_is_dizziness_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.dizziness_note")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.balance_system_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.balance_system_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.balance_systems_list").split("\n")[0]}</li>
            <li>{t("ear.balance_systems_list").split("\n")[1]}</li>
            <li>{t("ear.balance_systems_list").split("\n")[2]}</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.brain_balance")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("ear.inner_ear_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.inner_ear_text")}
          </p>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            {t("ear.semicircular_canals_title")}
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.semicircular_canals_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            {t("ear.head_movement_title")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.head_movement1")}</li>
            <li>{t("ear.head_movement2")}</li>
            <li>{t("ear.head_movement3")}</li>
            <li>{t("ear.head_movement4")}</li>
          </ul>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            {t("ear.otolithic_organs_title")}
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.utricle")} / {t("ear.saccule")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.otolithic_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.balance_failure")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.balance_disorder_symptoms_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.balance_disorder_symptoms_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.symptom1")}</li>
            <li>{t("ear.symptom2")}</li>
            <li>{t("ear.symptom3")}</li>
            <li>{t("ear.symptom4")}</li>
            <li>{t("ear.symptom5")}</li>
          </ul>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.causes_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.causes_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.cause1")}</li>
            <li>{t("ear.cause2")}</li>
            <li>{t("ear.cause3")}</li>
            <li>{t("ear.cause4")}</li>
            <li>{t("ear.cause5")}</li>
            <li>{t("ear.cause6")}</li>
            <li>{t("ear.cause7")}</li>
          </ul>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("ear.common_diseases_title")}
          </h3>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            {t("ear.bppv_title")}
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.bppv_text")}
          </p>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            {t("ear.labyrinthitis_title")}
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.labyrinthitis_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.labyrinthitis_symptom1")}</li>
            <li>{t("ear.labyrinthitis_symptom2")}</li>
            <li>{t("ear.labyrinthitis_symptom3")}</li>
          </ul>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            {t("ear.meniere_title")}
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.meniere_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.meniere_symptom1")}</li>
            <li>{t("ear.meniere_symptom2")}</li>
            <li>{t("ear.meniere_symptom3")}</li>
            <li>{t("ear.meniere_symptom4")}</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.meniere_note")}
          </p>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            {t("ear.fistula_title")}
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.fistula_text")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.warning_signs_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.warning_signs_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.warning1")}</li>
            <li>{t("ear.warning2")}</li>
            <li>{t("ear.warning3")}</li>
            <li>{t("ear.warning4")}</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.warning_note")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("ear.self_assessment_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.self_assessment_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("ear.question1")}</li>
            <li>{t("ear.question2")}</li>
            <li>{t("ear.question3")}</li>
            <li>{t("ear.question4")}</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.self_assessment_note")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            {t("ear.conclusion")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.cta_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ear.cta_phone")}
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">{t("ear.cta_question")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("ear.cta_description")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("ear.cta_button")}
          </a>
        </div>

        {/* PERFIL */}
        <div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">{t("ear.about_doctor")}</h3>
            <p className="text-gray-600 max-w-xl">
              {t("ear.about_doctor_text")}
            </p>
          </div>
          <a
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("ear.view_full_profile")}
          </a>
        </div>
      </section>

      {/* OTROS PADECIMIENTOS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {t("ear.other_conditions")}
          </h3>
          <p className="text-gray-700 text-lg">➢ {t("ear.hearing_loss")}</p>
        </div>
      </section>
    </main>
  );
}
