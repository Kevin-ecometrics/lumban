import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Cirugía Antirronquidos con el Dr. Jaime Lumbán en Tijuana",
  description:
    " ¿Buscas solución al ronquido? Recupera tu calidad de descanso. Conoce la cirugía antirronquidos  y mejora tu respiración y salud general hoy mismo. ",
  keywords: [
    "Ronquido",
    "Uvulopalatofaringoplastia",
    "Valvuloplastia nasal",
    "Septoplastia",
    "Reducción de cornetes",
    "Cirugía antirronquidos",
    "Trastornos del sueño en Tijuana",
    "Tipos de cirugía para el ronquido",
    "Diagnóstico y evaluación de ronquidos",
    "¿La cirugía antirronquidos es la ideal para ti?",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
