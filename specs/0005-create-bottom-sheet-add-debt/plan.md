# Implementation Plan: Add Debt Bottom Sheet

**Branch**: `[0005-create-bottom-sheet-add-debt]` | **Date**: 23 de dezembro de 2025 | **Spec**: [specs/0005-create-bottom-sheet-add-debt/spec.md](specs/0005-create-bottom-sheet-add-debt/spec.md)
**Input**: Feature specification from `/specs/[0005-create-bottom-sheet-add-debt]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement a bottom sheet component for adding new debts, featuring a form with fields for debt name (with auto-complete), total value (currency input), monthly interest rate (percentage input), a checkbox to skip interest rate, and due day selection. The bottom sheet must follow mobile-first design principles, using Radix UI for accessibility and animations, and ensure all required fields are validated before enabling the save button.

## Technical Context

**Language/Version**: TypeScript with React 18  
**Primary Dependencies**: React, Vite, TailwindCSS v4, Radix UI, TanStack Router, Zustand, Lucide React  
**Storage**: Zustand store for state management  
**Testing**: Manual testing for now, with potential for unit tests later  
**Target Platform**: Web (mobile-first responsive)  
**Project Type**: Web application (React SPA)  
**Performance Goals**: Form rendering and validation under 100ms  
**Constraints**: Mobile-first, bottom-heavy design, WCAG 2.1 accessibility  
**Scale/Scope**: Single bottom sheet component with form validation  
**Routing**: TanStack Router  
**Icons**: Lucide React  
**Accessibility (A11y)**: Focus on WCAG 2.1 (Screen readers, keyboard navigation, contrast).  
**Design Pattern**: Mobile-first, Clean, "Bottom-heavy" (actions within thumb reach).

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] Feature aligns with project stack (React + Vite + TS + Tailwind + Radix UI).
- [x] No violations in complexity or scope.

## Project Structure

### Documentation (this feature)

```text
specs/0005-create-bottom-sheet-add-debt/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Existing spec
└── imgs/                # Wireframe images if any
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Existing
│   │   ├── CurrencyInput.tsx   # Existing
│   │   ├── Input.tsx           # Existing
│   │   ├── Sheet.tsx           # Existing
│   │   ├── Select.tsx          # To be created
│   │   ├── Checkbox.tsx        # To be created
│   │   └── AutoCompleteInput.tsx # To be created
│   └── AddDebtBottomSheet.tsx # New component
├── store/
│   └── useStore.ts             # Update for debts
└── api/
    └── debts.ts                # Update API for saving debts
```

**Structure Decision**: Following the existing project structure, new UI components in src/components/ui/, main component in src/components/, updates to store and API.

### BEHAVIOR & TRIGGERS

- **Trigger**: Opened from the third screen (likely onboarding-step2 or similar).
- **Initial State**: Hidden, animates slide-up on open.
- **Transitions**: Animate slide-up on open, slide-down on close. Focus trap inside modal.

### VISUAL & SEMANTIC SPECIFICATION

Follow the hierarchy below for implementation:

**[Tag: Div (Overlay/Backdrop)]** (fixed inset-0 bg-black/60 z-40 flex justify-center items-end backdrop-blur-sm | a11y: aria-hidden="true")  
|  
+-- **[Tag: Section (Modal Container)]** (w-full max-w-md bg-white rounded-t-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh] animate-slide-up | a11y: role="dialog", aria-modal="true", aria-labelledby="modal-title")  
|  
+-- 1. **[Tag: Header / Handle]** (w-full flex flex-col items-center pt-3 pb-2 px-6 bg-white shrink-0)  
| |-- [Div: Drag Handle] (w-12 h-1.5 bg-gray-200 rounded-full mb-4)  
| |  
| |-- [Div: Title Row] (w-full flex justify-between items-center)  
| |-- [H2: Title] (text-xl font-bold text-slate-900 | a11y: id="modal-title")  
| | content="Nova Pendência"  
| |  
| |-- [Button: Close] (p-2 -mr-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors | a11y: aria-label="Fechar janela", type="button")  
| |-- [Icon: X / Close] (w-6 h-6)  
|  
+-- 2. **[Tag: Form (Scrollable Content)]** (flex-1 overflow-y-auto px-6 pt-2 pb-6 space-y-5)  
| |  
| |-- [Field Group: Name]  
| | |-- [Label] (block text-sm font-semibold text-slate-900 mb-1.5 | a11y: htmlFor="input-name")  
| | | content="Nome da conta ou dívida"  
| | |-- [Input: AutoComplete] (w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all | a11y: id="input-name", type="text", placeholder="Ex: Nubank, Aluguel, Empréstimo...", required)  
| |  
| |-- [Field Group: Value]  
| | |-- [Label] (block text-sm font-semibold text-slate-900 mb-1.5 | a11y: htmlFor="input-value")  
| | | content="Valor total da dívida"  
| | |-- [Input: Currency] (w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-lg text-slate-500 font-medium focus:text-slate-900 focus:ring-2 focus:ring-blue-600 outline-none | a11y: id="input-value", type="text", inputmode="numeric", placeholder="R$ 0,00")  
| |  
| |-- [Field Group: Interest]  
| | |-- [Label] (block text-sm font-semibold text-slate-900 mb-1.5 | a11y: htmlFor="input-interest")  
| | | content="Taxa de juros mensais (%)"  
| | |-- [Input: Number] (w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 outline-none mb-3 | a11y: id="input-interest", type="number", placeholder="Ex: 2.5")  
| | |  
| | |-- [Checkbox Container] (flex items-start gap-3)  
| | |-- [Input: Checkbox] (w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600 mt-0.5 | a11y: id="check-unknown-interest", type="checkbox")  
| | |-- [Div: Text Wrapper]  
| | |-- [Label] (text-sm font-semibold text-slate-700 block | a11y: htmlFor="check-unknown-interest")  
| | | content="Não sei a taxa de juros"  
| | |-- [P: Helper Text] (text-xs text-slate-500 mt-1 italic leading-tight)  
| | | content="Sem problemas, usaremos uma estimativa de mercado."  
| |  
| |-- [Field Group: Due Date]  
| |-- [Label] (block text-sm font-semibold text-slate-900 mb-1.5 | a11y: htmlFor="select-date")  
| | content="Dia do vencimento"  
| |-- [Div: Select Wrapper] (relative)  
| |-- [Select] (w-full appearance-none bg-white border border-blue-600 rounded-lg px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium | a11y: id="select-date")  
| | option selected="Dia 10"  
| |-- [Icon: Chevron Down] (absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 pointer-events-none)  
|  
+-- 3. **[Tag: Footer]** (p-6 bg-white border-t border-slate-50 mt-auto shrink-0)  
|-- [Button: Submit] (w-full bg-slate-200 text-slate-400 font-semibold py-3.5 rounded-lg cursor-not-allowed transition-colors | a11y: type="submit", disabled, aria-disabled="true")  
| content="Salvar esta conta"

## ACCESSIBILITY (A11Y) CHECKLIST

- [ ] **Interactive Elements**: `aria-label` or `aria-labelledby` present on all buttons and links.
- [ ] **Focus Management**: Focus trap implemented for Modals/Drawers; focus visible for keyboard users.
- [ ] **Semantics**: Use of correct HTML5 tags (`main`, `nav`, `header`, `section`, `button`).
- [ ] **Description**: `aria-describedby` linking inputs to helper texts or error messages.
- [ ] **Keyboard Navigation**: All interactive elements reachable via `Tab` and activatable via `Enter/Space`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations.

## Tasks

1. **Verify existing UI components**: Check src/components/ui/ for existing components (Button, Input, Sheet, CurrencyInput exist; need to create Select, Checkbox, AutoCompleteInput).

2. **Create Select component**: In src/components/ui/Select.tsx, implement a select dropdown using Radix UI Select or custom with proper styling and accessibility.

3. **Create Checkbox component**: In src/components/ui/Checkbox.tsx, implement a checkbox using Radix UI Checkbox with custom styling.

4. **Create AutoCompleteInput component**: In src/components/ui/AutoCompleteInput.tsx, implement an input with auto-complete suggestions based on existing debt names, using datalist or a library like downshift.

5. **Create PercentageInput component**: In src/components/ui/PercentageInput.tsx, implement a masked input for percentage with '%' symbol.

6. **Create AddDebtBottomSheet component**: In src/components/AddDebtBottomSheet.tsx, build the bottom sheet using Sheet component, include form with all fields, validation logic to enable/disable save button, handle checkbox toggle to disable interest field.

7. **Implement form validation**: Use React Hook Form or Zustand for state management, validate required fields, enable save button only when all required are filled.

8. **Handle due day select options**: Dynamically generate options based on current month days (1-31, adjust for Feb, etc.).

9. **Integrate with store and API**: Update useStore.ts to handle debts, update debts.ts API to save new debt.

10. **Add animations and responsiveness**: Ensure slide-up animation, mobile-first design, focus management.

11. **Test the component**: Manually test opening, filling form, validation, saving, closing.

12. **Update routing if needed**: Ensure the bottom sheet is triggered from the appropriate route (e.g., onboarding-step2).
