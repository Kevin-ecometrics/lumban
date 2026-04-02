import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cirugía Endoscópica para Sinusitis | Dr. Jaime Lumbán",
  description:
    "La cirugía endoscópica de los senos paranasales es un procedimiento mínimamente invasivo que se utiliza para tratar la sinusitis crónica que no responde al tratamiento médico. El Dr. Jaime Lumbán, con más de tres décadas de experiencia en otorrinolaringología, ofrece esta opción quirúrgica para mejorar la calidad de vida de sus pacientes. Si sufres de sinusitis crónica y has agotado las opciones médicas, agenda una consulta para evaluar si la cirugía endoscópica es adecuada para ti.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
