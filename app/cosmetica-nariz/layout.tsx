import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rinoplasia estética y funcional con el Dr. Jaime Lumbán en Tijuana ",
  description:
    "¿Pensando en una rinoplastia? Descubre cómo mejorar la forma de tu nariz y tu armonía facial  con un experto en resultados naturales. ",
  keywords: [
    "Cirugía estética de nariz",
    "Rinoplastia",
    "Dr. Jaime Lumbán",
    "Reducción joroba nasal",
    "Rinoplastia estética",
    "Rinoplastia funcional",
    "Rinoplastia abierta",
    "Rinoplastia cerrada",
    "Rinoplastia ultrasónica",
    "Rinoplastia sin tapones",
    "Rinoplastia de revisión",
    "Cirugía estética y funcional de la nariz",
    "Tipos de rinoplastia",
    "¿Qué tipo de rinoplastia es mejor para ti?",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
