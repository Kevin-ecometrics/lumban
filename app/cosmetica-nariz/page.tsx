"use client";

import React, { useState } from "react";

const pacientes = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `https://drlumban.com/pacientes/paciente${i + 1}.jpg`,
}));

export default function RinoplastiaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* HEADER */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            CIRUGÍA ESTÉTICA DE NARIZ
          </h1>
          <p className="text-lg text-gray-600">
            Aquí encontrará toda la información sobre la cirugía de rinoplastía
            o estética de nariz
          </p>
        </div>

        {/* INTRO */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">¿Qué es la Rinoplastía?</h2>

          <p>
            La cirugía plástica de la nariz es uno de los procedimientos
            cosméticos más realizados y también uno de los más desafiantes. El
            tipo de operación depende de los cambios que el paciente busca, ya
            que las variaciones anatómicas de la nariz son innumerables.
          </p>

          <p>
            Usted puede sentir que su nariz es demasiado grande, pequeña, ancha,
            estrecha, puntiaguda, colgante, sobreproyectada o simplemente poco
            atractiva.
          </p>

          <p>
            Algunos pacientes buscan modificar rasgos étnicos, otros corregir
            secuelas de accidentes o mejorar resultados de cirugías previas.
          </p>

          <p>
            El Dr. Lumbán comprende profundamente el impacto emocional que puede
            generar la inconformidad con los rasgos faciales y considera la
            rinoplastía como una herramienta poderosa para mejorar la confianza
            personal.
          </p>

          <p>
            La nariz es una estructura compleja formada por cartílago, hueso y
            piel. Su equilibrio requiere la experiencia de un cirujano
            especializado.
          </p>

          <p>
            Con más de 20 años de experiencia, el Dr. Lumbán es reconocido como
            uno de los mejores cirujanos de nariz en México, utilizando técnicas
            modernas tanto en cirugías primarias como de revisión.
          </p>
        </div>

        {/* TIPOS */}
        <div className="space-y-8 text-gray-700 max-w-4xl">
          <h2 className="text-3xl font-semibold">Tipos de cirugía de nariz</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Rinoplastía Funcional</h3>
            <p>
              Indicada en pacientes con problemas respiratorios por desviación
              del tabique, deformidades óseas o alergias. Mejora la respiración
              y también la estética nasal.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Rinoplastía Estética</h3>
            <p>
              Enfocada en mejorar la forma de la nariz, cuidando siempre que la
              función respiratoria no se vea comprometida.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Rinoplastía de Revisión</h3>
            <p>
              Para pacientes que han tenido cirugías previas con resultados
              insatisfactorios. Son casos complejos que requieren un
              especialista en rinoplastía.
            </p>
          </div>
        </div>

        {/* MÁS INFO */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-3xl font-semibold">Más Información</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Entender la cirugía de Rinoplastía</li>
            <li>¿Es la Rinoplastía para usted?</li>
            <li>Tomar la decisión para la Rinoplastía</li>
            <li>Qué esperar después de la cirugía</li>
            <li>Comprensión de la cirugía</li>
            <li>Candidatos ideales para remodelación de nariz</li>
          </ul>
        </div>

        {/* GALERÍA */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold">Pacientes de Rinoplastía</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pacientes.map((p) => (
              <div
                key={p.id}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(p.src)}
              >
                <div className="overflow-hidden rounded-xl border">
                  <img
                    src={p.src}
                    alt={`Paciente ${p.id} de rinoplastía`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Paciente {p.id} de rinoplastía
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">¿Tiene alguna duda?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Dr. Lumbán entiende que una cirugía es una gran decisión. Puede
            contactarlo por teléfono, correo electrónico o agendar una cita.
          </p>
          <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            SOLICITA TU CONSULTA
          </button>
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
          <button className="px-6 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition">
            VER PERFIL COMPLETO
          </button>
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full">
            <img
              src={selectedImage}
              alt="Paciente rinoplastía"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
