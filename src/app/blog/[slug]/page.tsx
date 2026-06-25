import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getCategoryBySlug } from "@/lib/blog";
import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BlogCard from "@/components/ui/BlogCard";
import CTAButton from "@/components/ui/CTAButton";
import CTASection from "@/components/sections/CTASection";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const category = getCategoryBySlug(post.category);

  return {
    title: `${post.title} | Pakistan AI Online Academy Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://pakistanaionlineacademy.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: category?.name || post.category,
    },
    alternates: {
      canonical: `https://pakistanaionlineacademy.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getCategoryBySlug(post.category);
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const allPosts = getAllPosts();
  const additionalRelated = relatedPosts.length < 3
    ? allPosts.filter(p => p.slug !== post.slug && !relatedPosts.find(r => r.slug === p.slug)).slice(0, 3 - relatedPosts.length)
    : [];
  const finalRelated = [...relatedPosts, ...additionalRelated];

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    date: post.date,
    author: post.author,
    category: category?.name || post.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Article Header */}
      <section className="hero-gradient py-16 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: category?.name || post.category, href: `/blog/category/${post.category}` },
            ]}
          />
          <div className="mt-6">
            <Link
              href={`/blog/category/${post.category}`}
              className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4 hover:bg-white/30 transition-colors"
            >
              {category?.name || post.category}
            </Link>
            <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-blue-100 mb-6">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Article CTA */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
                <h3 className="font-outfit text-xl font-bold mb-3">
                  Ready to Start Learning AI?
                </h3>
                <p className="text-muted mb-6">
                  Join Pakistan AI Online Academy and master Artificial Intelligence
                  through live online classes. Contact us on WhatsApp to book your
                  free demo class.
                </p>
                <CTAButton variant="whatsapp" href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}>
                  Chat on WhatsApp
                </CTAButton>
              </div>

              {/* Keywords/Tags */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-outfit font-semibold text-sm text-muted mb-3">
                  Related Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-surface text-sm text-dark-light rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* About Author */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="font-outfit font-semibold mb-3">About</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Pakistan AI Online Academy is Pakistan&apos;s leading online AI education
                    platform, offering live interactive classes for students and
                    beginners across Pakistan.
                  </p>
                </div>

                {/* Categories */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="font-outfit font-semibold mb-3">Categories</h4>
                  <div className="space-y-2">
                    <Link
                      href={`/blog/category/${post.category}`}
                      className="block text-sm text-primary hover:underline font-medium"
                    >
                      {category?.name || post.category}
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-2xl p-6 text-white text-center">
                  <span className="text-3xl block mb-3">🤖</span>
                  <h4 className="font-outfit font-semibold mb-2">
                    Learn AI Today
                  </h4>
                  <p className="text-blue-100 text-sm mb-4">
                    Book your free demo class on WhatsApp.
                  </p>
                  <CTAButton
                    variant="whatsapp"
                    size="sm"
                    href={WHATSAPP_LINK("Hi! I'm reading your blog and interested in AI courses.")}
                    className="w-full"
                  >
                    WhatsApp Us
                  </CTAButton>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {finalRelated.length > 0 && (
        <section className="py-20 section-gradient-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-outfit text-2xl font-bold mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {finalRelated.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.slug}
                  slug={relatedPost.slug}
                  title={relatedPost.title}
                  description={relatedPost.description}
                  category={relatedPost.category}
                  date={relatedPost.date}
                  readingTime={relatedPost.readingTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
