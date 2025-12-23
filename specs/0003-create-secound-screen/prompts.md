Specs

Crie o documento de spec para a criação da segunda tela do nosso app. Para isso, utilize o template '.specify/templates/spec-ui-template.md' como base para criar o documento. Siga estas especificações:

- A tela deve ter dois inputs:
  - O primeiro input será responsável por guardar o valor da renda mensal do usuário
  - O segundo input deve ficar Hidden (escondido) até que o usuário forneça um valor correto para o primeiro input
    - O input deve aparecer na tela com uma animação fade-in-top
  - Ambos os inputs devem ter máscara de dados, ou seja, deve aceitar apenas número; no mobile deve priorizar a abertura do teclado numérico; quando o usuário digitar os valores, a máscara de currency deve ser aplicada durante a digitação; por enquanto vamos usar máscara monetária apenas para pt-br
  - Caso o usuário apague o valor do primeiro input após ter digitado, o segundo input deve permanecer visível na tela
- A tela também vai ter um botão ‘Próximo: Listar pendências’:
  - O botão deve aparecer disabled até que o usuário informe os valores para os dois inputs; o botão só ficará disponível para click apenas se tivermos os valores para os dois inputs

CONTEXTO TÉCNICO:

- Stack: React + Vite + TailwindCSS v4 + Radix UI.
- Roteamento: TanStack Router.
- Ícones: Lucide React.
- Estilo: Mobile-first, Clean, "Bottom-heavy" (ações ao alcance do polegar).

ESPECIFICAÇÃO VISUAL (WIREFRAME TEXTUAL):
Por favor, siga estritamente esta hierarquia visual para replicar o design da imagem:

# Wireframe Textual: Passo 1 do Onboarding

**[Page Container]** (h-screen, w-full, flex flex-col, bg-slate-50/30)
|
+-- 1. **[Header Navigation]** (w-full, px-4, pt-6, pb-2, flex justify-between items-center)
| |-- **[Back Button]** (flex items-center, gap-1, text-slate-600)
| | |-- Icon: `ArrowLeft` (w-5, h-5)
| | |-- Texto: "Voltar" (text-sm, font-medium)
| |-- **[Step Indicator]** (text-slate-400, text-sm, font-medium)
| |-- Texto: "Passo 1 de 3"
|
+-- 2. **[Progress Bar Container]** (w-full, px-4, mt-2)
| |-- **[Track]** (h-1.5, w-full, bg-slate-200, rounded-full, overflow-hidden)
| |-- **[Fill]** (h-full, w-[33%], bg-blue-600)
|
+-- 3. **[Main Content Section]** (flex-1, px-8, pt-12, space-y-8)
| |
| +-- **[Typography Group]** (space-y-4)
| | |-- H1 "Primeiro, vamos entender seu cenário real." (text-3xl, font-bold, text-slate-900, leading-tight)
| | |-- P Descritivo (text-slate-500, text-base, leading-relaxed)
| | Texto: "Para criar uma estratégia que funcione, precisamos saber quanto entra e quanto custa o seu 'básico' para viver."
| |
| +-- **[Form Group]** (space-y-6)
| |
| +-- **[Input Field: Income]** (space-y-2)
| | |-- Label: "Qual sua renda mensal líquida?" (font-semibold, text-slate-900)
| | |-- Input: (w-full, h-16, px-4, rounded-2xl, border-2, border-blue-600, bg-white, text-2xl, font-medium, text-slate-900)
| | | |-- Valor: "R$ 11.000,00"
| | |-- Helper: "O valor que cai na conta (Salário, extras, bicos...)" (text-sm, text-slate-400)
| |
| +-- **[Input Field: Essential]** (space-y-2)
| | |-- Label: "Quanto você gasta com o essencial?" (font-semibold, text-slate-900)
| | |-- Input: (w-full, h-16, px-4, rounded-2xl, border, border-slate-200, bg-slate-100/50, text-2xl, font-medium, text-slate-300)
| | |-- Placeholder: "R$ 0,00"
| |
| +-- **[Info Alert Box]** (flex, gap-3, p-4, rounded-2xl, bg-blue-50)
| |-- Icon: `Info` (w-5, h-5, text-blue-500, flex-shrink-0)
| |-- Texto: "Considere apenas o indispensável para sobreviver..." (text-sm, text-blue-800, leading-snug)
|
+-- 4. **[Footer Action]** (p-6, bg-white, border-t, border-slate-100)
|-- **[Primary Button: Disabled]** (w-full, h-14, rounded-2xl, bg-slate-200, text-slate-400, font-semibold, text-base)
|-- Texto: "Próximo: Listar pendências"

Caso não exista todos os componentes primitivos necessários para a criação da segunda tela, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui'.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

Plan

Agora utilize a spec criada anteriormente 'specs/0003-create-secound-screen/spec.md', e crie um plan para realizarmos a implementação desta feature.

Para o plan, utilize como template o arquivo de template '.specify/templates/plan-template.md'. Para relembrar, o wireframe que deve ser seguido esta dentro do spec na seção "Wireframe Description".

Novamente, caso não existam todos os componentes primitivos necessários para a criação desta nova tela, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui' seguindo as boas práticas e regras do Radix UI.

Adicione uma seção no documento de plan que criamos com todas as tasks necessárias (passo a passo) para a criação desta feature.

Crie um arquivo chamado plan.md no diretório 'specs/0003-create-secound-screen'.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

Implementation

Atue como Senior Frontend Engineer.

Vamos iniciar a implementação da feature descrita nestes arquivos (specs/0003-create-secound-screen/plan.md e specs/0003-create-secound-screen/spec.md).

Siga estritamente o ‘specs/0003-create-secound-screen/plan.md.

Não implemente a lógica de navegação ou testes ainda, foque apenas na fidelidade visual e estrutura da nova tela.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.
