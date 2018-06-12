module.exports = {
  processors: [
    'stylelint-processor-html',
  ],
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'no-empty-source': null, // prevent errors on Vue components without the style block
    'selector-pseudo-element-colon-notation': 'single',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'include',
        'if',
        'else',
        'each',
        'for',
        'mixin',
        'content',
        'function'
      ]
    }]
  }
}
