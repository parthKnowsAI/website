"use client";

import Link from "next/link";
import Image from "next/image";
import profileImg from "@/imgs/profile-page.jpg";
import {
  ChevronRight,
  LinkedinIcon,
  YoutubeIcon,
  Menu,
  X,
  Instagram,
  Mail,
} from "lucide-react";
import { useState } from "react";

export function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo and Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src={profileImg}
              alt="Parth Patel"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-300 hover:scale-105"
            />
            <span className="text-lg sm:text-xl font-bold text-white">
              ParthKnowsAI
            </span>
          </Link>

          {/* Right: Navigation Links - Desktop */}
          <nav className="hidden sm:flex items-center gap-2">
            <Link href="/wall-of-love">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                Wall of Love
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </Link>
            <Link href="/showcase">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                Showcase
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </Link>
            <Link href="/about-parth">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                About Parth
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </Link>

            {/* Social Icons - Desktop only */}
            <div className="hidden lg:flex items-center gap-2 ml-2">
              <a
                href="https://www.linkedin.com/in/parth-patel-093652181/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 text-white hover:bg-white/5 hover:border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://www.youtube.com/@parthknowsai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 text-white hover:bg-white/5 hover:border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-full border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-4 space-y-2 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
            <Link href="/wall-of-love" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white hover:bg-white/5 transition-all duration-200">
                Wall of Love
                <ChevronRight size={16} />
              </button>
            </Link>
            <Link href="/showcase" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white hover:bg-white/5 transition-all duration-200">
                Showcase
                <ChevronRight size={16} />
              </button>
            </Link>
            <Link href="/about-parth" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white hover:bg-white/5 transition-all duration-200">
                About Parth
                <ChevronRight size={16} />
              </button>
            </Link>

            {/* Social Links in Mobile Menu */}
            <div className="grid grid-cols-2 gap-2 px-4 pt-2">
              <a
                href="https://www.tiktok.com/@parthknowsai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64H421.8C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
                </svg>
                <span className="text-sm">TikTok</span>
              </a>
              <a
                href="https://www.linkedin.com/in/parth-patel-093652181/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <LinkedinIcon size={16} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@parthknowsai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <YoutubeIcon size={16} />
                <span className="text-sm">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/parthknowsai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Instagram size={16} />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="mailto:parthknowsai@gmail.com"
                className="col-span-2 p-3 rounded-lg border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail size={16} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
