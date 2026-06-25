import Link from 'next/link';
import Image from 'next/image';
import {
  SITE_NAME,
  NAV_LINKS,
  COURSES,
  WHATSAPP_NUMBER,
  WHATSAPP_LINK,
  WHATSAPP_DEFAULT_MESSAGE,
} from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_NAME} — Home`}>
              <Image
                src="/logo.png"
                alt={`${SITE_NAME} Logo`}
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-outfit text-lg font-bold text-white">
                Pakistan AI Academy
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Pakistan&apos;s leading online AI academy offering live classes in Artificial
              Intelligence, Machine Learning, ChatGPT, and Generative AI for students and
              beginners across Pakistan.
            </p>

            {/* WhatsApp number */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/20"
              >
                <svg className="h-5 w-5 fill-[#25D366]" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.056 31.2l6.072-1.952A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.614c-.39 1.1-2.274 2.1-3.132 2.172-.792.066-1.542.374-5.2-1.086-4.422-1.764-7.218-6.27-7.438-6.562-.214-.292-1.758-2.342-1.758-4.466 0-2.124 1.116-3.166 1.51-3.6.392-.434.856-.542 1.142-.542.286 0 .572.002.822.016.264.012.618-.1.968.738.358.858 1.214 2.954 1.322 3.168.108.214.18.464.036.748-.144.286-.216.464-.43.714-.214.252-.45.562-.644.754-.214.214-.438.446-.188.876s1.11 1.832 2.386 2.968c1.636 1.458 3.018 1.912 3.448 2.126.43.214.682.18.932-.108.25-.286 1.072-1.25 1.358-1.682.286-.432.572-.358.964-.214.392.144 2.486 1.174 2.914 1.388.43.214.714.322.822.5.108.178.108 1.028-.282 2.13Z" />
                </svg>
                {WHATSAPP_NUMBER}
              </a>
            </div>

            {/* Social icons placeholder */}
            <div className="flex gap-3">
              {['facebook', 'instagram', 'youtube'].map((social) => (
                <span
                  key={social}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-primary hover:text-white cursor-pointer"
                  aria-label={social}
                >
                  {social === 'facebook' && (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  )}
                  {social === 'youtube' && (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit text-base font-semibold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-gray-400 transition-colors hover:text-white hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-outfit text-base font-semibold text-white mb-5">
              Our Courses
            </h3>
            <ul className="space-y-3">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white hover:translate-x-1 transform duration-200"
                  >
                    <span aria-hidden="true">{course.icon}</span>
                    {course.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">
            © 2024–2025 {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
