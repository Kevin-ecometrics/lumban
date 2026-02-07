"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function PadecimientosGargantaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Padecimientos de la Garganta")}
        subtitle={t("Conozca acerca de los padecimientos relacionados con la garganta")}
        src="/garganta.jpg"
        alt={t("Padecimientos de la Garganta")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("Acerca de los Problemas de la Garganta")}
          </h2>
          <p>
            {t(
              "La garganta o faringe es una estructura tubular que conecta las cavidades oral y nasal con el esófago y la laringe (caja de la voz). Los alimentos pasan al esófago y el aire a la tráquea y laringe."
            )}
          </p>
          <p>
            {t(
              "Al ser un paso común para alimentos y aire, es más susceptible a infecciones y otras condiciones. El Dr. Lumbán ofrece diagnóstico experto y tratamiento especializado para múltiples condiciones de la garganta."
            )}
          </p>
        </div>

        {/* AMIGDALITIS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">{t("Amigdalitis")}</h2>
          <p>
            {t(
              "Inflamación de las amígdalas causada por virus o bacterias. Forman parte del sistema linfático y ayudan a prevenir infecciones."
            )}
          </p>

          <h3 className="text-2xl font-medium">{t("Síntomas")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Dolor de garganta")}</li>
            <li>{t("Dificultad para tragar")}</li>
            <li>{t("Náuseas y vómitos")}</li>
            <li>{t("Tos")}</li>
            <li>{t("Dolor de cabeza")}</li>
            <li>{t("Fiebre")}</li>
            <li>{t("Enrojecimiento de amígdalas")}</li>
            <li>{t("Dolor de oído")}</li>
          </ul>

          <h3 className="text-2xl font-medium">{t("Tratamiento")}</h3>
          <h4 className="text-xl font-medium">{t("Médico")}</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Ibuprofeno o acetaminofén")}</li>
            <li>{t("Antibióticos (penicilina)")}</li>
            <li>{t("Líquidos abundantes")}</li>
            <li>{t("Gárgaras con agua salada")}</li>
          </ul>
          <h4 className="text-xl font-medium">{t("Quirúrgico")}</h4>
          <p>{t("Amigdalectomía en casos recurrentes, persistentes o severos.")}</p>
        </div>

        {/* DOLOR DE GARGANTA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">{t("Dolor de Garganta")}</h2>
          <p>
            {t(
              "Es el trastorno más común de garganta. Generalmente causado por resfriado, gripe, alergias, bacterias (estreptococos), fumar, amigdalitis o mononucleosis infecciosa."
            )}
          </p>

          <h3 className="text-2xl font-medium">{t("Síntomas")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Dolor y dificultad al respirar")}</li>
            <li>{t("Dificultad para tragar")}</li>
            <li>{t("Fiebre")}</li>
          </ul>

          <h3 className="text-2xl font-medium">{t("Alivio")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Pastillas y caramelos")}</li>
            <li>{t("Gárgaras de agua salada")}</li>
            <li>{t("Líquidos abundantes")}</li>
            <li>{t("Antibióticos si es recurrente")}</li>
          </ul>
        </div>

        {/* FARINGITIS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">{t("Faringitis")}</h2>
          <p>
            {t(
              "Inflamación de la faringe causada por virus o bacterias. Síntoma principal: dolor de garganta; otros síntomas: fiebre, dolor de cabeza, muscular y articular, erupciones y ganglios inflamados."
            )}
          </p>

          <h3 className="text-2xl font-medium">{t("Tratamiento")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Antibióticos (amoxicilina)")}</li>
            <li>{t("Ibuprofeno o acetaminofén")}</li>
            <li>{t("Gárgaras con agua salada")}</li>
            <li>{t("Líquidos abundantes")}</li>
          </ul>
        </div>

        {/* CÁNCER DE GARGANTA */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">{t("Cáncer de Garganta")}</h2>
          <p>
            {t(
              "Tumores en faringe, laringe o amígdalas. Factor de riesgo principal: uso de tabaco."
            )}
          </p>

          <h3 className="text-2xl font-medium">{t("Factores de Riesgo")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Uso de tabaco (fumado y sin humo)")}</li>
            <li>{t("Alcoholismo crónico")}</li>
            <li>{t("Edad avanzada")}</li>
            <li>{t("Virus del papiloma humano")}</li>
            <li>{t("Mascar nuez de betel")}</li>
            <li>{t("Exposición a luz ultravioleta")}</li>
          </ul>

          <h3 className="text-2xl font-medium">{t("Síntomas y Diagnóstico")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Bulto que no se cura")}</li>
            <li>{t("Dificultad para tragar")}</li>
            <li>{t("Dolor de garganta persistente")}</li>
            <li>{t("Ronquera o cambios en la voz")}</li>
            <li>{t("Dolor de oído")}</li>
          </ul>
          <p>
            {t(
              "Diagnóstico: biopsia, pruebas especializadas y evaluación completa."
            )}
          </p>

          <h3 className="text-2xl font-medium">{t("Opciones de Tratamiento")}</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Radioterapia para casos específicos")}</li>
            <li>{t("Cirugía: Laringectomía parcial o total")}</li>
            <li>{t("Combinación: radiación y quimioterapia para tumores grandes")}</li>
          </ul>

          <h3 className="text-2xl font-medium">
            {t("Rehabilitación Post-Quirúrgica")}
          </h3>
          <p>
            {t(
              "Tras una laringectomía, actividades como comer, hablar o respirar pueden ser difíciles. Se recomienda terapia de habla y deglución."
            )}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("¿Experimenta problemas de garganta?")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "El Dr. Lumbán ofrece diagnóstico experto y tratamiento especializado para condiciones de la garganta."
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
                "El Dr. Lumbán tiene años de experiencia en otorrinolaringología, prestando un servicio de calidad y trato amable."
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