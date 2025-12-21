import { createFileRoute } from '@tanstack/react-router';
import { Lock, TrendingUp } from 'lucide-react';

import { Button } from '@/components/ui/Button';

function Welcome() {
  return (
    <div className="bg-background relative flex h-screen w-full flex-col md:items-center md:justify-center">
      <div className="h-full w-full md:my-auto md:flex md:h-auto md:max-w-md md:flex-col md:shadow-xl">
        <div className="relative min-h-[45%] flex-1 overflow-hidden bg-blue-200/30">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
            <TrendingUp className="h-24 w-24 text-blue-600" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white px-6 pt-8">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-bold text-slate-900">
              Vamos retomar o controle?
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
              Não importa o tamanho do desafio, existe um caminho para sair
              dele. O{' '}
              <span className="font-medium text-emerald-600">Respiro</span>{' '}
              organiza tudo e te diz exatamente qual o melhor passo a dar hoje.
            </p>
          </div>
          <div className="absolute right-0 bottom-12 left-0 space-y-4 px-6 md:left-1/2 md:max-w-md md:-translate-x-1/2">
            <Button className="h-14 w-full rounded-xl bg-blue-800 text-lg font-semibold text-white hover:bg-blue-900">
              Começar meu plano
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <Lock className="h-3 w-3" />
              <span>Seus dados são 100% confidenciais e criptografados.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/welcome')({
  component: Welcome,
});
