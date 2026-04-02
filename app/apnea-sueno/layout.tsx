import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Síntomas y Tratamiento de la Apnea de Sueño en Tijuana ",
  description:
    "¿Roncas o sientes fatiga diurna? Podría ser apnea del sueño. Conoce los riesgos.Recupera tu energía y protege tu corazón con el Dr. Lumbán. ",
  keywords: [
    "Dr. Lumbán",
    "Apnea del sueño ",
    "Apnea central del sueño  ",
    "Tipos de apnea del sueño ",
    "Apnea obstructiva del sueño",
    "riesgos de la apnea de sueño",
    "Razones para tratar la apnea del sueño",
    " Tratamiento para apnea del sueño",
    "Apnea obstructiva del sueño en los niños",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
