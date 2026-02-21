import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wall of Love - ParthKnowsAI",
  description:
    "Real feedback from people who follow Parth's AI content. See what the community has to say about AI research made accessible.",
  keywords: [
    "AI testimonials",
    "ParthKnowsAI reviews",
    "AI education feedback",
    "community testimonials",
  ],
  openGraph: {
    title: "Wall of Love - ParthKnowsAI",
    description: "Real feedback from people who follow Parth's AI content.",
    url: "https://www.parthknowsai.com/wall-of-love",
    siteName: "ParthKnowsAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall of Love - ParthKnowsAI",
    description: "Real feedback from people who follow Parth's AI content.",
  },
  alternates: {
    canonical: "https://www.parthknowsai.com/wall-of-love",
  },
};

export default function WallOfLoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
