"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

const signos = [
  "hearing-loss.sign1",
  "hearing-loss.sign2",
  "hearing-loss.sign3",
  "hearing-loss.sign4",
  "hearing-loss.sign5",
  "hearing-loss.sign6",
  "hearing-loss.sign7",
];

export default function HearingLossPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("hearing-loss.hero_title")}
        subtitle={t("hearing-loss.hero_subtitle")}
        src="/perdida-auditiva.jpg"
        alt={t("hearing-loss.hero_alt")}
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
            {t("hearing-loss.title_h1")}
          </h1>
          <p className="text-lg text-gray-700">
            {t("hearing-loss.intro_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.gradual_text")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("hearing-loss.classification_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.classification_text")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hearing-loss.conductive_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.conductive_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.conductive_note")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            {t("hearing-loss.conductive_causes_title")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("hearing-loss.conductive_cause1")}</li>
            <li>{t("hearing-loss.conductive_cause2")}</li>
            <li>{t("hearing-loss.conductive_cause3")}</li>
            <li>{t("hearing-loss.conductive_cause4")}</li>
            <li>{t("hearing-loss.conductive_cause5")}</li>
            <li>{t("hearing-loss.conductive_cause6")}</li>
            <li>{t("hearing-loss.conductive_cause7")}</li>
          </ul>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hearing-loss.sensorineural_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.sensorineural_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            {t("hearing-loss.sensorineural_causes_title")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("hearing-loss.sensorineural_cause1")}</li>
            <li>{t("hearing-loss.sensorineural_cause2")}</li>
            <li>{t("hearing-loss.sensorineural_cause3")}</li>
            <li>{t("hearing-loss.sensorineural_cause4")}</li>
            <li>{t("hearing-loss.sensorineural_cause5")}</li>
            <li>{t("hearing-loss.sensorineural_cause6")}</li>
          </ul>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hearing-loss.mixed_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.mixed_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.mixed_example")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("hearing-loss.specific_causes_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.specific_causes_text")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hearing-loss.cerumen_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.cerumen_text")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hearing-loss.noise_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.noise_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.noise_note")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hearing-loss.infections_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.infections_text")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("hearing-loss.otosclerosis_title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.otosclerosis_text")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("hearing-loss.warning_signs_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.warning_signs_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("hearing-loss.warning1")}</li>
            <li>{t("hearing-loss.warning2")}</li>
            <li>{t("hearing-loss.warning3")}</li>
            <li>{t("hearing-loss.warning4")}</li>
            <li>{t("hearing-loss.warning5")}</li>
            <li>{t("hearing-loss.warning6")}</li>
          </ul>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("hearing-loss.degrees_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.degrees_text")}
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("hearing-loss.degree_subtitle")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {t("hearing-loss.degree_subtitle2")}{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_normal")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_normal_range")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_slight")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_slight_range")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_mild")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_mild_range")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_moderate")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_moderate_range")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_moderately_severe")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_moderately_severe_range")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_severe")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_severe_range")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_profound")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("hearing-loss.degree_profound_range")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("hearing-loss.aging_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.aging_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("hearing-loss.aging_stat1")}</li>
            <li>{t("hearing-loss.aging_stat2")}</li>
            <li>{t("hearing-loss.aging_stat3")}</li>
            <li>{t("hearing-loss.aging_stat4")}</li>
          </ul>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("hearing-loss.prevention_title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.prevention_text")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("hearing-loss.protection_text")}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>{t("hearing-loss.protection1")}</li>
            <li>{t("hearing-loss.protection2")}</li>
            <li>{t("hearing-loss.protection3")}</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            {t("hearing-loss.cta_question")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("hearing-loss.cta_description")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("hearing-loss.cta_button")}
          </a>
        </div>

        {/* PERFIL */}
        <div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("hearing-loss.about_doctor")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("hearing-loss.about_doctor_text")}
            </p>
          </div>
          <Link
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("hearing-loss.view_full_profile")}
          </Link>
        </div>
      </section>

      {/* OTROS PADECIMIENTOS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-3xl font-bold text-gray-900">
            {t("hearing-loss.other_conditions")}
          </h3>
          <p className="text-gray-700 text-lg">
            ➢ {t("hearing-loss.hearing_loss")}
          </p>
          <p className="text-gray-700 text-lg">
            ➢ {t("hearing-loss.vertigo_dizziness")}
          </p>
        </div>
      </section>
    </main>
  );
}
