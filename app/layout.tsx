import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_CONFIG } from "@/data/portfolio";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111318",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} — Software Engineer | ${SITE_CONFIG.role}`,
    template: `%s`,
  },
  description:
    "Utkarsh Harshe is a Software Engineer (SDE I at Ola Electric) in Bengaluru focused on frontend architecture and full-stack product development with React, Next.js, TypeScript, Java, Node.js, and FastAPI.",
  keywords: [
    "Utkarsh Harshe",
    "Utkarsh Rajendra Harshe",
    "Software Engineer",
    "Frontend Engineer",
    "Full Stack Software Engineer",
    "SDE I",
    "Ola Electric",
    "React",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Bengaluru",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.siteUrl,
    title: `${SITE_CONFIG.name} — Software Engineer | ${SITE_CONFIG.role}`,
    description:
      "Software Engineer focused on frontend architecture and full-stack product development across retail PWAs, dealer management platforms, and AI systems.",
    siteName: `${SITE_CONFIG.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Software Engineer | ${SITE_CONFIG.role}`,
    description:
      "Software Engineer focused on frontend architecture and full-stack product development across retail PWAs, dealer management platforms, and AI systems.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-[#111318] text-[#F4F5F7] antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
