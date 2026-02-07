"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function SinusitisPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Acerca de la Sinusitis")}
        subtitle={t("Tratamiento especializado para sinusitis aguda y crónica")}
        src="/sinusitis.jpg"
        alt={t("Acerca de la Sinusitis")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO + SÍNTOMAS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              {t(
                "La sinusitis es una de las condiciones médicas más comunes que requieren tratamiento anualmente en los Estados Unidos. En términos generales, la sinusitis se refiere a una inflamación de las cavidades de los senos, y se clasifica en la sinusitis aguda (síntomas de corta duración, en cualquier lugar de 1-12 semanas) y sinusitis crónica (síntomas de mayor duración, 12 semanas y más)."
              )}
            </p>
            <p>
              {t(
                "Mientras que la inflamación del seno se piensa con mayor frecuencia de lo infecciosa (viral y bacteriana), la inflamación también puede ocurrir debido a procesos no infecciosos, como la alergia, tabaco o irritantes ambientales."
              )}
            </p>
            <p>
              {t(
                "El resfriado común es en realidad una rinosinusitis viral (nasal e inflamación sinusal), que los propios mecanismos inmunes del cuerpo típicamente resuelven en 7-10 días."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{t("Síntomas de la Sinusitis")}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("Congestión Nasal")}</li>
              <li>{t("Secreción purulenta (amarillo o verde)")}</li>
              <li>{t("Congestión")}</li>
              <li>{t("Drenaje nasal")}</li>
              <li>{t("Goteo post-nasal")}</li>
              <li>{t("Tos")}</li>
              <li>{t("Dolor de garganta")}</li>
            </ul>
          </div>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold">{t("Diagnóstico y Evaluación")}</h2>
          <p>
            {t(
              "La gran mayoría (98%) de la enfermedad rinosinusitis aguda es viral. El único indicador preciso de la transición de la rinosinusitis viral a una enfermedad bacteriana, es la duración de los síntomas. Como regla general, si los síntomas de la rinosinusitis son ni mejor ni peor después de 10-14 días, la infección bacteriana es más probable y los antibióticos están indicados."
            )}
          </p>
          <p>
            {t(
              "El Dr. Lumbán llevará a cabo una evaluación integral, que incluye una historia clínica detallada, examen ORL, y la endoscopia nasal. Este procedimiento se realiza fácilmente en el consultorio, con las mínimas molestias, y proporciona a nuestros médicos una evaluación detallada de la anatomía en la nariz, y el estado de inflamación."
            )}
          </p>
        </div>

        {/* OPCIONES DE TRATAMIENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("Opciones de Tratamiento")}</h2>
            <h3 className="text-xl font-semibold">{t("Tratamiento Médico")}</h3>
            <p>
              {t(
                "Cuando la inflamación sinusal no se borra por los propios mecanismos del cuerpo, o incluso con terapia antibiótica adecuada, entonces los síntomas persistirán y la terapia más intensiva puede ser indicada. Esto podría incluir cursos más largos de antibióticos, el uso concomitante de descongestionantes y mucolíticos, o posiblemente incluso esteroides anti-inflamatorios."
              )}
            </p>
            <h3 className="text-xl font-semibold">{t("Evaluación Anatómica")}</h3>
            <p>
              {t(
                "Pueden detectarse anomalías anatómicas, como una desviación del tabique, pólipos nasales o sinusales, hinchazón o secreciones anormales. Estos hallazgos pueden ayudar a guiar la terapia y la respuesta al tratamiento. Imágenes TC se utilizan con criterio para evaluar completamente los senos, proporcionando información acerca de la magnitud y distribución de la inflamación en los senos nasales."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold">{t("Cirugía Endoscópica de Senos")}</h3>
            <p>
              {t(
                "Para los pacientes cuya inflamación es refractaria y tiene poca respuesta al tratamiento médico, o que tienen una obstrucción significativa de la nariz y/o anormalidades anatómicas de los senos, la cirugía puede ser considerada. La cirugía de senos se realiza por vía endoscópica, dando prioridad a la preservación de la función del seno mientras se restaura el drenaje adecuado, conocida como Endoscopia Sinusal Funcional (CENS)."
              )}
            </p>
            <p>
              {t(
                "Se realiza con más frecuencia bajo anestesia general, de forma ambulatoria (es decir, cirugía el mismo día). En algunos casos, se utilizan imágenes de TC en tecnología de orientación de imagen, lo que permite el seguimiento en tiempo real de los instrumentos quirúrgicos durante el procedimiento."
              )}
            </p>
          </div>
        </div>

        {/* FACTORES DE RIESGO */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
          <h2 className="text-3xl font-semibold">{t("Factores de Riesgo Importantes")}</h2>
          <p>
            {t(
              "Si usted sufre de infecciones sinusales repetidas frecuentes, o si tiene síntomas verdaderamente crónicos que no responden a los tratamientos, por favor, haga una cita con el Dr. Lumbán para una evaluación completa. Se llevará a cabo una historia completa, una evaluación de la anatomía de la nariz y los senos paranasales, y se identificarán otros factores que pueden necesitar tratamiento, tales como:"
            )}
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("Alergias")}</li>
            <li>{t("Factores ambientales")}</li>
            <li>{t("Deficiencia inmune")}</li>
            <li>{t("Consumo de tabaco")}</li>
          </ul>
          <p>
            {t(
              "Los efectos nocivos del consumo de tabaco en las membranas nasales y senos paranasales no pueden ser exagerados."
            )}
          </p>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">
              {t("¿Diagnosticado con Sinusitis Crónica?")}
            </h2>
            <p>
              {t(
                "Por medio de la cirugía endoscópica, el Dr. Lumbán puede ayudarle a mejorar su salud con el mínimo de dolor."
              )}
            </p>
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              {t("VER MÁS INFORMACIÓN")}
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">{t("Conozca sobre el Dr. Lumbán")}</h2>
            <p className="text-gray-700">
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
