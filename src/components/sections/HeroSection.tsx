import { TRUST_BADGES, WHATSAPP_LINK, DEMO_VIDEO_URL, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/constants';
import TrustBadge from '@/components/ui/TrustBadge';
import CTAButton from '@/components/ui/CTAButton';

export default function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/5 animate-float" />
        <div className="absolute top-1/3 -right-10 h-48 w-48 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 h-32 w-32 rounded-full bg-white/5 animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-1/3 h-20 w-20 rounded-full bg-secondary/5 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-20 h-56 w-56 rounded-full bg-primary-light/10 animate-float" style={{ animationDelay: '3s' }} />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
            Now Enrolling — Live Online Classes
          </div>

          {/* Main heading */}
          <h1 className="font-outfit text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl animate-slide-up">
            Pakistan&apos;s Leading{' '}
            <span className="relative inline-block">
              Online AI Academy
              <span
                className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-secondary to-secondary-light"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Live online classes in Artificial Intelligence, Machine Learning, ChatGPT, and
            Generative AI — designed for students and beginners across Pakistan. Start your
            AI journey with expert guidance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CTAButton
              variant="outline"
              href={DEMO_VIDEO_URL}
              size="lg"
              external
            >
              Watch Free Demo
            </CTAButton>
            <CTAButton
              variant="whatsapp"
              href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}
              size="lg"
              external
            >
              Chat on WhatsApp
            </CTAButton>
          </div>

          {/* Trust Badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {TRUST_BADGES.slice(0, 5).map((badge) => (
              <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
