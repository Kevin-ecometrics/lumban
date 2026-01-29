"use client";

import React from "react";

export default function ApneaSuenoPage() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* HEADER */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            PADECIMIENTOS DE LA GARGANTA
          </h1>
          <p className="text-lg text-gray-600">
            Conozca acerca de los padecimientos relacionados con la garganta
          </p>
        </div>

        {/* INTRO */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Acerca de la Apnea del Sueño
          </h2>
          <p>
            La apnea del sueño es un trastorno común donde los pacientes tienen
            patrones de respiración anormal durante el sueño, incluyendo pausas
            respiratorias o respiración muy superficial. Estas pausas duran
            entre 10 y 20 segundos o más, interrumpiendo el sueño y reduciendo
            el nivel de oxígeno en la sangre.
          </p>
          <p>
            La apnea obstructiva del sueño puede aumentar con la edad y es más
            frecuente en hombres, personas con sobrepeso y quienes padecen
            enfermedades cardíacas. Si no se trata, puede provocar hipertensión,
            insuficiencia cardíaca, alteraciones del ritmo cardíaco, resistencia
            a la insulina e incluso la muerte.
          </p>
        </div>

        {/* SÍNTOMAS Y CAUSAS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Síntomas y Causas</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Somnolencia diurna</li>
            <li>Debilidad</li>
            <li>Siestas repetidas</li>
            <li>Falta de concentración</li>
            <li>Dolores de cabeza</li>
            <li>Irritación</li>
            <li>Falta de sueño (insomnio)</li>
            <li>Mala memoria</li>
            <li>Ronquidos</li>
          </ul>
        </div>

        {/* TIPOS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Tipos de Apnea del Sueño</h3>

          <h4 className="text-xl font-medium">Apnea del Sueño Central</h4>
          <p>
            Se produce cuando las señales del cerebro hacia los músculos
            respiratorios se interrumpen, y no hay esfuerzo de los músculos de
            la respiración.
          </p>

          <h4 className="text-xl font-medium">Apnea Obstructiva del Sueño</h4>
          <p>
            Es el tipo más común y ocurre por una obstrucción en la vía aérea
            que impide un flujo de aire adecuado. Las señales del cerebro no se
            interrumpen, pero los esfuerzos musculares no son suficientes.
          </p>

          <h4 className="text-xl font-medium">Apnea del Sueño Mixta</h4>
          <p>
            Combinación de apnea central y obstructiva, presentando ambos
            mecanismos de interrupción respiratoria.
          </p>
        </div>

        {/* TRATAMIENTOS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Tratamientos</h3>

          <h4 className="text-xl font-medium">Cambios de Comportamiento</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Pérdida de peso en caso de sobrepeso</li>
            <li>Evitar alcohol o medicamentos sedantes</li>
            <li>Dejar de fumar</li>
            <li>Cambiar posiciones para dormir</li>
          </ul>

          <h4 className="text-xl font-medium">Dispositivos Dentales</h4>
          <p>
            Dispositivos que mantienen la mandíbula hacia adelante, útiles para
            apnea leve o en quienes no responden a cambios de comportamiento.
          </p>

          <h4 className="text-xl font-medium">
            Dispositivos Nasales y Medicamentos
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Tiras nasales adhesivas para ampliar fosas nasales</li>
            <li>Aerosoles nasales con esteroides</li>
            <li>Descongestionantes nasales</li>
            <li>Medicamentos para vigilia diurna (Provigil, Armodafinilo)</li>
          </ul>

          <h4 className="text-xl font-medium">
            CPAP - Presión Positiva Continua
          </h4>
          <p>
            La CPAP evita el estrechamiento de la vía aérea durante la
            respiración, manteniendo un flujo de aire constante y presión
            persistente.
          </p>

          <h4 className="text-xl font-medium">Cirugía</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Septoplastía:</strong> Corrección de desviación del
              tabique nasal
            </li>
            <li>
              <strong>Polipectomía:</strong> Extracción de pólipos nasales
            </li>
            <li>
              <strong>Reducción de cornetes:</strong> Para mejorar flujo de aire
            </li>
          </ul>
        </div>

        {/* FACTORES DE RIESGO */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Factores de Riesgo</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Edad avanzada</li>
            <li>Sexo masculino</li>
            <li>Obesidad</li>
            <li>Enfermedades del corazón</li>
            <li>Antecedentes familiares</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            ¿Sospecha que tiene Apnea del Sueño?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Dr. Lumbán puede realizar una evaluación completa y recomendar el
            tratamiento más adecuado para su caso específico.
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
              El Dr. Lumbán tiene años de experiencia dentro del campo de la
              otorrinolaringología, prestando un servicio de calidad y trato
              amable.
            </p>
          </div>
          <a
            href="/perfil"
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            VER PERFIL COMPLETO
          </a>
        </div>

        {/* OTROS PADECIMIENTOS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Otros Padecimientos de Garganta
          </h3>
          <ul className="space-y-1 text-gray-700">
            <li>➢ Problemas de la Garganta</li>
            <li>➢ Ronquidos</li>
            <li>➢ Apnea del Sueño</li>
            <li>➢ Trastornos de la Voz</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
