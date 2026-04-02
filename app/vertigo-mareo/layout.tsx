import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vértigo y mareo evaluación y diagnóstico en Tijuana",
  description:
    "El vértigo y el mareo no son síntomas normales. Una evaluación con el Dr. Lumbán permite identificar su causa y ofrecer un tratamiento efectivo. ",
  keywords: [
    "Vertigo",
    "Mareo",
    "Trastornos del equilibrio:  vértigo y mareo ",
    "¿Qué es el vértigo ? ",
    "Tipos de Vértigo ",
    "¿Qué es el mareo? ",
    "Síntomas de un trastorno del equilibrio ",
    "Causas frecuentes del vértigo y mareo ",
    "Evaluación otorrinolaringológica ",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
