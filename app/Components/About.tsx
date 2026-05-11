"use client";

// components/YourwareStory.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

const YourwareStory: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const experienceYears = new Date().getFullYear() - 1993;

  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 ">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Columna de imagen - IZQUIERDA */}
          <div className="lg:w-5/12 flex justify-center items-start mt-8">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/lumban realizando una cirugia.jpg"
                  alt={t("home.about.alt_image")}
                  className="w-full h-auto object-cover"
                />
                {/* Lista de valores adicionales */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                    {t("home.about.pilars_title")}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>{t("home.about.pilars_item1")}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>{t("home.about.pilars_item2")}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>{t("home.about.pilars_item3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

           {/* Columna de texto - DERECHA */}
           <div className="lg:w-7/12 self-center">
            {/* Título */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-10 lg:mb-14 leading-tight">
              {t("home.about.title")}
            </h1>

            {/* Contenido de texto */}
            <div className="space-y-7 text-gray-800 mb-2">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("home.about.more_than")} {experienceYears}{" "}
                {t("home.about.experience_years")}
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("home.about.description1")}
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("home.about.description2")}
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                {t("home.about.description3")}
              </p>
            </div>
            <Link
              style={{ backgroundColor: theme === "morado" ? "#A0ADD9" : theme === "azul" ? "#4588C8" : "#A2CC80" }}
              className="px-4 py-2 text-white hover:opacity-90 rounded-md transition-colors duration-300 inline-block mt-2"
              href={getRouteByKey("profile", currentLang)}
            >
              {t("home.about.about_link")} Lumbán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourwareStory;
