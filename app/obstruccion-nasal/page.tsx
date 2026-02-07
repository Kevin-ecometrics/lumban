"use client";

import React from "react";
import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

export default function ObstruccionNasalPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <Hero
        title={t("Acerca de la Obstrucción Nasal")}
        subtitle={t("Soluciones especializadas para problemas de flujo de aire nasal")}
        src="/obstruccion-nasal.png"
        alt={t("Acerca de la Obstrucción Nasal")}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 space-y-16">
        {/* DESCRIPCIÓN + ANATOMÍA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {t(
                "La obstrucción nasal es básicamente debido a problemas con una de las dos áreas: el tabique nasal o los cornetes inferiores (o ambos)."
              )}
            </p>
            <p>
              {t(
                "Un tabique desviado es una obstrucción fija que sólo se puede corregir con cirugía. La hipertrofia de cornetes inferiores, frecuentemente relacionada con alérgenos u otros irritantes en el aire, puede mejorar significativamente con medicamentos o tratamiento de alergias."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
            <h2 className="text-2xl font-semibold">{t("Anatomía Nasal y Obstrucción")}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">{t("Tabique Nasal")}</h3>
                <p className="text-gray-700">
                  {t(
                    "El tabique nasal es la estructura que divide las fosas nasales en el lado derecho e izquierdo. Un tabique desviado se refiere a un tabique que está torcido."
                  )}
                </p>
                <p className="text-gray-600 font-medium">
                  {t(
                    "Obstrucción fija que solo se puede corregir con cirugía (septoplastía)."
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">{t("Cornetes Inferiores")}</h3>
                <p className="text-gray-700">
                  {t(
                    "Los cornetes están cerca del septum, pero normalmente existe espacio suficiente entre el tabique y los cornetes para permitir el paso del aire."
                  )}
                </p>
                <p className="text-gray-600 font-medium">
                  {t("Puede mejorar con medicamentos o tratamiento de alergias.")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CAUSAS Y SOLUCIONES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">{t("Causas y Soluciones")}</h2>
            <h3 className="text-xl font-medium">{t("Tabique Desviado")}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("Estructura nasal torcida o desplazada")}</li>
              <li>{t("Obstrucción mecánica fija")}</li>
              <li>{t("No responde a medicamentos")}</li>
              <li>{t("Solución: Septoplastía quirúrgica")}</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-medium">{t("Hipertrofia de Cornetes")}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("Cornetes inferiores demasiado grandes")}</li>
              <li>{t("Relacionado con alergias e irritantes")}</li>
              <li>{t("Puede mejorar con tratamiento médico")}</li>
              <li>{t("Solución: Medicamentos o reducción quirúrgica")}</li>
            </ul>
          </div>
        </div>

        {/* TRATAMIENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h2 className="text-3xl font-semibold">{t("Opciones de Tratamiento")}</h2>
            <h3 className="text-xl font-medium">{t("Tratamiento Médico")}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("Descongestionantes nasales")}</li>
              <li>{t("Corticoesteroides nasales")}</li>
              <li>{t("Antihistamínicos para alergias")}</li>
              <li>{t("Lavados nasales con solución salina")}</li>
              <li>{t("Inmunoterapia para alergias")}</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4">
            <h3 className="text-xl font-medium">{t("Tratamiento Quirúrgico")}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("Septoplastía (corrección del tabique)")}</li>
              <li>{t("Reducción de cornetes inferiores")}</li>
              <li>{t("Cirugía endoscópica nasal")}</li>
              <li>{t("Procedimientos ambulatorios")}</li>
              <li>{t("Recuperación rápida")}</li>
            </ul>
          </div>
        </div>

        {/* CTA + PERFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{t("¿Quisieras mejorar tu imagen?")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                "El Dr. Lumbán es especialista en la Cirugía Estética de Nariz. Infórmate acerca de este procedimiento que puede mejorar tu salud y tu imagen."
              )}
            </p>
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              {t("VER MÁS INFORMACIÓN")}
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

      </div>
    </main>
  );
}
