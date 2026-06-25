'use client';

import { useState } from 'react';
import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/constants';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_LINK(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full shadow-2xl transition-all duration-300 whatsapp-pulse ${
        isHovered
          ? 'bg-[#20ba5a] scale-110 pr-5'
          : 'bg-[#25D366]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* WhatsApp Icon */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.056 31.2l6.072-1.952A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.614c-.39 1.1-2.274 2.1-3.132 2.172-.792.066-1.542.374-5.2-1.086-4.422-1.764-7.218-6.27-7.438-6.562-.214-.292-1.758-2.342-1.758-4.466 0-2.124 1.116-3.166 1.51-3.6.392-.434.856-.542 1.142-.542.286 0 .572.002.822.016.264.012.618-.1.968.738.358.858 1.214 2.954 1.322 3.168.108.214.18.464.036.748-.144.286-.216.464-.43.714-.214.252-.45.562-.644.754-.214.214-.438.446-.188.876s1.11 1.832 2.386 2.968c1.636 1.458 3.018 1.912 3.448 2.126.43.214.682.18.932-.108.25-.286 1.072-1.25 1.358-1.682.286-.432.572-.358.964-.214.392.144 2.486 1.174 2.914 1.388.43.214.714.322.822.5.108.178.108 1.028-.282 2.13Z" />
        </svg>
      </span>

      {/* Tooltip text on hover */}
      <span
        className={`text-sm font-semibold text-white whitespace-nowrap transition-all duration-300 overflow-hidden ${
          isHovered ? 'max-w-40 opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Chat with us
      </span>
    </a>
  );
}
