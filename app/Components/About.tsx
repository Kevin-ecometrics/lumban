"use client";

// components/YourwareStory.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const YourwareStory: React.FC = () => {
  const { t } = useTranslation();
  const experienceYears = new Date().getFullYear() - 1993; // Assuming Dr. Lumban started in 2005
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Columna de imagen - IZQUIERDA */}
          <div className="lg:w-5/12 flex justify-center items-start mt-8">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
                  alt={t(
                    "Dr. Jaime Lumban - Especialista en Otorrinolaringología",
                  )}
                  className="w-full h-auto object-cover"
                />
                {/* Lista de valores adicionales */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                    {t("Nuestros Pilares:")}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        {t(
                          "Seguridad y Acreditación:preparación continua y atención al detalle aseguran la máxima integridad y los más altos estándares de excelencia",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        {t(
                          "Atención de Élite: Las técnicas más avanzadas con una instrumentación de vanguardia para asegurar un proceso satisfactorio, abordando detalladamente sus metas y preocupaciones.",
                        )}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        {t(
                          "Compromiso con la Excelencia: El tiempo invertido en la evaluación y el procedimiento es la clave para alcanzar resultados armoniosos y funcionales.",
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de texto - DERECHA */}
          <div className="lg:w-7/12">
            {/* Título */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-10 lg:mb-14 leading-tight">
              {t("Otorrinolaringologia y rinoplastia de excelencia")}{" "}
              {/* <span className="italic font-serif">{t("Atención")}</span> */}
            </h1>

            {/* Contenido de texto */}
            <div className="space-y-7 text-gray-800">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("Más de")} {experienceYears}{" "}
                {t(
                  "años dedicados al cuidado integral de tu salud respiratoria y estética facial.",
                )}
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t(
                  "Hemos diseñado un modelo de atención donde la tecnología de vanguardia se fusiona con un trato profundamente humano.",
                )}
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t(
                  "Entendemos que su bienestar no admite prisas; por ello, diseñamos una experiencia centrada en honrar su tiempo y sus necesidades individuales.",
                )}
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t(
                  "Será un gusto recibirle en consulta y acompañarle en el proceso hacia su bienestar y su mejor versión.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourwareStory;
