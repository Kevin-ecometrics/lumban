import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pérdida de audición y sordera diagnóstico y tratamiento ",
  description:
    "Descubre los signos de alarma ante la pérdida de audición, sus posibles patologías y la importancia de un diagnóstico preciso con un especialista en oído ",
  keywords: [
    "Pérdida de Audición",
    "Tipos de Pérdida Auditiva ",
    "Causas   de la pérdida auditiva ",
    "Infecciones del oído",
    "Acumulación de cera en el oído ",
    "¿Cómo saber si estoy perdiendo la audición? ",
    "¿Cómo cuidar tus oídos? ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
