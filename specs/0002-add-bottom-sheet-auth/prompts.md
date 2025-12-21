# Spec

Gostaria de implementar um Bottom Sheet de autenticação dentro da minha tela de Onboarding (rota /walcome). Este Bottom Sheet deve aparecer assim que o usuário clicar no botão "Começar meu plano".

O Bottom Sheet deve seguir a seguinte estrutura de layout:

CONTEXTO TÉCNICO:

- Stack: React + Vite + TailwindCSS v4 + Radix UI.
- Roteamento: TanStack Router.
- Ícones: Lucide React.
- Estilo: Mobile-first, Clean, "Bottom-heavy" (ações ao alcance do polegar).

ESPECIFICAÇÃO VISUAL (WIREFRAME TEXTUAL):
Por favor, siga estritamente esta hierarquia visual para replicar o design da imagem:

Bottom Sheet **Estado:** Usuário selecionou a aba "Entrar".
[Page Container] (relative, h-screen, w-full, overflow-hidden)
|
+-- 2. [Background Layer] (absolute, inset-0, z-0)
| |-- Nota: Placeholder `bg-slate-200` ou imagem `object-cover` (ilustração montanhas).
|
+-- 3. [Modal Overlay] (absolute, inset-0, bg-black/40, z-10, flex items-end justify-center)
|
+-- 4. [Bottom Sheet] (w-full, max-w-md, bg-white, rounded-t-[32px], p-6, animate-slide-up, z-20)
|
+-- 5. [Header] (flex justify-between items-center, mb-6)
| |-- H2 "Bem-vindo de volta" (text-xl, font-bold, text-slate-900)
| |-- [Close Button] (p-2, hover:bg-slate-100, rounded-full)
| |-- Icon: `X` (w-5 h-5, text-slate-400)
|
+-- 6. [Segmented Control] (flex, p-1, bg-slate-100, rounded-xl, mb-6)
| |-- [Tab: Entrar] (flex-1, py-2.5, bg-white, rounded-lg, shadow-sm, text-center)
| | |-- Texto: "Entrar" (text-sm, font-semibold, text-slate-900)
| |
| |-- [Tab: Criar] (flex-1, py-2.5, text-center, cursor-pointer)
| |-- Texto: "Criar conta" (text-sm, font-medium, text-slate-500)
|
+-- 7. [Social Login] (w-full, h-12, border border-slate-200, rounded-xl, flex center gap-3)
| |-- Icon: `Google Logo` (w-5 h-5)
| |-- Texto: "Entrar com Google" (text-slate-700, font-medium)
|
+-- 8. [Divider] (flex items-center gap-4, my-6)
| |-- Line (h-px, flex-1, bg-slate-200)
| |-- Text "ou" (text-xs, text-slate-400)
| |-- Line (h-px, flex-1, bg-slate-200)
|
+-- 9. [Form Group] (space-y-4)
| |-- [Input: Email]
| | |-- Label "Email" (block, text-sm, font-medium, text-slate-700)
| | |-- Icon `Mail` (absolute left-3.5)
| | |-- Input (pl-11, h-12, rounded-xl, border-slate-200)
| |
| |-- [Input: Senha]
| |-- Label "Senha"
| |-- Icon `Lock` (absolute left-3.5)
| |-- Input (type="password", pl-11, h-12, rounded-xl, border-slate-200)
|
+-- 10. [Primary Button] (w-full, h-12, bg-blue-800, text-white, rounded-xl, font-semibold, mt-6)
|-- Texto: "Entrar"
|-- Hover: bg-blue-900

Bottom Sheet **Estado:** Usuário selecionou a aba "Criar".
[Page Container] (relative, h-screen, w-full, overflow-hidden)
|
+-- (Mesmo Background e Overlay do Login)
|
+-- 4. [Bottom Sheet] (w-full, max-w-md, bg-white, rounded-t-[32px], p-6, animate-slide-up, z-20)
|
+-- 5. [Header] (flex justify-between items-center, mb-6)
| |-- H2 "Criar conta" (text-xl, font-bold, text-slate-900)
| |-- [Close Button] (Icon: `X`)
|
+-- 6. [Segmented Control] (flex, p-1, bg-slate-100, rounded-xl, mb-6)
| |-- [Tab: Entrar] (flex-1, py-2.5, text-center, cursor-pointer)
| | |-- Texto: "Entrar" (text-sm, font-medium, text-slate-500)
| |
| |-- [Tab: Criar] (flex-1, py-2.5, bg-white, rounded-lg, shadow-sm, text-center)
| |-- Texto: "Criar conta" (text-sm, font-semibold, text-slate-900)
|
+-- 7. [Social Login] (w-full, h-12, border border-slate-200, rounded-xl, flex center gap-3)
| |-- Icon: `Google Logo`
| |-- Texto: "Cadastrar com Google"
|
+-- 8. [Divider] ("ou")
|
+-- 9. [Form Group] (space-y-4)
| |-- [Input: Nome]
| | |-- Label "Nome completo"
| | |-- Icon `User` (absolute left-3.5)
| | |-- Input (pl-11, h-12, rounded-xl, border-slate-200)
| |
| |-- [Input: Email]
| | |-- Label "Email"
| | |-- Icon `Mail`
| | |-- Input (pl-11, h-12)
| |
| |-- [Input: Senha]
| |-- Label "Senha"
| |-- Icon `Lock`
| |-- Input (type="password", pl-11, h-12)
| |-- Helper Text (text-xs, text-slate-500, mt-1)
| Texto: "Mínimo de 6 caracteres"
|
+-- 10. [Primary Button] (w-full, h-12, bg-blue-800, text-white, rounded-xl, font-semibold, mt-6)
| |-- Texto: "Criar conta"
|
+-- 11. [Legal Disclaimer] (mt-4, text-center, px-4)
|-- P Texto (text-[10px] or text-xs, text-slate-500, leading-tight)
Texto: "Ao criar uma conta, você concorda com nossos termos de uso e política de privacidade"

Gere o spec completo incluindo a mesma descrição do wireframe no diretório 'specs/0002-add-bottom-sheet-auth' e utilize como template de spec '.specify/templates/spec-template.md'.

Neste momento, crie apenas o spec dentro do diretório que lhe informei e foque apenas na criação do layout (integração com o Google Auth ou integrações com APIs nós faremos em um outro momento).

Caso não exista todos os componentes primitivos necessários para a criação do Bottom Sheet, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui'.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

# Plan

Agora utilize a spec criada anteriormente 'specs/0002-add-bottom-sheet-auth/spec.md', e crie um plan para realizarmos a implementação desta feature.

Para o plan, utilize como template o arquivo de template '.specify/templates/plan-template.md'. Para relembrar, o wireframe que deve ser seguido esta dentro do spec na seção "Wireframe Description".

Novamente, caso não existam todos os componentes primitivos necessários para a criação deste Bottom Sheet, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui' seguindo as boas práticas e regras do Radix UI.

Crie um arquivo chamado plan.md no diretório 'specs/0002-add-bottom-sheet-auth'.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

Adicione uma seção no documento de plan que criamos com todas as tasks necessárias (passo a passo) para a criação deste Bottom Sheet.

# Implementation

Atue como Senior Frontend Engineer.

Vamos iniciar a implementação da feature descrita nestes arquivos (specs/0002-add-bottom-sheet-auth/plan.md e specs/0002-add-bottom-sheet-auth/spec.md).

Siga estritamente o ‘specs/0002-add-bottom-sheet-auth/plan.md’.

Não implemente a lógica de navegação ou testes ainda, foque apenas na fidelidade visual e estrutura do Bottom Sheet.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.
