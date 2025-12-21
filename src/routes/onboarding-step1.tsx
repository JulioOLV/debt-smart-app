import React, { useEffect, useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';
import { ArrowLeft, Info } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { CurrencyInput } from '@/components/ui/CurrencyInput';
import { ProgressBar } from '@/components/ui/ProgressBar';

import { useOnboardingStore } from '../store/useOnboardingStore';

const OnboardingStep1: React.FC = () => {
  const { income, essentialExpenses, setIncome, setEssentialExpenses } =
    useOnboardingStore();
  const [showEssential, setShowEssential] = useState(false);

  useEffect(() => {
    if (income > 0 && !showEssential) {
      setShowEssential(true);
    }
  }, [income, showEssential]);

  const isButtonEnabled = income > 0 && essentialExpenses > 0;

  return (
    <div className="flex h-screen w-full flex-col bg-slate-50/30">
      {/* Header Navigation */}
      <header className="flex w-full items-center justify-between px-4 pt-6 pb-2">
        <button className="flex items-center gap-1 text-slate-600">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Voltar</span>
        </button>
        <span className="text-sm font-medium text-slate-400">Passo 1 de 3</span>
      </header>

      {/* Progress Bar */}
      <div className="mt-2 w-full px-4">
        <ProgressBar progress={33} />
      </div>

      {/* Main Content */}
      <main className="flex-1 space-y-8 px-8 pt-12">
        {/* Typography */}
        <div className="space-y-4">
          <h1 className="text-3xl leading-tight font-bold text-slate-900">
            Primeiro, vamos entender seu cenário real.
          </h1>
          <p className="text-base leading-relaxed text-slate-500">
            Para criar uma estratégia que funcione, precisamos saber quanto
            entra e quanto custa o seu 'básico' para viver.
          </p>
        </div>

        {/* Form Group */}
        <div className="space-y-6">
          {/* Income Input */}
          <div className="space-y-2">
            <label className="font-semibold text-slate-900">
              Qual sua renda mensal líquida?
            </label>
            <CurrencyInput value={income} onChange={setIncome} autoFocus />
            <p className="text-sm text-slate-400">
              O valor que cai na conta (Salário, extras, bicos...)
            </p>
          </div>

          {/* Essential Expenses Input */}
          {showEssential && (
            <div
              className="animate-fade-in-top space-y-2"
              style={{
                animation: 'fadeInTop 0.5s ease-in-out',
              }}
            >
              <label className="font-semibold text-slate-900">
                Quanto você gasta com o essencial?
              </label>
              <CurrencyInput
                value={essentialExpenses}
                onChange={setEssentialExpenses}
                placeholder="R$ 0,00"
              />
            </div>
          )}

          {/* Info Alert */}
          <div className="flex gap-3 rounded-2xl bg-blue-50 p-4">
            <Info className="h-5 w-5 flex-shrink-0 text-blue-500" />
            <p className="text-sm leading-snug text-blue-800">
              Considere apenas o indispensável para sobreviver:
              Aluguel/Condomínio, mercado, luz, água, transporte. Não inclua as
              parcelas de dívidas aqui.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Action */}
      <footer className="border-t border-slate-100 bg-white p-6">
        <Button
          disabled={!isButtonEnabled}
          className={`h-14 w-full rounded-2xl text-base font-semibold ${
            isButtonEnabled
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'cursor-not-allowed bg-slate-200 text-slate-400'
          }`}
        >
          Próximo: Listar pendências
        </Button>
      </footer>
    </div>
  );
};

export const Route = createFileRoute('/onboarding-step1')({
  component: OnboardingStep1,
});
