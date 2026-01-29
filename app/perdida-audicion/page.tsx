"use client";

import Hero from "@/app/Components/StickyImageHero";
import { motion } from "framer-motion";
import Link from "next/link";

const signos = [
  "No entiende algunas palabras durante la conversación",
  "Pide con frecuencia que le repitan las palabras",
  "Los amigos y familiares que expresan su preocupación acerca de la audición",
  "Dificultad para oír por teléfono",
  "Evita situaciones sociales debido a la dificultad para escuchar a otros",
  "Problemas para seguir la conversación en grupos o en presencia de ruido de fondo",
  "Ruidos en el oído como timbre, rugido, silbido, zumbido, etc.",
];

export default function HearingLossPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero
        title="Padecimientos del Oído"
        subtitle="Conozca acerca de los padecimientos relacionados con el oído"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Acerca de la Pérdida de Audición
          </h2>
          <p className="text-lg text-gray-700">
            Para escuchar lo que has perdido, consigue que tu audición sea
            evaluada a fondo.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            En cualquier momento dado, unos 30 millones de estadounidenses se
            ven afectados por la pérdida de audición. La pérdida de audición
            afecta a los adultos de manera desproporcionada. Y si bien es más
            común entre los adultos mayores, la pérdida de audición es también
            un hecho de la vida para los adultos, en sus 40 y 50 años, y no sólo
            para los mayores de 65 años.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Una cuestión clave con la pérdida de audición es que, por lo
            general, es gradual. Si bien puede ser repentina, la pérdida de la
            audición generalmente se desarrolla lentamente durante varios años.
            El resultado es que la mayoría de las personas con pérdida de
            audición no son conscientes de la magnitud de su problema.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            También es importante recordar que la pérdida de audición no
            significa una incapacidad total para escuchar. La pérdida de
            audición puede ser leve, moderada o grave, además de total.
          </p>
        </motion.div>
      </section>

      {/* SIGNOS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Signos de Posible Pérdida de Audición
          </h3>
          <ul className="space-y-4 list-disc list-inside text-lg text-gray-700">
            {signos.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CAUSAS */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            Las Causas de la Pérdida de la Audición en el Adulto
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            La pérdida de audición en los adultos es más comúnmente el resultado
            de daños a la estructura del oído interno o en el nervio auditivo.
            Puede ser causada por el envejecimiento, las enfermedades, ciertos
            medicamentos, lesiones, infecciones y la exposición al ruido. Si
            bien este tipo de pérdida auditiva no suele ser reversible, usted
            puede hacer algo al respecto. Lo primero que hay que hacer es un
            estudio de su audición y determinar la naturaleza y el alcance de su
            pérdida auditiva.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">¿Tiene alguna duda?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Dr. Lumbán entiende que una cirugía es una gran decisión. Puede
            contactarlo por teléfono, correo electrónico o agendar una cita.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            SOLICITA TU CONSULTA
          </a>
        </div>

        {/* PERFIL */}
        <div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              Conozca sobre el Dr. Lumbán
            </h3>
            <p className="text-gray-600 max-w-xl">
              El Dr. Lumbán cuenta con 23 años de experiencia en
              otorrinolaringología, especializado en Cirugía Estética de Nariz.
            </p>
          </div>
          <Link
            href="/perfil"
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            VER PERFIL COMPLETO
          </Link>
        </div>
      </section>

      {/* OTROS PADECIMIENTOS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-3xl font-bold text-gray-900">
            Otros Padecimientos de Oído
          </h3>
          <p className="text-gray-700 text-lg">➢ Pérdida de Audición</p>
          <p className="text-gray-700 text-lg">➢ Vértigo y Mareo</p>
        </div>
      </section>
    </main>
  );
}
