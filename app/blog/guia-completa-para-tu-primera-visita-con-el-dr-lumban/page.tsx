"use client";

import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../../i18n/routeMap";
import StickyImageHero from "@/app/Components/StickyImageHero";
export default function Blog() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const imageBanner =
    "/blog/Como prepararte para una cita con el dr lumban en tijuana.webp";
  const imageInside =
    "/blog/Agenda una valoracion personalizada para dolor de oido nariz y garganta.webp";

  return (
    <main className="bg-white">
      {/* HERO con imagen */}
      <StickyImageHero
        src={imageBanner}
        alt="Guia sencilla para agendar una consulta con el dr lumban otorrinolaringólogo en Tijuana "
        title={t("blog.first_visit.title")}
        subtitle={t("blog.first_visit.subtitle")}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 space-y-20">
        {/* Párrafos iniciales */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("blog.first_visit.intro_1")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("blog.first_visit.intro_2")}
          </p>
        </div>
        {/* H2 - ¿Cuándo deberías visitar al otorrinolaringólogo? */}
        <div className="space-y-8">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("blog.first_visit.when_to_visit_title")}
          </h2>

          {/* H3 - Señales que no debes ignorar */}
          <div className="space-y-4">
            <h3 className="text-2xl font-normal text-gray-900">
              {t("blog.first_visit.signs_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.signs_intro")}
            </p>
            <ul className="space-y-3 pl-6">
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom1")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom2")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom3")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom4")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom5")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom6")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom7")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom8")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom9")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.symptom10")}
              </li>
            </ul>
          </div>

          {/* H3 - Cómo prepararte para tu cita con el Dr. Lumbán */}
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-normal text-gray-900">
              {t("blog.first_visit.how_to_prepare_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.how_to_prepare_intro")}
            </p>
            <ul className="space-y-3 pl-6">
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.preparation1")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.preparation2")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.preparation3")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.preparation4")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.preparation5")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.preparation6")}
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed italic mt-4">
              {t("blog.first_visit.no_small_questions")}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={imageInside}
              alt="Agenda una valoración   personalizada para dolor de oido nariz y garganta en  
                Tijuana con el Dr. Jaime Lumbán  "
              title="Agenda una valoración   personalizada para dolor de oido nariz y garganta en  
                Tijuana con el Dr. Jaime Lumbán  "
              className="w-auto h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* H4 - ¿Qué esperar durante tu primera visita? */}
          <div className="space-y-4 pt-4">
            <h4 className="text-xl font-normal text-gray-900">
              {t("blog.first_visit.what_to_expect_title")}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.what_to_expect_content")}
            </p>
          </div>

          {/* H3 - Cómo es el proceso de evaluación */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-normal text-gray-900">
              {t("blog.first_visit.evaluation_process_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.evaluation_process_intro")}
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("blog.first_visit.step1_title")}
                </h4>
                <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                  {t("blog.first_visit.step1_content")}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("blog.first_visit.step2_title")}
                </h4>
                <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                  {t("blog.first_visit.step2_intro")}
                </p>
                <ul className="space-y-2 pl-6 mt-2">
                  <li className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                    <span className="font-medium">
                      {t("blog.first_visit.ears_label")}
                    </span>{" "}
                    {t("blog.first_visit.ears_content")}
                  </li>
                  <li className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                    <span className="font-medium">
                      {t("blog.first_visit.nose_throat_label")}
                    </span>{" "}
                    {t("blog.first_visit.nose_throat_content")}
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("blog.first_visit.step3_title")}
                </h4>
                <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                  {t("blog.first_visit.step3_content")}
                </p>
              </div>
            </div>
          </div>

          {/* H4 - ¿Te recetarán medicamento, estudios o cirugía? */}
          <div className="space-y-4 pt-4">
            <h4 className="text-xl font-normal text-gray-900">
              {t("blog.first_visit.will_you_need_treatment_title")}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.will_you_need_treatment_intro")}
            </p>
            <ul className="space-y-3 pl-6">
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.treatment1")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.treatment2")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.treatment3")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.treatment4")}
              </li>
              <li className="text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-6">
                {t("blog.first_visit.treatment5")}
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.dont_self_diagnose")}
            </p>
          </div>

          {/* H3 - ¿Cuánto dura una consulta? */}
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-normal text-gray-900">
              {t("blog.first_visit.consultation_duration_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.consultation_duration_content")}
            </p>
          </div>

          {/* H2 - Atención médica personalizada */}
          <div className="space-y-6 pt-4">
            <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
              {t("blog.first_visit.personalized_care_title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.personalized_care_content_1")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.personalized_care_content_2")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.personalized_care_location")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.personalized_care_access")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("blog.first_visit.personalized_care_waiting_area")}
            </p>
          </div>

          {/* H3 - Agenda tu cita */}
          <div className="bg-gray-50 rounded-lg p-12 space-y-8 border border-gray-100">
            <h3 className="text-3xl font-light tracking-tight">
              {t("blog.first_visit.appointment_title")}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("blog.first_visit.appointment_invite")}
            </p>
            <div className="space-y-2 flex flex-col gap-2">
              <p className="font-semibold text-gray-900">
                {t("blog.first_visit.call_us")}
              </p>

              <a
                href="tel:6646842364"
                className="text-blue-600 hover:underline"
              >
                664 684 2364
              </a>
              <a
                href="tel:6646388135"
                className="text-blue-600 hover:underline"
              >
                664 638 8135
              </a>
              <a
                href="tel:16197137722"
                className="text-blue-600 hover:underline"
              >
                USA: 619 713 7722
              </a>
            </div>
            <div className="pt-4">
              <a
                href={getRouteByKey("contact", currentLang)}
                className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
              >
                {t("AGENDA TU CONSULTA")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
