# Implementation Plan: Create Second Screen (Onboarding Step 1)

**Branch**: `[0003-create-second-screen]` | **Date**: 21 de dezembro de 2025 | **Spec**: [specs/0003-create-secound-screen/spec.md](specs/0003-create-secound-screen/spec.md)
**Input**: Feature specification from `specs/0003-create-secound-screen/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

The second screen of the onboarding process where users enter their monthly net income, triggering the appearance of the essential expenses input with fade-in-top animation, and enabling the "Next" button only when both inputs have values. It follows the specified visual hierarchy, uses currency masks, and ensures mobile-first design.

## Technical Context

**Language/Version**: TypeScript (React 18)  
**Primary Dependencies**: TanStack Router, TanStack Query, Zustand, Tailwind CSS v4, Radix UI, Lucide Icons  
**Storage**: Zustand for temporary state during onboarding  
**Testing**: NEEDS CLARIFICATION (possibly Jest or Vitest based on Vite setup)  
**Target Platform**: Web (responsive, mobile-first)  
**Project Type**: Web application (single-page app with routing)  
**Performance Goals**: NEEDS CLARIFICATION  
**Constraints**: Mobile-first, WCAG 2.1 accessibility, bottom-heavy design  
**Scale/Scope**: One screen in a 3-step onboarding flow

## Constitution Check

NEEDS CLARIFICATION

## Project Structure

### Documentation (this feature)

```text
specs/0003-create-secound-screen/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Existing spec
```

### Source Code (repository root)

```text
src/
├── routes/
│   └── onboarding-step1.tsx  # New route file for the second screen
├── components/
│   ├── OnboardingStep1.tsx   # Main component for the screen layout and logic
│   └── ui/
│       ├── CurrencyInput.tsx # New component for currency-masked inputs (if not exists)
│       ├── ProgressBar.tsx   # New component for progress bar (if not exists)
│       └── ...               # Existing ui components (Button, Input, etc.)
├── store/
│   └── useOnboardingStore.ts # New or extended store for onboarding state (income, expenses, step)
```

**Structure Decision**: Single project structure, adding new files to existing directories (routes, components, store). UI components follow Radix UI patterns in src/components/ui/.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

(No violations identified at this stage.)

## Tasks

1. **Verify existing UI components**: Check src/components/ui/ for existing components (Button, Input, Sheet, etc.) to reuse. Confirm if CurrencyInput and ProgressBar need creation.

2. **Create CurrencyInput component**: If not exists, create src/components/ui/CurrencyInput.tsx using Radix UI primitives (e.g., based on Input), adding pt-br currency mask (accept only numbers, format as R$ during typing, prioritize numeric keyboard on mobile).

3. **Create ProgressBar component**: If not exists, create src/components/ui/ProgressBar.tsx for the progress bar (track and fill based on percentage).

4. **Set up onboarding store**: Create or extend src/store/useOnboardingStore.ts with Zustand to manage state for income (number), essentialExpenses (number), and current step. Include actions to update values and navigate steps.

5. **Create new route**: Add src/routes/onboarding-step1.tsx using TanStack Router, defining the route for the second screen (e.g., /onboarding/step1).

6. **Implement OnboardingStep1 component**: Create src/components/OnboardingStep1.tsx with the full layout from the spec (header with back button and step indicator, progress bar, main content with typography, form group with inputs and alert, footer with button). Use Tailwind classes as specified.

7. **Add input logic and animations**: Implement conditional rendering for essential expenses input (show with fade-in-top animation when income > 0, using CSS transitions). Keep it visible even if income is cleared after entry.

8. **Enable/disable button logic**: Disable "Next" button until both income and essentialExpenses have values > 0. Use store state for this.

9. **Integrate navigation**: Add back button navigation (to previous screen) and next button (to next step, e.g., /onboarding/step2). Use TanStack Router for navigation.

10. **Add accessibility features**: Ensure aria-labels, focus management, semantic HTML (main, header, section), and keyboard navigation as per spec checklist.

11. **Manual testing**: Test acceptance scenarios (enter income to show essential input, enable button only when both filled, currency mask, animation).

12. **Validation and build**: Run build/tests/linters after changes. Fix any errors. Ensure no broken builds.</content>
    <parameter name="filePath">/Users/juliooliveira/Desktop/apps/debt-smart-app/debt-smart-app/specs/0003-create-secound-screen/plan.md
