import { WHY_CHOOSE_US } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

export default function WhyChooseUs() {
  return (
    <section className="section-gradient-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Pakistan AI Online Academy"
          subtitle="We provide the best online AI learning experience in Pakistan with expert instruction, modern curriculum, and personalized attention."
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((usp, index) => (
            <article
              key={index}
              className="card-hover group rounded-2xl bg-white p-6 shadow-md text-center transition-all border border-gray-100"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 transition-transform">
                <Icon name={usp.icon} size={28} color="primary" />
              </div>

              {/* Title */}
              <h3 className="font-outfit text-base font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                {usp.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted">
                {usp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
