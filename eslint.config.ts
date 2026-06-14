import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',

      'vue/html-self-closing': 'error',

      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ],
    },
  },
]
