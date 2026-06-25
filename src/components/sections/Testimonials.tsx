import { TESTIMONIALS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';

export default function Testimonials() {
  return (
    <section className="section-gradient-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Students Say"
          subtitle="Hear from parents and students across Pakistan who have experienced our AI courses firsthand."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
