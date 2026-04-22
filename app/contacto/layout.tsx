import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Dr. Jaime Lumbán - Otorrinolaringólogo en Tijuana",
  description:
    "Agenda tu consulta con el Dr. Jaime Lumbán, especialista en oídos, nariz y garganta en Tijuana. Resuelve tus dudas sobre rinoplastia, sinusitis, apnea del sueño y más.",
  keywords: [
    "Contacto Dr. Lumbán",
    "Agendar cita otorrinolaringólogo Tijuana",
    "Consultorio Dr. Lumbán",
    "Teléfono Dr. Lumbán",
    "Cita rinoplastia Tijuana",
    "Otorrinolaringólogo Tijuana contacto",
    "Agendar consulta especialista nariz",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}