import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, DEMO_VIDEO_URL } from "@/lib/constants";
import { COURSES_UR } from "@/lib/courses-ur";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES_UR.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_UR.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.shortTitle} | پاکستان AI اکیڈمی`,
    description: course.description,
    keywords: [
      course.shortTitle,
      `${course.shortTitle} Pakistan`,
      "AI Course Pakistan",
      "Online AI Course",
      "Artificial Intelligence Course",
      ...course.topics.slice(0, 5),
    ],
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://www.pakistanaionlineacademy.com/ur/courses/${course.slug}`,
      type: "website",
      locale: "ur_PK",
    },
    alternates: {
      canonical: `https://www.pakistanaionlineacademy.com/ur/courses/${course.slug}`,
      languages: {
        en: `https://www.pakistanaionlineacademy.com/courses/${course.slug}`,
        ur: `https://www.pakistanaionlineacademy.com/ur/courses/${course.slug}`,
        'x-default': `https://www.pakistanaionlineacademy.com/courses/${course.slug}`,
      },
    },
  };
}

export default async function UrduCourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES_UR.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const courseSchema = generateCourseSchema(course as unknown as import('@/lib/constants').Course);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "کورسز", url: "/ur/courses" },
    { name: course.shortTitle, url: `/ur/courses/${course.slug}` },
  ]);

  const FAQ_DATA_UR = [
    { question: "کیا اس کورس کے لیے پروگرامنگ کا تجربہ ہونا ضروری ہے؟", answer: "جی نہیں، ہمارے تمام کورسز بالکل بنیادی سطح سے شروع ہوتے ہیں اور اس کے لیے کسی کوڈنگ یا پروگرامنگ کے پہلے سے تجربے کی ضرورت نہیں ہے۔" },
    { question: "کلاسز کس طرح منعقد کی جاتی ہیں؟", answer: "تمام کلاسز زوم (Zoom) یا گوگل میٹ (Google Meet) پر لائیو اور آن لائن منعقد کی جاتی ہیں۔ طلباء براہِ راست انسٹرکٹر سے بات کر سکتے ہیں اور سوال پوچھ سکتے ہیں۔" },
    { question: "بچوں کے کورسز کے لیے عمر کی حد کیا ہے؟", answer: "بچوں کے لیے ہمارے AI کورسز کی عمر کی حد 9 سے 15 سال ہے۔ ہم سیکھنے کو تفریحی اور دلکش بنانے کے لیے بلاک کوڈنگ کا استعمال کرتے ہیں۔" },
    { question: "کیا کورس کے اختتام پر سرٹیفکیٹ ملے گا؟", answer: "جی ہاں، ان تمام طلباء کو کورس مکمل کرنے پر تصدیق شدہ ڈیجیٹل سرٹیفکیٹ دیا جائے گا جو اسائنمنٹس اور فائنل پروجیکٹ کامیابی سے مکمل کریں گے۔" },
    { question: "کلاسز کے اوقات کار کیا ہیں؟", answer: "ہم ویک اینڈ (ہفتہ اور اتوار) اور ہفتے کے دیگر دنوں کی شام میں مختلف بیچز پیش کرتے ہیں۔ آپ اپنی سہولت کے مطابق وقت کا انتخاب کر سکتے ہیں۔" },
  ];
  const faqSchema = generateFAQSchema(FAQ_DATA_UR.slice(0, 4) as { question: string; answer: string }[]);

  const levelColors = {
    "Beginner": "bg-green-100 text-green-700",
    "Intermediate": "bg-yellow-100 text-yellow-700",
    "Advanced": "bg-red-100 text-red-700",
    "بگنر": "bg-green-100 text-green-700",
    "انٹرمیڈیٹ": "bg-yellow-100 text-yellow-700",
    "ایڈوانسڈ": "bg-red-100 text-red-700",
    "بگنر تا ایڈوانسڈ": "bg-blue-100 text-blue-700",
    "بگنر تا انٹرمیڈیٹ": "bg-purple-100 text-purple-700",
    "بگنر تا عملی لیول": "bg-indigo-100 text-indigo-700",
  };

  const otherCourses = COURSES_UR.filter((c) => c.slug !== course.slug).slice(0, 3);

  const whatsappMessage = `السلام علیکم! میں پاکستان AI آن لائن اکیڈمی کے ${course.shortTitle} میں دلچسپی رکھتا ہوں۔ کیا آپ مزید معلومات فراہم کر سکتے ہیں؟`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 pt-32 text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "ہوم", href: "/ur" },
              { label: "کورسز", href: "/ur/courses" },
              { label: course.shortTitle, href: `/ur/courses/${course.slug}` },
            ]}
          />
          <div className="mt-8 max-w-4xl mr-auto">
            <div className="flex items-center gap-4 mb-6 flex-row rtl:flex-row-reverse justify-end">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Icon name={course.icon} size={32} color="white" />
              </div>
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${levelColors[course.level as keyof typeof levelColors] || 'bg-primary/10 text-primary'}`}
              >
                {course.level}
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                {course.duration}
              </span>
            </div>
            <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-left rtl:text-right">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl text-left rtl:text-right">
              {course.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-start rtl:justify-end">
              <CTAButton variant="whatsapp" size="lg" href={WHATSAPP_LINK(whatsappMessage)}>
                واٹس ایپ پر ابھی داخلہ لیں
              </CTAButton>
              <CTAButton variant="outline" size="lg" href={DEMO_VIDEO_URL} external>
                مفت ڈیمو دیکھیں
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-white text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Illustration */}
              {course.image && (
                <div className="relative h-64 md:h-96 w-full mb-12 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Course Info Bar */}
              <div className="flex flex-wrap gap-6 mb-12 p-6 bg-surface rounded-2xl flex-row rtl:flex-row-reverse justify-start">
                <div className="flex items-center gap-2 flex-row rtl:flex-row-reverse">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-sm text-muted">دورانیہ</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-row rtl:flex-row-reverse">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-sm text-muted">سطح (Level)</p>
                    <p className="font-semibold">{course.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-row rtl:flex-row-reverse">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="text-sm text-muted">عمر کی حد</p>
                    <p className="font-semibold">{course.ageGroup}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-row rtl:flex-row-reverse">
                  <span className="text-2xl">🎥</span>
                  <div>
                    <p className="text-sm text-muted">فارمیٹ</p>
                    <p className="font-semibold">لائیو آن لائن</p>
                  </div>
                </div>
              </div>

              {/* What You Will Learn */}
              <div className="mb-12">
                <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6 text-left rtl:text-right">
                  آپ کیا سیکھیں گے
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left rtl:text-right">
                  {course.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-surface rounded-xl flex-row rtl:flex-row-reverse justify-end"
                    >
                      <span className="text-secondary font-bold text-lg mt-0.5">✓</span>
                      <span className="text-dark-light">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Features */}
              <div className="mb-12">
                <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6 text-left rtl:text-right">
                  کورس کی خصوصیات
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left rtl:text-right">
                  {course.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm flex-row rtl:flex-row-reverse justify-end"
                    >
                      <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="font-medium text-dark-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Path & Roadmap */}
              {course.learningPath && (
                <div className="mb-12">
                  <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6 text-left rtl:text-right">
                    روڈ میپ اور تعلیمی راستہ
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 justify-start rtl:justify-end flex-row rtl:flex-row-reverse">
                    {course.learningPath.map((step, i, arr) => (
                      <div key={i} className="flex items-center gap-2 mb-2 flex-row rtl:flex-row-reverse">
                        <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/10 text-primary font-semibold text-sm">
                          {step}
                        </div>
                        {i < arr.length - 1 && (
                          <span className="text-muted font-bold text-sm">➔</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Outcomes */}
              {course.learningOutcomes && (
                <div className="mb-12">
                  <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6 text-left rtl:text-right">
                    کورس کے نتائج
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left rtl:text-right">
                    {course.learningOutcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-gray-100 shadow-sm flex-row rtl:flex-row-reverse justify-end">
                        <span className="text-secondary font-bold text-lg mt-0.5">✓</span>
                        <span className="text-dark-light text-sm leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practical Projects */}
              {course.projects && (
                <div className="mb-12">
                  <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6 text-left rtl:text-right">
                    عملی پروجیکٹس جو آپ بنائیں گے
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left rtl:text-right">
                    {course.projects.map((project, i) => (
                      <div key={i} className="flex flex-col p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-primary/30 transition-colors duration-200">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-3 mr-0 ml-auto">
                          <Icon name="tools" size={20} color="secondary" />
                        </div>
                        <h4 className="font-outfit font-bold text-dark mb-1 text-sm">{project}</h4>
                        <p className="text-xs text-muted">عملی پروجیکٹ</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Syllabus / Class-by-Class Roadmap */}
              {course.syllabus && (
                <div className="mb-12">
                  <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6 text-left rtl:text-right">
                    کورس روڈ میپ اور تفصیلی نصاب
                  </h2>
                  <div className="space-y-8">
                    {course.syllabus.map((part, i) => (
                      <div key={i} className="space-y-4">
                        <h3 className="font-outfit text-xl font-bold text-primary border-b border-primary/20 pb-2 text-left rtl:text-right">
                          {part.partTitle}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left rtl:text-right">
                          {part.classes.map((cls, j) => (
                            <div key={j} className="p-5 bg-surface rounded-xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                              <div>
                                <span className="text-xs font-semibold text-secondary-light tracking-wide uppercase">
                                  کلاس {cls.number}
                                </span>
                                <h4 className="font-outfit font-bold text-dark text-base mt-1 mb-2">
                                  {cls.title}
                                </h4>
                                <ul className="space-y-1.5 text-left rtl:text-right">
                                  {cls.bullets.map((bullet, k) => (
                                    <li key={k} className="flex items-start gap-2 text-xs text-muted flex-row rtl:flex-row-reverse justify-end">
                                      <span className="text-primary mt-0.5">•</span>
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Who Is This Course For */}
              <div className="mb-12">
                <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6 text-left rtl:text-right">
                  یہ کورس کس کے لیے ہے؟
                </h2>
                <div className="prose max-w-none text-left rtl:text-right">
                  <p className="text-muted leading-relaxed mb-4">
                    یہ {course.shortTitle} ان افراد کے لیے بہترین ہے:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 flex-row rtl:flex-row-reverse justify-end">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">وہ طلباء جن کی عمر {course.ageGroup.replace("عمر ", "").replace(" سال", "")} یا اس سے زیادہ ہے اور وہ AI سیکھنا چاہتے ہیں</span>
                    </li>
                    <li className="flex items-start gap-3 flex-row rtl:flex-row-reverse justify-end">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">وہ والدین جو اپنے بچوں کو مستقبل کی جدید مہارتوں سے آراستہ کرنا چاہتے ہیں</span>
                    </li>
                    <li className="flex items-start gap-3 flex-row rtl:flex-row-reverse justify-end">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">مبتدی (Beginners) جن کے پاس پہلے سے پروگرامنگ کا کوئی تجربہ نہیں ہے</span>
                    </li>
                    <li className="flex items-start gap-3 flex-row rtl:flex-row-reverse justify-end">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">پاکستان بھر سے کوئی بھی شخص جو آن لائن آرٹیفیشل انٹیلیجنس سیکھنا چاہتا ہے</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Box */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-surface p-6 rounded-3xl border border-gray-100 shadow-sm text-left rtl:text-right">
                <h3 className="font-outfit font-bold text-xl text-dark mb-4">شروع کرنے کے لیے تیار ہیں؟</h3>
                <p className="text-sm text-muted mb-6 leading-relaxed">
                  داخلے اور کلاسز کے وقت کی معلومات کے لیے ہماری ٹیم سے رابطہ کریں۔
                </p>
                <div className="space-y-4">
                  <CTAButton
                    variant="whatsapp"
                    size="md"
                    className="w-full text-center flex justify-center"
                    href={WHATSAPP_LINK(whatsappMessage)}
                  >
                    واٹس ایپ پر رابطہ کریں
                  </CTAButton>
                  <CTAButton
                    variant="outline"
                    size="md"
                    className="w-full text-center flex justify-center"
                    href={DEMO_VIDEO_URL}
                    external
                  >
                    فری ڈیمو دیکھیں
                  </CTAButton>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-6 text-xs text-muted text-center font-medium">
                  یا براہِ راست رابطہ کریں: {WHATSAPP_NUMBER}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100 text-right rtl:text-right font-urdu">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="اکثر پوچھے گئے سوالات"
            subtitle="ہمارے AI کورسز کے بارے میں پوچھے جانے والے عام سوالات کے جوابات حاصل کریں۔"
            centered
          />
          <FAQAccordion items={FAQ_DATA_UR.slice(0, 4)} />
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-20 bg-white text-right rtl:text-right font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="دیگر کورسز"
            subtitle="ہماری اکیڈمی کے دیگر مقبول آن لائن AI کورسز دریافت کریں۔"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {otherCourses.map((c) => (
              <CourseCard key={c.slug} course={c as unknown as import('@/lib/constants').Course} lang="ur" />
            ))}
          </div>
        </div>
      </section>

      <CTASection lang="ur" />
    </>
  );
}
