import type { Metadata } from "next";
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
    title: `${post.title} | پاکستان AI آن لائن اکیڈمی بلاگ`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.pakistanaionlineacademy.com/ur/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: category?.name || post.category,
      locale: "ur_PK",
    },
    alternates: {
      canonical: `https://www.pakistanaionlineacademy.com/ur/blog/${post.slug}`,
      languages: {
        en: `https://www.pakistanaionlineacademy.com/blog/${post.slug}`,
        ur: `https://www.pakistanaionlineacademy.com/ur/blog/${post.slug}`,
        'x-default': `https://www.pakistanaionlineacademy.com/blog/${post.slug}`,
      },
    },
  };
}

const CATEGORY_NAMES_UR: Record<string, string> = {
  'artificial-intelligence': 'آرٹیفیشل انٹیلیجنس',
  chatgpt: 'چیٹ جی پی ٹی',
  'ai-for-kids': 'بچوں کے لیے AI',
  'ai-careers': 'AI کیریئرز',
  'ai-news': 'AI خبریں',
  technology: 'ٹیکنالوجی',
  'student-guides': 'طلباء گائیڈز',
  'parent-guides': 'والدین گائیڈز',
  'learning-resources': 'سیکھنے کے وسائل',
};

export default async function UrduBlogPostPage({ params }: BlogPostPageProps) {
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
    { name: "ہوم", url: "/ur" },
    { name: "بلاگ", url: "/ur/blog" },
    { name: post.title, url: `/ur/blog/${post.slug}` },
  ]);

  const isUrduContent = /[\u0600-\u06FF]/.test(post.title);
  const formattedCategory = CATEGORY_NAMES_UR[post.category] || category?.name || post.category;

  const formattedDate = new Date(post.date).toLocaleDateString("ur-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
      <section className="hero-gradient py-16 pt-32 text-right rtl:text-right font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "ہوم", href: "/ur" },
              { label: "بلاگ", href: "/ur/blog" },
              { label: formattedCategory, href: `/ur/blog/category/${post.category}` },
            ]}
          />
          <span className="inline-block px-3 py-1 bg-white/10 text-white/90 border border-white/20 text-xs font-semibold rounded-full mt-6 mb-4">
            {formattedCategory}
          </span>
          <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-left rtl:text-right">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100/80 justify-start rtl:justify-end flex-row-reverse">
            <span className="flex items-center gap-1.5">
              <span>{post.author === "Pakistan AI Online Academy" ? "پاکستان AI اکیڈمی" : post.author}</span>
            </span>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{post.readingTime.replace('min read', 'منٹ کا مطالعہ')}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div 
                className={`blog-content text-left rtl:text-right ${isUrduContent ? 'font-urdu' : ''}`}
                dir={isUrduContent ? 'rtl' : 'ltr'}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8 text-left rtl:text-right font-urdu">
                {/* CTA Box */}
                <div className="bg-surface p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-outfit font-bold text-lg text-dark mb-3">داخلے جاری ہیں!</h3>
                  <p className="text-sm text-muted mb-6 leading-relaxed">
                    لائیو کلاسز، ماہر اساتذہ اور سرٹیفیکیشن کے ساتھ آن لائن AI کورسز سیکھیں۔
                  </p>
                  <CTAButton
                    variant="whatsapp"
                    size="md"
                    className="w-full text-center flex justify-center"
                    href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}
                  >
                    واٹس ایپ پر رابطہ کریں
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {finalRelated.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-gray-100 text-right rtl:text-right font-urdu">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-outfit text-2xl font-bold mb-8 text-left rtl:text-right">متعلقہ مضامین</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {finalRelated.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  category={post.category}
                  date={post.date}
                  readingTime={post.readingTime}
                  lang="ur"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection lang="ur" />
    </>
  );
}
