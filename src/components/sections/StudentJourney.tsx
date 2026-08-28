import { STUDENT_JOURNEY, DEMO_VIDEO_URL } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import StepCard from '@/components/ui/StepCard';
import CTAButton from '@/components/ui/CTAButton';

const TRANSLATIONS = {
  en: {
    title: "Your Learning Journey",
    subtitle: "Getting started with AI is easy. Follow these simple steps to begin your journey at Pakistan AI Online Academy.",
    button: "Watch Free Demo",
    steps: STUDENT_JOURNEY,
  },
  ur: {
    title: "آپ کا تعلیمی سفر",
    subtitle: "AI سیکھنا شروع کرنا انتہائی آسان ہے۔ پاکستان AI آن لائن اکیڈمی میں اپنا تعلیمی سفر شروع کرنے کے لیے ان آسان مراحل پر عمل کریں۔",
    button: "مفت ڈیمو دیکھیں",
    steps: [
      { step: 1, icon: "search", title: "کورس کا انتخاب کریں", description: "ہمارے کورسز کی فہرست دیکھیں اور اپنی دلچسپی اور مقاصد کے مطابق کورس منتخب کریں۔" },
      { step: 2, icon: "video", title: "مفت ڈیمو کلاس لیں", description: "اساتذہ کے پڑھانے کے طریقے کو لائیو دیکھنے اور اپنے سوالات پوچھنے کے لیے ڈیمو کلاس میں شرکت کریں۔" },
      { step: 3, icon: "student", title: "لائیو کلاسز میں شرکت کریں", description: "اپنے شیڈول کے مطابق آن لائن کلاس روم میں شامل ہوں، کوڈنگ کریں اور AI پر کام شروع کریں۔" },
      { step: 4, icon: "tools", title: "AI پروجیکٹس بنائیں", description: "کلاسز میں حاصل کردہ علم کو استعمال کر کے حقیقی دنیا کی AI ایپلی کیشنز اور پروجیکٹس تیار کریں۔" },
      { step: 5, icon: "certificate", title: "سرٹیفکیٹ حاصل کریں", description: "کورس کے اسائنمنٹس اور پروجیکٹس کامیابی سے مکمل کر کے اپنا مستند AI سرٹیفکیٹ حاصل کریں۔" },
    ]
  },
} as const;

export default function StudentJourney({ lang = 'en' }: { lang?: 'en' | 'ur' }) {
  const isUrdu = lang === 'ur';
  const t = TRANSLATIONS[isUrdu ? 'ur' : 'en'];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="mx-auto max-w-xl">
          {t.steps.map((item, index) => (
            <StepCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={item.icon}
              isLast={index === t.steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <CTAButton
            variant="primary"
            href={DEMO_VIDEO_URL}
            size="lg"
            external
          >
            {t.button}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
