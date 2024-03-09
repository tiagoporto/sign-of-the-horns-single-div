const jsConfig = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'standard',
    'prettier',
  ],
  extendsMD: ['eslint:recommended', 'standard', 'prettier'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-nested-ternary': 'error',
    'unicorn/filename-case': 'off',
  },
}

module.exports = {
  ignorePatterns: ['dist'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'promise',
    'unicorn',
    'import',
    'eslint-comments',
    'json',
    'markdown',
  ],
  overrides: [
    // Markdown files
    {
      files: ['**/*.md'],
      extends: ['plugin:markdown/recommended'],
      processor: 'markdown/markdown',
    },
    // .json in Markdown files
    {
      files: ['**/*.md/*.json'],
      extends: ['plugin:json/recommended'],
      rules: {
        'json/*': ['error', { allowComments: true }],
      },
    },
    // .js files
    {
      files: ['*.{js,mjs,cjs}'],
      excludedFiles: ['**/*.{md}/*.{js,mjs,javascript}', '**/*.test.js'],
      extends: [...jsConfig.extends],
      rules: { ...jsConfig.rules },
    },
    // .js in Markdown files
    {
      files: ['**/*.md/*.{js,javascript}'],
      extends: [...jsConfig.extendsMD],
      rules: { ...jsConfig.rulesMD },
    },
  ],
}
