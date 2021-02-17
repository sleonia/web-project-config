module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },

    extends: [
        'plugin:@typescript-eslint/recommended'
    ],

    rules: {
        'indent': ['error', 4],
        semi: 'error',
        quotes: ['error', 'single'],
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error'
    }
};
