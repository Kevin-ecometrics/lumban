"use client";

import Hero from "@/app/Components/StickyImageHero";
import getExperienceYears from "../Components/Year";
import { useTranslation } from "react-i18next";
import CTASection from "../Components/CTASection";

export default function AboutPage() {
  const { t } = useTranslation();
  const year = getExperienceYears();

  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt={t("doctor.nombre")}
        title={t("doctor.nombre")}
        subtitle={t("doctor.titulo")}
      />

      {/* INTRO - CON DISEÑO MEJORADO */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          {/* Frase destacada con diseño mejorado */}
          <div className="relative">
            <div className="absolute -top-6 left-0 text-6xl text-blue-200 font-serif opacity-50">
              "
            </div>
            <p className="text-xl md:text-2xl font-light text-gray-700 text-center px-8 relative z-10">
              {t("perfil.desc1")}
            </p>
            <div className="absolute -bottom-10 right-0 text-6xl text-blue-200 font-serif opacity-50 rotate-180">
              "
            </div>
          </div>

          {/* Cita del Dr. Lumbán con diseño mejorado */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl my-12 shadow-sm">
            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-xl md:text-2xl italic text-gray-700">
                {t("perfil.filosofia")}
              </p>
              <p className="mt-4 font-medium text-gray-800">
                {t("perfil.filosofia.nombre")}
              </p>
            </div>
          </div>

          <p>
            {t("perfil.text1")}
          </p>

          <p>
            {t("perfil.text2")}
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t("perfil.excelencia")}
            </h2>
            <p>
              {t("perfil.excelencia.text")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 text-center">
            {t("nav.certificaciones")}
          </h2>

            <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
              <li>
              {t("perfil.certificaciones1")}
              </li>
              <li>
              {t("perfil.certificaciones2")}

              </li>
              <li>
                {t("perfil.certificaciones3")}
              </li>
              <li>
                {t("perfil.certificaciones4")}
              </li>
            </ul>

            {/* Frase final en cursivas con diseño elegante */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-2xl md:text-3xl text-gray-700 italic font-light leading-relaxed max-w-2xl mx-auto">
                {t("perfil.frase")}
              </p>
              <div className="w-16 h-0.5 bg-blue-400 mx-auto mt-6"></div>
            </div>
          </div>
      </section>

      {/* MISIÓN */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {t("perfil.mision")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="relative">
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-200">
                  {t("perfil.mision1")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("perfil.mision1.text")}
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="relative">
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-200">
                  {t("perfil.mision2")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("perfil.mision2.text")}
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="relative">
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-200">
                  {t("perfil.mision3")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("perfil.mision3.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <CTASection translationKey="global" />                                      
    </main>
  );
}
