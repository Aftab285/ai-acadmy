import Icon from '@/components/ui/Icon';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

export default function StepCard({ step, title, description, icon, isLast = false }: StepCardProps) {
  return (
    <div className="relative flex gap-6">
      {/* Left column: step number + connecting line */}
      <div className="flex flex-col items-center">
        {/* Step circle */}
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-lg font-bold text-white shadow-lg shadow-primary/20">
          {step}
        </div>
        {/* Connecting dotted line */}
        {!isLast && (
          <div
            className="mt-2 flex-1 border-l-2 border-dashed border-primary/30"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right column: content */}
      <div className={`pb-10 ${isLast ? '' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Icon name={icon} size={18} color="primary" />
          </div>
          <h3 className="font-outfit text-lg font-bold text-dark">
            {title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
