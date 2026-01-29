"use client";

import React from "react";

export default function RonquidosPage() {
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
          <h2 className="text-3xl font-semibold">Acerca de los Ronquidos</h2>
          <p>
            El ronquido es un sonido producido por las vibraciones de los
            tejidos de la nariz y la garganta durante la respiración en el
            sueño. Es más común en hombres que en mujeres y puede aumentar con
            la edad.
          </p>
          <p>
            Durante el sueño, el aire que pasa por áreas estrechas en la
            garganta, nariz o boca hace vibrar los tejidos circundantes,
            produciendo el ronquido. Es un problema muy común que afecta la
            calidad de sueño de la persona que ronca y de quienes duermen cerca.
          </p>
        </div>

        {/* DATOS INTERESANTES */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">
            Datos Interesantes acerca del Ronquido
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Una de cada cuatro personas tiene ronquido crónico que no puede
              dejar por sí sola.
            </li>
            <li>
              El ronquido crónico puede tensar relaciones con compañeros de
              cama.
            </li>
            <li>
              En promedio, el compañero de una persona que ronca pierde una hora
              de sueño cada noche.
            </li>
            <li>La privación de sueño puede causar irritabilidad.</li>
            <li>
              El ronquido puede indicar un problema más grave: apnea obstructiva
              del sueño (AOS).
            </li>
            <li>
              Puede ser mejorado o eliminado en la mayoría de las personas con
              procedimientos sencillos en consultorio.
            </li>
          </ul>
        </div>

        {/* CAUSAS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Causas</h3>
          <p>
            Durante el sueño, los músculos del cuerpo, incluyendo los de la
            garganta, se relajan. Esto puede causar que el tejido flácido o
            excesivo vibre al pasar el aire, produciendo el ronquido. Las zonas
            afectadas incluyen la nariz, paladar blando, úvula y/o amígdalas. El
            Dr. Lumbán trabajará con usted para determinar la causa exacta y el
            tratamiento más adecuado.
          </p>
        </div>

        {/* SÍNTOMAS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Síntomas</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Somnolencia diurna</li>
            <li>Energía baja</li>
            <li>Dificultad para concentrarse</li>
            <li>Disminución de la productividad</li>
            <li>Latido irregular del corazón</li>
            <li>Dolor de garganta</li>
            <li>Irritabilidad y cambios de humor</li>
            <li>Relaciones tensas</li>
          </ul>
        </div>

        {/* TRATAMIENTOS */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
          <h3 className="text-2xl font-medium">Tratamientos</h3>

          <h4 className="text-xl font-medium">Tratamiento no Quirúrgico</h4>

          <h5 className="text-lg font-medium">Cambios de Comportamiento</h5>
          <ul className="list-disc list-inside space-y-2">
            <li>Pérdida de peso en caso de sobrepeso</li>
            <li>Evitar alcohol o medicamentos sedantes</li>
            <li>Dejar de fumar</li>
            <li>Cambiar posiciones para dormir</li>
          </ul>

          <h5 className="text-lg font-medium">Dispositivos Dentales</h5>
          <p>
            Dispositivos que mantienen la mandíbula hacia adelante, útiles en
            casos leves o cuando los cambios de comportamiento no son
            suficientes.
          </p>

          <h5 className="text-lg font-medium">CPAP</h5>
          <p>
            La presión positiva nasal continua (CPAP) evita el estrechamiento de
            la vía aérea durante la respiración, manteniendo la presión y flujo
            de aire constantes.
          </p>

          <h4 className="text-xl font-medium">Tratamiento Quirúrgico</h4>
          <p>
            El objetivo es mejorar el paso de aire por la nariz. Puede incluir
            corrección de anomalías anatómicas, desviación del tabique
            (septoplastía), valvuloplastía o cauterización de cornetes.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl font-semibold">¿Problemas de Ronquidos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deje su salud en manos expertas como las del Dr. Lumbán. Contáctelo
            enviando un mensaje o por teléfono.
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
