module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': 2,
    'react/no-is-mounted': 2,
    'react/no-unknown-property': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-method',
        'lifecycle',
        'everything-else',
        'render',
      ],
      groups: { render: ['/^render.*$/'] },
    }],
  },
};
