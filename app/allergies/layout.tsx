import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Diagnosis and Treatment for Allergies in Tijuana",
  description:
    "Sneezing, runny nose, and congestion can be signs of undiagnosed or poorly controlled allergy. Schedule your evaluation with Dr. Lumbán.",
  keywords: [
    "Allergies",
    "Treatments for allergy",
    "How to differentiate allergy, cold or flu",
    "Diagnosis and treatment for allergy",
  ],
  alternates: {
    canonical: "https://drlumban.com/allergies",
  },
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
