import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nasal Obstruction | Allergies | Malformation | Treatment Tijuana",
  description:
    "Do you feel like you're not breathing well? A timely evaluation with Dr. Lumbán can prevent more serious complications and improve your breathing.",
  keywords: [
    "Nasal Obstruction",
    "Rhinitis and Sinusitis",
    "Inflamed Adenoids",
    "Nasal Polyps",
    "Solutions to Improve Your Breathing",
    "Causes of Nasal Obstruction",
    "Treatment for Nasal Obstruction",
    "When Should You See an ENT?",
  ],
  alternates: {
    canonical: "https://drlumban.com/nasal-obstruction",
  },
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
