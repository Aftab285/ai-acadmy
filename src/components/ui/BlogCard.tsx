import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
}

const categoryColors: Record<string, string> = {
  'artificial-intelligence': 'bg-blue-100 text-blue-700',
  chatgpt: 'bg-green-100 text-green-700',
  'ai-for-kids': 'bg-purple-100 text-purple-700',
  'ai-careers': 'bg-amber-100 text-amber-700',
  'ai-news': 'bg-red-100 text-red-700',
  technology: 'bg-cyan-100 text-cyan-700',
  'student-guides': 'bg-indigo-100 text-indigo-700',
  'parent-guides': 'bg-pink-100 text-pink-700',
  'learning-resources': 'bg-teal-100 text-teal-700',
};

export default function BlogCard({
  slug,
  title,
  description,
  category,
  date,
  readingTime,
}: BlogCardProps) {
  const colorClasses = categoryColors[category] || 'bg-gray-100 text-gray-700';

  const formattedDate = new Date(date).toLocaleDateString('en-PK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Category & Date bar */}
      <div className="flex items-center gap-3 border-b border-gray-50 px-6 pt-6 pb-4">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colorClasses}`}>
          {category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
        </span>
        <span className="text-xs text-muted">{formattedDate}</span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
        {/* Title */}
        <h3 className="font-outfit text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        {/* Description excerpt */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {description}
        </p>

        {/* Reading time + Read more */}
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1 text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {readingTime}
          </span>
          <Link
            href={`/blog/${slug}`}
            className="font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
