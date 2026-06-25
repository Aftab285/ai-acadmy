import type { Metadata } from "next";
import { SITE_NAME, SITE_DOMAIN, SITE_DESCRIPTION } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/og-image.png",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_DOMAIN}${path}`;
  const fullTitle = path === "/" ? `${SITE_NAME} — ${title}` : title;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "AI Course Pakistan",
      "Online AI Course Pakistan",
      "Artificial Intelligence Course Pakistan",
      "Pakistan AI Online Academy",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_PK",
      type: path === "/" ? "website" : "article",
      images: [
        {
          url: `${SITE_DOMAIN}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_DOMAIN}${ogImage}`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: `${SITE_NAME} — Pakistan's Leading Online AI Academy`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "AI Course Pakistan",
    "Online AI Course Pakistan",
    "Artificial Intelligence Course Pakistan",
    "AI Classes Pakistan",
    "AI Classes Online",
    "AI Course for Kids",
    "AI Course for Students",
    "AI Academy Pakistan",
    "AI Learning Pakistan",
    "Learn AI Online",
    "Best AI Course Pakistan",
    "Artificial Intelligence Classes",
    "Artificial Intelligence Training",
    "AI Teacher",
    "AI Instructor",
    "Machine Learning Course Pakistan",
    "Generative AI Course",
    "ChatGPT Course Pakistan",
    "Learn Artificial Intelligence",
    "AI Education Pakistan",
    "Online AI Academy",
    "Future Skills Pakistan",
  ],
  authors: [{ name: SITE_NAME, url: SITE_DOMAIN }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_DOMAIN,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Pakistan's Leading Online AI Academy`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_DOMAIN}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Pakistan's Leading Online AI Academy`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_DOMAIN}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};
