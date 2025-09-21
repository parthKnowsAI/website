import ParthKnowsAIMain from "@/components/parth-knows-ai-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ParthKnowsAI - Keeping you at the forefront of AI",
  description:
    "Translating cutting-edge AI research into simple, visual insights anyone can understand—no PhD or tech background required.",
};

export default function Home() {
  return <ParthKnowsAIMain />;
}
