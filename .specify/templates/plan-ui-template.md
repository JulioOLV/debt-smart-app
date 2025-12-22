# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: [e.g., Python 3.11, Swift 5.9, Rust 1.75 or NEEDS CLARIFICATION]  
**Primary Dependencies**: [e.g., FastAPI, UIKit, LLVM or NEEDS CLARIFICATION]  
**Storage**: [if applicable, e.g., PostgreSQL, CoreData, files or N/A]  
**Testing**: [e.g., pytest, XCTest, cargo test or NEEDS CLARIFICATION]  
**Target Platform**: [e.g., Linux server, iOS 15+, WASM or NEEDS CLARIFICATION]
**Project Type**: [single/web/mobile - determines source structure]  
**Performance Goals**: [domain-specific, e.g., 1000 req/s, 10k lines/sec, 60 fps or NEEDS CLARIFICATION]  
**Constraints**: [domain-specific, e.g., <200ms p95, <100MB memory, offline-capable or NEEDS CLARIFICATION]  
**Scale/Scope**: [domain-specific, e.g., 10k users, 1M LOC, 50 screens or NEEDS CLARIFICATION]
**Routing**: [Specify Router, e.g., TanStack Router]
**Icons**: [Specify Icon Library, e.g., Lucide React]
**Accessibility (A11y)**: Focus on WCAG 2.1 (Screen readers, keyboard navigation, contrast).
**Design Pattern**: Mobile-first, Clean, "Bottom-heavy" (actions within thumb reach).

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

[Gates determined based on constitution file]

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

### BEHAVIOR & TRIGGERS

- **Trigger**: [What triggers this component/view?]
- **Initial State**: [Ex: Hidden/Visible/Loading]
- **Transitions**: [Ex: Animate slide-up, fade-in, spring]

### VISUAL & SEMANTIC SPECIFICATION

Follow the hierarchy below for implementation:

**[Tag: Page/Root Container]** (tailwind classes | a11y: roles/aria)
|
+-- **[Tag: Child/Section]** (tailwind classes | a11y: labels/describedby)
| |
| +-- **[Tag: Component]** (visual identity | state: focus/hover/disabled)
| | |-- Icon: `IconName` (size, color)
| | |-- Text: "Label Content" (typography tokens)
|
+-- **[Tag: Overlay/Modal]** (classes | a11y: aria-modal="true")

### ACCESSIBILITY (A11Y) CHECKLIST

- [ ] **Interactive Elements**: `aria-label` or `aria-labelledby` present on all buttons and links.
- [ ] **Focus Management**: Focus trap implemented for Modals/Drawers; focus visible for keyboard users.
- [ ] **Semantics**: Use of correct HTML5 tags (`main`, `nav`, `header`, `section`, `button`).
- [ ] **Description**: `aria-describedby` linking inputs to helper texts or error messages.
- [ ] **Keyboard Navigation**: All interactive elements reachable via `Tab` and activatable via `Enter/Space`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |

## Tasks

1. **Verify existing UI components**: Check src/components/ui/ for existing components (Button, Input, Sheet, etc.) to reuse. Confirm if CurrencyInput and ProgressBar need creation.
