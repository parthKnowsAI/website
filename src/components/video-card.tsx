import { ShowcaseVideo } from "@/data/showcase-videos";

interface VideoCardProps {
  video: ShowcaseVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  const isShort = video.type === "short";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Video Embed - 9:16 for shorts, 16:9 for long-form */}
      <div
        className="relative w-full"
        style={{ paddingBottom: isShort ? "177.78%" : "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-auto"
          src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&controls=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
