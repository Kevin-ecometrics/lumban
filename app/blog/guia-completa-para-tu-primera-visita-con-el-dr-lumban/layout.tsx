import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía completa para tu primera visita con el Dr. Lumbán │Tijuana ",
  description:
    "¿Molestias en oído, nariz o garganta? Conoce qué esperar en tu primera consulta otorrinolaringológica y las señales de alerta.Agenda aquí.",
  keywords: [
    "Dr. Lumbán",
    "Otorrino",
    "Otorrinolaringólogo",
    "Rio Medica",
    "Consulta en Tijuana ",
    "primera consulta otorrinolaringológica ",
    "Ronquera prolongada  ",
    "Dolor de garganta recurrente  ",
    "Ronquidos fuertes  ",
    "Dificultad para respirar por la nariz  ",
    "doloren los oídos ",
    "Mareo y  vértigo  ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
