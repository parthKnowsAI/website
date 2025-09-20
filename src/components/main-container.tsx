import { cn } from "@/lib/cn";
import RevealOnView from "./reveal-on-view";
import { Highlighter } from "./ui/highlighter";
import { AIContentItem } from "@/app/page";

export function renderSubtitleWithHighlight(
  subtitle: string,
  highlightWord: string,
  highlightAction: "underline" | "highlight",
  highlightColor: string
): React.ReactNode {
  const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

  return parts.map((part: string, index: number) => {
    if (part.toLowerCase() === highlightWord.toLowerCase()) {
      return (
        <Highlighter
          key={index}
          action={highlightAction}
          color={highlightColor}
        >
          {part}
        </Highlighter>
      );
    }
    return part;
  });
}

interface MainContainerProps {
  item: AIContentItem;
  index: number;
}

export default function MainContainer({ item, index }: MainContainerProps) {
  return (
    <article className={cn("group relative lg:h-[calc(100svh-2rem)]")}>
      <RevealOnView
        delay={index * 2}
        className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] lg:h-full"
      >
        <div className="relative overflow-hidden rounded-[1.35rem] bg-black lg:h-full">
          {/* Content Area - Like the portfolio example */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="text-left max-w-2xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-sm text-white/60 font-mono tracking-wider uppercase">
                    {item.title}
                  </div>
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white pb-2">
                  {renderSubtitleWithHighlight(
                    item.subtitle,
                    item.highlightWord,
                    item.highlightAction,
                    item.highlightColor
                  )}
                </h3>

                <div className="space-y-6 max-w-lg">
                  <p className="text-lg text-white/80 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/30 rounded-[1.35rem]" />
        </div>
      </RevealOnView>
    </article>
  );
}
