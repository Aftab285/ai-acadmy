import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { DEMO_VIDEO_URL, WHATSAPP_LINK_1, WHATSAPP_LINK_2, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Course for Kids in Pakistan | Online AI Classes for Children",
  description:
    "Discover the best live online AI course for kids and school students in Pakistan. Designed for young learners (Ages 10+). Learn ChatGPT, prompt engineering, computational thinking, and AI tools through interactive projects.",
  path: "/ai-course-for-kids-in-pakistan",
  keywords: [
    "AI Course for Kids in Pakistan",
    "Online AI courses for kids in Pakistan",
    "AI classes for kids in Pakistan",
    "AI course for children",
    "AI course for students",
    "AI education for kids Pakistan",
    "Kids AI training Pakistan",
  ],
});

const KIDS_FAQS = [
  {
    question: "What is the recommended age group for the Kids AI Course?",
    answer:
      "Our Kids AI Course is specifically designed for students aged 10 and above. The curriculum is tailored to be highly visual, engaging, and beginner-friendly, requiring no prior technical background.",
  },
  {
    question: "Do children need prior coding experience to join?",
    answer:
      "No prior coding or programming experience is required! We start from absolute basics, teaching kids computational thinking and how to interact with AI tools using natural language before introducing Python basics gradually.",
  },
  {
    question: "How are classes conducted and are they safe?",
    answer:
      "Classes are conducted 100% online in real-time through secure video rooms. Our batches are small (typically under 15 students) to ensure a safe, supportive, and highly interactive environment. All sessions are monitored, and parents are welcome to observe.",
  },
  {
    question: "Can parents monitor their child's progress?",
    answer:
      "Yes! We share weekly progress updates with parents. Additionally, students build a portfolio of visible projects (such as chatbots, art models, and translation tools) that they can demonstrate to parents, family, and teachers.",
  },
  {
    question: "What equipment does my child need?",
    answer:
      "Your child only needs a laptop or desktop computer with a functional webcam, microphone, stable internet connection, and a web browser. No expensive software purchases are required.",
  },
];

export default function KidsAIPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "AI for Kids", url: "/ai-course-for-kids-in-pakistan" },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(KIDS_FAQS);
  const breadcrumbItems = breadcrumbs.map((b) => ({ label: b.name, href: b.url }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-white/5 animate-float" />
          <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-secondary/15 animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            AI Course for Kids in Pakistan
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Empower your child with future-ready skills. Our specialized, live online classes teach school students (Ages 10+) ChatGPT, prompt engineering, creative AI, and logic building through fun, hands-on projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton variant="outline" href={DEMO_VIDEO_URL} size="lg" external>
              Watch Free Demo
            </CTAButton>
            <CTAButton variant="whatsapp" href={WHATSAPP_LINK_1(WHATSAPP_DEFAULT_MESSAGE)} size="lg">
              Book a Free Class
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why AI for Kids */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
              Equip the Next Generation
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-dark mt-4 mb-4">
              Why Introduce Your Child to AI Early?
            </h2>
            <p className="text-muted leading-relaxed">
              Artificial Intelligence is transforming every sector. Starting early helps children build a natural fluency, turning them from passive consumers of technology into active creators and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "brain",
                title: "Logical Reasoning & Logic",
                desc: "Interacting with AI and designing prompts trains the brain to think systematically, improving performance in math and science.",
              },
              {
                icon: "palette",
                title: "Boost Creative Expression",
                desc: "Using generative AI models to build digital art and interactive stories opens up new paths for creative design.",
              },
              {
                icon: "certificate",
                title: "Future Career Advantage",
                desc: "AI literacy is becoming as fundamental as computer literacy. Starting in school builds a portfolio that sets students apart.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={24} color="primary" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-dark mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Kids Learn */}
      <section className="py-20 section-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full uppercase tracking-wider">
                Fun & Practical Syllabus
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-dark mt-4 mb-6">
                What Does Your Child Learn in Our AI Course?
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                We believe in learning by doing. Our curriculum skips dry lectures and focuses on building real tools. Your child will work with industry-standard technologies in an age-appropriate format:
              </p>
              <ul className="space-y-4">
                {[
                  "Understanding AI: Simple explanation of neural networks & machine learning",
                  "ChatGPT & Large Language Models: How to structure prompts for research & writing",
                  "Creative Generative AI: Designing custom visuals and graphics using style rules",
                  "Basic Logic & Coding: Introduction to Python variables, inputs, and functions",
                  "Building Chatbots: Creating helpful conversational assistants using APIs",
                  "Responsible AI Use: Teaching digital safety, ethics, and avoiding academic copying",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-secondary text-lg font-bold mt-0.5">✓</span>
                    <span className="text-dark-light text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative">
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                100% Secure
              </div>
              <h3 className="font-outfit text-xl font-bold text-dark mb-4">🏠 Parent Peace of Mind</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Safety and digital hygiene are core values at Pakistan AI Online Academy. We teach kids that AI is a helper to extend their thinking, not a shortcut to replace study efforts.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-dark text-sm">Monitored Classrooms</h4>
                    <p className="text-xs text-muted">All live sessions are recorded and hosted in secure rooms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-dark text-sm">Focus on Digital Literacy</h4>
                    <p className="text-xs text-muted">We enforce code etiquette and proper online behavior guidelines.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-dark text-sm">Transparent Progress</h4>
                    <p className="text-xs text-muted">Parents receive progress notifications and project demonstrations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-3xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted">
              Have questions about how we teach AI to children? Here are common answers.
            </p>
          </div>
          <FAQAccordion items={KIDS_FAQS} />
        </div>
      </section>

      {/* Registration Call to Action */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            Help Your Child Step Into The Future
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a complimentary demo slot and see how our instructors interact with students. Direct queries are answered instantly by our coordinators on WhatsApp:
          </p>

          {/* WhatsApp Support Buttons */}
          <div className="mb-10 space-y-4 max-w-md mx-auto">
            <div className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-[10px] text-white/50 font-bold tracking-wider uppercase">WhatsApp Support 1</p>
                <p className="font-outfit text-xl font-bold text-[#25D366] mt-0.5">0340 6187831</p>
              </div>
              <CTAButton variant="whatsapp" size="sm" href={WHATSAPP_LINK_1("Hi! I'm interested in booking a kids AI demo class.")}>
                Chat Support 1
              </CTAButton>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-[10px] text-white/50 font-bold tracking-wider uppercase">WhatsApp Support 2</p>
                <p className="font-outfit text-xl font-bold text-[#25D366] mt-0.5">0349 6354307</p>
              </div>
              <CTAButton variant="whatsapp" size="sm" href={WHATSAPP_LINK_2("Hi! I'm interested in booking a kids AI demo class.")}>
                Chat Support 2
              </CTAButton>
            </div>
          </div>

          <div className="flex justify-center">
            <CTAButton variant="primary" size="lg" href={DEMO_VIDEO_URL} external>
              Watch Free Demo Video
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
