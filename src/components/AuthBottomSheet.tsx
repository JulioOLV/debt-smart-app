import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Lock, Mail, User } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Sheet,
  SheetCloseButton,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/Sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

interface AuthBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthBottomSheet({ open, onOpenChange }: AuthBottomSheetProps) {
  const [activeTab, setActiveTab] = useState('entrar');
  const { register } = useForm();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {activeTab === 'entrar' ? 'Bem-vindo de volta' : 'Criar conta'}
          </SheetTitle>
          <SheetCloseButton />
        </SheetHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="mb-6">
            <TabsTrigger value="entrar">Entrar</TabsTrigger>
            <TabsTrigger value="criar">Criar conta</TabsTrigger>
          </TabsList>

          <TabsContent value="entrar" className="space-y-6">
            {/* Social Login */}
            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                G
              </div>
              Entrar com Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">ou</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Form */}
            <div className="space-y-4">
              <Input
                label="Email"
                icon={Mail}
                placeholder="seu@email.com"
                {...register('email')}
              />
              <Input
                label="Senha"
                type="password"
                icon={Lock}
                placeholder="••••••••"
                {...register('password')}
              />
            </div>

            <Button className="h-12 w-full rounded-xl bg-blue-800 font-semibold text-white hover:bg-blue-900">
              Entrar
            </Button>
          </TabsContent>

          <TabsContent value="criar" className="space-y-6">
            {/* Social Login */}
            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                G
              </div>
              Cadastrar com Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">ou</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Form */}
            <div className="space-y-4">
              <Input
                label="Nome completo"
                icon={User}
                placeholder="Seu nome"
                {...register('name')}
              />
              <Input
                label="Email"
                icon={Mail}
                placeholder="seu@email.com"
                {...register('email')}
              />
              <Input
                label="Senha"
                type="password"
                icon={Lock}
                placeholder="••••••••"
                helperText="Mínimo de 6 caracteres"
                {...register('password')}
              />
            </div>

            <Button className="h-12 w-full rounded-xl bg-blue-800 font-semibold text-white hover:bg-blue-900">
              Criar conta
            </Button>

            <p className="mt-4 px-4 text-center text-xs leading-tight text-slate-500">
              Ao criar uma conta, você concorda com nossos termos de uso e
              política de privacidade
            </p>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
