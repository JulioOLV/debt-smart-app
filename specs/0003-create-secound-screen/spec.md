# Feature Specification: Create Second Screen (Onboarding Step 1)

**Feature Branch**: `[0003-create-second-screen]`  
**Created**: 21 de dezembro de 2025  
**Status**: Draft  
**Input**: User description: "Crie o documento de spec para a criação da segunda tela do nosso app. Para isso, utilize o template '.specify/templates/spec-ui-template.md' como base para criar o documento. Siga estas especificações: [detalhes fornecidos]"

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Insert Monthly Income (Priority: P1)

The user accesses the second screen of the onboarding and is prompted to enter their monthly net income. Upon entering a valid value, the second input for essential expenses appears with a fade-in-top animation.

**Why this priority**: This is the first step in gathering user financial data, essential for the app's core functionality.

**Independent Test**: Manually enter a value in the income input and verify the essential expenses input appears with animation.

**Acceptance Scenarios**:

1. **Given** the user is on the second screen, **When** they enter a valid monthly income, **Then** the essential expenses input appears with fade-in-top animation.
2. **Given** the essential expenses input is visible, **When** the user clears the income input, **Then** the essential expenses input remains visible.

---

### User Story 2 - Insert Essential Expenses and Enable Next Button (Priority: P1)

After entering income, the user enters essential expenses, and the "Next" button becomes enabled only when both inputs have values.

**Why this priority**: Ensures data completeness before proceeding, preventing incomplete onboarding.

**Independent Test**: Enter values in both inputs and verify the button enables; clear one input and verify it disables.

**Acceptance Scenarios**:

1. **Given** both inputs are empty, **When** the user enters values in both, **Then** the "Next" button becomes enabled.
2. **Given** the button is enabled, **When** the user clears one input, **Then** the button becomes disabled.

---

### Edge Cases

- What happens when the user enters invalid characters in the inputs (e.g., letters)? The inputs should only accept numbers and apply currency mask.
- How does the system handle very large numbers? The mask should format accordingly, but no specific limits mentioned.
- What if the user navigates back and forth? The state should persist as per the requirements.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The system MUST display two inputs: one for monthly net income, and one for essential expenses that appears only after income is entered.
- **FR-002**: The system MUST apply a currency mask (pt-br) to both inputs, accepting only numbers, prioritizing numeric keyboard on mobile.
- **FR-003**: The system MUST show the essential expenses input with a fade-in-top animation when income is provided.
- **FR-004**: The system MUST keep the essential expenses input visible even if income is cleared after being entered.
- **FR-005**: The system MUST disable the "Next" button until both inputs have values.
- **FR-006**: The system MUST use the specified visual hierarchy and styles from the wireframe.

---

## Technical & Visual Specification (UI Spec)

### 1. TECHNICAL CONTEXT

- **Stack**: React + Vite + TailwindCSS v4 + Radix UI.
- **Routing**: TanStack Router.
- **Icons**: Lucide React.
- **Accessibility (A11y)**: Focus on WCAG 2.1 (Screen readers, keyboard navigation, contrast).
- **Design Pattern**: Mobile-first, Clean, "Bottom-heavy" (actions within thumb reach).

### 2. BEHAVIOR & TRIGGERS

- **Trigger**: Navigation to the second screen route.
- **Initial State**: Income input visible, essential expenses input hidden, button disabled.
- **Transitions**: Fade-in-top animation for essential expenses input when income has a value.

### 3. VISUAL & SEMANTIC SPECIFICATION

Follow the hierarchy below for implementation:

**[Page Container]** (h-screen, w-full, flex flex-col, bg-slate-50/30)
|
+-- **[Header Navigation]** (w-full, px-4, pt-6, pb-2, flex justify-between items-center)
|      |-- **[Back Button]** (flex items-center, gap-1, text-slate-600)
|      |      |-- Icon: `ArrowLeft` (w-5, h-5)
|      |      |-- Text: "Voltar" (text-sm, font-medium)
|      |-- **[Step Indicator]** (text-slate-400, text-sm, font-medium)
|             |-- Text: "Passo 1 de 3"
|
+-- **[Progress Bar Container]** (w-full, px-4, mt-2)
|      |-- **[Track]** (h-1.5, w-full, bg-slate-200, rounded-full, overflow-hidden)
|             |-- **[Fill]** (h-full, w-[33%], bg-blue-600)
|
+-- **[Main Content Section]** (flex-1, px-8, pt-12, space-y-8)
|      |
|      +-- **[Typography Group]** (space-y-4)
|      |      |-- H1 "Primeiro, vamos entender seu cenário real." (text-3xl, font-bold, text-slate-900, leading-tight)
|      |      |-- P Descritivo (text-slate-500, text-base, leading-relaxed)
|      |           Text: "Para criar uma estratégia que funcione, precisamos saber quanto entra e quanto custa o seu 'básico' para viver."
|      |
|      +-- **[Form Group]** (space-y-6)
|             |
|             +-- **[Input Field: Income]** (space-y-2)
|             |      |-- Label: "Qual sua renda mensal líquida?" (font-semibold, text-slate-900)
|             |      |-- Input: (w-full, h-16, px-4, rounded-2xl, border-2, border-blue-600, bg-white, text-2xl, font-medium, text-slate-900)
|             |      |      |-- Value: "R$ 11.000,00"
|             |      |-- Helper: "O valor que cai na conta (Salário, extras, bicos...)" (text-sm, text-slate-400)
|             |
|             +-- **[Input Field: Essential]** (space-y-2)
|             |      |-- Label: "Quanto você gasta com o essencial?" (font-semibold, text-slate-900)
|             |      |-- Input: (w-full, h-16, px-4, rounded-2xl, border, border-slate-200, bg-slate-100/50, text-2xl, font-medium, text-slate-300)
|             |             |-- Placeholder: "R$ 0,00"
|             |
|             +-- **[Info Alert Box]** (flex, gap-3, p-4, rounded-2xl, bg-blue-50)
|                    |-- Icon: `Info` (w-5, h-5, text-blue-500, flex-shrink-0)
|                    |-- Text: "Considere apenas o indispensável para sobreviver..." (text-sm, text-blue-800, leading-snug)
|
+-- **[Footer Action]** (p-6, bg-white, border-t, border-slate-100)
       |-- **[Primary Button: Disabled]** (w-full, h-14, rounded-2xl, bg-slate-200, text-slate-400, font-semibold, text-base)
              |-- Text: "Próximo: Listar pendências"

### 4. ACCESSIBILITY (A11Y) CHECKLIST

- [ ] **Interactive Elements**: `aria-label` or `aria-labelledby` present on all buttons and links.
- [ ] **Focus Management**: Focus trap implemented for Modals/Drawers; focus visible for keyboard users.
- [ ] **Semantics**: Use of correct HTML5 tags (`main`, `nav`, `header`, `section`, `button`).
- [ ] **Description**: `aria-describedby` linking inputs to helper texts or error messages.
- [ ] **Keyboard Navigation**: All interactive elements reachable via `Tab` and activatable via `Enter/Space`.

---

## Data & Success Metrics

### Key Entities _(include if feature involves data)_

- **User Income**: Monthly net income value.
- **Essential Expenses**: Monthly essential expenses value.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can enter income and see the essential expenses input appear with animation.
- **SC-002**: The "Next" button enables only when both inputs have values.
- **SC-003**: Inputs accept only numeric input with pt-br currency mask applied during typing.