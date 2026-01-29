import Hero from "@/app/Components/StickyImageHero";
import MissionAccordion from "@/app/Components/MissionAccordion";

export default function TratamientosOtitisPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt="Tratamientos de otitis"
        title="Tratamientos de Otitis"
        subtitle="Alivio del dolor y prevención de recaídas"
        textClassName="max-w-3xl mx-auto px-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
        imageClassName="-mt- md:mt-28"
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Atención especializada para otitis aguda y crónica
        </h1>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            La otitis puede afectar a niños y adultos, causando dolor, fiebre y
            pérdida temporal de audición. Un diagnóstico oportuno es clave para
            evitar complicaciones.
          </p>
          <p>
            Ofrecemos tratamientos médicos personalizados, control del dolor y
            seguimiento clínico para prevenir recurrencias.
          </p>
          <p>
            Nuestro enfoque prioriza la recuperación completa y el cuidado del
            oído a largo plazo.
          </p>
        </div>
      </section>
    </main>
  );
}
