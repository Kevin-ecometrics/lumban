"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { getRouteByKey } from "../i18n/routeMap";
import SecondaryImage from "../Components/Image";

export default function RinoplastiaPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const experienceYears = new Date().getFullYear() - 1993;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const patients = Array.from({ length: 15 }, (_, i) => ({
    src: `/rinoplastia/paciente${i + 1}.webp`,
    label: `${t("rhinoplasty.gallery_case")} ${i + 1}`,
  }));

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          selectedIndex === 0 ? patients.length - 1 : selectedIndex - 1,
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex(
          selectedIndex === patients.length - 1 ? 0 : selectedIndex + 1,
        );
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, patients.length]);

  return (
    <section className="bg-white text-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-gray-500 uppercase">
                <div className="w-8 h-px bg-gray-300" />
                {t("rhinoplasty.hero_title")}
              </div>

              <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                {t("rhinoplasty.seo_h1")}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {t("rhinoplasty.seo_intro_prefix")} {experienceYears}{" "}
                {t("rhinoplasty.seo_intro_suffix")}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={getRouteByKey("contact", currentLang)}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
                >
                  {t("rhinoplasty.cta_button")}
                </a>
                <a
                  href={getRouteByKey("profile", currentLang)}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-gray-300 text-sm font-medium tracking-wide hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  {t("rhinoplasty.view_full_profile")}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl -z-10" />
              <img
                src="/rinoplastia/Trasforma tu perfil con una rinoplastia en manos de un experto en nariz con mas de 3 decadas de experiencia en Tijuana.webp"
                alt={t("rhinoplasty.hero_title")}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 space-y-20">
        {/* ¿QUÉ ES LA RINOPLASTIA? */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.what_is_title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("rhinoplasty.what_is_text")}
          </p>
        </div>

        {/* CAMBIOS COMUNES */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.common_changes_title")}
          </h2>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.dorsal_hump_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.dorsal_hump_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.tip_refinement_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.tip_refinement_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.base_reduction_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.base_reduction_text")}
              </p>
            </div>
          </div>
        </div>

        {/* TIPOS DE CIRUGÍA */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.surgery_types_title")}
          </h2>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.functional_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.functional_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.aesthetic_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.aesthetic_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.revision_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.revision_text")}
              </p>
            </div>
          </div>
        </div>

        <div className="py-8">
          <SecondaryImage src="/rinoplastia/Haz tu cita para rinoplastia con especialistas en nariz con gran experiencia como el Dr. Lumban.webp" />
        </div>

        {/* TIPOS DE ABORDAJE */}
        <div className="space-y-12">
          <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
            {t("rhinoplasty.approaches_title")}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t("rhinoplasty.approaches_text")}
          </p>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.closed_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.closed_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.open_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.open_text")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-gray-900">
                {t("rhinoplasty.ultrasonic_title")}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gray-200">
                {t("rhinoplasty.ultrasonic_text")}
              </p>
            </div>
          </div>
        </div>

        {/* GALERÍA DE CASOS */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-light tracking-tight border-b border-gray-200 pb-6">
              {t("rhinoplasty.gallery_title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("rhinoplasty.gallery_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patients.map((patient, index) => (
              <motion.figure
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={patient.src}
                    alt={patient.label}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      {t("rhinoplasty.gallery_view")}
                    </span>
                  </div>
                </div>
                <figcaption className="mt-2 text-sm text-gray-500 text-center">
                  {patient.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-gray-50 rounded-lg p-12 text-center space-y-6 border border-gray-100">
          <h2 className="text-3xl font-light tracking-tight">
            {t("rhinoplasty.final_cta_title")}
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {t("rhinoplasty.final_cta_text")}
          </p>
          <div className="pt-4">
            <a
              href={getRouteByKey("contact", currentLang)}
              className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              {t("rhinoplasty.cta_button")}
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label={t("rhinoplasty.gallery_close")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={patients[selectedIndex].src}
                  src={patients[selectedIndex].src}
                  alt={patients[selectedIndex].label}
                  className="w-auto rounded-lg shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {patients[selectedIndex].label}
              </div>
              {patients.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(
                        selectedIndex === 0
                          ? patients.length - 1
                          : selectedIndex - 1,
                      );
                    }}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={t("rhinoplasty.gallery_previous")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(
                        selectedIndex === patients.length - 1
                          ? 0
                          : selectedIndex + 1,
                      );
                    }}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={t("rhinoplasty.gallery_next")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
              {patients.length > 1 && (
                <div className="md:hidden flex items-center justify-between w-full mt-4 px-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(
                        selectedIndex === 0
                          ? patients.length - 1
                          : selectedIndex - 1,
                      );
                    }}
                    className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label={t("rhinoplasty.gallery_previous")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(
                        selectedIndex === patients.length - 1
                          ? 0
                          : selectedIndex + 1,
                      );
                    }}
                    className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label={t("rhinoplasty.gallery_next")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
