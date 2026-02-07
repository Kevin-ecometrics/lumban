"use client";

import Hero from "@/app/Components/StickyImageHero";
import MissionAccordion from "@/app/Components/MissionAccordion";
import getExperienceYears from "../Components/Year";
import { useTranslation } from "react-i18next";
export default function AboutPage() {
  const { t } = useTranslation();
  const year = getExperienceYears();
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt={t("Dr. Jaime Lumbán")}
        title={t("Dr. Jaime Lumbán")}
        subtitle={t("Especialista certificado en oídos, nariz y garganta")}
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {t("Conozca al Dr. Jaime Lumbán Gutiérrez")}
        </h1>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            {t(
              "El Dr. Jaime Lumbán es médico Otorrinolaringólogo, especialista en oído, nariz y garganta, con más de {{years}} años de experiencia clínica.",
              { years: year }
            )}
          </p>

          <p>
            {t(
              "Atiende pacientes de México, Estados Unidos y otros países, ofreciendo una atención médica basada en la honestidad, integridad y excelencia profesional."
            )}
          </p>

          <p>
            {t(
              "Su práctica se distingue por el uso de tecnología avanzada, atención personalizada y una comunicación clara que genera confianza y tranquilidad en cada paciente."
            )}
          </p>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            {t("Certificaciones")}
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              {t(
                "Academia Americana de Otorrinolaringología y Cirugía de Cabeza y Cuello"
              )}
            </li>
            <li>{t("Consejo Mexicano de Otorrinolaringología")}</li>
          </ul>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {t("Nuestra Misión")}
        </h2>

        <MissionAccordion />
      </section>
    </main>
  );
}
