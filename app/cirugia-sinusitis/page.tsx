"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CirugiaSinusitisPage() {
  const { t, i18n } = useTranslation();
  const experienceYears = new Date().getFullYear() - 1993;
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "faq1_q", a: "faq1_a" },
    { q: "faq2_q", a: "faq2_a" },
    { q: "faq3_q", a: "faq3_a" },
    { q: "faq4_q", a: "faq4_a" },
    { q: "faq5_q", a: "faq5_a" },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-20">
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-gray-500 uppercase">
              <div className="w-8 h-px bg-gray-300" />
              {t("Cirugía de Sinusitis")}
            </div>

            <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-tight">
              {t("sinusitis-surgery.seo_h1")}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {t("sinusitis-surgery.seo_intro")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 space-y-20">
        {/* ¿CUÁNDO ESTÁ INDICADA? */}
        <div className="space-y-8">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("sinusitis-surgery.indication_title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("sinusitis-surgery.indication_text")}
          </p>
          <ul className="space-y-4 pl-6">
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.indication1")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.indication2")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.indication3")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.indication4")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.indication5")}
            </li>
          </ul>
        </div>

        {/* TIPOS DE CIRUGÍA */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("sinusitis-surgery.surgery_types_title")}
          </h2>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("sinusitis-surgery.fess_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("sinusitis-surgery.fess_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("sinusitis-surgery.balloon_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("sinusitis-surgery.balloon_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("sinusitis-surgery.polypectomy_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("sinusitis-surgery.polypectomy_text")}
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className="space-y-8">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("sinusitis-surgery.benefits_title")}
          </h2>
          <ul className="space-y-4 pl-6">
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.benefit1")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.benefit2")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.benefit3")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.benefit4")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.benefit5")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.benefit6")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
              {t("sinusitis-surgery.benefit7")}
            </li>
          </ul>
        </div>

        {/* RECUPERACIÓN */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("sinusitis-surgery.recovery_title")}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t("sinusitis-surgery.recovery_text")}
          </p>

          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("sinusitis-surgery.early_days_title")}
              </h3>
              <ul className="space-y-3 pl-6">
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.early_days1")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.early_days2")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.early_days3")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.early_days4")}
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("sinusitis-surgery.first_week_title")}
              </h3>
              <ul className="space-y-3 pl-6">
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.first_week1")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.first_week2")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.first_week3")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.first_week4")}
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("sinusitis-surgery.second_week_title")}
              </h3>
              <ul className="space-y-3 pl-6">
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.second_week1")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.second_week2")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.second_week3")}
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("sinusitis-surgery.complete_recovery_title")}
              </h3>
              <ul className="space-y-3 pl-6">
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.complete_recovery1")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.complete_recovery2")}
                </li>
                <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                  {t("sinusitis-surgery.complete_recovery3")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* POR QUÉ ELEGIR AL DR. LUMBÁN */}
        <div className="bg-gray-50 rounded-lg p-12 space-y-8 border border-gray-100">
          <h2 className="text-4xl font-light tracking-tight">
            {t("sinusitis-surgery.why_doctor_title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("sinusitis-surgery.why_doctor_text")} {""}
            {experienceYears} {""}
            {t("sinusitis-surgery.why_doctor_experience")}
          </p>
          <ul className="space-y-4 pl-6">
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-300 pl-6">
              {t("sinusitis-surgery.why_doctor1")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-300 pl-6">
              {t("sinusitis-surgery.why_doctor2")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-300 pl-6">
              {t("sinusitis-surgery.why_doctor3")}
            </li>
            <li className="text-gray-700 leading-relaxed border-l-2 border-gray-300 pl-6">
              {t("sinusitis-surgery.why_doctor4")}
            </li>
          </ul>
        </div>

        {/* FAQ ACORDEÓN */}
        <div className="space-y-8">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("sinusitis-surgery.faq_title")}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
              >
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-gray-900 font-normal pr-4">
                    {t(`sinusitis-surgery.${faq.q}`)}
                  </span>
                  <span className="text-2xl text-gray-400 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="border-t border-gray-100 px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                    {t(`sinusitis-surgery.${faq.a}`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-gray-50 rounded-lg p-12 text-center space-y-6 border border-gray-100">
          <h2 className="text-3xl font-light tracking-tight">
            {t("sinusitis-surgery.final_cta_title")}
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {t("sinusitis-surgery.final_cta_text")}
          </p>
          <div className="pt-4">
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              {t("SOLICITA TU CONSULTA")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
