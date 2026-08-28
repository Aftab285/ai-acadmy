import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { WHATSAPP_NUMBER, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "رازداری کی پالیسی (Privacy Policy) — پاکستان AI آن لائن اکیڈمی",
  description:
    "پاکستان AI آن لائن اکیڈمی کی رازداری کی پالیسی پڑھیں۔ جانیں کہ جب آپ ہماری لائیو آن لائن AI کلاسز میں داخلہ لیتے ہیں تو ہم آپ کی ذاتی معلومات کو کس طرح ہینڈل، جمع اور محفوظ کرتے ہیں۔",
  path: "/ur/privacy-policy",
  keywords: [
    "Privacy Policy Urdu",
    "Pakistan AI Academy Privacy Urdu",
    "Data Protection Policy Pakistan",
  ],
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "رازداری کی پالیسی", url: "/ur/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-urdu">
          <Breadcrumbs
            items={[
              { label: "ہوم", href: "/ur" },
              { label: "رازداری کی پالیسی", href: "/ur/privacy-policy" },
            ]}
          />
          <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            رازداری کی پالیسی (Privacy Policy)
          </h1>
          <p className="text-blue-100">آخری بار اپ ڈیٹ کیا گیا: 25 جون 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="prose prose-blue max-w-none text-gray-700 space-y-6 text-right">
            <p className="text-lg leading-relaxed text-right">
              <strong>پاکستان AI آن لائن اکیڈمی</strong> پر، جو کہ{" "}
              <a href="https://www.pakistanaionlineacademy.com" className="text-primary underline font-medium">
                https://www.pakistanaionlineacademy.com
              </a>{" "}
              پر دستیاب ہے، ہماری بنیادی ترجیحات میں سے ایک ہمارے زائرین اور طلبہ کی رازداری ہے۔ یہ رازداری کی پالیسی کی دستاویز پاکستان AI آن لائن اکیڈمی کی طرف سے جمع اور ریکارڈ کی جانے والی معلومات کی اقسام اور اس کے استعمال کے طریقے پر مشتمل ہے۔
            </p>

            <p className="text-right">
              اگر آپ کے پاس مزید سوالات ہیں یا ہماری رازداری کی پالیسی کے بارے میں مزید معلومات کی ضرورت ہے، تو ہم سے رابطہ کرنے کے ہمارے بنیادی طریقے واٹس ایپ پر{" "}
              <a href={WHATSAPP_LINK()} className="text-secondary font-semibold hover:underline">
                {WHATSAPP_NUMBER}
              </a>{" "}
              پر بلا جھجھک رابطہ کریں۔
            </p>

            <hr className="border-gray-200" />

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">رضامندی</h2>
            <p className="text-right">
              ہماری ویب سائٹ استعمال کر کے، آپ ہماری رازداری کی پالیسی پر رضامند ہوتے ہیں اور اس کی شرائط سے اتفاق کرتے ہیں۔
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">معلومات جو ہم جمع کرتے ہیں</h2>
            <p className="text-right">
              جو ذاتی معلومات آپ کو فراہم کرنے کے لیے کہی جاتی ہیں، اور جن وجوہات کی بناء پر آپ سے معلومات فراہم کرنے کو کہا جاتا ہے، وہ آپ کو اس وقت واضح کر دی جائیں گی جب ہم آپ سے اپنی ذاتی معلومات فراہم کرنے کے لیے کہیں گے۔
            </p>
            <ul className="list-disc pr-6 space-y-2 text-right">
              <li>
                <strong>براہ راست مواصلت:</strong> اگر آپ ہم سے واٹس ایپ یا ای میل کے ذریعے براہ راست رابطہ کرتے ہیں، تو ہم آپ کے بارے میں اضافی معلومات حاصل کر سکتے ہیں جیسے آپ کا نام، فون نمبر، ای میل ایڈریس، پیغام کے مندرجات اور کوئی بھی منسلکات جو آپ ہمیں بھیج سکتے ہیں۔
              </li>
              <li>
                <strong>داخلہ کی معلومات:</strong> جب آپ AI کورس کے لیے رجسٹریشن کرواتے ہیں یا مفت تعارفی کلاس بک کرتے ہیں، تو ہم لائیو کلاسز کو ترتیب دینے کے لیے طالب علم کی تفصیلات (نام، عمر، کلاس، شہر) اور والدین کے رابطے کی تفصیلات طلب کرتے ہیں۔
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">ہم آپ کی معلومات کیسے استعمال کرتے ہیں</h2>
            <p className="text-right">ہم جمع کردہ معلومات کو مختلف طریقوں سے استعمال کرتے ہیں، بشمول:</p>
            <ul className="list-disc pr-6 space-y-2 text-right">
              <li>ہماری ویب سائٹ اور تعلیمی پروگرامز فراہم کرنا، چلانا اور ان کی دیکھ بھال کرنا</li>
              <li>ہماری تعلیمی خدمات کو بہتر بنانا، ذاتی بنانا اور وسعت دینا</li>
              <li>سمجھنا اور تجزیہ کرنا کہ آپ ہماری ویب سائٹ کیسے استعمال کرتے ہیں</li>
              <li>نئے کورسز، خدمات، خصوصیات اور فنکشنلٹی تیار کرنا</li>
              <li>کورس کا شیڈول، ہوم ورک اپ ڈیٹس، ڈیمو کلاس لنکس، اور اکیڈمی کے اعلانات بھیجنے کے لیے واٹس ایپ کے ذریعے آپ سے رابطہ کرنا</li>
              <li>داخلہ کی رسیدوں یا سپورٹ کے لیے ضرورت پڑنے پر آپ کو ای میلز بھیجنا</li>
              <li>دھوکہ دہی کا پتہ لگانا اور اس سے بچنا</li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">لاگ فائلز</h2>
            <p className="text-right">
              پاکستان AI آن لائن اکیڈمی لاگ فائلوں کو استعمال کرنے کے ایک معیاری طریقہ کار پر عمل کرتی ہے۔ یہ فائلیں تب زائرین کا لاگ بناتی ہیں جب وہ ویب سائٹس کا دورہ کرتے ہیں۔ تمام ہوسٹنگ کمپنیاں ایسا کرتی ہیں اور یہ ہوسٹنگ service کے تجزیات کا ایک حصہ ہے۔ لاگ فائلوں کے ذریعے جمع کی جانے والی معلومات میں انٹرنیٹ پروٹوکول (IP) ایڈریس، براؤزر کی نوعیت، انٹرنیٹ سروس پرووائیڈر (ISP)، تاریخ اور وقت کا ریکارڈ، ریفرنگ/خارج ہونے والے صفحات، اور ممکنہ طور پر کلکس کی تعداد شامل ہے۔ یہ معلومات کسی ایسی چیز سے منسلک نہیں ہیں جو ذاتی طور پر قابل شناخت ہو۔ معلومات کا مقصد رجحانات کا تجزیہ کرنا، سائٹ کا انتظام کرنا، ویب سائٹ پر صارفین کی نقل و حرکت کو ٹریک کرنا، اور ڈیموگرافک معلومات جمع کرنا ہے۔
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">کوکیز اور ویب بیکنز</h2>
            <p className="text-right">
              کسی بھی دوسری ویب سائٹ کی طرح، پاکستان AI آن لائن اکیڈمی &apos;کوکیز&apos; (cookies) کا استعمال کرتی ہے۔ ان کوکیز کا استعمال زائرین کی ترجیحات، اور ویب سائٹ کے ان صفحات کو محفوظ کرنے کے لیے کیا جاتا ہے جہاں آنے والے نے رسائی حاصل کی یا دورہ کیا۔ اس معلومات کا استعمال زائرین کے براؤزر کی قسم اور/یا دیگر معلومات کی بنیاد پر ہمارے ویب پیج کے مواد کو اپنی مرضی کے مطابق بنا کر صارفین کے تجربے کو بہتر بنانے کے لیے کیا جاتا ہے۔
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">GDPR اور پاکستان کے ڈیٹا پروٹیکشن حقوق</h2>
            <p className="text-right">
              ہم اس بات کو یقینی بنانا چاہتے ہیں کہ آپ اپنے تمام ڈیٹا پروٹیکشن حقوق سے پوری طرح باخبر ہوں۔ ہر صارف درج ذیل کا حقدار ہے:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-right">
              <li>
                <strong>رسائی کا حق:</strong> آپ کو اپنے ذاتی ڈیٹا کی کاپیاں مانگنے کا حق ہے۔
              </li>
              <li>
                <strong>درستگی کا حق:</strong> آپ کو یہ درخواست کرنے کا حق ہے کہ ہم کسی بھی ایسی معلومات کو درست کریں جس کے بارے میں آپ کا خیال ہے کہ وہ غلط ہے۔
              </li>
              <li>
                <strong>مٹانے کا حق:</strong> آپ کو مخصوص شرائط کے تحت یہ درخواست کرنے کا حق ہے کہ ہم آپ کا ذاتی ڈیٹا مٹا دیں۔
              </li>
              <li>
                <strong>پروسیسنگ کو محدود کرنے کا حق:</strong> آپ کو مخصوص شرائط کے تحت یہ درخواست کرنے کا حق ہے کہ ہم آپ کے ذاتی ڈیٹا کی پروسیسنگ کو محدود کریں۔
              </li>
              <li>
                <strong>پروسیسنگ پر اعتراض کا حق:</strong> آپ کو مخصوص شرائط کے تحت ہمارے ذاتی ڈیٹا کی پروسیسنگ پر اعتراض کرنے کا حق ہے۔
              </li>
              <li>
                <strong>ڈیٹا کی منتقلی کا حق:</strong> آپ کو مخصوص شرائط کے تحت یہ درخواست کرنے کا حق ہے کہ ہم جو ڈیٹا جمع کیا ہے اسے کسی دوسری تنظیم کو یا براہ راست آپ کو منتقل کریں۔
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">بچوں کے بارے میں معلومات</h2>
            <p className="text-right">
              ہماری ترجیح کا ایک اور حصہ انٹرنیٹ استعمال کرنے کے دوران بچوں کے لیے تحفظ فراہم کرنا ہے۔ ہم والدین اور سرپرستوں کی حوصلہ افزائی کرتے ہیں کہ وہ اپنے بچوں کی آن لائن سرگرمیوں کا مشاہدہ کریں، ان میں حصہ لیں اور/یا نگرانی اور رہنمائی کریں۔
            </p>
            <p className="text-right">
              پاکستان AI آن لائن اکیڈمی اسکول کے طلبہ (عمر 10+) کے لیے کورسز فراہم کرتی ہے۔ ہم اپنے والدین یا قانونی سرپرست کی رضامندی اور ہم آہنگی کے بغیر جان بوجھ کر 13 سال سے کم عمر بچوں سے کوئی ذاتی قابل شناخت معلومات جمع نہیں کرتے ہیں۔ اگر آپ کو لگتا ہے کہ آپ کے بچے نے ہماری ویب سائٹ پر اس قسم کی معلومات فراہم کی ہیں، تو ہم آپ کو واٹس ایپ پر فوری طور پر ہم سے رابطہ کرنے کی بھرپور ترغیب دیتے ہیں، اور ہم اپنے ریکارڈ سے ایسی معلومات کو فوری طور پر ہٹانے کی پوری کوشش کریں گے۔
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
