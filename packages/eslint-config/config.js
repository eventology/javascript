const rules = {
  'no-useless-constructor': 1,
  'no-unused-vars': 1,
  'prettier/prettier': ['error', {
    'trailingComma': 'es5',
    'arrowParens': 'always',
    'singleQuote': true
  }],
  'prefer-const': 2,
  'no-const-assign': 2,
  'no-var': 2,
  'object-shorthand': 2,
  'array-callback-return': 2,
  'prefer-destructuring': 2,
  'no-useless-escape': 2,
  'no-eval': 2,
  'no-loop-func': 2,
  'no-param-reassign': 2,
  'prefer-spread': 2,
  'prefer-arrow-callback': 2,
  'arrow-parens': 2,
  'arrow-body-style': 2,
  // 'no-confusing-arrow': 2,
  'no-dupe-class-members': 2,
  'import/no-duplicates': 2,
  'import/first': 2,
  'no-iterator': 1,
  'dot-notation': 2,
  'no-multi-assign': 2,
  'no-plusplus': 1,
  'eqeqeq': 1,
  'no-case-declarations': 1,
  'no-nested-ternary': 2,
  'no-unneeded-ternary': 2,
  // 'no-mixed-operators': 2,
  'nonblock-statement-body-position': 2,
  'no-else-return': 2,
  'camelcase': 2,
};

const reactRules = {
  'react/no-string-refs': 2,
  'react/require-render-return': 2,
  'react/jsx-no-bind': 1,
  'react/boolean-prop-naming': 2,
  'react/jsx-boolean-value': 2,
  'react/no-did-mount-set-state': 2,
  'react/no-multi-comp': 2,
  'react/no-redundant-should-component-update': 2,
  'react/no-typos': 2,
  'react/no-unescaped-entities': 2,
  'react/no-unused-prop-types': 2,
  'react/no-unused-state': 2,
  'react/no-will-update-set-state': 2,
  'react/prefer-es6-class': 2,
  'react/require-optimization': 1,
  'react/self-closing-comp': 2,
  'react/sort-prop-types': 2,
  'react/jsx-closing-bracket-location': [
    2,
    'tag-aligned'
  ],
  'react/jsx-curly-spacing': 2,
  'react/jsx-equals-spacing': 2,
  // 'react/jsx-handler-names': 2,
  'react/jsx-indent': [2, 2],
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-pascal-case': 2,
  'react/jsx-sort-props': 2,
  'react/jsx-uses-react': 1,
  'react/jsx-uses-vars': 1
};

const reactNativeRules = {
  'react-native/split-platform-components': 1,
  'react-native/no-color-literals': 2,
};

module.exports = {
  plugins: [
    'prettier',
    'eslint-plugin-flowtype',
    'react',
    'react-native',
    'import'
  ],
  // env: {
  //   'es6': true
  // }
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  rules: {
    ...rules,
    ...reactRules,
    ...reactNativeRules
  }
};
