// Blog utility functions
import type { BlogCategory } from "./constants";
import { BLOG_CATEGORIES } from "./constants";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  keywords: string[];
  content: string;
}

// Import all blog posts
import { post as post1 } from "@/data/blog-posts/what-is-artificial-intelligence";
import { post as post2 } from "@/data/blog-posts/how-to-learn-ai-from-scratch";
import { post as post3 } from "@/data/blog-posts/best-ai-course-in-pakistan";
import { post as post4 } from "@/data/blog-posts/ai-for-school-students";
import { post as post5 } from "@/data/blog-posts/ai-skills-every-student-should-learn";
import { post as post6 } from "@/data/blog-posts/can-kids-learn-ai";
import { post as post7 } from "@/data/blog-posts/chatgpt-guide-for-beginners";
import { post as post8 } from "@/data/blog-posts/future-of-ai";
import { post as post9 } from "@/data/blog-posts/benefits-of-learning-ai";
import { post as post10 } from "@/data/blog-posts/ai-career-guide";
import { post as post11 } from "@/data/blog-posts/machine-learning-basics";
import { post as post12 } from "@/data/blog-posts/prompt-engineering-guide";
import { post as post13 } from "@/data/blog-posts/top-ai-tools-for-students";
import { post as post14 } from "@/data/blog-posts/how-parents-can-prepare-children-for-ai";
import { post as post15 } from "@/data/blog-posts/ai-education-for-beginners";

const ALL_POSTS: BlogPost[] = [
  post1, post2, post3, post4, post5,
  post6, post7, post8, post9, post10,
  post11, post12, post13, post14, post15,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): BlogPost[] {
  return ALL_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return ALL_POSTS.filter((post) => post.category === categorySlug);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return ALL_POSTS
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return ALL_POSTS.slice(0, limit);
}

export function calculateReadingTime(content: string): string {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
