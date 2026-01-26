"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ObstruccionNasalPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section className="relative bg-neutral-950 text-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* HERO */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Acerca de la Obstrucción Nasal
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl">
            Soluciones especializadas para problemas de flujo de aire nasal
          </p>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              La obstrucción nasal es básicamente debido a problemas con una de
              las dos áreas: el tabique nasal o los cornetes inferiores (o
              ambos).
            </p>
            <p>
              Un tabique desviado es una obstrucción fija que sólo se puede
              corregir con cirugía. La hipertrofia de cornetes inferiores,
              frecuentemente relacionada con alérgenos u otros irritantes en el
              aire, puede mejorar significativamente con medicamentos o
              tratamiento de alergias.
            </p>
          </div>

          {/* IMAGEN */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setOpenImage("/images/obstruccion-nasal.jpg")}
          >
            <img
              src="/images/obstruccion-nasal.jpg"
              alt="Obstrucción nasal"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* ANATOMÍA */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">
            Anatomía Nasal y Obstrucción
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Tabique Nasal</h3>
              <p className="text-neutral-300">
                El tabique nasal es la estructura que divide las fosas nasales
                en el lado derecho e izquierdo. Un tabique desviado se refiere a
                un tabique que está torcido.
              </p>
              <p className="text-neutral-300 font-medium">
                Obstrucción fija que solo se puede corregir con cirugía
                (septoplastía).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Cornetes Inferiores</h3>
              <p className="text-neutral-300">
                Los cornetes están cerca del septum, pero normalmente existe
                espacio suficiente entre el tabique y los cornetes para permitir
                el paso del aire.
              </p>
              <p className="text-neutral-300 font-medium">
                Puede mejorar con medicamentos o tratamiento de alergias.
              </p>
            </div>
          </div>
        </div>

        {/* CAUSAS Y SOLUCIONES */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">Causas y Soluciones</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Tabique Desviado</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Estructura nasal torcida o desplazada</li>
                <li>Obstrucción mecánica fija</li>
                <li>No responde a medicamentos</li>
                <li>Solución: Septoplastía quirúrgica</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Hipertrofia de Cornetes</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Cornetes inferiores demasiado grandes</li>
                <li>Relacionado con alergias e irritantes</li>
                <li>Puede mejorar con tratamiento médico</li>
                <li>Solución: Medicamentos o reducción quirúrgica</li>
              </ul>
            </div>
          </div>
        </div>

        {/* TRATAMIENTO */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold">Opciones de Tratamiento</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Tratamiento Médico</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Descongestionantes nasales</li>
                <li>Corticoesteroides nasales</li>
                <li>Antihistamínicos para alergias</li>
                <li>Lavados nasales con solución salina</li>
                <li>Inmunoterapia para alergias</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Tratamiento Quirúrgico</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Septoplastía (corrección del tabique)</li>
                <li>Reducción de cornetes inferiores</li>
                <li>Cirugía endoscópica nasal</li>
                <li>Procedimientos ambulatorios</li>
                <li>Recuperación rápida</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA ESTÉTICA */}
        <div className="rounded-2xl bg-neutral-900 p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            ¿Quisieras mejorar tu imagen?
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            El Dr. Lumbán es especialista en la Cirugía Estética de Nariz.
            Infórmate acerca de este procedimiento que puede mejorar tu salud y
            tu imagen.
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-neutral-950 font-medium hover:scale-105 transition">
            VER MÁS INFORMACIÓN
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
