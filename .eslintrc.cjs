module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  'settings': {
    'import/resolver': {
      'typescript': {
        'project': './tsconfig.json'
      }
    },
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['@typescript-eslint', 'unused-imports'],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'import/order': [
      'warn',
      {
        'groups': [
          'builtin', // Built-in imports (come from NodeJS native) go first
          'external', // <- External imports
          'internal', // <- Absolute imports
          ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
          'index', // <- index imports
          'unknown' // <- unknown
        ],
        'newlines-between': 'always',
        'alphabetize': {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          'order': 'asc',
          /* ignore case. Options: [true, false] */
          'caseInsensitive': true
        }
      }
    ],
    'unused-imports/no-unused-imports-ts': 'warn',
  }, 
}

