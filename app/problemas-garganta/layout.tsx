import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dolor y enfermedades de garganta síntomas y tratamiento | Tijuana ",
  description:
    "Encuentra las principales causas de dolor, infecciones y padecimientos de garganta con el Dr. Lumbán para soluciones integrales  en niños y adultos. ",
  keywords: [
    "Amigdalitis ",
    "Faringitis",
    "Cáncer de garganta ",
    "Dolor de garganta ",
    "Dolor de garganta común ",
    "Crup ",
    "Dr. Lumbán ",
    "Enfermedades  de la garganta ",
    "Enfermedades de la garganta causas y tratamiento ",
    "Problemas de la Garganta ",
    "Factores de riesgo de cáncer de garganta ",
    "Síntomas y tratamiento del dolor de garganta  ",
    "Enfermedades respiratorias en niños",
    "Padecimientos de Garganta ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
