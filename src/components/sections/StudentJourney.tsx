import { STUDENT_JOURNEY, DEMO_VIDEO_URL } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import StepCard from '@/components/ui/StepCard';
import CTAButton from '@/components/ui/CTAButton';

export default function StudentJourney() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Your Learning Journey"
          subtitle="Getting started with AI is easy. Follow these simple steps to begin your journey at Pakistan AI Online Academy."
        />

        <div className="mx-auto max-w-xl">
          {STUDENT_JOURNEY.map((item, index) => (
            <StepCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={item.icon}
              isLast={index === STUDENT_JOURNEY.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <CTAButton
            variant="whatsapp"
            href={DEMO_VIDEO_URL}
            size="lg"
            external
          >
            Watch Free Demo
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
