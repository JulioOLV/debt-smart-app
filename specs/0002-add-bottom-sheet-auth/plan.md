# Implementation Plan: Add Bottom Sheet Auth

**Branch**: `[0002-add-bottom-sheet-auth]` | **Date**: 21 de dezembro de 2025 | **Spec**: specs/0002-add-bottom-sheet-auth/spec.md
**Input**: Feature specification from `/specs/0002-add-bottom-sheet-auth/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement a Bottom Sheet modal for authentication on the /welcome route. The Bottom Sheet appears when the user clicks the "Começar meu plano" button, with two tabs: "Entrar" (login) and "Criar conta" (sign up). The layout must follow the wireframe description in the spec, using Tailwind CSS for styling, Radix UI for primitives, and Lucide Icons. No data persistence or validation yet, just UI layout.

## Technical Context

**Language/Version**: TypeScript with React 19.2.0  
**Primary Dependencies**: React, TanStack Router, Zustand, Tailwind CSS v4, Radix UI (@radix-ui/react-dialog, @radix-ui/react-tabs, @radix-ui/react-slot), Lucide React, Motion for animations, React Hook Form (for forms)  
**Storage**: N/A (UI only, no data persistence)  
**Testing**: TBD (will use standard React testing, possibly Vitest if configured)  
**Target Platform**: Web (mobile-first, responsive)  
**Project Type**: Web application (single project)  
**Performance Goals**: Bottom Sheet appears within 0.5 seconds after button click  
**Constraints**: Mobile-first design, "bottom-heavy" principle, responsive on screens < 768px  
**Scale/Scope**: Single feature adding a modal component to the welcome route

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

Assuming it passes as this is a standard UI feature without violations to project rules.

## Project Structure

### Documentation (this feature)

```text
specs/0002-add-bottom-sheet-auth/
├── plan.md              # This file
├── spec.md              # Provided
└── (other files as needed)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Existing
│   │   ├── Dialog.tsx          # New: Bottom Sheet wrapper using Radix Dialog
│   │   ├── Tabs.tsx            # New: Segmented control using Radix Tabs
│   │   ├── Input.tsx           # New: Form input component
│   │   └── Sheet.tsx           # New: Bottom Sheet specific component
│   └── AuthBottomSheet.tsx     # New: Main component for the auth modal
├── routes/
│   └── welcome.tsx             # Modify: Add state and trigger for Bottom Sheet
└── store/
    └── useStore.ts             # Possibly modify if needed for modal state
```

**Structure Decision**: Using the existing src/ structure. New UI components in src/components/ui following Radix UI patterns. Main auth component in src/components/. Route modification in src/routes/.

## Complexity Tracking

No violations; this is a straightforward UI addition without complex logic.

## Implementation Tasks

1. **Create UI Components**:
   - Create `src/components/ui/Input.tsx`: A reusable input component with label, icon support, and Tailwind styling, following Radix UI patterns.
   - Create `src/components/ui/Tabs.tsx`: A segmented control component using `@radix-ui/react-tabs`, styled with Tailwind to match the wireframe (bg-slate-100, rounded-xl, etc.).
   - Create `src/components/ui/Dialog.tsx`: A dialog component using `@radix-ui/react-dialog`, configured for bottom sheet behavior (positioned at bottom, full width on mobile).
   - Create `src/components/ui/Sheet.tsx`: A specific bottom sheet wrapper around Dialog, with rounded-t-[32px], p-6, and slide-up animation using Motion.

2. **Create AuthBottomSheet Component**:
   - Create `src/components/AuthBottomSheet.tsx`: The main component containing the header, tabs, social login, divider, form fields, and buttons.
   - Implement state for active tab ("Entrar" or "Criar conta") using React state.
   - Add close button with X icon from Lucide.
   - For "Entrar" tab: Include social login button (placeholder for Google), divider, email and password inputs, "Entrar" button.
   - For "Criar conta" tab: Include social login, divider, name, email, password inputs (with helper text), "Criar conta" button, legal disclaimer.
   - Use React Hook Form for form handling (no validation yet).
   - Ensure mobile-first responsive design.

3. **Modify Welcome Route**:
   - Update `src/routes/welcome.tsx`: Add state to control Bottom Sheet visibility (e.g., using useState or Zustand).
   - Add click handler to "Começar meu plano" button to open the Bottom Sheet.
   - Render the AuthBottomSheet component conditionally based on state.
   - Ensure the page container has relative positioning, h-screen, overflow-hidden as per wireframe.

4. **Integrate and Test**:
   - Import and use the new components in the welcome route.
   - Test opening/closing the Bottom Sheet, switching tabs, and layout on mobile/desktop.
   - Run build/tests to ensure no errors.
   - Validate against wireframe: animations, styling, responsiveness.
