"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CongestionNasalPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section className="relative bg-neutral-950 text-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* HERO */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Acerca de la Congestión Nasal
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl">
            Tratamiento especializado para nariz tapada y problemas
            respiratorios
          </p>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              La congestión nasal se refiere a la nariz tapada; es uno de los
              problemas de salud más comunes. Se produce cuando el interior de
              la nariz se hincha debido a los vasos sanguíneos inflamados.
            </p>

            <p className="text-neutral-200 font-medium">Importante:</p>
            <p>
              Si la congestión nasal no es tratada puede conducir a problemas
              auditivos, fatiga crónica, insomnio, dolores de cabeza. También
              puede elevar la frecuencia y volumen de los ronquidos, hasta
              llegar a una Apnea del Sueño.
            </p>
          </div>

          {/* IMAGEN */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setOpenImage("/images/congestion-nasal.jpg")}
          >
            <img
              src="/images/congestion-nasal.jpg"
              alt="Congestión nasal"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* CAUSAS */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">
            Causas de la Congestión Nasal
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Infecciones</h3>
              <p className="text-neutral-300">
                La gripa o sinusitis aguda secundaria a un resfriado común son
                causadas por una infección viral. Estos virus se transmiten por
                el aire y provocan inflamación de los tejidos nasales.
              </p>
              <p className="text-neutral-300">
                Cuando la mucosa nasal se vuelve amarilla o verde, puede indicar
                infección bacteriana. También se presentan dolor de cabeza,
                garganta irritada, tos y malestar general.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Anomalías Estructurales</h3>
              <p className="text-neutral-300">
                Incluyen desviación del septum nasal, deformidades congénitas o
                secundarias a traumatismos.
              </p>
              <p className="text-neutral-300">
                Otras causas: cornetes crecidos, pólipos nasales, colapso de la
                válvula nasal, nariz torcida y adenoides obstructivas en niños.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Alergias</h3>
              <p className="text-neutral-300">
                Se producen por la respuesta inflamatoria a alérgenos como
                polen, ácaros del polvo, caspa de animales y humo del tabaco.
              </p>
              <p className="text-neutral-300">
                Estos alérgenos liberan histamina, causando congestión y exceso
                de moco nasal.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Rinitis Vasomotora</h3>
              <p className="text-neutral-300">
                Condición no alérgica causada por una reacción anormal de los
                nervios de los vasos sanguíneos nasales.
              </p>
              <p className="text-neutral-300">
                Factores: cambios de temperatura, humedad, olores fuertes, humo
                del tabaco y estrés psicológico.
              </p>
            </div>
          </div>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Diagnóstico</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-neutral-300 list-disc list-inside">
            <li>Historia clínica detallada</li>
            <li>Examen físico completo de nariz y garganta</li>
            <li>Endoscopia nasal</li>
            <li>Evaluación de posibles alergias</li>
            <li>Estudios de imagen cuando son necesarios</li>
            <li>Análisis de patrones de sueño en casos de sospecha de apnea</li>
          </ul>
        </div>

        {/* TRATAMIENTO */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">Tratamiento</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Tratamiento Médico</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Descongestionantes nasales</li>
                <li>Antihistamínicos</li>
                <li>Corticoesteroides nasales</li>
                <li>Antibióticos para infecciones bacterianas</li>
                <li>Inmunoterapia para alergias severas</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Tratamiento Quirúrgico</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Septoplastía</li>
                <li>Reducción de cornetes</li>
                <li>Cirugía endoscópica de senos paranasales</li>
                <li>Extracción de pólipos nasales</li>
                <li>Adenoidectomía en niños</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PREVENCIÓN */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold">Prevención</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-medium mb-4">Medidas Generales</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Mantener buena higiene nasal</li>
                <li>Usar humidificador en ambientes secos</li>
                <li>Evitar alérgenos conocidos</li>
                <li>No fumar ni exponerse al humo</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">En Casa</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Lavados nasales con solución salina</li>
                <li>Mantener la cabeza elevada al dormir</li>
                <li>Beber abundantes líquidos</li>
                <li>Uso de vapor para descongestionar</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-neutral-900 p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">¿Necesita una evaluación?</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            El Dr. Lumbán le agendará una cita para realizar un diagnóstico y
            brindarle el mejor tratamiento para su problema.
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-neutral-950 font-medium hover:scale-105 transition">
            SOLICITAR UNA CITA
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
