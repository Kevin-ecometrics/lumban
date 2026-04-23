import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Symptoms and Treatment of Sleep Apnea in Tijuana",
  description:
    "Do you snore or feel daytime fatigue? It could be sleep apnea. Know the risks. Recover your energy and protect your heart with Dr. Lumbán.",
  keywords: [
    "Dr. Lumbán",
    "Sleep apnea",
    "Central sleep apnea",
    "Types of sleep apnea",
    "Obstructive sleep apnea",
    "risks of sleep apnea",
    "Reasons to treat sleep apnea",
    "Treatment for sleep apnea",
    "Obstructive sleep apnea in children",
  ],
  alternates: {
    canonical: "https://drlumban.com/sleep-apnea",
  },
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
