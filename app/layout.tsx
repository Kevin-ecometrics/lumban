import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import FooterBase from "./Components/FooterReveal";
import Navbar from "./Components/Navbar";
import Providers from "./Providers";
import FacebookPixel from "./Components/FacebookPixel";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Jaime Lumbán",
  url: "https://drlumban.com",
  image: "https://drlumban.com/og-image.png",
  description:
    "Otorrinolaringólogo certificado en Tijuana con más de 23 años de experiencia. Especialista en oído, nariz y garganta, rinoplastia, cirugía endoscopic y tratamientos para sinusitis.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tijuana",
    addressRegion: "Baja California",
    addressCountry: "MX",
  },
  telephone: "+52-664-684-2364",
  email: "contacto@drlumban.com",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  sameAs: [
    "https://www.facebook.com/drlumban",
    "https://www.instagram.com/drlumban",
  ],
};

export const metadata: Metadata = {
  title: "Dr. Jaime Lumbán — Otorrinolaringólogo en Tijuana",

  description:
    "El Dr. Jaime Lumbán, otorrinolaringólogo certificado en Tijuana con más de 23 años de experiencia. Especialista en oído, nariz y garganta. Atención profesional y personalizada.",

  keywords: [
    "otorrinolaringólogo",
    "rinoplastia",
    "septoplastia",
    "otorrinolaringólogo en Tijuana",
    "especialista en oídos nariz y garganta",
    "consulta de otorrinolaringología",
    "otorrino pediatra Tijuana",
    "rinoplastia en Tijuana",
    "rinoplastia funcional y estética",
    "cirugía de nariz Tijuana",
    "mejor cirujano para rinoplastia secundaria en Tijuana",
    "rinoplastia ultrasónica en Tijuana",
    "rinoplastia ultrasónica beneficios",
    "cirugía de nariz sin tapones en Tijuana",
    "cirugía de anginas Tijuana",
    "cirugía de amígdalas Tijuana",
    "limpieza de oídos Tijuana",
    "pólipos nasales tratamiento",
    "tratamiento para sinusitis crónica",
    "especialista en vértigo y mareo",
    "tratamiento vértigo Tijuana",
    "especialista en apnea del sueño y ronquido",
    "tratamiento apnea del sueño Tijuana",
    "tratamiento ronquido Tijuana",
    "Dr Lumbán Tijuana",
    "otorrino Tijuana",
    "cirujano nasal Tijuana",
    "ENT specialist Tijuana",
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
    languages: {
      es: "https://drlumban.com/",
      en: "https://drlumban.com/en",
    },
  },

  metadataBase: new URL("https://drlumban.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-KXLQJ545" />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <FooterBase />
        </Providers>
        <FacebookPixel />
      </body>
      <GoogleAnalytics gaId="G-7ZPJE5QPS6" />
    </html>
  );
}