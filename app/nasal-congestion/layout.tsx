import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blocked nose and difficulty breathing | treatment in Tijuana.",
  description:
    "Constant congestion and looking for an effective and definitive treatment? Recover your respiratory health, schedule an evaluation with Dr. Lumbán.",
  keywords: [
    "Nasal congestion",
    "Blocked nose",
    "Respiratory problems",
    "Specialized treatment for blocked nose and respiratory problems",
    "Causes of Nasal Congestion",
    "Treatment for nasal congestion",
  ],
  alternates: {
    canonical: "https://drlumban.com/nasal-congestion",
  },
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
