import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import parthknowsaimain from "@/imgs/ParthKnowsAI-main.png";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // Primary SEO
  title: {
    default: "Parth Patel | AI Engineer & Researcher in New York",
    template: "%s | ParthKnowsAI",
  },
  description:
    "ParthKnowsAI - AI Engineer translating cutting-edge AI research into actionable insights. Expert in machine learning, deep learning, and AI implementation for businesses.",

  // Keywords (still relevant for some search engines)
  keywords: [
    "AI Engineer New York",
    "Machine Learning Expert",
    "AI Research",
    "Deep Learning",
    "Artificial Intelligence Consultant",
    "AI Implementation",
    "ML Engineer NYC",
    "AI Insights",
    "Parth Patel AI",
  ],

  // Author and classification
  authors: [{ name: "Parth Patel", url: "https://www.parthknowsai.com" }],
  creator: "Parth Patel",
  publisher: "ParthKnowsAI",
  category: "Technology",
  classification: "AI Engineering and Research",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.parthknowsai.com",
    siteName: "ParthKnowsAI",
    title: "Parth Patel | AI Engineer & Researcher in New York",
    description:
      "AI Engineer based in New York translating cutting-edge AI research into actionable insights. Expert in machine learning, deep learning, and AI implementation.",
    images: [
      {
        url: parthknowsaimain.src,
        width: 1200,
        height: 630,
        alt: "Parth Patel - AI Engineer and Researcher",
        type: "image/png",
      },
    ],
  },
  // Technical SEO
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "ihxAWUUDq8BvyEtKJOlnAmGt39FQeFzy0y24B6YuqLQ",
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.parthknowsai.com",
  },

  // Additional metadata
  applicationName: "ParthKnowsAI",

  // Other useful metadata
  other: {
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "language": "EN",
    "geo.region": "US-NY",
    "geo.placename": "New York",
    "geo.position": "40.7128;-74.0060",
    "ICBM": "40.7128, -74.0060",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
