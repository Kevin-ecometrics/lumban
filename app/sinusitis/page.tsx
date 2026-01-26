"use client";

import React from "react";

export default function SinusitisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      {/* Título Principal */}
      <h1 className="text-3xl font-bold">Acerca de la Sinusitis</h1>
      <p className="text-lg font-medium">
        Tratamiento especializado para sinusitis aguda y crónica
      </p>

      {/* Introducción */}
      <p>
        La sinusitis es una de las condiciones médicas más comunes que requieren
        tratamiento anualmente en los Estados Unidos. En términos generales, la
        sinusitis se refiere a una inflamación de las cavidades de los senos, y
        se clasifica en la sinusitis aguda (síntomas de corta duración, en
        cualquier lugar de 1-12 semanas) y sinusitis crónica (síntomas de mayor
        duración, 12 semanas y más).
      </p>
      <p>
        Mientras que la inflamación del seno se piensa con mayor frecuencia de
        lo infecciosa (viral y bacteriana), la inflamación también puede ocurrir
        debido a procesos no infecciosos, como la alergia, tabaco o irritantes
        ambientales.
      </p>
      <p>
        El resfriado común es en realidad una rinosinusitis viral (nasal e
        inflamación sinusal), que los propios mecanismos inmunes del cuerpo
        típicamente resuelven en 7-10 días.
      </p>

      {/* Síntomas */}
      <h2 className="text-2xl font-semibold">Síntomas de la Sinusitis</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Congestión Nasal</li>
        <li>Secreción purulenta (amarillo o verde)</li>
        <li>Congestión</li>
        <li>Drenaje nasal</li>
        <li>Goteo post-nasal</li>
        <li>Tos</li>
        <li>Dolor de garganta</li>
      </ul>

      {/* Diagnóstico */}
      <h2 className="text-2xl font-semibold">Diagnóstico y Evaluación</h2>
      <p>
        La gran mayoría (98%) de la enfermedad rinosinusitis aguda es viral. El
        único indicador preciso de la transición de la rinosinusitis viral a una
        enfermedad bacteriana, es la duración de los síntomas. Como regla
        general, si los síntomas de la rinosinusitis son ni mejor ni peor
        después de 10-14 días, la infección bacteriana es más probable y los
        antibióticos están indicados.
      </p>
      <p>
        El Dr. Lumbán llevará a cabo una evaluación integral, que incluye una
        historia clínica detallada, examen ORL, y la endoscopia nasal. Este
        procedimiento se realiza fácilmente en el consultorio, con las mínimas
        molestias, y proporciona a nuestros médicos una evaluación detallada de
        la anatomía en la nariz, y el estado de inflamación.
      </p>

      {/* Opciones de tratamiento */}
      <h2 className="text-2xl font-semibold">Opciones de Tratamiento</h2>

      <h3 className="text-xl font-semibold">Tratamiento Médico</h3>
      <p>
        Cuando la inflamación sinusal no se borra por los propios mecanismos del
        cuerpo, o incluso con terapia antibiótica adecuada, entonces los
        síntomas persistirán y la terapia más intensiva puede ser indicada. Esto
        podría incluir cursos más largos de antibióticos, el uso concomitante de
        descongestionantes y mucolíticos, o posiblemente incluso esteroides
        anti-inflamatorios.
      </p>

      <h3 className="text-xl font-semibold">Evaluación Anatómica</h3>
      <p>
        Pueden detectarse anomalías anatómicas, como una desviación del tabique,
        pólipos nasales o sinusales, hinchazón o secreciones anormales. Estos
        hallazgos pueden ayudar a guiar la terapia y la respuesta al
        tratamiento. Imágenes TC se utilizan con criterio para evaluar
        completamente los senos, proporcionando información acerca de la
        magnitud y distribución de la inflamación en los senos nasales.
      </p>

      <h3 className="text-xl font-semibold">Cirugía Endoscópica de Senos</h3>
      <p>
        Para los pacientes cuya inflamación es refractaria y tiene poca
        respuesta al tratamiento médico, o que tienen una obstrucción
        significativa de la nariz y/o anormalidades anatómicas de los senos, la
        cirugía puede ser considerada. La cirugía de senos se realiza por vía
        endoscópica, dando prioridad a la preservación de la función del seno
        mientras se restaura el drenaje adecuado, conocida como Endoscopia
        Sinusal Funcional (CENS).
      </p>
      <p>
        Se realiza con más frecuencia bajo anestesia general, de forma
        ambulatoria (es decir, cirugía el mismo día). En algunos casos, se
        utilizan imágenes de TC en tecnología de orientación de imagen, lo que
        permite el seguimiento en tiempo real de los instrumentos quirúrgicos
        durante el procedimiento.
      </p>

      {/* Factores de riesgo */}
      <h2 className="text-2xl font-semibold">Factores de Riesgo Importantes</h2>
      <p>
        Si usted sufre de infecciones sinusales repetidas frecuentes, o si tiene
        síntomas verdaderamente crónicos que no responden a los tratamientos,
        por favor, haga una cita con el Dr. Lumbán para una evaluación completa.
        Se llevará a cabo una historia completa, una evaluación de la anatomía
        de la nariz y los senos paranasales, y se identificarán otros factores
        que pueden necesitar tratamiento, tales como:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Alergias</li>
        <li>Factores ambientales</li>
        <li>Deficiencia inmune</li>
        <li>Consumo de tabaco</li>
      </ul>
      <p>
        Los efectos nocivos del consumo de tabaco en las membranas nasales y
        senos paranasales no pueden ser exagerados.
      </p>

      {/* Sinusitis crónica */}
      <h2 className="text-2xl font-semibold">
        ¿Diagnosticado con Sinusitis Crónica?
      </h2>
      <p>
        Por medio de la cirugía endoscópica, el Dr. Lumbán puede ayudarle a
        mejorar su salud con el mínimo de dolor.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        VER MÁS INFORMACIÓN
      </button>

      {/* Dr. Lumbán */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">
          Conozca sobre el Dr. Lumbán
        </h2>
        <p className="mb-4">
          El Dr. Lumbán tiene años de experiencia dentro del campo de la
          otorrinolaringología, prestando un servicio de calidad y trato amable.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          VER PERFIL COMPLETO
        </button>
      </div>

      {/* Otros padecimientos */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">
          Otros Padecimientos de Nariz
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Septoplastía</li>
          <li>Sinusitis</li>
          <li>Congestión Nasal</li>
          <li>Obstrucción Nasal</li>
          <li>Alergias</li>
        </ul>
      </div>
    </div>
  );
}
