import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico y  tratamiento integral  para alergias en Tijuana ",
  description:
    "Estornudos, secreción nasal y congestión pueden ser señales de alergia no diagnosticada o mal controlada. Agenda tu valoración con el Dr. Lumbán. ",
  keywords: [
    "Alergias",
    "Tratamientos para la alergia ",
    "Como diferenciar alergia, resfriando o gripe ",
    "Diagnóstico y tratamiento para la alergia ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
