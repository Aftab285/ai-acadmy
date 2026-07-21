'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SITE_NAME, DEMO_VIDEO_URL } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${SITE_NAME} — Home`}>
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-dark-light hover:bg-primary/5 hover:text-primary'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={DEMO_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Watch Free Demo
            <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
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
        className={`fixed top-0 right-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <span className="font-outfit text-lg font-bold text-primary">Menu</span>
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
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-dark-light transition-colors hover:bg-primary/5 hover:text-primary"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
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
            <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Free Demo
          </a>
        </div>
      </nav>
    </header>
  );
}
