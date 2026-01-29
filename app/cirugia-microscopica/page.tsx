"use client";

import React from "react";

export default function CirugiaMicroscopicaLaringePage() {
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
            Cirugía Microscópica de Laringe
          </h2>

          <p>
            La <strong>ronquera (disfonía)</strong> o el cambio en el sonido de
            la voz es un síntoma común. Con frecuencia se relaciona con
            inflamación por el uso excesivo de la voz o cambios de temperatura,
            y suele resolverse espontáneamente en menos de{" "}
            <strong>3 semanas</strong>.
          </p>

          <p>
            En algunos casos, los cambios en la voz pueden ser el primer síntoma
            de una condición más seria como debilidad vocal, tumores de las
            cuerdas vocales o incluso cáncer de garganta. Si la ronquera
            persiste por más de 3 semanas, se recomienda una evaluación por un
            médico otorrinolaringólogo.
          </p>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Diagnóstico y Evaluación</h2>

          <p>
            El Dr. Lumbán realiza <strong>laringoscopia</strong> para
            diagnosticar y tratar los trastornos de la voz, permitiendo observar
            las cuerdas vocales mediante un sistema de cámara.
          </p>

          <p>
            La evaluación comienza con una historia clínica completa y un examen
            físico detallado de cabeza y cuello. Posteriormente se examina la
            laringe con un laringoscopio de fibra óptica rígido o flexible, con
            anestesia local y mínimas molestias.
          </p>

          <p>
            Durante el estudio se evalúa la presencia de inflamación, debilidad
            y lesiones como nódulos, pólipos, quistes, cicatrices, hemorragias,
            papilomas y cáncer.
          </p>
        </div>

        {/* TRATAMIENTO */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Opciones de Tratamiento</h2>

          <h3 className="text-2xl font-medium">Tratamiento Conservador</h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Modificación del uso de la voz y estilo de vida</li>
            <li>Higiene vocal</li>
            <li>Reposo de la voz</li>
            <li>Ejercicios vocales</li>
          </ul>

          <p>
            El manejo suele realizarse en conjunto entre el Otorrinolaringólogo
            y, en algunos casos, un Foniatra o Terapeuta de la Voz.
          </p>
        </div>

        {/* PROCEDIMIENTOS */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Procedimientos y Cirugía</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Inyección de cuerdas vocales con BOTOX</li>
            <li>Extirpación de quistes, pólipos o nódulos</li>
            <li>Biopsia de lesiones sospechosas</li>
            <li>Eliminación de papilomas</li>
            <li>Tratamiento de edema por tabaquismo</li>
            <li>Escisión de lesiones pre-cancerosas o cancerosas</li>
          </ul>
        </div>

        {/* CIRUGÍA */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
          <h2 className="text-3xl font-semibold">Procedimiento Quirúrgico</h2>

          <p>
            La cirugía de las cuerdas vocales se realiza mediante una
            <strong> micro-laringoscopia</strong> bajo anestesia general. El
            paciente permanece completamente dormido mientras se examinan las
            cuerdas vocales con ayuda de un microscopio.
          </p>

          <p>
            Se utilizan instrumentos microscópicos de alta precisión y, en
            algunos casos, un láser de CO₂ para extirpar o tratar el tejido
            afectado.
          </p>
        </div>

        {/* RECUPERACIÓN */}
        <div className="space-y-6 text-gray-700 max-w-4xl">
          <h2 className="text-3xl font-semibold">Recuperación y Resultados</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>La mayoría de las cirugías son ambulatorias</li>
            <li>Reposo vocal limitado después del procedimiento</li>
            <li>Retorno al trabajo aproximadamente en 1 semana</li>
            <li>Mejoría progresiva de la voz durante varias semanas</li>
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
