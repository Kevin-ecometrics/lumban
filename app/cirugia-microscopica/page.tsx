"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function CirugiaMicroscopicaLaringePage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Cirugía Microscópica de Laringe")}
        subtitle={t("Conozca las diferentes cirugías que el Dr. Lumbán puede realizar")}
        src="/laringe.jpg"
        alt={t("Cirugía Microscópica de Laringe")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* INTRO + DIAGNÓSTICO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("Cirugía Microscópica de Laringe")}</h2>
            <p>
              {t(
                "La ronquera (disfonía) o el cambio en el sonido de la voz es un síntoma común. Con frecuencia se relaciona con inflamación por el uso excesivo de la voz o cambios de temperatura, y suele resolverse espontáneamente en menos de 3 semanas."
              )}
            </p>
            <p>
              {t(
                "En algunos casos, los cambios en la voz pueden ser el primer síntoma de una condición más seria como debilidad vocal, tumores de las cuerdas vocales o incluso cáncer de garganta. Si la ronquera persiste por más de 3 semanas, se recomienda una evaluación por un médico otorrinolaringólogo."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("Diagnóstico y Evaluación")}</h2>
            <p>
              {t(
                "El Dr. Lumbán realiza laringoscopia para diagnosticar y tratar los trastornos de la voz, permitiendo observar las cuerdas vocales mediante un sistema de cámara."
              )}
            </p>
            <p>
              {t(
                "La evaluación comienza con una historia clínica completa y un examen físico detallado de cabeza y cuello. Posteriormente se examina la laringe con un laringoscopio de fibra óptica rígido o flexible, con anestesia local y mínimas molestias."
              )}
            </p>
            <p>
              {t(
                "Durante el estudio se evalúa la presencia de inflamación, debilidad y lesiones como nódulos, pólipos, quistes, cicatrices, hemorragias, papilomas y cáncer."
              )}
            </p>
          </div>
        </div>

        {/* TRATAMIENTO + PROCEDIMIENTOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("Opciones de Tratamiento")}</h2>
            <h3 className="text-2xl font-medium">{t("Tratamiento Conservador")}</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("Modificación del uso de la voz y estilo de vida")}</li>
              <li>{t("Higiene vocal")}</li>
              <li>{t("Reposo de la voz")}</li>
              <li>{t("Ejercicios vocales")}</li>
            </ul>
            <p>
              {t(
                "El manejo suele realizarse en conjunto entre el Otorrinolaringólogo y, en algunos casos, un Foniatra o Terapeuta de la Voz."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("Procedimientos y Cirugía")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("Inyección de cuerdas vocales con BOTOX")}</li>
              <li>{t("Extirpación de quistes, pólipos o nódulos")}</li>
              <li>{t("Biopsia de lesiones sospechosas")}</li>
              <li>{t("Eliminación de papilomas")}</li>
              <li>{t("Tratamiento de edema por tabaquismo")}</li>
              <li>{t("Escisión de lesiones pre-cancerosas o cancerosas")}</li>
            </ul>
          </div>
        </div>

        {/* PROCEDIMIENTO + RECUPERACIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("Procedimiento Quirúrgico")}</h2>
            <p>
              {t(
                "La cirugía de las cuerdas vocales se realiza mediante una micro-laringoscopia bajo anestesia general. El paciente permanece completamente dormido mientras se examinan las cuerdas vocales con ayuda de un microscopio."
              )}
            </p>
            <p>
              {t(
                "Se utilizan instrumentos microscópicos de alta precisión y, en algunos casos, un láser de CO₂ para extirpar o tratar el tejido afectado."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold">{t("Recuperación y Resultados")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("La mayoría de las cirugías son ambulatorias")}</li>
              <li>{t("Reposo vocal limitado después del procedimiento")}</li>
              <li>{t("Retorno al trabajo aproximadamente en 1 semana")}</li>
              <li>{t("Mejoría progresiva de la voz durante varias semanas")}</li>
            </ul>
          </div>
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
