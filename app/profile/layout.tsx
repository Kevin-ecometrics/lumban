import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Dr. Jaime Lumbán, Otolaryngologist in Tijuana",
  description:
    "With over 30 years of experience, Dr. Lumbán combines medical precision and minimally invasive surgery, treating patients from Mexico and the U.S.",
  keywords: [
    "Otorhinolaryngology",
    "Rhinoplasty",
    "Minimally invasive surgery",
    "Nose aesthetic surgery",
    "Rhinoplasty in Tijuana",
    "Specialist in ears, nose and throat",
    "Otorhinolaryngology consultation",
    "Otorhinolaryngologist for children and adults",
    "Comprehensive otorhinolaryngology consultation for children, adults and elderly",
    "Ear, nose and throat conditions",
    "Aesthetic and functional nose surgery in Tijuana",
  ],
  alternates: {
    canonical: "https://drlumban.com/profile",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
