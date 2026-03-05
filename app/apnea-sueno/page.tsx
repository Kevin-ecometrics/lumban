"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function ApneaSuenoPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("apnea.titulo")}
        subtitle={t("garganta.desc")}
        src="/apnea.png"
        alt={t("apnea.titulo")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">

        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("apnea.titulo")}
          </h2>
          <p>
            {t("apnea.desc.1")}
          </p>
          <p>
            {t("apnea.desc.2")}
          </p>
        </div>

        {/* SÍNTOMAS Y CAUSAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("apnea.sintomas.titulo")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("apnea.sintomas.somnolencia")}</li>
            <li>{t("apnea.sintomas.debilidad")}</li>
            <li>{t("apnea.sintomas.siestas")}</li>
            <li>{t("apnea.sintomas.concentracion")}</li>
            <li>{t("apnea.sintomas.dolor-cabeza")}</li>
            <li>{t("apnea.sintomas.irritacion")}</li>
            <li>{t("apnea.sintomas.insomnio")}</li>
            <li>{t("apnea.sintomas.memoria")}</li>
            <li>{t("padecimientos.garganta.ronquidos")}</li>
          </ul>
        </div>

        {/* TIPOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("apnea.tipos.titulo")}</h3>

          <h4 className="text-xl font-medium">{t("apnea.tipos.central.nombre")}</h4>
          <p>
            {t("apnea.tipos.central.desc")}
          </p>

          <h4 className="text-xl font-medium">{t("apnea.tipos.obstructiva.nombre")}</h4>
          <p>
            {t("apnea.tipos.obstructiva.desc")}
          </p>

          <h4 className="text-xl font-medium">{t("apnea.tipos.mixta.nombre")}</h4>
          <p>
            {t("apnea.tipos.mixta.desc")}
          </p>
        </div>

        {/* TRATAMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("apnea.tratamientos.titulo")}</h3>

          <h4 className="text-xl font-medium">{t("apnea.tratamientos.comportamiento.nombre")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("apnea.tratamientos.comportamiento.peso")}</li>
            <li>{t("apnea.tratamientos.comportamiento.alcohol")}</li>
            <li>{t("apnea.tratamientos.comportamiento.fumar")}</li>
            <li>{t("apnea.tratamientos.comportamiento.posicion")}</li>
          </ul>

          <h4 className="text-xl font-medium">{t("apnea.tratamientos.dentales.nombre")}</h4>
          <p>
            {t("apnea.tratamientos.dentales.desc")}
          </p>

          <h4 className="text-xl font-medium">
            {t("apnea.tratamientos.nasales.nombre")}
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("apnea.tratamientos.nasales.tiras")}</li>
            <li>{t("apnea.tratamientos.nasales.aerosoles")}</li>
            <li>{t("congestion-nasal.tratamiento.medico.descongestionantes")}</li>
            <li>{t("apnea.tratamientos.nasales.medicamentos")}</li>
          </ul>

          <h4 className="text-xl font-medium">
            {t("apnea.tratamientos.cpap.nombre")}
          </h4>
          <p>
            {t("apnea.tratamientos.cpap.desc")}
          </p>

          <h4 className="text-xl font-medium">{t("apnea.tratamientos.cirugia.nombre")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>{t("nav.septoplastia-corta")}:</strong>{" "}
              {t("apnea.tratamientos.cirugia.tabique")}
            </li>
            <li>
              <strong>{t("apnea.tratamientos.cirugia.polipectomia")}:</strong> {t("congestion-nasal.tratamiento.quirurgico.polipos")}
            </li>
            <li>
              <strong>{t("septoplastia.detalles.cornetes.nombre")}:</strong>{" "}
              {t("apnea.tratamientos.cirugia.flujo")}
            </li>
          </ul>
        </div>

        {/* FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("apnea.riesgos.titulo")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("apnea.riesgos.edad")}</li>
            <li>{t("apnea.riesgos.sexo")}</li>
            <li>{t("apnea.riesgos.obesidad")}</li>
            <li>{t("apnea.riesgos.corazon")}</li>
            <li>{t("apnea.riesgos.familia")}</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("apnea.cta.titulo")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("apnea.cta.desc")}
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