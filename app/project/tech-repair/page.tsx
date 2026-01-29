import Hero from "@/app/Components/StickyImageHero";
import MissionAccordion from "@/app/Components/MissionAccordion";

export default function TechRepairProjectPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
        alt="Proyecto de instalación de taquetes"
        title="Instalación de Taquetes"
        subtitle="Soluciones de fijación segura con acabado limpio"
        textClassName="max-w-3xl mx-auto px-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
        imageClassName="-mt-0 md:mt-28"
      />

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Proyecto de instalación y refuerzo con taquetes
        </h1>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Este proyecto se centró en la instalación de taquetes para fijación
            de mobiliario y elementos pesados, garantizando seguridad y
            durabilidad en cada anclaje.
          </p>

          <p>
            Aplicamos un diagnóstico previo del material base y seleccionamos
            el taquete adecuado para cada carga, logrando un acabado limpio y
            resistente.
          </p>

          <p>
            La intervención fue precisa, rápida y con mínimo impacto en las
            áreas de uso diario.
          </p>
        </div>
      </section>
    </main>
  );
}