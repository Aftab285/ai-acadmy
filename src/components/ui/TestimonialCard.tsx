import type { Testimonial } from '@/lib/constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="card-hover relative flex flex-col rounded-2xl border-l-4 border-primary bg-white p-6 shadow-md">
      {/* Quotation mark */}
      <div className="absolute -top-2 right-6 text-6xl font-serif leading-none text-primary/10" aria-hidden="true">
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-dark-light italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Star Rating */}
      <div className="mb-4 flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'
            }`}
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Author info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-dark">{testimonial.name}</p>
          <p className="text-xs text-muted">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}
