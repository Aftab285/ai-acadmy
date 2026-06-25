import Link from 'next/link';
import { getRecentPosts } from '@/lib/blog';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';

export default function BlogPreview() {
  const recentPosts = getRecentPosts(3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest from Our Blog"
          subtitle="Stay updated with the latest in AI education, tips, guides, and news from Pakistan AI Online Academy."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
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

        {/* Read More Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-dark group"
          >
            Read More Articles
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
