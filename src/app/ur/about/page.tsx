import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { WHATSAPP_LINK } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "پاکستان AI آن لائن اکیڈمی کے بارے میں — ہمارا مشن اور وژن",
  description:
    "پاکستان AI آن لائن اکیڈمی کے بارے میں جانیں، ہمارا مشن لائیو آن لائن کلاسز کے ذریعے پاکستان بھر کے طلبہ کو عالمی معیار کی AI تعلیم فراہم کرنا اور مستقبل کے تعلیمی وژن کو پیش کرنا ہے۔",
  path: "/ur/about",
  keywords: [
    "About Pakistan AI Academy Urdu",
    "AI Academy Pakistan Urdu",
    "AI Education Mission Urdu",
    "Online AI Academy Pakistan",
    "AI Instructor Pakistan Urdu",
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "ہمارے بارے میں", url: "/ur/about" },
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
              { label: "ہمارے بارے میں", href: "/ur/about" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            پاکستان AI آن لائن اکیڈمی کے بارے میں
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ہمارا مشن پاکستان کے ہر طالب علم کے لیے مصنوعی ذہانت کی تعلیم کو قابل رسائی بنانا ہے — تاکہ AI لیڈرز، موجدین اور تخلیق کاروں کی اگلی نسل کو بااختیار بنایا جا سکے۔
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-urdu text-right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10">
              <span className="text-5xl block mb-6 text-right">🎯</span>
              <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-4 text-right">
                ہمارا مشن
              </h2>
              <p className="text-dark-light leading-relaxed text-lg text-right">
                لائیو، انٹرایکٹو آن لائن کلاسز کے ذریعے پاکستان بھر کے طلبہ کو عالمی معیار کی مصنوعی ذہانت کی تعلیم فراہم کرنا۔ ہمارا ماننا ہے کہ ہر طالب علم — خواہ اس کا تعلق کسی بھی شہر سے ہو، کوئی بھی پس منظر ہو، یا کوڈنگ کا پہلے سے کوئی تجربہ ہو یا نہ ہو — وہ معیاری AI تعلیم تک رسائی کا حقدار ہے جو اسے مستقبل کے لیے تیار کرے۔
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-3xl p-8 md:p-10">
              <span className="text-5xl block mb-6 text-right">🔭</span>
              <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-4 text-right">
                ہمارا وژن
              </h2>
              <p className="text-dark-light leading-relaxed text-lg text-right">
                پاکستان کا سب سے بڑا AI تعلیمی پلیٹ فارم بننا جو AI موجدین، محققین اور کاروباری افراد کی اگلی نسل تیار کرے۔ ہم ایک ایسے پاکستان کا تصور کرتے ہیں جہاں AI خواندگی اتنی ہی عام ہو جتنی کہ ڈیجیٹل خواندگی — جہاں طلبہ حقیقی دنیا کے مسائل کے لیے اعتماد کے ساتھ AI سے چلنے والے حل تیار کریں۔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 section-gradient-light font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-8">
            ہماری کہانی
          </h2>
          <div className="prose prose-lg max-w-none text-right">
            <p className="text-dark-light leading-relaxed mb-6">
              پاکستان AI آن لائن اکیڈمی کی بنیاد ایک سادہ لیکن طاقتور یقین پر رکھی گئی تھی: کہ AI کی تعلیم صرف ایلیٹ یونیورسٹیوں یا مہنگے بوٹ کیمپس تک محدود نہیں ہونی چاہیے۔ ہم نے دیکھا کہ پاکستان بھر کے طلبہ — کراچی سے پشاور تک، لاہور سے کوئٹہ تک — مصنوعی ذہانت کے بارے میں سیکھنے کے خواہشمند تھے لیکن ان کے پاس قابل رسائی، معیاری سیکھنے کے مواقع نہیں تھے۔
            </p>
            <p className="text-dark-light leading-relaxed mb-6">
              اس فرق کو ختم کرنے کے لیے، ہم نے ایک آن لائن اکیڈمی بنائی جو عالمی معیار کی AI تعلیم براہ راست طلبہ کے گھروں تک پہنچاتی ہے۔ لائیو انٹرایکٹو کلاسز، عملی پروجیکٹس اور انفرادی رہنمائی کے ذریعے، ہم AI سیکھنے کے عمل کو دلچسپ، عملی اور آسان بناتے ہیں۔
            </p>
            <p className="text-dark-light leading-relaxed mb-6">
              آج، پاکستان AI آن لائن اکیڈمی نے سینکڑوں طلبہ کو تربیت دی ہے، جن میں 10 سال کے بچوں سے لے کر (جو اپنا پہلا AI پروجیکٹ بنا رہے ہیں) یونیورسٹی کے طلبہ تک شامل ہیں (جو AI کیریئر کی تیاری کر رہے ہیں)۔ ہمارے گریجویٹس کو عملی مہارتوں، حقیقی پروجیکٹس کے تجربے، اور مقامی اور عالمی سطح پر AI کے مواقع سے فائدہ اٹھانے کے اعتماد سے لیس کیا گیا ہے۔
            </p>

            {/* Founder / Instructor Bio */}
            <div className="mt-12 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center not-prose text-right">
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-3xl font-bold font-outfit shadow-md order-2 md:order-1">
                A
              </div>
              <div className="order-1 md:order-2 flex-grow">
                <h3 className="font-outfit font-bold text-xl text-dark mb-1 text-right">انسٹرکٹر اور کوآرڈینیٹر سے ملیں</h3>
                <p className="text-primary font-medium text-xs mb-4 text-right">آفتاب | سافٹ ویئر انجینئر اور لیڈ انسٹرکٹر</p>
                <p className="text-muted text-sm leading-relaxed mb-4 text-right">
                  آفتاب ایک تجربہ کار سافٹ ویئر انجینئر اور AI ڈویلپر ہیں جو پاکستان AI آن لائن اکیڈمی کے تعلیمی پروگرامز کی قیادت کرتے ہیں۔ وہ نصاب کے نقشے ڈیزائن کرتے ہیں اور ہمارے لائیو آن لائن کوڈنگ سیشنز چلاتے ہیں۔ ان کا تجربہ فل اسٹیک ازگر (Python) ڈویلپمنٹ، مشین لرننگ ماڈلز، ڈیٹا بیس اسٹرکچرز، اور نیچرل لینگویج API انٹیگریشنز پر محیط ہے۔
                </p>
                <div className="flex gap-4 justify-end">
                  <span className="text-xs text-muted">توجہ کا مرکز: Python پروگرامنگ، پرامپٹ انجینئرنگ، API انٹیگریشن</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            ہمارے بنیادی اصول
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "certificate",
                title: "امتیاز اور کمال",
                desc: "ہم جو کچھ بھی سکھاتے ہیں اس میں بہترین معیار حاصل کرنے کی کوشش کرتے ہیں۔ تازہ ترین AI پیش رفتوں کو شامل کرنے کے لیے ہمارا نصاب مسلسل اپ ڈیٹ کیا جاتا ہے۔",
              },
              {
                icon: "globe",
                title: "آسان رسائی",
                desc: "معیاری AI تعلیم پاکستان کے ہر طالب علم کے لیے قابل رسائی ہونی چاہیے، چاہے اس کا مقام یا پس منظر کچھ بھی ہو۔",
              },
              {
                icon: "tools",
                title: "عملی تعلیم",
                desc: "ہم عملی طور پر کر کے سیکھنے پر یقین رکھتے ہیں۔ ہر تصور کو عملی پروجیکٹس اور حقیقی دنیا کی ایپلی کیشنز کے ذریعے پختہ کیا جاتا ہے۔",
              },
              {
                icon: "sparkles",
                title: "جدت طرازی",
                desc: "ہم اپنے طلبہ کو تخلیقی اور جدید انداز میں سوچنے کی ترغیب دیتے ہیں، اور اہم مسائل کو حل کرنے کے لیے AI کو بطور آلہ استعمال کرنا سکھاتے ہیں۔",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-2xl p-6 text-center card-hover border border-gray-100"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={value.icon} size={28} color="primary" />
                </div>
                <h3 className="font-outfit font-semibold text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 section-gradient-light font-urdu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-4">
            ہمارا طریقہ تعلیم
          </h2>
          <p className="text-center text-muted text-lg mb-12 max-w-2xl mx-auto">
            ہم تدریس کے آزمودہ طریقہ کار پر عمل کرتے ہیں جو اس بات کو یقینی بناتا ہے کہ ہر طالب علم AI تصورات کو سمجھے، ان کا اطلاق کرے اور ان میں مہارت حاصل کرے۔
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            {[
              {
                step: "01",
                title: "تصورات کو سیکھیں",
                desc: "ماہرین کے زیر انتظام لائیو سیشنز جو آسان اور قابل فہم زبان میں اور حقیقی دنیا کی مثالوں کے ساتھ AI تصورات کی وضاحت کرتے ہیں۔",
                icon: "book",
              },
              {
                step: "02",
                title: "مشق اور تخلیق",
                desc: "عملی اسائنمنٹس اور پروجیکٹس جہاں طلبہ حقیقی AI ایپلی کیشنز بنا کر اپنے سیکھے ہوئے علم کا اطلاق کرتے ہیں۔",
                icon: "terminal",
              },
              {
                step: "03",
                title: "جائزہ اور بہتری",
                desc: "انفرادی فیڈ بیک، کوڈ کے جائزے، اور رہنمائی جو طلبہ کو اپنی مہارتوں کو بہتر بنانے اور ان میں مہارت حاصل کرنے میں مدد دیتی ہے۔",
                icon: "target",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary font-outfit text-4xl font-bold opacity-30">
                    {item.step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon name={item.icon} size={24} color="primary" />
                  </div>
                </div>
                <h3 className="font-outfit font-semibold text-xl mb-3 text-right">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed text-right">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Online Learning */}
      <section className="py-20 bg-white font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-8">
            آن لائن لرننگ کیوں کارآمد ہے؟
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "پاکستان بھر میں کہیں بھی قابل رسائی",
                desc: "چاہے آپ کراچی، لاہور، اسلام آباد، پشاور، کوئٹہ، یا پاکستان کے کسی بھی شہر یا قصبے میں ہوں — آپ صرف انٹرنیٹ کنکشن کے ذریعے ہماری کلاسز تک رسائی حاصل کر سکتے ہیں۔",
              },
              {
                title: "محفوظ اور آسان",
                desc: "کوئی سفر نہیں، کوئی سفری خدشات نہیں۔ طلبہ اپنے گھروں کے محفوظ اور آرام دہ ماحول سے سیکھتے ہیں، اور سرپرست اپنے بچے کے سیکھنے کے عمل کی نگرانی کر سکتے ہیں۔",
              },
              {
                title: "باہمی رابطہ اور دلچسپ",
                desc: "ہماری لائیو کلاسز انتہائی انٹرایکٹو ہوتی ہیں۔ طلبہ سوالات پوچھ سکتے ہیں، بات چیت میں حصہ لے سکتے ہیں، اپنی اسکرینیں شیئر کر سکتے ہیں، اور حقیقی وقت میں کلاس کے ساتھیوں کے ساتھ مل کر کام کر سکتے ہیں۔",
              },
              {
                title: "ریکارڈ شدہ سیشنز کی دستیابی",
                desc: "کلاس چھوٹ گئی؟ کوئی مسئلہ نہیں۔ تمام سیشنز ریکارڈ کیے جاتے ہیں تاکہ طلبہ اپنی سہولت کے مطابق مواد دہرا سکیں۔",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-surface rounded-2xl text-right"
              >
                <span className="text-secondary text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-outfit font-semibold text-lg mb-1 text-right">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-right">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient-light font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            آج ہی پاکستان AI آن لائن اکیڈمی میں شامل ہوں
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            مصنوعی ذہانت میں مہارت حاصل کرنے کی طرف پہلا قدم اٹھائیں۔ ہمارے کورسز کے بارے میں مزید جاننے اور اپنی مفت ڈیمو کلاس بک کرنے کے لیے واٹس ایپ پر ہم سے رابطہ کریں۔
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary" size="lg" href={WHATSAPP_LINK(`Hi! I'd like to learn more about Pakistan AI Online Academy.`)}>
              مزید معلومات
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
