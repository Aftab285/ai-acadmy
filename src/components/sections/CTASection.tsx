import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_NUMBER } from '@/lib/constants';
import CTAButton from '@/components/ui/CTAButton';

const TRANSLATIONS = {
  en: {
    heading: "Ready to Start Learning AI?",
    subtitle: "Join hundreds of students across Pakistan who are already building their future with Artificial Intelligence. Book a free demo class today — no commitment required.",
    button: "Chat on WhatsApp Now",
    support: "Or call / message us directly: ",
  },
  ur: {
    heading: "کیا آپ AI سیکھنے کے لیے تیار ہیں؟",
    subtitle: "پاکستان بھر کے ان سینکڑوں طلباء میں شامل ہوں جو آرٹیفیشل انٹیلیجنس کے ساتھ اپنا مستقبل روشن بنا رہے ہیں۔ آج ہی فری ڈیمو کلاس بک کریں۔",
    button: "ابھی واٹس ایپ پر چیٹ کریں",
    support: "یا ہمیں براہِ راست کال یا پیغام بھیجیں: ",
  },
} as const;

export default function CTASection({ lang = 'en' }: { lang?: 'en' | 'ur' }) {
  const isUrdu = lang === 'ur';
  const t = TRANSLATIONS[isUrdu ? 'ur' : 'en'];

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
          {t.heading}
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">
          {t.subtitle}
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <CTAButton
            variant="whatsapp"
            href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}
            size="lg"
            external
          >
            {t.button}
          </CTAButton>
        </div>

        {/* WhatsApp number */}
        <p className="mt-6 text-sm text-white/60">
          {t.support}{' '}
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
