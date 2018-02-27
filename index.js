"use strict";

module.exports = {
  'processors': [
    'stylelint-processor-styled-components'
  ],
  'extends': [
    'stylelint-order',
    'stylelint-config-standard',
    'stylelint-config-styled-components'
  ],
  rules: {
    'number-leading-zero': 'never',
    'string-quotes': 'double',
    'selector-max-id': 0,
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-property-value-blacklist': {
      '/^border/': ['none']
    },
  },
  'syntax': 'scss'
};
