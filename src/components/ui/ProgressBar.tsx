import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
  ariaLabel?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = '',
  ariaLabel = 'Progress',
}) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.min(100, Math.max(0, progress))}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      className={`h-1.5 w-full overflow-hidden rounded-full bg-slate-200 ${className}`}
    >
      <div
        className="h-full bg-blue-700 transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
};

export { ProgressBar };
