import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Certifications and recognition of Dr. Lumbán ENT specialist in Tijuana",
  description:
    "The most innovative techniques in rhinoplasty and otolaryngology guarantee the precision and excellence that our patients deserve.",
  keywords: [
    "Otolaryngologist",
    "Dr. Lumbán",
    "Otolaryngologist in Tijuana",
    "The best otolaryngologist in Tijuana",
    "Advanced rhinoplasty techniques",
    "Advanced otolaryngology techniques",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
