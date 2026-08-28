import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema } from "@/lib/schema";
import HeroSection from "@/components/sections/HeroSection";
import YouTubeShorts from "@/components/sections/YouTubeShorts";
import CoursesPreview from "@/components/sections/CoursesPreview";
import WhyLearnAI from "@/components/sections/WhyLearnAI";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StudentJourney from "@/components/sections/StudentJourney";
import Testimonials from "@/components/sections/Testimonials";
import StudentCertificates from "@/components/sections/StudentCertificates";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StatsCounter from "@/components/ui/StatsCounter";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = generatePageMetadata({
  title: "پاکستان میں آن لائن AI کورسز | پاکستان AI اکیڈمی",
  description:
    "پاکستان میں طلباء اور مبتدیوں کے لیے لائیو آن لائن کلاسز۔ آرٹیفیشل انٹیلیجنس، مشین لرننگ، اور چیٹ جی پی ٹی سیکھیں۔",
  path: "/ur",
  keywords: [
    "AI Course Pakistan",
    "Online AI Course Pakistan",
    "Artificial Intelligence Course Pakistan",
    "AI اکیڈمی پاکستان",
    "آن لائن AI کورسز",
    "چیٹ جی پی ٹی کورس",
    "مشین لرننگ کورس",
    "بچوں کے لیے AI کورس",
  ],
});

const FAQ_DATA_UR = [
  { question: "کیا اس کورس کے لیے پروگرامنگ کا تجربہ ہونا ضروری ہے؟", answer: "جی نہیں، ہمارے تمام کورسز بالکل بنیادی سطح سے شروع ہوتے ہیں اور اس کے لیے کسی کوڈنگ یا پروگرامنگ کے پہلے سے تجربے کی ضرورت نہیں ہے۔" },
  { question: "کلاسز کس طرح منعقد کی جاتی ہیں؟", answer: "تمام کلاسز زوم (Zoom) یا گوگل میٹ (Google Meet) پر لائیو اور آن لائن منعقد کی جاتی ہیں۔ طلباء براہِ راست انسٹرکٹر سے بات کر سکتے ہیں اور سوال پوچھ سکتے ہیں۔" },
  { question: "بچوں کے کورسز کے لیے عمر کی حد کیا ہے؟", answer: "بچوں کے لیے ہمارے AI کورسز کی عمر کی حد 9 سے 15 سال ہے۔ ہم سیکھنے کو تفریحی اور دلکش بنانے کے لیے بلاک کوڈنگ کا استعمال کرتے ہیں۔" },
  { question: "کیا کورس کے اختتام پر سرٹیفکیٹ ملے گا؟", answer: "جی ہاں، ان تمام طلباء کو کورس مکمل کرنے پر تصدیق شدہ ڈیجیٹل سرٹیفکیٹ دیا جائے گا جو اسائنمنٹس اور فائنل پروجیکٹ کامیابی سے مکمل کریں گے۔" },
  { question: "کلاسز کے اوقات کار کیا ہیں؟", answer: "ہم ویک اینڈ (ہفتہ اور اتوار) اور ہفتے کے دیگر دنوں کی شام میں مختلف بیچز پیش کرتے ہیں۔ آپ اپنی سہولت کے مطابق وقت کا انتخاب کر سکتے ہیں۔" },
];

export default function UrduHomePage() {
  const faqSchema = generateFAQSchema(FAQ_DATA_UR as { question: string; answer: string }[]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection lang="ur" />

      <StatsCounter />

      <StudentCertificates />

      <YouTubeShorts lang="ur" />

      <section id="courses" className="py-20 bg-white">
        <CoursesPreview lang="ur" />
      </section>

      <section id="why-learn-ai" className="py-20 section-gradient-light">
        <WhyLearnAI lang="ur" />
      </section>

      <section id="why-choose-us" className="py-20 bg-white">
        <WhyChooseUs lang="ur" />
      </section>

      <section id="student-journey" className="py-20 section-gradient-light">
        <StudentJourney lang="ur" />
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <Testimonials lang="ur" />
      </section>

      <section id="blog" className="py-20 section-gradient-light">
        <BlogPreview lang="ur" />
      </section>

      <section id="faq" className="py-20 bg-white text-right rtl:text-right">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="اکثر پوچھے گئے سوالات"
            subtitle="ہمارے AI کورسز اور تعلیمی پروگراموں کے بارے میں عام طور پر پوچھے جانے والے سوالات کے جوابات حاصل کریں۔"
            centered
          />
          <FAQAccordion items={FAQ_DATA_UR as { question: string; answer: string }[]} />
        </div>
      </section>

      <CTASection lang="ur" />
    </>
  );
}
