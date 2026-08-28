import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateCourseSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { COURSES, FAQ_DATA } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Courses in Pakistan | Pakistan AI Academy",
  description:
    "Explore our live online AI, Python, ChatGPT, and Generative AI courses designed for students and beginners in Pakistan.",
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
            AI Courses in Pakistan
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Pakistan AI Online Academy offers live online AI courses for students, beginners and young learners across Pakistan. Choose from our carefully designed programs covering everything from beginner fundamentals to advanced deep learning.
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

      {/* Which AI Course Is Right for You? */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Which AI Course Is Right for You?"
            subtitle="Find the perfect course depending on your experience level and goals."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">Ages 10+</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">AI Courses for Kids</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">Introduce children to computer logic, ChatGPT prompting rules, and safe AI habits using fun, interactive projects.</p>
              </div>
              <a href="/ai-course-for-kids-in-pakistan" className="text-primary text-xs font-bold hover:underline">Explore Kids AI ➔</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">Beginner Level</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">AI Courses for Beginners</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">Start from absolute zero. Learn how to work with artificial intelligence, write prompts, and utilize modern tools in your study or work.</p>
              </div>
              <a href="#beginner" className="text-primary text-xs font-bold hover:underline">View Beginner Courses ➔</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded-full uppercase tracking-wider">Ages 13+</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">AI Courses for Students</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">Build logic, coding, and problem-solving skills using Python and AI APIs to prepare for university or freelancing.</p>
              </div>
              <a href="#students" className="text-primary text-xs font-bold hover:underline">View Student Courses ➔</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full uppercase tracking-wider">Advanced</span>
                <h3 className="font-outfit font-bold text-lg text-dark mt-3 mb-2">Advanced AI Learning</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">Master machine learning, classification models, dataset processing, neural networks, and computer vision with Python.</p>
              </div>
              <a href="#advanced" className="text-primary text-xs font-bold hover:underline">Explore Deep Tech ➔</a>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences Sections */}
      <section className="py-20 bg-white" id="demographics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Beginner Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="beginner">
            <div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">Start from Zero</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">AI Courses for Beginners</h2>
              <p className="text-muted leading-relaxed mb-6">
                Our beginner-friendly courses are structured specifically for individuals with no prior coding or technical background. We guide you through simple, step-by-step visual models to understand how Artificial Intelligence works, demystifying neural networks and dataset processing.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Includes Beginner AI Course & ChatGPT Course</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">100% live instruction with step-by-step guidance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Learn ChatGPT, prompt engineering, and visual creation tools</span>
                </div>
              </div>
              <a href="#courses-list" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline">View Beginner Courses List ➔</a>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100">
              <h3 className="font-outfit font-bold text-xl mb-4">🌟 Core Skills Gained</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">Graduates of our beginner classes walk away with the practical ability to command AI tools for work or study, automate text generation, build custom summaries, and formulate clear prompts.</p>
              <div className="flex flex-wrap gap-2">
                {["Prompt Engineering", "ChatGPT", "Midjourney", "Gemini", "AI Literacy"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Students Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="students">
            <div className="lg:order-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full uppercase tracking-wider">Future-Ready Skills</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">AI Courses for Students</h2>
              <p className="text-muted leading-relaxed mb-6">
                Designed for high school and university students, our student-focused programs aim to teach analytical thinking, problem-solving, and basic development logic. By combining coding (using Python) with AI models, students build an impressive portfolio of functional applications that prepare them for higher education and freelancing.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Includes Python Programming & Python AI Development</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Build functional calculators, guessing games, and web apps</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Gain a solid foundation in software development and database structures</span>
                </div>
              </div>
              <a href="#courses-list" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline">View Student Courses List ➔</a>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 lg:order-1">
              <h3 className="font-outfit font-bold text-xl mb-4">🛠️ Practical Tools Used</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">Students write functional Python code, deploy interactive web applications, parse datasets using Pandas, and interact with external model APIs.</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "Streamlit", "JSON APIs", "Github"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Kids Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="kids">
            <div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">Ages 10+</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">AI Courses for Kids</h2>
              <p className="text-muted leading-relaxed mb-6">
                Our kids&apos; landing page offers a specialized roadmap for young children (Ages 10+). Skip the boring theory — we teach logic, pattern recognition, and smart assistant usage through visual game-based blocks and creative project builds.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Interactive, visual, and safe online classrooms</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Focus on computational thinking and digital safety</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Dedicated parent progress updates and portfolio sharing</span>
                </div>
              </div>
              <a href="/ai-course-for-kids-in-pakistan" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline">Visit Kids Landing Page ➔</a>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100">
              <h3 className="font-outfit font-bold text-xl mb-4">🧠 Safety &amp; Digital Hygiene</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">We teach young learners how to use generative AI tools responsibly for research and study, strictly highlighting safety boundaries and school ethics.</p>
              <div className="flex flex-wrap gap-2">
                {["Digital Ethics", "Creative Prompting", "Logic Block Coding", "Web Safety"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="advanced">
            <div className="lg:order-2">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase tracking-wider">Deep Tech</span>
              <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-4">Advanced AI Learning</h2>
              <p className="text-muted leading-relaxed mb-6">
                Ready for deep engineering? Our advanced path introduces students to linear algebraic models, regression analysis, feature classification, convolutional neural networks, computer vision, and natural language processing.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Includes Advanced AI Course &amp; Intermediate AI Course</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Write classification scripts and image processing programs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary text-lg mt-0.5 font-bold">✓</span>
                  <span className="text-dark-light text-sm font-semibold">Build neural network frameworks and train ML models</span>
                </div>
              </div>
              <a href="#courses-list" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline">View Advanced Courses List ➔</a>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 lg:order-1">
              <h3 className="font-outfit font-bold text-xl mb-4">🚀 Deep Tech Frameworks</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">Students write functional machine learning models, preprocess real-world databases, and deploy deep learning classifiers.</p>
              <div className="flex flex-wrap gap-2">
                {["Neural Networks", "Computer Vision", "NLP", "Machine Learning", "Model Evaluation"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-xs font-semibold text-dark rounded-xl border border-gray-100 shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What You Will Learn Skills Matrix */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What You Will Learn"
            subtitle="A comprehensive matrix of technologies, skills, and tools covered across our AI courses."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { title: "AI Fundamentals", desc: "Understanding machine learning, datasets, neural networks, and model structures." },
              { title: "Prompt Engineering", desc: "Formulating clear, structured inputs for large language models to yield high-quality outputs." },
              { title: "ChatGPT for Study", desc: "Using AI to generate study summaries, quizzes, explanations, and outline study programs." },
              { title: "Creative Generative AI", desc: "Generating digital art, custom visuals, graphics, and styling rules using Stable Diffusion." },
              { title: "Python Programming", desc: "Writing loops, conditional branches, dictionaries, list structures, and custom functions." },
              { title: "API Integrations", desc: "Connecting python files with external model APIs (Gemini/OpenAI) using key protocols." },
              { title: "Streamlit Web Apps", desc: "Building interactive, professional web interfaces and dashboards directly using Python." },
              { title: "Machine Learning Models", desc: "Preprocessing dataset files, regression algorithms, model evaluation, and training classifiers." }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-outfit font-bold text-dark mb-2 text-sm">{skill.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Online AI Courses in Pakistan? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
            Top-Tier Remote Learning
          </span>
          <h2 className="font-outfit text-3xl font-bold text-dark mt-4 mb-6">
            Why Choose Online AI Courses in Pakistan?
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Access world-class AI education from anywhere in Pakistan. Through our live online format, students interact directly with experienced professionals in real-time, receiving custom feedback and support via WhatsApp without any commute time or location restrictions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-surface rounded-2xl border border-gray-100">
              <span className="text-2xl">🎓</span>
              <h4 className="font-outfit font-bold text-dark text-sm mt-2 mb-1">Live Classes</h4>
              <p className="text-xs text-muted">Interact with instructors, share screens, and clear queries in real-time.</p>
            </div>
            <div className="p-5 bg-surface rounded-2xl border border-gray-100">
              <span className="text-2xl">🚀</span>
              <h4 className="font-outfit font-bold text-dark text-sm mt-2 mb-1">Portfolio Building</h4>
              <p className="text-xs text-muted">Build multiple functional projects that showcase your skills to universities or clients.</p>
            </div>
            <div className="p-5 bg-surface rounded-2xl border border-gray-100">
              <span className="text-2xl">📱</span>
              <h4 className="font-outfit font-bold text-dark text-sm mt-2 mb-1">WhatsApp Support</h4>
              <p className="text-xs text-muted">Clear doubts outside class hours through dedicated coordinator support groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-3xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-sm">
              Common questions and answers regarding our course fees, curriculum, and structure.
            </p>
          </div>
          <FAQAccordion items={FAQ_DATA} />
        </div>
      </section>

      {/* Existing Why Choose Our Courses section renamed */}
      <section className="py-20 bg-white">
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
