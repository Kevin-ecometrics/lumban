import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Dr. Jaime Lumbán - Otolaryngologist in Tijuana",
  description:
    "Explore all available pages on Dr. Jaime Lumbán's website. Find information about surgical procedures, medical conditions, and contact details.",
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}