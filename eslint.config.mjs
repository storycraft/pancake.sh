// @ts-check
import storybook from 'eslint-plugin-storybook';
import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import stylistic from '@stylistic/eslint-plugin';
import tsEslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tsEslint.config(
  globalIgnores([
    './dist/**/*',
    './.astro/**/*',
  ]),
  eslint.configs.recommended,
  tsEslint.configs.strictTypeChecked,
  prettier,
  stylistic.configs.recommended,
  {
    rules: {
      'prettier/prettier': [
        'off',
        {
          singleQuote: true,
          semi: true,
        },
      ],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: true,
          },
          overrides: {
            interface: {
              multiline: {
                delimiter: 'semi',
                requireLast: true,
              },
            },
          },
        },
      ],
    },
  },
  storybook.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          loadTypeScriptPlugins: true,
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
