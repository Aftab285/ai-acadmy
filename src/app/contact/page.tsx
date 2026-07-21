import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_NUMBER, DEMO_VIDEO_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { FAQ_DATA } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us — Chat on WhatsApp",
  description:
    "Contact Pakistan AI Online Academy on WhatsApp. Book your free AI demo class, ask about our courses, or get information about enrollment. We are just a message away.",
  path: "/contact",
  keywords: [
    "Contact Pakistan AI Academy",
    "AI Course Inquiry",
    "Book AI Demo Class",
    "WhatsApp AI Course",
    "AI Academy Contact",
  ],
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
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
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            Ready to Start Learning AI?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Contact us on WhatsApp today and book your free consultation.
            We are here to help you begin your AI learning journey.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 md:p-16 text-center">
            {/* WhatsApp Icon */}
            <div className="w-24 h-24 mx-auto mb-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
              Chat on WhatsApp
            </h2>
            <p className="text-lg text-dark-light mb-8 max-w-xl mx-auto">
              WhatsApp is our primary communication channel. Tap the button below
              to start a conversation with us instantly.
            </p>

            {/* WhatsApp Number */}
            <div className="mb-8">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="font-outfit text-4xl md:text-5xl font-bold text-[#25D366] hover:underline"
              >
                {WHATSAPP_NUMBER}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <CTAButton
                variant="whatsapp"
                size="lg"
                href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}
              >
                Chat on WhatsApp
              </CTAButton>
              <CTAButton
                variant="primary"
                size="lg"
                href={DEMO_VIDEO_URL}
                external
              >
                Watch Free Demo
              </CTAButton>
            </div>

            <p className="text-sm text-muted">
              We typically respond within minutes during operating hours.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            What Happens When You Contact Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: "📱",
                title: "Send a Message",
                desc: "Reach out on WhatsApp with your questions or interest in our courses.",
              },
              {
                step: "2",
                icon: "💬",
                title: "Free Consultation",
                desc: "We'll understand your goals and recommend the best course for you.",
              },
              {
                step: "3",
                icon: "🎥",
                title: "Free Demo Class",
                desc: "Experience our live teaching style with a complimentary demo session.",
              },
              {
                step: "4",
                icon: "🚀",
                title: "Start Learning",
                desc: "Enroll and begin your AI journey with expert-led live classes.",
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-outfit text-xl font-bold mb-4">
                📅 Operating Hours
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-dark-light">
                  <span>Monday — Friday</span>
                  <span className="font-medium">9:00 AM — 9:00 PM</span>
                </li>
                <li className="flex justify-between text-dark-light">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM — 6:00 PM</span>
                </li>
                <li className="flex justify-between text-dark-light">
                  <span>Sunday</span>
                  <span className="font-medium">10:00 AM — 4:00 PM</span>
                </li>
              </ul>
              <p className="text-muted text-sm mt-4">
                All times are Pakistan Standard Time (PKT/GMT+5)
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-outfit text-xl font-bold mb-4">
                ⚡ Quick Inquiries
              </h3>
              <p className="text-dark-light mb-4">
                You can message us anytime on WhatsApp! Even outside operating
                hours, we&apos;ll respond as soon as we&apos;re available.
              </p>
              <p className="text-dark-light mb-6">
                Common inquiries:
              </p>
              <ul className="space-y-2">
                <li className="text-muted text-sm">• Course details and fees</li>
                <li className="text-muted text-sm">• Scheduling a free demo class</li>
                <li className="text-muted text-sm">• Enrollment process</li>
                <li className="text-muted text-sm">• Course recommendations</li>
                <li className="text-muted text-sm">• Student support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted mb-12">
            Have questions? Find quick answers below, or contact us on WhatsApp.
          </p>
          <FAQAccordion items={FAQ_DATA} />
        </div>
      </section>
    </>
  );
}
