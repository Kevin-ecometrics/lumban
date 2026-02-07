"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

const beneficios = [
  {
    title: "Mejoría en la Respiración",
    description:
      "Restablece la respiración nasal natural, mejorando no solo la respiración diurna sino también el sueño.",
  },
  {
    title: "Tratamiento para Apnea",
    description:
      "Se utiliza como tratamiento auxiliar en pacientes con apnea del sueño, mejorando la calidad del descanso.",
  },
  {
    title: "Rendimiento Atlético",
    description:
      "Beneficioso para atletas que necesitan un flujo de aire nasal adecuado durante la actividad física.",
  },
  {
    title: "Sueño Mejorado",
    description:
      "Pacientes que antes respiraban por la boca al dormir ahora disfrutan de una respiración nasal natural.",
  },
];

const procedimiento = [
  {
    step: "1",
    title: "Incisión Mínima",
    description:
      "La septoplastía nasal se logra a través de una pequeña incisión dentro de la fosa nasal.",
  },
  {
    step: "2",
    title: "Procedimiento Ambulatorio",
    description:
      "Se realiza como procedimiento ambulatorio que suele tardar menos de una hora.",
  },
  {
    step: "3",
    title: "Reducción de Cornetes",
    description:
      "Si es necesario, se combina con la reducción de cornetes (tejidos inflamados en la pared lateral de la nariz).",
  },
  {
    step: "4",
    title: "Recuperación Rápida",
    description:
      "Los pacientes reportan dolor mínimo y pueden volver al trabajo en 3 a 5 días.",
  },
];

export default function SeptoplastiaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title={t("Acerca de la Septoplastía")}
        subtitle={t("Corrección del tabique nasal para mejorar la respiración")}
        src="/septoplastia.jpg"
        alt={t("Acerca de la Septoplastía")}
      />

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            {t(
              "La corrección del tabique nasal (septoplastía) es uno de los procedimientos más comunes en otorrinolaringología. La desviación del septum nasal (tabique) puede ser de nacimiento o puede ser causado por un golpe que hizo que se doblara, del centro hacia un lado. A menudo, las lesiones aparentemente menores durante los años de crecimiento, pueden conducir a la desviación más grave conforme la nariz madura y se desarrolla. Esto puede resultar en la disminución del paso del aire por la nariz y dar la sensación de obstrucción nasal."
            )}
          </p>
        </motion.div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            {t("Beneficios de la Corrección Quirúrgica")}
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {beneficios.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-xl shadow-lg p-6 text-left"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {t(b.title)}
                </h4>
                <p className="text-gray-600">{t(b.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMIENTO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-14">
          {t("Detalles del Procedimiento")}
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          {procedimiento.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex gap-6"
            >
              <div className="text-4xl font-bold text-blue-600">{p.step}</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {t(p.title)}
                </h4>
                <p className="text-gray-600">{t(p.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TÉCNICA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">
            {t("Técnica Avanzada del Dr. Lumbán")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t(
              "El Dr. Lumbán no utiliza taponamientos nasales que bloquean el paso del aire después de la cirugía; por lo que sale del hospital respirando por su nariz y no por su boca."
            )}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
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
        <div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-6">
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
          <Link
            href={getRouteByKey("profile", currentLang)}
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            {t("VER PERFIL COMPLETO")}
          </Link>
        </div>
      </section>

      {/* OTROS PADECIMIENTOS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <h3 className="text-3xl font-bold text-gray-900">
            {t("Otros Padecimientos de Nariz")}
          </h3>
          <p className="text-gray-700 text-lg">➢ {t("Septoplastía")}</p>
          <p className="text-gray-700 text-lg">➢ {t("Sinusitis")}</p>
          <p className="text-gray-700 text-lg">➢ {t("Congestión Nasal")}</p>
          <p className="text-gray-700 text-lg">➢ {t("Obstrucción Nasal")}</p>
          <p className="text-gray-700 text-lg">➢ {t("Alergias")}</p>
        </div>
      </section>
    </main>
  );
}
