import { forwardRef } from 'react';

import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, icon: Icon, helperText, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
          )}
          <input
            type={type}
            className={cn(
              'h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none',
              Icon && 'pl-11',
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
        {helperText && <p className="text-xs text-slate-500">{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
