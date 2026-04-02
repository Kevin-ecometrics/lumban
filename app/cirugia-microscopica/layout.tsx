import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cirugía y tratamiento de Cuerdas Vocales | Tijuana",
  description:
    "Si tienes ronquera por más de 3 semanas, podrías necesitar evaluación especializada. Cirugía microscópica de laringe y sus opciones con el Dr. Lumbán ",
  keywords: [
    "Cambios en la voz",
    "Debilidad vocal",
    "Tumores",
    "Cuerdas vocales",
    "Cáncer de garganta",
    "Otorrinolaringólogo",
    "Dr. Lumbán",
    "Quistes laríngeos",
    "Pólipos",
    "Nódulos",
    "Enfermedades de las cuerdas vocales",
    "Cirugía microscópica de laringe",
    "Lesiones de las cuerdas vocales",
    "Tratamiento para cuerdas vocales sin cirugía y cirugía de las cuerdas vocales",
    "¿Cómo es una cirugía de cuerdas vocales?",
    "Dolor al hablar o ronquera",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
