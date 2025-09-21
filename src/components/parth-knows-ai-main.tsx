"use client";
import DotGridShader from "@/components/dot-grid-shader";
import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import MainContainer from "@/components/main-container";
import { NavDock } from "@/components/nav-dock";
import { NumberTicker } from "@/components/number-ticker";
import RevealOnView from "@/components/reveal-on-view";
import profileImg from "@/imgs/profile-page.jpg";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface AIContentItem {
  title: string;
  subtitle: string;
  highlightWord: string;
  highlightAction: "underline" | "highlight";
  highlightColor: string;
  content: string;
  icon: string;
  cta: string;
}

export default function ParthKnowsAIMain() {
  const aiContent: AIContentItem[] = [
    {
      title: "The Problem",
      subtitle: "Why AI research feels impossible to understand",
      highlightWord: "impossible",
      highlightAction: "highlight",
      highlightColor: "#dc2626",
      content:
        "Most AI research papers are written by scientists, for scientists. They're packed with technical terms, complex math, and assumptions that leave 99% of people completely lost.",
      icon: "🚫",
      cta: "See the problem",
    },
    {
      title: "My Solution",
      subtitle: "Making AI accessible to everyone",
      highlightWord: "accessible",
      highlightAction: "highlight",
      highlightColor: "#059669",
      content:
        "I translate cutting-edge AI research into clear, visual explanations that anyone can follow. No PhD required, no technical background needed. Just real insights about the AI innovations shaping our world.",
      icon: "✨",
      cta: "Watch breakdown",
    },
    {
      title: "Why It Matters",
      subtitle: "AI is transforming everything",
      highlightWord: "transforming",
      highlightAction: "highlight",
      highlightColor: "#7c3aed",
      content:
        "AI isn't just for engineers and researchers anymore. It's transforming every industry, every job, and every aspect of our lives. You deserve to understand what's coming next, not just read about it in confusing headlines.",
      icon: "🌍",
      cta: "Join 80K+ followers",
    },
  ];

  const BLUR_FADE_DELAY = 0.04;

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>

              {/* Main content */}
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">
                    ParthKnowsAI
                  </div>

                  <div
                    className="h-2 w-2 rounded-full bg-white/60"
                    aria-hidden="true"
                  />
                </div>

                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-white"
                  yOffset={8}
                  text={`Keeping you at the forefront of AI`}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Parth is an AI engineer based out of New York, translating the
                  latest AI research into insights anyone can understand.
                </p>

                {/* Trusted by */}
                <div className="mt-10">
                  <p className="mb-1 text-xs font-semibold tracking-widest text-white/50">
                    Subscribers & Followers
                  </p>
                  <div className="mb-4">
                    <NumberTicker
                      value={80}
                      suffix="K+"
                      className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-gray dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-left items-center mt-8">
                  <Image
                    src={profileImg}
                    alt="profile-img"
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                  <div className="ml-6">
                    <h2 className="text-2xl font-extrabold tracking-tight">
                      Parth Patel
                    </h2>
                    <Link
                      href={"/about-parth"}
                      className="hover:underline group"
                    >
                      <p className="flex items-center mt-1">
                        More about Parth{" "}
                        <ChevronRight
                          size={18}
                          className="mt-1 group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dock at bottom center */}
              <div className="flex justify-center">
                <NavDock />
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {aiContent.map((item, index) => (
              <MainContainer key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
