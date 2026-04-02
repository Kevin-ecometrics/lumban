import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Disorders: Diagnosis and Treatment in Tijuana",
  description:
    "Do you feel your voice has changed or you have trouble speaking? Don’t let the problem worsen. Dr. Jaime Lumban specializes in restoring your voice.",
  keywords: [
    "Dr. Jaime Lumban",
    "Vocal nodules",
    "Vocal polyps",
    "Laryngitis",
    "Voice disorders",
    "Specialist in vocal health recovery",
    "Types of voice disorders",
    "Causes of voice disorders",
    "Diagnosis of voice disorders",
    "Can voice disorders be prevented?",
    "Specialized care for voice disorders in Tijuana",
  ],
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
