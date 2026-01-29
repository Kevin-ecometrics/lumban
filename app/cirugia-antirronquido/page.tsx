"use client";

import React from "react";

export default function CirugiaAntirronquidoPage() {
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
          <h2 className="text-3xl font-semibold">Cirugía Antirronquido</h2>

          <p>
            El <strong>ronquido</strong> puede afectar la calidad del sueño y la
            salud general. En muchos casos se asocia con obstrucción de la vía
            aérea superior, vibración del paladar blando o aumento del tejido
            faríngeo.
          </p>

          <p>
            Cuando el ronquido es persistente o se acompaña de pausas
            respiratorias, es importante realizar una evaluación completa para
            descartar <strong>apnea del sueño</strong> y definir el tratamiento
            adecuado.
          </p>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Diagnóstico y Evaluación</h2>

          <p>
            El Dr. Lumbán realiza una evaluación integral de la vía aérea
            superior, incluyendo historia clínica, examen físico y estudios
            especializados como la <strong>nasofibroscopía</strong>.
          </p>

          <p>
            En algunos casos se solicita una <strong>polisomnografía</strong>
            para medir la calidad del sueño y cuantificar la presencia de apnea
            obstructiva.
          </p>
        </div>

        {/* TRATAMIENTO */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Opciones de Tratamiento</h2>

          <h3 className="text-2xl font-medium">Tratamiento Conservador</h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Control de peso y hábitos de sueño</li>
            <li>Evitar alcohol y sedantes por la noche</li>
            <li>Tratamiento de alergias y congestión nasal</li>
            <li>Uso de dispositivos orales seleccionados</li>
          </ul>

          <p>
            El manejo se individualiza según la anatomía del paciente y la
            gravedad de los síntomas.
          </p>
        </div>

        {/* PROCEDIMIENTOS */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Procedimientos y Cirugía</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Cirugía de paladar blando (uvulopalatoplastia)</li>
            <li>Reducción de amígdalas o adenoides</li>
            <li>Corrección de tabique nasal (septoplastia)</li>
            <li>Tratamiento de cornetes nasales</li>
          </ul>
        </div>

        {/* CIRUGÍA */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Procedimiento Quirúrgico</h2>

          <p>
            La cirugía antirronquido se planifica con base en la zona de mayor
            obstrucción. El objetivo es ampliar la vía aérea y disminuir la
            vibración de los tejidos.
          </p>

          <p>
            Dependiendo del caso, el procedimiento puede ser ambulatorio y con
            una recuperación controlada.
          </p>
        </div>

        {/* RECUPERACIÓN */}
        <div className="space-y-6 text-gray-700 max-w-4xl">
          <h2 className="text-3xl font-semibold">Recuperación y Resultados</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Mejoría progresiva del ronquido</li>
            <li>Reposo relativo durante la primera semana</li>
            <li>Control de molestias con medicación indicada</li>
            <li>Seguimiento clínico para evaluar resultados</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            ¿Dudas sobre este procedimiento?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Puede contactar al Dr. Lumbán por teléfono, correo electrónico o
            solicitar una cita para resolver todas sus dudas.
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
              El Dr. Lumbán cuenta con amplia experiencia en
              otorrinolaringología, ofreciendo atención médica de calidad y
              trato humano.
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
