import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hearing loss and deafness: diagnosis and treatment",
  description:
    "Discover the warning signs of hearing loss, its possible pathologies, and the importance of an accurate diagnosis with an ear specialist.",
  keywords: [
    "Hearing Loss",
    "Types of Hearing Loss",
    "Causes of Hearing Loss",
    "Ear infections",
    "Earwax buildup",
    "How to know if I'm losing hearing?",
    "How to care for your ears?",
  ],
  alternates: {
    canonical: "https://drlumban.com/hearing-loss",
  },
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
