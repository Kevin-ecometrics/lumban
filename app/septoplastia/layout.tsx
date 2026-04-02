import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septoplastia para tabique desviado en Tijuana ",
  description:
    "Si buscas mejorar tu respiración y calidad de sueño te invitamos a agendar una valoración para septoplastia con el Dr. Lumbán otorrinolaringólogo. ",
  keywords: [
    "Septoplastia",
    "Rinoplastia",
    "Corrección del tabique ",
    "tabique desviado",
    "Síntomas de un tabique desviado ",
    "¿En qué consiste una septoplastia? ",
    "Beneficios de la septoplastia",
    "Diferencia entre septoplastia y rinoplastia  ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
