import { MetadataRoute } from "next";
import { SITE_DOMAIN } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${SITE_DOMAIN}/sitemap.xml`,
  };
}
