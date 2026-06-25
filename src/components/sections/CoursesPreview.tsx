import Link from 'next/link';
import { COURSES } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import CourseCard from '@/components/ui/CourseCard';

export default function CoursesPreview() {
  return (
    <section className="section-gradient-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our AI Courses"
          subtitle="Explore our comprehensive range of AI courses designed for every skill level — from absolute beginners to advanced learners."
        />

        {/* Course Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-dark group"
          >
            View All Courses
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
