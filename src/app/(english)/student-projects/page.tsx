import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { STUDENT_PROJECTS, WHATSAPP_LINK, DEMO_VIDEO_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "Student AI Projects — Real Projects Built by Our Students",
  description:
    "See real AI projects built by students at Pakistan AI Online Academy. From chatbots to image classifiers — our students learn by building practical, real-world Artificial Intelligence applications.",
  path: "/student-projects",
  keywords: [
    "AI Student Projects",
    "AI Projects Pakistan",
    "Student AI Projects",
    "Learn AI by Building",
    "AI Project Ideas",
    "Artificial Intelligence Projects",
  ],
});

export default function StudentProjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Student Projects", url: "/student-projects" },
  ]);

  const categories = [...new Set(STUDENT_PROJECTS.map((p) => p.category))];

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
              { label: "Student Projects", href: "/student-projects" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            Student AI Projects
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our students don&apos;t just learn theory — they build real AI projects.
            Explore the amazing work created by young AI enthusiasts at Pakistan AI Online Academy.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white cursor-pointer">
              All Projects
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STUDENT_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover"
              >
                {/* Project Visual */}
                <div className="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 flex items-center justify-center">
                  <div className="text-center flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md mb-2">
                      <Icon
                        name={
                          project.category === "Chatbot"
                            ? "chat"
                            : project.category === "Computer Vision"
                            ? "robot"
                            : project.category === "Education"
                            ? "book"
                            : project.category === "Data Science"
                            ? "brain"
                            : project.category === "Creative AI"
                            ? "palette"
                            : project.category === "Language"
                            ? "globe"
                            : "robot"
                        }
                        size={32}
                        color="primary"
                      />
                    </div>
                    <span className="text-sm text-muted font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted font-medium">
                        {project.studentName}, Age {project.studentAge}
                      </span>
                    </div>

                    <h3 className="font-outfit font-bold text-lg text-dark mb-2">
                      {project.title}
                    </h3>

                    <p className="text-muted text-xs mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4 bg-surface p-3.5 rounded-xl border border-gray-100/50">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">Course Taken:</span>
                      <Link href={`/courses/${project.courseSlug}`} className="text-xs font-semibold text-dark hover:text-primary underline mb-2.5 block">
                        {project.courseTaken}
                      </Link>

                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">What was learned:</span>
                      <p className="text-xs text-muted leading-relaxed mb-2.5">{project.whatLearned}</p>

                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">Technologies Used:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-white text-[10px] font-semibold text-dark-light rounded border border-gray-100 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-gray-100 pt-4 flex items-center justify-between">
                    <Link
                      href={`/courses/${project.courseSlug}`}
                      className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors"
                    >
                      View Related Course ➔
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Project */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            Want to Build Your Own AI Project?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Join Pakistan AI Online Academy and start building real AI projects
            from your very first week. Our project-based learning approach ensures
            you gain practical skills, not just theoretical knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary" size="lg" href={DEMO_VIDEO_URL} external>
              Watch Free Demo
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
