"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function RonquidosPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("ronquidos.titulo")}
        subtitle={t("garganta.desc")}
        src="/ronquido.jpg"
        alt={t("ronquidos.titulo")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">

        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">{t("ronquidos.titulo")}</h2>
          <p>
            {t("ronquidos.desc.1")}
          </p>
          <p>
            {t("ronquidos.desc.2")}
          </p>
        </div>

        {/* DATOS INTERESANTES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">
            {t("ronquidos.datos.titulo")}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              {t("ronquidos.datos.interesantes.1")}
            </li>
            <li>
              {t("ronquidos.datos.interesantes.2")}
            </li>
            <li>
              {t("ronquidos.datos.interesantes.3")}
            </li>
            <li>{t("ronquidos.datos.interesantes.4")}</li>
            <li>
              {t("ronquidos.datos.interesantes.5")}
            </li>
            <li>
              {t("ronquidos.datos.interesantes.6")}
            </li>
          </ul>
        </div>

        {/* CAUSAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("ronquidos.causas.titulo")}</h3>
          <p>
            {t("ronquidos.causas.desc")}
          </p>
        </div>

        {/* SÍNTOMAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("sinusitis.sintomas.titulo")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("ronquidos.sintomas.somnolencia")}</li>
            <li>{t("ronquidos.sintomas.energia")}</li>
            <li>{t("ronquidos.sintomas.concentracion")}</li>
            <li>{t("ronquidos.sintomas.productividad")}</li>
            <li>{t("ronquidos.sintomas.latido")}</li>
            <li>{t("ronquidos.sintomas.dolor-garganta")}</li>
            <li>{t("ronquidos.sintomas.irritabilidad")}</li>
            <li>{t("ronquidos.sintomas.relaciones")}</li>
          </ul>
        </div>

        {/* TRATAMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("ronquidos.tratamientos.titulo")}</h3>

          <h4 className="text-xl font-medium">{t("ronquidos.tratamientos.no-quirurgico")}</h4>

          <h5 className="text-lg font-medium">{t("ronquidos.comportamiento")}</h5>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("ronquidos.tratamientos.comportamiento.peso")}</li>
            <li>{t("ronquidos.tratamientos.comportamiento.alcohol")}</li>
            <li>{t("ronquidos.tratamientos.comportamiento.fumar")}</li>
            <li>{t("ronquidos.tratamientos.comportamiento.posicion")}</li>
          </ul>

          <h5 className="text-lg font-medium">{t("ronquidos.dentales")}</h5>
          <p>
            {t("ronquidos.tratamientos.dentales.desc")}
          </p>

          <h5 className="text-lg font-medium">{t("apnea.tratamientos.cpap.nombre")}</h5>
          <p>
            {t("ronquidos.tratamientos.cpap.desc")}
          </p>

          <h4 className="text-xl font-medium">{t("congestion-nasal.tratamiento.quirurgico.titulo")}</h4>
          <p>
            {t("ronquidos.tratamientos.cirugia.desc")}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{t("ronquidos.cta.titulo")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("ronquidos.cta.desc")}
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