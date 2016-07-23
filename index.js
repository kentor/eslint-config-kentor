module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
  },
  'rules': {
    // eslint:recommended overrides
    'comma-dangle': [2, 'always-multiline'],
    'no-console': 0,
    'no-unused-vars': [2, { 'args': 'none' }],

    // Best Practices
    'consistent-return': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'dot-notation': [2, { 'allowKeywords': true }],
    'eqeqeq': 2,
    'no-case-declarations': 2,
    'no-multi-spaces': 2,

    // Stylistic Issues
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'camelcase': 2,
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': 0,
    'computed-property-spacing': [2, 'never'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 0,
    'func-style': 0,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': 0,
    'max-depth': 0,
    'max-len': [2, 80],
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'max-statements-per-line': 0,
    'new-cap': 0,
    'new-parens': 0,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 2,
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': 0,
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': [2, 'never'],
    'quote-props': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'require-jsdoc': 0,
    'semi': [2, 'always'],
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'spaced-comment': [2, 'always'],
    'wrap-regex': 0,

    // ECMAScript 6
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'constructor-super': 2,
    'generator-star-spacing': [2, { 'before': true, 'after': false }],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'object-shorthand': [2, 'always'],
    'prefer-const': 2,
    'prefer-spread': 2,
    'template-curly-spacing': 2,
  },
};
