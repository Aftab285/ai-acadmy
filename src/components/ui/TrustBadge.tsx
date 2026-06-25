interface TrustBadgeProps {
  icon: string;
  label: string;
}

export default function TrustBadge({ icon, label }: TrustBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
      <span className="text-xl" aria-hidden="true">
        {icon}
      </span>
      <span className="text-sm font-medium text-dark whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
