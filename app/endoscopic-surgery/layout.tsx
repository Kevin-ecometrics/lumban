import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endoscopic Surgery for Sinusitis | Dr. Jaime Lumbán",
  description:
    "Endoscopic sinus surgery is a minimally invasive procedure used to treat chronic sinusitis that does not respond to medical treatment. Dr. Jaime Lumbán, with more than three decades of experience in otolaryngology, offers this surgical option to improve the quality of life of his patients. If you suffer from chronic sinusitis and have exhausted medical options, schedule a consultation to evaluate whether endoscopic surgery is suitable for you.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
