"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AlergiasPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section className="relative bg-neutral-950 text-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* HERO */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Acerca de las Alergias
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl">
            Diagnóstico y tratamiento integral de enfermedades alérgicas
          </p>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              El Dr. Jaime Lumbán, en conjunto con alergólogos certificados, son
              médicos que están especialmente entrenados en el diagnóstico y
              tratamiento de las enfermedades alérgicas en pacientes pediátricos
              y adultos.
            </p>

            <p>
              El Dr. Lumbán trabaja, mano a mano, con nuestros especialistas en
              alergias, para proporcionar a los pacientes una atención más
              integral y con la tecnología médica más avanzada.
            </p>

            <p className="font-medium text-neutral-200">
              Importante: Muchas enfermedades de oído, nariz y garganta son
              provocadas por las alergias.
            </p>

            <p>
              Otorrinolaringología y Alergología trabajan en conjunto, como un
              equipo para proporcionar un diagnóstico rápido y un tratamiento
              integral para que los pacientes se beneficien de esta estrecha
              colaboración.
            </p>

            <p>
              El Dr. Jaime Lumbán tiene la práctica de la alergia desde hace más
              de 33 años. Si usted está sufriendo de síntomas de alergia,
              necesita la experiencia de clase mundial del Dr. Lumbán, en
              conjunto con nuestros especialistas en Alergia e Inmunología.
            </p>
          </div>

          {/* IMAGEN */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setOpenImage("/images/alergias.jpg")}
          >
            <img
              src="/images/alergias.jpg"
              alt="Alergias"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* CONDICIONES */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">Condiciones Tratadas</h2>

          <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-neutral-300">
            <li>La Rinitis Alérgica y no Alérgica</li>
            <li>Asma</li>
            <li>Sinusitis Crónica y Congestión Nasal</li>
            <li>Tos</li>
            <li>Inmunodeficiencia</li>
            <li>Goteo Postnasal</li>
            <li>Alergias alimentarias</li>
            <li>Alergias ambientales</li>
          </ul>
        </div>

        {/* SERVICIOS */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">Servicios Especializados</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Pruebas y Diagnóstico</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Pruebas de asma, tratamiento, educación y gestión</li>
                <li>Pruebas ambientales y de alergia a los alimentos</li>
                <li>Pruebas cutáneas para alergenos</li>
                <li>Estudios de función pulmonar</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Tratamientos Avanzados</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>La Inmunoterapia (inyecciones para la alergia)</li>
                <li>Educación y manejo del paciente</li>
                <li>Tratamiento para enfermedades inmunológicas</li>
                <li>Manejo integral de alergias crónicas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ENFOQUE */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">Enfoque Integral</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 rounded-2xl p-6 space-y-3">
              <span className="text-neutral-400 text-sm">01</span>
              <h3 className="text-xl font-medium">Diagnóstico</h3>
              <p className="text-neutral-300">
                Evaluación completa con tecnología avanzada para identificar
                alergenos específicos.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 space-y-3">
              <span className="text-neutral-400 text-sm">02</span>
              <h3 className="text-xl font-medium">Tratamiento</h3>
              <p className="text-neutral-300">
                Planes personalizados que incluyen medicamentos, inmunoterapia y
                cambios de estilo de vida.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 space-y-3">
              <span className="text-neutral-400 text-sm">03</span>
              <h3 className="text-xl font-medium">Seguimiento</h3>
              <p className="text-neutral-300">
                Monitoreo continuo y ajustes al tratamiento para óptimos
                resultados a largo plazo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-neutral-900 p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">¿Problemas de Alergias?</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Por medio de distintos tratamientos, el Dr. Lumbán puede ayudarle a
            controlar este problema. Comuníquese a su consultorio o por correo
            electrónico y agende una cita.
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-neutral-950 font-medium hover:scale-105 transition">
            AGENDAR UNA CITA
          </button>
        </div>

        {/* PERFIL */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-neutral-800 pt-12">
          <div>
            <h3 className="text-xl font-semibold">
              Conozca sobre el Dr. Lumbán
            </h3>
            <p className="text-neutral-300 max-w-xl">
              El Dr. Lumbán tiene años de experiencia dentro del campo de la
              otorrinolaringología, prestando un servicio de calidad y trato
              amable.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full border border-neutral-600 hover:bg-neutral-800 transition">
            VER PERFIL COMPLETO
          </button>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Otros Padecimientos de Nariz
          </h3>
          <ul className="text-neutral-300 space-y-1">
            <li>➢ Septoplastía</li>
            <li>➢ Sinusitis</li>
            <li>➢ Congestión Nasal</li>
            <li>➢ Obstrucción Nasal</li>
            <li>➢ Alergias</li>
          </ul>
        </div>
      </div>

      {/* MODAL IMAGEN */}
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => setOpenImage(null)}
          >
            <motion.img
              src={openImage}
              alt="Imagen ampliada"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-w-[90%] max-h-[90%] rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
