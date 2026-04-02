import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encuentra al Dr. Lumban el Rio medica|Agenda tu consulta",
  description:
    "Visita nuestras instalaciones de primer nivel en Tijuana para consulta otorrinolaringológica y rinoplastia especializada. ",
  keywords: ["Consultorio de otorrinolaringología", "Edificio Río Médica "],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
