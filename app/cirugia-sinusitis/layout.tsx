import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cirugía de Sinusitis | Dr. Jaime Lumbán - Otorrinolaringólogo en Tijuana",
  description:
    "Cirugía endoscópica de sinusitis para tratar la sinusitis crónica. Procedimiento mínimamente invasivo sin cicatrices externas. Recupera tu respiración con el Dr. Lumbán.",
  keywords: [
    "Cirugía de sinusitis",
    "Cirugía endoscópica de senos paranasales",
    "Sinusitis crónica tratamiento",
    "CENS cirugía",
    "FESS cirugía",
    "Sinuplastia con balón",
    "Polipectomía nasal",
    "Cirugía de pólipos nasales",
    "Dr. Jaime Lumbán sinusitis",
    "Tratamiento definitivo sinusitis",
    "Cirugía nariz tapada",
    "Infecciones sinusales recurrentes",
  ],
};

export default function SinusitisSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
