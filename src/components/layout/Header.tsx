'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME, DEMO_VIDEO_URL } from '@/lib/constants';

const TRANSLATIONS = {
  en: {
    Home: "Home",
    Courses: "Courses",
    "AI for Kids": "AI for Kids",
    "Why Learn AI": "Why Learn AI",
    "Student Projects": "Student Projects",
    "Success Stories": "Success Stories",
    Blog: "Blog",
    About: "About",
    Contact: "Contact",
    "Watch Free Demo": "Watch Free Demo",
    Menu: "Menu",
  },
  ur: {
    Home: "ہوم",
    Courses: "کورسز",
    "AI for Kids": "بچوں کے لیے AI",
    "Why Learn AI": "AI کیوں سیکھیں؟",
    "Student Projects": "طلباء کے پروجیکٹس",
    "Success Stories": "کامیابی کی کہانیاں",
    Blog: "بلاگ",
    About: "ہمارے بارے میں",
    Contact: "رابطہ کریں",
    "Watch Free Demo": "مفت ڈیمو دیکھیں",
    Menu: "مینیو",
  },
} as const;

export default function Header({ lang }: { lang?: 'en' | 'ur' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Determine active language from route path or prop
  const isUrdu = lang === 'ur' || pathname.startsWith('/ur') || pathname.includes('/ur/');
  const t = TRANSLATIONS[isUrdu ? 'ur' : 'en'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Compute active target switching link
  const getLanguageTargetUrl = (targetLang: 'en' | 'ur') => {
    if (targetLang === 'ur') {
      if (isUrdu) return pathname;
      return pathname === '/' ? '/ur' : `/ur${pathname}`;
    } else {
      if (!isUrdu) return pathname;
      const stripped = pathname.replace(/^\/ur/, '');
      return stripped === '' ? '/' : stripped;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + Name */}
        <Link href={isUrdu ? '/ur' : '/'} className="flex items-center gap-2.5 group" aria-label={`${SITE_NAME} — Home`}>
          <Image
            src="/logo.png"
            alt={`${SITE_NAME} Logo`}
            width={40}
            height={40}
            className="rounded-lg transition-transform duration-300 group-hover:scale-110"
            priority
          />
          <span className={`font-outfit text-lg font-bold hidden sm:inline-block transition-colors duration-300 ${
            isScrolled ? 'text-dark' : 'text-white'
          }`}>
            <span className={isScrolled ? 'text-primary' : 'text-white'}>Pakistan AI</span>{' '}
            <span className={isScrolled ? 'text-secondary' : 'text-green-300'}>Academy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const localizedLabel = t[link.label as keyof typeof t] || link.label;
            const localizedHref = isUrdu ? (link.href === '/' ? '/ur' : `/ur${link.href}`) : link.href;
            return (
              <Link
                key={link.href}
                href={localizedHref}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-dark-light hover:bg-primary/5 hover:text-primary'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {localizedLabel}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Switcher + CTA */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 text-[11px] font-bold tracking-wider select-none">
            <Link
              href={getLanguageTargetUrl('en')}
              className={`transition-colors py-1 px-1.5 rounded hover:bg-white/5 ${
                !isUrdu
                  ? 'text-primary bg-primary/5 hover:bg-primary/10'
                  : isScrolled
                  ? 'text-dark-light hover:text-dark'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              EN
            </Link>
            <span className={isScrolled ? 'text-gray-300' : 'text-white/20'}>|</span>
            <Link
              href={getLanguageTargetUrl('ur')}
              className={`transition-colors py-1 px-1.5 rounded font-urdu hover:bg-white/5 ${
                isUrdu
                  ? 'text-primary bg-primary/5 hover:bg-primary/10'
                  : isScrolled
                  ? 'text-dark-light hover:text-dark'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              اردو
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={DEMO_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              {t["Watch Free Demo"]}
              <svg className={`h-4 w-4 fill-white ${isUrdu ? 'rotate-180' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              isScrolled || isMobileOpen
                ? 'text-dark hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isScrolled || isMobileOpen ? 'bg-dark' : 'bg-white'
                } ${
                  isMobileOpen ? 'top-2.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isScrolled || isMobileOpen ? 'bg-dark' : 'bg-white'
                } ${
                  isMobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isScrolled || isMobileOpen ? 'bg-dark' : 'bg-white'
                } ${
                  isMobileOpen ? 'top-2.5 -rotate-45' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <nav
        className={`fixed top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isUrdu
            ? (isMobileOpen ? 'left-0 translate-x-0' : 'left-0 -translate-x-full')
            : (isMobileOpen ? 'right-0 translate-x-0' : 'right-0 translate-x-full')
        }`}
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <span className="font-outfit text-lg font-bold text-primary">{t.Menu}</span>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-dark hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {NAV_LINKS.map((link, index) => {
            const localizedLabel = t[link.label as keyof typeof t] || link.label;
            const localizedHref = isUrdu ? (link.href === '/' ? '/ur' : `/ur${link.href}`) : link.href;
            return (
              <Link
                key={link.href}
                href={localizedHref}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-dark-light transition-colors hover:bg-primary/5 hover:text-primary"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {localizedLabel}
              </Link>
            );
          })}
        </div>

        {/* Mobile Language Switcher */}
        <div className="border-t border-gray-100 p-6 flex justify-center gap-4 text-sm font-bold">
          <Link
            href={getLanguageTargetUrl('en')}
            className={`transition-colors py-1.5 px-3 rounded ${!isUrdu ? 'text-primary bg-primary/5' : 'text-muted'}`}
            onClick={() => setIsMobileOpen(false)}
          >
            English
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href={getLanguageTargetUrl('ur')}
            className={`transition-colors py-1.5 px-3 rounded font-urdu ${isUrdu ? 'text-primary bg-primary/5' : 'text-muted'}`}
            onClick={() => setIsMobileOpen(false)}
          >
            اردو
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="border-t border-gray-100 p-6">
          <a
            href={DEMO_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setIsMobileOpen(false)}
          >
            <svg className={`h-5 w-5 fill-white ${isUrdu ? 'rotate-180' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            {t["Watch Free Demo"]}
          </a>
        </div>
      </nav>
    </header>
  );
}
