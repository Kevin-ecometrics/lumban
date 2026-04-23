import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Dr. Lumban El Rio Medica | Schedule your appointment",
  description:
    "Visit our top-tier facilities in Tijuana for otolaryngology consultation and specialized rhinoplasty.",
  keywords: ["Otolaryngology Office", "Río Médica Building"],
  alternates: {
    canonical: "https://drlumban.com/facilities",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
