module.exports = {
  extends: [require.resolve('js2me-eslint-config')],
  rules: {
    'unicorn/prevent-abbreviations': 'off',
    'sonarjs/no-redundant-optional': 'off',
    'sonarjs/deprecation': 'off',
    'import/default': 'off',
    'sonarjs/os-command': 'off'
  },
};
