"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CirugiaMicroscopicaLaringePage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("procedimientos.microscopica-laringe")}
        subtitle={t("procedimientos.desc")}
        src="/laringe.jpg"
        alt={t("procedimientos.microscopica-laringe")}
      />

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO + DIAGNÓSTICO */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold text-center mb-2">{t("procedimientos.laringe.titulo")}</h2>
            <p>
              {t("procedimientos.laringe.desc.1")}
            </p>
            <p>
              {t("procedimientos.laringe.desc.2")}
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold text-center mb-2">{t("sinusitis.diagnostico.titulo")}</h2>
            <p>
              {t("procedimientos.laringe.desc.3")}
            </p>
            <p>
              {t("procedimientos.laringe.desc.4")}
            </p>
            <p>
              {t("procedimientos.laringe.desc.5")}
            </p>
          </div>
        </div>

        {/* TRATAMIENTO + PROCEDIMIENTOS */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold text-center mb-2">{t("obstruccion-nasal.opciones.titulo")}</h2>
            <h3 className="text-2xl font-medium">{t("procedimientos.antirronquido.conservador.titulo")}</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("procedimientos.laringe.tratamiento.medico")}</li>
            </ul>
            <p>
              {t("procedimientos.laringe.tratamiento.conjunto")}
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold text-center mb-2">{t("procedimientos.antirronquido.quirurgico.titulo")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("procedimientos.laringe.tratamiento.quirurgico.botox")}</li>
              <li>{t("procedimientos.laringe.tratamiento.quirurgico.extirpacion")}</li>
              <li>{t("procedimientos.laringe.tratamiento.quirurgico.biopsia")}</li>
              <li>{t("procedimientos.laringe.tratamiento.quirurgico.papilomas")}</li>
              <li>{t("procedimientos.laringe.tratamiento.quirurgico.edema")}</li>
              <li>{t("procedimientos.laringe.tratamiento.quirurgico.lesiones")}</li>
            </ul>
          </div>
        </div>

        {/* PROCEDIMIENTO + RECUPERACIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("procedimientos.antirronquido.procedimiento.titulo")}</h2>
            <p>
              {t("procedimientos.laringe.cirugia.desc.1")}
            </p>
            <p>
              {t("procedimientos.laringe.cirugia.desc.2")}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("procedimientos.antirronquido.recuperacion.titulo")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("procedimientos.laringe.postoperatorio")}</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("procedimientos.antirronquido.cta.titulo")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("procedimientos.antirronquido.cta.desc")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("global.boton.solicitar-consulta")}
          </a>
        </div>

        {/* PERFIL */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("doctor.preview.titulo")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("doctor.preview.desc")}
            </p>
          </div>
          <a
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("doctor.boton.perfil")}
          </a>
        </div>
      </div>
    </main>
  );
}