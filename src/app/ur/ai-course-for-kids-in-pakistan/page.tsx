import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { DEMO_VIDEO_URL, WHATSAPP_LINK_1, WHATSAPP_LINK_2, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = generatePageMetadata({
  title: "پاکستان میں بچوں کے لیے AI کورس | بچوں کے لیے آن لائن AI کلاسز",
  description:
    "پاکستان میں بچوں اور اسکول کے طلبہ کے لیے بہترین لائیو آن لائن AI کورس دریافت کریں۔ نوجوان سیکھنے والوں (عمر 10+) کے لیے ڈیزائن کیا گیا ہے۔ انٹرایکٹو پروجیکٹس کے ذریعے ChatGPT، پرامپٹ انجینئرنگ، کمپیوٹیشنل سوچ، اور AI ٹولز سیکھیں۔",
  path: "/ur/ai-course-for-kids-in-pakistan",
  keywords: [
    "AI Course for Kids in Pakistan Urdu",
    "Online AI courses for kids in Pakistan Urdu",
    "AI classes for kids in Pakistan Urdu",
    "AI course for children Urdu",
    "AI course for students Pakistan",
    "AI education for kids Pakistan Urdu",
    "Kids AI training Pakistan Urdu",
  ],
});

const KIDS_FAQS_UR = [
  {
    question: "بچوں کے AI کورس کے لیے تجویز کردہ عمر کا گروپ کیا ہے؟",
    answer:
      "ہمارا بچوں کا AI کورس خاص طور پر 10 سال اور اس سے زیادہ عمر کے طلبہ کے لیے ڈیزائن کیا گیا ہے۔ نصاب کو انتہائی بصری، پرکشش، اور ابتدائی افراد کے لیے موزوں بنانے کے لیے تیار کیا گیا ہے، جس کے لیے کسی سابقہ تکنیکی پس منظر کی ضرورت نہیں ہے۔",
  },
  {
    question: "کیا بچوں کو شامل ہونے کے لیے کوڈنگ کے سابقہ تجربے کی ضرورت ہے؟",
    answer:
      "سابقہ کوڈنگ یا پروگرامنگ کے تجربے کی بالکل ضرورت نہیں ہے! ہم بالکل بنیادی باتوں سے شروع کرتے ہیں، بچوں کو کمپیوٹیشنل سوچ سکھاتے ہیں اور یہ کہ کس طرح بتدریج ازگر (Python) کی بنیادی باتیں متعارف کرانے سے پہلے قدرتی زبان کا استعمال کرتے ہوئے AI ٹولز کے ساتھ بات چیت کی جائے۔",
  },
  {
    question: "کلاسز کیسے منعقد کی جاتی ہیں اور کیا وہ محفوظ ہیں؟",
    answer:
      "کلاسز محفوظ ویڈیو رومز کے ذریعے 100% آن لائن اور لائیو منعقد کی جاتی ہیں۔ ہمارے بیچز چھوٹے ہوتے ہیں (عام طور پر 15 سے کم طلبہ) تاکہ ایک محفوظ، معاون اور انتہائی انٹرایکٹو ماحول کو یقینی بنایا جا سکے۔ تمام سیشنز کی نگرانی کی جاتی ہے، اور والدین کا مشاہدہ کرنے کے لیے خیرمقدم کیا جاتا ہے۔",
  },
  {
    question: "کیا والدین اپنے بچے کی کارکردگی کی نگرانی کر سکتے ہیں؟",
    answer:
      "جی ہاں! ہم والدین کے ساتھ ہفتہ وار کارکردگی کی رپورٹ شیئر کرتے ہیں۔ مزید برآں، طلبہ نظر آنے والے پروجیکٹس (جیسے چیٹ بوٹس، آرٹ ماڈلز، اور ترجمہ کے آلات) کا ایک پورٹ فولیو بناتے ہیں جن کا وہ والدین، خاندان اور اساتذہ کے سامنے مظاہرہ کر سکتے ہیں۔",
  },
  {
    question: "میرے بچے کو کن آلات کی ضرورت ہے؟",
    answer:
      "آپ کے بچے کو صرف ایک لیپ ٹاپ یا ڈیسک ٹاپ کمپیوٹر کی ضرورت ہے جس میں کام کرنے والا ویب کیم، مائیکروفون، مستحکم انٹرنیٹ کنکشن، اور ویب براؤزر ہو۔ کسی مہنگے سافٹ ویئر کو خریدنے کی ضرورت نہیں ہے۔",
  },
];

export default function KidsAIPage() {
  const breadcrumbs = [
    { name: "ہوم", url: "/ur" },
    { name: "بچوں کے لیے AI", url: "/ur/ai-course-for-kids-in-pakistan" },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(KIDS_FAQS_UR);
  const breadcrumbItems = breadcrumbs.map((b) => ({ label: b.name, href: b.url }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 pt-32 relative overflow-hidden font-urdu">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-white/5 animate-float" />
          <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-secondary/15 animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            پاکستان میں بچوں کے لیے AI کورس
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            اپنے بچے کو مستقبل کے لیے تیار مہارتوں کے ساتھ بااختیار بنائیں۔ ہماری خصوصی، لائیو آن لائن کلاسز اسکول کے طلبہ (عمر 10+) کو تفریحی، عملی پروجیکٹس کے ذریعے ChatGPT، پرامپٹ انجینئرنگ، تخلیقی AI، اور لاجک بلڈنگ سکھاتی ہیں۔
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton variant="outline" href={DEMO_VIDEO_URL} size="lg" external>
              مفت ڈیمو کلاس دیکھیں
            </CTAButton>
            <CTAButton variant="whatsapp" href={WHATSAPP_LINK_1(WHATSAPP_DEFAULT_MESSAGE)} size="lg">
              مفت کلاس بک کریں
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why AI for Kids */}
      <section className="py-20 bg-white font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
              اگلی نسل کو بااختیار بنائیں
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-dark mt-4 mb-4">
              بچے کو ابتدائی طور پر AI سے کیوں متعارف کروائیں؟
            </h2>
            <p className="text-muted leading-relaxed">
              مصنوعی ذہانت ہر شعبے کو بدل رہی ہے۔ ابتدائی طور پر شروع کرنا بچوں کو ایک قدرتی روانی پیدا کرنے میں مدد کرتا ہے، اور انہیں ٹیکنالوجی کے غیر فعال صارفین سے سرگرم تخلیق کاروں اور موجدین میں تبدیل کرتا ہے۔
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            {[
              {
                icon: "brain",
                title: "منطقی استدلال اور لاجک",
                desc: "AI کے ساتھ بات چیت کرنا اور پرامپٹس ڈیزائن کرنا دماغ کو منظم طریقے سے سوچنے کی تربیت دیتا ہے، جس سے ریاضی اور سائنس میں کارکردگی بہتر ہوتی ہے۔",
              },
              {
                icon: "palette",
                title: "تخلیقی صلاحیتوں کا فروغ",
                desc: "ڈیجیٹل آرٹ اور انٹرایکٹو کہانیاں بنانے کے لیے جنریٹو AI ماڈلز کا استعمال تخلیقی ڈیزائن کے لیے نئے راستے کھولتا ہے۔",
              },
              {
                icon: "certificate",
                title: "مستقبل کے کیریئر کا فائدہ",
                desc: "AI خواندگی کمپیوٹر خواندگی کی طرح بنیادی بنتی جا رہی ہے۔ اسکول میں شروع کرنے سے ایک ایسا پورٹ فولیو تیار ہوتا ہے جو طلبہ کو دوسروں سے ممتاز کرتا ہے۔",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mr-auto ml-0">
                  <Icon name={item.icon} size={24} color="primary" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-dark mb-3 text-right">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed text-right">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Kids Learn */}
      <section className="py-20 section-gradient-light font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-right">
            <div className="order-2 lg:order-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative text-right">
              <div className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                100% محفوظ
              </div>
              <h3 className="font-outfit text-xl font-bold text-dark mb-4 text-right">🏠 سرپرستوں کا ذہنی سکون</h3>
              <p className="text-muted text-sm leading-relaxed mb-6 text-right">
                حفاظت اور ڈیجیٹل حفظان صحت پاکستان AI آن لائن اکیڈمی کی بنیادی اقدار ہیں۔ ہم بچوں کو سکھاتے ہیں کہ AI ان کی سوچ کو بڑھانے کے لیے ایک مددگار ہے، نہ کہ پڑھائی کی کوششوں کو بدلنے کا کوئی شارٹ کٹ۔
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-outfit font-semibold text-dark text-sm text-right">نگرانی والے کلاس رومز</h4>
                    <p className="text-xs text-muted text-right">تمام لائیو سیشنز ریکارڈ کیے جاتے ہیں اور محفوظ رومز میں منعقد ہوتے ہیں۔</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold order-2">
                    1
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-outfit font-semibold text-dark text-sm text-right">ڈیجیٹل خواندگی پر توجہ</h4>
                    <p className="text-xs text-muted text-right">ہم کوڈ کی اخلاقیات اور مناسب آن لائن رویے کے رہنما اصولوں کو نافذ کرتے ہیں۔</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold order-2">
                    2
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-outfit font-semibold text-dark text-sm text-right">شفاف کارکردگی</h4>
                    <p className="text-xs text-muted text-right">والدین کارکردگی کے نوٹیفیکیشنز اور پروجیکٹ کے مظاہرے حاصل کرتے ہیں۔</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold order-2">
                    3
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full uppercase tracking-wider">
                تفریحی اور عملی نصاب
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-dark mt-4 mb-6 text-right">
                بچہ ہمارے AI کورس میں کیا سیکھتا ہے؟
              </h2>
              <p className="text-muted leading-relaxed mb-6 text-right">
                ہم کر کے سیکھنے پر یقین رکھتے ہیں۔ ہمارا نصاب خشک لیکچرز کو چھوڑ کر حقیقی ٹولز بنانے پر مرکوز ہے۔ آپ کا بچہ عمر کے لحاظ سے موزوں فارمیٹ میں انڈسٹری کی معیاری ٹیکنالوجیز پر کام کرے گا:
              </p>
              <ul className="space-y-4 text-right">
                {[
                  "AI کو سمجھنا: نیورل نیٹ ورکس اور مشین لرننگ کی آسان وضاحت",
                  "ChatGPT اور بڑے لینگویج ماڈلز: ریسرچ اور تحریر کے لیے پرامپٹس کو ترتیب دینے کا طریقہ",
                  "تخلیقی جنریٹو AI: اسٹائل رولز کا استعمال کرتے ہوئے حسب ضرورت بصری اور گرافکس ڈیزائن کرنا",
                  "بنیادی لاجک اور کوڈنگ: Python ویری ایبلز، ان پٹس، اور فنکشنز کا تعارف",
                  "چیٹ بوٹس بنانا: APIs کا استعمال کرتے ہوئے مددگار چیٹ بوٹس بنانا",
                  "AI کا ذمہ دارانہ استعمال: ڈیجیٹل حفاظت، اخلاقیات، اور تعلیمی کاپی کرنے سے بچنا سکھانا",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 justify-end">
                    <span className="text-dark-light text-sm font-medium text-right order-1">{point}</span>
                    <span className="text-secondary text-lg font-bold mt-0.5 order-2">✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white font-urdu">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-3xl font-bold text-dark mb-4">
              عام طور پر پوچھے جانے والے سوالات
            </h2>
            <p className="text-muted">
              بچوں کو AI سکھانے کے حوالے سے سوالات ہیں؟ یہاں عام جوابات ہیں۔
            </p>
          </div>
          <FAQAccordion items={KIDS_FAQS_UR} />
        </div>
      </section>

      {/* Registration Call to Action */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden font-urdu">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            اپنے بچے کو مستقبل میں قدم رکھنے میں مدد دیں
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            ایک تعارفی ڈیمو سلاٹ بک کریں اور دیکھیں کہ ہمارے انسٹرکٹرز طلبہ کے ساتھ کیسے بات چیت کرتے ہیں۔ براہ راست سوالات کے جوابات ہمارے کوآرڈینیٹرز واٹس ایپ پر فوری دیتے ہیں:
          </p>

          {/* WhatsApp Support Buttons */}
          <div className="mb-10 space-y-4 max-w-md mx-auto">
            <div className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-right">
              <CTAButton variant="whatsapp" size="sm" href={WHATSAPP_LINK_1("Hi! I'm interested in booking a kids AI demo class.")}>
                سپورٹ 1 سے بات کریں
              </CTAButton>
              <div className="text-right">
                <p className="text-[10px] text-white/50 font-bold tracking-wider uppercase text-right">واٹس ایپ سپورٹ 1</p>
                <p className="font-outfit text-xl font-bold text-[#25D366] mt-0.5 text-right">0340 6187831</p>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-right">
              <CTAButton variant="whatsapp" size="sm" href={WHATSAPP_LINK_2("Hi! I'm interested in booking a kids AI demo class.")}>
                سپورٹ 2 سے بات کریں
              </CTAButton>
              <div className="text-right">
                <p className="text-[10px] text-white/50 font-bold tracking-wider uppercase text-right">واٹس ایپ سپورٹ 2</p>
                <p className="font-outfit text-xl font-bold text-[#25D366] mt-0.5 text-right">0349 6354307</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <CTAButton variant="primary" size="lg" href={DEMO_VIDEO_URL} external>
              مفت ڈیمو ویڈیو دیکھیں
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
