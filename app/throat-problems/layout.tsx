import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pain and throat diseases symptoms and treatment | Tijuana",
  description:
    "Find the main causes of throat pain, infections and throat ailments with Dr. Lumbán for comprehensive solutions in children and adults.",
  keywords: [
    "Tonsillitis",
    "Pharyngitis",
    "Throat cancer",
    "Sore throat",
    "Common sore throat",
    "Croup",
    "Dr. Lumbán",
    "Throat diseases",
    "Throat diseases causes and treatment",
    "Throat problems",
    "Risk factors for throat cancer",
    "Symptoms and treatment of sore throat",
    "Respiratory diseases in children",
    "Throat ailments",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
