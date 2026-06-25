'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import type { FAQItem } from '@/lib/constants';

interface FAQAccordionProps {
  items: FAQItem[];
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
        aria-expanded={isOpen}
      >
        <span className="font-outfit text-base font-semibold text-dark sm:text-lg">
          {item.question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: height }}
      >
        <div ref={contentRef} className="pb-5 pr-8 text-sm leading-relaxed text-muted">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="divide-y divide-gray-100 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
