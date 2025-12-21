import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@/components/ui/Button';

import { debtsQueryOptions } from '../api/debts';

export const Route = createFileRoute('/')({
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(debtsQueryOptions);
  },
  component: DebtsList,
});

function DebtsList() {
  const { data } = useSuspenseQuery(debtsQueryOptions);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Minhas Dívidas</h2>
      <ul className="space-y-2">
        {data.map((debt) => (
          <li key={debt.id} className="rounded border p-2 shadow-sm">
            {debt.title}: R$ {debt.amount}
          </li>
        ))}
      </ul>

      <Button>Click me</Button>
    </div>
  );
}
