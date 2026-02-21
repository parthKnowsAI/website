export interface ShowcaseVideo {
  id: string; // YouTube video ID (the part after watch?v= or shorts/)
  title: string;
  type: "short" | "long"; // short for YouTube Shorts, long for regular videos
}

export const showcaseVideos: ShowcaseVideo[] = [
  // First 6 Shorts
  {
    id: "SR8a5EHDohA",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "SB_MnJnZ70I",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "yFbSmV6xcjc",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "MxGMV5WaD40",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "tvudHNwFErE",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "wuLRBZxzHAE",
    title: "AI Research Breakdown",
    type: "short",
  },

  // 2 Long-form Videos
  {
    id: "GFeGowKupMo",
    title: "Deep Dive: AI Concepts Explained",
    type: "long",
  },
  {
    id: "KY8tQdKYtnw",
    title: "Complete Guide to AI Research",
    type: "long",
  },

  // Last 4 Shorts
  {
    id: "JayonNkvByo",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "w_WeECMwo7A",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "hfQIuzc_WyA",
    title: "AI Research Breakdown",
    type: "short",
  },
  {
    id: "yTUwU4odWE4",
    title: "AI Research Breakdown",
    type: "short",
  },
];
