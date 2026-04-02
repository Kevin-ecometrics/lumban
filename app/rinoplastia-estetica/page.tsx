"use client";

import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";

export default function RinoplastiaEsteticaPage() {
  const { t } = useTranslation();
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt={t("Rinoplastia estética")}
        title={t("Rinoplastia Estética")}
          subtitle={t("Armonía facial con resultados naturales")}
        textClassName="max-w-3xl mx-auto px-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
          imageClassName="-mt- md:mt-28"
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {t("Redefinimos la forma de tu nariz con precisión médica")}
        </h1>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            {t(
              "La rinoplastia estética mejora la armonía facial respetando la anatomía y la respiración. Cada plan se diseña a medida para lograr resultados naturales y proporcionales."
            )}
          </p>
          <p>
            {t(
              "Combinamos evaluación clínica, simulación de objetivos estéticos y técnica quirúrgica avanzada para maximizar seguridad y satisfacción."
            )}
          </p>
          <p>
            {t(
              "El proceso incluye seguimiento cercano y recomendaciones claras para una recuperación cómoda y controlada."
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
