import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Guide for Your First Visit with Dr. Lumbán │Tijuana",
  description:
    "Experiencing ear, nose, or throat discomfort? Learn what to expect during your first ENT consultation and the warning signs. Book here.",
  keywords: [
    "Dr. Lumbán",
    "ENT",
    "Otolaryngologist",
    "Rio Medica",
    "Consultation in Tijuana",
    "first ENT consultation",
    "prolonged hoarseness",
    "recurrent sore throat",
    "loud snoring",
    "difficulty breathing through the nose",
    "ear pain",
    "dizziness and vertigo",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
