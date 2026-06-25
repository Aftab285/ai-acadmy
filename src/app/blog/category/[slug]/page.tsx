import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory, getCategoryBySlug } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BlogCard from "@/components/ui/BlogCard";
import CTASection from "@/components/sections/CTASection";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} Articles | Pakistan AI Online Academy Blog`,
    description: `Read expert articles, guides, and tutorials about ${category.name} on the Pakistan AI Online Academy blog.`,
    alternates: {
      canonical: `https://pakistanaionlineacademy.com/blog/category/${category.slug}`,
    },
    keywords: [
      `${category.name} Articles`,
      `${category.name} Blog`,
      `Learn ${category.name}`,
      `Pakistan AI Academy ${category.name}`,
    ],
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: category.name, url: `/blog/category/${slug}` },
  ]);

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
              { label: category.name, href: `/blog/category/${slug}` },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            {category.name}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Navigation & Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              All Articles
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat.slug === slug
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
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
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">📝</span>
              <h2 className="font-outfit text-2xl font-bold mb-2">No articles found</h2>
              <p className="text-muted mb-6">We are currently writing and preparing articles for this category.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all duration-300"
              >
                Back to All Articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
