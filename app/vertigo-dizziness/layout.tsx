import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertigo and dizziness assessment and diagnosis in Tijuana",
  description:
    "Vertigo and dizziness are not normal symptoms. An evaluation with Dr. Lumbán allows you to identify the cause and provide effective treatment.",
  keywords: [
    "Vertigo",
    "Dizziness",
    "Balance disorders: vertigo and dizziness",
    "What is vertigo?",
    "Types of vertigo",
    "What is dizziness?",
    "Symptoms of a balance disorder",
    "Common causes of vertigo and dizziness",
    "Otolaryngologic assessment",
  ],
  alternates: {
    canonical: "https://drlumban.com/vertigo-dizziness",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
