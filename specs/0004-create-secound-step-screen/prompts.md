Spec

Crie o documento de spec para a criação da terceira tela do nosso app. Para isso, utilize o template '.specify/templates/spec-template.md' como base para criar o documento. Siga estas especificações:

- Deve ter uma navbar de navegação para orientar os users
  - No navbar deve haver um button icon para que o usuário retorne para o step anterior
  - No navbar deve haver o step Count onde deve estar informando o usuário que o mesmo esta no step 2
  - No navbar logo abaixo vai haver um progress bar que indica a progressão do usuário durante o percurso
- Deve haver um titulo com a mensagem “Vamos colocar tudo no papel”
- Logo a baixo do titulo deve haver um subtítulo com o seguinte texto “Liste todas as suas pendências. Não se assuste com o total agora; o objetivo é organizar.”
- No centro abaixo do subtítulo deve haver uma imagem de uma caixa vazia com um + no centro da caixa
- Abaixo desta imagem deve haver um texto “Comece adicionando sua primeira conta ou dívida”
- Abaixo deste texto deve haver um button “+ Adicionar primeira conta”
  - Quando o usuário clicar neste button deve ser aberto um Bottom Sheet para que o usuário possa cadastrar a sua dívida
    - Não será necessário criar o bottom sheet neste momento, foque apenas na estrutura inicial da tela

Caso não exista todos os componentes primitivos necessários para a criação da segunda tela, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui'.

Crie apenas este spec dentro do diretório ‘specs/0004-create-secound-step-screen’.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

Plan

Agora utilize a spec criada anteriormente 'specs/0004-create-secound-step-screen/spec.md', e crie um plan para realizarmos a implementação desta feature.

Para o plan, utilize como template o arquivo de template '.specify/templates/plan-ui-template.md'.

CONTEXTO TÉCNICO:

- Stack: React + Vite + TailwindCSS v4 + Radix UI.
- Roteamento: TanStack Router.
- Ícones: Lucide React.
- Estilo: Mobile-first, Clean, "Bottom-heavy" (ações ao alcance do polegar).

ESPECIFICAÇÃO VISUAL (WIREFRAME TEXTUAL):
Por favor, siga estritamente esta hierarquia visual para replicar o design da imagem:

**[Tag: Div (Page Container)]** (min-h-screen bg-slate-50 flex flex-col font-sans antialiased) | +-- 1. **[Tag: Header]** (bg-white pt-6 pb-2 px-4 sticky top-0 z-10) | |-- [Nav Container] (flex justify-between items-center mb-4) | | |-- [Button: Voltar] (flex items-center gap-2 text-slate-700 hover:text-slate-900 p-1 -ml-1 | a11y: aria-label="Voltar para a etapa anterior", role="button") | | | |-- [Icon: Arrow Left] (w-5 h-5) | | | |-- [Text] (font-medium | content="Voltar") | | | | | |-- [Text: Step Count] (text-sm font-medium text-slate-500 | aria-hidden="true" content="Passo 2 de 3") | | | |-- [Component: Progress Bar] (w-full h-1.5 bg-slate-100 rounded-full overflow-hidden | a11y: role="progressbar", aria-valuenow="66", aria-valuemin="0", aria-valuemax="100", aria-label="Progresso do cadastro: etapa 2 de 3") | |-- [Div: Fill] (w-2/3 h-full bg-blue-700 rounded-full) | +-- 2. **[Tag: Main]** (flex-1 flex flex-col px-6 pt-8 pb-6) |-- [Section: Intro Typography] (mb-8) | |-- [H1: Title] (text-2xl font-bold text-slate-900 mb-3 tracking-tight | a11y: tabindex="-1" para foco programático se necessário) | | | content="Vamos colocar tudo no papel." | | | |-- [P: Description] (text-base text-slate-600 leading-relaxed) | | content="Liste todas as suas pendências. Não se assuste com o total agora; o objetivo é organizar." | |-- [Section: Empty State] (flex-1 flex flex-col items-center justify-center gap-6 py-4 opacity-100 transition-opacity) | |-- [SVG: Illustration] (w-32 h-32 text-blue-200 | a11y: aria-hidden="true" role="img") | | | _Nota: Ícone de caixa/arquivo com contorno tracejado e símbolo de adição_ | | | |-- [P: Helper Text] (text-center text-slate-500 max-w-[240px] leading-snug) | | content="Comece adicionando sua primeira conta ou dívida" | +-- 3. **[Tag: Footer]** (px-6 pb-8 pt-4 mt-auto bg-slate-50) |-- [Button: Primary Add] (w-full bg-blue-800 hover:bg-blue-900 active:bg-blue-950 text-white font-semibold py-3.5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] | a11y: type="button", aria-label="Adicionar primeira conta à lista") |-- [Icon: Plus] (w-5 h-5) |-- [Text] (content="Adicionar primeira conta")

Novamente, caso não existam todos os componentes primitivos necessários para a criação desta nova tela, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui' seguindo as boas práticas e regras do Radix UI.

Descreva todas as tasks necessárias (passo a passo) para a criação desta feature na seção de tasks do documento.

Crie apenas um arquivo chamado plan.md no diretório 'specs/0004-create-secound-step-screen'.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.

Implementation

Atue como Senior Frontend Engineer.

Vamos iniciar a implementação da feature descrita nestes arquivos (specs/0004-create-secound-step-screen/plan.md e specs/0004-create-secound-step-screen/spec.md).

Siga estritamente o ‘specs/0004-create-secound-step-screen/plan.md.

Não implemente a lógica de navegação ou testes ainda, foque apenas na fidelidade visual e estrutura da nova tela.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte.
