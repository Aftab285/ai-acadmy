import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const TRANSLATIONS = {
  en: {
    title: "Why Learn Artificial Intelligence?",
    subtitle: "AI is the most transformative technology of our generation. Here's why every student should start learning AI today.",
    reasons: [
      {
        icon: 'robot',
        title: 'What is Artificial Intelligence?',
        paragraph:
          'Artificial Intelligence is the science of building smart machines that can think, learn, and solve problems like humans. From voice assistants to self-driving cars, AI is transforming every industry and reshaping how we live, work, and communicate.',
      },
      {
        icon: 'globe',
        title: 'Why AI Matters',
        paragraph:
          'AI is no longer a futuristic concept — it is here today, powering search engines, social media feeds, healthcare diagnostics, and financial systems. Understanding AI gives students a competitive edge in an increasingly technology-driven world.',
      },
      {
        icon: 'target',
        title: 'Future Jobs & Careers',
        paragraph:
          'According to the World Economic Forum, AI will create 97 million new jobs by 2025. Learning AI now prepares students for careers in data science, machine learning engineering, AI research, robotics, and many more high-demand fields.',
      },
      {
        icon: 'rocket',
        title: 'The Early Advantage',
        paragraph:
          'Students who start learning AI early develop stronger analytical thinking, problem-solving abilities, and computational skills. The earlier you begin, the more time you have to build deep expertise and stand out in academics and careers.',
      },
      {
        icon: 'palette',
        title: 'Creativity & Problem Solving',
        paragraph:
          'AI is not just about coding — it is about creative thinking and solving real-world problems. Students learn to use AI tools for generating art, writing stories, building apps, and creating solutions that make a positive impact on society.',
      },
      {
        icon: 'teacher',
        title: 'A Smart Investment for Parents',
        paragraph:
          'Investing in your child\'s AI education is investing in their future. AI skills are becoming as essential as reading and mathematics. Give your child the tools they need to succeed in the 21st century digital economy.',
      },
    ]
  },
  ur: {
    title: "آرٹیفیشل انٹیلیجنس کیوں سیکھیں؟",
    subtitle: "AI ہماری نسل کی سب سے انقلابی ٹیکنالوجی ہے۔ آئیے جانتے ہیں کہ کیوں ہر طالب علم کو آج ہی سے AI سیکھنا شروع کر دینا چاہیے۔",
    reasons: [
      {
        icon: 'robot',
        title: 'آرٹیفیشل انٹیلیجنس کیا ہے؟',
        paragraph:
          'آرٹیفیشل انٹیلیجنس (AI) اسمارٹ مشینیں بنانے کا علم ہے جو انسانوں کی طرح سوچنے، سیکھنے اور مسائل حل کرنے کی صلاحیت رکھتی ہیں۔ وائس اسسٹنٹس سے لے کر خودکار گاڑیوں تک، AI ہر شعبے کو بدل رہا ہے۔',
      },
      {
        icon: 'globe',
        title: 'AI کیوں اہم ہے؟',
        paragraph:
          'AI اب کوئی مستقبل کا تصور نہیں رہا — یہ آج موجود ہے، جو سرچ انجنوں، سوشل میڈیا، اور صحت کے شعبے کو طاقتور بنا رہا ہے۔ AI کو سمجھنا طلباء کو ایک انتہائی مسابقتی برتری فراہم کرتا ہے۔',
      },
      {
        icon: 'target',
        title: 'مستقبل کے روزگار اور مواقع',
        paragraph:
          'عالمی اقتصادی فورم کے مطابق، AI مستقبل میں کروڑوں نئی ملازمتیں پیدا کرے گا۔ ابھی سے AI سیکھنا طلباء کو ڈیٹا سائنس، مشین لرننگ، اور روبوٹکس جیسے اعلیٰ مانگ والے شعبوں کے لیے تیار کرتا ہے۔',
      },
      {
        icon: 'rocket',
        title: 'شروعات کا فائدہ',
        paragraph:
          'جو طلباء جلدی AI سیکھنا شروع کرتے ہیں ان میں تجزیاتی سوچ، پرابلم سالونگ اور حساب کتاب کی بہترین صلاحیتیں پیدا ہوتی ہیں۔ آپ جتنا جلدی شروع کریں گے، اتنا ہی زیادہ تجربہ حاصل کریں گے۔',
      },
      {
        icon: 'palette',
        title: 'تخلیقی صلاحیت اور مسائل کا حل',
        paragraph:
          'AI صرف کوڈنگ کا نام نہیں ہے — یہ تخلیقی سوچ اور حقیقی دنیا کے مسائل حل کرنے کے بارے میں ہے۔ طلباء آرٹ بنانے، کہانیاں لکھنے اور نئے حل تخلیق کرنے کے لیے AI کا استعمال سیکھتے ہیں۔',
      },
      {
        icon: 'teacher',
        title: 'والدین کے لیے بہترین سرمایہ کاری',
        paragraph:
          'اپنے بچے کی AI تعلیم میں سرمایہ کاری ان کے مستقبل کو محفوظ بنانا ہے۔ AI کی مہارتیں اب اتنی ہی ضروری ہوتی جا رہی ہیں جتنا کہ ریاضی یا لکھنا پڑھنا۔ اپنے بچوں کو کل کی ڈیجیٹل معیشت کے لیے تیار کریں۔',
      },
    ]
  },
} as const;

export default function WhyLearnAI({ lang = 'en' }: { lang?: 'en' | 'ur' }) {
  const isUrdu = lang === 'ur';
  const t = TRANSLATIONS[isUrdu ? 'ur' : 'en'];

  return (
    <section className="py-20 lg:py-28 bg-white text-right rtl:text-right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.reasons.map((reason, index) => (
            <article
              key={index}
              className="card-hover group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all text-left rtl:text-right"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors mx-0 rtl:ml-auto">
                <Icon name={reason.icon} size={28} color="primary" />
              </div>

              {/* Title */}
              <h3 className="font-outfit text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors text-left rtl:text-right">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted text-left rtl:text-right">
                {reason.paragraph}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
