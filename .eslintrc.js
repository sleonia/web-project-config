/* */

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },

    extends: [
        'plugin:@typescript-eslint/recommended'
    ],

    plugins: [
        'eslint-plugin-no-cyrillic-string'
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 2,
        'indent': ['error', 4, {'SwitchCase': 1}],
        semi: 'error',
        quotes: ['error', 'single'],
        'no-multi-str': 'error',
        'no-new-func': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-with': 'error',
        camelcase: ['off', { properties: 'always' }],
        'eol-last': ['warn', 'always'],
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'no-console': 'error',
        'no-magic-numbers': 'error',
        'no-cyrillic-string/no-cyrillic-string': 'error',
        'key-spacing': ['warn', {
            beforeColon: false,
            afterColon: true
        }],

        'keyword-spacing': ['warn', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        'max-lines': ['warn', {
            max: 200,
            skipBlankLines: true,
            skipComments: true
        }],

        'multiline-ternary': ['off', 'never'],
        'no-continue': 'error',
        'no-tabs': 'error',

        // http://eslint.org/docs/rules/spaced-comment
        'spaced-comment': ['warn', 'always', {
            line: {
                markers: [],
                exceptions: ['-', '+', '/']
            },
            block: {
                markers: [],
                exceptions: ['*'],
                balanced: false
            }
        }],
    }
};
