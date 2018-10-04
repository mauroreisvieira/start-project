module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'eslint:recommended',
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue',
        'sds-rules'
    ],
    // add your custom rules here
    rules: {
        "indent": [2, 4, {"SwitchCase": 1}],
        "semi": [
            "error",
            "always"
        ],
        "one-var": [ 2, {
                "var": "always",
                "let": "always",
                "const": "consecutive"
            }
        ],
        "no-console": "off",
        "sds-rules/class-prefix": 2
    }
}
