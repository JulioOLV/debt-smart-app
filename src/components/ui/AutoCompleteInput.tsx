import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface AutoCompleteInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suggestions?: string[];
  label?: string;
  helperText?: string;
}

const AutoCompleteInput = forwardRef<HTMLInputElement, AutoCompleteInputProps>(
  ({ className, suggestions = [], label, helperText, ...props }, ref) => {
    const datalistId = React.useId();

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            list={datalistId}
            className={cn(
              'h-16 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none',
              className,
            )}
            ref={ref}
            {...props}
          />
          <datalist id={datalistId}>
            {suggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
        </div>
        {helperText && <p className="text-xs text-slate-500">{helperText}</p>}
      </div>
    );
  },
);

AutoCompleteInput.displayName = 'AutoCompleteInput';

export { AutoCompleteInput };
