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
        title={t("Acerca de los Trastornos de la Voz")}
        subtitle={t("Conozca acerca de los padecimientos relacionados con la garganta")}
        src="/voz.png"
        alt={t("Acerca de los Trastornos de la Voz")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">

        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("Acerca de los Trastornos de la Voz")}
          </h2>
          <p>
            {t(
              "La voz es el sonido que se produce cuando el aire pasa desde los pulmones a la laringe. Al hablar, las cuerdas vocales se cierran parcialmente, haciendo que el aire vibre y genere sonido. Cada voz es tan única como una huella digital."
            )}
          </p>
          <p>
            {t(
              "Diversas condiciones médicas o daños en las partes asociadas con la voz pueden provocar dolor, molestias, cambios en el tono, el volumen o la calidad de la voz."
            )}
          </p>
        </div>

        {/* TIPOS DE TRASTORNOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6">
          <h3 className="text-2xl font-medium">
            {t("Trastornos de la Voz Incluyen")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("Nódulos y Pólipos de las Cuerdas Vocales")}
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">{t("Nódulos Vocales")}:</span>{" "}
                  {t(
                    "Crecimientos no cancerosos en las cuerdas vocales causados por uso excesivo."
                  )}
                </li>
                <li>
                  <span className="font-semibold">{t("Pólipos Vocales")}:</span>{" "}
                  {t("Hinchazón o nódulo anormal en una o ambas cuerdas vocales.")}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("Parálisis de las Cuerdas Vocales")}
              </h4>
              <p className="text-gray-700">
                {t(
                  "Se produce cuando una o ambas cuerdas vocales no se mueven correctamente, afectando la voz, la deglución y la respiración."
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("Paradójico Movimiento de las Cuerdas Vocales")}
              </h4>
              <p className="text-gray-700">
                {t(
                  "Disfunción donde las cuerdas vocales se cierran al inhalar en lugar de abrirse, causando problemas respiratorios."
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
              <h4 className="text-xl font-medium text-gray-900">
                {t("Disfonía Espasmódica")}
              </h4>
              <p className="text-gray-700">
                {t(
                  "Trastorno crónico causado por movimientos forzados o tensos de las cuerdas vocales, produciendo cambios anormales en la voz."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* CAUSAS Y FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Causas y Factores de Riesgo")}</h3>

          <h4 className="text-xl font-medium">{t("Factores Principales")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Lesión de las cuerdas vocales")}</li>
            <li>{t("Uso excesivo de la voz")}</li>
            <li>{t("Hablar demasiado o gritar")}</li>
            <li>{t("Fumar")}</li>
            <li>{t("Cáncer de garganta")}</li>
          </ul>

          <h4 className="text-xl font-medium">{t("Otras Causas")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Resfriado común")}</li>
            <li>{t("Alergias")}</li>
            <li>{t("Bronquitis")}</li>
            <li>{t("Exposición a sustancias irritantes")}</li>
            <li>{t("Edad avanzada")}</li>
          </ul>

          <h4 className="text-xl font-medium">{t("Grupos de Alto Riesgo")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Maestros")}</li>
            <li>{t("Cantantes")}</li>
            <li>{t("Predicadores")}</li>
            <li>{t("Fumadores")}</li>
          </ul>
        </div>

        {/* SÍNTOMAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Síntomas")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Voz áspera o ronquera")}</li>
            <li>{t("Cambios anormales en la voz")}</li>
            <li>{t("Dificultad para respirar")}</li>
            <li>{t("Dificultad para tragar")}</li>
            <li>{t("Tos persistente")}</li>
            <li>{t("Sensación de nudo en la garganta")}</li>
          </ul>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Diagnóstico")}</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>{t("Historial Clínico")}:</strong>{" "}
              {t("Evaluación de síntomas, hábitos vocales y antecedentes médicos")}
            </li>
            <li>
              <strong>{t("Examen Físico")}:</strong>{" "}
              {t("Evaluación visual de la laringe y cuerdas vocales")}
            </li>
            <li>
              <strong>{t("Pruebas Especializadas")}:</strong>{" "}
              {t("Evaluación de vibración de cuerdas vocales y función laríngea")}
            </li>
          </ol>
          <p className="text-gray-600">
            {t(
              "Para profesionales de la voz (maestros, cantantes, locutores, etc.), es crucial atención temprana ante cualquier cambio vocal para prevenir daños permanentes."
            )}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("¿Experimenta problemas con su voz?")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "El Dr. Lumbán puede diagnosticar y tratar diversos trastornos de la voz con técnicas especializadas."
            )}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("SOLICITA TU CONSULTA")}
          </a>
        </div>

        {/* PERFIL */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("Conozca sobre el Dr. Lumbán")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t(
                "El Dr. Lumbán tiene años de experiencia dentro del campo de la otorrinolaringología, prestando un servicio de calidad y trato amable."
              )}
            </p>
          </div>
          <a
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("VER PERFIL COMPLETO")}
          </a>
        </div>

      </div>
    </main>
  );
}
