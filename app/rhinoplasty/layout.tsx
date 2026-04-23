import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Aesthetic and Functional Rhinoplasty with Dr. Jaime Lumbán in Tijuana",
  description:
    "Thinking about a rhinoplasty? Discover how to improve the shape of your nose and facial harmony with an expert in natural results.",
  keywords: [
    "Nose aesthetic surgery",
    "Rhinoplasty",
    "Dr. Jaime Lumbán",
    "Nasal hump reduction",
    "Aesthetic rhinoplasty",
    "Functional rhinoplasty",
    "Open rhinoplasty",
    "Closed rhinoplasty",
    "Ultrasonic rhinoplasty",
    "Pinhole rhinoplasty",
    "Revision rhinoplasty",
    "Aesthetic and functional nose surgery",
    "Types of rhinoplasty",
    "Which type of rhinoplasty is best for you?",
  ],
  alternates: {
    canonical: "https://drlumban.com/rhinoplasty",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
