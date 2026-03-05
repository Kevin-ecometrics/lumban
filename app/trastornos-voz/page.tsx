"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function TrastornosVozPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("voz.titulo")}
        subtitle={t("garganta.desc")}
        src="/voz.png"
        alt={t("voz.titulo")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">

        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("voz.titulo")}
          </h2>
          <p>
            {t("voz.desc.1")}
          </p>
          <p>
            {t("voz.desc.2")}
          </p>
        </div>

        {/* TIPOS DE TRASTORNOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6">
          <h3 className="text-2xl font-medium">
            {t("voz.trastornos.titulo")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("voz.trastornos.nodulos.nombre")}
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">{t("voz.trastornos.nodulos.vocales")}:</span>{" "}
                  {t("voz.trastornos.nodulos.desc")}
                </li>
                <li>
                  <span className="font-semibold">{t("voz.trastornos.polipos.vocales")}:</span>{" "}
                  {t("voz.trastornos.polipos.desc")}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("voz.trastornos.paralisis.nombre")}
              </h4>
              <p className="text-gray-700">
                {t("voz.trastornos.paralisis.desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("voz.trastornos.paradójico.nombre")}
              </h4>
              <p className="text-gray-700">
                {t("voz.trastornos.paradójico.desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("voz.trastornos.disfonia.nombre")}
              </h4>
              <p className="text-gray-700">
                {t("voz.trastornos.disfonia.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* CAUSAS Y FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("voz.causas.titulo")}</h3>

          <h4 className="text-xl font-medium">{t("voz.causas.principales-titulo")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voz.causas.lesion")}</li>
            <li>{t("voz.causas.uso-excesivo")}</li>
            <li>{t("voz.causas.gritar")}</li>
            <li>{t("voz.causas.fumar")}</li>
            <li>{t("garganta.condiciones.cancer.nombre")}</li>
          </ul>

          <h4 className="text-xl font-medium">{t("voz.causas.otras-titulo")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voz.causas.resfriado")}</li>
            <li>{t("padecimientos.nariz.alergias")}</li>
            <li>{t("voz.causas.bronquitis")}</li>
            <li>{t("voz.causas.irritantes")}</li>
            <li>{t("apnea.riesgos.edad")}</li>
          </ul>

          <h4 className="text-xl font-medium">{t("voz.causas.riesgo-titulo")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voz.causas.maestros")}</li>
            <li>{t("voz.causas.cantantes")}</li>
            <li>{t("voz.causas.predicadores")}</li>
            <li>{t("voz.causas.fumadores")}</li>
          </ul>
        </div>

        {/* SÍNTOMAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("sinusitis.sintomas.titulo")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("voz.sintomas.ronquera")}</li>
            <li>{t("voz.sintomas.cambios")}</li>
            <li>{t("voz.sintomas.dificultad-respirar")}</li>
            <li>{t("garganta.condiciones.amigdalitis.dificultad-tragar")}</li>
            <li>{t("voz.sintomas.tos")}</li>
            <li>{t("voz.sintomas.nudo")}</li>
          </ul>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("sinusitis.diagnostico.titulo")}</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>{t("voz.diagnostico.historial")}:</strong>{" "}
              {t("voz.diagnostico.historia-desc")}
            </li>
            <li>
              <strong>{t("voz.diagnostico.examen")}:</strong>{" "}
              {t("voz.diagnostico.examen-desc")}
            </li>
            <li>
              <strong>{t("voz.diagnostico.pruebas")}:</strong>{" "}
              {t("voz.diagnostico.pruebas-desc")}
            </li>
          </ol>
          <p className="text-gray-600">
            {t("voz.profesionales")}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("voz.cta.titulo")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("voz.cta.desc")}
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