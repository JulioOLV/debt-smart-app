import React, { useState } from 'react';

import { X } from 'lucide-react';

import { AutoCompleteInput } from '@/components/ui/AutoCompleteInput';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { CurrencyInput } from '@/components/ui/CurrencyInput';
import { PercentageInput } from '@/components/ui/PercentageInput';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';

interface AddDebtBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
}

const AddDebtBottomSheet: React.FC<AddDebtBottomSheetProps> = ({
  open,
  onOpenChange,
  trigger,
}) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [skipInterest, setSkipInterest] = useState(false);
  const [dueDay, setDueDay] = useState('');

  // Mock suggestions for auto-complete
  const suggestions = ['Nubank', 'Aluguel', 'Empréstimo', 'Cartão de Crédito'];

  // Generate due day options based on current month
  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const dueDayOptions = Array.from(
    { length: daysInMonth },
    (_, i) => `Dia ${i + 1}`,
  );

  const isFormValid =
    name.trim() && value > 0 && (skipInterest || interestRate > 0) && dueDay;

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Saving debt:', {
      name,
      value,
      interestRate: skipInterest ? null : interestRate,
      dueDay,
    });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
      <SheetContent className="z-50 flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl">
        <div className="flex w-full shrink-0 flex-col items-center bg-white pt-3 pb-2">
          <div className="mb-4 h-1.5 w-12 rounded-full bg-gray-200" />
          <div className="flex w-full items-center justify-between">
            <SheetTitle className="text-xl font-bold text-slate-900">
              Nova Pendência
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-mr-2 rounded-full p-2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-6 w-6" />
              </Button>
            </SheetClose>
          </div>
        </div>
        <form className="flex-1 space-y-5 overflow-y-auto pt-2 pb-6">
          <AutoCompleteInput
            label="Nome da conta ou dívida"
            placeholder="Ex: Nubank, Aluguel, Empréstimo..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            suggestions={suggestions}
            required
          />
          <CurrencyInput
            label="Valor total da dívida"
            placeholder="R$ 0,00"
            value={value}
            onChange={setValue}
          />
          <div className="space-y-3">
            <PercentageInput
              label="Taxa de juros mensais (%)"
              placeholder="Ex: 2.5"
              value={interestRate}
              onChange={setInterestRate}
              disabled={skipInterest}
            />
            <div className="flex items-start gap-3">
              <Checkbox
                id="skip-interest"
                checked={skipInterest}
                onCheckedChange={(checked) => {
                  setSkipInterest(!!checked);
                  if (checked) setInterestRate(0);
                }}
              />
              <div>
                <label
                  htmlFor="skip-interest"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Não sei a taxa de juros
                </label>
                {skipInterest && (
                  <p className="mt-1 text-xs leading-tight text-slate-500 italic">
                    Sem problemas, usaremos uma estimativa de mercado.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-slate-900">
              Dia do vencimento
            </label>
            <Select value={dueDay} onValueChange={setDueDay}>
              <SelectTrigger className="h-16 w-full rounded-lg border border-blue-600 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none focus:ring-2 focus:ring-blue-600">
                <SelectValue placeholder="Selecione o dia" />
              </SelectTrigger>
              <SelectContent>
                {dueDayOptions.map((day) => (
                  <SelectItem key={day} value={day}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </form>
        <div className="mt-auto shrink-0 border-t border-slate-50 bg-white">
          <Button
            type="button"
            onClick={handleSave}
            disabled={!isFormValid}
            className="h-14 w-full cursor-not-allowed rounded-lg bg-slate-200 py-3.5 font-semibold text-slate-400 disabled:opacity-50"
          >
            Salvar esta conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { AddDebtBottomSheet };
