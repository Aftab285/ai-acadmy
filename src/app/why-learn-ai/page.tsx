import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { DEMO_VIDEO_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAButton from "@/components/ui/CTAButton";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "Why Learn Artificial Intelligence — The Future Starts with AI",
  description:
    "Discover why learning Artificial Intelligence is essential for students in Pakistan. Understand how AI will shape future careers, improve creativity, and why investing in AI education gives your child a competitive advantage.",
  path: "/why-learn-ai",
  keywords: [
    "Why Learn AI",
    "Why Learn Artificial Intelligence",
    "AI Education Importance",
    "Benefits of Learning AI",
    "AI for Future Jobs",
    "AI Skills for Students",
    "Future Skills Pakistan",
    "AI Education Pakistan",
  ],
});

const sections = [
  {
    id: "what-is-ai",
    icon: "🤖",
    title: "What is Artificial Intelligence?",
    content: `Artificial Intelligence (AI) is a revolutionary field of computer science that focuses on creating intelligent systems capable of performing tasks that typically require human intelligence. These tasks include learning from data, recognizing patterns, making decisions, understanding natural language, and even creating art and music.

AI is all around us — from the voice assistants on our phones (like Siri and Google Assistant) to the recommendation systems on YouTube and Netflix, from self-driving cars to medical diagnosis tools. When you ask ChatGPT a question or use Google Translate, you are interacting with AI.

At its core, AI works by processing vast amounts of data, learning patterns from that data, and using those patterns to make predictions or decisions. Machine Learning, a subset of AI, allows computers to learn and improve from experience without being explicitly programmed for every task.`,
  },
  {
    id: "why-ai-matters",
    icon: "🌍",
    title: "Why Artificial Intelligence Matters",
    content: `AI is not just another technology trend — it is fundamentally transforming how the world works. According to leading research firms, AI is expected to contribute over $15 trillion to the global economy by 2030. Every major industry — healthcare, education, finance, agriculture, entertainment — is being revolutionized by AI.

For Pakistan, AI represents an enormous opportunity. The country's young, tech-savvy population is perfectly positioned to become leaders in the global AI revolution. Companies worldwide are desperately seeking AI talent, and the demand far exceeds the supply. This creates incredible career opportunities for students who start learning AI early.

Understanding AI is becoming as fundamental as learning to read and write. Just as digital literacy became essential in the 2000s, AI literacy is becoming essential in the 2020s and beyond. Students who understand AI will have a significant advantage in virtually every career path they choose.`,
  },
  {
    id: "future-jobs",
    icon: "💼",
    title: "How AI Will Change Future Jobs",
    content: `The World Economic Forum estimates that AI will create 97 million new jobs by 2025 while transforming existing ones. The jobs of the future will require AI skills across every industry — not just technology. Doctors will use AI for diagnosis, lawyers will use AI for legal research, artists will use AI for creative expression, and teachers will use AI for personalized education.

Some of the highest-paying career paths of the future include AI Engineer, Machine Learning Specialist, Data Scientist, AI Product Manager, Prompt Engineer, AI Ethics Specialist, and Computer Vision Engineer. These roles offer competitive salaries ranging from $80,000 to $200,000+ globally.

For Pakistani students, mastering AI opens doors to both local opportunities and the global freelance market. Pakistan's freelance industry is already one of the largest in the world, and AI skills command premium rates. Students who learn AI today are investing in one of the most valuable skill sets of the future.`,
  },
  {
    id: "early-advantage",
    icon: "🚀",
    title: "Why Learning AI Early Gives Students an Advantage",
    content: `Starting AI education early gives students a compounding advantage that grows over time. Just like learning a language is easier for younger learners, grasping AI concepts and computational thinking comes more naturally to young minds.

Students who start learning AI in school have years to build expertise before entering the job market. By the time they reach university or start their careers, they will have a deep understanding of AI fundamentals, practical project experience, and a portfolio that sets them apart from peers.

Early AI education also develops critical thinking, logical reasoning, and problem-solving skills that benefit students across all subjects. Students who learn AI tend to perform better in mathematics, science, and even creative subjects because AI education trains the mind to think systematically and creatively.

Moreover, early exposure to AI helps students make informed career choices. Instead of following traditional paths blindly, they can see the opportunities that AI creates and plan their education accordingly.`,
  },
  {
    id: "creativity",
    icon: "🎨",
    title: "How AI Improves Creativity and Problem Solving",
    content: `One of the biggest misconceptions about AI is that it is only about mathematics and coding. In reality, AI is one of the most creative fields in technology. Generative AI tools can create art, write poetry, compose music, design products, and even help with scientific research.

Learning AI teaches students to approach problems from multiple angles. When building an AI project, students must define the problem, collect and analyze data, design solutions, test their approaches, and iterate based on results. This process develops a growth mindset and resilience — skills that are valuable in every aspect of life.

AI also empowers students to solve real-world problems that matter to them. Students at Pakistan AI Online Academy have built projects ranging from language translators to environmental monitoring tools. This combination of technical skills and creative problem-solving is exactly what the future demands.

The intersection of AI and creativity — sometimes called Creative AI — is one of the fastest-growing fields. From AI-generated art to AI-assisted product design, creative AI professionals are in high demand worldwide.`,
  },
  {
    id: "parent-investment",
    icon: "👨‍👩‍👧‍👦",
    title: "Why Parents Should Invest in AI Education",
    content: `As a parent, one of the most important decisions you can make is preparing your child for the future. Traditional education alone is no longer sufficient to guarantee success in a rapidly changing world. Supplementing school education with AI skills gives your child tools that will be relevant for decades.

AI education is not just about building a career in technology. It is about developing a mindset that embraces innovation, values evidence-based thinking, and approaches challenges with confidence. These are life skills that benefit children regardless of their eventual career path.

Investing in AI education now is significantly more affordable than waiting. As AI becomes mainstream, the cost of quality education will increase, and the competition will intensify. Early learners will always have an advantage over those who start later.

At Pakistan AI Online Academy, we make AI education accessible and affordable for Pakistani families. Our live online classes mean your child can learn from the comfort of home, eliminating transportation costs and safety concerns. Our expert instructors ensure that every student receives personalized attention and support throughout their learning journey.

The return on investment in AI education is substantial — not just in terms of future earning potential, but in terms of the confidence, skills, and opportunities it creates for your child.`,
  },
];

export default function WhyLearnAIPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Why Learn AI", url: "/why-learn-ai" },
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
              { label: "Why Learn AI", href: "/why-learn-ai" },
            ]}
          />
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            Why Learn Artificial Intelligence?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Artificial Intelligence is reshaping every industry worldwide. Discover why learning AI
            is the most important investment you can make in your future — or your child&apos;s future.
          </p>
          <CTAButton variant="primary" size="lg" href={DEMO_VIDEO_URL} external>
            Watch Free Demo
          </CTAButton>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "section-gradient-light"}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">{section.icon}</span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold">
                {section.title}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              {section.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-dark-light leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Key Takeaways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-12">
            Key Takeaways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AI is transforming every industry and creating millions of new jobs worldwide.",
              "Starting AI education early gives students a significant competitive advantage.",
              "AI skills are becoming as essential as reading, writing, and mathematics.",
              "Learning AI develops critical thinking, creativity, and problem-solving abilities.",
              "Pakistan's young population is perfectly positioned for the global AI revolution.",
              "Investing in AI education today offers substantial returns for the future.",
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-surface rounded-2xl"
              >
                <span className="w-8 h-8 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-dark-light leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
