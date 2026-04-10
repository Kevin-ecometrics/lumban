import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Jaime Lumbán — Rhinoplasty Testimonials and Results",
  description:
    "Watch the full video of Dr. Lumbán's patient results and story, real testimonials and results with the best ENT specialist in Tijuana.",
  keywords: [
    "Dr. Jaime Lumbán",
    "Rhinoplasty testimonials",
    "Nose surgery testimonials",
    "Rhinoplasty results",
    "Dr. Lumbán reviews",
    "What does a rhinoplasty look like",
    "Rhinoplasty results in Tijuana",
    "Before and after rhinoplasty",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
