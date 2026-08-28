import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BlogCard from "@/components/ui/BlogCard";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Blog — Articles on Artificial Intelligence, ChatGPT & More",
  description:
    "Read expert articles on Artificial Intelligence, Machine Learning, ChatGPT, AI for Kids, Career Guides, and more. Pakistan AI Online Academy blog — your source for AI education content.",
  path: "/blog",
  keywords: [
    "AI Blog",
    "Artificial Intelligence Articles",
    "AI Education Blog",
    "ChatGPT Articles",
    "AI for Kids Blog",
    "AI Career Articles",
    "Learn AI Blog",
    "Pakistan AI Blog",
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            AI Learning Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert articles on Artificial Intelligence, Machine Learning, ChatGPT,
            career guidance, and practical tips for students and parents.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white"
            >
              All Articles
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 card-hover"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Featured Article
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted mb-4 leading-relaxed">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span>{new Date(featuredPost.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>•</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-full max-w-sm h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-7xl">📚</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                category={post.category}
                date={post.date}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-2xl font-bold text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="bg-white rounded-2xl p-6 shadow-sm card-hover block"
              >
                <h3 className="font-outfit font-semibold text-lg mb-2">
                  {cat.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {cat.description}
                </p>
                <span className="text-primary text-sm font-medium mt-3 block">
                  View Articles →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
