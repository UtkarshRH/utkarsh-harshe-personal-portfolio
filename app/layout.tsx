import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Utkarsh Harshe - Full Stack Developer & AI Engineer",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and AI technologies. Currently contributing to Ola's Kruti.ai platform. Based in Bangalore, India.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI Engineer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Utkarsh Harshe",
    "Kruti.ai",
    "Ola",
    "Bangalore Developer",
  ],
  authors: [{ name: "Utkarsh Harshe" }],
  creator: "Utkarsh Harshe",
  publisher: "Utkarsh Harshe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utkarshharshe.dev",
    title: "Utkarsh Harshe - Full Stack Developer & AI Engineer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and AI technologies.",
    siteName: "Utkarsh Harshe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Harshe - Full Stack Developer & AI Engineer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and AI technologies.",
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://utkarshharshe.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f9fafb" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
