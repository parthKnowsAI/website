import React from "react";

// Function to highlight specific phrase in testimonials
function highlightPhrase(text: string, phrase?: string) {
  if (!phrase) return text;

  // Escape special regex characters in the phrase
  const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedPhrase})`, "gi"));

  return parts.map((part, index) => {
    if (part.toLowerCase() === phrase.toLowerCase()) {
      return (
        <span
          key={index}
          className="text-emerald-400 font-medium bg-emerald-400/10 px-1 rounded"
        >
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

// Simple component for testimonials
export function BCMASReviewsFooter({
  name,
  description,
  highlight,
}: {
  name: string;
  description: string;
  highlight?: string;
}) {
  return (
    <div className="bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
      <p className="text-white/90 text-sm leading-relaxed mb-4">
        {highlightPhrase(description, highlight)}
      </p>
      <div className="flex items-center gap-3">
        <div>
          <div className="font-medium text-white text-sm">{name}</div>
        </div>
      </div>
    </div>
  );
}

export interface Testimonial {
  comment: string;
  handle: string;
  platform: "tiktok" | "instagram" | "youtube";
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <p className="text-gray-800 text-sm leading-relaxed mb-6">
        {testimonial.comment}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div>
          <div className="font-medium text-gray-900 text-sm">
            {testimonial.handle}
          </div>
          <div className="text-gray-500 text-xs">YouTube</div>
        </div>
      </div>
    </div>
  );
}
