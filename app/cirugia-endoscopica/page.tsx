"use client";

import React from "react";

export default function CirugiaEndoscopicaSinusitisPage() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* HEADER */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            PROCEDIMIENTOS QUIRÚRGICOS
          </h1>
          <p className="text-lg text-gray-600">
            Conozca las diferentes cirugías que el Dr. Lumbán puede realizar
          </p>
        </div>

        {/* INTRO */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">
            ¿Qué es la Cirugía Endoscópica para Sinusitis?
          </h2>

          <p>
            En general, la cirugía endoscópica de los senos paranasales está
            dirigido a personas con problemas de sinusitis crónica que no
            responden al tratamiento médico.
          </p>

          <p>Los síntomas de la sinusitis pueden incluir:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Dolor facial o sensación de pesantez.</li>
            <li>Dificultad para respirar por la nariz.</li>
            <li>Mal olor persistente en la nariz.</li>
            <li>Secreción retronasal.</li>
            <li>Dolores de cabeza.</li>
          </ul>

          <p>
            De vez en cuando problemas de sinusitis pueden causar ronquera, tos,
            malestar general o una variedad de otros síntomas; pero estos
            problemas también pueden ocurrir en la ausencia de enfermedad
            sinusal; por lo tanto, el diagnóstico de sinusitis debe basarse en
            una evaluación meticulosa de su médico.
          </p>

          <p>
            En la mayoría de las personas con problemas de sinusitis, la cirugía
            no está indicada. En la mayoría de los casos se resuelven
            exitosamente con tratamiento médico. Este tratamiento puede
            consistir en antibióticos, antinflamatorios, antihistamínicos,
            descongestionantes u otros medicamentos, el tratamiento para las
            alergias o el control del medio ambiente (por ejemplo, dejar de
            fumar).
          </p>

          <p>
            Cuando ya no hay una respuesta a los tratamientos médicos, se debe
            practicar un procedimiento quirúrgico endoscópico.
          </p>

          <p>
            Antes de indicar la cirugía endoscopia de senos paranasales, se
            deben practicar estudios radiológicos (tomografía), para determinar
            qué áreas están afectadas e iniciar un plan quirúrgico para curar la
            enfermedad.
          </p>
        </div>

        {/* EVALUACIÓN */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Evaluación y Seguimiento de Tratamiento Endoscópico
          </h2>

          <h3 className="text-2xl font-medium">Cirugía Sinusal</h3>

          <p>
            Si, después de la consulta, se considera que usted se beneficiaría
            de la cirugía endoscópica, una fecha será arreglada para el
            procedimiento. En muchos casos, la cirugía puede realizarse de forma
            ambulatoria; sin embargo, es importante estar preparado para ser
            admitido en el hospital en caso de que resulte necesario.
          </p>

          <p>
            Después de la cirugía, son necesarias visitas de seguimiento durante
            aproximadamente tres semanas para limpiar costras del sitio
            quirúrgico. Una visita adicional se programa posteriormente entre
            dos a seis semanas.
          </p>

          <p>
            En algunos casos, un segundo procedimiento quirúrgico puede ser
            necesario si los síntomas reaparecen después de un intervalo de
            alivio, generalmente debido a la formación de adherencias (tejido
            cicatricial).
          </p>
        </div>

        {/* PROCEDIMIENTO */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Cirugía endoscópica para sinusitis
          </h2>

          <p>
            Esta cirugía difiere del abordaje quirúrgico convencional, ya que se
            realiza por medio de una cámara (endoscopios) a través de los
            orificios nasales, sin ningún corte externo y sin bisturí.
          </p>

          <p>
            El principio es aumentar el drenaje de las cavidades que acumulan
            moco y se infectan; frecuentemente la zona etmoidal anterior,
            maxilar y frontal.
          </p>

          <p>
            Si la causa subyacente de la enfermedad es identificada y corregida,
            la enfermedad secundaria en los senos maxilares y frontales a menudo
            mejora espontáneamente.
          </p>
        </div>

        {/* VENTAJAS */}
        <div className="space-y-6 text-gray-700 max-w-4xl">
          <h2 className="text-3xl font-semibold">Ventajas del procedimiento</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>La cirugía es menos extensa</li>
            <li>Menor eliminación de tejidos normales</li>
            <li>No hay hinchazón facial</li>
            <li>No se requieren incisiones externas</li>
            <li>Procedimiento ambulatorio</li>
          </ul>

          <p>
            Los resultados han sido muy exitosos, con más de un 90% de curación.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            ¿Dudas sobre el procedimiento?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Puede contactar al Dr. Lumbán por medio de su número telefónico o
            por correo electrónico para concertar una cita y aclarar sus dudas.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            SOLICITA TU CONSULTA
          </a>
        </div>

        {/* SINUSITIS INFO */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-3xl font-semibold">¿Qué es la sinusitis?</h2>
          <p className="text-gray-700">
            La sinusitis es un padecimiento muy común que requiere la atención
            de un especialista de nariz, como el Dr. Lumbán. Si tienes dudas
            sobre este padecimiento y sus síntomas, da clic en Ver Más
            Información.
          </p>
          <a
            href="/sinusitis"
            className="inline-flex items-center justify-center text-center px-5 py-6 rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            VER MÁS INFORMACIÓN
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

        {/* OTROS PROCEDIMIENTOS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Otros Procedimientos Quirúrgicos
          </h3>
          <ul className="space-y-1 text-gray-700">
            <li>➢ Endoscopía para Sinusitis</li>
            <li>➢ Cirugía Antirronquido</li>
            <li>➢ Cirugía Microscópica de Laringe</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
