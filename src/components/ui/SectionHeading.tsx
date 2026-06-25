interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="font-outfit text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {/* Decorative gradient underline */}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary ${
          centered ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
