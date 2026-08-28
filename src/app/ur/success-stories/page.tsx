import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { WHATSAPP_LINK, DEMO_VIDEO_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "کامیابی کی کہانیاں — ہمارے طلبہ اور والدین کیا کہتے ہیں",
  description:
    "پاکستان AI آن لائن اکیڈمی کے طلبہ اور والدین کی کامیابی کی کہانیاں پڑھیں۔ دریافت کریں کہ ہمارے لائیو آن لائن AI کورسز نے کس طرح پاکستان بھر میں سیکھنے کے سفر کو تبدیل کیا ہے۔",
  path: "/ur/success-stories",
  keywords: [
    "AI Course Reviews Pakistan Urdu",
    "Student Success Stories Urdu",
    "AI Academy Testimonials Pakistan Urdu",
    "Pakistan AI Academy Reviews Urdu",
    "Best AI Course Feedback Urdu",
  ],
});

const STATS_UR = [
  { value: "+500", label: "تربیت یافتہ طلبہ" },
  { value: "+50", label: "تیار کردہ AI پروجیکٹس" },
  { value: "7", label: "خصوصی کورسز" },
  { value: "98%", label: "اطمینان کی شرح" },
];

const TESTIMONIALS_UR = [
  {
    id: 1,
    name: "احمد کے والد",
    role: "12 سالہ طالب علم کے سرپرست",
    location: "لاہور",
    quote: "میرا بیٹا احمد ہمیشہ ٹیکنالوجی کے بارے میں متجسس رہتا تھا۔ پاکستان AI آن لائن اکیڈمی میں شامل ہونے کے بعد، اس نے صرف 4 ہفتوں میں اپنا پہلا AI پروجیکٹ بنایا! لائیو کلاسز ناقابل یقین حد تک دلچسپ ہیں اور انسٹرکٹر مشکل تصورات کو آسان بنا دیتے ہیں۔",
    rating: 5,
    avatar: "AH",
  },
  {
    id: 2,
    name: "فاطمہ زہرہ",
    role: "کالج کی طالبہ، عمر 17 سال",
    location: "کراچی",
    quote: "جب میں نے Beginner AI Course شروع کیا تو مجھے کوڈنگ کا بالکل تجربہ نہیں تھا۔ اب میں AI ماڈل بنا سکتی ہوں اور ایک پیشہ ور کی طرح ChatGPT استعمال کر سکتی ہوں۔ اس اکیڈمی نے میرے مستقبل کے کیریئر کے بارے میں میرا نظریہ بدل دیا۔ میری طرف سے انتہائی تجویز کردہ!",
    rating: 5,
    avatar: "FZ",
  },
  {
    id: 3,
    name: "عائشہ کی والدہ",
    role: "14 سالہ طالبہ کی سرپرست",
    location: "اسلام آباد",
    quote: "بطور سرپرست، میں چاہتی تھی کہ میری بیٹی مستقبل کی مہارتیں سیکھے۔ پاکستان AI آن لائن اکیڈمی بہترین انتخاب تھا۔ آن لائن فارمیٹ بہت آسان ہے اور تعلیم کا معیار شاندار ہے۔ عائشہ اب اپنی سہیلیوں کو بھی AI سکھاتی ہے!",
    rating: 5,
    avatar: "AM",
  },
  {
    id: 4,
    name: "محمد علی",
    role: "اسکول کا طالب علم، عمر 15 سال",
    location: "راولپنڈی",
    quote: "ChatGPT کورس حیرت انگیز تھا! میں نے پرامپٹ انجینئرنگ سیکھی اور اب میں اپنے اسکول کے پروجیکٹس کے لیے AI ٹولز کا استعمال کرتا ہوں۔ میرے اساتذہ میرے کام کے معیار سے بہت متاثر ہیں۔ شکریہ پاکستان AI آن لائن اکیڈمی!",
    rating: 5,
    avatar: "MA",
  },
  {
    id: 5,
    name: "حسن کے والدین",
    role: "10 سالہ طالب علم کے والدین",
    location: "فیصل آباد",
    quote: "ہم ایک ایسے آن لائن کورس کی تلاش میں تھے جو ہمارے چھوٹے بیٹے کو مصروف رکھے۔ اکیڈمی کا تفریحی پروجیکٹس اور لائیو بات چیت کے ذریعے AI سکھانے کا طریقہ شاندار ہے۔ حسن ہر کلاس کا بے صبری سے انتظار کرتا ہے!",
    rating: 5,
    avatar: "HP",
  },
  {
    id: 6,
    name: "ثنا ملک",
    role: "یونیورسٹی کی طالبہ، عمر 19 سال",
    location: "پشاور",
    quote: "جنریٹو AI کورس نے میری آنکھوں کے سامنے وہ امکانات کھول دیے جن کا میں نے کبھی تصور بھی نہیں کیا تھا۔ AI آرٹ بنانا، مواد تیار کرنا، اور یہ سمجھنا کہ یہ ماڈل کیسے کام کرتے ہیں — یہ سب بہت ہی دلچسپ ہے۔ میری تعلیم میں بہترین سرمایہ کاری!",
    rating: 5,
    avatar: "SM",
  },
];

export default function SuccessStoriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "کامیابی کی کہانیاں", url: "/ur/success-stories" },
  ]);

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
              { label: "کامیابی کی کہانیاں", href: "/ur/success-stories" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            کامیابی کی کہانیاں
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ان والدین اور طلبہ کے خیالات جانیں جنہوں نے پاکستان AI آن لائن اکیڈمی میں AI تعلیم کی بدولت خود میں تبدیلی دیکھی ہے۔
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS_UR.map((stat) => (
              <div key={stat.label} className="text-center font-urdu">
                <p className="font-outfit text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            نمایاں کامیابی کی کہانیاں
          </h2>

          {/* Featured Highlight */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-16 text-right font-urdu">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-6xl block mb-4">🏆</span>
                    <p className="font-outfit text-xl font-bold">عائشہ کا سفر</p>
                    <p className="text-blue-100 text-sm mt-2">
                      مبتدی سے AI پروجیکٹ بلڈر تک
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-2 mb-4 justify-end">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium text-dark leading-relaxed mb-6">
                  &ldquo;میری بیٹی عائشہ نے 14 سال کی عمر میں Beginner AI Course شروع کیا تھا۔ دو ماہ کے اندر، وہ ایسے AI پروجیکٹس بنا رہی تھی جس نے اس کے اسکول کے اساتذہ کو حیران کر دیا۔ اس نے جو اعتماد حاصل کیا وہ انمول ہے۔ پاکستان AI آن لائن اکیڈمی نے اسے صرف AI نہیں سکھایا — بلکہ اسے یہ دکھایا کہ وہ کچھ بھی حاصل کر سکتی ہے۔&rdquo;
                </blockquote>
                <div>
                  <p className="font-outfit font-semibold text-lg">
                    عائشہ کی والدہ
                  </p>
                  <p className="text-muted">
                    اسلام آباد سے تعلق رکھنے والی والدہ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_UR.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Highlights */}
      <section className="py-20 section-gradient-light font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            ہم جو تبدیلی دیکھتے ہیں
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <span className="text-5xl block mb-4">🌱</span>
              <h3 className="font-outfit font-semibold text-lg mb-2">پہلے</h3>
              <p className="text-muted leading-relaxed">
                طلبہ متجسس لیکن غیر یقینی صورتحال میں آتے ہیں۔ بہت سے لوگوں کو کوڈنگ کا کوئی تجربہ نہیں ہوتا اور وہ حیران ہوتے ہیں کہ کیا AI ان کے لیے بہت مشکل ہے۔
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center border-2 border-secondary">
              <span className="text-5xl block mb-4">📚</span>
              <h3 className="font-outfit font-semibold text-lg mb-2">دوران</h3>
              <p className="text-muted leading-relaxed">
                لائیو کلاسز، عملی پروجیکٹس اور ماہرانہ رہنمائی کے ذریعے، طلبہ اعتماد حاصل کرتے ہیں اور حقیقی AI ایپلی کیشنز بنانا شروع کرتے ہیں۔
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <span className="text-5xl block mb-4">🚀</span>
              <h3 className="font-outfit font-semibold text-lg mb-2">بعد میں</h3>
              <p className="text-muted leading-relaxed">
                گریجویٹس عملی AI مہارتوں، پروجیکٹ پورٹ فولیو، سرٹیفکیٹ اور AI سے چلنے والے کیریئر کو اپنانے کے اعتماد کے ساتھ رخصت ہوتے ہیں۔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Story CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-urdu">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            کیا آپ اپنی کامیابی کی کہانی لکھنے کے لیے تیار ہیں؟
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            پاکستان بھر کے ان سینکڑوں طلبہ میں شامل ہوں جو پہلے ہی AI کے ساتھ اپنا مستقبل بنا رہے ہیں۔ آپ کا سفر ایک سادہ واٹس ایپ پیغام سے شروع ہوتا ہے۔
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
