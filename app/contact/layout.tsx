import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dr. Jaime Lumbán - ENT Specialist in Tijuana",
  description:
    "Schedule your appointment with Dr. Jaime Lumbán, ear, nose and throat specialist in Tijuana. Get answers about rhinoplasty, sinusitis, sleep apnea and more.",
  keywords: [
    "Contact Dr. Lumbán",
    "Schedule ENT appointment Tijuana",
    "Rio Médica office",
    "Dr. Lumbán phone number",
    "Rhinoplasty appointment Tijuana",
    "ENT specialist Tijuana contact",
    "Nose specialist consultation",
  ],
  alternates: {
    canonical: "https://drlumban.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
