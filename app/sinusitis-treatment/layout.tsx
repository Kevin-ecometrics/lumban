import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sinusitis Treatment in Tijuana | Chronic Sinusitis Care",
  description:
    "Take back your breathe. If conventional treatments haven't worked, it's time for an evaluation with Dr. Lumbán.",
  keywords: [
    "Sinusitis",
    "Acute and chronic sinusitis",
    "Sinusitis causes",
    "Best sinusitis treatment",
    "Sinusitis symptoms",
    "Sinusitis diagnosis",
    "Sinusitis treatment options",
    "Sinusitis treatment Tijuana",
    "Chronic sinusitis Tijuana",
  ],
  alternates: {
    canonical: "https://drlumban.com/sinusitis-treatment",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}