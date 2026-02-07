"use client";

import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";

export default function TratamientosOtitisPage() {
  const { t } = useTranslation();
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt={t("Tratamientos de otitis")}
        title={t("Tratamientos de Otitis")}
        subtitle={t("Alivio del dolor y prevención de recaídas")}
        textClassName="max-w-3xl mx-auto px-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
        imageClassName="-mt- md:mt-28"
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {t("Atención especializada para otitis aguda y crónica")}
        </h1>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            {t(
              "La otitis puede afectar a niños y adultos, causando dolor, fiebre y pérdida temporal de audición. Un diagnóstico oportuno es clave para evitar complicaciones."
            )}
          </p>
          <p>
            {t(
              "Ofrecemos tratamientos médicos personalizados, control del dolor y seguimiento clínico para prevenir recurrencias."
            )}
          </p>
          <p>
            {t(
              "Nuestro enfoque prioriza la recuperación completa y el cuidado del oído a largo plazo."
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
