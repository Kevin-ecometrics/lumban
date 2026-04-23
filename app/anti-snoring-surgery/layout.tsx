import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti‑snoring Surgery with Dr. Jaime Lumbán in Tijuana",
  description:
    "Looking for a solution to snoring? Recover your quality of rest. Learn about anti‑snoring surgery and improve your breathing and overall health today.",
  keywords: [
    "Snoring",
    "Uvulopalatopharyngoplasty",
    "Nasal valve plasty",
    "Septoplasty",
    "Turbinoplasty",
    "Anti‑snoring surgery",
    "Sleep disorders in Tijuana",
    "Types of surgery for snoring",
    "Diagnosis and evaluation of snoring",
    "Is anti‑snoring surgery the ideal for you?",
  ],
  alternates: {
    canonical: "https://drlumban.com/anti-snoring-surgery",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
