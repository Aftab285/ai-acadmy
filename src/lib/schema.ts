// JSON-LD Schema.org structured data generators
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE } from "./constants";
import type { Course, FAQItem } from "./constants";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: SITE_NAME,
    url: SITE_DOMAIN,
    logo: `${SITE_DOMAIN}/logo.png`,
    description:
      "Pakistan's leading online AI academy offering live classes in Artificial Intelligence, Machine Learning, ChatGPT, and Generative AI for students and beginners across Pakistan.",
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE),
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_DOMAIN}/#business`,
    name: SITE_NAME,
    url: SITE_DOMAIN,
    logo: `${SITE_DOMAIN}/logo.png`,
    image: `${SITE_DOMAIN}/og-image.png`,
    description:
      "Pakistan's leading online AI academy offering live classes in Artificial Intelligence, Machine Learning, ChatGPT, and Generative AI for students and beginners across Pakistan.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.3753",
      longitude: "69.3451",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_DOMAIN,
    },
    url: `${SITE_DOMAIN}/courses/${course.slug}`,
    educationalLevel: course.level,
    courseMode: "Online",
    deliveryMode: "Online",
    isAccessibleForFree: false,
    inLanguage: "en",
    availableLanguage: ["English", "Urdu"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      instructor: {
        "@type": "Person",
        name: "AI Expert Instructor",
      },
      duration: course.duration,
    },
    about: course.topics.map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_DOMAIN}${item.url}`,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_DOMAIN}/blog/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_DOMAIN,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_DOMAIN}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_DOMAIN}/blog/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: "en",
  };
}

export function generateWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_DOMAIN}${page.url}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_DOMAIN,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_DOMAIN,
    },
  };
}
