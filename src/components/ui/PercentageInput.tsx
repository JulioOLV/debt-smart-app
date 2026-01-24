import React, { forwardRef, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Input } from './Input';

interface PercentageInputProps extends Omit<
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

const PercentageInput = forwardRef<HTMLInputElement, PercentageInputProps>(
  (
    {
      value = 0,
      onChange,
      placeholder = '0.00%',
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

    const formatPercentage = (num: number) => {
      return `${num.toFixed(2)}%`;
    };

    const parsePercentage = (formattedValue: string): number => {
      const numbers = formattedValue.replace(/[^\d.]/g, '');
      return parseFloat(numbers) || 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const parsedValue = parsePercentage(inputValue);
      onChange?.(parsedValue);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const displayValue = isFocused ? `${value}` : formatPercentage(value);

    return (
      <Input
        ref={ref}
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        label={label}
        helperText={helperText}
        className={cn('h-16 text-right', className)}
        {...props}
      />
    );
  },
);

PercentageInput.displayName = 'PercentageInput';

export { PercentageInput };
