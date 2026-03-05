"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CirugiaEndoscopicaSinusitisPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      <Hero
        title={t("procedimientos.endoscopia.tecnica")}
        subtitle={t("procedimientos.desc")}
        src="/sinusitis.jpg"
        alt={t("procedimientos.endoscopia.tecnica")}
      />

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">
              {t("procedimientos.endoscopia.titulo")}
            </h2>

            <p>
              {t("procedimientos.endoscopia.desc.1")}
            </p>

            <p>
              {t("procedimientos.endoscopia.desc.3")}
            </p>

            <p>
              {t("procedimientos.endoscopia.desc.4")}
            </p>

            <p>
              {t("procedimientos.endoscopia.desc.5")}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              {t("procedimientos.endoscopia.sintomas")}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("procedimientos.endoscopia.sintomas.dolor-facial")}</li>
              <li>{t("procedimientos.endoscopia.sintomas.dificultad-respirar")}</li>
              <li>{t("procedimientos.endoscopia.sintomas.mal-olor")}</li>
              <li>{t("procedimientos.endoscopia.sintomas.secrecion")}</li>
              <li>{t("procedimientos.endoscopia.sintomas.dolor-cabeza")}</li>
            </ul>
            <p className="text-sm text-gray-600">
              {t("procedimientos.endoscopia.desc.2")}
            </p>
          </div>
        </div>

        {/* EVALUACIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("procedimientos.endoscopia.seguimiento.titulo")}
          </h2>

          <h3 className="text-2xl font-medium">{t("procedimientos.endoscopia.cirugia")}</h3>

          <p>
            {t("procedimientos.endoscopia.cirugia.desc.1")}
          </p>

          <p>
            {t("procedimientos.endoscopia.cirugia.desc.2")}
          </p>

          <p>
            {t("procedimientos.endoscopia.cirugia.desc.3")}
          </p>
        </div>

        {/* PROCEDIMIENTO + VENTAJAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">
              {t("procedimientos.endoscopia.tecnica")}
            </h2>

            <p>
              {t("procedimientos.endoscopia.tecnica.desc.1")}
            </p>

            <p>
              {t("procedimientos.endoscopia.tecnica.desc.2")}
            </p>

            <p>
              {t("procedimientos.endoscopia.tecnica.desc.3")}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("procedimientos.endoscopia.ventajas.titulo")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("procedimientos.endoscopia.ventajas.menos-extensa")}</li>
              <li>{t("procedimientos.endoscopia.ventajas.tejidos")}</li>
              <li>{t("procedimientos.endoscopia.ventajas.hinchazon")}</li>
              <li>{t("procedimientos.endoscopia.ventajas.incisiones")}</li>
              <li>{t("procedimientos.endoscopia.ventajas.ambulatorio")}</li>
            </ul>
            <p className="text-sm text-gray-600">
              {t("procedimientos.endoscopia.ventajas.exito")}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("global.pregunta-procedimiento")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("global.contacto.cta")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("global.boton.solicitar-consulta")}
          </a>
        </div>

        {/* SINUSITIS + PERFIL */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">{t("procedimientos.endoscopia.que-es.titulo")}</h2>
            <p className="text-gray-700">
              {t("procedimientos.endoscopia.que-es.desc")}
            </p>
            <a
              href={getRouteByKey("sinusitis", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("sinusitis.boton.info")}
            </a>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              {t("doctor.preview.titulo")}
            </h3>
            <p className="text-gray-600">
              {t("doctor.preview.desc")}
            </p>
            <a
              href={getRouteByKey("profile", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("doctor.boton.perfil")}
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}