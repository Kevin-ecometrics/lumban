import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sinusitis Surgery | Dr. Jaime Lumbán - ENT Specialist in Tijuana",
  description:
    "Endoscopic sinus surgery for chronic sinusitis. Minimally invasive procedure with no external scars. Regain your breathing with Dr. Lumbán.",
  keywords: [
    "Sinusitis surgery",
    "Endoscopic sinus surgery",
    "Chronic sinusitis treatment",
    "FESS surgery",
    "Balloon sinuplasty",
    "Nasal polypectomy",
    "Nasal polyp surgery",
    "Dr. Jaime Lumbán sinusitis",
    "Definitive sinusitis treatment",
    "Nasal congestion surgery",
    "Recurrent sinus infections",
  ],
};

export default function SinusitisSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
