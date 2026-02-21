import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase - ParthKnowsAI",
  description:
    "Watch Parth's best and highest-rated AI breakdowns and research explanations. Complex AI concepts broken down into digestible, visual content.",
  keywords: [
    "AI videos",
    "AI research explained",
    "machine learning tutorials",
    "AI breakdowns",
    "YouTube AI content",
    "TikTok AI",
  ],
  openGraph: {
    title: "Showcase - ParthKnowsAI",
    description:
      "Watch Parth's best and highest-rated AI breakdowns and research explanations.",
    url: "https://www.parthknowsai.com/showcase",
    siteName: "ParthKnowsAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showcase - ParthKnowsAI",
    description:
      "Watch Parth's best and highest-rated AI breakdowns and research explanations.",
  },
  alternates: {
    canonical: "https://www.parthknowsai.com/showcase",
  },
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
