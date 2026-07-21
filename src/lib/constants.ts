// Site-wide constants for Pakistan AI Online Academy

export const SITE_NAME = "Pakistan AI Online Academy";
export const SITE_DOMAIN = "https://pakistanaionlineacademy.com";
export const SITE_DESCRIPTION =
  "Pakistan's leading online AI academy offering live classes in Artificial Intelligence, Machine Learning, ChatGPT, and Generative AI for students and beginners across Pakistan.";
export const SITE_TAGLINE = "Leading the AI Revolution";

// WhatsApp
export const WHATSAPP_NUMBER = "03406187831";
export const WHATSAPP_INTERNATIONAL = "+923406187831";
export const WHATSAPP_LINK = (message?: string) =>
  `https://wa.me/923406187831${message ? `?text=${encodeURIComponent(message)}` : ""}`;
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'm interested in learning about AI courses at Pakistan AI Online Academy. Can you share more details?";
export const WHATSAPP_DEMO_MESSAGE =
  "Hi! I'd like to book a free demo class at Pakistan AI Online Academy.";
export const DEMO_VIDEO_URL =
  "https://youtu.be/F-e7Kh6DHhY?si=1QM45EPFl87-88BN";

// Navigation
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Why Learn AI", href: "/why-learn-ai" },
  { label: "Student Projects", href: "/student-projects" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Trust Badges
export const TRUST_BADGES = [
  { icon: "globe", label: "100% Online" },
  { icon: "video", label: "Live Classes" },
  { icon: "teacher", label: "Expert AI Instructor" },
  { icon: "tools", label: "Project Based Learning" },
  { icon: "seed", label: "Beginner Friendly" },
  { icon: "certificate", label: "Certificate of Completion" },
  { icon: "flag", label: "Learn From Anywhere in Pakistan" },
] as const;

// Courses
export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  ageGroup: string;
  topics: string[];
  features: string[];
  icon: string;
  color: string;
}

export const COURSES: Course[] = [
  {
    slug: "beginner-ai-course",
    title: "Beginner AI Course — Introduction to Artificial Intelligence",
    shortTitle: "Beginner AI Course",
    description:
      "Start your AI journey from scratch. Learn the fundamentals of Artificial Intelligence, understand how AI works, and build your first AI projects with hands-on guidance from expert instructors.",
    level: "Beginner",
    duration: "8 Weeks",
    ageGroup: "Ages 10+",
    topics: [
      "What is Artificial Intelligence",
      "History and Evolution of AI",
      "Types of AI — Narrow, General, Super",
      "AI in Daily Life",
      "Introduction to Machine Learning Concepts",
      "Data and AI — How Machines Learn",
      "Hands-on AI Experiments",
      "Building Your First AI Project",
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Assignments",
      "Hands-on Projects",
      "Real World Practice",
      "Certificate of Completion",
      "Instructor Support via WhatsApp",
    ],
    icon: "robot",
    color: "from-blue-500 to-cyan-400",
  },
  {
    slug: "intermediate-ai-course",
    title: "Intermediate AI Course — Machine Learning & Data Science",
    shortTitle: "Intermediate AI Course",
    description:
      "Take your AI skills to the next level. Dive into Machine Learning algorithms, data analysis, and model building with practical projects that prepare you for real-world AI applications.",
    level: "Intermediate",
    duration: "10 Weeks",
    ageGroup: "Ages 13+",
    topics: [
      "Machine Learning Fundamentals",
      "Supervised vs Unsupervised Learning",
      "Classification and Regression",
      "Data Preprocessing & Cleaning",
      "Feature Engineering",
      "Model Training & Evaluation",
      "Neural Networks Introduction",
      "Practical ML Projects",
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Assignments",
      "Hands-on Projects",
      "Real World Practice",
      "Certificate of Completion",
      "Instructor Support via WhatsApp",
    ],
    icon: "brain",
    color: "from-purple-500 to-pink-400",
  },
  {
    slug: "advanced-ai-course",
    title: "Advanced AI Course — Deep Learning & Neural Networks",
    shortTitle: "Advanced AI Course",
    description:
      "Master advanced AI concepts including deep learning, computer vision, and natural language processing. Build sophisticated AI applications that solve real-world problems.",
    level: "Advanced",
    duration: "12 Weeks",
    ageGroup: "Ages 15+",
    topics: [
      "Deep Learning Architectures",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN)",
      "Transfer Learning",
      "Computer Vision Projects",
      "Natural Language Processing",
      "Model Deployment Basics",
      "Capstone AI Project",
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Assignments",
      "Hands-on Projects",
      "Real World Practice",
      "Certificate of Completion",
      "Instructor Support via WhatsApp",
    ],
    icon: "lightning",
    color: "from-orange-500 to-red-400",
  },
  {
    slug: "chatgpt-course",
    title: "ChatGPT Course — Master Conversational AI",
    shortTitle: "ChatGPT Course",
    description:
      "Learn to use ChatGPT like a pro. Master prompt engineering, understand how large language models work, and discover how to leverage ChatGPT for studies, creativity, and productivity.",
    level: "Beginner",
    duration: "6 Weeks",
    ageGroup: "Ages 10+",
    topics: [
      "Introduction to ChatGPT & LLMs",
      "How ChatGPT Works",
      "Effective Prompt Writing",
      "ChatGPT for Study & Research",
      "ChatGPT for Creative Writing",
      "ChatGPT for Coding Assistance",
      "Ethics of AI & ChatGPT",
      "Building ChatGPT-Powered Projects",
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Assignments",
      "Hands-on Projects",
      "Real World Practice",
      "Certificate of Completion",
      "Instructor Support via WhatsApp",
    ],
    icon: "chat",
    color: "from-green-500 to-emerald-400",
  },
  {
    slug: "generative-ai-course",
    title: "Generative AI Course — Create with Artificial Intelligence",
    shortTitle: "Generative AI Course",
    description:
      "Explore the world of Generative AI. Learn to create images, text, music, and videos using AI tools. Understand diffusion models, GANs, and the latest AI generation technologies.",
    level: "Intermediate",
    duration: "8 Weeks",
    ageGroup: "Ages 12+",
    topics: [
      "What is Generative AI",
      "Text Generation with AI",
      "Image Generation — DALL-E, Midjourney, Stable Diffusion",
      "Video and Audio Generation",
      "Understanding Diffusion Models",
      "GANs — Generative Adversarial Networks",
      "AI Art and Creative Applications",
      "Building Generative AI Projects",
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Assignments",
      "Hands-on Projects",
      "Real World Practice",
      "Certificate of Completion",
      "Instructor Support via WhatsApp",
    ],
    icon: "palette",
    color: "from-violet-500 to-fuchsia-400",
  },
  {
    slug: "prompt-engineering-course",
    title: "Prompt Engineering Course — Master AI Communication",
    shortTitle: "Prompt Engineering Course",
    description:
      "Learn the art and science of prompt engineering. Master techniques to get the best results from AI models like ChatGPT, Claude, and Gemini for any task.",
    level: "Beginner",
    duration: "6 Weeks",
    ageGroup: "Ages 12+",
    topics: [
      "Fundamentals of Prompt Engineering",
      "Prompt Patterns and Templates",
      "Zero-Shot vs Few-Shot Prompting",
      "Chain of Thought Prompting",
      "Role-Based Prompting",
      "Prompt Engineering for Different AI Tools",
      "Advanced Prompting Techniques",
      "Real-World Prompt Engineering Projects",
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Assignments",
      "Hands-on Projects",
      "Real World Practice",
      "Certificate of Completion",
      "Instructor Support via WhatsApp",
    ],
    icon: "terminal",
    color: "from-teal-500 to-cyan-400",
  },
  {
    slug: "ai-tools-course",
    title: "AI Tools Course — Essential AI Tools for Students",
    shortTitle: "AI Tools Course",
    description:
      "Discover and master the most powerful AI tools available today. From ChatGPT to image generators, coding assistants to research tools — learn to use AI tools that boost productivity.",
    level: "Beginner",
    duration: "6 Weeks",
    ageGroup: "Ages 10+",
    topics: [
      "Overview of Modern AI Tools",
      "ChatGPT, Claude & Gemini — Comparison",
      "AI Image Generation Tools",
      "AI for Coding — GitHub Copilot & More",
      "AI for Research & Study",
      "AI for Content Creation",
      "AI Productivity Tools",
      "Hands-on AI Tool Projects",
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Assignments",
      "Hands-on Projects",
      "Real World Practice",
      "Certificate of Completion",
      "Instructor Support via WhatsApp",
    ],
    icon: "tools",
    color: "from-amber-500 to-yellow-400",
  },
];

// FAQ Data
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is Artificial Intelligence?",
    answer:
      "Artificial Intelligence (AI) is a branch of computer science that focuses on building smart machines capable of performing tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, understanding language, and recognizing patterns. At Pakistan AI Online Academy, we teach students to understand and build AI systems through practical, hands-on learning.",
  },
  {
    question: "Who can join this course?",
    answer:
      "Our courses are designed for students aged 10 and above, school students, college students, and complete beginners. No prior coding or technical experience is required. Whether you are a parent looking for future-ready skills for your child or a student wanting to learn AI, our courses are perfect for you.",
  },
  {
    question: "Can beginners learn AI?",
    answer:
      "Absolutely! Our Beginner AI Course is specifically designed for students with zero technical background. We start from the very basics and gradually build up to more advanced concepts. Our expert instructor ensures every student understands each concept before moving forward.",
  },
  {
    question: "Can school students learn AI?",
    answer:
      "Yes! We have students from age 10 and above learning AI successfully. Our curriculum is designed to be age-appropriate and engaging. School students can learn AI concepts, build projects, and gain valuable skills that will prepare them for the future job market.",
  },
  {
    question: "Are classes live?",
    answer:
      "Yes, all our classes are 100% live and interactive. Unlike pre-recorded courses, our live classes allow students to ask questions in real-time, participate in discussions, and get immediate feedback from our expert instructor. This ensures better understanding and engagement.",
  },
  {
    question: "Are classes online?",
    answer:
      "Yes, all classes are conducted 100% online. You can learn from the comfort of your home, from anywhere in Pakistan. All you need is a computer or laptop with an internet connection. No need to travel or commute — quality AI education comes directly to you.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Yes! Upon successful completion of any course, you receive a Certificate of Completion from Pakistan AI Online Academy. This certificate validates your AI skills and can be added to your academic portfolio or resume.",
  },
  {
    question: "How long is the course?",
    answer:
      "Course duration varies by level. Our Beginner AI Course is 8 weeks, ChatGPT and Prompt Engineering courses are 6 weeks, Intermediate courses are 10 weeks, and the Advanced AI Course is 12 weeks. Each course includes live classes, assignments, and hands-on projects.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No coding experience is required for our beginner-level courses. We teach everything from scratch. For intermediate and advanced courses, basic computer literacy is helpful, but our instructor guides you through every step of the learning process.",
  },
  {
    question: "How can I enroll?",
    answer:
      "Enrolling is easy! Simply contact us on WhatsApp at 03406187831. Our team will guide you through the enrollment process, help you choose the right course, and schedule your free demo class. We are here to help you start your AI learning journey.",
  },
  {
    question: "How do I contact you?",
    answer:
      "You can contact us directly on WhatsApp at 03406187831. WhatsApp is our primary communication channel for inquiries, enrollment, and student support. Tap the WhatsApp button on our website to start a conversation with us instantly.",
  },
];

// Student Journey Steps
export const STUDENT_JOURNEY = [
  {
    step: 1,
    title: "Contact on WhatsApp",
    description:
      "Reach out to us on WhatsApp to express your interest in learning AI.",
    icon: "support",
  },
  {
    step: 2,
    title: "Free Consultation",
    description:
      "Get a free consultation to find the perfect course for your goals and level.",
    icon: "chat",
  },
  {
    step: 3,
    title: "Enroll",
    description:
      "Choose your course and complete the simple enrollment process.",
    icon: "check",
  },
  {
    step: 4,
    title: "Attend Live Classes",
    description:
      "Join interactive live online classes with our expert AI instructor.",
    icon: "video",
  },
  {
    step: 5,
    title: "Build AI Projects",
    description:
      "Apply your learning by building real-world AI projects with guidance.",
    icon: "tools",
  },
  {
    step: 6,
    title: "Receive Certificate",
    description:
      "Complete your course and earn your Certificate of Completion.",
    icon: "certificate",
  },
] as const;

// Testimonials
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed's Father",
    role: "Parent of a 12-year-old student",
    location: "Lahore",
    quote:
      "My son Ahmed was always curious about technology. After joining Pakistan AI Online Academy, he built his first AI project in just 4 weeks! The live classes are incredibly engaging and the instructor makes complex concepts easy to understand.",
    rating: 5,
    avatar: "AH",
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "College Student, Age 17",
    location: "Karachi",
    quote:
      "I had zero coding experience when I started the Beginner AI Course. Now I can build AI models and use ChatGPT like a professional. This academy changed my perspective about my future career. Highly recommended!",
    rating: 5,
    avatar: "FZ",
  },
  {
    id: 3,
    name: "Aisha's Mother",
    role: "Parent of a 14-year-old student",
    location: "Islamabad",
    quote:
      "As a parent, I wanted my daughter to learn future skills. Pakistan AI Online Academy was the perfect choice. The online format is convenient and the quality of education is outstanding. Aisha now teaches her friends about AI!",
    rating: 5,
    avatar: "AM",
  },
  {
    id: 4,
    name: "Muhammad Ali",
    role: "School Student, Age 15",
    location: "Rawalpindi",
    quote:
      "The ChatGPT course was amazing! I learned prompt engineering and now I use AI tools for my school projects. My teachers are impressed with the quality of my work. Thank you Pakistan AI Online Academy!",
    rating: 5,
    avatar: "MA",
  },
  {
    id: 5,
    name: "Hassan's Parents",
    role: "Parents of a 10-year-old student",
    location: "Faisalabad",
    quote:
      "We were looking for an online course that would keep our young son engaged. The academy's approach to teaching AI through fun projects and live interaction is brilliant. Hassan looks forward to every class!",
    rating: 5,
    avatar: "HP",
  },
  {
    id: 6,
    name: "Sana Malik",
    role: "University Student, Age 19",
    location: "Peshawar",
    quote:
      "The Generative AI course opened my eyes to possibilities I never imagined. Creating AI art, generating content, and understanding how these models work — it is all incredibly fascinating. Best investment in my education!",
    rating: 5,
    avatar: "SM",
  },
];

// Why Choose Us USPs
export const WHY_CHOOSE_US = [
  {
    icon: "globe",
    title: "100% Online Learning",
    description:
      "Learn from anywhere in Pakistan. All you need is a computer and internet connection.",
  },
  {
    icon: "video",
    title: "Live Interactive Classes",
    description:
      "Real-time classes where you can ask questions and interact with the instructor directly.",
  },
  {
    icon: "teacher",
    title: "Expert Instructor",
    description:
      "Learn from an experienced AI professional who makes complex concepts simple and practical.",
  },
  {
    icon: "user",
    title: "Small Batch Learning",
    description:
      "Small class sizes ensure personalized attention and better learning outcomes for every student.",
  },
  {
    icon: "tools",
    title: "Hands-on Projects",
    description:
      "Build real AI projects throughout the course. Learn by doing, not just watching.",
  },
  {
    icon: "book",
    title: "Modern Curriculum",
    description:
      "Up-to-date curriculum covering the latest AI tools, techniques, and technologies.",
  },
  {
    icon: "seed",
    title: "Beginner Friendly",
    description:
      "No prior coding experience required. We start from the basics and build up gradually.",
  },
  {
    icon: "target",
    title: "Practical Learning",
    description:
      "Focus on practical skills that students can apply immediately in real-world scenarios.",
  },
  {
    icon: "wallet",
    title: "Affordable Fees",
    description:
      "Quality AI education at accessible prices. Investment in your future that won't break the bank.",
  },
  {
    icon: "certificate",
    title: "Certificate of Completion",
    description:
      "Receive a recognized certificate upon completing your course to showcase your AI skills.",
  },
  {
    icon: "laptop",
    title: "Learn from Home",
    description:
      "No commuting, no travel. Get premium AI education right from your home — safe and convenient.",
  },
  {
    icon: "support",
    title: "WhatsApp Student Support",
    description:
      "Get help and support directly through WhatsApp. We are always just a message away.",
  },
] as const;

// Stats
export const STATS = [
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "AI Projects Built" },
  { value: "7", label: "Specialized Courses" },
  { value: "98%", label: "Satisfaction Rate" },
] as const;

// Blog Categories
export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    description:
      "Learn about Artificial Intelligence concepts, applications, and latest developments in AI technology.",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    description:
      "Guides, tips, and tutorials about ChatGPT and large language models for students and beginners.",
  },
  {
    slug: "ai-for-kids",
    name: "AI for Kids",
    description:
      "Age-appropriate guides and resources for teaching Artificial Intelligence to children and young students.",
  },
  {
    slug: "ai-careers",
    name: "AI Careers",
    description:
      "Explore career opportunities in Artificial Intelligence, job market trends, and how to prepare for AI careers.",
  },
  {
    slug: "ai-news",
    name: "AI News",
    description:
      "Latest news and developments in the world of Artificial Intelligence and technology.",
  },
  {
    slug: "technology",
    name: "Technology",
    description:
      "Technology trends, tools, and innovations that are shaping the future of education and work.",
  },
  {
    slug: "student-guides",
    name: "Student Guides",
    description:
      "Practical guides and resources for students learning AI, coding, and technology skills.",
  },
  {
    slug: "parent-guides",
    name: "Parent Guides",
    description:
      "Guides for parents on how to support their children in learning AI and preparing for the future.",
  },
  {
    slug: "learning-resources",
    name: "Learning Resources",
    description:
      "Curated learning resources, tools, and materials for AI education and skill development.",
  },
];

// Student Projects
export interface StudentProject {
  id: number;
  title: string;
  description: string;
  skills: string[];
  category: string;
  studentName: string;
  studentAge: number;
}

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 1,
    title: "AI Chatbot for School Queries",
    description:
      "A smart chatbot that answers common school-related questions using natural language processing techniques learned in the Beginner AI Course.",
    skills: ["NLP", "Python", "ChatGPT API"],
    category: "Chatbot",
    studentName: "Ahmed K.",
    studentAge: 14,
  },
  {
    id: 2,
    title: "Image Classification App",
    description:
      "An AI-powered application that classifies images of animals into different categories using machine learning and computer vision.",
    skills: ["Machine Learning", "Computer Vision", "Python"],
    category: "Computer Vision",
    studentName: "Fatima Z.",
    studentAge: 16,
  },
  {
    id: 3,
    title: "AI-Powered Study Assistant",
    description:
      "A personalized study assistant that generates summaries, quizzes, and study plans using generative AI technology.",
    skills: ["Generative AI", "Prompt Engineering", "API Integration"],
    category: "Education",
    studentName: "Hassan M.",
    studentAge: 15,
  },
  {
    id: 4,
    title: "Sentiment Analysis Dashboard",
    description:
      "A web dashboard that analyzes the sentiment of product reviews and social media posts using machine learning models.",
    skills: ["NLP", "Data Analysis", "Machine Learning"],
    category: "Data Science",
    studentName: "Aisha R.",
    studentAge: 17,
  },
  {
    id: 5,
    title: "AI Art Generator",
    description:
      "A creative project using generative AI to create unique digital artworks based on text prompts and style preferences.",
    skills: ["Generative AI", "Stable Diffusion", "Creative AI"],
    category: "Creative AI",
    studentName: "Ali S.",
    studentAge: 13,
  },
  {
    id: 6,
    title: "Weather Prediction Model",
    description:
      "A machine learning model that predicts weather patterns for Pakistani cities using historical data and regression algorithms.",
    skills: ["Machine Learning", "Data Science", "Python"],
    category: "Data Science",
    studentName: "Sana M.",
    studentAge: 18,
  },
  {
    id: 7,
    title: "Urdu Text Translator",
    description:
      "An AI application that translates text between Urdu and English using natural language processing and translation APIs.",
    skills: ["NLP", "API Integration", "Translation"],
    category: "Language",
    studentName: "Omar H.",
    studentAge: 12,
  },
  {
    id: 8,
    title: "Smart Expense Tracker",
    description:
      "An AI-enhanced expense tracker that categorizes spending and provides intelligent savings recommendations.",
    skills: ["Machine Learning", "Data Analysis", "Python"],
    category: "Finance",
    studentName: "Zainab A.",
    studentAge: 16,
  },
];
