# Feature Specification: Add Debt Bottom Sheet

**Feature Branch**: `[0005-create-bottom-sheet-add-debt]`  
**Created**: 23 de dezembro de 2025  
**Status**: Draft  
**Input**: User description: "Crie o documento de spec para a criação do bottom sheet da terceira tela do nosso app. Para isso, utilize o template '.specify/templates/spec-template.md' como base para criar o documento. Siga estas especificações:

- O bottom sheet deve ter como titulo: 'Nova Pendência'
- Como conteúdo o bottom sheet deve ter um form com os seguintes campos:
  - Nome da conta ou dívida
    - Input que tem um auto-complete de acordo com o nome da divida/banco/etc
    - Campo obrigatório
  - Valor total da dívida
    - Input com formatação monetária
    - Aceita apenas caracteres numéricos
    - Campo obrigatório
  - Taxa de juros mensais (%)
    - Input que aceita receber apenas números e que tenha uma mascara de numero fracionado com o símbolo da porcentagem ao final '%'
    - Campo obrigatório
  - Checkbox 'Não sei a taxa de juros'
    - Se ativo, deve exibir um texto logo a baixo do checkbox com o seguinte texto 'Sem problemas, usaremos uma estimativa de mercado.'
    - Se ativo, o campo 'Taxa de juros mensais (%)' deixa de ser obrigatório e caso tenha algum dado informado o mesmo deve ser apagado e a Input do campo deve ficar desabilitada
  - Dia do vencimento
    - Um select com os dias 'Dia 1' até 'Dia 31' de acordo com o mês vigente, ou seja, em fevereiro teoricamente deveríamos ter apenas dos dias 'Dia 1' ao 'Dia 28'
    - Campo obrigatório
  - Botão com o label 'Salvar esta conta'
    - Deve ficar desabilitado até que todos os campos sejam preenchidos

Caso não exista todos os componentes primitivos necessários para a criação da segunda tela, por favor, considere que os mesmos devem ser criados dentro do diretório 'src/components/ui'.

Crie apenas este spec dentro do diretório '0005-create-bottom-sheet-add-debt'.

NÃO ASSUMA NADA, qualquer ambiguidade ou falta de informação me pergunte."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Add New Debt with Complete Information (Priority: P1)

User opens the bottom sheet from the third screen and fills in all required fields to add a new debt account.

**Why this priority**: This is the primary functionality for adding debts, essential for the app's core feature.

**Independent Test**: Can be fully tested by opening the bottom sheet, filling all fields, and verifying the debt is saved and displayed.

**Acceptance Scenarios**:

1. **Given** the bottom sheet is open with title 'Nova Pendência', **When** user enters a valid name, total value, interest rate, selects due day, and clicks 'Salvar esta conta', **Then** the debt is saved and the bottom sheet closes.
2. **Given** all required fields are filled, **When** user clicks 'Salvar esta conta', **Then** the button is enabled and action completes successfully.

---

### User Story 2 - Skip Interest Rate Information (Priority: P2)

User checks the 'Não sei a taxa de juros' checkbox when adding a debt without known interest rate.

**Why this priority**: Allows flexibility for users who don't have all debt details, improving usability.

**Independent Test**: Can be tested by checking the checkbox, verifying the interest field is disabled and cleared, and saving the debt.

**Acceptance Scenarios**:

1. **Given** the checkbox is unchecked, **When** user checks 'Não sei a taxa de juros', **Then** the text 'Sem problemas, usaremos uma estimativa de mercado.' appears below, interest field is cleared and disabled, and it becomes non-required.
2. **Given** checkbox is checked, **When** user fills other fields and saves, **Then** debt is saved with estimated interest rate.

---

### User Story 3 - Select Due Day Based on Current Month (Priority: P3)

User selects the due day from a dropdown that adjusts to the number of days in the current month.

**Why this priority**: Ensures data accuracy and prevents invalid due dates.

**Independent Test**: Can be tested by changing the system month and verifying the select options adjust accordingly.

**Acceptance Scenarios**:

1. **Given** current month is February (28 days), **When** user opens the due day select, **Then** options are 'Dia 1' to 'Dia 28'.
2. **Given** current month is January (31 days), **When** user opens the due day select, **Then** options are 'Dia 1' to 'Dia 31'.

---

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The bottom sheet MUST have the title 'Nova Pendência'.
- **FR-002**: The bottom sheet MUST contain a form with the following fields:
  - Name of account or debt: Input with auto-complete based on debt/bank/etc names, required field.
  - Total debt value: Currency-formatted input accepting only numeric characters, required field.
  - Monthly interest rate (%): Input accepting numbers with fractional mask and '%' symbol at the end, required field unless checkbox is checked.
  - Checkbox 'Não sei a taxa de juros': When checked, displays text 'Sem problemas, usaremos uma estimativa de mercado.' below, makes interest rate field non-required, clears any data in it, and disables the input.
  - Due day: Select dropdown with options 'Dia 1' to 'Dia 31' adjusted to the current month's days (e.g., 28 for February), required field.
  - Button with label 'Salvar esta conta': Disabled until all required fields are filled.
- **FR-003**: If any primitive UI components are missing (e.g., auto-complete input, currency input, masked input, select), they MUST be created in 'src/components/ui' directory.
- **FR-004**: The form MUST validate that all required fields are filled before enabling the save button.
- **FR-005**: Auto-complete for name field MUST suggest based on existing debt/bank names.

### Key Entities _(include if feature involves data)_

- **Debt**: Represents a debt account with attributes: name (string), totalValue (number), interestRate (number or null), dueDay (number), and a flag for estimated interest.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can successfully add a new debt in under 1 minute from opening the bottom sheet.
- **SC-002**: Form validation prevents saving with incomplete required fields (0% error rate for missing fields).
- **SC-003**: Auto-complete suggestions appear within 0.5 seconds of typing in the name field.
- **SC-004**: Due day select accurately reflects the current month's maximum days (100% accuracy).

### Edge Cases

- What happens when the current month changes while the bottom sheet is open? (Select should be static based on open time or dynamic?)
- How does the system handle leap years for February (29 days)?
- What if user enters non-numeric characters in numeric fields? (Should be prevented or validated)
- What if auto-complete has no matches? (Should allow free text entry)
- How to handle saving when checkbox is checked but interest field was previously filled? (Ensure clearing on check)
