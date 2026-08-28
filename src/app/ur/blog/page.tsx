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
  title: "AI بلاگ — آرٹیفیشل انٹیلیجنس اور چیٹ جی پی ٹی پر مضامین",
  description:
    "آرٹیفیشل انٹیلیجنس، مشین لرننگ، چیٹ جی پی ٹی، بچوں کے لیے AI، اور کیریئر گائیڈز پر معلوماتی مضامین پڑھیں۔ پاکستان AI آن لائن اکیڈمی بلاگ۔",
  path: "/ur/blog",
  keywords: [
    "AI Blog",
    "AI Articles Pakistan",
    "AI Education Blog",
    "AI بلاگ",
    "آرٹیفیشل انٹیلیجنس مضامین",
  ],
});

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

const CATEGORY_DESCRIPTIONS_UR: Record<string, string> = {
  'artificial-intelligence': 'آرٹیفیشل انٹیلیجنس، مشین لرننگ اور مستقبل کی ٹیکنالوجی کے بارے میں سیکھیں۔',
  chatgpt: 'روزمرہ کے کاموں کو تیز کرنے کے لیے چیٹ جی پی ٹی اور پرامپٹس کے جدید طریقے سیکھیں۔',
  'ai-for-kids': 'والدین اور اساتذہ کے لیے گائیڈز کہ بچے کس طرح محفوظ اور تخلیقی انداز میں AI سیکھ سکتے ہیں۔',
  'ai-careers': 'پاکستان اور دنیا بھر میں AI کی فیلڈ میں ملازمتوں، تنخواہوں اور کیریئر کے مواقع کی معلومات۔',
  'ai-news': 'آرٹیفیشل انٹیلیجنس کی دنیا سے تازہ ترین ایجادات، خبریں اور اپ ڈیٹس۔',
  technology: 'عام ٹیکنالوجی، سافٹ ویئر ڈیولپمنٹ اور جدید دور کے ڈیجیٹل ٹولز کی گائیڈز۔',
  'student-guides': 'طلباء کے لیے پڑھائی، پروجیکٹس اور مستقبل کے لیے کارآمد تعلیمی تجاویز۔',
  'parent-guides': 'والدین کے لیے رہنمائی کہ وہ اپنے بچوں کو کل کی جدید دنیا کے لیے کس طرح تیار کر سکتے ہیں۔',
  'learning-resources': 'مفت سیکھنے کے وسائل، پرامپٹ ٹیمپلیٹس اور مفید گائیڈز۔',
};

export default function UrduBlogPage() {
  const posts = getAllPosts();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "بلاگ", url: "/ur/blog" },
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
      <section className="hero-gradient py-20 pt-32 text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[
              { label: "ہوم", href: "/ur" },
              { label: "بلاگ", href: "/ur/blog" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            AI تعلیمی بلاگ
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            آرٹیفیشل انٹیلیجنس، مشین لرننگ، چیٹ جی پی ٹی، کیریئر گائیڈنس، اور طلباء و والدین کے لیے عملی تجاویز پر معلوماتی مضامین۔
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white border-b border-gray-100 font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ur/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white"
            >
              تمام مضامین
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/ur/blog/category/${cat.slug}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {CATEGORY_NAMES_UR[cat.slug] || cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white text-right rtl:text-right font-urdu">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/ur/blog/${featuredPost.slug}`}
              className="block bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 card-hover"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left rtl:text-right">
                <div className="order-2 md:order-1 text-left rtl:text-right">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    نمایاں مضمون
                  </span>
                  <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted mb-4 leading-relaxed">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted justify-start rtl:justify-end flex-row-reverse">
                    <span>{new Date(featuredPost.date).toLocaleDateString("ur-PK", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>•</span>
                    <span>{featuredPost.readingTime.replace('min read', 'منٹ کا مطالعہ')}</span>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
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
      <section className="py-20 bg-white text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-2xl font-bold mb-8 text-left rtl:text-right">تمام مضامین</h2>
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
                lang="ur"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 section-gradient-light text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-2xl font-bold text-center mb-12">
            زمرہ جات کے لحاظ سے تلاش کریں
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left rtl:text-right">
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/ur/blog/category/${cat.slug}`}
                className="bg-white rounded-2xl p-6 shadow-sm card-hover block"
              >
                <h3 className="font-outfit font-semibold text-lg mb-2">
                  {CATEGORY_NAMES_UR[cat.slug] || cat.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {CATEGORY_DESCRIPTIONS_UR[cat.slug] || cat.description}
                </p>
                <span className="text-primary text-sm font-medium mt-3 block">
                  مضامین دیکھیں ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection lang="ur" />
    </>
  );
}
