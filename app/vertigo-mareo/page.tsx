"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";

const sintomas = [
  {
    title: "Vértigo",
    description:
      "Es la percepción de dar vueltas, el movimiento o la rotación de cualquiera de uno mismo o el medio ambiente que te rodea. Por lo general es episódica, en lugar de constante.",
  },
  {
    title: "Desequilibrio",
    description:
      'Es una sensación de inestabilidad o pérdida de equilibrio, ya sea en reposo o al caminar, o en ambas ocasiones. A menudo se describe como una sensación de "estar en un barco". Estos síntomas pueden o no estar acompañado por la sensación de oídos tapados, la pérdida de la audición, o zumbido en los oídos.',
  },
];

const causas = [
  "Las infecciones del oído medio",
  "Alergias",
  "Vértigo Postural Paroxístico Benigno (VPPB)",
  "Neuronitis Vestibular",
  "Laberintitis. Virus del oído interno",
  "Acumulación de líquido en el oído interno. La enfermedad de Ménière",
  "Problemas en el cuello",
  "Enfermedades a nivel cerebral",
];

const tratamientos = [
  {
    title: "Terapia de Rehabilitación Vestibular",
    description:
      '"La rehabilitación vestibular" son una serie de ejercicios para la recuperación del equilibrio. Se pueden llevar a cabo en casa o por un audiólogo y cada programa de rehabilitación está diseñado específicamente para corregir los trastornos del equilibrio del paciente.',
  },
  {
    title: "Reposicionamiento Canalicular",
    description:
      "Muchos casos de vértigo se puede resolver con un simple procedimiento de posicionamiento en el consultorio. Una maniobra de reposicionamiento canalicular es el tratamiento que lleva al paciente a través de una serie de posiciones de la cabeza y el cuerpo diseñados para poner restos otoconia aflojado (cristales) de nuevo en el órgano del equilibrio.",
  },
  {
    title: "Dieta y Estilo de Vida",
    description:
      "La cafeína, la sal, el alcohol, la nicotina y la deshidratación todos pueden tener un impacto considerable en el sentido del equilibrio. El Dr. Lumbán le dará medicamentos y recomendaciones acerca de la dieta y los hábitos diarios, para que sus problemas del equilibrio puedan seguirse controlado en casa.",
  },
];

export default function EarConditionsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title="PADECIMIENTOS DEL OÍDO"
        subtitle="Conozca acerca de los padecimientos relacionados con el oído"
      />

      {/* EQUILIBRIO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trastornos del Equilibrio: Vértigo y Mareo
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nuestro equilibrio es una interacción compleja que requiere una
            comunicación sólida entre nuestras orejas, los ojos, y el sentido
            del tacto según la percepción de nuestros pies, los músculos y las
            articulaciones. A fin de mantener nuestro centro de gravedad,
            nuestro sistema nervioso central debe recibir estas tres señales y
            luego, correctamente, transmitirlas al cerebro.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Cuando las señales de nuestros sentidos no llegan al cerebelo, o
            llegan a él con el mensaje equivocado, experimentamos esta falta de
            comunicación como una pérdida del equilibrio, un mareo.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Un trastorno del equilibrio a veces puede ser un síntoma de otras
            condiciones médicas. La atención médica adecuada, incluyendo una
            historia médica completa y evaluación del sistema de equilibrio es
            importante para identificar la causa y dar las opciones de
            tratamiento adecuadas.
          </p>
        </motion.div>
      </section>

      {/* SÍNTOMAS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Síntomas y Definiciones
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {sintomas.map((s, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {s.title}
                </h4>
                <p className="text-gray-600">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSAS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Causas del Mareo
        </h3>
        <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700 text-lg">
          {causas.map((c, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {c}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* EVALUACIÓN */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Evaluación de Equilibrio
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Si tiene problemas de equilibrio o mareos, vamos a completar una
            evaluación exhaustiva. Nuestro laboratorio de equilibrio puede
            realizar una serie de pruebas para ayudar en el diagnóstico y el
            tratamiento de su problema.
          </p>
        </div>
      </section>

      {/* TRATAMIENTOS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tratamientos de Equilibrio
          </h3>
          <div className="space-y-8">
            {tratamientos.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {t.title}
                </h4>
                <p className="text-gray-600">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          ¿Experimenta problemas de equilibrio o vértigo?
        </h3>
        <p className="text-gray-700 text-lg mb-8">
          Agenda una cita con el Dr. Lumbán para una evaluación completa
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition">
          Solicitar Consulta
        </button>
      </section>

      {/* OTROS PADECIMIENTOS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Otros Padecimientos de Oído
          </h3>
          <p className="text-gray-700 text-lg">➢ Pérdida de Audición</p>
        </div>
      </section>
    </main>
  );
}
