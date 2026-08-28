import Link from 'next/link';
import type { Course } from '@/lib/constants';
import { WHATSAPP_LINK } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

interface CourseCardProps {
  course: Course;
  lang?: 'en' | 'ur';
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
  'بگنر': 'bg-green-100 text-green-700',
  'انٹرمیڈیٹ': 'bg-amber-100 text-amber-700',
  'ایڈوانسڈ': 'bg-red-100 text-red-700',
  'بگنر تا ایڈوانسڈ': 'bg-blue-100 text-blue-700',
  'بگنر تا انٹرمیڈیٹ': 'bg-purple-100 text-purple-700',
  'بگنر تا عملی لیول': 'bg-indigo-100 text-indigo-700',
};

const COURSE_DATA_UR: Record<string, {
  shortTitle: string;
  description: string;
  level: string;
  duration: string;
  ageGroup: string;
  skillsTaughtLabel: string;
  viewDetailsLabel: string;
  enrollLabel: string;
  topics: string[];
  features: string[];
}> = {
  "beginner-ai-course": {
    shortTitle: "بگنر AI کورس",
    description: "بچوں اور کمپیوٹر کے بنیادی استعمال سے واقف افراد کے لیے ایک زبردست آغاز۔ بلاک کوڈنگ اور بنیادی AI تصورات سیکھیں۔",
    level: "بگنر",
    duration: "1 ماہ",
    ageGroup: "عمر 9+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["بنیادی کمپیوٹر کوڈنگ", "آرٹیفیشل انٹیلیجنس", "بلاک کوڈنگ"],
    features: ["ہفتہ وار لائیو کلاسز", "عملی پروجیکٹس اور اسائنمنٹس"],
  },
  "intermediate-ai-course": {
    shortTitle: "انٹرمیڈیٹ AI کورس",
    description: "چیٹ جی پی ٹی، مڈجرنی اور پرامپٹ انجینئرنگ کے ذریعے اپنی تخلیقی اور پیداواری صلاحیتوں کو بڑھائیں۔",
    level: "انٹرمیڈیٹ",
    duration: "1 ماہ",
    ageGroup: "عمر 12+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["پرامپٹ انجینئرنگ", "چیٹ جی پی ٹی", "AI آرٹ ڈیزائن"],
    features: ["لائیو پریکٹیکل کلاسز", "پروڈکٹیوٹی اور ریسرچ ٹولز"],
  },
  "advanced-ai-course": {
    shortTitle: "ایڈوانسڈ AI کورس",
    description: "مشین لرننگ، ڈیٹا سائنس اور نیورل نیٹ ورکس کے بنیادی تصورات۔ پائتھون کے ذریعے ماڈلز بنانا سیکھیں۔",
    level: "ایڈوانسڈ",
    duration: "2 ماہ",
    ageGroup: "عمر 15+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["پائتھون پروگرامنگ", "مشین لرننگ", "نیورل نیٹ ورکس"],
    features: ["لائیو کلاسز اور رہنمائی", "انڈسٹری کے مطابق اسائنمنٹس"],
  },
  "chatgpt-course": {
    shortTitle: "چیٹ جی پی ٹی کورس",
    description: "چیٹ جی پی ٹی کو ماسٹر کریں اور روزمرہ کے کاموں، مواد نویسی، اور پروگرامنگ میں اس کا استعمال سیکھیں۔",
    level: "بگنر تا ایڈوانسڈ",
    duration: "1 ماہ",
    ageGroup: "عمر 12+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["چیٹ جی پی ٹی", "مواد نویسی", "پیداواری صلاحیت"],
    features: ["ماہر اساتذہ کے ساتھ سیشنز", "عملی استعمال کی مشقیں"],
  },
  "generative-ai-course": {
    shortTitle: "جنریٹو AI کورس",
    description: "ٹیکسٹ، امیجز اور ویڈیوز تخلیق کرنے والے جنریٹو AI ٹولز کا بھرپور استعمال سیکھیں۔",
    level: "انٹرمیڈیٹ",
    duration: "1 ماہ",
    ageGroup: "عمر 12+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["جنریٹو ماڈلز", "امیج جنریشن", "ویڈیو کریشن"],
    features: ["لائیو ڈیمو اور پروجیکٹس", "حقیقی دنیا کی مثالیں"],
  },
  "prompt-engineering-course": {
    shortTitle: "پرامپٹ انجینئرنگ کورس",
    description: "مختلف AI ماڈلز سے بہترین نتائج حاصل کرنے کے لیے موثر پرامپٹس لکھنے کے طریقے سیکھیں۔",
    level: "انٹرمیڈیٹ",
    duration: "1 ماہ",
    ageGroup: "عمر 12+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["پرامپٹ ڈیزائن", "لاجک اور اسٹرکچر", "ماڈل ٹیوننگ"],
    features: ["پریکٹیکل ہینڈز آن لیبز", "پرامپٹس کا لائیو ٹیسٹ"],
  },
  "ai-tools-course": {
    shortTitle: "AI ٹولز کورس",
    description: "روڈ میپ اور روزمرہ کے کاموں کو تیز کرنے والے درجنوں جدید ترین AI ٹولز کا استعمال۔",
    level: "بگنر",
    duration: "15 دن تا 1 ماہ",
    ageGroup: "عمر 10+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["روزمرہ کے AI ٹولز", "آٹومیشن", "پیداواری ٹولز"],
    features: ["لائیو کلاس روم ٹریننگ", "ٹولز کا عملی استعمال"],
  },
  "python-programming-course": {
    shortTitle: "Python پروگرامنگ کورس",
    description: "پائتھون پروگرامنگ کی بنیادی اور ایڈوانسڈ لاجک سیکھیں — بالکل شروع سے۔",
    level: "بگنر تا انٹرمیڈیٹ",
    duration: "2 ماہ",
    ageGroup: "عمر 12+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["Python سنٹیکس", "ڈیٹا اسٹرکچرز", "فنکشنز اور او او پی"],
    features: ["ماہر انسٹرکٹر کی لائیو کلاسز", "کوڈنگ ایکسرسائزز"],
  },
  "python-ai-development-course": {
    shortTitle: "Python اور AI ڈیولپمنٹ کورس",
    description: "پائتھون سیکھیں اور اس میں مختلف AI ماڈلز اور APIs کو مربوط کر کے ویب ایپس بنانا سیکھیں۔",
    level: "بگنر تا عملی لیول",
    duration: "2 ماہ",
    ageGroup: "عمر 12+",
    skillsTaughtLabel: "سیکھی جانے والی اہم مہارتیں:",
    viewDetailsLabel: "تفصیلات دیکھیں",
    enrollLabel: "ابھی داخلہ لیں",
    topics: ["Python پروگرامنگ", "AI ماڈلز انٹیگریشن", "ویب ایپس ڈیولپمنٹ"],
    features: ["لائیو کلاس روم سیشنز", "حقیقی پورٹ فولیو بلڈنگ"],
  },
};

export default function CourseCard({ course, lang = 'en' }: CourseCardProps) {
  const isUrdu = lang === 'ur';
  const urData = COURSE_DATA_UR[course.slug];

  const title = isUrdu && urData ? urData.shortTitle : course.shortTitle;
  const description = isUrdu && urData ? urData.description : course.description;
  const level = isUrdu && urData ? urData.level : course.level;
  const duration = isUrdu && urData ? urData.duration : course.duration;
  const ageGroup = isUrdu && urData ? urData.ageGroup : course.ageGroup;
  const skillsTaughtLabel = isUrdu && urData ? urData.skillsTaughtLabel : "Main Skills Taught:";
  const viewDetailsLabel = isUrdu && urData ? urData.viewDetailsLabel : "View Details";
  const enrollLabel = isUrdu && urData ? urData.enrollLabel : "Enroll Now";
  const topics = isUrdu && urData ? urData.topics : course.topics;
  const features = isUrdu && urData ? urData.features : course.features;

  const whatsappMessage = isUrdu
    ? `السلام علیکم! میں پاکستان AI آن لائن اکیڈمی کے ${title} میں دلچسپی رکھتا ہوں۔ کیا آپ مزید معلومات فراہم کر سکتے ہیں؟`
    : `Hi! I'm interested in the ${course.shortTitle} at Pakistan AI Online Academy. Can you share more details?`;

  return (
    <article className="card-hover group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg text-right rtl:text-right">
      {/* Gradient top border */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${course.color}`}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Icon & Level */}
        <div className="mb-4 flex items-start justify-between flex-row-reverse">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon name={course.icon} size={26} color="primary" />
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[level] || 'bg-primary/10 text-primary'}`}
          >
            {level}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-outfit text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors text-left rtl:text-right">
          <Link href={isUrdu ? `/ur/courses/${course.slug}` : `/courses/${course.slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-muted line-clamp-3 leading-relaxed text-left rtl:text-right">
          {description}
        </p>

        {/* Meta info */}
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted justify-start rtl:justify-end flex-row-reverse">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {ageGroup}
          </span>
        </div>

        {/* Main Skills (first 3) */}
        <div className="mb-4 text-left rtl:text-right">
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-2">{skillsTaughtLabel}</span>
          <div className="flex flex-wrap gap-1.5 justify-start rtl:justify-end">
            {topics.slice(0, 3).map((topic) => (
              <span key={topic} className="px-2 py-0.5 bg-surface rounded text-xs text-dark-light font-medium">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Features (first 2) */}
        <ul className="mb-6 flex-1 space-y-1.5 border-t border-gray-100 pt-4 text-left rtl:text-right">
          {features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-muted flex-row rtl:flex-row-reverse justify-start">
              <svg className="h-3.5 w-3.5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={isUrdu ? `/ur/courses/${course.slug}` : `/courses/${course.slug}`}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-dark hover:bg-surface hover:text-primary transition-colors"
          >
            {viewDetailsLabel}
          </Link>
          <a
            href={WHATSAPP_LINK(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-primary to-primary-light px-3 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            {enrollLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
