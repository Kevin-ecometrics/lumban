// app/about/page.tsx
"use client";

import Hero from "@/app/Components/StickyImageHero";
import MissionAccordion from "@/app/Components/MissionAccordion";
import getExperienceYears from "../Components/Year";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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

      {/* INTRO SECTION - Conoce al Dr. Jaime Lumbán */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t("Conoce al Dr. Jaime Lumbán")}
          </h1>
          <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
            {t(
              "Ojo experto, templanza noble y resultados naturales cualidades que le permiten abordar cada caso con la calma y precisión que la otorrinolaringología exige.",
            )}
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <p className="text-2xl md:text-3xl font-serif text-gray-800 text-center">
            &ldquo;
            {t(
              "Mi filosofía es ofrecer cambios que respeten meticulosamente quién eres, priorizando siempre tu salud.",
            )}
            &rdquo;
          </p>
          <p className="text-lg text-gray-600 text-center mt-4">
            — {t("Dr. Jaime Lumbán")}
          </p>
        </motion.div>

        {/* Experience and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            {t(
              "Con más de tres décadas de experiencia, el Dr. Lumbán es reconocido por su capacidad de fusionar la precisión médica, brindando diagnósticos y cirugía mínima invasiva de vanguardia a pacientes de México, Estados Unidos y otros países.",
            )}
          </p>

          <p className="font-medium text-gray-800">
            {t(
              "Consulta otorrinolaringológica integral para niños, adultos y adultos mayores de excelencia en Tijuana.",
            )}
          </p>
        </motion.div>
      </section>

      {/* EXCELLENCE SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t("Excelencia con Propósito")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Su práctica se basa en la honestidad, integridad y dedicación a la excelencia en la otorrinolaringología, priorizando la funcionalidad sin sacrificar la belleza.",
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-10 text-center">
              {t("Certificaciones")}
            </h2>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>
                    {t(
                      "Academia Americana de Otorrinolaringología y Cirugía de Cabeza y Cuello",
                    )}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>{t("Consejo Mexicano de Otorrinolaringología")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>
                    {t(
                      "Miembro activo de la Academy of Otolaryngology–Head and Neck Surgery (AAO-HNS) y la American Rhinologic Society.",
                    )}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>
                    {t(
                      "Obtuvo el primer lugar nacional en el Consejo Mexicano de Otorrinolaringología.",
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t("Por que tu salud merece el mejor trato especializado.")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
              {t("En consulta, nuestra misión es:")}
            </h3>

            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>
                  {t(
                    "Estar presente para el paciente, reconociendo su tiempo y comprendiendo sus preocupaciones y metas, para asegurar una experiencia agradable y satisfactoria.",
                  )}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>
                  {t(
                    "Brindar bienestar de alto nivel a través de un servicio excepcional y una escucha activa, guiando a cada paciente hacia su mejor versión para recuperar su salud en padecimientos de oídos, nariz y garganta, así como mediante cirugía estética y funcional de nariz.",
                  )}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>
                  {t(
                    "Proporcionar lo último en tecnología e innovaciones en otorrinolaringología y rinoplastia.",
                  )}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN (original) */}
      {/* <section className="py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          {t("Nuestra Misión")}
        </h2>

        <MissionAccordion />
      </section> */}
    </main>
  );
}
