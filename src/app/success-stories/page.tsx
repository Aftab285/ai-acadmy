import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { TESTIMONIALS, STATS, WHATSAPP_LINK, WHATSAPP_DEMO_MESSAGE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "Success Stories — What Our Students and Parents Say",
  description:
    "Read success stories from students and parents at Pakistan AI Online Academy. Discover how our live online AI courses have transformed learning journeys across Pakistan.",
  path: "/success-stories",
  keywords: [
    "AI Course Reviews Pakistan",
    "Student Success Stories",
    "AI Academy Testimonials",
    "Pakistan AI Academy Reviews",
    "Best AI Course Feedback",
  ],
});

export default function SuccessStoriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Success Stories", url: "/success-stories" },
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
              { label: "Success Stories", href: "/success-stories" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from parents and students who have experienced the transformative
            power of AI education at Pakistan AI Online Academy.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
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
            Featured Success Stories
          </h2>

          {/* Featured Highlight */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
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
                  &ldquo;My daughter Aisha joined the Beginner AI Course when she was 14. Within two months, she was building AI projects that amazed her school teachers. The confidence she gained is priceless. Pakistan AI Online Academy did not just teach her AI — it showed her that she can achieve anything.&rdquo;
                </blockquote>
                <div>
                  <p className="font-outfit font-semibold text-lg">
                    Aisha&apos;s Mother
                  </p>
                  <p className="text-muted">
                    Parent from Islamabad
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-6xl block mb-4">🏆</span>
                    <p className="font-outfit text-xl font-bold">Aisha&apos;s Journey</p>
                    <p className="text-blue-100 text-sm mt-2">
                      From beginner to AI project builder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Highlights */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            The Transformation We See
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <span className="text-5xl block mb-4">🌱</span>
              <h3 className="font-outfit font-semibold text-lg mb-2">Before</h3>
              <p className="text-muted leading-relaxed">
                Students arrive curious but uncertain. Many have no coding experience
                and wonder if AI is too difficult for them.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center border-2 border-secondary">
              <span className="text-5xl block mb-4">📚</span>
              <h3 className="font-outfit font-semibold text-lg mb-2">During</h3>
              <p className="text-muted leading-relaxed">
                Through live classes, hands-on projects, and expert guidance,
                students gain confidence and start building real AI applications.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <span className="text-5xl block mb-4">🚀</span>
              <h3 className="font-outfit font-semibold text-lg mb-2">After</h3>
              <p className="text-muted leading-relaxed">
                Graduates leave with practical AI skills, a project portfolio,
                a certificate, and the confidence to pursue AI-driven careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Story CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Join hundreds of students across Pakistan who are already building
            their future with AI. Your journey begins with a simple WhatsApp message.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary" size="lg" href={WHATSAPP_LINK(WHATSAPP_DEMO_MESSAGE)}>
              Book Free Demo Class
            </CTAButton>
            <CTAButton variant="whatsapp" size="lg" href={WHATSAPP_LINK()}>
              Chat on WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
