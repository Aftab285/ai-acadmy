import Link from 'next/link';
import type { Course } from '@/lib/constants';
import { WHATSAPP_LINK } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

interface CourseCardProps {
  course: Course;
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function CourseCard({ course }: CourseCardProps) {
  const whatsappMessage = `Hi! I'm interested in the ${course.shortTitle} at Pakistan AI Online Academy. Can you share more details?`;

  return (
    <article className="card-hover group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Gradient top border */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${course.color}`}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Icon & Level */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon name={course.icon} size={26} color="primary" />
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[course.level]}`}
          >
            {course.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-outfit text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          <Link href={`/courses/${course.slug}`} className="hover:underline">
            {course.shortTitle}
          </Link>
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-muted line-clamp-3 leading-relaxed">
          {course.description}
        </p>

        {/* Meta info */}
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {course.ageGroup}
          </span>
        </div>

        {/* Main Skills (first 3) */}
        <div className="mb-4">
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-2">Main Skills Taught:</span>
          <div className="flex flex-wrap gap-1.5">
            {course.topics.slice(0, 3).map((topic) => (
              <span key={topic} className="px-2 py-0.5 bg-surface rounded text-xs text-dark-light font-medium">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Features (first 2) */}
        <ul className="mb-6 flex-1 space-y-1.5 border-t border-gray-100 pt-4">
          {course.features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-muted">
              <svg className="h-3.5 w-3.5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-dark hover:bg-surface hover:text-primary transition-colors"
          >
            View Details
          </Link>
          <a
            href={WHATSAPP_LINK(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-primary to-primary-light px-3 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </article>
  );
}
