import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Jaime Lumbán — Otolaryngologist in Tijuana",
  description:
    "Certified otolaryngologist in Tijuana with over 23 years of experience. Specialist in ear, nose and throat. Professional and personalized care.",
  keywords: [
    "otolaryngologist",
    "rhinoplasty",
    "septoplasty",
    "otolaryngologist Tijuana",
    "ENT specialist Tijuana",
    "ENT consultation",
    "pediatric ENT Tijuana",
    "rhinoplasty Tijuana",
    "functional rhinoplasty Tijuana",
    "nose surgery Tijuana",
    "sinusitis treatment Tijuana",
    "vertigo specialist Tijuana",
    "sleep apnea specialist Tijuana",
    "snoring treatment Tijuana",
    "ENT specialist Tijuana",
    "nose surgeon Tijuana",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drlumban.com/en",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}