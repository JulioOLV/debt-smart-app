# Implementation Plan: Create Second Step Screen

**Branch**: `[0004-create-second-step-screen]` | **Date**: 22 de dezembro de 2025 | **Spec**: [specs/0004-create-secound-step-screen/spec.md](specs/0004-create-secound-step-screen/spec.md)
**Input**: Feature specification from `/specs/0004-create-secound-step-screen/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement the second step screen of the onboarding process, featuring a navigation bar with back button, step count, progress bar, title, subtitle, empty state illustration, and an add button that opens a bottom sheet for debt registration. Reuse existing UI components where possible and create new ones if needed in `src/components/ui`.

## Technical Context

**Language/Version**: TypeScript with React 18  
**Primary Dependencies**: React, Vite, TailwindCSS v4, Radix UI, TanStack Router, Lucide React, Zustand  
**Storage**: Zustand store for onboarding state  
**Testing**: Manual testing for UI elements and navigation  
**Target Platform**: Web (mobile-first responsive)  
**Project Type**: Web application (React SPA)  
**Performance Goals**: Screen loads within 2 seconds  
**Constraints**: Mobile-first design, bottom-heavy actions  
**Scale/Scope**: Single screen with navigation and empty state  
**Routing**: TanStack Router  
**Icons**: Lucide React  
**Accessibility (A11y)**: Focus on WCAG 2.1 (Screen readers, keyboard navigation, contrast).  
**Design Pattern**: Mobile-first, Clean, "Bottom-heavy" (actions within thumb reach).

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

[No violations identified; existing components can be reused.]

## Project Structure

### Documentation (this feature)

```text
specs/0004-create-secound-step-screen/
├── plan.md              # This file
├── spec.md              # Existing spec
```

### Source Code (repository root)

```text
src/
├── routes/
│   └── onboarding-step2.tsx  # New route for the second step screen
├── components/
│   └── ui/                   # Existing UI components
│       ├── Button.tsx        # Reuse for back and add buttons
│       ├── ProgressBar.tsx   # Reuse with a11y enhancements
│       └── Sheet.tsx         # Reuse for bottom sheet (structure only)
└── store/
    └── useOnboardingStore.ts # Update if needed for step navigation
```

**Structure Decision**: Following the existing project structure with routes in `src/routes/`, UI components in `src/components/ui/`, and store in `src/store/`. New route `onboarding-step2.tsx` to be created.

### BEHAVIOR & TRIGGERS

- **Trigger**: Navigation from previous step or direct access via router.
- **Initial State**: Screen visible with empty state.
- **Transitions**: Smooth animations for progress bar and potential future interactions.

### VISUAL & SEMANTIC SPECIFICATION

Follow the hierarchy below for implementation:

**[Tag: Div (Page Container)]** (min-h-screen bg-slate-50 flex flex-col font-sans antialiased)  
|  
+-- 1. **[Tag: Header]** (bg-white pt-6 pb-2 px-4 sticky top-0 z-10)  
| |-- [Nav Container] (flex justify-between items-center mb-4)  
| | |-- [Button: Voltar] (flex items-center gap-2 text-slate-700 hover:text-slate-900 p-1 -ml-1 | a11y: aria-label="Voltar para a etapa anterior", role="button")  
| | | |-- [Icon: Arrow Left] (w-5 h-5)  
| | | |-- [Text] (font-medium | content="Voltar")  
| | |  
| | |-- [Text: Step Count] (text-sm font-medium text-slate-500 | aria-hidden="true" content="Passo 2 de 3")  
| |  
| |-- [Component: Progress Bar] (w-full h-1.5 bg-slate-100 rounded-full overflow-hidden | a11y: role="progressbar", aria-valuenow="66", aria-valuemin="0", aria-valuemax="100", aria-label="Progresso do cadastro: etapa 2 de 3")  
| |-- [Div: Fill] (w-2/3 h-full bg-blue-700 rounded-full)  
|  
+-- 2. **[Tag: Main]** (flex-1 flex flex-col px-6 pt-8 pb-6)  
| |-- [Section: Intro Typography] (mb-8)  
| | |-- [H1: Title] (text-2xl font-bold text-slate-900 mb-3 tracking-tight | a11y: tabindex="-1" para foco programático se necessário)  
| | | content="Vamos colocar tudo no papel."  
| | |  
| | |-- [P: Description] (text-base text-slate-600 leading-relaxed)  
| | content="Liste todas as suas pendências. Não se assuste com o total agora; o objetivo é organizar."  
| |  
| |-- [Section: Empty State] (flex-1 flex flex-col items-center justify-center gap-6 py-4 opacity-100 transition-opacity)  
| | |-- [SVG: Illustration] (w-32 h-32 text-blue-200 | a11y: aria-hidden="true" role="img")  
| | | _Nota: Ícone de caixa/arquivo com contorno tracejado e símbolo de adição_  
| | |  
| | |-- [P: Helper Text] (text-center text-slate-500 max-w-[240px] leading-snug)  
| | content="Comece adicionando sua primeira conta ou dívida"  
|  
+-- 3. **[Tag: Footer]** (px-6 pb-8 pt-4 mt-auto bg-slate-50)  
| |-- [Button: Primary Add] (w-full bg-blue-800 hover:bg-blue-900 active:bg-blue-950 text-white font-semibold py-3.5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] | a11y: type="button", aria-label="Adicionar primeira conta à lista")  
| |-- [Icon: Plus] (w-5 h-5)  
| |-- [Text] (content="Adicionar primeira conta")

### ACCESSIBILITY (A11Y) CHECKLIST

- [ ] **Interactive Elements**: `aria-label` or `aria-labelledby` present on all buttons and links.
- [ ] **Focus Management**: Focus trap implemented for Modals/Drawers; focus visible for keyboard users.
- [ ] **Semantics**: Use of correct HTML5 tags (`main`, `nav`, `header`, `section`, `button`).
- [ ] **Description**: `aria-describedby` linking inputs to helper texts or error messages.
- [ ] **Keyboard Navigation**: All interactive elements reachable via `Tab` and activatable via `Enter/Space`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations.

## Tasks

1. **Verify existing UI components**: Confirm that Button, ProgressBar, and Sheet components in `src/components/ui/` meet the requirements. Update ProgressBar if needed to include a11y attributes like `role="progressbar"`, `aria-valuenow`, etc.

2. **Create the onboarding-step2 route**: Create a new file `src/routes/onboarding-step2.tsx` using TanStack Router's `createFileRoute`. Implement the page structure based on the visual specification, reusing components from step1 where possible.

3. **Implement Header section**: Add the header with back button (using ArrowLeft icon), step count text, and progress bar. Ensure the back button navigates to the previous step using TanStack Router.

4. **Implement Main content**: Add the title, subtitle, empty state illustration (use a Lucide icon or SVG for the box with plus), and helper text.

5. **Implement Footer with Add button**: Add the footer with the primary add button using the Button component. For now, make it open a placeholder bottom sheet using the Sheet component (structure only, no full implementation).

6. **Update store if necessary**: Check if `useOnboardingStore` needs updates for step tracking or navigation.

7. **Add navigation logic**: Ensure the back button and potential next navigation work correctly with the router and store.

8. **Test UI elements**: Manually verify all elements display correctly, buttons are interactive, and a11y attributes are present.

9. **Run build/tests**: After implementation, run the build to ensure no errors and test the screen loads within performance goals.
