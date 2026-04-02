import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septoplasty for deviated septum in Tijuana",
  description:
    "If you want to improve your breathing and sleep quality, we invite you to schedule an evaluation for septoplasty with Dr. Lumbán, otolaryngologist.",
  keywords: [
    "Septoplasty",
    "Rhinoplasty",
    "Correction of the septum",
    "deviated septum",
    "Symptoms of a deviated septum",
    "What is a septoplasty?",
    "Benefits of septoplasty",
    "Difference between septoplasty and rhinoplasty",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
