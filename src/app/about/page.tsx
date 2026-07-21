import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { WHATSAPP_LINK } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "About Pakistan AI Online Academy — Our Mission & Vision",
  description:
    "Learn about Pakistan AI Online Academy, our mission to provide world-class AI education to students across Pakistan through live online classes, and our vision for the future of AI education.",
  path: "/about",
  keywords: [
    "About Pakistan AI Academy",
    "AI Academy Pakistan",
    "AI Education Mission",
    "Online AI Academy",
    "AI Instructor Pakistan",
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
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
              { label: "About", href: "/about" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            About Pakistan AI Online Academy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are on a mission to make Artificial Intelligence education
            accessible to every student in Pakistan — empowering the next generation
            of AI leaders, innovators, and creators.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10">
              <span className="text-5xl block mb-6">🎯</span>
              <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-dark-light leading-relaxed text-lg">
                To provide world-class Artificial Intelligence education to students
                across Pakistan through live, interactive online classes. We believe
                that every student — regardless of location, background, or prior
                experience — deserves access to quality AI education that prepares
                them for the future.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-3xl p-8 md:p-10">
              <span className="text-5xl block mb-6">🔭</span>
              <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-dark-light leading-relaxed text-lg">
                To become Pakistan&apos;s leading AI education platform that produces
                the next generation of AI innovators, researchers, and entrepreneurs.
                We envision a Pakistan where AI literacy is as common as digital
                literacy — where students confidently build AI-powered solutions
                to real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-dark-light leading-relaxed mb-6">
              Pakistan AI Online Academy was founded with a simple yet powerful
              belief: that AI education should not be limited to elite universities
              or expensive bootcamps. We saw that students across Pakistan — from
              Karachi to Peshawar, Lahore to Quetta — were eager to learn about
              Artificial Intelligence but lacked accessible, quality learning
              opportunities.
            </p>
            <p className="text-dark-light leading-relaxed mb-6">
              Our founder, an experienced AI professional, decided to bridge this
              gap by creating an online academy that brings world-class AI education
              directly to students&apos; homes. Through live interactive classes, hands-on
              projects, and personalized mentorship, we make AI learning engaging,
              practical, and accessible.
            </p>
            <p className="text-dark-light leading-relaxed mb-6">
              Today, Pakistan AI Online Academy has trained hundreds of students
              ranging from 10-year-olds building their first AI projects to university
              students preparing for AI careers. Our graduates are equipped with
              practical skills, real project experience, and the confidence to
              pursue AI-driven opportunities — both locally and globally.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "certificate",
                title: "Excellence",
                desc: "We strive for excellence in everything we teach. Our curriculum is constantly updated to reflect the latest AI developments.",
              },
              {
                icon: "globe",
                title: "Accessibility",
                desc: "Quality AI education should be accessible to every student in Pakistan, regardless of their location or background.",
              },
              {
                icon: "tools",
                title: "Practical Learning",
                desc: "We believe in learning by doing. Every concept is reinforced through hands-on projects and real-world applications.",
              },
              {
                icon: "sparkles",
                title: "Innovation",
                desc: "We encourage our students to think creatively and innovatively, using AI as a tool to solve problems that matter.",
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
      <section className="py-20 section-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-4">
            Our Teaching Methodology
          </h2>
          <p className="text-center text-muted text-lg mb-12 max-w-2xl mx-auto">
            We follow a proven teaching methodology that ensures every student
            understands, applies, and masters AI concepts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Learn Concepts",
                desc: "Expert-led live sessions explaining AI concepts in simple, understandable language with real-world examples.",
                icon: "book",
              },
              {
                step: "02",
                title: "Practice & Build",
                desc: "Hands-on assignments and projects where students apply what they learned by building real AI applications.",
                icon: "terminal",
              },
              {
                step: "03",
                title: "Review & Improve",
                desc: "Personalized feedback, code reviews, and mentorship to help students improve and master their skills.",
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
                <h3 className="font-outfit font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Online Learning */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-8">
            Why Online Learning Works
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Accessible Anywhere in Pakistan",
                desc: "Whether you are in Karachi, Lahore, Islamabad, Peshawar, Quetta, or any city or town in Pakistan — you can access our classes with just an internet connection.",
              },
              {
                title: "Safe & Convenient",
                desc: "No commuting, no travel concerns. Students learn from the safety and comfort of their own homes, and parents can monitor their child's learning.",
              },
              {
                title: "Interactive & Engaging",
                desc: "Our live classes are highly interactive. Students can ask questions, participate in discussions, share their screens, and collaborate with classmates in real-time.",
              },
              {
                title: "Recorded Sessions Available",
                desc: "Miss a class? No problem. All sessions are recorded so students can review the material at their own pace.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-surface rounded-2xl"
              >
                <span className="text-secondary text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-outfit font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            Join Pakistan AI Online Academy Today
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Take the first step towards mastering Artificial Intelligence. Contact
            us on WhatsApp to learn more about our courses and book your free demo class.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary" size="lg" href={WHATSAPP_LINK(`Hi! I'd like to learn more about Pakistan AI Online Academy.`)}>
              Learn More
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
