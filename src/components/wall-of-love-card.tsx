import React from "react";

export interface Testimonial {
  comment: string;
  handle: string;
  platform: "tiktok" | "instagram" | "youtube";
  highlight?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full">
      {/* Comment - grows to fill space */}
      <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-grow">
        {testimonial.comment}
      </p>

      {/* User Info - stays at bottom */}
      <div className="flex items-center gap-3 mt-auto">
        {/* Star Icon */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* User details */}
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
