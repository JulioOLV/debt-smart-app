# Feature Specification: Add Bottom Sheet Auth

**Feature Branch**: `[0002-add-bottom-sheet-auth]`  
**Created**: 21 de dezembro de 2025  
**Status**: Draft  
**Input**: User description: "Goataria de implementar um Bottom Sheet de autenticação dentro da minha tela de Onboarding (rota /welcome). Este Bottom Sheet deve aparecer assim que o usuário clicar no botão "Começar meu plano". O Bottom Sheet deve seguir a seguinte estrutura de layout: [detalhes fornecidos]"

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Implementar Bottom Sheet de Entrar (Priority: P1)

Como usuário na tela de Onboarding, quando clico no botão "Começar meu plano", desejo ver um Bottom Sheet com a opção de entrar na conta existente, para acessar rapidamente minha conta.

**Why this priority**: Esta é a funcionalidade principal de autenticação para usuários existentes, permitindo acesso rápido ao app.

**Independent Test**: Pode ser testado independentemente verificando se o Bottom Sheet aparece com a aba "Entrar" selecionada por padrão, e se o formulário de login está funcional (layout apenas, sem integração).

**Acceptance Scenarios**:

1. **Given** o usuário está na rota /welcome, **When** clica no botão "Começar meu plano", **Then** o Bottom Sheet aparece com a aba "Entrar" ativa.
2. **Given** o Bottom Sheet está aberto na aba "Entrar", **When** o usuário interage com os campos de email e senha, **Then** o layout responde corretamente (sem validação ainda).

---

### User Story 2 - Implementar Bottom Sheet de Criar Conta (Priority: P2)

Como novo usuário na tela de Onboarding, quando clico no botão "Começar meu plano" e alterno para a aba "Criar conta", desejo ver um formulário para criar uma nova conta, para começar a usar o app.

**Why this priority**: Permite onboarding de novos usuários, expandindo a base de usuários.

**Independent Test**: Pode ser testado independentemente alternando para a aba "Criar conta" e verificando se o formulário aparece com os campos corretos (nome, email, senha).

**Acceptance Scenarios**:

1. **Given** o Bottom Sheet está aberto, **When** clico na aba "Criar conta", **Then** o conteúdo muda para o formulário de criação de conta.
2. **Given** estou na aba "Criar conta", **When** preencho os campos, **Then** o layout mantém a estrutura especificada.

---

### Edge Cases

- O que acontece se o usuário tentar fechar o Bottom Sheet sem interagir? (Deve fechar corretamente)
- Como o Bottom Sheet se comporta em dispositivos móveis vs desktop? (Mobile-first, mas responsivo)
- O que acontece se o usuário alternar abas rapidamente? (Transições suaves)

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST display the Bottom Sheet modal when the user clicks the "Começar meu plano" button on the /welcome route.
- **FR-002**: System MUST show the "Entrar" tab as active by default in the Bottom Sheet.
- **FR-003**: System MUST allow switching between "Entrar" and "Criar conta" tabs in the Segmented Control.
- **FR-004**: For "Entrar" tab: System MUST display social login button with Google, divider, email and password inputs, and "Entrar" button.
- **FR-005**: For "Criar conta" tab: System MUST display social login button with Google, divider, name, email, password inputs (with helper text), "Criar conta" button, and legal disclaimer.
- **FR-006**: System MUST include a close button (X icon) in the header to dismiss the Bottom Sheet.
- **FR-007**: System MUST use the specified visual hierarchy and Tailwind classes for styling.
- **FR-008**: System MUST be mobile-first and follow the "bottom-heavy" design principle.

### Key Entities _(include if feature involves data)_

- **User**: Represents the authenticated user, with attributes like name, email, password (layout only, no data persistence yet).

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Bottom Sheet appears within 0.5 seconds after clicking "Começar meu plano".
- **SC-002**: All specified UI elements (tabs, inputs, buttons) are visible and match the wireframe description.
- **SC-003**: Bottom Sheet closes correctly when clicking the X button or outside the modal.
- **SC-004**: Layout is responsive and works on mobile devices (screen width < 768px).

## Wireframe Description

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
