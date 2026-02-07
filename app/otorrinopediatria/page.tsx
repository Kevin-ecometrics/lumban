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
      question: t("¿Cómo puedo saber si mi hijo tiene sinusitis?"),
      answer: (
        <>
          <p>
            {t(
              "La sinusitis en los niños es diferente de la sinusitis en adultos. Los siguientes síntomas pueden indicar una infección en los senos en su hijo:"
            )}
          </p>
          <ul className="list-disc list-inside my-2">
            <li>{t("Escalofríos que duran de 10 a 14 días o fiebre leve a moderada.")}</li>
            <li>{t("Moco espeso, de color amarillo-verde.")}</li>
            <li>
              {t(
                "Goteo post-nasal, que a veces se manifiesta como un dolor de garganta, tos, mal aliento y/o vómitos."
              )}
            </li>
            <li>{t("Dolor de cabeza, por lo general en niños de 6 años o más.")}</li>
            <li>{t("Irritabilidad.")}</li>
            <li>{t("Energía baja.")}</li>
            <li>{t("Hinchazón alrededor de los ojos.")}</li>
          </ul>
          <p>
            {t(
              "Los niños pequeños tienen sistemas inmunitarios inmaduros y son más propensos a las infecciones de la nariz, los senos paranasales y los oídos, sobre todo en los primeros años de vida. Estas son causadas con mayor frecuencia por infecciones virales (resfriados) y pueden ser agravadas por alergias. Sin embargo, cuando su hijo permanece enfermo más allá de los habituales siete a diez días, es probable que tenga una infección llamada sinusitis."
            )}
          </p>
          <p>
            {t(
              "Usted puede reducir el riesgo de infecciones de la nariz de su hijo mediante la reducción de la exposición a alergias ambientales conocidas y contaminantes como el humo del tabaco, la reducción del tiempo en la guardería y el tratamiento de la enfermedad de reflujo ácido del estómago."
            )}
          </p>
        </>
      ),
    },
    {
      question: t("Cuando roncar no es tan lindo. Los niños y la apnea del sueño"),
      answer: (
        <>
          <p>
            {t(
              "A menudo es lindo cuando los niños tratan de imitar a sus padres. Sin embargo, cuando se trata de los ronquidos, no es cosa de risa y es anormal en los niños. En realidad, los niños son versiones no más pequeñas de los adultos y el ronquido suele indicar un problema subyacente más grave, como la apnea obstructiva del sueño (AOS)."
            )}
          </p>
          <p>
            {t(
              "Durante las etapas más profundas del sueño, los músculos se relajan permitiendo que las amígdalas se desplacen hacia el interior. En los niños con amígdalas agrandadas, esto bloquea la respiración y causa sueño interrumpido, resultando en agotamiento durante el día."
            )}
          </p>
          <p>
            {t(
              "Estudios recientes han demostrado que el rendimiento escolar se ve afectado significativamente, con trastornos de atención y problemas de conducta más evidentes en niños con AOS. Incluso los mejores alumnos sufren sin una buena noche de descanso."
            )}
          </p>
          <p>
            {t(
              "La solución comienza con una historia exacta de sueño. Los niños que roncan deben ser evaluados por un otorrinolaringólogo, sobre todo si tienen amígdalas agrandadas. Si se diagnostica AOS, la extirpación de amígdalas y adenoides es la primera línea de tratamiento. Técnicas como la radiofrecuencia permiten una recuperación rápida y mejoran calidad de sueño y crecimiento."
            )}
          </p>
        </>
      ),
    },
    {
      question: t("¿Qué son los tubos de ventilación?"),
      answer: (
        <>
          <p>
            {t(
              "Los tubos de ventilación son pequeños cilindros, de 1mm de diámetro, colocados a través del tímpano (membrana timpánica) para permitir que entre el aire en el oído medio. También se llaman tubos de timpanostomía, miringotomía o de descompresión. Pueden ser de plástico, metal o teflón, y algunos tienen revestimiento para reducir la posibilidad de infección."
            )}
          </p>
          <p>
            {t(
              "Hay dos tipos básicos de tubos: corto plazo (permanecen de 6 a 12 meses antes de caer por sí solos) y largo plazo (más grandes, con bridas que los mantienen en su lugar por más tiempo, usualmente requieren extracción por un otorrinolaringólogo)."
            )}
          </p>
        </>
      ),
    },
    {
      question: t("¿Quién necesita de tubos de ventilación?"),
      answer: (
        <>
          <p>
            {t(
              "Se recomiendan cuando un niño experimenta infecciones repetidas del oído medio (otitis media aguda) o pérdida auditiva por líquido persistente (otitis media con derrame). Esto puede afectar habla, equilibrio y audición."
            )}
          </p>
          <p>
            {t(
              "También se indican en casos de malformaciones del tímpano o trompa de Eustaquio, Síndrome de Down, paladar hendido o barotrauma. Cada año, más de medio millón de cirugías de tubo de oído se realizan en niños (la cirugía más común en la infancia), con edad promedio de 1 a 3 años."
            )}
          </p>
          <p>
            {t(
              "Los tubos restauran la audición, reducen riesgo de futuras infecciones, mejoran comportamiento, sueño, habla y equilibrio."
            )}
          </p>
        </>
      ),
    },
    {
      question: t("¿Cómo se insertan los tubos auditivos?"),
      answer: (
        <>
          <p>
            {t(
              "La inserción se realiza mediante miringotomía, un procedimiento quirúrgico ambulatorio que consiste en una incisión de 1-2 mm en el tímpano. Se realiza bajo microscopio quirúrgico o láser. El tubo se coloca para mantener el agujero abierto y permitir la ventilación del oído medio."
            )}
          </p>
        </>
      ),
    },
    {
      question: t("Cirugía de canal auditivo"),
      answer: (
        <>
          <p>
            {t(
              "Se administra anestesia general ligera (gas hilarante) en niños pequeños; algunos mayores pueden tolerar sin anestesia. Se realiza miringotomía, se succiona líquido del oído medio y se coloca el tubo de ventilación. El procedimiento dura menos de 15 minutos."
            )}
          </p>
          <p>
            {t(
              "En algunos casos se recomienda la extracción del tejido adenoideo simultáneamente para reducir riesgo de infecciones recurrentes."
            )}
          </p>
        </>
      ),
    },
    {
      question: t("¿Qué esperar después de esta cirugía?"),
      answer: (
        <>
          <p>
            {t(
              "Tras la cirugía, los pacientes son monitoreados en recuperación y suelen ir a casa en pocas horas. Puede haber somnolencia, irritabilidad o náuseas por anestesia. La audición se restablece inmediatamente y los sonidos normales pueden parecer muy fuertes."
            )}
          </p>
          <p>
            {t(
              "Se proporcionan instrucciones postoperatorias específicas, incluyendo cuándo buscar atención inmediata. Para evitar bacterias, se puede recomendar mantener los oídos secos usando tapones durante baño o piscina. En actividades como buceo o agua sucia, la protección es necesaria; consulte con su médico."
            )}
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
              {t("Otorrinopediatría")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t("Otorrinopediatría")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t("Conozca sobre diferentes enfermedades de nariz, oído y garganta en niños")}
            </p>
            <p className="text-gray-600 max-w-2xl">
              {t(
                "Los niños y adolescentes no deben confundirse con los adultos para el diagnóstico y tratamiento de enfermedades de Oído, Nariz y Garganta. La estatura, peso, sistema inmunológico y desarrollo físico/mental requieren cuidado especial."
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

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-4">
            <img
              src="/otorrinopediatria.jpg"
              alt={t("Otorrinopediatría")}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {t("Preguntas Importantes")}
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
          <h2 className="text-2xl font-semibold">{t("Preguntas Frecuentes")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t(
              "¿Mi hijo tiene sinusitis? No dude en agendar una cita con el Dr. Lumbán, y él podrá responder todas sus dudas y diagnosticar correctamente a su hijo."
            )}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center space-y-6 shadow-sm">
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

        {/* PERFIL */}
        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between gap-6">
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
    </section>
  );
}
