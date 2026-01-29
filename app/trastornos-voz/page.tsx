"use client";

import React from "react";

export default function TrastornosVozPage() {
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
            Acerca de los Trastornos de la Voz
          </h2>
          <p>
            La voz es el sonido que se produce cuando el aire pasa desde los
            pulmones a la laringe. Al hablar, las cuerdas vocales se cierran
            parcialmente, haciendo que el aire vibre y genere sonido. Cada voz
            es tan única como una huella digital.
          </p>
          <p>
            Diversas condiciones médicas o daños en las partes asociadas con la
            voz pueden provocar dolor, molestias, cambios en el tono, el volumen
            o la calidad de la voz.
          </p>
        </div>

        {/* TIPOS DE TRASTORNOS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">
            Trastornos de la Voz Incluyen
          </h3>

          <h4 className="text-xl font-medium">
            Nódulos y Pólipos de las Cuerdas Vocales
          </h4>
          <p>
            <strong>Nódulos Vocales:</strong> Crecimientos no cancerosos en las
            cuerdas vocales causados por uso excesivo.
            <br />
            <strong>Pólipos Vocales:</strong> Hinchazón o nódulo anormal en una
            o ambas cuerdas vocales.
          </p>

          <h4 className="text-xl font-medium">
            Parálisis de las Cuerdas Vocales
          </h4>
          <p>
            Se produce cuando una o ambas cuerdas vocales no se mueven
            correctamente, afectando la voz, la deglución y la respiración.
          </p>

          <h4 className="text-xl font-medium">
            Paradójico Movimiento de las Cuerdas Vocales
          </h4>
          <p>
            Disfunción donde las cuerdas vocales se cierran al inhalar en lugar
            de abrirse, causando problemas respiratorios.
          </p>

          <h4 className="text-xl font-medium">Disfonía Espasmódica</h4>
          <p>
            Trastorno crónico causado por movimientos forzados o tensos de las
            cuerdas vocales, produciendo cambios anormales en la voz.
          </p>
        </div>

        {/* CAUSAS Y FACTORES DE RIESGO */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Causas y Factores de Riesgo</h3>

          <h4 className="text-xl font-medium">Factores Principales</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Lesión de las cuerdas vocales</li>
            <li>Uso excesivo de la voz</li>
            <li>Hablar demasiado o gritar</li>
            <li>Fumar</li>
            <li>Cáncer de garganta</li>
          </ul>

          <h4 className="text-xl font-medium">Otras Causas</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Resfriado común</li>
            <li>Alergias</li>
            <li>Bronquitis</li>
            <li>Exposición a sustancias irritantes</li>
            <li>Edad avanzada</li>
          </ul>

          <h4 className="text-xl font-medium">Grupos de Alto Riesgo</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Maestros</li>
            <li>Cantantes</li>
            <li>Predicadores</li>
            <li>Fumadores</li>
          </ul>
        </div>

        {/* SÍNTOMAS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Síntomas</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Voz áspera o ronquera</li>
            <li>Cambios anormales en la voz</li>
            <li>Dificultad para respirar</li>
            <li>Dificultad para tragar</li>
            <li>Tos persistente</li>
            <li>Sensación de nudo en la garganta</li>
          </ul>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Diagnóstico</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Historial Clínico:</strong> Evaluación de síntomas,
              hábitos vocales y antecedentes médicos
            </li>
            <li>
              <strong>Examen Físico:</strong> Evaluación visual de la laringe y
              cuerdas vocales
            </li>
            <li>
              <strong>Pruebas Especializadas:</strong> Evaluación de vibración
              de cuerdas vocales y función laríngea
            </li>
          </ol>
          <p className="text-gray-600">
            Para profesionales de la voz (maestros, cantantes, locutores, etc.),
            es crucial atención temprana ante cualquier cambio vocal para
            prevenir daños permanentes.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            ¿Experimenta problemas con su voz?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Dr. Lumbán puede diagnosticar y tratar diversos trastornos de la
            voz con técnicas especializadas.
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
