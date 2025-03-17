import tpConfig from '@tiagoporto/eslint-config'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  ...tpConfig.configs.base,
  {
    files: ['**/*.html'],
    rules: { 'jsdoc/require-jsdoc': 'off' },
  },
]
