"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

const pacientes = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `https://drlumban.com/pacientes/paciente${i + 1}.jpg`,
}));

export default function RinoplastiaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openInfoIndex, setOpenInfoIndex] = useState<number | null>(null);

  const infoItems = [
    {
      title: t("¿Es la Rinoplastía para usted?"),
      content: t(
        "Una valoración médica ayuda a definir si es candidato ideal según su anatomía y expectativas. Se revisan antecedentes médicos, salud general y objetivos estéticos o funcionales. El Dr. Lumbán explicará qué cambios son posibles y cuáles son las limitaciones. Así podrá decidir con claridad y confianza."
      ),
    },
    {
      title: t("Tomar la decisión para la Rinoplastía"),
      content: t(
        "Analice beneficios, tiempos de recuperación y objetivos estéticos antes de programar la cirugía. Se recomienda planear su agenda, resolver dudas y preparar un entorno cómodo para la recuperación. Además, se entrega una guía de cuidados para antes y después del procedimiento. La decisión debe ser informada y sin presión."
      ),
    },
    {
      title: t("Qué esperar después de la cirugía"),
      content: t(
        "Habrá inflamación temporal y controles médicos; los resultados finales se aprecian progresivamente. En los primeros días puede haber moretones y congestión nasal. Se realizan revisiones para vigilar la evolución y ajustar cuidados. La forma final se define con el tiempo mientras la inflamación disminuye."
      ),
    },
    {
      title: t("Comprensión de la cirugía"),
      content: t(
        "El procedimiento se personaliza para lograr armonía facial y mantener una respiración funcional. Se corrigen detalles del dorso, punta o tabique según el caso. La meta es un resultado equilibrado con el resto del rostro. Se explican las técnicas utilizadas y los cambios esperados."
      ),
    },
    {
      title: t("Candidatos ideales para remodelación de nariz"),
      content: t(
        "Pacientes con expectativas realistas, buena salud general y objetivos claros suelen ser los mejores candidatos. También es importante contar con estabilidad emocional y comprensión del proceso. Los mejores resultados se logran cuando hay una comunicación clara con el cirujano. La valoración médica determina la idoneidad de cada caso."
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-white text-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,0.12),transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-widest text-gray-600 shadow-sm">
                {t("Rinoplastía")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {t("Cirugía Estética de Nariz")}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {t(
                  "Aquí encontrará toda la información sobre la cirugía de rinoplastía o estética de nariz"
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={getRouteByKey("contact", currentLang)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
                >
                  {t("SOLICITA TU CONSULTA")}
                </a>
                <a
                  href={getRouteByKey("profile", currentLang)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
                >
                  {t("VER PERFIL COMPLETO")}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm p-4">
              <img
                src="/rino1.jpg"
                alt={t("Rinoplastía")}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-semibold">{t("¿Qué es la Rinoplastía?")}</h2>

            <p>
              {t(
                "La cirugía plástica de la nariz es uno de los procedimientos cosméticos más realizados y también uno de los más desafiantes. El tipo de operación depende de los cambios que el paciente busca, ya que las variaciones anatómicas de la nariz son innumerables."
              )}
            </p>

            <p>
              {t(
                "Usted puede sentir que su nariz es demasiado grande, pequeña, ancha, estrecha, puntiaguda, colgante, sobreproyectada o simplemente poco atractiva."
              )}
            </p>

            <p>
              {t(
                "Algunos pacientes buscan modificar rasgos étnicos, otros corregir secuelas de accidentes o mejorar resultados de cirugías previas."
              )}
            </p>

            <p>
              {t(
                "El Dr. Lumbán comprende profundamente el impacto emocional que puede generar la inconformidad con los rasgos faciales y considera la rinoplastía como una herramienta poderosa para mejorar la confianza personal."
              )}
            </p>

            <p>
              {t(
                "La nariz es una estructura compleja formada por cartílago, hueso y piel. Su equilibrio requiere la experiencia de un cirujano especializado."
              )}
            </p>

            <p>
              {t(
                "Con más de 20 años de experiencia, el Dr. Lumbán es reconocido como uno de los mejores cirujanos de nariz en México, utilizando técnicas modernas tanto en cirugías primarias como de revisión."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-5">
            <h3 className="text-lg font-semibold">{t("Beneficios clave")}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                {t("Mejora la armonía facial")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                {t("Refuerza la confianza personal")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                {t("Resultados naturales y personalizados")}
              </li>
            </ul>
            <div className="flex justify-center">
              <a
                href={getRouteByKey("contact", currentLang)}
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
              >
                {t("AGENDA TU VALORACIÓN")}
              </a>
            </div>
          </div>
        </div>

        {/* TIPOS */}
        <div className="space-y-8 text-gray-700">
          <h2 className="text-3xl font-semibold">{t("Tipos de cirugía de nariz")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-medium">{t("Rinoplastía Funcional")}</h3>
              <p className="mt-3 text-sm text-gray-600">
                {t(
                  "Indicada en pacientes con problemas respiratorios por desviación del tabique, deformidades óseas o alergias. Mejora la respiración y también la estética nasal."
                )}
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-medium">{t("Rinoplastía Estética")}</h3>
              <p className="mt-3 text-sm text-gray-600">
                {t(
                  "Enfocada en mejorar la forma de la nariz, cuidando siempre que la función respiratoria no se vea comprometida."
                )}
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-medium">{t("Rinoplastía de Revisión")}</h3>
              <p className="mt-3 text-sm text-gray-600">
                {t(
                  "Para pacientes que han tenido cirugías previas con resultados insatisfactorios. Son casos complejos que requieren un especialista en rinoplastía."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* MÁS INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-4">
            <img
              src="/rino1.jpg"
              alt={t("Rinoplastía")}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">{t("Más Información")}</h2>
            <div className="mt-4 space-y-4">
              {infoItems.map((item, index) => {
                const isOpen = openInfoIndex === index;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      className="w-full text-left px-5 py-4 flex justify-between items-center font-medium"
                      onClick={() =>
                        setOpenInfoIndex((prev) => (prev === index ? null : index))
                      }
                      aria-expanded={isOpen}
                      aria-controls={`info-panel-${index}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                        <span className="text-sm md:text-base text-gray-900">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    <div
                      id={`info-panel-${index}`}
                      className={`overflow-hidden border-t border-gray-100 px-5 text-sm text-gray-600 transition-all duration-500 ease-out ${
                        isOpen ? "max-h-[900px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                      }`}
                    >
                      {item.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* GALERÍA */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold">{t("Pacientes de Rinoplastía")}</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pacientes.map((p) => (
              <div
                key={p.id}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(p.src)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <img
                    src={p.src}
                    alt={`${t("Paciente")} ${p.id} ${t("de rinoplastía")}`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {t("Paciente")} {p.id} {t("de rinoplastía")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{t("¿Tiene alguna duda?")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "El Dr. Lumbán entiende que una cirugía es una gran decisión. Puede contactarlo por teléfono, correo electrónico o agendar una cita."
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
        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("Conozca sobre el Dr. Lumbán")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t(
                "El Dr. Lumbán cuenta con 23 años de experiencia en otorrinolaringología, especializado en Cirugía Estética de Nariz."
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

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
            >
              {t("Cerrar")}
            </button>
            <img
              src={selectedImage}
              alt={t("Paciente rinoplastía")}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
