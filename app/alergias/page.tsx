"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function AlergiasPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [openConditionIndex, setOpenConditionIndex] = React.useState<number | null>(null);
  const conditionItems = [
    {
      title: t("La Rinitis Alérgica y no Alérgica"),
      text: t(
        "Se controla con antihistamínicos, esteroides nasales y evitando los desencadenantes conocidos."
      ),
    },
    {
      title: t("Asma"),
      text: t(
        "Requiere manejo con inhaladores de control, plan de acción y reducción de alérgenos ambientales."
      ),
    },
    {
      title: t("Sinusitis Crónica y Congestión Nasal"),
      text: t(
        "Se trata con lavados nasales, medicamentos antiinflamatorios y evaluación ORL cuando persiste."
      ),
    },
    {
      title: t("Tos"),
      text: t(
        "Se identifica la causa y se trata con control de alergias, reflujo u otros detonantes."
      ),
    },
    {
      title: t("Inmunodeficiencia"),
      text: t(
        "Necesita evaluación inmunológica y tratamiento especializado según el tipo de deficiencia."
      ),
    },
    {
      title: t("Goteo Postnasal"),
      text: t(
        "Mejora con higiene nasal, manejo de alergias y control de inflamación en vía aérea superior."
      ),
    },
    {
      title: t("Alergias alimentarias"),
      text: t(
        "Se controlan evitando alimentos desencadenantes y con un plan de manejo ante reacciones."
      ),
    },
    {
      title: t("Alergias ambientales"),
      text: t(
        "Se recomienda control ambiental, medicación y considerar inmunoterapia si es severo."
      ),
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Acerca de las Alergias")}
        subtitle={t("Diagnóstico y tratamiento integral de enfermedades alérgicas")}
        src="/alergias.jpg"
        alt={t("Acerca de las Alergias")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* DESCRIPCIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <p>
            {t(
              "El Dr. Jaime Lumbán, en conjunto con alergólogos certificados, son médicos que están especialmente entrenados en el diagnóstico y tratamiento de las enfermedades alérgicas en pacientes pediátricos y adultos."
            )}
          </p>
          <p>
            {t(
              "El Dr. Lumbán trabaja, mano a mano, con nuestros especialistas en alergias, para proporcionar a los pacientes una atención más integral y con la tecnología médica más avanzada."
            )}
          </p>
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-gray-600">
            {t(
              "Importante: Muchas enfermedades de oído, nariz y garganta son provocadas por las alergias."
            )}
          </div>
          <p>
            {t(
              "Otorrinolaringología y Alergología trabajan en conjunto, como un equipo para proporcionar un diagnóstico rápido y un tratamiento integral para que los pacientes se beneficien de esta estrecha colaboración."
            )}
          </p>
          <p>
            {t(
              "El Dr. Jaime Lumbán tiene la práctica de la alergia desde hace más de 33 años. Si usted está sufriendo de síntomas de alergia, necesita la experiencia de clase mundial del Dr. Lumbán, en conjunto con nuestros especialistas en Alergia e Inmunología."
            )}
          </p>
        </div>

        {/* CONDICIONES */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
          <h2 className="text-3xl font-semibold">{t("Condiciones Tratadas")}</h2>
          <div className="space-y-4">
            {conditionItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenConditionIndex(openConditionIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="text-sm font-medium text-gray-800">{item.title}</span>
                  </span>
                  <span
                    className={`text-gray-400 transition ${
                      openConditionIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openConditionIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">{t("Servicios Especializados")}</h2>
            <h3 className="text-xl font-medium">{t("Pruebas y Diagnóstico")}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("Pruebas de asma, tratamiento, educación y gestión")}</li>
              <li>{t("Pruebas ambientales y de alergia a los alimentos")}</li>
              <li>{t("Pruebas cutáneas para alergenos")}</li>
              <li>{t("Estudios de función pulmonar")}</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-medium">{t("Tratamientos Avanzados")}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("La Inmunoterapia (inyecciones para la alergia)")}</li>
              <li>{t("Educación y manejo del paciente")}</li>
              <li>{t("Tratamiento para enfermedades inmunológicas")}</li>
              <li>{t("Manejo integral de alergias crónicas")}</li>
            </ul>
          </div>
        </div>

        {/* ENFOQUE */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6">
          <h2 className="text-3xl font-semibold">{t("Enfoque Integral")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "01",
                title: t("Diagnóstico"),
                text: t(
                  "Evaluación completa con tecnología avanzada para identificar alergenos específicos."
                ),
              },
              {
                label: "02",
                title: t("Tratamiento"),
                text: t(
                  "Planes personalizados que incluyen medicamentos, inmunoterapia y cambios de estilo de vida."
                ),
              },
              {
                label: "03",
                title: t("Seguimiento"),
                text: t(
                  "Monitoreo continuo y ajustes al tratamiento para óptimos resultados a largo plazo."
                ),
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-6 space-y-3">
                <span className="text-gray-400 text-sm">{item.label}</span>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{t("¿Problemas de Alergias?")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                "Por medio de distintos tratamientos, el Dr. Lumbán puede ayudarle a controlar este problema. Comuníquese a su consultorio o por correo electrónico y agende una cita."
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
