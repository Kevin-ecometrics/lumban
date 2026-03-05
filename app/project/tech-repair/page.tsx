"use client";

import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";

export default function TechRepairProjectPage() {
  const { t } = useTranslation();
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt={t("instalacion-taquetes.titulo")}
        title={t("instalacion-taquetes.nombre")}
        subtitle={t("instalacion-taquetes.subtitulo")}
        textClassName="max-w-3xl mx-auto px-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
        imageClassName="-mt-0 md:mt-28"
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {t("instalacion-taquetes.desc.1")}
        </h1>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            {t("instalacion-taquetes.desc.2")}
          </p>

          <p>
            {t("instalacion-taquetes.desc.3")}
          </p>

          <p>
            {t("instalacion-taquetes.desc.4")}
          </p>
        </div>
      </section>
    </main>
  );
}