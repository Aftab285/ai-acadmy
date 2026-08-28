import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateCourseSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { COURSES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = generatePageMetadata({
  title: "آن لائن AI کورسز | پاکستان AI اکیڈمی",
  description:
    "طلباء اور مبتدیوں کے لیے آن لائن AI کورسز۔ لائیو کلاسز کے ذریعے مشین لرننگ، چیٹ جی پی ٹی اور پائتھون سیکھیں۔",
  path: "/ur/courses",
  keywords: [
    "AI Courses Pakistan",
    "Artificial Intelligence Courses",
    "Online AI Classes",
    "Machine Learning Course",
    "ChatGPT Course",
    "Generative AI Course",
    "پاکستان میں AI کورسز",
  ],
});

const FAQ_DATA_UR = [
  { question: "کیا اس کورس کے لیے پروگرامنگ کا تجربہ ہونا ضروری ہے؟", answer: "جی نہیں، ہمارے تمام کورسز بالکل بنیادی سطح سے شروع ہوتے ہیں اور اس کے لیے کسی کوڈنگ یا پروگرامنگ کے پہلے سے تجربے کی ضرورت نہیں ہے۔" },
  { question: "کلاسز کس طرح منعقد کی جاتی ہیں؟", answer: "تمام کلاسز زوم (Zoom) یا گوگل میٹ (Google Meet) پر لائیو اور آن لائن منعقد کی جاتی ہیں۔ طلباء براہِ راست انسٹرکٹر سے بات کر سکتے ہیں اور سوال پوچھ سکتے ہیں۔" },
  { question: "بچوں کے کورسز کے لیے عمر کی حد کیا ہے؟", answer: "بچوں کے لیے ہمارے AI کورسز کی عمر کی حد 9 سے 15 سال ہے۔ ہم سیکھنے کو تفریحی اور دلکش بنانے کے لیے بلاک کوڈنگ کا استعمال کرتے ہیں۔" },
  { question: "کیا کورس کے اختتام پر سرٹیفکیٹ ملے گا؟", answer: "جی ہاں، ان تمام طلباء کو کورس مکمل کرنے پر تصدیق شدہ ڈیجیٹل سرٹیفکیٹ دیا جائے گا جو اسائنمنٹس اور فائنل پروجیکٹ کامیابی سے مکمل کریں گے۔" },
  { question: "کلاسز کے اوقات کار کیا ہیں؟", answer: "ہم ویک اینڈ (ہفتہ اور اتوار) اور ہفتے کے دیگر دنوں کی شام میں مختلف بیچز پیش کرتے ہیں۔ آپ اپنی سہولت کے مطابق وقت کا انتخاب کر سکتے ہیں۔" },
];

export default function UrduCoursesPage() {
  const breadcrumbs = [
    { name: "ہوم", url: "/ur" },
    { name: "کورسز", url: "/ur/courses" },
  ];

  const courseSchemas = COURSES.map((course) => generateCourseSchema(course));
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="hero-gradient py-20 pt-32 text-right rtl:text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[
              { label: "ہوم", href: "/ur" },
              { label: "کورسز", href: "/ur/courses" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            پاکستان میں آن لائن AI کورسز
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-urdu">
            پاکستان AI آن لائن اکیڈمی پاکستان بھر کے طلباء، مبتدیوں اور کم عمر سیکھنے والوں کے لیے لائیو آن لائن AI کورسز پیش کرتی ہے۔ ہمارے احتیاط سے ڈیزائن کیے گئے پروگراموں میں سے انتخاب کریں جو بنیادی باتوں سے لے کر ایڈوانسڈ ڈیپ لرننگ تک احاطہ کرتے ہیں۔
          </p>
        </div>
      </section>

      {/* Course Level Filters */}
      <section className="py-8 bg-white border-b border-gray-100 font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              تمام کورسز
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700">
              بگنر
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
              انٹرمیڈیٹ
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700">
              ایڈوانسڈ
            </span>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} lang="ur" />
            ))}
          </div>
        </div>
      </section>

      {/* Which AI Course Is Right for You? */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100 text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="کون سا AI کورس آپ کے لیے صحیح ہے؟"
            subtitle="اپنی مہارت اور مقاصد کے مطابق بہترین کورس کا انتخاب کریں۔"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left rtl:text-right">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">عمر 9+ سال</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">بچوں کے لیے AI کورسز</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">دلچسپ پروجیکٹس کے ذریعے بچوں کو کمپیوٹر لاجک، چیٹ جی پی ٹی کے اصول اور محفوظ AI عادات سکھائیں۔</p>
              </div>
              <a href="/ur/ai-course-for-kids-in-pakistan" className="text-primary text-xs font-bold hover:underline">تفصیلات دیکھیں ➔</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">بگنر لیول</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">مبتدیوں کے لیے کورسز</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">بالکل شروع سے سیکھیں۔ آرٹیفیشل انٹیلیجنس کے ساتھ کام کرنا، پرامپٹ لکھنا اور اپنی پڑھائی یا کام میں اس کا استعمال سیکھیں۔</p>
              </div>
              <a href="#beginner" className="text-primary text-xs font-bold hover:underline">بگنر کورسز دیکھیں ➔</a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded-full uppercase tracking-wider">عمر 12+ سال</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">طلباء کے لیے کورسز</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">پائتھون اور AI APIs کا استعمال کرتے ہوئے لاجک اور پرابلم سالونگ کی مہارتیں پیدا کریں تاکہ خود کو یونیورسٹی یا فری لانسنگ کے لیے تیار کر سکیں۔</p>
              </div>
              <a href="#students" className="text-primary text-xs font-bold hover:underline">طلباء کے کورسز دیکھیں ➔</a>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full uppercase tracking-wider">ایڈوانسڈ</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">ایڈوانسڈ AI کورسز</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">پائتھون کے ذریعے مشین لرننگ، کلاسیفیکیشن ماڈلز، ڈیٹا سیٹ پروسیسنگ، نیورل نیٹ ورکس اور کمپیوٹر وژن کو ماسٹر کریں۔</p>
              </div>
              <a href="#advanced" className="text-primary text-xs font-bold hover:underline">ایڈوانسڈ کورسز دیکھیں ➔</a>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences Sections */}
      <section className="py-20 bg-white text-right rtl:text-right font-urdu" id="demographics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Beginner Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="beginner">
            <div className="text-left rtl:text-right">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">شروع سے سیکھیں</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">مبتدیوں کے لیے AI کورسز</h2>
              <p className="text-muted leading-relaxed mb-6">
                ہمارے بگنر فرینڈلی کورسز خاص طور پر ان لوگوں کے لیے تیار کیے گئے ہیں جن کا پہلے سے کوئی کوڈنگ یا تکنیکی پس منظر نہیں ہے۔ ہم آسان، مرحلہ وار ماڈلز کے ذریعے آپ کی رہنمائی کرتے ہیں تاکہ آپ آرٹیفیشل انٹیلیجنس کے کام کرنے کے طریقے کو سمجھ سکیں۔
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">بگنر AI کورس اور چیٹ جی پی ٹی کورس شامل ہیں</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">مرحلہ وار رہنمائی کے ساتھ 100% لائیو سیشنز</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">چیٹ جی پی ٹی، پرامپٹ انجینئرنگ اور دیگر AI ٹولز سیکھیں</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 text-left rtl:text-right">
              <h3 className="font-outfit font-bold text-xl mb-4">🌟 حاصل ہونے والی اہم مہارتیں</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">ہمارے مبتدی کورسز کے فارغ التحصیل طلباء کام یا پڑھائی کے لیے AI ٹولز کا استعمال، تحریر کو خودکار بنانا اور بہترین پرامپٹس لکھنا سیکھتے ہیں۔</p>
              <div className="flex flex-wrap gap-2 justify-start rtl:justify-end">
                {["پرامپٹ انجینئرنگ", "چیٹ جی پی ٹی", "مڈجرنی", "گوگل جیمنائی", "AI کی بنیادی معلومات"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Students Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="students">
            <div className="lg:order-2 text-left rtl:text-right">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full uppercase tracking-wider">مستقبل کی مہارتیں</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">طلباء کے لیے AI کورسز</h2>
              <p className="text-muted leading-relaxed mb-6">
                ہائی اسکول اور یونیورسٹی کے طلباء کے لیے ڈیزائن کردہ ہمارے پروگراموں کا مقصد تجزیاتی سوچ اور بنیادی ڈیولپمنٹ لاجک سکھانا ہے۔ پائتھون کوڈنگ کو AI ماڈلز کے ساتھ مربوط کر کے، طلباء ایسے پروجیکٹس بناتے ہیں جو انہیں اعلیٰ تعلیم اور فری لانسنگ کے لیے تیار کرتے ہیں۔
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">پائتھون پروگرامنگ اور پائتھون AI ڈیولپمنٹ کورس شامل ہیں</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">حقیقی APIs (جیسے OpenAI API) کو مربوط کرنا سیکھیں</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">اپنا لائیو ویب انٹرفیس (Streamlit) بنائیں اور ہوسٹ کریں</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 lg:order-1 text-left rtl:text-right">
              <h3 className="font-outfit font-bold text-xl mb-4">💻 کوڈنگ اور لاجک کی مہارتیں</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">طلباء نہ صرف کوڈنگ کی بنیادی باتیں سیکھتے ہیں بلکہ اپنے بنائے گئے پروجیکٹس کو پورٹ فولیو کی شکل میں آن لائن پیش کرنے کے قابل بھی ہو جاتے ہیں۔</p>
              <div className="flex flex-wrap gap-2 justify-start rtl:justify-end">
                {["پائتھون (Python)", "AI APIs", "سٹریملٹ (Streamlit)", "ڈیٹا پروسیسنگ", "لاجک بلڈنگ"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Kids Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="kids">
            <div className="text-left rtl:text-right">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full uppercase tracking-wider">عمر 9 سے 15 سال</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">بچوں کے لیے AI کورسز</h2>
              <p className="text-muted leading-relaxed mb-6">
                ہم بچوں کو کوڈنگ اور AI کی دنیا سے تفریحی اور دلکش انداز میں متعارف کرواتے ہیں۔ بلاک کوڈنگ اور آسان کھیل کود پر مبنی پروجیکٹس کا استعمال کرتے ہوئے، بچے بغیر کسی الجھن کے لاجک، پرامپٹ انجینئرنگ اور جدید ٹولز کا درست استعمال سیکھتے ہیں۔
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">بچوں کے لیے ڈیزائن کردہ بگنر AI کورس</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">صحیح اور محفوظ طریقے سے AI کا استعمال سیکھیں</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">بلاک کوڈنگ کے ذریعے اپنے گیمز اور ایپس بنائیں</span>
                </div>
              </div>
              <a href="/ur/ai-course-for-kids-in-pakistan" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline">بچوں کے کورس کی مکمل تفصیلات ➔</a>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 text-left rtl:text-right">
              <h3 className="font-outfit font-bold text-xl mb-4">🧸 انٹرایکٹو تدریسی ماڈل</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">ہمارا نصاب بچوں کی تخلیقی سوچ اور منطقی صلاحیتوں کو نکھارنے کے لیے تیار کیا گیا ہے تاکہ وہ کل کے خالق بن سکیں۔</p>
              <div className="flex flex-wrap gap-2 justify-start rtl:justify-end">
                {["بلاک پروگرامنگ", "بنیادی کوڈنگ", "تخلیقی صلاحیت", "مسائل کا حل", "محفوظ AI عادات"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="advanced">
            <div className="lg:order-2 text-left rtl:text-right">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase tracking-wider">ایڈوانسڈ لیول</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">ایڈوانسڈ AI لرننگ</h2>
              <p className="text-muted leading-relaxed mb-6">
                ان طلباء کے لیے جو AI کی فیلڈ میں گہرائی سے جانا چاہتے ہیں۔ ہمارا ایڈوانسڈ پائتھون اور مشین لرننگ کورس نیورل نیٹ ورکس، کلاسیفیکیشن الگورتھم، ڈیٹا پروسیسنگ اور امیج ریکگنیشن کے تصورات کا احاطہ کرتا ہے تاکہ آپ حقیقی ماڈلز بنا سکیں۔
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">ایڈوانسڈ AI کورس اور مشین لرننگ کے تصورات</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">ڈیٹا سیٹس کو پروسیس کرنا اور ماڈلز کو ٹرین کرنا سیکھیں</span>
                </div>
                <div className="flex items-start gap-2 flex-row rtl:flex-row-reverse justify-end">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">کمپیوٹر وژن، نیورل نیٹ ورکس اور امیج کلاسیفیکیشن</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 lg:order-1 text-left rtl:text-right">
              <h3 className="font-outfit font-bold text-xl mb-4">🚀 ڈیپ ٹیک اور ماڈل بلڈنگ</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">ایڈوانسڈ بیچز کے طلباء مشین لرننگ کے عملی ماڈلز بنانا اور انہیں مختلف ایپلی کیشنز میں استعمال کرنا سیکھتے ہیں۔</p>
              <div className="flex flex-wrap gap-2 justify-start rtl:justify-end">
                {["مشین لرننگ (ML)", "ڈیٹا سائنس", "نیورل نیٹ ورکس", "کمپیوٹر وژن", "پائتھون لائبریریز"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white text-right rtl:text-right font-urdu">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="اکثر پوچھے گئے سوالات"
            subtitle="ہمارے کورسز اور لائیو کلاسز کے بارے میں عام طور پر پوچھے جانے والے سوالات کے جوابات۔"
            centered
          />
          <FAQAccordion items={FAQ_DATA_UR} />
        </div>
      </section>

      <CTASection lang="ur" />
    </>
  );
}
