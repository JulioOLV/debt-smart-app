# Feature Specification: Create Second Step Screen

**Feature Branch**: `[0004-create-second-step-screen]`  
**Created**: 22 de dezembro de 2025  
**Status**: Draft  
**Input**: User description: "Crie o documento de spec para a criação da terceira tela do nosso app. Para isso, utilize o template '.specify/templates/spec-template.md' como base para criar o documento. Siga estas especificações: - Deve ter uma navbar de navegação para orientar os users - No navbar deve haver um button icon para que o usuário retorne para o step anterior - No navbar deve haver o step Count onde deve estar informando o usuário que o mesmo esta no step 2 - No navbar logo abaixo vai haver um progress bar que indica a progressão do usuário durante o percurso - Deve haver um titulo com a mensagem "Vamos colocar tudo no papel" - Logo a baixo do titulo deve haver um subtítulo com o seguinte texto "Liste todas as suas pendências. Não se assuste com o total agora; o objetivo é organizar." - No centro abaixo do subtítulo deve haver uma imagem de uma caixa vazia com um + no centro da caixa - Abaixo desta imagem deve haver um texto "Comece adicionando sua primeira conta ou dívida" - Abaixo deste texto deve haver um button "+ Adicionar primeira conta" - Quando o usuário clicar neste button deve ser aberto um Bottom Sheet para que o usuário possa cadastrar a sua dívida - Não será necessário criar o bottom sheet neste momento, foque apenas na estrutura inicial da tela Caso não exista todos os componentes primitivos necessários para a criação da segunda tela, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui'. Crie este spec dentro do diretório 'specs/0004-create-secound-step-screen'. NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Navigate to Second Step Screen (Priority: P1)

The user navigates to the second step screen of the onboarding process, seeing the navigation bar with back button, step count indicating "Passo 2 de 3", and progress bar showing progression.

**Why this priority**: This is the core navigation and orientation feature for the onboarding flow, essential for user guidance.

**Independent Test**: Can be tested by navigating to the screen and verifying the navbar elements are displayed correctly.

**Acceptance Scenarios**:

1. **Given** the user is on the previous step, **When** they proceed to the next step, **Then** the second step screen loads with the navbar showing back button, "Passo 2 de 3" count, and progress bar.
2. **Given** the user is on the second step screen, **When** they click the back button, **Then** they return to the previous step.

---

### User Story 2 - View Screen Content (Priority: P1)

The user views the main content of the screen including title, subtitle, empty box image, text, and add button.

**Why this priority**: This provides the primary information and call-to-action for listing debts.

**Independent Test**: Can be tested by loading the screen and verifying all text and image elements are displayed as specified.

**Acceptance Scenarios**:

1. **Given** the user is on the second step screen, **When** the screen loads, **Then** the title "Vamos colocar tudo no papel" is displayed.
2. **Given** the user is on the second step screen, **When** the screen loads, **Then** the subtitle "Liste todas as suas pendências. Não se assuste com o total agora; o objetivo é organizar." is displayed.
3. **Given** the user is on the second step screen, **When** the screen loads, **Then** an image of an empty box with a + in the center is displayed.
4. **Given** the user is on the second step screen, **When** the screen loads, **Then** the text "Comece adicionando sua primeira conta ou dívida" is displayed.
5. **Given** the user is on the second step screen, **When** the screen loads, **Then** the button "+ Adicionar primeira conta" is displayed.

---

### User Story 3 - Add First Account (Priority: P2)

The user clicks the add button to open a bottom sheet for registering a debt.

**Why this priority**: This is the primary action for the screen, allowing users to start listing debts.

**Independent Test**: Can be tested by clicking the button and verifying the bottom sheet opens (structure only, as implementation is not required yet).

**Acceptance Scenarios**:

1. **Given** the user is on the second step screen, **When** they click the "+ Adicionar primeira conta" button, **Then** a bottom sheet opens for debt registration.

---

### Edge Cases

- What happens when the user clicks the back button multiple times?
- How does the screen handle if no debts are added yet?
- What if the progress bar needs to update based on steps completed?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST display a navigation bar with a back button icon to return to the previous step.
- **FR-002**: System MUST display the step count "Step 2" in the navbar.
- **FR-003**: System MUST display a progress bar below the navbar indicating user progression.
- **FR-004**: System MUST display the title "Vamos colocar tudo no papel".
- **FR-005**: System MUST display the subtitle "Liste todas as suas pendências. Não se assuste com o total agora; o objetivo é organizar.".
- **FR-006**: System MUST display an image of an empty box with a + in the center.
- **FR-007**: System MUST display the text "Comece adicionando sua primeira conta ou dívida".
- **FR-008**: System MUST display a button labeled "+ Adicionar primeira conta".
- **FR-009**: System MUST open a bottom sheet when the add button is clicked for debt registration (structure only).
- **FR-010**: If necessary UI components do not exist, they MUST be created in 'src/components/ui' directory.

### Key Entities _(include if feature involves data)_

- **Debt**: Represents a user's debt or account, with attributes like name, amount, etc. (to be defined in future specs).

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can navigate to and from the second step screen without errors.
- **SC-002**: All specified UI elements (navbar, title, subtitle, image, text, button) are displayed correctly on the screen.
- **SC-003**: The add button triggers the opening of a bottom sheet.
- **SC-004**: The screen loads within 2 seconds on standard devices.
