import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamiento para sinusitis aguda y crónica en Tijuana  ",
  description:
    "Vuelve a respirar con libertad. Si los tratamientos convencionales no han funcionado, es momento de una evaluación con el Dr. Lumbán ",
  keywords: [
    "Sinusitis",
    "Sinusitis aguda y crónica ",
    "Causas de sinusitis ",
    "El mejor tratamiento para sinusitis",
    "Síntomas de la sinusitis ",
    "Diagnóstico y evaluación de sinusitis ",
    "Opciones de tratamiento para sinusitis ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
