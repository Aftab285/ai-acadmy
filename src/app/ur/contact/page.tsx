import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { WHATSAPP_LINK_1, WHATSAPP_LINK_2, WHATSAPP_DEFAULT_MESSAGE, DEMO_VIDEO_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = generatePageMetadata({
  title: "ہم سے رابطہ کریں — واٹس ایپ پر بات کریں",
  description:
    "پاکستان AI آن لائن اکیڈمی سے واٹس ایپ پر رابطہ کریں۔ اپنی مفت AI ڈیمو کلاس بک کریں، ہمارے کورسز کے بارے میں پوچھیں، یا داخلے کے بارے میں معلومات حاصل کریں۔ ہم صرف ایک میسج کی دوری پر ہیں۔",
  path: "/ur/contact",
  keywords: [
    "Contact Pakistan AI Academy Urdu",
    "AI Course Inquiry Urdu",
    "Book AI Demo Class Urdu",
    "WhatsApp AI Course Urdu",
    "AI Academy Contact Urdu",
  ],
});

const FAQ_DATA_UR = [
  {
    question: "مصنوعی ذہانت (Artificial Intelligence) کیا ہے؟",
    answer:
      "مصنوعی ذہانت (AI) کمپیوٹر سائنس کی ایک شاخ ہے جو ایسی سمارٹ مشینیں بنانے پر مرکوز ہے جو ایسے کام انجام دینے کی صلاحیت رکھتی ہیں جن کے لیے عام طور پر انسانی ذہانت کی ضرورت ہوتی ہے۔ اس میں سیکھنا، استدلال، مسئلہ حل کرنا، زبان سمجھنا، اور پیٹرنز کو پہچاننا شامل ہے۔ پاکستان AI آن لائن اکیڈمی میں، ہم طلبہ کو عملی اور پروجیکٹ کے ذریعے سیکھنے کے عمل سے AI سسٹمز کو سمجھنا اور بنانا سکھاتے ہیں۔",
  },
  {
    question: "اس کورس میں کون شامل ہو سکتا ہے؟",
    answer:
      "ہمارے کورسز 10 سال اور اس سے زیادہ عمر کے طلبہ، اسکول و کالج کے طلبہ، اور بالکل نئے سیکھنے والوں (beginners) کے لیے ڈیزائن کیے گئے ہیں۔ اس کے لیے کوڈنگ یا کسی تکنیکی پس منظر کی ضرورت نہیں ہے۔ چاہے آپ بطور والدین اپنے بچے کے لیے مستقبل کے لیے کارآمد مہارتیں تلاش کر رہے ہوں یا کوئی طالب علم جو AI سیکھنا چاہتا ہو، ہمارے کورسز آپ کے لیے بہترین ہیں۔",
  },
  {
    question: "کیا نئے سیکھنے والے (beginners) بھی AI سیکھ سکتے ہیں؟",
    answer:
      "بالکل! ہمارا Beginner AI Course خاص طور پر ایسے طلبہ کے لیے ڈیزائن کیا گیا ہے جن کا کوئی تکنیکی پس منظر نہیں ہے۔ ہم بالکل بنیادی باتوں سے شروع کرتے ہیں اور بتدریج جدید تصورات کی طرف بڑھتے ہیں۔ ہمارے ماہر انسٹرکٹر اس بات کو یقینی بناتے ہیں کہ اگلا سبق شروع کرنے سے پہلے ہر طالب علم پچھلے تصور کو اچھی طرح سمجھ لے۔",
  },
  {
    question: "کیا اسکول کے طلبہ AI سیکھ سکتے ہیں؟",
    answer:
      "جی ہاں! ہمارے پاس 10 سال اور اس سے زیادہ عمر کے طلبہ کامیابی سے AI سیکھ رہے ہیں۔ ہمارا نصاب عمر کے لحاظ سے موزوں اور پرکشش بنایا گیا ہے۔ اسکول کے طلبہ AI کے تصورات سیکھ سکتے ہیں، پروجیکٹس بنا سکتے ہیں، اور ایسی قیمتی مہارتیں حاصل کر سکتے ہیں جو انہیں مستقبل کی ملازمتوں کے لیے تیار کریں گی۔",
  },
  {
    question: "کیا کلاسز لائیو ہوتی ہیں؟",
    answer:
      "جی ہاں، ہماری تمام کلاسز 100% لائیو اور انٹرایکٹو ہوتی ہیں۔ پہلے سے ریکارڈ شدہ کورسز کے برعکس، ہماری لائیو کلاسز طلبہ کو حقیقی وقت میں سوالات پوچھنے، بات چیت میں حصہ لینے، اور ہمارے ماہر انسٹرکٹر سے فوری فیڈ بیک حاصل کرنے کی اجازت دیتی ہیں۔ یہ بہتر تفہیم اور مشغولیت کو یقینی بناتا ہے۔",
  },
  {
    question: "کیا کلاسز آن لائن ہوتی ہیں؟",
    answer:
      "جی ہاں، تمام کلاسز 100% آن لائن منعقد کی جاتی ہیں۔ آپ پاکستان میں کہیں سے بھی، اپنے گھر کے آرام دہ ماحول سے سیکھ سکتے ہیں۔ آپ کو صرف انٹرنیٹ کنکشن کے ساتھ کمپیوٹر یا لیپ ٹاپ کی ضرورت ہے۔ کہیں آنے جانے یا سفر کرنے کی ضرورت نہیں — معیاری AI تعلیم براہ راست آپ تک پہنچتی ہے۔",
  },
  {
    question: "کیا مجھے سرٹیفکیٹ ملے گا؟",
    answer:
      "جی ہاں! کسی بھی کورس کو کامیابی سے مکمل کرنے پر، آپ کو پاکستان AI آن لائن اکیڈمی کی طرف سے تکمیل کا سرٹیفکیٹ (Certificate of Completion) دیا جائے گا۔ یہ سرٹیفکیٹ آپ کی AI مہارتوں کی تصدیق کرتا ہے اور اسے آپ کے تعلیمی پورٹ فولیو یا ریزیومے میں شامل کیا جا سکتا ہے۔",
  },
  {
    question: "کورس کا دورانیہ کتنا ہے؟",
    answer:
      "کورس کا دورانیہ لیول کے لحاظ سے مختلف ہوتا ہے۔ ہمارا Beginner AI Course اور Generative AI Course 8 ہفتوں کا ہے، جبکہ ChatGPT اور Prompt Engineering کورسز 6 ہفتوں کے ہیں، اور ہمارا Advanced AI Course 12 ہفتوں کا ہے۔ ہر کورس میں لائیو کلاسز، اسائنمنٹس، اور عملی پروجیکٹس شامل ہے۔",
  },
  {
    question: "کیا مجھے پہلے سے کوڈنگ کے تجربے کی ضرورت ہے؟",
    answer:
      "ہمارے بنیادی کورسز کے لیے کوڈنگ کے کسی تجربے کی ضرورت نہیں ہے۔ ہم سب کچھ بالکل شروع سے سکھاتے ہیں۔ انٹرمیڈیٹ اور ایڈوانسڈ کورسز کے لیے، بنیادی کمپیوٹر کی مہارتیں کارآمد ہوتی ہیں، لیکن ہمارے انسٹرکٹر سیکھنے کے عمل کے ہر مرحلے پر آپ کی رہنمائی کرتے ہیں۔",
  },
  {
    question: "میں کورس میں کیسے داخلہ لے سکتا ہوں؟",
    answer:
      "داخلہ لینا بہت آسان ہے! بس ہم سے واٹس ایپ پر 03406187831 پر رابطہ کریں۔ ہماری ٹیم داخلے کے عمل میں آپ کی رہنمائی کرے گی، صحیح کورس کے انتخاب میں آپ کی مدد کرے گی، اور آپ کی مفت ڈیمو کلاس کا وقت طے کرے گی۔ ہم آپ کے AI سیکھنے کا سفر شروع کرنے کے لیے حاضر ہیں۔",
  },
  {
    question: "میں آپ سے کیسے رابطہ کر سکتا ہوں؟",
    answer:
      "آپ براہ راست واٹس ایپ پر 03406187831 پر رابطہ کر سکتے ہیں۔ واٹس ایپ معلومات، داخلے، اور طلبہ کی رہنمائی کے لیے ہمارا بنیادی رابطہ چینل ہے۔ ہم سے فوری بات چیت شروع کرنے کے لیے ہماری ویب سائٹ پر موجود واٹس ایپ بٹن پر ٹیپ کریں۔",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "رابطہ کریں", url: "/ur/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-urdu">
          <Breadcrumbs
            items={[
              { label: "ہوم", href: "/ur" },
              { label: "رابطہ کریں", href: "/ur/contact" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            کیا آپ AI سیکھنا شروع کرنے کے لیے تیار ہیں؟
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            آج ہی واٹس ایپ پر ہم سے رابطہ کریں اور اپنی مفت رہنمائی بک کریں۔ ہم آپ کے AI سیکھنے کا سفر شروع کرنے میں مدد کے لیے حاضر ہیں۔
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 md:p-16 text-center">
            {/* WhatsApp Icon */}
            <div className="w-24 h-24 mx-auto mb-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
              واٹس ایپ پر بات کریں
            </h2>
            <p className="text-lg text-dark-light mb-8 max-w-xl mx-auto">
              واٹس ایپ ہمارا بنیادی رابطہ چینل ہے۔ ہم سے فوری بات چیت شروع کرنے کے لیے نیچے دیے گئے بٹن پر ٹیپ کریں۔
            </p>

            {/* WhatsApp Support Cards */}
            <div className="mb-10 space-y-4 max-w-md mx-auto">
              <div className="bg-white/80 p-5 rounded-2xl border border-green-200/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <CTAButton
                  variant="whatsapp"
                  size="sm"
                  href={WHATSAPP_LINK_1(WHATSAPP_DEFAULT_MESSAGE)}
                >
                  سپورٹ 1 سے بات کریں
                </CTAButton>
                <div className="text-right">
                  <p className="text-[10px] text-muted font-bold tracking-wider uppercase">واٹس ایپ سپورٹ 1</p>
                  <p className="font-outfit text-2xl font-bold text-[#25D366] mt-0.5">0340 6187831</p>
                </div>
              </div>

              <div className="bg-white/80 p-5 rounded-2xl border border-green-200/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <CTAButton
                  variant="whatsapp"
                  size="sm"
                  href={WHATSAPP_LINK_2(WHATSAPP_DEFAULT_MESSAGE)}
                >
                  سپورٹ 2 سے بات کریں
                </CTAButton>
                <div className="text-right">
                  <p className="text-[10px] text-muted font-bold tracking-wider uppercase">واٹس ایپ سپورٹ 2</p>
                  <p className="font-outfit text-2xl font-bold text-[#25D366] mt-0.5">0349 6354307</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center mb-8">
              <CTAButton
                variant="primary"
                size="lg"
                href={DEMO_VIDEO_URL}
                external
              >
                مفت ڈیمو کلاس دیکھیں
              </CTAButton>
            </div>

            <p className="text-sm text-muted">
              ہم عام طور پر دفتری اوقات کے دوران چند منٹوں میں جواب دیتے ہیں۔
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 section-gradient-light font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            جب آپ ہم سے رابطہ کرتے ہیں تو کیا ہوتا ہے؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: "📱",
                title: "پیغام بھیجیں",
                desc: "اپنے سوالات یا ہمارے کورسز میں دلچسپی کے لیے واٹس ایپ پر رابطہ کریں۔",
              },
              {
                step: "2",
                icon: "💬",
                title: "مفت مشاورت",
                desc: "ہم آپ کے مقاصد کو سمجھیں گے اور آپ کے لیے بہترین کورس تجویز کریں گے۔",
              },
              {
                step: "3",
                icon: "🎥",
                title: "مفت ڈیمو کلاس",
                desc: "تعارفی ڈیمو سیشن کے ساتھ ہمارے لائیو پڑھانے کے انداز کا تجربہ کریں۔",
              },
              {
                step: "4",
                icon: "🚀",
                title: "سیکھنا شروع کریں",
                desc: "داخلہ لیں اور ہمارے ماہر انسٹرکٹر کے ساتھ لائیو کلاسز کے ذریعے اپنا سفر شروع کریں۔",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-outfit font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-white font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-outfit text-xl font-bold mb-4 text-right">
                📅 دفتری اوقات
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-dark-light dir-rtl">
                  <span>پیر — جمعہ</span>
                  <span className="font-medium">9:00 صبح — 9:00 رات</span>
                </li>
                <li className="flex justify-between text-dark-light dir-rtl">
                  <span>ہفتہ</span>
                  <span className="font-medium">10:00 صبح — 6:00 شام</span>
                </li>
                <li className="flex justify-between text-dark-light dir-rtl">
                  <span>اتوار</span>
                  <span className="font-medium">10:00 صبح — 4:00 شام</span>
                </li>
              </ul>
              <p className="text-muted text-xs mt-4 text-right">
                تمام اوقات پاکستان کے معیاری وقت (PKT/GMT+5) کے مطابق ہیں
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-outfit text-xl font-bold mb-4 text-right">
                ⚡ فوری معلومات
              </h3>
              <p className="text-dark-light mb-4 text-right">
                آپ واٹس ایپ پر کسی بھی وقت پیغام بھیج سکتے ہیں! دفتری اوقات کے علاوہ بھی، ہم دستیاب ہوتے ہی جلد از جلد جواب دیں گے۔
              </p>
              <p className="text-dark-light mb-4 font-semibold text-right">
                عام پوچھے جانے والے سوالات:
              </p>
              <ul className="space-y-2 text-right">
                <li className="text-muted text-sm">• کورس کی تفصیلات اور فیس</li>
                <li className="text-muted text-sm">• مفت ڈیمو کلاس کا شیڈول طے کرنا</li>
                <li className="text-muted text-sm">• داخلے کا طریقہ کار</li>
                <li className="text-muted text-sm">• کورس کی سفارشات</li>
                <li className="text-muted text-sm">• طلبہ کے لیے سپورٹ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-gradient-light font-urdu">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl font-bold text-center mb-4">
            عام طور پر پوچھے جانے والے سوالات
          </h2>
          <p className="text-center text-muted mb-12">
            کچھ پوچھنا چاہتے ہیں؟ نیچے فوری جوابات تلاش کریں، یا واٹس ایپ پر ہم سے رابطہ کریں۔
          </p>
          <FAQAccordion items={FAQ_DATA_UR} />
        </div>
      </section>
    </>
  );
}
