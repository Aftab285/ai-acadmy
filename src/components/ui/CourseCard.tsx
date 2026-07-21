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

        {/* Features (first 3) */}
        <ul className="mb-6 flex-1 space-y-2">
          {course.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-dark-light">
              <svg className="h-4 w-4 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={WHATSAPP_LINK(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95"
        >
          Enroll Now — WhatsApp
          <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </a>
      </div>
    </article>
  );
}
