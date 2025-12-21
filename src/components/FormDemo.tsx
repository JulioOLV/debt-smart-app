import { z } from 'zod';

import { useZodForm } from '../lib/form';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

export function FormDemo() {
  const { register, handleSubmit, formState } = useZodForm(schema);
  const { errors, isSubmitting } = formState;

  const onSubmit = (data: FormData) => {
    // replace with real submit logic
    // eslint-disable-next-line no-console
    console.log('Submitted', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input className="mt-1 block w-full" {...register('name')} />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input className="mt-1 block w-full" {...register('email')} />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 px-4 py-2 text-white"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default FormDemo;
