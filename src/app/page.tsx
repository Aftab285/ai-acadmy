import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema } from "@/lib/schema";
import { FAQ_DATA } from "@/lib/constants";
import HeroSection from "@/components/sections/HeroSection";
import YouTubeShorts from "@/components/sections/YouTubeShorts";
import CoursesPreview from "@/components/sections/CoursesPreview";
import WhyLearnAI from "@/components/sections/WhyLearnAI";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StudentJourney from "@/components/sections/StudentJourney";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StatsCounter from "@/components/ui/StatsCounter";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = generatePageMetadata({
  title: "Pakistan's Leading Online AI Academy",
  description:
    "Master Artificial Intelligence through live online classes at Pakistan AI Online Academy. Best AI courses for students and beginners across Pakistan. Learn AI, Machine Learning, ChatGPT, and Generative AI from expert instructors.",
  path: "/",
  keywords: [
    "AI Course Pakistan",
    "Online AI Course Pakistan",
    "Artificial Intelligence Course Pakistan",
    "AI Academy Pakistan",
    "Learn AI Online",
    "Best AI Course Pakistan",
    "AI Classes Pakistan",
    "AI for Kids",
    "AI for Students",
    "ChatGPT Course Pakistan",
    "Machine Learning Course Pakistan",
    "Generative AI Course",
    "AI Education Pakistan",
    "Future Skills Pakistan",
  ],
});

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQ_DATA);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />

      <StatsCounter />

      <YouTubeShorts />

      <section id="courses" className="py-20 bg-white">
        <CoursesPreview />
      </section>

      <section id="why-learn-ai" className="py-20 section-gradient-light">
        <WhyLearnAI />
      </section>

      <section id="why-choose-us" className="py-20 bg-white">
        <WhyChooseUs />
      </section>

      <section id="student-journey" className="py-20 section-gradient-light">
        <StudentJourney />
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <Testimonials />
      </section>

      <section id="blog" className="py-20 section-gradient-light">
        <BlogPreview />
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our AI courses and learning programs."
            centered
          />
          <FAQAccordion items={FAQ_DATA} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
