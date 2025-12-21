# Feature Specification: Create Initial Screen (Onboarding/Welcome)

**Feature Branch**: `[001-create-initial-screen]`  
**Created**: 2024-10-10  
**Status**: Draft  
**Input**: User description: "Atue como um Senior Frontend Engineer especialista em UX/UI. Gostaria de implementar a interface da tela de Onboarding/Welcome (Rota `/welcome` ou a inicial se for o primeiro acesso) baseada no design anexado. CONTEXTO TÉCNICO: - Stack: React + Vite + TailwindCSS v4 + Radix UI. - Roteamento: TanStack Router. - Ícones: Lucide React. - Estilo: Mobile-first, Clean, 'Bottom-heavy' (ações ao alcance do polegar). ESPECIFICAÇÃO VISUAL (WIREFRAME TEXTUAL): Por favor, siga estritamente esta hierarquia visual para replicar o design da imagem: 1. [Page Container] (h-screen, w-full, flex flex-col, bg-background) | +-- 2. [Hero Section] (Flex-1, min-h-[45%], bg-blue-200/30 relative overflow-hidden) | |-- Nota: Esta área contém a ilustração. Como não temos o SVG, use uma | | `div` placeholder com um gradiente suave ou cor sólida (bg-blue-100). | | Se possível, adicione um ícone genérico grande centralizado (ex: `Sun` ou `TrendingUp`) | | para simular a ilustração de 'montanhas/sucesso'. | +-- 3. [Content Section] (Flex-1, bg-white, px-6, pt-8, pb-6, flex flex-col justify-between) | +-- 4. [Typography Group] (space-y-4) | |-- H1 'Vamos retomar o controle?' (text-3xl, font-bold, text-slate-900, leading-tight) | |-- P Descritivo (text-slate-500, text-base, leading-relaxed) | Texto: 'Não importa o tamanho do desafio, existe um caminho para sair dele. O Respiro organiza tudo e te diz exatamente qual o melhor passo a dar hoje.' | _Importante:_ A palavra 'Respiro' deve estar em verde (text-emerald-600 font-medium). | +-- 5. [Footer Actions] (space-y-4) |-- [Primary Button] (w-full, h-14, rounded-xl, bg-blue-800, text-white, font-semibold, text-lg) | Texto: 'Começar meu plano' | Hover: bg-blue-900 | |-- [Security Note] (flex items-center justify-center gap-2, text-xs, text-slate-400) |-- Icon: `Lock` (w-3 h-3) |-- Texto: 'Seus dados são 100% confidenciais e criptografados.' INSTRUÇÕES DE IMPLEMENTAÇÃO: 1. Crie o componente `src/routes/welcome.tsx` (ou ajuste o index se for a home). 2. Para o botão 'Começar meu plano', ele deve ser um `<Link>` do TanStack Router apontando para a próxima etapa (ex: `/register` ou `/onboarding/step-1`). 3. Use o componente `Button` que criamos anteriormente (variant='default'), mas ajuste as classes via `className` se precisar forçar o `h-14` e `rounded-xl` para ficar idêntico à imagem. 4. Garanta que em telas maiores (desktop), este layout fique centralizado como um 'Card Mobile' (max-w-md mx-auto, shadow-xl, my-auto), para não esticar infinitamente."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Display Welcome Screen on First Access (Priority: P1)

As a new user accessing the app for the first time, I want to see a welcoming onboarding screen that introduces the app's purpose and encourages me to start my debt management plan, so that I feel motivated and guided to take the first step.

**Why this priority**: This is the entry point for new users, critical for user engagement and conversion to active usage. Without this screen, users may not understand the app's value or how to proceed.

**Independent Test**: Can be fully tested by navigating to the root route (`/`) or `/welcome` and verifying the screen displays the hero section, typography, button, and security note as specified, without requiring any prior user data or interactions.

**Acceptance Scenarios**:

1. **Given** the user is accessing the app for the first time (no prior session or data), **When** they load the app, **Then** the welcome screen is displayed with the hero section at the top, content section below, and all elements match the wireframe hierarchy.
2. **Given** the welcome screen is loaded, **When** the user views the screen on a mobile device, **Then** the layout is mobile-first, with actions positioned for thumb accessibility, and the hero section takes at least 45% of the screen height.
3. **Given** the welcome screen is loaded, **When** the user views the screen on a desktop, **Then** the layout is centered as a mobile-like card (max-width medium, with shadow), preventing infinite stretching.

---

### User Story 2 - Interact with Start Plan Button (Priority: P2)

As a user on the welcome screen, I want to click the "Começar meu plano" button to proceed to the next step in onboarding, so that I can begin setting up my debt management plan.

**Why this priority**: This enables progression from the welcome screen to actionable features, supporting user flow and reducing drop-off.

**Independent Test**: Can be fully tested by clicking the button and verifying navigation to the next route (e.g., `/register` or `/onboarding/step-1`), delivering value by allowing users to start their plan independently.

**Acceptance Scenarios**:

1. **Given** the welcome screen is displayed, **When** the user clicks the "Começar meu plano" button, **Then** they are navigated to the next onboarding step (e.g., registration or step 1).
2. **Given** the button is hovered on supported devices, **When** the user hovers, **Then** the button background changes to a darker blue (bg-blue-900) for visual feedback.

---

### User Story 3 - View Security Assurance (Priority: P3)

As a user concerned about data privacy, I want to see a security note on the welcome screen assuring me that my data is confidential and encrypted, so that I feel safe proceeding.

**Why this priority**: Builds trust, which is important for a finance-related app, but secondary to core functionality like displaying the screen and enabling progression.

**Independent Test**: Can be fully tested by verifying the presence and correct display of the security note with the lock icon, delivering value by reassuring users about privacy without additional features.

**Acceptance Scenarios**:

1. **Given** the welcome screen is displayed, **When** the user views the footer actions, **Then** the security note is visible with a lock icon and the text "Seus dados são 100% confidenciais e criptografados."

### Edge Cases

- What happens when the user refreshes the page or navigates back to the welcome screen after starting the plan? (Should redirect or show based on user state, but for MVP, assume it's only for first access.)
- How does the system handle slow loading of the hero section illustration placeholder? (Ensure the layout remains stable with a fallback gradient or icon.)
- What if the screen is viewed on very small screens (e.g., <320px width)? (Layout should scale responsively without breaking the hierarchy.)

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST display the welcome screen as the initial route (`/` or `/welcome`) for first-time users, following the exact wireframe hierarchy: Page Container (full screen, flex column), Hero Section (top 45% min height, blue background with placeholder illustration), Content Section (bottom, white background), Typography Group (heading and description with "Respiro" highlighted in green), Footer Actions (button and security note).
- **FR-002**: System MUST render the hero section with a placeholder (e.g., blue gradient or solid color) and a large centered icon (e.g., `TrendingUp` from Lucide React) to simulate an illustration of success/mountains.
- **FR-003**: System MUST display the heading "Vamos retomar o controle?" in bold, large text (text-3xl), and the descriptive paragraph with "Respiro" in emerald green and medium font weight.
- **FR-004**: System MUST include a primary button "Começar meu plano" that is full-width, tall (h-14), rounded (rounded-xl), blue background (bg-blue-800), with hover effect (bg-blue-900), and navigates to the next step (e.g., `/register` or `/onboarding/step-1`) using TanStack Router's Link.
- **FR-005**: System MUST show a security note below the button with a lock icon (`Lock` from Lucide React) and text "Seus dados são 100% confidenciais e criptografados." in small, muted text.
- **FR-006**: System MUST ensure mobile-first responsiveness, with the layout centered on desktop as a card (max-w-md, mx-auto, shadow-xl, my-auto) to mimic a mobile screen.
- **FR-007**: System MUST use the existing `Button` component from the UI library, overriding styles via `className` for height and rounding if needed to match the wireframe.

### Key Entities _(include if feature involves data)_

- **Welcome Screen Entity**: Represents the onboarding interface, with attributes like hero illustration placeholder, heading text, description text, button label, security note text, and navigation target route. No persistent data storage required for this feature.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% of new users loading the app see the welcome screen displayed correctly on mobile devices, with the hero section occupying at least 45% of the viewport height.
- **SC-002**: Users can click the "Começar meu plano" button and navigate to the next step within 2 seconds on standard devices.
- **SC-003**: On desktop, the welcome screen is centered as a card without horizontal stretching, maintaining a mobile-like appearance.
- **SC-004**: The security note is visible and legible on all screen sizes, contributing to a 90% user satisfaction rate in initial usability tests regarding trust and clarity.
