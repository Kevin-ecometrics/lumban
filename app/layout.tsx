import type { Metadata } from "next";
import "./globals.css";
import FooterBase from "./Components/FooterReveal";
import Navbar from "./Components/Navbar";
import Providers from "./Providers";

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
      <body>
        <Providers>
          <Navbar />
          <main>
            {children}
          </main>
          <FooterBase />
        </Providers>
      </body>
    </html>
  );
}
