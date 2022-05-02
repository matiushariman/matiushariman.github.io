module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint' /* 'testing-library', 'cypress' */],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 1,
    'arrow-body-style': [1, 'as-needed'],
    '@typescript-eslint/no-unused-vars': [2],
    'import/order': [
      2,
      {
        groups: ['external', 'internal', 'index', 'sibling', 'parent', 'type'],
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 0,
  },
  overrides: [
    // {
    //     files: ['src/**/__tests__/**/*.[jt]s?(x)', 'src/**/?(*.)+(spec|test).[jt]s?(x)'],
    //     extends: ['plugin:testing-library/react'],
    // },
    // {
    //     files: ['src/utils/testUtils.tsx'],
    //     rules: {
    //         'import/export': 0,
    //     },
    // },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
