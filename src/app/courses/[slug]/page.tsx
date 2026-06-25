import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COURSES, WHATSAPP_LINK, FAQ_DATA } from "@/lib/constants";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} | Pakistan AI Online Academy`,
    description: course.description,
    keywords: [
      course.shortTitle,
      `${course.shortTitle} Pakistan`,
      "AI Course Pakistan",
      "Online AI Course",
      "Artificial Intelligence Course",
      ...course.topics.slice(0, 5),
    ],
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://pakistanaionlineacademy.com/courses/${course.slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://pakistanaionlineacademy.com/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const courseSchema = generateCourseSchema(course);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: course.shortTitle, url: `/courses/${course.slug}` },
  ]);
  const faqSchema = generateFAQSchema(FAQ_DATA.slice(0, 6));

  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  const otherCourses = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/courses" },
              { label: course.shortTitle, href: `/courses/${course.slug}` },
            ]}
          />
          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{course.icon}</span>
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${levelColors[course.level]}`}
              >
                {course.level}
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                {course.duration}
              </span>
            </div>
            <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              {course.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton variant="whatsapp" size="lg" href={WHATSAPP_LINK(`Hi! I'm interested in the ${course.shortTitle}. Can you share more details?`)}>
                Enroll Now on WhatsApp
              </CTAButton>
              <CTAButton variant="outline" size="lg" href={WHATSAPP_LINK(`Hi! I'd like to book a free demo class for the ${course.shortTitle}.`)}>
                Book Free Demo
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Info Bar */}
              <div className="flex flex-wrap gap-6 mb-12 p-6 bg-surface rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-sm text-muted">Duration</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-sm text-muted">Level</p>
                    <p className="font-semibold">{course.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="text-sm text-muted">Age Group</p>
                    <p className="font-semibold">{course.ageGroup}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎥</span>
                  <div>
                    <p className="text-sm text-muted">Format</p>
                    <p className="font-semibold">Live Online</p>
                  </div>
                </div>
              </div>

              {/* What You Will Learn */}
              <div className="mb-12">
                <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6">
                  What You Will Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-surface rounded-xl"
                    >
                      <span className="text-secondary font-bold text-lg mt-0.5">✓</span>
                      <span className="text-dark-light">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Features */}
              <div className="mb-12">
                <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6">
                  Course Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
                    >
                      <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="font-medium text-dark-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Is This Course For */}
              <div className="mb-12">
                <h2 className="font-outfit text-2xl md:text-3xl font-bold mb-6">
                  Who Is This Course For?
                </h2>
                <div className="prose max-w-none">
                  <p className="text-muted leading-relaxed mb-4">
                    This {course.shortTitle} is perfect for:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">Students aged {course.ageGroup.replace("Ages ", "")} and above who are curious about AI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">Parents looking for future-ready skills for their children</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">Beginners with no prior coding or AI experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">●</span>
                      <span className="text-dark-light">Anyone in Pakistan wanting to learn Artificial Intelligence online</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Enrollment Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl block mb-4">{course.icon}</span>
                    <h3 className="font-outfit text-xl font-bold mb-2">
                      {course.shortTitle}
                    </h3>
                    <p className="text-muted text-sm">
                      {course.duration} • {course.level} Level
                    </p>
                  </div>
                  <div className="space-y-3">
                    <CTAButton
                      variant="whatsapp"
                      size="lg"
                      href={WHATSAPP_LINK(`Hi! I want to enroll in the ${course.shortTitle}.`)}
                      className="w-full"
                    >
                      Enroll Now
                    </CTAButton>
                    <CTAButton
                      variant="outline"
                      size="md"
                      href={WHATSAPP_LINK(`Hi! I'd like to book a free demo class for the ${course.shortTitle}.`)}
                      className="w-full"
                    >
                      Book Free Demo
                    </CTAButton>
                  </div>
                  <p className="text-center text-sm text-muted mt-4">
                    Contact on WhatsApp: 03406187831
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="font-outfit font-semibold mb-4">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <span>🎥</span> Live Online Classes
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span>👨‍🏫</span> Expert AI Instructor
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span>🛠️</span> Hands-on Projects
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span>📱</span> WhatsApp Support
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span>🏆</span> Certificate Included
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span>🇵🇰</span> Available Across Pakistan
                    </li>
                  </ul>
                </div>
              </div>
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
            Have questions about the {course.shortTitle}? Find answers below.
          </p>
          <FAQAccordion items={FAQ_DATA.slice(0, 6)} />
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl font-bold text-center mb-4">
            Explore More Courses
          </h2>
          <p className="text-center text-muted mb-12">
            Discover other AI courses at Pakistan AI Online Academy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherCourses.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover block"
              >
                <span className="text-4xl block mb-4">{c.icon}</span>
                <h3 className="font-outfit font-semibold text-lg mb-2">
                  {c.shortTitle}
                </h3>
                <p className="text-muted text-sm mb-3 line-clamp-2">
                  {c.description}
                </p>
                <span className="text-primary text-sm font-medium">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
