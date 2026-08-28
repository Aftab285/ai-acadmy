// Site-wide constants for Pakistan AI Online Academy

export const SITE_NAME = "Pakistan AI Online Academy";
export const SITE_DOMAIN = "https://www.pakistanaionlineacademy.com";
export const SITE_DESCRIPTION =
  "Pakistan's leading online AI academy offering live classes in Artificial Intelligence, Machine Learning, ChatGPT, and Generative AI for students and beginners across Pakistan.";
export const SITE_TAGLINE = "Leading the AI Revolution";

// WhatsApp
export const WHATSAPP_NUMBER_1 = "03406187831";
export const WHATSAPP_INTERNATIONAL_1 = "+923406187831";
export const WHATSAPP_LINK_1 = (message?: string) =>
  `https://wa.me/923406187831${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const WHATSAPP_NUMBER_2 = "03496354307";
export const WHATSAPP_INTERNATIONAL_2 = "+923496354307";
export const WHATSAPP_LINK_2 = (message?: string) =>
  `https://wa.me/923496354307${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const WHATSAPP_NUMBER = "03406187831 / 03496354307";
export const WHATSAPP_INTERNATIONAL = "+923406187831 / +923496354307";
export const WHATSAPP_LINK = WHATSAPP_LINK_1;
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
  image?: string;
  syllabus?: {
    partTitle: string;
    classes: {
      number: string | number;
      title: string;
      bullets: string[];
    }[];
  }[];
  learningOutcomes?: string[];
  learningPath?: string[];
  projects?: string[];
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
  {
    slug: "python-programming-course",
    title: "Python Programming Course — Learn Python from Scratch",
    shortTitle: "Python Programming Course",
    description:
      "Our Python Programming Course is designed for complete beginners, students, professionals, freelancers, and anyone who wants to learn programming from the ground up. The course starts with the basics and gradually moves to more advanced concepts through live classes, practical exercises, coding challenges, and real-world projects. No prior programming experience is required.",
    level: "Beginner",
    duration: "2 Months",
    ageGroup: "Ages 10+",
    topics: [
      "Python Fundamentals",
      "Variables & Data Types",
      "Input & Output",
      "Operators",
      "Conditional Statements (if/else)",
      "Loops",
      "Functions",
      "Lists, Tuples & Dictionaries",
      "File Handling",
      "Object-Oriented Programming (OOP)",
      "Error Handling",
      "Modules & Packages",
      "Real-World Projects",
      "Problem Solving & Programming Logic",
    ],
    features: [
      "Live Online Classes",
      "Beginner Friendly",
      "Hands-on Coding Practice",
      "Real Projects",
      "Small Batches",
      "Individual Attention",
      "Assignment & Practice Exercises",
      "Certificate Upon Completion",
    ],
    icon: "terminal",
    color: "from-blue-600 to-cyan-500",
    image: "/images/python-course.png",
  },
  {
    slug: "python-ai-development-course",
    title: "Python & AI Development — Build Real AI Apps from Scratch",
    shortTitle: "Python & AI Development",
    description:
      "This course is designed to build a strong foundation in Python programming and gradually move students toward practical Python development and AI-powered applications. Students will learn core Python concepts, apply them through hands-on projects, integrate AI capabilities, and create simple web interfaces using Streamlit.",
    level: "Beginner",
    duration: "2 Months",
    ageGroup: "Ages 12+",
    topics: [
      "Python Fundamentals",
      "Control Flow & Decision Making",
      "Functions & Reusable Code",
      "Data Structures & Dictionaries",
      "File Input/Output & Modules",
      "Object-Oriented Programming (OOP)",
      "Pandas & Basic Data Analysis",
      "Rule-Based & AI-Powered Chatbots",
      "Streamlit Web Interfaces",
      "AI + Streamlit Mini Projects",
    ],
    features: [
      "Live Online Classes (30 Classes)",
      "Beginner to Project Level",
      "Hands-on Coding Practice",
      "8 Practical Projects",
      "Small Batches & Individual Attention",
      "Assignment & Practice Exercises",
      "AI APIs & Integration",
      "Certificate Upon Completion",
    ],
    icon: "sparkles",
    color: "from-blue-600 to-emerald-500",
    image: "/images/python-ai-course.png",
    learningOutcomes: [
      "Write Python programs confidently and use core programming concepts",
      "Work with basic structured data and utilize the Pandas library",
      "Build interactive desktop applications using functions, input, loops, and conditions",
      "Connect Python scripts with state-of-the-art AI model APIs (like Gemini/OpenAI)",
      "Create clean, functional web-based user interfaces using Streamlit",
      "Develop fully-functional AI-powered web applications from scratch",
    ],
    learningPath: [
      "Python Fundamentals",
      "Problem Solving",
      "Practical Projects",
      "AI Integration",
      "Streamlit",
      "AI-Powered Applications",
    ],
    projects: [
      "Python Calculator",
      "To-Do List Application",
      "Number Guessing Game",
      "Quiz Application",
      "Basic Rule-Based Chatbot",
      "AI-Powered Chatbot",
      "Streamlit Web Application",
      "AI + Streamlit Mini Project",
    ],
    syllabus: [
      {
        partTitle: "Part 1: Python Fundamentals (Classes 1–20)",
        classes: [
          { number: 1, title: "Introduction to Python", bullets: ["What is Python and why it is widely used", "Python applications and development environments", "Writing and running the first Python program", "print() function"] },
          { number: 2, title: "Variables & Data Types", bullets: ["Variables and naming conventions", "Strings, integers, floats and booleans", "Basic type conversion", "Practical exercises"] },
          { number: 3, title: "Input & Output", bullets: ["Taking user input with input()", "Formatting output", "Interactive Python programs", "Practical exercises"] },
          { number: 4, title: "Operators", bullets: ["Arithmetic, comparison and logical operators", "Assignment operators", "Combining operators in programs", "Practical examples"] },
          { number: 5, title: "Conditional Statements", bullets: ["if, elif and else", "Nested conditions", "Decision-making programs", "Practical exercises"] },
          { number: 6, title: "Loops", bullets: ["for and while loops", "Loop control", "Repeating tasks efficiently", "Practical exercises"] },
          { number: 7, title: "Lists", bullets: ["Creating and accessing lists", "Adding, removing and updating elements", "List methods", "Practical exercises"] },
          { number: 8, title: "Tuples & Sets", bullets: ["Tuples and sets", "Key differences from lists", "When to use each data structure", "Practical examples"] },
          { number: 9, title: "Dictionaries", bullets: ["Keys and values", "Creating and updating dictionaries", "Accessing dictionary data", "Practical exercises"] },
          { number: 10, title: "Strings in Python", bullets: ["Indexing and slicing", "Common string methods", "String formatting", "Text-processing exercises"] },
          { number: 11, title: "Functions", bullets: ["Creating functions", "Parameters and arguments", "Return values", "Reusable code"] },
          { number: 12, title: "Function Concepts", bullets: ["Default parameters", "Multiple parameters", "Variable scope", "Function-based programs"] },
          { number: 13, title: "Error Handling", bullets: ["Common Python errors", "try, except and finally", "Handling invalid input", "Writing more reliable programs"] },
          { number: 14, title: "File Handling", bullets: ["Reading and writing text files", "Updating file content", "Practical file-based program", "Basic data storage"] },
          { number: 15, title: "Modules", bullets: ["What are modules?", "Importing built-in modules", "Using external modules", "Creating reusable Python files"] },
          { number: 16, title: "Python Libraries", bullets: ["What are libraries and packages?", "Installing packages", "Using useful Python libraries", "Practical examples"] },
          { number: 17, title: "Object-Oriented Programming Basics", bullets: ["Classes and objects", "Attributes and methods", "Basic OOP structure", "Simple practical example"] },
          { number: 18, title: "Working with Data", bullets: ["Introduction to structured data", "CSV files", "Basic data processing", "Introduction to Pandas"] },
          { number: 19, title: "Python & AI Introduction", bullets: ["What is AI?", "How Python is used in AI", "Introduction to AI tools and APIs", "Creating a basic AI-powered Python program"] },
          { number: 20, title: "Python Fundamentals Practice", bullets: ["Complete revision", "Problem-solving exercises", "Coding challenges", "Mini practical tasks"] }
        ]
      },
      {
        partTitle: "Part 2: Python Development & AI Projects (Classes 21–30)",
        classes: [
          { number: 21, title: "Project 1: Python Calculator", bullets: ["Build a functional calculator", "Use functions, input, conditions and operators", "Test and improve the application"] },
          { number: 22, title: "Project 2: To-Do List App", bullets: ["Add, view and remove tasks", "Apply lists and functions", "Store and manage task data"] },
          { number: 23, title: "Project 3: Number Guessing Game", bullets: ["Use random numbers", "Apply loops and conditions", "Create interactive game logic"] },
          { number: 24, title: "Project 4: Quiz Application", bullets: ["Create questions and answers", "Check responses", "Calculate scores", "Build an interactive quiz"] },
          { number: 25, title: "Project 5: Basic Python Chatbot", bullets: ["Understand chatbot logic", "Process user input", "Create rule-based responses", "Build a simple chatbot"] },
          { number: 26, title: "AI-Powered Chatbot", bullets: ["Introduction to AI APIs", "Connect Python with an AI model", "Send prompts and receive responses", "Build a simple AI chatbot"] },
          { number: 27, title: "Introduction to Streamlit", bullets: ["What is Streamlit?", "Create a web interface using Python", "Use text, buttons and input fields", "Run a Streamlit application"] },
          { number: 28, title: "Building a Streamlit Application", bullets: ["Create a complete interface", "Use input fields, buttons and dropdowns", "Display results", "Connect Python logic with the interface"] },
          { number: 29, title: "AI + Streamlit Mini Project", bullets: ["Combine Python, AI and Streamlit", "Build an AI-powered application", "Create the user interface", "Connect and test AI functionality"] },
          { number: 30, title: "Final Project & Course Showcase", bullets: ["Develop and test the final project", "Debug and improve the application", "Present the completed project", "Review and discuss next learning steps"] }
        ]
      }
    ]
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
  courseTaken: string;
  courseSlug: string;
  whatLearned: string;
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
    courseTaken: "Beginner AI Course",
    courseSlug: "beginner-ai-course",
    whatLearned: "Learned natural language processing basics, prompt design, and integrating OpenAI's API using Python.",
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
    courseTaken: "Intermediate AI Course",
    courseSlug: "intermediate-ai-course",
    whatLearned: "Learned feature extraction, training Convolutional Neural Networks (CNNs), and processing image datasets.",
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
    courseTaken: "ChatGPT Course",
    courseSlug: "chatgpt-course",
    whatLearned: "Learned systematic prompt chaining, context management, and generating structured study plans.",
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
    courseTaken: "Intermediate AI Course",
    courseSlug: "intermediate-ai-course",
    whatLearned: "Learned text tokenization, classifier models, and building custom web dashboards with Streamlit.",
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
    courseTaken: "Generative AI Course",
    courseSlug: "generative-ai-course",
    whatLearned: "Learned diffusion models, text-to-image prompting rules, and negative prompt fine-tuning.",
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
    courseTaken: "Intermediate AI Course",
    courseSlug: "intermediate-ai-course",
    whatLearned: "Learned linear and polynomial regression, cleaning public weather datasets, and building forecasting algorithms.",
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
    courseTaken: "Beginner AI Course",
    courseSlug: "beginner-ai-course",
    whatLearned: "Learned working with external translation APIs, JSON response parsing, and designing simple console UIs.",
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
    courseTaken: "Python & AI Development Course",
    courseSlug: "python-ai-development-course",
    whatLearned: "Learned python files integration, data structures, categorization logic, and rendering tables on a Streamlit interface.",
  },
];
