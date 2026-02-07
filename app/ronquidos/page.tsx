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
        title={t("Acerca de los Ronquidos")}
        subtitle={t("Conozca acerca de los padecimientos relacionados con la garganta")}
        src="/ronquido.jpg"
        alt={t("Acerca de los Ronquidos")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">

        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">{t("Acerca de los Ronquidos")}</h2>
          <p>
            {t(
              "El ronquido es un sonido producido por las vibraciones de los tejidos de la nariz y la garganta durante la respiración en el sueño. Es más común en hombres que en mujeres y puede aumentar con la edad."
            )}
          </p>
          <p>
            {t(
              "Durante el sueño, el aire que pasa por áreas estrechas en la garganta, nariz o boca hace vibrar los tejidos circundantes, produciendo el ronquido. Es un problema muy común que afecta la calidad de sueño de la persona que ronca y de quienes duermen cerca."
            )}
          </p>
        </div>

        {/* DATOS INTERESANTES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">
            {t("Datos Interesantes acerca del Ronquido")}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              {t("Una de cada cuatro personas tiene ronquido crónico que no puede dejar por sí sola.")}
            </li>
            <li>
              {t("El ronquido crónico puede tensar relaciones con compañeros de cama.")}
            </li>
            <li>
              {t("En promedio, el compañero de una persona que ronca pierde una hora de sueño cada noche.")}
            </li>
            <li>{t("La privación de sueño puede causar irritabilidad.")}</li>
            <li>
              {t("El ronquido puede indicar un problema más grave: apnea obstructiva del sueño (AOS).")}
            </li>
            <li>
              {t("Puede ser mejorado o eliminado en la mayoría de las personas con procedimientos sencillos en consultorio.")}
            </li>
          </ul>
        </div>

        {/* CAUSAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Causas")}</h3>
          <p>
            {t(
              "Durante el sueño, los músculos del cuerpo, incluyendo los de la garganta, se relajan. Esto puede causar que el tejido flácido o excesivo vibre al pasar el aire, produciendo el ronquido. Las zonas afectadas incluyen la nariz, paladar blando, úvula y/o amígdalas. El Dr. Lumbán trabajará con usted para determinar la causa exacta y el tratamiento más adecuado."
            )}
          </p>
        </div>

        {/* SÍNTOMAS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Síntomas")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Somnolencia diurna")}</li>
            <li>{t("Energía baja")}</li>
            <li>{t("Dificultad para concentrarse")}</li>
            <li>{t("Disminución de la productividad")}</li>
            <li>{t("Latido irregular del corazón")}</li>
            <li>{t("Dolor de garganta")}</li>
            <li>{t("Irritabilidad y cambios de humor")}</li>
            <li>{t("Relaciones tensas")}</li>
          </ul>
        </div>

        {/* TRATAMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-medium">{t("Tratamientos")}</h3>

          <h4 className="text-xl font-medium">{t("Tratamiento no Quirúrgico")}</h4>

          <h5 className="text-lg font-medium">{t("Cambios de Comportamiento")}</h5>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Pérdida de peso en caso de sobrepeso")}</li>
            <li>{t("Evitar alcohol o medicamentos sedantes")}</li>
            <li>{t("Dejar de fumar")}</li>
            <li>{t("Cambiar posiciones para dormir")}</li>
          </ul>

          <h5 className="text-lg font-medium">{t("Dispositivos Dentales")}</h5>
          <p>
            {t(
              "Dispositivos que mantienen la mandíbula hacia adelante, útiles en casos leves o cuando los cambios de comportamiento no son suficientes."
            )}
          </p>

          <h5 className="text-lg font-medium">{t("CPAP")}</h5>
          <p>
            {t(
              "La presión positiva nasal continua (CPAP) evita el estrechamiento de la vía aérea durante la respiración, manteniendo la presión y flujo de aire constantes."
            )}
          </p>

          <h4 className="text-xl font-medium">{t("Tratamiento Quirúrgico")}</h4>
          <p>
            {t(
              "El objetivo es mejorar el paso de aire por la nariz. Puede incluir corrección de anomalías anatómicas, desviación del tabique (septoplastía), valvuloplastía o cauterización de cornetes."
            )}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{t("¿Problemas de Ronquidos?")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "Deje su salud en manos expertas como las del Dr. Lumbán. Contáctelo enviando un mensaje o por teléfono."
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
