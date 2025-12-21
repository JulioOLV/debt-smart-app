import { queryOptions } from '@tanstack/react-query';

async function fetchDebts() {
  await new Promise((r) => setTimeout(r, 500));
  return [
    { id: '1', title: 'Cartão de Crédito', amount: 1500 },
    { id: '2', title: 'Financiamento Carro', amount: 32000 },
  ];
}

export const debtsQueryOptions = queryOptions({
  queryKey: ['debts'],
  queryFn: fetchDebts,
});
