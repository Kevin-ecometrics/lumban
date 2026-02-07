"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CirugiaAntirronquidoPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      <Hero
        title={t("Cirugía Antirronquido")}
        subtitle={t("Conozca las diferentes cirugías que el Dr. Lumbán puede realizar")}
        src="/ronquido.jpg"
        alt={t("Cirugía Antirronquido")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO + DIAGNÓSTICO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("Cirugía Antirronquido")}</h2>
            <p>
              {t(
                "El ronquido puede afectar la calidad del sueño y la salud general. En muchos casos se asocia con obstrucción de la vía aérea superior, vibración del paladar blando o aumento del tejido faríngeo."
              )}
            </p>
            <p>
              {t(
                "Cuando el ronquido es persistente o se acompaña de pausas respiratorias, es importante realizar una evaluación completa para descartar apnea del sueño y definir el tratamiento adecuado."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("Diagnóstico y Evaluación")}</h2>
            <p>
              {t(
                "El Dr. Lumbán realiza una evaluación integral de la vía aérea superior, incluyendo historia clínica, examen físico y estudios especializados como la nasofibroscopía."
              )}
            </p>
            <p>
              {t(
                "En algunos casos se solicita una polisomnografía para medir la calidad del sueño y cuantificar la presencia de apnea obstructiva."
              )}
            </p>
          </div>
        </div>

        {/* TRATAMIENTO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700">
          <h2 className="text-3xl font-semibold">{t("Opciones de Tratamiento")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
            <h3 className="text-2xl font-medium">{t("Tratamiento Conservador")}</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("Control de peso y hábitos de sueño")}</li>
              <li>{t("Evitar alcohol y sedantes por la noche")}</li>
              <li>{t("Tratamiento de alergias y congestión nasal")}</li>
              <li>{t("Uso de dispositivos orales seleccionados")}</li>
            </ul>
          </div>
          <p>
            {t(
              "El manejo se individualiza según la anatomía del paciente y la gravedad de los síntomas."
            )}
          </p>
        </div>

        {/* PROCEDIMIENTOS + CIRUGÍA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("Procedimientos y Cirugía")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("Cirugía de paladar blando (uvulopalatoplastia)")}</li>
              <li>{t("Reducción de amígdalas o adenoides")}</li>
              <li>{t("Corrección de tabique nasal (septoplastia)")}</li>
              <li>{t("Tratamiento de cornetes nasales")}</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("Procedimiento Quirúrgico")}</h2>
            <p>
              {t(
                "La cirugía antirronquido se planifica con base en la zona de mayor obstrucción. El objetivo es ampliar la vía aérea y disminuir la vibración de los tejidos."
              )}
            </p>
            <p>
              {t(
                "Dependiendo del caso, el procedimiento puede ser ambulatorio y con una recuperación controlada."
              )}
            </p>
          </div>
        </div>

        {/* RECUPERACIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
          <h2 className="text-3xl font-semibold">{t("Recuperación y Resultados")}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Mejoría progresiva del ronquido")}</li>
            <li>{t("Reposo relativo durante la primera semana")}</li>
            <li>{t("Control de molestias con medicación indicada")}</li>
            <li>{t("Seguimiento clínico para evaluar resultados")}</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("¿Dudas sobre este procedimiento?")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "Puede contactar al Dr. Lumbán por teléfono, correo electrónico o solicitar una cita para resolver todas sus dudas."
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
