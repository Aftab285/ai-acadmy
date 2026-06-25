import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_NUMBER } from '@/lib/constants';
import CTAButton from '@/components/ui/CTAButton';

export default function CTASection() {
  return (
    <section className="section-gradient-blue relative overflow-hidden py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/[0.02]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-outfit text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Start Learning AI?
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">
          Join hundreds of students across Pakistan who are already building their future with
          Artificial Intelligence. Book a free demo class today — no commitment required.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <CTAButton
            variant="whatsapp"
            href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}
            size="lg"
            external
          >
            Chat on WhatsApp Now
          </CTAButton>
        </div>

        {/* WhatsApp number */}
        <p className="mt-6 text-sm text-white/60">
          Or call / message us directly:{' '}
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="font-semibold text-white/80 underline underline-offset-2 hover:text-white transition-colors"
          >
            {WHATSAPP_NUMBER}
          </a>
        </p>
      </div>
    </section>
  );
}
