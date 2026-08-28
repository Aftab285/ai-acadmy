import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { WHATSAPP_LINK, DEMO_VIDEO_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "طلبہ کے AI پروجیکٹس — ہمارے طلبہ کے تیار کردہ حقیقی پروجیکٹس",
  description:
    "پاکستان AI آن لائن اکیڈمی کے طلبہ کے تیار کردہ حقیقی AI پروجیکٹس دیکھیں۔ چیٹ بوٹس سے لے کر امیج کلاسیفائر تک — ہمارے طلبہ عملی اور حقیقی دنیا کی مصنوعات بنا کر سیکھتے ہیں۔",
  path: "/ur/student-projects",
  keywords: [
    "AI Student Projects Urdu",
    "AI Projects Pakistan Urdu",
    "Student AI Projects Pakistan",
    "Learn AI by Building Urdu",
    "AI Project Ideas Pakistan",
    "Artificial Intelligence Projects Urdu",
  ],
});

export interface StudentProject {
  id: number;
  title: string;
  description: string;
  skills: string[];
  category: string;
  studentName: string;
  studentAge: number;
  courseTaken: string;
  courseSlug: string;
  whatLearned: string;
}

const STUDENT_PROJECTS_UR: StudentProject[] = [
  {
    id: 1,
    title: "اسکول کے سوالات کے لیے AI چیٹ بوٹ",
    description: "ایک ذہین چیٹ بوٹ جو Beginner AI Course میں سیکھی گئی قدرتی زبان کی پروسیسنگ (NLP) تکنیکوں کا استعمال کرتے ہوئے اسکول سے متعلق عام سوالات کے جوابات دیتا ہے۔",
    skills: ["NLP", "Python", "ChatGPT API"],
    category: "چیٹ بوٹ",
    studentName: "احمد کے۔",
    studentAge: 14,
    courseTaken: "Beginner AI Course",
    courseSlug: "beginner-ai-course",
    whatLearned: "قدرتی زبان کی پروسیسنگ کے بنیادی اصول، پرامپٹ ڈیزائن، اور ازگر (Python) کے ذریعے OpenAI کے API کو مربوط کرنا سیکھا۔",
  },
  {
    id: 2,
    title: "امیج کلاسیفیکیشن ایپ",
    description: "مشین لرننگ اور کمپیوٹر وژن کا استعمال کرتے ہوئے جانوروں کی تصاویر کو مختلف کیٹیگریز میں درجہ بندی کرنے والی ایک AI سے چلنے والی ایپلی کیشن۔",
    skills: ["Machine Learning", "Computer Vision", "Python"],
    category: "کمپیوٹر وژن",
    studentName: "فاطمہ زیڈ۔",
    studentAge: 16,
    courseTaken: "Intermediate AI Course",
    courseSlug: "intermediate-ai-course",
    whatLearned: "امیج فیچر ایکسٹریکشن، کنوولوشنل نیورل نیٹ ورکس (CNNs) کی ٹریننگ، اور امیج ڈیٹاسیٹس پر کام کرنا سیکھا۔",
  },
  {
    id: 3,
    title: "AI سے چلنے والا اسٹڈی اسسٹنٹ",
    description: "ایک ذاتی نوعیت کا اسٹڈی اسسٹنٹ جو جنریٹو AI ٹیکنالوجی کا استعمال کرتے ہوئے خلاصے، کوئز اور اسٹڈی پلانز تیار کرتا ہے۔",
    skills: ["Generative AI", "Prompt Engineering", "API Integration"],
    category: "تعلیم",
    studentName: "حسن ایم۔",
    studentAge: 15,
    courseTaken: "ChatGPT Course",
    courseSlug: "chatgpt-course",
    whatLearned: "منظم پرامپٹ چیننگ، کانٹیکسٹ مینجمنٹ، اور اسٹرکچرڈ اسٹڈی پلانز بنانا سیکھا۔",
  },
  {
    id: 4,
    title: "جذبات کا تجزیہ کرنے والا ڈیش بورڈ",
    description: "ایک ویب ڈیش بورڈ جو مشین لرننگ ماڈلز کا استعمال کرتے ہوئے پروڈکٹ کے جائزوں (reviews) اور سوشل میڈیا پوسٹس کے جذبات (sentiment) کا تجزیہ کرتا ہے۔",
    skills: ["NLP", "Data Analysis", "Machine Learning"],
    category: "ڈیٹا سائنس",
    studentName: "عائشہ آر۔",
    studentAge: 17,
    courseTaken: "Intermediate AI Course",
    courseSlug: "intermediate-ai-course",
    whatLearned: "ٹیکسٹ ٹوکنیشن، کلاسیفائر ماڈلز، اور Streamlit کے ساتھ حسب ضرورت ویب ڈیش بورڈز بنانا سیکھا۔",
  },
  {
    id: 5,
    title: "AI آرٹ جنریٹر",
    description: "جنریٹو AI کا استعمال کرتے ہوئے ٹیکسٹ پرامپٹس اور سٹائل کی ترجیحات کی بنیاد پر منفرد ڈیجیٹل آرٹ ورک بنانے کا ایک تخلیقی پروجیکٹ۔",
    skills: ["Generative AI", "Stable Diffusion", "Creative AI"],
    category: "تخلیقی AI",
    studentName: "علی ایس۔",
    studentAge: 13,
    courseTaken: "Generative AI Course",
    courseSlug: "generative-ai-course",
    whatLearned: "ڈیفیوژن ماڈلز، ٹیکسٹ ٹو امیج پرامپٹنگ کے اصول، اور نیگیٹو پرامپٹ فائن ٹیوننگ سیکھی۔",
  },
  {
    id: 6,
    title: "موسم کی پیشین گوئی کا ماڈل",
    description: "ایک مشین لرننگ ماڈل جو تاریخی ڈیٹا اور ریگریشن الگورتھم کا استعمال کرتے ہوئے پاکستانی شہروں کے لیے موسم کے پیٹرنز کی پیشین گوئی کرتا ہے۔",
    skills: ["Machine Learning", "Data Science", "Python"],
    category: "ڈیٹا سائنس",
    studentName: "ثنا ایم۔",
    studentAge: 18,
    courseTaken: "Intermediate AI Course",
    courseSlug: "intermediate-ai-course",
    whatLearned: "لکیری اور کثیرالاضلاع (linear and polynomial) ریگریشن، موسم کے عوامی ڈیٹاسیٹس کی صفائی، اور پیشین گوئی کے الگورتھم بنانا سیکھا۔",
  },
  {
    id: 7,
    title: "اردو ٹیکسٹ ٹرانسلیٹر",
    description: "ایک AI ایپلی کیشن جو قدرتی زبان کی پروسیسنگ اور ٹرانسلیشن APIs کا استعمال کرتے ہوئے اردو اور انگریزی کے درمیان متن کا ترجمہ کرتی ہے۔",
    skills: ["NLP", "API Integration", "Translation"],
    category: "زبان",
    studentName: "عمر ایچ۔",
    studentAge: 12,
    courseTaken: "Beginner AI Course",
    courseSlug: "beginner-ai-course",
    whatLearned: "بیرونی ترجمے کے APIs کے ساتھ کام کرنا، JSON رسپانس پارس کرنا، اور ساده کنسول انٹرفیس ڈیزائن کرنا سیکھا۔",
  },
  {
    id: 8,
    title: "اسمارٹ ایکسپنس ٹریکر",
    description: "ایک AI سے بہتر بنایا گیا ایکسپنس ٹریکر جو اخراجات کی درجہ بندی کرتا ہے اور ذہین بچت کی سفارشات فراہم کرتا ہے۔",
    skills: ["Machine Learning", "Data Analysis", "Python"],
    category: "مالیات",
    studentName: "زینب اے۔",
    studentAge: 16,
    courseTaken: "Python & AI Development Course",
    courseSlug: "python-ai-development-course",
    whatLearned: "ازگر (Python) فائلوں کو یکجا کرنا، ڈیٹا اسٹرکچرز، درجہ بندی کی منطق، اور Streamlit انٹرفیس پر ٹیبلز بنانا سیکھا۔",
  },
];

export default function StudentProjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "طلبہ کے پروجیکٹس", url: "/ur/student-projects" },
  ]);

  const categories = [...new Set(STUDENT_PROJECTS_UR.map((p) => p.category))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[
              { label: "ہوم", href: "/ur" },
              { label: "طلبہ کے پروجیکٹس", href: "/ur/student-projects" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            طلبہ کے AI پروجیکٹس
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ہمارے طلبہ صرف تھیوری نہیں سیکھتے — وہ حقیقی AI پروجیکٹس بناتے ہیں۔ پاکستان AI آن لائن اکیڈمی کے نوجوان AI شائقین کے تیار کردہ شاندار کام کو دیکھیں۔
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white cursor-pointer">
              تمام پروجیکٹس
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors font-urdu"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STUDENT_PROJECTS_UR.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover text-right"
              >
                {/* Project Visual */}
                <div className="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 flex items-center justify-center">
                  <div className="text-center flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md mb-2">
                      <Icon
                        name={
                          project.category === "چیٹ بوٹ" || project.category === "Chatbot"
                            ? "chat"
                            : project.category === "کمپیوٹر وژن" || project.category === "Computer Vision"
                            ? "robot"
                            : project.category === "تعلیم" || project.category === "Education"
                            ? "book"
                            : project.category === "ڈیٹا سائنس" || project.category === "Data Science"
                            ? "brain"
                            : project.category === "تخلیقی AI" || project.category === "Creative AI"
                            ? "palette"
                            : project.category === "زبان" || project.category === "Language"
                            ? "globe"
                            : "robot"
                        }
                        size={32}
                        color="primary"
                      />
                    </div>
                    <span className="text-sm text-muted font-medium font-urdu">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 font-urdu">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted font-medium">
                        {project.studentName}، عمر {project.studentAge} سال
                      </span>
                    </div>

                    <h3 className="font-outfit font-bold text-lg text-dark mb-2 text-right">
                      {project.title}
                    </h3>

                    <p className="text-muted text-xs mb-4 leading-relaxed text-right">
                      {project.description}
                    </p>

                    <div className="mb-4 bg-surface p-3.5 rounded-xl border border-gray-100/50 text-right">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">کورس:</span>
                      <Link href={`/ur/courses/${project.courseSlug}`} className="text-xs font-semibold text-dark hover:text-primary underline mb-2.5 block">
                        {project.courseTaken}
                      </Link>

                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">کیا سیکھا:</span>
                      <p className="text-xs text-muted leading-relaxed mb-2.5">{project.whatLearned}</p>

                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">استعمال شدہ ٹیکنالوجیز:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1 justify-start dir-ltr">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-white text-[10px] font-semibold text-dark-light rounded border border-gray-100 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-gray-100 pt-4 flex items-center justify-between">
                    <Link
                      href={`/ur/courses/${project.courseSlug}`}
                      className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors"
                    >
                      متعلقہ کورس دیکھیں ➔
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Project */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-urdu">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            کیا آپ اپنا AI پروجیکٹ بنانا چاہتے ہیں؟
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            پاکستان AI آن لائن اکیڈمی میں شامل ہوں اور اپنے پہلے ہی ہفتے سے حقیقی AI پروجیکٹس بنانا شروع کریں۔ ہمارا پروجیکٹ پر مبنی طریقہ کار اس بات کو یقینی بناتا ہے کہ آپ صرف نظریاتی علم ہی نہیں بلکہ عملی مہارت حاصل کریں۔
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary" size="lg" href={DEMO_VIDEO_URL} external>
              مفت ڈیمو کلاس دیکھیں
            </CTAButton>
            <CTAButton variant="whatsapp" size="lg" href={WHATSAPP_LINK()}>
              واٹس ایپ پر بات کریں
            </CTAButton>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
