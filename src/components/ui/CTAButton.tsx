import Link from 'next/link';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30',
  secondary:
    'bg-gradient-to-r from-secondary to-secondary-light text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-primary',
  whatsapp:
    'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20ba5a] hover:shadow-xl hover:shadow-[#25D366]/30',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
};

export default function CTAButton({
  variant = 'primary',
  href,
  children,
  className = '',
  size = 'md',
  external = false,
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // WhatsApp icon for whatsapp variant
  const whatsAppIcon = variant === 'whatsapp' && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-5 w-5 fill-white"
      aria-hidden="true"
    >
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.056 31.2l6.072-1.952A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.614c-.39 1.1-2.274 2.1-3.132 2.172-.792.066-1.542.374-5.2-1.086-4.422-1.764-7.218-6.27-7.438-6.562-.214-.292-1.758-2.342-1.758-4.466 0-2.124 1.116-3.166 1.51-3.6.392-.434.856-.542 1.142-.542.286 0 .572.002.822.016.264.012.618-.1.968.738.358.858 1.214 2.954 1.322 3.168.108.214.18.464.036.748-.144.286-.216.464-.43.714-.214.252-.45.562-.644.754-.214.214-.438.446-.188.876s1.11 1.832 2.386 2.968c1.636 1.458 3.018 1.912 3.448 2.126.43.214.682.18.932-.108.25-.286 1.072-1.25 1.358-1.682.286-.432.572-.358.964-.214.392.144 2.486 1.174 2.914 1.388.43.214.714.322.822.5.108.178.108 1.028-.282 2.13Z" />
    </svg>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {whatsAppIcon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {whatsAppIcon}
      {children}
    </Link>
  );
}
