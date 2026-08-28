import { TESTIMONIALS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';

const TRANSLATIONS = {
  en: {
    title: "What Our Students Say",
    subtitle: "Hear from parents and students across Pakistan who have experienced our AI courses firsthand.",
    items: TESTIMONIALS.map(t => ({
      ...t,
      avatar: t.name.split(' ').map(n => n[0]).join('')
    })),
  },
  ur: {
    title: "ہمارے طلباء کیا کہتے ہیں؟",
    subtitle: "پورے پاکستان سے ان والدین اور طلباء کی زبانی سنیں جنہوں نے ہمارے AI کورسز کا تجربہ کیا ہے۔",
    items: [
      { id: 1, name: "زینب راشد", role: "10 سالہ بچے کی والدہ", location: "لاہور", quote: "میری بیٹی ہمیشہ ان کلاسز کا انتظار کرتی تھی۔ پروجیکٹ پر مبنی تدریس نے ایک بچے کے لیے بھی AI کے پیچیدہ تصورات کو آسان بنا دیا۔", rating: 5, avatar: "ز" },
      { id: 2, name: "محمد احمد", role: "اسکول کا طالب علم", location: "کراچی", quote: "چیٹ جی پی ٹی اور پرامپٹ انجینئرنگ سیکھنے سے میرے اسکول پروجیکٹس بنانے کا طریقہ بالکل بدل گیا ہے۔ مجھے لگتا ہے کہ میں اپنے وقت سے آگے ہوں۔", rating: 5, avatar: "م" },
      { id: 3, name: "عائشہ خان", role: "13 سالہ بچے کی والدہ", location: "اسلام آباد", quote: "پاکستان AI اکیڈمی کی انتہائی سفارش کرتی ہوں! انسٹرکٹر بہت صبر سے پڑھاتے ہیں اور ہر چیز کو بگنر فرینڈلی انداز میں سمجھاتے ہیں۔", rating: 5, avatar: "ع" },
    ]
  },
} as const;

export default function Testimonials({ lang = 'en' }: { lang?: 'en' | 'ur' }) {
  const isUrdu = lang === 'ur';
  const t = TRANSLATIONS[isUrdu ? 'ur' : 'en'];

  return (
    <section className="section-gradient-light py-20 lg:py-28 text-right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left rtl:text-right">
          {t.items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial as unknown as import('@/lib/constants').Testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
