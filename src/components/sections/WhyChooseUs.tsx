import { WHY_CHOOSE_US } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const TRANSLATIONS = {
  en: {
    title: "Why Choose Pakistan AI Online Academy",
    subtitle: "We provide the best online AI learning experience in Pakistan with expert instruction, modern curriculum, and personalized attention.",
    items: WHY_CHOOSE_US,
  },
  ur: {
    title: "پاکستان AI آن لائن اکیڈمی کا انتخاب کیوں کریں؟",
    subtitle: "ہم ماہر اساتذہ، جدید ترین نصاب اور خصوصی توجہ کے ساتھ پورے پاکستان میں آن لائن AI سیکھنے کا بہترین تجربہ فراہم کرتے ہیں۔",
    items: [
      { icon: "video", title: "لائیو آن لائن کلاسز", description: "حقیقی وقت میں براہِ راست اساتذہ کے ساتھ سیکھیں، کوڈ کریں اور اپنے سوالات پوچھیں۔" },
      { icon: "teacher", title: "ماہر اساتذہ", description: "صنعت کے تجربہ کار اساتذہ کے زیرِ نگرانی سیکھیں جن کے پاس حقیقی فیلڈ کا تجربہ ہے۔" },
      { icon: "tools", title: "پروجیکٹ بیسڈ لرننگ", description: "حقیقی دنیا کی AI ایپس اور کوڈنگ پروجیکٹس بنا کر اپنا پورٹ فولیو تیار کریں۔" },
      { icon: "book", title: "جدید ترین نصاب", description: "چیٹ جی پی ٹی، مڈجرنی اور پائتھون جیسے جدید ترین ٹولز پر مشتمل نصاب۔" },
      { icon: "student", title: "محدود طلباء کی تعداد", description: "ہر بیچ میں طلباء کی محدود تعداد تاکہ ہر طالب علم کو خصوصی اور انفرادی توجہ مل سکے۔" },
      { icon: "time", title: "لچکدار اوقات کار", description: "ہفتے کے آخر (ویک اینڈ) اور شام کے اوقات میں کلاسز تاکہ آپ کی دیگر مصروفیات متاثر نہ ہوں۔" },
      { icon: "seed", title: "کوڈنگ کی ضرورت نہیں", description: "بالکل بنیادی تصورات سے شروع ہونے والے بگنر فرینڈلی کورسز جو ہر کوئی سیکھ سکتا ہے۔" },
      { icon: "certificate", title: "سرٹیفیکیشن", description: "کورس کی کامیابی سے تکمیل پر پاکستان AI آن لائن اکیڈمی کا معتبر سرٹیفکیٹ حاصل کریں۔" },
    ]
  },
} as const;

export default function WhyChooseUs({ lang = 'en' }: { lang?: 'en' | 'ur' }) {
  const isUrdu = lang === 'ur';
  const t = TRANSLATIONS[isUrdu ? 'ur' : 'en'];

  return (
    <section className="section-gradient-light py-20 lg:py-28 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {t.items.map((usp, index) => (
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
