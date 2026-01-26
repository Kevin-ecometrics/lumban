"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";

const beneficios = [
  {
    title: "Mejoría en la Respiración",
    description:
      "Restablece la respiración nasal natural, mejorando no solo la respiración diurna sino también el sueño.",
  },
  {
    title: "Tratamiento para Apnea",
    description:
      "Se utiliza como tratamiento auxiliar en pacientes con apnea del sueño, mejorando la calidad del descanso.",
  },
  {
    title: "Rendimiento Atlético",
    description:
      "Beneficioso para atletas que necesitan un flujo de aire nasal adecuado durante la actividad física.",
  },
  {
    title: "Sueño Mejorado",
    description:
      "Pacientes que antes respiraban por la boca al dormir ahora disfrutan de una respiración nasal natural.",
  },
];

const procedimiento = [
  {
    step: "1",
    title: "Incisión Mínima",
    description:
      "La septoplastía nasal se logra a través de una pequeña incisión dentro de la fosa nasal.",
  },
  {
    step: "2",
    title: "Procedimiento Ambulatorio",
    description:
      "Se realiza como procedimiento ambulatorio que suele tardar menos de una hora.",
  },
  {
    step: "3",
    title: "Reducción de Cornetes",
    description:
      "Si es necesario, se combina con la reducción de cornetes (tejidos inflamados en la pared lateral de la nariz).",
  },
  {
    step: "4",
    title: "Recuperación Rápida",
    description:
      "Los pacientes reportan dolor mínimo y pueden volver al trabajo en 3 a 5 días.",
  },
];

export default function SeptoplastiaPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title="Acerca de la Septoplastía"
        subtitle="Corrección del tabique nasal para mejorar la respiración"
      />

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            La corrección del tabique nasal (septoplastía) es uno de los
            procedimientos más comunes en otorrinolaringología. La desviación
            del septum nasal (tabique) puede ser de nacimiento o puede ser
            causado por un golpe que hizo que se doblara, del centro hacia un
            lado. A menudo, las lesiones aparentemente menores durante los años
            de crecimiento, pueden conducir a la desviación más grave conforme
            la nariz madura y se desarrolla. Esto puede resultar en la
            disminución del paso del aire por la nariz y dar la sensación de
            obstrucción nasal.
          </p>
        </motion.div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Beneficios de la Corrección Quirúrgica
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {beneficios.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-xl shadow-lg p-6 text-left"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {b.title}
                </h4>
                <p className="text-gray-600">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMIENTO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-14">
          Detalles del Procedimiento
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          {procedimiento.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex gap-6"
            >
              <div className="text-4xl font-bold text-blue-600">{p.step}</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {p.title}
                </h4>
                <p className="text-gray-600">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TÉCNICA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">
            Técnica Avanzada del Dr. Lumbán
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            El Dr. Lumbán no utiliza taponamientos nasales que bloquean el paso
            del aire después de la cirugía; por lo que sale del hospital
            respirando por su nariz y no por su boca.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6">
        <h3 className="text-3xl font-bold text-gray-900">
          ¿DUDAS SOBRE EL PROCEDIMIENTO?
        </h3>
        <p className="text-gray-700 text-lg">
          Contáctese con el Dr. Lumbán y él podrá resolver cualquier duda que
          tenga acerca de la septoplastía.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition">
          CONTACTAR AL DR. LUMBÁN
        </button>
      </section>

      {/* PERFIL */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6">
        <h3 className="text-3xl font-bold text-gray-900">
          Conozca sobre el Dr. Lumbán
        </h3>
        <p className="text-gray-700 text-lg">
          El Dr. Lumbán tiene años de experiencia dentro del campo de la
          otorrinolaringología, prestando un servicio de calidad y trato amable.
        </p>
        <button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
          VER PERFIL COMPLETO
        </button>
      </section>

      {/* OTROS PADECIMIENTOS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <h3 className="text-3xl font-bold text-gray-900">
            Otros Padecimientos de Nariz
          </h3>
          <p className="text-gray-700 text-lg">➢ Septoplastía</p>
          <p className="text-gray-700 text-lg">➢ Sinusitis</p>
          <p className="text-gray-700 text-lg">➢ Congestión Nasal</p>
          <p className="text-gray-700 text-lg">➢ Obstrucción Nasal</p>
          <p className="text-gray-700 text-lg">➢ Alergias</p>
        </div>
      </section>
    </main>
  );
}
