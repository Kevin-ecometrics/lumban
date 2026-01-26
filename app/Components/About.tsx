// components/YourwareStory.tsx
import React from "react";

const YourwareStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Columna de imagen - IZQUIERDA */}
          <div className="lg:w-5/12 flex justify-center items-start mt-8">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png"
                  alt="Dr. Jaime Lumban - Especialista en Otorrinolaringología"
                  className="w-full h-auto object-cover"
                />
                {/* Lista de valores adicionales */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                    Nuestros Compromisos:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        Excelencia médica con los más altos estándares de
                        calidad
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        Tecnología de vanguardia para diagnósticos precisos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        Atención personalizada y tiempo dedicado a cada paciente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>
                        Disponibilidad inmediata para consultas y seguimiento
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de texto - DERECHA */}
          <div className="lg:w-7/12">
            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-10 lg:mb-14 leading-tight">
              Nuestra Filosofía de{" "}
              <span className="italic font-serif">Atención</span>
            </h1>

            {/* Contenido de texto */}
            <div className="space-y-7 text-gray-800">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                En nuestra práctica médica, nos dedicamos a superar las
                expectativas de cada paciente a través de un servicio
                incomparable y una atención meticulosa a los detalles. Nos
                esforzamos por alcanzar los más altos estándares de excelencia
                en el campo de la otorrinolaringología.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                Proporcionamos la máxima calidad de atención médica, utilizando
                la mejor tecnología actual disponible. Tomamos el tiempo
                necesario para entender verdaderamente las preocupaciones y
                metas de salud de cada paciente, creando un plan de tratamiento
                personalizado.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-light">
                Estamos disponibles inmediatamente para consultas y mantenemos
                una actualización constante con las técnicas más avanzadas e
                innovaciones de vanguardia. Valoramos el tiempo de nuestros
                pacientes y nos comprometemos a ofrecer una experiencia médica
                agradable y satisfactoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourwareStory;
