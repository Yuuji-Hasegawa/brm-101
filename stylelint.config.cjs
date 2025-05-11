module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'keyframes-name-pattern': null,
    'scss/at-function-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/percent-placeholder-pattern': null,
    'scss/selector-no-union-class-name': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'block-no-empty': null,
    'no-duplicate-selectors': null,
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: ['min-device-pixel-ratio'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['/xs/', '/xl/'],
      },
    ],
  },
}
