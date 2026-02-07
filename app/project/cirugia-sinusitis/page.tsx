"use client";

import Hero from "@/app/Components/StickyImageHero";
import { useTranslation } from "react-i18next";

export default function CirugiaSinusitisPage() {
  const { t } = useTranslation();
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt={t("Cirugía de sinusitis")}
        title={t("Cirugía de Sinusitis")}
        subtitle={t("Respiración libre y alivio duradero")}
        textClassName="max-w-3xl mx-auto px-4 -mt-8 md:-mt-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
        imageClassName="-mt-8 md:mt-28"
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {t("Tratamiento quirúrgico para sinusitis crónica")}
        </h1>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            {t(
              "La cirugía de sinusitis busca restaurar la ventilación natural de los senos paranasales cuando el tratamiento médico no es suficiente."
            )}
          </p>
          <p>
            {t(
              "Empleamos técnicas endoscópicas mínimamente invasivas para reducir inflamación, mejorar el drenaje y minimizar molestias."
            )}
          </p>
          <p>
            {t(
              "Cada paciente recibe un plan quirúrgico personalizado y un esquema de seguimiento para consolidar resultados."
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
