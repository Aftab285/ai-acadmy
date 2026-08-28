import { MetadataRoute } from "next";
import { COURSES, BLOG_CATEGORIES, SITE_DOMAIN } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // 1. English Static pages
  const staticPagesEn = [
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
    "/ai-course-for-kids-in-pakistan",
  ].map((route) => ({
    url: `${SITE_DOMAIN}${route}`,
    lastModified,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route === "/courses" || route === "/blog" ? 0.9 : 0.8,
  }));

  // 2. Urdu Static pages
  const staticPagesUr = [
    "/ur",
    "/ur/courses",
    "/ur/why-learn-ai",
    "/ur/student-projects",
    "/ur/success-stories",
    "/ur/blog",
    "/ur/about",
    "/ur/contact",
    "/ur/privacy-policy",
    "/ur/terms",
    "/ur/ai-course-for-kids-in-pakistan",
  ].map((route) => ({
    url: `${SITE_DOMAIN}${route}`,
    lastModified,
    changeFrequency: (route === "/ur" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "/ur" ? 0.9 : route === "/ur/courses" || route === "/ur/blog" ? 0.8 : 0.7,
  }));

  // 3. English Course detail pages
  const coursePagesEn = COURSES.map((course) => ({
    url: `${SITE_DOMAIN}/courses/${course.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 4. Urdu Course detail pages
  const coursePagesUr = COURSES.map((course) => ({
    url: `${SITE_DOMAIN}/ur/courses/${course.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 5. English Blog category pages
  const categoryPagesEn = BLOG_CATEGORIES.map((cat) => ({
    url: `${SITE_DOMAIN}/blog/category/${cat.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 6. Urdu Blog category pages
  const categoryPagesUr = BLOG_CATEGORIES.map((cat) => ({
    url: `${SITE_DOMAIN}/ur/blog/category/${cat.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 7. English Blog post pages
  const posts = getAllPosts();
  const postPagesEn = posts.map((post) => ({
    url: `${SITE_DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 8. Urdu Blog post pages
  const postPagesUr = posts.map((post) => ({
    url: `${SITE_DOMAIN}/ur/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPagesEn,
    ...staticPagesUr,
    ...coursePagesEn,
    ...coursePagesUr,
    ...categoryPagesEn,
    ...categoryPagesUr,
    ...postPagesEn,
    ...postPagesUr,
  ];
}
