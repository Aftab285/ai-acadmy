'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return { num: parseInt(match[1], 10), suffix: match[2] };
  }
  return { num: 0, suffix: value };
}

function CountUp({ target, suffix, animate }: { target: number; suffix: string; animate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    let frame: number;

    const step = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, animate]);

  return (
    <span className="font-outfit text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
      {animate ? count : 0}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 gap-8 rounded-2xl bg-white p-8 shadow-xl sm:p-12 lg:grid-cols-4"
    >
      {STATS.map((stat, index) => {
        const { num, suffix } = parseValue(stat.value);
        return (
          <div
            key={index}
            className={`flex flex-col items-center text-center ${
              index < STATS.length - 1
                ? 'lg:border-r lg:border-gray-100'
                : ''
            }`}
          >
            <CountUp target={num} suffix={suffix} animate={isVisible} />
            <span className="mt-2 text-sm font-medium text-muted">
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
