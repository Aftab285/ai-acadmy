import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateCourseSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { COURSES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Courses — Online Artificial Intelligence Courses in Pakistan",
  description:
    "Explore our comprehensive AI courses for students and beginners in Pakistan. From beginner to advanced — learn AI, Machine Learning, ChatGPT, Generative AI, and Prompt Engineering through live online classes.",
  path: "/courses",
  keywords: [
    "AI Courses Pakistan",
    "Artificial Intelligence Courses",
    "Online AI Classes",
    "Machine Learning Course",
    "ChatGPT Course",
    "Generative AI Course",
    "Prompt Engineering Course",
    "AI Training Pakistan",
    "Best AI Courses Online",
  ],
});

export default function CoursesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
  ];

  const courseSchemas = COURSES.map((course) => generateCourseSchema(course));
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="hero-gradient py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/courses" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            Our AI Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our carefully designed AI courses covering everything
            from beginner fundamentals to advanced deep learning. All courses
            feature live online classes, hands-on projects, and expert
            instruction.
          </p>
        </div>
      </section>

      {/* Course Level Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              All Courses
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700">
              Beginner
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
              Intermediate
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700">
              Advanced
            </span>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Makes Our Courses Different"
            subtitle="Every course at Pakistan AI Online Academy is designed to provide practical, hands-on AI education."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: "🎥",
                title: "100% Live Classes",
                desc: "Real-time interactive sessions, not pre-recorded videos.",
              },
              {
                icon: "🛠️",
                title: "Project Based",
                desc: "Build real AI projects throughout every course.",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Guidance",
                desc: "Learn from experienced AI professionals.",
              },
              {
                icon: "🏆",
                title: "Certification",
                desc: "Earn a certificate upon successful completion.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-outfit font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
