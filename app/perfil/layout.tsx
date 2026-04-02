import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce al Dr. Jaime Lumbán Otorrinolaringólogo en Tijuana ",
  description:
    "Más de 30 años  de experiencia, el Dr. Lumbán combina precisión médica y cirugía mínimamente invasiva , atendiendo pacientes de México y U.S.A. .",
  keywords: [
    "Otorrinolaringología",
    "Rinoplastia",
    "Cirugía mínimamente invasiva",
    "Cirugía estética de nariz",
    "Rinoplastia en Tijuana",
    "Especialista en oídos, nariz y garganta",
    "Consulta otorrinolaringológica",
    "Otorrinolaringólogo para niños y adultos",
    "Consulta otorrinolaringológica integral para niños, adultos y adultos mayores",
    "Padecimientos de oído, nariz y garganta",
    "Cirugía estética y funcional de nariz en Tijuana",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
