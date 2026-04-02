import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otorrinopediatrics Diagnosis and Treatment | Dr. Jaime Lumbán",
  description:
    "Evaluation of otitis, sleep apnea, allergic rhinitis, tube placement, and surgery in children and adolescents. Schedule an assessment.",
  keywords: [
    "Otorrinopediatrics",
    "Otitis",
    "Sleep apnea in children",
    "Ear tubes in children",
    "Allergic rhinitis in children",
    "Dr. Jaime Lumbán",
    "Tonsils and adenoids",
    "Symptoms of tonsillitis",
    "When to see an ENT for tonsils?",
    "Obstructive sleep apnea in children",
    "How to know if my child has an ear infection?",
    "Allergies and respiratory problems in children",
    "Differences between sinusitis and a cold in children",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
