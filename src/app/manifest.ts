import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pakistan AI Online Academy",
    short_name: "PAOA",
    description:
      "Pakistan's leading online AI academy offering live classes in Artificial Intelligence, Machine Learning, ChatGPT, and Generative AI for students and beginners.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#044F95",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
