import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otorrinopediatría Diagnóstico y Tratamiento | Dr. Jaime Lumbán ",
  description:
    "Evaluación de otitis, apnea del sueño, rinitis alérgica, colocación de tubos y cirugía en niños y adolescentes. Agenda valoración. ",
  keywords: [
    "Otorrinopediatría",
    "Otitis",
    "Apnea sueño niños",
    "Tubos de oído niños",
    "Rinitis alérgica niños",
    "Dr. Jaime Lumbán",
    "Amígdalas y adenoides",
    "Síntomas de la amigdalitis",
    "¿Cuándo ir con el otorrino por amígdalas?",
    "Apnea obstructiva del sueño en niños",
    "¿Cómo saber si mi hijo tiene una infección de oídos?",
    "Alergias y problemas respiratorios en niños",
    "Diferencias entre sinusitis y resfriado en niños",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
