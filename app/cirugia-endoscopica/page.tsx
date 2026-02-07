"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CirugiaEndoscopicaSinusitisPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      <Hero
        title={t("Cirugía endoscópica para sinusitis")}
        subtitle={t("Conozca las diferentes cirugías que el Dr. Lumbán puede realizar")}
        src="/sinusitis.jpg"
        alt={t("Cirugía endoscópica para sinusitis")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">
              {t("¿Qué es la Cirugía Endoscópica para Sinusitis?")}
            </h2>

            <p>
              {t(
                "En general, la cirugía endoscópica de los senos paranasales está dirigido a personas con problemas de sinusitis crónica que no responden al tratamiento médico."
              )}
            </p>

            <p>
              {t(
                "En la mayoría de las personas con problemas de sinusitis, la cirugía no está indicada. En la mayoría de los casos se resuelven exitosamente con tratamiento médico. Este tratamiento puede consistir en antibióticos, antinflamatorios, antihistamínicos, descongestionantes u otros medicamentos, el tratamiento para las alergias o el control del medio ambiente (por ejemplo, dejar de fumar)."
              )}
            </p>

            <p>
              {t(
                "Cuando ya no hay una respuesta a los tratamientos médicos, se debe practicar un procedimiento quirúrgico endoscópico."
              )}
            </p>

            <p>
              {t(
                "Antes de indicar la cirugía endoscopia de senos paranasales, se deben practicar estudios radiológicos (tomografía), para determinar qué áreas están afectadas e iniciar un plan quirúrgico para curar la enfermedad."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              {t("Los síntomas de la sinusitis pueden incluir:")}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("Dolor facial o sensación de pesantez.")}</li>
              <li>{t("Dificultad para respirar por la nariz.")}</li>
              <li>{t("Mal olor persistente en la nariz.")}</li>
              <li>{t("Secreción retronasal.")}</li>
              <li>{t("Dolores de cabeza.")}</li>
            </ul>
            <p className="text-sm text-gray-600">
              {t(
                "De vez en cuando problemas de sinusitis pueden causar ronquera, tos, malestar general o una variedad de otros síntomas; pero estos problemas también pueden ocurrir en la ausencia de enfermedad sinusal; por lo tanto, el diagnóstico de sinusitis debe basarse en una evaluación meticulosa de su médico."
              )}
            </p>
          </div>
        </div>

        {/* EVALUACIÓN */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">
            {t("Evaluación y Seguimiento de Tratamiento Endoscópico")}
          </h2>

          <h3 className="text-2xl font-medium">{t("Cirugía Sinusal")}</h3>

          <p>
            {t(
              "Si, después de la consulta, se considera que usted se beneficiaría de la cirugía endoscópica, una fecha será arreglada para el procedimiento. En muchos casos, la cirugía puede realizarse de forma ambulatoria; sin embargo, es importante estar preparado para ser admitido en el hospital en caso de que resulte necesario."
            )}
          </p>

          <p>
            {t(
              "Después de la cirugía, son necesarias visitas de seguimiento durante aproximadamente tres semanas para limpiar costras del sitio quirúrgico. Una visita adicional se programa posteriormente entre dos a seis semanas."
            )}
          </p>

          <p>
            {t(
              "En algunos casos, un segundo procedimiento quirúrgico puede ser necesario si los síntomas reaparecen después de un intervalo de alivio, generalmente debido a la formación de adherencias (tejido cicatricial)."
            )}
          </p>
        </div>

        {/* PROCEDIMIENTO + VENTAJAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">
              {t("Cirugía endoscópica para sinusitis")}
            </h2>

            <p>
              {t(
                "Esta cirugía difiere del abordaje quirúrgico convencional, ya que se realiza por medio de una cámara (endoscopios) a través de los orificios nasales, sin ningún corte externo y sin bisturí."
              )}
            </p>

            <p>
              {t(
                "El principio es aumentar el drenaje de las cavidades que acumulan moco y se infectan; frecuentemente la zona etmoidal anterior, maxilar y frontal."
              )}
            </p>

            <p>
              {t(
                "Si la causa subyacente de la enfermedad es identificada y corregida, la enfermedad secundaria en los senos maxilares y frontales a menudo mejora espontáneamente."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("Ventajas del procedimiento")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("La cirugía es menos extensa")}</li>
              <li>{t("Menor eliminación de tejidos normales")}</li>
              <li>{t("No hay hinchazón facial")}</li>
              <li>{t("No se requieren incisiones externas")}</li>
              <li>{t("Procedimiento ambulatorio")}</li>
            </ul>
            <p className="text-sm text-gray-600">
              {t("Los resultados han sido muy exitosos, con más de un 90% de curación.")}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("¿Dudas sobre el procedimiento?")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "Puede contactar al Dr. Lumbán por medio de su número telefónico o por correo electrónico para concertar una cita y aclarar sus dudas."
            )}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("SOLICITA TU CONSULTA")}
          </a>
        </div>

        {/* SINUSITIS + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">{t("¿Qué es la sinusitis?")}</h2>
            <p className="text-gray-700">
              {t(
                "La sinusitis es un padecimiento muy común que requiere la atención de un especialista de nariz, como el Dr. Lumbán. Si tienes dudas sobre este padecimiento y sus síntomas, da clic en Ver Más Información."
              )}
            </p>
            <a
              href={getRouteByKey("sinusitis", currentLang)}
              className="inline-flex items-center justify-center text-center px-5 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              {t("VER MÁS INFORMACIÓN")}
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              {t("Conozca sobre el Dr. Lumbán")}
            </h3>
            <p className="text-gray-600">
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

      </div>
    </main>
  );
}
