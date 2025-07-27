module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:security/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'security',
    'node',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    // TypeScript相关规则
    '@typescript-eslint/no-unused-vars': [
      'error',
      { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/prefer-const': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',

    // 通用JavaScript规则
    'no-console': 'off', // 服务器端允许console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-expressions': 'error',
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'es5'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],

    // Import相关规则
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-cycle': 'error',

    // Node.js相关规则
    'node/no-unsupported-features/es-syntax': 'off', // TypeScript处理
    'node/no-missing-import': 'off', // TypeScript处理
    'node/no-unpublished-import': 'off',

    // 安全相关规则
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-unsafe-regex': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'warn',
    'security/detect-non-literal-require': 'warn',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'error',

    // 代码质量规则
    'complexity': ['warn', 15],
    'max-depth': ['warn', 4],
    'max-lines': ['warn', 400],
    'max-lines-per-function': ['warn', 80],
    'max-params': ['warn', 5],
    'max-nested-callbacks': ['warn', 3],

    // Express.js最佳实践
    'no-process-exit': 'error',
    'no-sync': 'warn',
    'handle-callback-err': 'error',

    // 异步处理
    'require-await': 'error',
    'no-return-await': 'error',
    'prefer-promise-reject-errors': 'error',

    // 错误处理
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',

    // 性能相关
    'no-await-in-loop': 'warn',
    'no-constant-condition': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.{ts,js}', '**/*.spec.{ts,js}'],
      env: {
        jest: true,
        'vitest-globals/env': true,
      },
      rules: {
        // 测试文件中允许更宽松的规则
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'max-lines-per-function': 'off',
        'max-lines': 'off',
        'security/detect-object-injection': 'off',
        'security/detect-non-literal-fs-filename': 'off',
      },
    },
    {
      files: ['scripts/**/*.{ts,js}'],
      rules: {
        // 脚本文件允许console和process.exit
        'no-console': 'off',
        'no-process-exit': 'off',
      },
    },
  ],
};
