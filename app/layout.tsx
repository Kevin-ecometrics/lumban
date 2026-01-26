import type { Metadata } from "next";
import "./globals.css";
import FooterBase from "./Components/FooterReveal";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Dr. Jaime Lumbán — Otorrinolaringólogo en Tijuana",

  description:
    "El Dr. Jaime Lumbán, otorrinolaringólogo certificado en Tijuana con más de 23 años de experiencia. Especialista en oído, nariz y garganta. Atención profesional y personalizada.",

  keywords: [
    "otorrinolaringólogo Tijuana",
    "Dr Lumbán",
    "oídos",
    "nariz",
    "garganta",
    "cirugía nasal",
    "apnea",
    "sinusitis",
  ],

  authors: [
    {
      name: "Dr. Jaime Lumbán",
    },
  ],

  publisher: "Ecommetrica",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://drlumban.com/",
  },

  metadataBase: new URL("https://drlumban.com"),

  openGraph: {
    title: "Dr. Jaime Lumbán — Otorrinolaringólogo en Tijuana",
    description:
      "Otorrinolaringólogo certificado en Tijuana con más de 23 años de experiencia. Especialista en oído, nariz y garganta.",
    url: "https://drlumban.com/",
    siteName: "Dr. Jaime Lumbán",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <FooterBase />
      </body>
    </html>
  );
}
