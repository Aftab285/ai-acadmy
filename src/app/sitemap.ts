import { MetadataRoute } from "next";
import { COURSES, SITE_DOMAIN } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. English Static pages with specific meaningful last modification dates
  const staticPagesEn = [
    { route: "", lastModified: new Date("2026-08-22") },
    { route: "/courses", lastModified: new Date("2026-08-22") },
    { route: "/ai-course-for-kids-in-pakistan", lastModified: new Date("2026-08-28") },
    { route: "/why-learn-ai", lastModified: new Date("2025-06-25") },
    { route: "/student-projects", lastModified: new Date("2025-06-25") },
    { route: "/success-stories", lastModified: new Date("2025-06-25") },
    { route: "/blog", lastModified: new Date("2025-06-25") },
    { route: "/about", lastModified: new Date("2025-06-25") },
    { route: "/contact", lastModified: new Date("2026-08-22") },
    { route: "/privacy-policy", lastModified: new Date("2025-06-25") },
    { route: "/terms", lastModified: new Date("2025-06-25") },
  ].map((item) => ({
    url: `${SITE_DOMAIN}${item.route}`,
    lastModified: item.lastModified,
  }));

  // 2. Urdu Static pages (created & published on 2026-08-28)
  const staticPagesUr = [
    "/ur",
    "/ur/courses",
    "/ur/ai-course-for-kids-in-pakistan",
    "/ur/why-learn-ai",
    "/ur/student-projects",
    "/ur/success-stories",
    "/ur/blog",
    "/ur/about",
    "/ur/contact",
    "/ur/privacy-policy",
    "/ur/terms",
  ].map((route) => ({
    url: `${SITE_DOMAIN}${route}`,
    lastModified: new Date("2026-08-28"),
  }));

  // 3. English Course detail pages with specific modification dates
  const coursePagesEn = COURSES.map((course) => {
    // Python & AI development course was added on 2026-08-22; others originally published 2025-06-25
    const lastModified = course.slug === "python-ai-development-course"
      ? new Date("2026-08-22")
      : new Date("2025-06-25");

    return {
      url: `${SITE_DOMAIN}/courses/${course.slug}`,
      lastModified,
    };
  });

  // 4. Urdu Course detail pages (published 2026-08-28)
  const coursePagesUr = COURSES.map((course) => ({
    url: `${SITE_DOMAIN}/ur/courses/${course.slug}`,
    lastModified: new Date("2026-08-28"),
  }));

  // 5. English Blog post pages (using each post's actual publication date)
  const posts = getAllPosts();
  const postPagesEn = posts.map((post) => ({
    url: `${SITE_DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  // 6. Urdu Blog post pages (published 2026-08-28)
  const postPagesUr = posts.map((post) => ({
    url: `${SITE_DOMAIN}/ur/blog/${post.slug}`,
    lastModified: new Date("2026-08-28"),
  }));

  return [
    ...staticPagesEn,
    ...staticPagesUr,
    ...coursePagesEn,
    ...coursePagesUr,
    ...postPagesEn,
    ...postPagesUr,
  ];
}
