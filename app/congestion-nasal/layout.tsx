import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nariz tapada y dificultad para respirar | tratamiento en Tijuana. ",
  description:
    "¿Congestión constante y buscas un tratamiento eficaz y definitivo? Recuperar tu salud respiratoria,  agenda una valoración con el Dr. Lumbán ",
  keywords: [
    "Congestion nasal ",
    "Nariz tapada  ",
    "Problemas respiratorios ",
    "Tratamiento especializado para nariz tapada y problemas respiratorios ",
    "Causas de la Congestión Nasal ",
    "Tratamiento para congestion nasal ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
