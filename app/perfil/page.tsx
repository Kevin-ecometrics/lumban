// app/about/page.tsx
"use client";

import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/perfil/El Dr lumban es un un experto en la precision que prioriza tu salud.webp"
        alt={t("profile.hero_alt")}
        title={t("profile.hero_title")}
        subtitle={t("profile.hero_subtitle")}
      />

      {/* INTRO SECTION - Conoce al Dr. Jaime Lumbán */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t("profile.intro_title")}
          </h1>
          <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
            {t("profile.intro_description")}
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <p className="text-2xl md:text-3xl font-serif text-gray-800 text-center">
            &ldquo;{t("profile.quote")}&rdquo;
          </p>
          <p className="text-lg text-gray-600 text-center mt-4">
            — {t("profile.quote_author")}
          </p>
        </motion.div>

        {/* Experience and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          <p>{t("profile.experience_text")}</p>

          <p className="font-medium text-gray-800">
            {t("profile.consultation_text")}
          </p>
        </motion.div>
      </section>

      {/* EXCELLENCE SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t("profile.excellence_title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("profile.excellence_description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-10 text-center">
              {t("profile.certifications_title")}
            </h2>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>{t("profile.certification1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>{t("profile.certification2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>{t("profile.certification3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>{t("profile.certification4")}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t("profile.mission_title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
              {t("profile.mission_subtitle")}
            </h3>

            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>{t("profile.mission_item1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>{t("profile.mission_item2")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>{t("profile.mission_item3")}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
