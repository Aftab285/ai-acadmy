import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { WHATSAPP_NUMBER, WHATSAPP_INTERNATIONAL } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "سروس کی شرائط (Terms of Service) — پاکستان AI آن لائن اکیڈمی",
  description:
    "پاکستان AI آن لائن اکیڈمی میں لائیو آن لائن کلاسز میں داخلے کے لیے سروس کی شرائط و ضوابط کا جائزہ لیں۔ کلاس کے قوانین، فیس کی شرائط اور تعلیمی پالیسیوں کے بارے میں جانیں۔",
  path: "/ur/terms",
  keywords: [
    "Terms of Service Urdu",
    "Terms and Conditions Urdu",
    "Pakistan AI Academy Terms Urdu",
  ],
});

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "ہوم", url: "/ur" },
    { name: "سروس کی شرائط", url: "/ur/terms" },
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
              { label: "سروس کی شرائط", href: "/ur/terms" },
            ]}
          />
          <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            سروس کی شرائط
          </h1>
          <p className="text-blue-100">آخری بار اپ ڈیٹ کیا گیا: 25 جون 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white font-urdu">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="prose prose-blue max-w-none text-gray-700 space-y-6 text-right">
            <p className="text-lg leading-relaxed text-right">
              <strong>پاکستان AI آن لائن اکیڈمی</strong> میں خوش آمدید!
            </p>

            <p className="text-right">
              یہ شرائط و ضوابط{" "}
              <a href="https://www.pakistanaionlineacademy.com" className="text-primary underline font-medium">
                https://www.pakistanaionlineacademy.com
              </a>{" "}
              پر واقع پاکستان AI آن لائن اکیڈمی کی ویب سائٹ اور لائیو آن لائن کورسز کے استعمال کے قوانین اور ضوابط کی وضاحت کرتے ہیں۔
            </p>

            <p className="text-right">
              اس ویب سائٹ تک رسائی حاصل کر کے اور ہمارے کورسز میں داخلہ لے کر، ہم فرض کرتے ہیں کہ آپ ان شرائط و ضوابط کو مکمل طور پر قبول کرتے ہیں۔ اگر آپ اس صفحہ پر بیان کردہ تمام شرائط و ضوابط کو قبول کرنے سے اتفاق نہیں کرتے ہیں تو پاکستان AI آن لائن اکیڈمی کی خدمات کا استعمال جاری نہ رکھیں۔
            </p>

            <hr className="border-gray-200" />

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">1۔ تعبیر اور تعریفیں</h2>
            <p className="text-right">
              مندرجہ ذیل اصطلاحات ان سروس کی شرائط، رازداری کے بیان، اور دستبرداری کے نوٹس پر لاگو ہوتی ہیں: &quot;طالب علم&quot;، &quot;والدین&quot;، &quot;آپ&quot; اور &quot;آپ کا&quot; سے مراد آپ ہیں، وہ شخص جو اس ویب سائٹ پر لاگ ان ہے یا کسی طالب علم کا داخلہ کرا رہا ہے۔ &quot;اکیڈمی&quot;، &quot;ہم خود&quot;، &quot;ہم&quot;، &quot;ہمارا&quot; اور &quot;ہمیں&quot; سے مراد پاکستان AI آن لائن اکیڈمی ہے۔
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">2۔ کورس میں داخلہ اور لائیو کلاسز</h2>
            <ul className="list-disc pr-6 space-y-2 text-right">
              <li>
                <strong>100% لائیو کلاسز:</strong> تمام کلاسز ہمارے انسٹرکٹرز کے ذریعے آن لائن لائیو منعقد کی جاتی ہیں۔ لائیو کلاس لنکس واٹس ایپ گروپس کے ذریعے والدین/طلبہ کے ساتھ شیئر کیے جاتے ہیں۔
              </li>
              <li>
                <strong>حاضری اور شیڈول:</strong> طلبہ سے وقت پر کلاسوں میں شرکت کی توقع کی جاتی ہے۔ کلاس کے شیڈول (دن اور اوقات) کا فیصلہ داخلے کے وقت کیا جاتا ہے اور وہ طے شدہ ہوتے ہیں۔ بیچ/شیڈول تبدیل کرنے کی کوئی بھی درخواست نشستوں کی دستیابی سے مشروط ہے۔
              </li>
              <li>
                <strong>طالب علم کا طرز عمل:</strong> ہم ایک مثبت، حوصلہ افزا، اور باعزت ورچوئل لرننگ ماحول برقرار رکھتے ہیں۔ خلل ڈالنے والے رویے، غیر مناسب زبان کے استعمال، یا تعلیمی بددیانتی کے نتیجے میں بغیر کسی فیس کی واپسی کے وارننگ یا کلاسز سے معطلی ہو سکتی ہے۔
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">3۔ فیس اور ریفنڈز</h2>
            <ul className="list-disc pr-6 space-y-2 text-right">
              <li>
                <strong>کورس فیس:</strong> فیس منتخب کردہ ادائیگی کی اسکیم (ایک بارگی یا ماہانہ پلان) کے مطابق کورس یا ماہانہ سائیکل شروع ہونے سے پہلے پیشگی ادا کی جانی چاہیے۔
              </li>
              <li>
                <strong>ادائیگی کے طریقے:</strong> ادائیگیوں پر آن لائن (JazzCash، EasyPaisa، یا براہ راست بینک ٹرانسفرز) کارروائی کی جاتی ہے جیسا کہ ہمارے آفیشل واٹس ایپ سپورٹ {WHATSAPP_NUMBER} پر کوآرڈینیٹ کیا جاتا ہے۔
              </li>
              <li>
                <strong>ریفنڈ پالیسی:</strong> چونکہ ہم آپ کو/آپ کے بچے کو ادائیگی سے پہلے ہماری تدریس کے معیار کا جائزہ لینے کے لیے ایک مفت ڈیمو کلاس پیش کرتے ہیں، اس لیے باقاعدہ کلاسز شروع ہونے کے بعد تمام ادا شدہ کورس فیس ناقابل واپسی اور ناقابل انتقال ہے۔
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">4۔ دانشورانہ ملکیت</h2>
            <p className="text-right">
              جب تک کہ دوسری صورت میں بیان نہ کیا جائے، پاکستان AI آن لائن اکیڈمی اور/یا اس کے لائسنس دہندگان لائیو کلاسز کے دوران یا ہماری ویب سائٹ کے ذریعے فراہم کردہ تمام مواد، کورس کے نصاب، پریزنٹیشنز اور وسائل کے دانشورانہ ملکیت کے حقوق کے مالک ہیں۔ تمام دانشورانہ ملکیت کے حقوق محفوظ ہیں۔ آپ ان شرائط میں متعین کردہ پابندیوں کے تابع اپنے ذاتی تعلیمی استعمال کے لیے پاکستان AI آن لائن اکیڈمی سے اس تک رسائی حاصل کر سکتے ہیں۔
            </p>
            <p className="text-right">آپ کو درج ذیل کام نہیں کرنے چاہئیں:</p>
            <ul className="list-disc pr-6 space-y-2 text-right">
              <li>ہمارے کورس کے مواد، سلائیڈز، یا ریکارڈنگ لنکس کو دوبارہ شائع یا تقسیم کرنا</li>
              <li>ہمارے سیکھنے کے وسائل کو فروخت، کرایہ پر دینا، یا سب لائسنس دینا</li>
              <li>تجارتی تعلیمی اکیڈمیوں کے لیے ہمارے نصاب کو دوبارہ تیار، نقل یا کاپی کرنا</li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">5۔ ذمہ داری کی حدود</h2>
            <p className="text-right">
              کسی بھی صورت میں پاکستان AI آن لائن اکیڈمی، اور نہ ہی اس کے انسٹرکٹرز، ڈائریکٹرز، یا پارٹنرز، کسی بھی ایسی چیز کے ذمہ دار ہوں گے جو آپ کی اس ویب سائٹ کے استعمال یا ہماری لائیو کلاسوں میں داخلے سے پیدا ہوتی ہے یا کسی بھی طرح سے منسلک ہو۔ پاکستان AI آن لائن اکیڈمی آپ کے سیکھنے کے نتائج یا طالب علم کے گریڈ کی کارکردگی سے متعلق کسی بھی بالواسطہ، نتیجہ خیز، یا خصوصی ذمہ داری کے لیے جوابدہ نہیں ہوگی۔
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">6۔ قانون کا نفاذ</h2>
            <p className="text-right">
              یہ شرائط و ضوابط پاکستان کے قوانین کے مطابق چلائے جاتے ہیں اور ان کے مطابق تشریح کی جاتی ہے، اور آپ غیر قانونی طور پر اس ریاست یا مقام کی عدالتوں کے خصوصی دائرہ اختیار کے تابع ہوتے ہیں۔
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8 text-right">7۔ رابطے کی معلومات</h2>
            <p className="text-right">
              ہمارا واحد اور آفیشل رابطہ طریقہ واٹس ایپ ہے۔ داخلہ، کلاس کے شیڈول، فیس، یا شرائط کی وضاحت کے حوالے سے کسی بھی انکوائری کے لیے، براہ کرم ہم سے رابطہ کریں:
            </p>
            <p className="font-semibold text-primary text-right" dir="ltr">
              WhatsApp: {WHATSAPP_NUMBER} <br />
              (International: {WHATSAPP_INTERNATIONAL})
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
