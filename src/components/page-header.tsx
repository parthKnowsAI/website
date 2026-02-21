import Link from "next/link";
import Image from "next/image";
import profileImg from "@/imgs/profile-page.jpg";
import { ChevronRight, Linkedin, Youtube, Menu, X } from "lucide-react";
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
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src={profileImg}
              alt="Parth Patel"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg sm:text-xl font-bold text-white">
              ParthKnowsAI
            </span>
          </Link>

          {/* Right: Navigation Links - Desktop */}
          <nav className="hidden sm:flex items-center gap-2">
            <Link href="/wall-of-love">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 transition-all duration-200">
                Wall of Love
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </Link>
            <Link href="/showcase">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 transition-all duration-200">
                Showcase
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </Link>
            <Link href="/about-parth">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 transition-all duration-200">
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
                className="p-2 rounded-full border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.youtube.com/@parthknowsai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
              >
                <Youtube size={16} />
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
          <div className="sm:hidden py-4 space-y-2 border-t border-white/10">
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
            <div className="flex items-center gap-2 px-4 pt-2">
              <a
                href="https://www.linkedin.com/in/parth-patel-093652181/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-lg border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com/@parthknowsai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-lg border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
