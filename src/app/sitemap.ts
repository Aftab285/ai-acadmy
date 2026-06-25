import { MetadataRoute } from "next";
import { COURSES, BLOG_CATEGORIES, SITE_DOMAIN } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // 1. Static pages
  const staticPages = [
    "",
    "/courses",
    "/why-learn-ai",
    "/student-projects",
    "/success-stories",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${SITE_DOMAIN}${route}`,
    lastModified,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route === "/courses" || route === "/blog" ? 0.9 : 0.8,
  }));

  // 2. Course detail pages
  const coursePages = COURSES.map((course) => ({
    url: `${SITE_DOMAIN}/courses/${course.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 3. Blog category pages
  const categoryPages = BLOG_CATEGORIES.map((cat) => ({
    url: `${SITE_DOMAIN}/blog/category/${cat.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 4. Blog post pages
  const posts = getAllPosts();
  const postPages = posts.map((post) => ({
    url: `${SITE_DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...coursePages, ...categoryPages, ...postPages];
}
