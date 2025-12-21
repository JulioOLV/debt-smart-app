import { UseFormProps, UseFormReturn, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf, ZodTypeAny } from 'zod';

export function useZodForm<T extends ZodTypeAny>(
  schema: T,
  options?: Omit<UseFormProps<TypeOf<T>>, 'resolver'>,
): UseFormReturn<TypeOf<T>> {
  return useForm<TypeOf<T>>({ resolver: zodResolver(schema), ...options });
}

export type UseZodFormReturn<T extends ZodTypeAny> = UseFormReturn<TypeOf<T>>;
