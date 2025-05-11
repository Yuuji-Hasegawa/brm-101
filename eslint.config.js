import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintImport from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default [
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        dataLayer: false,
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: eslintImport,
      'unused-imports': unusedImports,
    },
    ignores: [
      'node_modules/',
      'dist/',
      'public/',
      'bun.lockb',
      '*.cjs',
      '*.mjs',
    ],
    rules: {
      'typescript-eslint/no-explicit-any': 'off',
    },
  },
]
