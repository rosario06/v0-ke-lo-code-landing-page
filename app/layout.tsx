import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://kelocode.com"),
  title: {
    default: "KeLoCode | IA que habla tu idioma",
    template: "%s | KeLoCode",
  },
  description:
    "Agencia de Inteligencia Artificial en República Dominicana. Automatizamos lo aburrido para que tú factures lo importante. Chatbots, Asistentes Legales y Contabilidad Automatizada.",
  keywords: [
    "Inteligencia Artificial Republica Dominicana",
    "Automatización de Negocios",
    "Chatbots IA",
    "Agencia de IA",
    "KeLoCode",
    "Asistentes Virtuales",
    "Desarrollo de Software",
    "Santo Domingo",
  ],
  authors: [{ name: "KeLoCode", url: "https://kelocode.com" }],
  creator: "KeLoCode",
  publisher: "KeLoCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KeLoCode | Inteligencia Artificial en RD",
    description: "Automatizamos lo aburrido para que tú factures lo importante. Soluciones de IA para empresas dominicanas.",
    url: "https://kelocode.com",
    siteName: "KeLoCode AI",
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // We need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "KeLoCode - Agencia de Inteligencia Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeLoCode | IA que habla tu idioma",
    description: "Agencia de Inteligencia Artificial en República Dominicana.",
    images: ["/og-image.jpg"],
    creator: "@kelocode",
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
    canonical: "https://kelocode.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
