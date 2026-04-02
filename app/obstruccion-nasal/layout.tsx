import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obstrucción nasal | Alergias | Malformación | Tratamiento Tijuana ",
  description:
    "¿Sientes que no respiras bien? Una valoración oportuna con el Dr. Lumbán puede prevenir complicaciones mayores y mejorar tu respiración. ",
  keywords: [
    "Obstrucción Nasal ",
    "Rinitis y Sinusitis ",
    "Adenoides inflamados ",
    "Pólipos nasales ",
    "Soluciones para mejorar tu respiración ",
    "Causas de la obstrucción nasal ",
    "Tratamiento para obstrucción nasal ",
    "¿Cuándo debes ir al otorrinolaringólogo? ",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
