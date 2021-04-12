module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:vue/essential', 'standard', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: false,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'none',
                htmlWhitespaceSensitivity: 'ignore'
            }
        ]
    }
}
