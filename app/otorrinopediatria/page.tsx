"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

type AccordionItem = {
  question: string;
  answer: React.ReactNode;
};

export default function OtorrinoPediatria() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const items: AccordionItem[] = [
    {
      question: t("pediatrico.preguntas.sinusitis"),
      answer: (
        <>
          <p>
            {t("pediatrico.preguntas.sinusitis.desc")}
          </p>
          <ul className="list-disc list-inside my-2">
            <li>{t("pediatrico.preguntas.sinusitis.escalofrios")}</li>
            <li>{t("pediatrico.preguntas.sinusitis.moco")}</li>
            <li>
              {t("pediatrico.preguntas.sinusitis.goteo")}
            </li>
            <li>{t("pediatrico.preguntas.sinusitis.dolor-cabeza")}</li>
            <li>{t("pediatrico.preguntas.sinusitis.irritabilidad")}</li>
            <li>{t("pediatrico.preguntas.sinusitis.energia")}</li>
            <li>{t("pediatrico.preguntas.sinusitis.hinchazon")}</li>
          </ul>
          <p>
            {t("pediatrico.preguntas.sinusitis.explicacion")}
          </p>
          <p>
            {t("pediatrico.preguntas.sinusitis.reducir-riesgo")}
          </p>
        </>
      ),
    },
    {
      question: t("pediatrico.ronquidos.titulo"),
      answer: (
        <>
          <p>
            {t("pediatrico.ronquidos.desc.1")}
          </p>
          <p>
            {t("pediatrico.ronquidos.desc.2")}
          </p>
          <p>
            {t("pediatrico.ronquidos.desc.3")}
          </p>
          <p>
            {t("pediatrico.ronquidos.solucion")}
          </p>
        </>
      ),
    },
    {
      question: t("pediatrico.tubos.titulo"),
      answer: (
        <>
          <p>
            {t("pediatrico.tubos.desc.1")}
          </p>
          <p>
            {t("pediatrico.tubos.desc.2")}
          </p>
        </>
      ),
    },
    {
      question: t("pediatrico.tubos.quien.titulo"),
      answer: (
        <>
          <p>
            {t("pediatrico.tubos.quien.desc.1")}
          </p>
          <p>
            {t("pediatrico.tubos.quien.desc.2")}
          </p>
          <p>
            {t("pediatrico.tubos.quien.beneficios")}
          </p>
        </>
      ),
    },
    {
      question: t("pediatrico.tubos.insercion.titulo"),
      answer: (
        <>
          <p>
            {t("pediatrico.tubos.insercion.desc")}
          </p>
        </>
      ),
    },
    {
      question: t("pediatrico.tubos.cirugia"),
      answer: (
        <>
          <p>
            {t("pediatrico.tubos.insercion.procedimiento")}
          </p>
          <p>
            {t("pediatrico.tubos.insercion.adenoides")}
          </p>
        </>
      ),
    },
    {
      question: t("pediatrico.tubos.expectativas.titulo"),
      answer: (
        <>
          <p>
            {t("pediatrico.tubos.expectativas.desc.1")}
          </p>
          <p>
            {t("pediatrico.tubos.expectativas.desc.2")}
          </p>
        </>
      ),
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-widest text-gray-600 shadow-sm">
              {t("nav.otorrinopediatria")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t("pediatrico.titulo")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t("pediatrico.desc")}
            </p>
            <p className="text-gray-600 max-w-2xl">
              {t("pediatrico.intro")}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={getRouteByKey("contact", currentLang)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                {t("global.boton.solicitar-consulta")}
              </a>
              <a
                href={getRouteByKey("profile", currentLang)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
              >
                {t("doctor.boton.perfil")}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-4">
            <img
              src="/otorrinopediatria.jpg"
              alt={t("nav.otorrinopediatria")}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {t("pediatrico.preguntas.importantes")}
          </h2>
          <div className="space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    className="w-full text-left px-5 py-4 flex justify-between items-center font-medium"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                      <span className="text-sm md:text-base text-gray-900">{item.question}</span>
                    </span>
                    <span className="text-sm text-gray-500">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    className={`overflow-hidden border-t border-gray-100 px-5 text-sm text-gray-600 transition-all duration-500 ease-out ${
                      isOpen ? "max-h-[900px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{t("pediatrico.faq.titulo")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t("pediatrico.faq.sinusitis")}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("global.pregunta-procedimiento")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("global.contacto.cta")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("global.boton.solicitar-consulta")}
          </a>
        </div>

        {/* PERFIL */}
        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              {t("doctor.preview.titulo")}
            </h3>
            <p className="text-gray-600 max-w-xl">
              {t("doctor.preview.desc")}
            </p>
          </div>
          <a
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("doctor.boton.perfil")}
          </a>
        </div>
      </div>
    </section>
  );
}