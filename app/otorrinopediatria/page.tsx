"use client";

import React, { useState } from "react";

type AccordionItem = {
  question: string;
  answer: React.ReactNode;
};

const items: AccordionItem[] = [
  {
    question: "¿Cómo puedo saber si mi hijo tiene sinusitis?",
    answer: (
      <>
        <p>
          La sinusitis en los niños es diferente de la sinusitis en adultos. Los
          siguientes síntomas pueden indicar una infección en los senos en su
          hijo:
        </p>
        <ul className="list-disc list-inside my-2">
          <li>
            Escalofríos que duran de 10 a 14 días o fiebre leve a moderada.
          </li>
          <li>Moco espeso, de color amarillo-verde.</li>
          <li>
            Goteo post-nasal, que a veces se manifiesta como un dolor de
            garganta, tos, mal aliento y/o vómitos.
          </li>
          <li>Dolor de cabeza, por lo general en niños de 6 años o más.</li>
          <li>Irritabilidad.</li>
          <li>Energía baja.</li>
          <li>Hinchazón alrededor de los ojos.</li>
        </ul>
        <p>
          Los niños pequeños tienen sistemas inmunitarios inmaduros y son más
          propensos a las infecciones de la nariz, los senos paranasales y los
          oídos, sobre todo en los primeros años de vida. Estas son causadas con
          mayor frecuencia por infecciones virales (resfriados) y pueden ser
          agravadas por alergias. Sin embargo, cuando su hijo permanece enfermo
          más allá de los habituales siete a diez días, es probable que tenga
          una infección llamada sinusitis.
        </p>
        <p>
          Usted puede reducir el riesgo de infecciones de la nariz de su hijo
          mediante la reducción de la exposición a alergias ambientales
          conocidas y contaminantes como el humo del tabaco, la reducción del
          tiempo en la guardería y el tratamiento de la enfermedad de reflujo
          ácido del estómago.
        </p>
      </>
    ),
  },
  {
    question: "Cuando roncar no es tan lindo. Los niños y la apnea del sueño",
    answer: (
      <>
        <p>
          A menudo es lindo cuando los niños tratan de imitar a sus padres. Sin
          embargo, cuando se trata de los ronquidos, no es cosa de risa y es
          anormal en los niños. En realidad, los niños son versiones no más
          pequeñas de los adultos y el ronquido suele indicar un problema
          subyacente más grave, como la apnea obstructiva del sueño (AOS).
        </p>
        <p>
          Durante las etapas más profundas del sueño, los músculos se relajan
          permitiendo que las amígdalas se desplacen hacia el interior. En los
          niños con amígdalas agrandadas, esto bloquea la respiración y causa
          sueño interrumpido, resultando en agotamiento durante el día.
        </p>
        <p>
          Estudios recientes han demostrado que el rendimiento escolar se ve
          afectado significativamente, con trastornos de atención y problemas de
          conducta más evidentes en niños con AOS. Incluso los mejores alumnos
          sufren sin una buena noche de descanso.
        </p>
        <p>
          La solución comienza con una historia exacta de sueño. Los niños que
          roncan deben ser evaluados por un otorrinolaringólogo, sobre todo si
          tienen amígdalas agrandadas. Si se diagnostica AOS, la extirpación de
          amígdalas y adenoides es la primera línea de tratamiento. Técnicas
          como la radiofrecuencia permiten una recuperación rápida y mejoran
          calidad de sueño y crecimiento.
        </p>
      </>
    ),
  },
  {
    question: "¿Qué son los tubos de ventilación?",
    answer: (
      <>
        <p>
          Los tubos de ventilación son pequeños cilindros, de 1mm de diámetro,
          colocados a través del tímpano (membrana timpánica) para permitir que
          entre el aire en el oído medio. También se llaman tubos de
          timpanostomía, miringotomía o de descompresión. Pueden ser de
          plástico, metal o teflón, y algunos tienen revestimiento para reducir
          la posibilidad de infección.
        </p>
        <p>
          Hay dos tipos básicos de tubos: corto plazo (permanecen de 6 a 12
          meses antes de caer por sí solos) y largo plazo (más grandes, con
          bridas que los mantienen en su lugar por más tiempo, usualmente
          requieren extracción por un otorrinolaringólogo).
        </p>
      </>
    ),
  },
  {
    question: "¿Quién necesita de tubos de ventilación?",
    answer: (
      <>
        <p>
          Se recomiendan cuando un niño experimenta infecciones repetidas del
          oído medio (otitis media aguda) o pérdida auditiva por líquido
          persistente (otitis media con derrame). Esto puede afectar habla,
          equilibrio y audición.
        </p>
        <p>
          También se indican en casos de malformaciones del tímpano o trompa de
          Eustaquio, Síndrome de Down, paladar hendido o barotrauma. Cada año,
          más de medio millón de cirugías de tubo de oído se realizan en niños
          (la cirugía más común en la infancia), con edad promedio de 1 a 3
          años.
        </p>
        <p>
          Los tubos restauran la audición, reducen riesgo de futuras
          infecciones, mejoran comportamiento, sueño, habla y equilibrio.
        </p>
      </>
    ),
  },
  {
    question: "¿Cómo se insertan los tubos auditivos?",
    answer: (
      <>
        <p>
          La inserción se realiza mediante miringotomía, un procedimiento
          quirúrgico ambulatorio que consiste en una incisión de 1-2 mm en el
          tímpano. Se realiza bajo microscopio quirúrgico o láser. El tubo se
          coloca para mantener el agujero abierto y permitir la ventilación del
          oído medio.
        </p>
      </>
    ),
  },
  {
    question: "Cirugía de canal auditivo",
    answer: (
      <>
        <p>
          Se administra anestesia general ligera (gas hilarante) en niños
          pequeños; algunos mayores pueden tolerar sin anestesia. Se realiza
          miringotomía, se succiona líquido del oído medio y se coloca el tubo
          de ventilación. El procedimiento dura menos de 15 minutos.
        </p>
        <p>
          En algunos casos se recomienda la extracción del tejido adenoideo
          simultáneamente para reducir riesgo de infecciones recurrentes.
        </p>
      </>
    ),
  },
  {
    question: "¿Qué esperar después de esta cirugía?",
    answer: (
      <>
        <p>
          Tras la cirugía, los pacientes son monitoreados en recuperación y
          suelen ir a casa en pocas horas. Puede haber somnolencia,
          irritabilidad o náuseas por anestesia. La audición se restablece
          inmediatamente y los sonidos normales pueden parecer muy fuertes.
        </p>
        <p>
          Se proporcionan instrucciones postoperatorias específicas, incluyendo
          cuándo buscar atención inmediata. Para evitar bacterias, se puede
          recomendar mantener los oídos secos usando tapones durante baño o
          piscina. En actividades como buceo o agua sucia, la protección es
          necesaria; consulte con su médico.
        </p>
      </>
    ),
  },
];

export default function OtorrinoPediatria() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Otorrinopediatría</h1>
      <p className="mb-6">
        Conozca sobre diferentes enfermedades de nariz, oído y garganta en niños
      </p>
      <p className="mb-6">
        Los niños y adolescentes no deben confundirse con los adultos para el
        diagnóstico y tratamiento de enfermedades de Oído, Nariz y Garganta. La
        estatura, peso, sistema inmunológico y desarrollo físico/mental
        requieren cuidado especial.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Preguntas Importantes</h2>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="border rounded-md">
            <button
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center font-medium"
              onClick={() => toggle(idx)}
            >
              {item.question}
              <span>{openIndex === idx ? "-" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-3 bg-white">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
        <p>
          ¿Mi hijo tiene sinusitis? No dude en agendar una cita con el Dr.
          Lumbán, y él podrá responder todas sus dudas y diagnosticar
          correctamente a su hijo.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">
          Conozca sobre el Dr. Lumbán
        </h2>
        <p>
          El Dr. Lumbán tiene años de experiencia dentro del campo de la
          otorrinolaringología, prestando un servicio de calidad y trato amable.
        </p>
      </div>
    </div>
  );
}
