import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist in Snoring and Sleep Apnea in Tijuana.",
  description:
    "Jaime Lumbán, ENT in Tijuana, offers precise diagnosis and comprehensive treatment for snoring and sleep apnea to children and adults.",
  keywords: [
    "Respiratory health",
    "Causes of snoring",
    "Snoring risks",
    "Snoring treatment",
    "Snoring",
    "Obstructive sleep apnea",
    "Dr. Jaime Lumbán",
    "Otolaryngologist in Tijuana",
    "Non‑surgical treatment for snoring",
    "Surgical treatment for snoring",
    "Diagnosis and treatment for snoring",
    "Treatment for obstructive sleep apnea",
  ],
  alternates: {
    canonical: "https://drlumban.com/snoring",
  },
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
