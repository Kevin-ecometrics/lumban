import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Cord Surgery and Treatment | Tijuana",
  description:
    "If you have hoarseness for more than 3 weeks, you may need specialized evaluation. Microscopic laryngeal surgery and its options with Dr. Lumbán",
  keywords: [
    "Voice changes",
    "Vocal weakness",
    "Tumors",
    "Vocal cords",
    "Throat cancer",
    "Otolaryngologist",
    "Dr. Lumbán",
    "Laryngeal cysts",
    "Polyps",
    "Nodules",
    "Vocal cord diseases",
    "Microscopic laryngeal surgery",
    "Vocal cord injuries",
    "Treatment for vocal cords without surgery and surgery of the vocal cords",
    "What is a vocal cord surgery like?",
    "Pain when speaking or hoarseness",
  ],
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
