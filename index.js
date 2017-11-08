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
    'ecmaVersion': 2017,
    'sourceType': 'module',
  },
  'plugins': [
    'prettier',
    'sort-requires',
  ],
  'rules': {
    // eslint:recommended overrides
    'no-console': 0, // node apps will log stuff
    'no-func-assign': 0, // allow poor man's decorators
    'no-unused-vars': [2, { argsIgnorePattern: '^_', ignoreRestSiblings: true }],

    // Best Practices
    'consistent-return': 2,
    'dot-notation': [2, { allowKeywords: true }],
    'eqeqeq': [2, 'always', { null: 'ignore' }],
    'no-case-declarations': 2,

    // Stylistic Issues
    'camelcase': [2, { properties: 'never' }],
    'func-name-matching': 2,
    'linebreak-style': [2, 'unix'],
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-negated-condition': 2,
    'no-new-object': 2,
    'no-unneeded-ternary': 2,
    'no-var': 2,
    'one-var': [2, 'never'],
    'spaced-comment': [2, 'always'],

    // ECMAScript 6
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'object-shorthand': [2, 'always'],
    'prefer-const': 2,
    'prefer-spread': 2,

    // Prettier
    'prettier/prettier': 2,

    // Sort Requires
    'sort-requires/sort-requires': 2,
  },
};
