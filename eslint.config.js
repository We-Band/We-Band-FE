import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Specify TypeScript files
  { files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'] },

  // Global settings
  { languageOptions: { globals: globals.browser } },

  // Base JavaScript configuration
  pluginJs.configs.recommended,

  // React configuration
  pluginReact.configs.flat.recommended,

  // TypeScript configuration
  {
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: './tsconfig.json',  // Point to your tsconfig.json
        tsconfigRootDir: __dirname, // Ensure correct root directory
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      prettier: pluginPrettier,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Customize this rule as needed
      '@typescript-eslint/no-unused-vars': 'warn', // Example of a rule
      '@typescript-eslint/no-explicit-any': 'off', // Optional, allows `any` type

      // React rules
      'react/react-in-jsx-scope': 'off', // With React 17+ no need for this anymore
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

      // Prettier integration
      'prettier/prettier': 'error', // Force Prettier formatting
    },
  },

  // Disable conflicting rules from ESLint and Prettier
  prettier,
];
