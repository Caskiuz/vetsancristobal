import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema-markup";
import { ThemeProvider } from "@/lib/theme-context";
import { AdminProvider } from "@/lib/admin-context";
import { BusinessProvider } from "@/lib/business-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.fullName} — Veterinaria 24/7 en San Cristóbal, Táchira`,
    template: `%s | ${SITE_CONFIG.fullName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "veterinaria San Cristóbal",
    "veterinario Táchira",
    "clínica veterinaria",
    "urgencias veterinarias 24 horas",
    "cirugía veterinaria",
    "peluquería canina San Cristóbal",
    "laboratorio veterinario",
    "animales exóticos Táchira",
    "vacunación mascotas",
    "PagoMóvil veterinario",
    "veterinaria cerca de mí",
    "VetSanCristóbal",
  ],
  authors: [{ name: SITE_CONFIG.fullName }],
  creator: SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.fullName,
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullName,
    title: `${SITE_CONFIG.fullName} — Veterinaria 24/7 en San Cristóbal`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-VE" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generateLocalBusinessSchema(),
              generateWebSiteSchema(),
            ]),
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/og-image.png" />
      </head>
      <body>
        <ThemeProvider>
          <BusinessProvider>
          <AdminProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppCTA />
          </AdminProvider>
          </BusinessProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}