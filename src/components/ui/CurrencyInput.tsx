import React, { forwardRef, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Input } from './Input';

interface CurrencyInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> {
  value?: number;
  onChange?: (value: number) => void;
  placeholder?: string;
  autoFocus?: boolean;
  label?: string;
  helperText?: string;
}

const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      value = 0,
      onChange,
      placeholder = 'R$ 0,00',
      autoFocus,
      label,
      helperText,
      className,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (autoFocus && ref && 'current' in ref && ref.current) {
        ref.current.focus();
      }
    }, [autoFocus, ref]);

    const formatCurrency = (num: number) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(num);
    };

    const parseCurrency = (formattedValue: string): number => {
      const numbers = formattedValue.replace(/\D/g, '');
      return Number(numbers) / 100;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const numericValue = parseCurrency(inputValue);
      onChange?.(numericValue);
    };

    const displayValue = value === 0 ? '' : formatCurrency(value);

    return (
      <Input
        {...props}
        ref={ref}
        type="text"
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        label={label}
        helperText={helperText}
        className={cn(
          'h-16 w-full rounded-2xl px-4 text-2xl font-medium',
          isFocused
            ? 'border-2 border-blue-600 bg-white text-slate-900'
            : 'border border-slate-200 bg-slate-100/50 text-slate-900',
        )}
      />
    );
  },
);

CurrencyInput.displayName = 'CurrencyInput';

export { CurrencyInput };
