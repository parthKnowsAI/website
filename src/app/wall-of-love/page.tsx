"use client";

import { PageHeader } from "@/components/page-header";
import { BCMASReviewsFooter } from "@/components/testimonial-card";
import { testimonials } from "@/data/testimonials";
import { Home, Mail, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// Social media icons with proper typing
const Icons = {
  tiktok: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      fill="currentColor"
      {...props}
    >
      <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64H421.8C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
    </svg>
  ),
  instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

const socialLinks = [
  { icon: Home, href: "/", label: "Home" },
  {
    icon: Icons.tiktok,
    href: "https://www.tiktok.com/@parthknowsai",
    label: "TikTok",
  },
  {
    icon: Icons.instagram,
    href: "https://www.instagram.com/parthknowsai/",
    label: "Instagram",
  },
  {
    icon: Icons.linkedin,
    href: "https://www.linkedin.com/in/parth-patel-093652181/",
    label: "LinkedIn",
  },
  {
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@parthknowsai",
    label: "YouTube",
  },
  { icon: Mail, href: "mailto:parthknowsai@gmail.com", label: "Email" },
];

// Animation component for revealing elements
function RevealOnScroll({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

export default function WallOfLovePage() {
  return (
    <>
      <PageHeader />
      <main className="min-h-screen bg-neutral-950 text-white">
        {/* Hero Section */}
        <section className="relative px-4 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto text-center">
            {/* Stars */}
            <RevealOnScroll delay={0}>
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                    style={{
                      animation: `fadeInScale 0.5s ease-out ${i * 0.1}s both`,
                    }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </RevealOnScroll>

            {/* Title */}
            <RevealOnScroll delay={200}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Wall of love
              </h1>
            </RevealOnScroll>

            {/* Description */}
            <RevealOnScroll delay={300}>
              <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed">
                Real feedback from people who follow Parth&apos;s AI content.
              </p>
            </RevealOnScroll>

            {/* Social Icons */}
            <RevealOnScroll delay={400}>
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="p-3 rounded-lg border border-white/20 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-200 hover:scale-110"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.5}s both`,
                    }}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Testimonials Masonry Grid */}
        <section className="px-4 pb-16 lg:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {testimonials.map((testimonial, index) => (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div className="break-inside-avoid mb-8">
                    <BCMASReviewsFooter
                      name={testimonial.handle}
                      description={testimonial.comment}
                      highlight={testimonial.highlight}
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
