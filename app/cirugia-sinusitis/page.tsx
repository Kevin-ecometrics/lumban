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
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* INTRO - SEO H1 */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold">
            {t("sinusitis-surgery.seo_h1")}
          </h1>
          <p>{t("sinusitis-surgery.seo_intro")}</p>
        </div>

        {/* ¿CUÁNDO ESTÁ INDICADA? */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis-surgery.indication_title")}
          </h2>
          <p>{t("sinusitis-surgery.indication_text")}</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("sinusitis-surgery.indication1")}</li>
            <li>{t("sinusitis-surgery.indication2")}</li>
            <li>{t("sinusitis-surgery.indication3")}</li>
            <li>{t("sinusitis-surgery.indication4")}</li>
            <li>{t("sinusitis-surgery.indication5")}</li>
          </ul>
        </div>

        {/* TIPOS DE CIRUGÍA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis-surgery.surgery_types_title")}
          </h2>

          <h3 className="text-2xl font-medium">
            {t("sinusitis-surgery.fess_title")}
          </h3>
          <p>{t("sinusitis-surgery.fess_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("sinusitis-surgery.balloon_title")}
          </h3>
          <p>{t("sinusitis-surgery.balloon_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("sinusitis-surgery.polypectomy_title")}
          </h3>
          <p>{t("sinusitis-surgery.polypectomy_text")}</p>
        </div>

        {/* BENEFICIOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis-surgery.benefits_title")}
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("sinusitis-surgery.benefit1")}</li>
            <li>{t("sinusitis-surgery.benefit2")}</li>
            <li>{t("sinusitis-surgery.benefit3")}</li>
            <li>{t("sinusitis-surgery.benefit4")}</li>
            <li>{t("sinusitis-surgery.benefit5")}</li>
            <li>{t("sinusitis-surgery.benefit6")}</li>
            <li>{t("sinusitis-surgery.benefit7")}</li>
          </ul>
        </div>

        {/* RECUPERACIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis-surgery.recovery_title")}
          </h2>
          <p>{t("sinusitis-surgery.recovery_text")}</p>

          <h3 className="text-2xl font-medium">
            {t("sinusitis-surgery.early_days_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("sinusitis-surgery.early_days1")}</li>
            <li>{t("sinusitis-surgery.early_days2")}</li>
            <li>{t("sinusitis-surgery.early_days3")}</li>
            <li>{t("sinusitis-surgery.early_days4")}</li>
          </ul>

          <h3 className="text-2xl font-medium">
            {t("sinusitis-surgery.first_week_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("sinusitis-surgery.first_week1")}</li>
            <li>{t("sinusitis-surgery.first_week2")}</li>
            <li>{t("sinusitis-surgery.first_week3")}</li>
            <li>{t("sinusitis-surgery.first_week4")}</li>
          </ul>

          <h3 className="text-2xl font-medium">
            {t("sinusitis-surgery.second_week_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("sinusitis-surgery.second_week1")}</li>
            <li>{t("sinusitis-surgery.second_week2")}</li>
            <li>{t("sinusitis-surgery.second_week3")}</li>
          </ul>

          <h3 className="text-2xl font-medium">
            {t("sinusitis-surgery.complete_recovery_title")}
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("sinusitis-surgery.complete_recovery1")}</li>
            <li>{t("sinusitis-surgery.complete_recovery2")}</li>
            <li>{t("sinusitis-surgery.complete_recovery3")}</li>
          </ul>
        </div>

        {/* POR QUÉ ELEGIR AL DR. LUMBÁN */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis-surgery.why_doctor_title")}
          </h2>
          <p>
            {t("sinusitis-surgery.why_doctor_text")} {""}
            {experienceYears} {""}
            {t("sinusitis-surgery.why_doctor_experience")}
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>{t("sinusitis-surgery.why_doctor1")}</li>
            <li>{t("sinusitis-surgery.why_doctor2")}</li>
            <li>{t("sinusitis-surgery.why_doctor3")}</li>
            <li>{t("sinusitis-surgery.why_doctor4")}</li>
          </ul>
        </div>

        {/* FAQ ACORDEÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis-surgery.faq_title")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  className="w-full text-left px-5 py-4 flex justify-between items-center font-medium"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-gray-900">
                    {t(`sinusitis-surgery.${faq.q}`)}
                  </span>
                  <span className="text-gray-500">
                    {openFaq === idx ? "-" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                    {t(`sinusitis-surgery.${faq.a}`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("sinusitis-surgery.final_cta_title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("sinusitis-surgery.final_cta_text")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("SOLICITA TU CONSULTA")}
          </a>
        </div>
      </div>
    </main>
  );
}
