"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CongestionNasalPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [openCauseIndex, setOpenCauseIndex] = React.useState<number | null>(null);
  const [openTreatmentIndex, setOpenTreatmentIndex] = React.useState<number | null>(null);
  const [openPreventionIndex, setOpenPreventionIndex] = React.useState<number | null>(null);
  const causeItems = [
    {
      title: t("Infecciones"),
      text: t(
        "La gripa o sinusitis aguda secundaria a un resfriado común son causadas por una infección viral. Estos virus se transmiten por el aire y provocan inflamación de los tejidos nasales."
      ),
      extra: t(
        "Cuando la mucosa nasal se vuelve amarilla o verde, puede indicar infección bacteriana. También se presentan dolor de cabeza, garganta irritada, tos y malestar general."
      ),
    },
    {
      title: t("Anomalías Estructurales"),
      text: t(
        "Incluyen desviación del septum nasal, deformidades congénitas o secundarias a traumatismos."
      ),
      extra: t(
        "Otras causas: cornetes crecidos, pólipos nasales, colapso de la válvula nasal, nariz torcida y adenoides obstructivas en niños."
      ),
    },
    {
      title: t("Alergias"),
      text: t(
        "Se producen por la respuesta inflamatoria a alérgenos como polen, ácaros del polvo, caspa de animales y humo del tabaco."
      ),
      extra: t("Estos alérgenos liberan histamina, causando congestión y exceso de moco nasal."),
    },
    {
      title: t("Rinitis Vasomotora"),
      text: t(
        "Condición no alérgica causada por una reacción anormal de los nervios de los vasos sanguíneos nasales."
      ),
      extra: t(
        "Factores: cambios de temperatura, humedad, olores fuertes, humo del tabaco y estrés psicológico."
      ),
    },
  ];
  const treatmentItems = [
    {
      title: t("Tratamiento Médico"),
      items: [
        t("Descongestionantes nasales"),
        t("Antihistamínicos"),
        t("Corticoesteroides nasales"),
        t("Antibióticos para infecciones bacterianas"),
        t("Inmunoterapia para alergias severas"),
      ],
    },
    {
      title: t("Tratamiento Quirúrgico"),
      items: [
        t("Septoplastía"),
        t("Reducción de cornetes"),
        t("Cirugía endoscópica de senos paranasales"),
        t("Extracción de pólipos nasales"),
        t("Adenoidectomía en niños"),
      ],
    },
  ];
  const preventionItems = [
    {
      title: t("Medidas Generales"),
      items: [
        t("Mantener buena higiene nasal"),
        t("Usar humidificador en ambientes secos"),
        t("Evitar alérgenos conocidos"),
        t("No fumar ni exponerse al humo"),
      ],
    },
    {
      title: t("En Casa"),
      items: [
        t("Lavados nasales con solución salina"),
        t("Mantener la cabeza elevada al dormir"),
        t("Beber abundantes líquidos"),
        t("Uso de vapor para descongestionar"),
      ],
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Acerca de la Congestión Nasal")}
        subtitle={t("Tratamiento especializado para nariz tapada y problemas respiratorios")}
        src="/congestion-nasal.jpg"
        alt={t("Acerca de la Congestión Nasal")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* DESCRIPCIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {t(
                "La congestión nasal se refiere a la nariz tapada; es uno de los problemas de salud más comunes. Se produce cuando el interior de la nariz se hincha debido a los vasos sanguíneos inflamados."
              )}
            </p>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-gray-600">
              <span className="font-semibold">{t("Importante:")}</span>{" "}
              {t(
                "Si la congestión nasal no es tratada puede conducir a problemas auditivos, fatiga crónica, insomnio, dolores de cabeza. También puede elevar la frecuencia y volumen de los ronquidos, hasta llegar a una Apnea del Sueño."
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("Diagnóstico")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("Historia clínica detallada")}</li>
              <li>{t("Examen físico completo de nariz y garganta")}</li>
              <li>{t("Endoscopia nasal")}</li>
              <li>{t("Evaluación de posibles alergias")}</li>
              <li>{t("Estudios de imagen cuando son necesarios")}</li>
              <li>{t("Análisis de patrones de sueño en casos de sospecha de apnea")}</li>
            </ul>
          </div>
        </div>

        {/* CAUSAS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("Causas de la Congestión Nasal")}</h2>
          <div className="space-y-4">
            {causeItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenCauseIndex(openCauseIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="text-lg font-medium text-gray-900">
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={`text-gray-400 transition ${
                      openCauseIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openCauseIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden space-y-3 text-gray-700">
                    <p>{item.text}</p>
                    <p className="text-gray-600">{item.extra}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRATAMIENTO */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("Tratamiento")}</h2>
          <div className="space-y-4">
            {treatmentItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenTreatmentIndex(openTreatmentIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="text-lg font-medium text-gray-900">
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={`text-gray-400 transition ${
                      openTreatmentIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openTreatmentIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-1 text-gray-700">
                      {item.items.map((entry) => (
                        <li key={entry} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PREVENCIÓN */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("Prevención")}</h2>
          <div className="space-y-4">
            {preventionItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenPreventionIndex(openPreventionIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="text-lg font-medium text-gray-900">
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={`text-gray-400 transition ${
                      openPreventionIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openPreventionIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-1 text-gray-700">
                      {item.items.map((entry) => (
                        <li key={entry} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{t("¿Necesita una evaluación?")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                "El Dr. Lumbán le agendará una cita para realizar un diagnóstico y brindarle el mejor tratamiento para su problema."
              )}
            </p>
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              {t("SOLICITAR UNA CITA")}
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-semibold">{t("Conozca sobre el Dr. Lumbán")}</h3>
            <p className="text-gray-600 max-w-xl">
              {t(
                "El Dr. Lumbán tiene años de experiencia dentro del campo de la otorrinolaringología, prestando un servicio de calidad y trato amable."
              )}
            </p>
            <a
              href={getRouteByKey("profile", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("VER PERFIL COMPLETO")}
            </a>
          </div>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
          <h3 className="text-xl font-semibold">{t("Otros Padecimientos de Nariz")}</h3>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("Septoplastía")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("Sinusitis")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("Congestión Nasal")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("Obstrucción Nasal")}
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm">
              {t("Alergias")}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
