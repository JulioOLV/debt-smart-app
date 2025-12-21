import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 1. Ignorar arquivos globais (substituto do .eslintignore)
  { ignores: ['dist', 'coverage', 'node_modules', '*.config.js'] },

  // 2. Configurações Base (JS + TS Recomendados)
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Configuração específica para React e Hooks
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // Detecta a versão do React automaticamente
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // Regras recomendadas manuais (já que alguns plugins ainda estão migrando para Flat Config total)
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // --- REGRAS CUSTOMIZADAS DE SÊNIOR ---

      // React 17+ não precisa importar React em escopo
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Usamos TS, não precisamos de PropTypes

      // Hooks: Essencial para evitar stale closures
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Variáveis não usadas: Warn em vez de Error melhora a DX durante debugging
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      // Console: Warn em dev, mas idealmente bloqueado em PRs (pode ajustar para error)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // 4. Desativa regras de formatação que conflitam com o Prettier
  prettierConfig,
);
