import ParthKnowsAIMain from "@/components/parth-knows-ai-main";
import { Metadata } from "next";
import parthknowsaimain from "@/imgs/ParthKnowsAI-main.png";

export const metadata: Metadata = {
  title: "ParthKnowsAI - Keeping you at the forefront of AI",
  description:
    "Translating cutting-edge AI research into simple, visual insights anyone can understand—no PhD or tech background required. Join 300K+ followers.",
  keywords: [
    "AI research explained",
    "machine learning tutorials",
    "AI insights",
    "artificial intelligence education",
    "Parth Patel AI",
  ],
  openGraph: {
    title: "ParthKnowsAI - Keeping you at the forefront of AI",
    description:
      "Translating cutting-edge AI research into simple, visual insights anyone can understand—no PhD or tech background required.",
    url: "https://www.parthknowsai.com",
    siteName: "ParthKnowsAI",
    images: [
      {
        url: parthknowsaimain.src,
        width: 1200,
        height: 630,
        alt: "ParthKnowsAI - AI Research Made Simple",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParthKnowsAI - Keeping you at the forefront of AI",
    description:
      "Translating cutting-edge AI research into simple, visual insights anyone can understand.",
    images: [parthknowsaimain.src],
  },
  alternates: {
    canonical: "https://www.parthknowsai.com",
  },
};

export default function Home() {
  return <ParthKnowsAIMain />;
}
