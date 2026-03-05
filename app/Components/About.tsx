"use client";

// components/YourwareStory.tsx
import React from "react";
import { useTranslation } from "react-i18next";

// Función helper para formatear el texto con negritas antes de los dos puntos
const formatBoldText = (text: string) => {
  const parts = text.split(':');
  if (parts.length > 1) {
    return (
      <>
        <span className="font-bold">{parts[0]}:</span>
        {parts.slice(1).join(':')}
      </>
    );
  }
  return text;
};

const YourwareStory: React.FC = () => {
  const { t } = useTranslation();
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
                  alt={t("doctor.titulo-pagina")}
                  className="w-full h-auto object-cover"
                />
                {/* Lista de valores adicionales */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                    {t("filosofia.compromisos.titulo")}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        {formatBoldText(t("filosofia.compromisos.excelencia"))}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        {formatBoldText(t("filosofia.compromisos.tecnologia"))}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        {formatBoldText(t("filosofia.compromisos.atencion"))}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de texto - DERECHA */}
          <div className="lg:w-7/12">
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-4 leading-tight">
              {t("filosofia.titulo")}
            </h1>
            {/* Subtítulo (h3) */}
            <h3 className="text-2xl md:text-3xl font-serif italic text-gray-700 mb-10 lg:mb-14">
              {t("filosofia.atencion")}
            </h3>

            {/* Contenido de texto */}
            <div className="space-y-7 text-gray-800">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("filosofia.descripcion.1")}
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("filosofia.descripcion.2")}
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("filosofia.descripcion.3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourwareStory;