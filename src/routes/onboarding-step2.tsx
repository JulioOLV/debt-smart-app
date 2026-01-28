import React, { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';
import { ArrowLeft, Plus } from 'lucide-react';

import { AddDebtBottomSheet } from '@/components/AddDebtBottomSheet';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';

const OnboardingStep2: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white px-4 pt-6 pb-2">
        <div className="mb-4 flex items-center justify-between">
          <button
            className="-ml-1 flex items-center gap-2 p-1 text-slate-700 hover:text-slate-900"
            aria-label="Voltar para a etapa anterior"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <span
            className="text-sm font-medium text-slate-500"
            aria-hidden="true"
          >
            Passo 2 de 3
          </span>
        </div>
        <ProgressBar
          progress={66}
          ariaLabel="Progresso do cadastro: etapa 2 de 3"
          className="bg-slate-100"
        />
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col px-6 pt-8 pb-6">
        <section className="mb-8">
          <h1
            className="mb-3 text-3xl font-bold tracking-tight text-slate-900"
            tabIndex={-1}
          >
            Vamos colocar tudo no papel.
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            Liste todas as suas pendências. Não se assuste com o total agora; o
            objetivo é organizar.
          </p>
        </section>

        <section className="flex flex-1 flex-col items-center justify-center gap-6 py-4 opacity-100 transition-opacity">
          {/* Ilustração SVG - Caixa vazia */}
          <svg
            viewBox="0 0 200 200"
            className="h-48 w-48"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Caixa */}
            <rect
              x="50"
              y="80"
              width="100"
              height="80"
              rx="8"
              fill="#E0F2FE"
              stroke="#0EA5E9"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
            {/* Tampa da caixa aberta */}
            <path
              d="M50 80 L75 50 L125 50 L150 80"
              fill="#BAE6FD"
              stroke="#0EA5E9"
              strokeWidth="3"
            />
            {/* Símbolo + */}
            <circle cx="100" cy="120" r="20" fill="#0EA5E9" opacity="0.2" />
            <line
              x1="100"
              y1="110"
              x2="100"
              y2="130"
              stroke="#0EA5E9"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="90"
              y1="120"
              x2="110"
              y2="120"
              stroke="#0EA5E9"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-center leading-snug text-slate-500">
            Comece adicionando sua primeira conta ou dívida
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white p-6">
        <AddDebtBottomSheet
          open={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          trigger={
            <Button
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-blue-800 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-900 active:scale-[0.98] active:bg-blue-950"
              aria-label="Adicionar primeira conta à lista"
            >
              <Plus className="h-5 w-5" />
              Adicionar primeira conta
            </Button>
          }
        />
      </footer>
    </div>
  );
};

export const Route = createFileRoute('/onboarding-step2')({
  component: OnboardingStep2,
});
