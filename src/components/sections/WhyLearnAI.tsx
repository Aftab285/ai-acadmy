import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: '🤖',
    title: 'What is Artificial Intelligence?',
    paragraph:
      'Artificial Intelligence is the science of building smart machines that can think, learn, and solve problems like humans. From voice assistants to self-driving cars, AI is transforming every industry and reshaping how we live, work, and communicate.',
  },
  {
    icon: '🌍',
    title: 'Why AI Matters',
    paragraph:
      'AI is no longer a futuristic concept — it is here today, powering search engines, social media feeds, healthcare diagnostics, and financial systems. Understanding AI gives students a competitive edge in an increasingly technology-driven world.',
  },
  {
    icon: '💼',
    title: 'Future Jobs & Careers',
    paragraph:
      'According to the World Economic Forum, AI will create 97 million new jobs by 2025. Learning AI now prepares students for careers in data science, machine learning engineering, AI research, robotics, and many more high-demand fields.',
  },
  {
    icon: '🚀',
    title: 'The Early Advantage',
    paragraph:
      'Students who start learning AI early develop stronger analytical thinking, problem-solving abilities, and computational skills. The earlier you begin, the more time you have to build deep expertise and stand out in academics and careers.',
  },
  {
    icon: '🎨',
    title: 'Creativity & Problem Solving',
    paragraph:
      'AI is not just about coding — it is about creative thinking and solving real-world problems. Students learn to use AI tools for generating art, writing stories, building apps, and creating solutions that make a positive impact on society.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'A Smart Investment for Parents',
    paragraph:
      'Investing in your child\'s AI education is investing in their future. AI skills are becoming as essential as reading and mathematics. Give your child the tools they need to succeed in the 21st century digital economy.',
  },
];

export default function WhyLearnAI() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Learn Artificial Intelligence?"
          subtitle="AI is the most transformative technology of our generation. Here's why every student should start learning AI today."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={index}
              className="card-hover group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-3xl group-hover:bg-primary/10 transition-colors">
                <span aria-hidden="true">{reason.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-outfit text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>

              {/* Paragraph */}
              <p className="text-sm leading-relaxed text-muted">
                {reason.paragraph}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
