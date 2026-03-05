"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getRouteByKey } from "../i18n/routeMap";

interface CTASectionProps {
  translationKey?: string; // Opcional, por si quieres usar textos específicos
  showBorder?: boolean;
  className?: string;
  title?: string; // Título personalizado
  description?: string; // Descripción personalizada
  buttonText?: string; // Texto del botón personalizado
}

export default function CTASection({ 
  translationKey,
  showBorder = true,
  className = "",
  title,
  description,
  buttonText
}: CTASectionProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";

  // Determinar el título a mostrar
  const displayTitle = title || 
    (translationKey ? t(`${translationKey}.cta.titulo`) : t("global.cta.titulo"));

  // Determinar la descripción a mostrar
  const displayDescription = description || 
    (translationKey ? t(`${translationKey}.cta.descripcion`) : t("global.cta.descripcion"));

  // Determinar el texto del botón
  const displayButtonText = buttonText || 
    (translationKey ? t(`${translationKey}.cta.agenda`) : t("global.cta.agenda"));

  return (
    <section 
      className={`relative py-16 sm:py-24 bg-fixed bg-cover bg-center ${className}`} 
      style={{ backgroundImage: "url('/oficina.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6">
            {displayTitle}
          </h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
            {displayDescription}
          </p>
          
          <div className={`${showBorder ? 'border-t border-gray-500 pt-6 sm:pt-8 mt-6 sm:mt-8' : ''}`}>
            <div className="flex flex-col items-center gap-4 sm:gap-4 mb-6 sm:mb-8">
              <div className="text-xl sm:text-2xl font-bold space-y-3">
                <a 
                  href="tel:+526646842364" 
                  className="hover:underline block hover:text-blue-300 transition-colors text-lg sm:text-2xl"
                >
                  (664) 684-2364
                </a>
                <a 
                  href="tel:+526646388135" 
                  className="hover:underline block hover:text-blue-300 transition-colors text-lg sm:text-2xl"
                >
                  (664) 638-8135
                </a>
              </div>
              
              {/* Botón de Agendar Consulta con mismo estilo que números */}
              <Link
                href={getRouteByKey("contact", currentLang)}
                className="inline-block text-lg sm:text-xl font-bold hover:underline hover:text-blue-300 transition-colors mt-2"
              >
                {displayButtonText}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}