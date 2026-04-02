import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificaciones y reconocimiento del Dr.Lumbán otorrino en Tijuana ",
  description:
    "Las técnicas más innovadoras en rinoplastia y otorrinolaringología garantizan la precisión y excelencia que nuestros pacientes merecen",
  keywords: [
    "Otorrinolaringólogo",
    "Dr. Lumbán ",
    "Otorrinolaringólogo en Tijuana",
    "El mejor otorrinolaringologo en Tijuana",
    "Tecnicas avanzadas rinoplastia ",
    "Tecnicas avanzadas en otorrinolaringologia",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
