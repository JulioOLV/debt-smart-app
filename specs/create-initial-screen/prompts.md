# Spec

@workspace Atue como um Senior Frontend Engineer especialista em UX/UI.

Gostaria de implementar a interface da tela de **Onboarding/Welcome** (Rota `/welcome` ou a inicial se for o primeiro acesso) baseada no design anexado.

CONTEXTO TÉCNICO:

- Stack: React + Vite + TailwindCSS v4 + Radix UI.
- Roteamento: TanStack Router.
- Ícones: Lucide React.
- Estilo: Mobile-first, Clean, "Bottom-heavy" (ações ao alcance do polegar).

ESPECIFICAÇÃO VISUAL (WIREFRAME TEXTUAL):
Por favor, siga estritamente esta hierarquia visual para replicar o design da imagem:

1. [Page Container] (h-screen, w-full, flex flex-col, bg-background)
   |
   +-- 2. [Hero Section] (Flex-1, min-h-[45%], bg-blue-200/30 relative overflow-hidden)
   | |-- Nota: Esta área contém a ilustração. Como não temos o SVG, use uma
   | | `div` placeholder com um gradiente suave ou cor sólida (bg-blue-100).
   | | Se possível, adicione um ícone genérico grande centralizado (ex: `Sun` ou `TrendingUp`)
   | | para simular a ilustração de "montanhas/sucesso".
   |
   +-- 3. [Content Section] (Flex-1, bg-white, px-6, pt-8, pb-6, flex flex-col justify-between)
   |
   +-- 4. [Typography Group] (space-y-4)
   | |-- H1 "Vamos retomar o controle?" (text-3xl, font-bold, text-slate-900, leading-tight)
   | |-- P Descritivo (text-slate-500, text-base, leading-relaxed)
   | Texto: "Não importa o tamanho do desafio, existe um caminho para sair dele. O Respiro organiza tudo e te diz exatamente qual o melhor passo a dar hoje."
   | _Importante:_ A palavra "Respiro" deve estar em verde (text-emerald-600 font-medium).
   |
   +-- 5. [Footer Actions] (space-y-4)
   |-- [Primary Button] (w-full, h-14, rounded-xl, bg-blue-800, text-white, font-semibold, text-lg)
   | Texto: "Começar meu plano"
   | Hover: bg-blue-900
   |
   |-- [Security Note] (flex items-center justify-center gap-2, text-xs, text-slate-400)
   |-- Icon: `Lock` (w-3 h-3)
   |-- Texto: "Seus dados são 100% confidenciais e criptografados."

INSTRUÇÕES DE IMPLEMENTAÇÃO:

1. Crie o componente `src/routes/welcome.tsx` (ou ajuste o index se for a home).
2. Para o botão "Começar meu plano", ele deve ser um `<Link>` do TanStack Router apontando para a próxima etapa (ex: `/register` ou `/onboarding/step-1`).
3. Use o componente `Button` que criamos anteriormente (variant='default'), mas ajuste as classes via `className` se precisar forçar o `h-14` e `rounded-xl` para ficar idêntico à imagem.
4. Garanta que em telas maiores (desktop), este layout fique centralizado como um "Card Mobile" (max-w-md mx-auto, shadow-xl, my-auto), para não esticar infinitamente.

Gere o spec completo incluindo a mesma descrição do wireframe no diretório 'specs/create-initial-screen' e utilize como template de spec 'specs/templates/spec-template.md'.

Neste momento, crie apenas o spec dentro do diretório que lhe informei.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

# Plan

Agora utilize a spec criada anteriormente 'specs/create-initial-screen/spec.md', e crie um plan para realizarmos a implementação desta feature.

Para o plan, utilize como template o arquivo de template 'specs/templates/plan-template.md'. Para relembrar, o wireframe que deve ser seguido é este:

1. [Page Container] (h-screen, w-full, flex flex-col, bg-background)
   |
   +-- 2. [Hero Section] (Flex-1, min-h-[45%], bg-blue-200/30 relative overflow-hidden)
   | |-- Nota: Esta área contém a ilustração. Como não temos o SVG, use uma
   | | `div` placeholder com um gradiente suave ou cor sólida (bg-blue-100).
   | | Se possível, adicione um ícone genérico grande centralizado (ex: `Sun` ou `TrendingUp`)
   | | para simular a ilustração de "montanhas/sucesso".
   |
   +-- 3. [Content Section] (Flex-1, bg-white, px-6, pt-8, pb-6, flex flex-col justify-between)
   |
   +-- 4. [Typography Group] (space-y-4)
   | |-- H1 "Vamos retomar o controle?" (text-3xl, font-bold, text-slate-900, leading-tight)
   | |-- P Descritivo (text-slate-500, text-base, leading-relaxed)
   | Texto: "Não importa o tamanho do desafio, existe um caminho para sair dele. O Respiro organiza tudo e te diz exatamente qual o melhor passo a dar hoje."
   | _Importante:_ A palavra "Respiro" deve estar em verde (text-emerald-600 font-medium).
   |
   +-- 5. [Footer Actions] (space-y-4)
   |-- [Primary Button] (w-full, h-14, rounded-xl, bg-blue-800, text-white, font-semibold, text-lg)
   | Texto: "Começar meu plano"
   | Hover: bg-blue-900
   |
   |-- [Security Note] (flex items-center justify-center gap-2, text-xs, text-slate-400)
   |-- Icon: `Lock` (w-3 h-3)
   |-- Texto: "Seus dados são 100% confidenciais e criptografados."

Também deixei uma imagem em anexo para facilitar o seu entendimento visual.

Crie um arquivo chamado plan.md no diretório 'specs/create-initial-screen'.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

# Implementação

Atue como Senior Frontend Engineer. Vamos iniciar a implementação da feature descrita nestes arquivos.

Siga estritamente o ‘specs/create-initial-screen/plan.md’.

Requisitos de execução:

1. Crie o arquivo `src/routes/welcome.tsx` usando a sintaxe do TanStack Router (`createFileRoute`).
2. Implemente a estrutura HTML/Tailwind exatamente como definido na spec e plan:
   1. [Page Container] (h-screen, w-full, flex flex-col, bg-background)
      |
      +-- 2. [Hero Section] (Flex-1, min-h-[45%], bg-blue-200/30 relative overflow-hidden)
      | |-- Nota: Esta área contém a ilustração. Como não temos o SVG, use uma
      | | `div` placeholder com um gradiente suave ou cor sólida (bg-blue-100).
      | | Se possível, adicione um ícone genérico grande centralizado (ex: `Sun` ou `TrendingUp`)
      | | para simular a ilustração de "montanhas/sucesso".
      |
      +-- 3. [Content Section] (Flex-1, bg-white, px-6, pt-8, pb-6, flex flex-col justify-between)
      |
      +-- 4. [Typography Group] (space-y-4)
      | |-- H1 "Vamos retomar o controle?" (text-3xl, font-bold, text-slate-900, leading-tight)
      | |-- P Descritivo (text-slate-500, text-base, leading-relaxed)
      | Texto: "Não importa o tamanho do desafio, existe um caminho para sair dele. O Respiro organiza tudo e te diz exatamente qual o melhor passo a dar hoje."
      | _Importante:_ A palavra "Respiro" deve estar em verde (text-emerald-600 font-medium).
      |
      +-- 5. [Footer Actions] (space-y-4)
      |-- [Primary Button] (w-full, h-14, rounded-xl, bg-blue-800, text-white, font-semibold, text-lg)
      | Texto: "Começar meu plano"
      | Hover: bg-blue-900
      |
      |-- [Security Note] (flex items-center justify-center gap-2, text-xs, text-slate-400)
      |-- Icon: `Lock` (w-3 h-3)
      |-- Texto: "Seus dados são 100% confidenciais e criptografados."
3. Use componentes do diretório `@/components/ui` (Button) onde aplicável.
4. Se aplicável, crie um componente de Typograph com Radix UI dentro do diretório `@/components/ui`.
5. Para a área da imagem (Hero Section), use um placeholder elegante com Tailwind por enquanto, conforme instruído na spec.

Não implemente a lógica de navegação ou testes ainda, foque apenas na fidelidade visual e estrutura da rota.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.
