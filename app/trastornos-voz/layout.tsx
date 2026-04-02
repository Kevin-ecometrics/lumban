import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trastornos de la Voz: Diagnóstico y Tratamiento en Tijuana ",
  description:
    "¿Sientes que tu voz ha cambiado o te cuesta hablar? No deje que el problema avance. El Dr. Jaime Lumban se especializa en la recuperación de tu voz.",
  keywords: [
    "Dr. Jaime Lumbán",
    "Nódulos vocales",
    "Pólipos vocales",
    "Laringitis",
    "Trastornos de la voz",
    "Especialista en la recuperación de la salud vocal",
    "Tipos de trastornos vocales",
    "Causas de los trastornos de la voz",
    "Diagnóstico de los trastornos de la voz",
    "¿Se pueden prevenir los trastornos de la voz?",
    "Atención especializada en trastornos de la voz en Tijuana",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
