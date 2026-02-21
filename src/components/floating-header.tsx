import Link from "next/link";
import Image from "next/image";
import profileImg from "@/imgs/profile-page.jpg";
import { ChevronRight, Linkedin, Youtube } from "lucide-react";

export function FloatingHeader() {
  return (
    <div className="sticky lg:relative top-4 z-50 px-4 lg:pl-[calc(420px+2rem)] lg:pr-4 mb-3">
      <div className="rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-md shadow-2xl p-1">
        <div className="rounded-[1.35rem] bg-black/40 px-6 py-4">
          <div className="flex items-center justify-between">
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
              <span className="text-lg font-bold text-white">ParthKnowsAI</span>
            </Link>

            {/* Right: Navigation Links */}
            <nav className="flex items-center gap-2">
              <Link href="/wall-of-love">
                <button className="hidden sm:flex group items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 transition-all duration-200">
                  Wall of Love
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </button>
              </Link>
              <Link href="/showcase">
                <button className="hidden sm:flex group items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 transition-all duration-200">
                  Showcase
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </button>
              </Link>
              <Link href="/about-parth">
                <button className="hidden sm:flex group items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/5 hover:border-white/50 transition-all duration-200">
                  About Parth
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </button>
              </Link>

              {/* Social Icons */}
              <div className="hidden lg:flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/parth-patel-093652181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@parthknowsai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
