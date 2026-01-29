"use client";

import React from "react";

export default function PadecimientosGargantaPage() {
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
            Acerca de los Problemas de la Garganta
          </h2>
          <p>
            La garganta o faringe es una estructura tubular que conecta las
            cavidades oral y nasal con el esófago y la laringe (caja de la voz).
            Los alimentos pasan al esófago y el aire a la tráquea y laringe.
          </p>
          <p>
            Al ser un paso común para alimentos y aire, es más susceptible a
            infecciones y otras condiciones. El Dr. Lumbán ofrece diagnóstico
            experto y tratamiento especializado para múltiples condiciones de la
            garganta.
          </p>
        </div>

        {/* AMIGDALITIS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Amigdalitis</h2>
          <p>
            Inflamación de las amígdalas causada por virus o bacterias. Forman
            parte del sistema linfático y ayudan a prevenir infecciones.
          </p>

          <h3 className="text-2xl font-medium">Síntomas</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Dolor de garganta</li>
            <li>Dificultad para tragar</li>
            <li>Náuseas y vómitos</li>
            <li>Tos</li>
            <li>Dolor de cabeza</li>
            <li>Fiebre</li>
            <li>Enrojecimiento de amígdalas</li>
            <li>Dolor de oído</li>
          </ul>

          <h3 className="text-2xl font-medium">Tratamiento</h3>
          <h4 className="text-xl font-medium">Médico</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Ibuprofeno o acetaminofén</li>
            <li>Antibióticos (penicilina)</li>
            <li>Líquidos abundantes</li>
            <li>Gárgaras con agua salada</li>
          </ul>
          <h4 className="text-xl font-medium">Quirúrgico</h4>
          <p>Amigdalectomía en casos recurrentes, persistentes o severos.</p>
        </div>

        {/* DOLOR DE GARGANTA */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Dolor de Garganta</h2>
          <p>
            Es el trastorno más común de garganta. Generalmente causado por
            resfriado, gripe, alergias, bacterias (estreptococos), fumar,
            amigdalitis o mononucleosis infecciosa.
          </p>

          <h3 className="text-2xl font-medium">Síntomas</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Dolor y dificultad al respirar</li>
            <li>Dificultad para tragar</li>
            <li>Fiebre</li>
          </ul>

          <h3 className="text-2xl font-medium">Alivio</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Pastillas y caramelos</li>
            <li>Gárgaras de agua salada</li>
            <li>Líquidos abundantes</li>
            <li>Antibióticos si es recurrente</li>
          </ul>
        </div>

        {/* FARINGITIS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Faringitis</h2>
          <p>
            Inflamación de la faringe causada por virus o bacterias. Síntoma
            principal: dolor de garganta; otros síntomas: fiebre, dolor de
            cabeza, muscular y articular, erupciones y ganglios inflamados.
          </p>

          <h3 className="text-2xl font-medium">Tratamiento</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Antibióticos (amoxicilina)</li>
            <li>Ibuprofeno o acetaminofén</li>
            <li>Gárgaras con agua salada</li>
            <li>Líquidos abundantes</li>
          </ul>
        </div>

        {/* CÁNCER DE GARGANTA */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Cáncer de Garganta</h2>
          <p>
            Tumores en faringe, laringe o amígdalas. Factor de riesgo principal:
            uso de tabaco.
          </p>

          <h3 className="text-2xl font-medium">Factores de Riesgo</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Uso de tabaco (fumado y sin humo)</li>
            <li>Alcoholismo crónico</li>
            <li>Edad avanzada</li>
            <li>Virus del papiloma humano</li>
            <li>Mascar nuez de betel</li>
            <li>Exposición a luz ultravioleta</li>
          </ul>

          <h3 className="text-2xl font-medium">Síntomas y Diagnóstico</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Bulto que no se cura</li>
            <li>Dificultad para tragar</li>
            <li>Dolor de garganta persistente</li>
            <li>Ronquera o cambios en la voz</li>
            <li>Dolor de oído</li>
          </ul>
          <p>
            Diagnóstico: biopsia, pruebas especializadas y evaluación completa.
          </p>

          <h3 className="text-2xl font-medium">Opciones de Tratamiento</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Radioterapia para casos específicos</li>
            <li>Cirugía: Laringectomía parcial o total</li>
            <li>Combinación: radiación y quimioterapia para tumores grandes</li>
          </ul>

          <h3 className="text-2xl font-medium">
            Rehabilitación Post-Quirúrgica
          </h3>
          <p>
            Tras una laringectomía, actividades como comer, hablar o respirar
            pueden ser difíciles. Se recomienda terapia de habla y deglución.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            ¿Experimenta problemas de garganta?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Dr. Lumbán ofrece diagnóstico experto y tratamiento especializado
            para condiciones de la garganta.
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
              El Dr. Lumbán tiene años de experiencia en otorrinolaringología,
              prestando un servicio de calidad y trato amable.
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
