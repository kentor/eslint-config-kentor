module.exports = {
  'ecmaFeatures': {
    'jsx': true,
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/jsx-closing-bracket-location': [2, { 'location': 'tag-aligned' }],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-unknown-property': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/wrap-multilines': 2,
  },
};
