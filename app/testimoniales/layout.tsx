import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Jaime Lumbán — Testimonios y Resultados de Rinoplastia",
  description:
    "Ve el video completo de los resultados e historia de la paciente del Dr. Lumbán, testimonios reales y resultados con el mejor otorrino en Tijuana.",
  keywords: [
    "Dr. Jaime Lumbán",
    "Testimonios cirugía de nariz",
    "Testimonios rinoplastia",
    "Resultados rinoplastia",
    "Dr. Lumbán opiniones",
    "Cómo se ve una rinoplastia",
    "Resultados de rinoplastias en Tijuana",
    "Antes y después de una rinoplastia",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
