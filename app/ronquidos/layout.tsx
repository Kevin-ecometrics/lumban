import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especialista en Ronquidos y Apnea del Sueño en Tijuana. ",
  description:
    "Jaime Lumbán  otorrino en Tijuana, ofrece diagnóstico preciso y tratamiento integral para ronquidos y apnea del sueño a niños y adultos. ",
  keywords: [
    "Salud respiratoria ",
    "Ronquidos causas ",
    "Ronquido riesgos ",
    "Ronquido tratamiento ",
    "Ronquido",
    "apnea obstructiva del sueño",
    "Dr. Jaime Lumbán",
    "Otorrinolaringólogo en Tijuana ",
    "Tratamiento no quirúrgico para ronquido ",
    "Tratamiento quirúrgico para ronquido",
    "diagnóstico y tratamiento para ronquido ",
    "Tratamiento apnea obstructiva del sueño ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
